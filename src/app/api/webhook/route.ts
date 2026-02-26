import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createToken, UserTier } from "@/lib/auth";
import { resend, EMAIL_FROM } from "@/lib/resend";
import MagicLinkEmail from "@/emails/magic-link";
import WelcomeEmail from "@/emails/welcome";
import PurchaseConfirmation from "@/emails/purchase-confirmation";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

// Map Stripe price IDs to tiers
const priceTierMap: Record<string, UserTier> = {
  // Current prices ($9, $19, $29)
  price_1T4SYvGpmB7bF1IZBQ0GYsG1: "blueprint",  // $9
  price_1T5A7wGpmB7bF1IZ0H2RgnGC: "pro",         // $19
  price_1T5A80GpmB7bF1IZUAjK2uBj: "accelerator", // $29
  // Previous prices ($9, $29, $69 — keep for existing purchases)
  price_1T4SYvGpmB7bF1IZHHxDH69o: "pro",         // old $29
  price_1T4SYwGpmB7bF1IZgBpcVLWv: "accelerator", // old $69
  // Legacy prices (keep for existing purchases)
  price_1T3nLnGqBVW20cKOLOGZjtG7: "blueprint",
  price_1T3nLnGqBVW20cKOsD2PapWD: "pro",
  price_1T3nLnGqBVW20cKOVXO7lrhU: "accelerator",
  price_1T3k3rGqBVW20cKOemBKXHa3: "blueprint",
  price_1T3k3rGqBVW20cKODfKJTN1F: "pro",
  price_1T3k3sGqBVW20cKOaqN8mbyY: "accelerator",
};

const tierNames: Record<UserTier, string> = {
  free: "Free Preview",
  blueprint: "Blueprint",
  pro: "Pro",
  accelerator: "Accelerator",
};

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  // If webhook secret is configured, verify signature
  if (process.env.STRIPE_WEBHOOK_SECRET && process.env.STRIPE_WEBHOOK_SECRET !== "whsec_placeholder" && sig) {
    try {
      event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }
  } else {
    event = JSON.parse(body) as Stripe.Event;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const name = session.customer_details?.name || "";

    if (!email) {
      console.error("No email in checkout session");
      return NextResponse.json({ error: "No email" }, { status: 400 });
    }

    // Get the price ID to determine tier
    const lineItems = await getStripe().checkout.sessions.listLineItems(session.id);
    const priceId = lineItems.data[0]?.price?.id;
    const tier = priceId ? priceTierMap[priceId] : "blueprint";

    if (!tier) {
      console.error("Unknown price ID:", priceId);
      return NextResponse.json({ error: "Unknown product" }, { status: 400 });
    }

    // Generate magic link token
    const token = await createToken({
      email,
      tier,
      purchasedAt: new Date().toISOString(),
    });

    const magicLink = `${process.env.NEXT_PUBLIC_URL}/api/auth?token=${token}`;
    const amount = ((session.amount_total || 0) / 100).toFixed(2);

    console.log(`\n🎉 New purchase! Email: ${email}, Tier: ${tier}`);
    console.log(`🔗 Magic link: ${magicLink}\n`);

    // Send emails via Resend if configured
    if (resend) {
      try {
        // 1. Purchase confirmation
        await resend.emails.send({
          from: EMAIL_FROM,
          to: email,
          subject: "Your AgentAwake receipt",
          react: PurchaseConfirmation({
            name,
            tierName: tierNames[tier],
            amount,
            date: new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
          }),
        });

        // 2. Magic link email
        await resend.emails.send({
          from: EMAIL_FROM,
          to: email,
          subject: `Your AgentAwake ${tierNames[tier]} access link`,
          react: MagicLinkEmail({ magicLink, tierName: tierNames[tier] }),
        });

        // 3. Welcome email
        const accessLink = `${process.env.NEXT_PUBLIC_URL}/dashboard`;
        await resend.emails.send({
          from: EMAIL_FROM,
          to: email,
          subject: "Welcome to AgentAwake — let's build your first agent",
          react: WelcomeEmail({ name, tierName: tierNames[tier], accessLink }),
        });

        console.log(`📧 All emails sent to ${email}`);
      } catch (emailError) {
        console.error("Failed to send emails:", emailError);
        // Don't fail the webhook — purchase is still valid
      }
    }
  }

  return NextResponse.json({ received: true });
}
