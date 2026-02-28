import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_FROM } from "@/lib/resend";
import SubscriberWelcomeEmail from "@/emails/subscriber-welcome";

// Drip sequence schedule (triggered by external cron — see /api/drip/cron-trigger.ts):
//
//   Day 0  → Welcome email (sent immediately below, also Day 0 in DRIP_CONFIG)
//   Day 2  → Chapter 0 preview: "Here's what you'll learn"
//   Day 5  → Case study: how a dev saved 3 hours/week with agent memory
//   Day 8  → "3 memory patterns most people get wrong"
//   Day 12 → Soft pitch for Pro ($29) and Accelerator ($69)
//
// Signup date is stored implicitly via Resend contact `created_at`.
// The daily cron reads that timestamp and calls POST /api/drip { email, day }
// for each subscriber who is exactly N days past signup.

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    console.log(`[subscribe] New signup: ${email}`);

    if (resend) {
      // 1. Send Day 0 welcome email immediately
      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: email,
          subject: "Welcome to AgentAwake — your free templates are ready ⚡",
          react: SubscriberWelcomeEmail(),
        });
        console.log(`[subscribe] Welcome email sent to ${email}`);
      } catch (emailError) {
        console.error(`[subscribe] Failed to send welcome email:`, emailError);
      }

      // 2. Add to Resend audience — created_at timestamp serves as the drip clock.
      //    The external cron (cron-trigger.ts) reads created_at to schedule drips.
      try {
        await resend.contacts.create({
          email,
          audienceId: process.env.RESEND_AUDIENCE_ID || "",
          unsubscribed: false,
        });
        console.log(`[subscribe] Contact added to audience: ${email}`);
      } catch (contactError) {
        // Audience might not be configured yet — non-fatal
        console.error(`[subscribe] Failed to add contact:`, contactError);
      }
    } else {
      console.warn(`[subscribe] Resend not configured — email not sent`);
    }

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
