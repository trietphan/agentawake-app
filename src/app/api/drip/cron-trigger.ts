/**
 * cron-trigger.ts — Example: How an external cron triggers AgentAwake drip emails
 *
 * AgentAwake has no database, so drip scheduling relies on an external cron
 * (e.g. OpenClaw, GitHub Actions, or a cron service like EasyCron / Vercel Cron).
 *
 * Strategy:
 * ─────────
 * 1. Resend stores subscribers as Contacts in an Audience (RESEND_AUDIENCE_ID).
 * 2. Each contact has a `createdAt` timestamp (the signup date).
 * 3. The cron runs daily, fetches all contacts, and sends the right drip to anyone
 *    who is exactly N days past their signup date.
 *
 * Drip schedule:
 *   Day 0  → sent immediately at subscribe time (see /api/subscribe)
 *   Day 2  → drip-2-chapter-preview
 *   Day 5  → drip-3-case-study
 *   Day 8  → drip-4-memory-patterns
 *   Day 12 → drip-5-soft-pitch
 *
 * OpenClaw cron example (openclaw.json):
 * ─────────────────────────────────────
 * {
 *   "crons": [
 *     {
 *       "name": "agentawake-drip",
 *       "schedule": "0 10 * * *",   // 10:00 AM UTC daily
 *       "task": "Run AgentAwake drip sequence for eligible subscribers",
 *       "channel": "ops"
 *     }
 *   ]
 * }
 *
 * The OpenClaw agent would run triggerDripSequence() below each morning.
 *
 * GitHub Actions equivalent:
 * ─────────────────────────
 * on:
 *   schedule:
 *     - cron: '0 10 * * *'
 * jobs:
 *   drip:
 *     runs-on: ubuntu-latest
 *     steps:
 *       - run: npx ts-node src/app/api/drip/cron-trigger.ts
 *         env:
 *           RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
 *           RESEND_AUDIENCE_ID: ${{ secrets.RESEND_AUDIENCE_ID }}
 *           APP_URL: https://agentawake.com
 */

const DRIP_DAYS = [2, 5, 8, 12]; // Day 0 is sent at subscribe time
const APP_URL = process.env.APP_URL || "https://agentawake.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "";

function daysBetween(dateA: Date, dateB: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((dateB.getTime() - dateA.getTime()) / msPerDay);
}

async function triggerDripSequence() {
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    console.error("[drip-cron] Missing RESEND_API_KEY or RESEND_AUDIENCE_ID");
    process.exit(1);
  }

  // Fetch all contacts from Resend audience
  const res = await fetch(
    `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
    { headers: { Authorization: `Bearer ${RESEND_API_KEY}` } }
  );

  if (!res.ok) {
    console.error("[drip-cron] Failed to fetch contacts:", await res.text());
    process.exit(1);
  }

  const { data: contacts } = await res.json();
  const today = new Date();
  let sent = 0;
  let skipped = 0;

  for (const contact of contacts) {
    if (contact.unsubscribed) { skipped++; continue; }

    const signupDate = new Date(contact.created_at);
    const daysElapsed = daysBetween(signupDate, today);

    if (!DRIP_DAYS.includes(daysElapsed)) { skipped++; continue; }

    // Call the app's drip endpoint
    const triggerRes = await fetch(`${APP_URL}/api/drip`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: contact.email, day: daysElapsed }),
    });

    if (triggerRes.ok) {
      console.log(`[drip-cron] ✅ Day-${daysElapsed} sent to ${contact.email}`);
      sent++;
    } else {
      const err = await triggerRes.json().catch(() => ({}));
      console.error(`[drip-cron] ❌ Failed for ${contact.email} day-${daysElapsed}:`, err);
    }

    // Small delay to stay within Resend rate limits
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log(`[drip-cron] Done. Sent: ${sent}, Skipped: ${skipped}`);
}

// Run when executed directly
triggerDripSequence().catch(console.error);
