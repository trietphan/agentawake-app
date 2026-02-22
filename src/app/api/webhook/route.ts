import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createToken, UserTier } from "@/lib/auth";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

// Map Stripe price IDs to tiers
const priceTierMap: Record<string, UserTier> = {
  price_1T3k3rGqBVW20cKOemBKXHa3: "blueprint",
  price_1T3k3rGqBVW20cKODfKJTN1F: "pro",
  price_1T3k3sGqBVW20cKOaqN8mbyY: "accelerator",
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

    // TODO: Send email with magic link
    // For now, log it (in production, integrate SendGrid/Resend)
    console.log(`\n🎉 New purchase! Email: ${email}, Tier: ${tier}`);
    console.log(`🔗 Magic link: ${magicLink}\n`);
  }

  return NextResponse.json({ received: true });
}
