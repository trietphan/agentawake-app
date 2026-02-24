import { NextRequest, NextResponse } from "next/server";
import { createToken, UserTier } from "@/lib/auth";
import { resend, EMAIL_FROM } from "@/lib/resend";
import MagicLinkEmail from "@/emails/magic-link";

// POST: Send a magic link email to the user
export async function POST(req: NextRequest) {
  try {
    const { email, tier } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const userTier = (tier || "blueprint") as UserTier;

    const token = await createToken({
      email,
      tier: userTier,
      purchasedAt: new Date().toISOString(),
    });

    const magicLink = `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/auth?token=${token}`;

    const tierNames: Record<UserTier, string> = {
      free: "Free Preview",
      blueprint: "Blueprint",
      pro: "Pro",
      accelerator: "Accelerator",
    };

    // Send email via Resend if configured
    if (resend) {
      const { error } = await resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: `Your AgentForge ${tierNames[userTier]} access link`,
        react: MagicLinkEmail({ magicLink, tierName: tierNames[userTier] }),
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
      }
    } else {
      console.log(`📧 Magic link (no Resend configured): ${magicLink}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Magic link error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// GET: Dev-only magic link generator (kept for testing)
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production" && !process.env.ALLOW_DEV_LINKS) {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  const email = req.nextUrl.searchParams.get("email") || "test@agentforge.ai";
  const tier = (req.nextUrl.searchParams.get("tier") || "blueprint") as UserTier;

  const token = await createToken({
    email,
    tier,
    purchasedAt: new Date().toISOString(),
  });

  const magicLink = `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/api/auth?token=${token}`;

  return NextResponse.json({
    email,
    tier,
    magicLink,
    note: "Visit the magic link to log in with this tier",
  });
}
