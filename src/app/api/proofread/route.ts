import { NextRequest, NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

// Secret proofreading access — grants full accelerator access via a secret key
// URL: /api/proofread?key=<PROOFREAD_SECRET>
export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key");
  const secret = process.env.PROOFREAD_SECRET || "agentawake-proof-2026";

  if (key !== secret) {
    return NextResponse.json({ error: "Invalid key" }, { status: 403 });
  }

  const token = await createToken({
    email: "triet@agentawake.com",
    tier: "accelerator",
    purchasedAt: new Date().toISOString(),
  });

  const res = NextResponse.redirect(new URL("/guide/why-your-agent-has-amnesia", req.url));
  res.cookies.set("af_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  });

  return res;
}
