import { NextRequest, NextResponse } from "next/server";
import { createToken, UserTier } from "@/lib/auth";

// DEV ONLY: Generate a magic link for testing
// Usage: /api/magic-link?email=test@test.com&tier=pro
export async function GET(req: NextRequest) {
  // Only allow in development
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
