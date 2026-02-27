import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_FROM } from "@/lib/resend";
import SubscriberWelcomeEmail from "@/emails/subscriber-welcome";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    console.log(`[subscribe] New signup: ${email}`);

    // Send welcome email via Resend
    if (resend) {
      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: email,
          subject: "Welcome to AgentAwake — your free templates are ready ⚡",
          react: SubscriberWelcomeEmail(),
        });
        console.log(`[subscribe] Welcome email sent to ${email}`);
      } catch (emailError) {
        // Log but don't fail the subscription if email fails
        console.error(`[subscribe] Failed to send welcome email:`, emailError);
      }

      // Also add to Resend audience/contacts for future emails
      try {
        await resend.contacts.create({
          email,
          audienceId: process.env.RESEND_AUDIENCE_ID || "",
          unsubscribed: false,
        });
        console.log(`[subscribe] Contact added to audience: ${email}`);
      } catch (contactError) {
        // Audience might not be set up yet — that's ok
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
