import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "dev-secret");

export type UserTier = "free" | "blueprint" | "pro" | "accelerator";

export interface UserPayload {
  email: string;
  tier: UserTier;
  purchasedAt: string;
}

export async function createToken(payload: UserPayload): Promise<string> {
  return new SignJWT(payload as unknown as Record<string, unknown>)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("90d")
    .sign(secret);
}

export async function verifyToken(token: string): Promise<UserPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as UserPayload;
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<UserPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("af_token")?.value;
  if (!token) return null;
  return verifyToken(token);
}

// Tier hierarchy for access checks
const tierLevel: Record<UserTier, number> = {
  free: 0,
  blueprint: 1,
  pro: 2,
  accelerator: 3,
};

export function hasAccess(userTier: UserTier, requiredTier: UserTier): boolean {
  return tierLevel[userTier] >= tierLevel[requiredTier];
}
