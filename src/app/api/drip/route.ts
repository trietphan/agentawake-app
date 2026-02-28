import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_FROM } from "@/lib/resend";
import Drip1WelcomeEmail from "@/emails/drip-1-welcome";
import Drip2ChapterPreviewEmail from "@/emails/drip-2-chapter-preview";
import Drip3CaseStudyEmail from "@/emails/drip-3-case-study";
import Drip4MemoryPatternsEmail from "@/emails/drip-4-memory-patterns";
import Drip5SoftPitchEmail from "@/emails/drip-5-soft-pitch";

// Drip schedule:
// Day 0  → drip-1-welcome       (sent at subscribe time via /api/subscribe)
// Day 2  → drip-2-chapter-preview
// Day 5  → drip-3-case-study
// Day 8  → drip-4-memory-patterns
// Day 12 → drip-5-soft-pitch

const DRIP_CONFIG: Record<number, { subject: string; component: () => React.ReactElement }> = {
  0: {
    subject: "Welcome to AgentAwake — your free templates are ready ⚡",
    component: Drip1WelcomeEmail,
  },
  2: {
    subject: "Here's what you'll learn in Chapter 0 of AgentAwake",
    component: Drip2ChapterPreviewEmail,
  },
  5: {
    subject: "How one dev saved 3 hours/week with agent memory",
    component: Drip3CaseStudyEmail,
  },
  8: {
    subject: "3 memory patterns most people get wrong",
    component: Drip4MemoryPatternsEmail,
  },
  12: {
    subject: "Ready to go deeper? Here's what's waiting for you.",
    component: Drip5SoftPitchEmail,
  },
};

export async function POST(req: NextRequest) {
  try {
    const { email, day } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    if (typeof day !== "number" || !(day in DRIP_CONFIG)) {
      return NextResponse.json(
        { error: `Invalid day. Valid days: ${Object.keys(DRIP_CONFIG).join(", ")}` },
        { status: 400 }
      );
    }

    if (!resend) {
      console.warn("[drip] Resend not configured — email not sent");
      return NextResponse.json({ success: false, message: "Email service not configured" }, { status: 503 });
    }

    const drip = DRIP_CONFIG[day];
    console.log(`[drip] Sending day-${day} email to ${email}: "${drip.subject}"`);

    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: drip.subject,
      react: drip.component(),
    });

    console.log(`[drip] Day-${day} email sent to ${email}`);
    return NextResponse.json({ success: true, day, email });
  } catch (err) {
    console.error("[drip] Failed to send drip email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
