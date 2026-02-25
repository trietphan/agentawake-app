/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Quiz,
  Checklist,
  Tip,
  CostCalculator,
  BeforeAfter,
  FlowDiagram,
  BrainDiagram,
  TrustSlider,
  ROICalculator,
  ArchitectureDiagram,
  AgentThinking,
} from "@/components/Interactive";
import { Callout, Analogy, Code } from "./shared";

export default function Chapter() {
  return (
    <>
      <p className="text-lg leading-relaxed mb-6">
        Right now, your agent sits there doing <strong>absolutely nothing</strong> until you type something. That's like hiring an employee and telling them "only work when I'm watching you." Let's fix that. This chapter turns your reactive chatbot into a <strong>proactive operator</strong> that works 24/7.
      </p>

      <h2>Two Ways to Make Your Agent Proactive</h2>

      <Analogy>
        <strong>Heartbeat</strong> is like your dog checking on you every 30 minutes. Walks into the room, looks around. If you're fine, wanders off. If you dropped food on the floor — ALERT! 🐕
        <br /><br />
        <strong>Cron</strong> is like an alarm clock. 6 AM: wake up. 8 AM: morning briefing. 2 AM: clean up. Exact times, specific tasks, no deviation. ⏰
      </Analogy>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">💓 Heartbeat — The Check-In</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Runs every ~30 minutes</li>
            <li>• Checks inbox, calendar, notifications</li>
            <li>• Batches multiple checks together</li>
            <li>• Stays quiet if nothing's happening</li>
            <li>• Has full conversation context</li>
            <li>• Like a watchful assistant</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">⏰ Cron — The Schedule</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Runs at exact times you set</li>
            <li>• One specific task per job</li>
            <li>• Clean, isolated session each time</li>
            <li>• Can use different AI models</li>
            <li>• No conversation context needed</li>
            <li>• Like an automated employee</li>
          </ul>
        </div>
      </div>

      <h2>When to Use Which</h2>

      <p>This is the question everyone asks, so let's make it crystal clear:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
          <div className="text-sm font-bold text-green-400">Use Heartbeat When:</div>
          <ul className="mt-2 space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Multiple checks can batch together (inbox + calendar + notifications)</li>
            <li>• You need recent conversation context</li>
            <li>• Exact timing doesn't matter (every ~30 min is fine)</li>
            <li>• You want to reduce API calls by combining periodic tasks</li>
          </ul>
        </div>
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
          <div className="text-sm font-bold text-blue-400">Use Cron When:</div>
          <ul className="mt-2 space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Exact timing matters ("every day at 6 AM sharp")</li>
            <li>• Task needs a clean, isolated session (no conversational baggage)</li>
            <li>• You want a different model for this task (e.g., cheaper model for routine work)</li>
            <li>• Output goes directly to a channel without needing main session</li>
            <li>• One-shot reminders ("remind me in 20 minutes")</li>
          </ul>
        </div>
      </div>

      <h2>Setting Up Heartbeat</h2>

      <p>The heartbeat system is controlled by a simple file called <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">HEARTBEAT.md</code>. Your agent reads this file every ~30 minutes and performs whatever checks are listed:</p>

      <Code title="HEARTBEAT.md">{`# Heartbeat Checklist

## Every Check (~30 min)
- [ ] Any urgent unread emails?
- [ ] Any mentions/DMs on Twitter?
- [ ] Any calendar events in next 2 hours?

## 2-4x Per Day
- [ ] Check project build status (CI/CD)
- [ ] Review social media engagement on recent posts

## Once Daily (morning)
- [ ] Weather forecast (human goes running)
- [ ] Market summary (if trading cron hasn't run yet)

## Rules
- Late night (11 PM - 8 AM): HEARTBEAT_OK unless truly urgent
- If nothing actionable: reply HEARTBEAT_OK (saves tokens)
- Batch updates into ONE message, don't spam
- Track last check times in memory/heartbeat-state.json`}</Code>

      <Code title="memory/heartbeat-state.json">{`{
  "lastChecks": {
    "email": "2026-02-22T14:30:00Z",
    "twitter": "2026-02-22T14:30:00Z",
    "calendar": "2026-02-22T13:00:00Z",
    "weather": "2026-02-22T08:00:00Z",
    "builds": "2026-02-22T12:00:00Z"
  }
}`}</Code>

      <h2>Your First Cron Job: The Night Shift</h2>

      <p>The single most important automation is <strong>nightly memory consolidation</strong>. Every night at 2 AM, your agent reviews the day, extracts key learnings, and updates the knowledge base. This is the glue that holds the entire three-layer brain together.</p>

      <Analogy>
        It's like having a night-shift employee who comes in after everyone leaves, organizes the day's paperwork, files important documents, throws out garbage, and leaves a clean desk for the morning crew. Every. Single. Night. Without being asked. Without being paid overtime.
      </Analogy>

      <Code title="terminal">{`openclaw cron add \\
  --name "Nightly Memory Consolidation" \\
  --cron "0 2 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Review today's daily note (memory/YYYY-MM-DD.md). \\
    Extract key decisions, learnings, and status changes. \\
    Update relevant knowledge base files. \\
    Update tacit.md if any new preferences were discovered. \\
    If a project changed status, update its file. \\
    Log what you consolidated in today's daily note." \\
  --model "sonnet"`}</Code>

      <h2>The Essential Cron Setup (4 Jobs)</h2>

      <p>Here's the minimum viable cron configuration. These four jobs cover 90% of what most people need:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">☀️ Morning Briefing — 8 AM Daily</div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Wake up to a summary of everything that matters.</p>
          <Code title="terminal">{`openclaw cron add \\
  --name "Morning Brief" \\
  --cron "0 8 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Morning briefing: Check emails, review \\
    calendar for next 24h, check project statuses, \\
    overnight social mentions, weather. Read yesterday's \\
    daily note for context. Compile into a concise \\
    brief with action items. Keep under 20 bullets." \\
  --model "sonnet" --announce \\
  --channel discord --to "channel:YOUR_ID"`}</Code>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">📡 Social Monitor — Every 4 Hours</div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Watches your mentions, logs engagement data.</p>
          <Code title="terminal">{`openclaw cron add \\
  --name "Social Monitor" \\
  --cron "0 */4 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Check social mentions and replies since \\
    last check. Log engagement metrics. Handle simple \\
    interactions (likes, thank-yous). Flag anything \\
    needing human response. If nothing actionable, \\
    say HEARTBEAT_OK." \\
  --model "sonnet" --delivery none`}</Code>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">📊 Weekly Review — Monday 9 AM</div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Big-picture review of the past week.</p>
          <Code title="terminal">{`openclaw cron add \\
  --name "Weekly Review" \\
  --cron "0 9 * * 1" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Weekly review: Read daily notes from the \\
    past 7 days. Summarize what was accomplished, \\
    what's still pending, any recurring blockers. \\
    Suggest priorities for this week. Check revenue \\
    metrics if available." \\
  --model "sonnet" --announce \\
  --channel discord --to "channel:YOUR_ID"`}</Code>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🌙 Nightly Consolidation — 2 AM Daily</div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">The night shift that keeps your memory system healthy.</p>
          <p className="text-xs text-[var(--text-tertiary)]">(Config shown above — this is the most important one)</p>
        </div>
      </div>

      <p>After one week: 7 days of consolidated learnings and 7 morning briefings.<br />
        After one month: a rich, searchable history of everything that happened.<br />
        After three months: a genuine second brain that actually works.</p>

      <h2>Common Mistakes</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Too many cron jobs</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Start with 4. Add more only when you feel a specific gap. 15 cron jobs running on expensive models will cost you $50+/month and flood your channels. Less is more.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Using expensive models for routine tasks</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Your nightly consolidation doesn't need GPT-4/Opus. Use Sonnet, Haiku, or GPT-4o-mini for maintenance tasks. Save the big models for analysis and decision-making.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 No "if nothing, stay quiet" instruction</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Always include "if nothing actionable, say HEARTBEAT_OK" in your cron messages. Otherwise your agent will manufacture something to report, wasting tokens and your attention.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Running crons during sleep hours</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Unless the cron is silent (delivery: none), don't schedule announcements between 11 PM and 7 AM. Your agent's 3 AM social media report can wait until your morning briefing.</p>
        </div>
      </div>

      <Callout emoji="💰" title="Cost Reality Check">
        Running 4-5 cron jobs per day costs about <strong>$2-5/month</strong> in API usage (using cost-effective models for maintenance tasks). That's less than a single coffee for a system that works 24/7. The morning briefing alone saves you 15 minutes daily — that's 7.5 hours/month. If your time is worth more than $0.67/hour, this pays for itself.
      </Callout>

      <h2>Advanced: Chaining Crons</h2>

      <p>As your system matures, you can create cron chains — where one job's output feeds another:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">1️⃣</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">2:00 AM</strong> — Nightly consolidation runs, updates knowledge base</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">2️⃣</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">6:00 AM</strong> — Market analysis runs, reads fresh knowledge base</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">3️⃣</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">8:00 AM</strong> — Morning briefing runs, includes market analysis results</div>
        </div>
      </div>

      <p>Each cron reads from shared files (the knowledge base and daily notes), so they naturally coordinate without needing to "talk" to each other. It's like a relay race where each runner picks up where the last one left off.</p>

      <p>
        Your agent now works while you sleep. But before we give it real tools and real access, we need to talk about the thing that keeps you safe: security.
      </p>

      <FlowDiagram
        steps={[
          { emoji: "⏰", label: "Cron Trigger", detail: "6:30 AM — scheduled task fires" },
          { emoji: "🧠", label: "Agent Wakes Up", detail: "Reads AGENTS.md + knowledge base" },
          { emoji: "🔍", label: "Research", detail: "Searches web, checks APIs, reads data" },
          { emoji: "✍️", label: "Generate Output", detail: "Creates report/content/analysis" },
          { emoji: "📤", label: "Deliver", detail: "Posts to Discord, saves to file, sends email" },
          { emoji: "📝", label: "Log Results", detail: "Updates daily notes for continuity" },
        ]}
      />

      <Tip emoji="⚡" title="Tip: Stagger your cron jobs">
        Don't schedule everything at the same time. If you have 3 daily crons, run them at 6:30 AM, 7:00 AM, and 7:30 AM. This prevents API rate limits, spreads the cost, and makes debugging easier when something fails.
      </Tip>
    </>
  );
}
