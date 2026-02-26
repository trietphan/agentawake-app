import { createToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  // Simple secret key check — only the owner should know this
  if (key !== "agentawake-preview-2026") {
    return NextResponse.json({ error: "Invalid key" }, { status: 401 });
  }

  const token = await createToken({
    email: "admin@agentawake.com",
    tier: "accelerator",
    purchasedAt: new Date().toISOString(),
  });

  const response = NextResponse.redirect(new URL("/chapters", request.url));
  response.cookies.set("af_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 90,
    path: "/",
  });

  return response;
}
