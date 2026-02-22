import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

// Magic link handler: /api/auth?token=xxx
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
  }

  // Set cookie and redirect to guide
  const res = NextResponse.redirect(new URL("/guide", req.url));
  res.cookies.set("af_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 90, // 90 days
    path: "/",
  });

  return res;
}
