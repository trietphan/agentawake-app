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
        Most people set up their agent, run it once, and think they're done. That's like going to the gym once and wondering why you don't have abs. The real power of an AI agent isn't in any single session — it's in the <strong>daily routine that compounds over weeks and months.</strong>
      </p>

      <Analogy>
        Think about compound interest. A penny doubled every day becomes $5 million in 30 days. Your agent works the same way. On day 1, it barely knows you. By day 30, it's anticipated your questions before you ask them. By day 90, it's running entire workflows you forgot you set up. The daily routine is the doubling mechanism.
      </Analogy>

      <h2>The Full Daily Workflow</h2>

      <p>A well-designed agent day has four phases. Not isolated cron jobs — a <strong>connected workflow</strong> where each phase builds on the last:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--accent-light)]/15 bg-[var(--accent-light)]/4 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">☀️ Morning Briefing (6-7 AM)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent reads yesterday's notes, checks email/calendar, scans news/markets, and writes a morning summary. You wake up to a briefing, not a blank screen.</p>
        </div>
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
          <div className="text-sm font-semibold text-blue-400">💼 Work Blocks (9 AM - 5 PM)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Heartbeat-driven check-ins every 30-60 minutes. Agent handles background tasks, responds to requests, and logs everything to today's daily note.</p>
        </div>
        <div className="rounded-lg border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">🌆 Evening Consolidation (9-10 PM)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent reviews the day's notes, extracts key decisions and lessons, updates the knowledge base and MEMORY.md. Like a student reviewing their notes before bed.</p>
        </div>
        <div className="rounded-lg border border-zinc-500/20 bg-zinc-500/5 p-4">
          <div className="text-sm font-semibold text-[var(--text-secondary)]">🌙 Nightly Cleanup (2 AM)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Maintenance: archive old files, compact memory, update tacit knowledge, commit changes to git. The janitorial shift nobody sees but everyone benefits from.</p>
        </div>
      </div>

      <Code title="Complete daily routine cron config">{`# Morning briefing — delivered to Discord before you wake up
0 6 * * * openclaw cron run --task "morning-briefing" \\
  --prompt "Read yesterday's daily note. Check email for urgent items. \\
  Scan calendar for today. Write a 5-bullet morning briefing to Discord."

# Evening consolidation — knowledge extraction
0 21 * * * openclaw cron run --task "evening-consolidation" \\
  --prompt "Read today's daily note (memory/YYYY-MM-DD.md). \\
  Extract: decisions made, lessons learned, tasks completed, blockers hit. \\
  Update MEMORY.md if any durable facts emerged. \\
  Update knowledge/tacit.md if any preferences or patterns were learned."

# Nightly cleanup — the janitorial shift
0 2 * * * openclaw cron run --task "nightly-cleanup" \\
  --prompt "Archive daily notes older than 30 days to knowledge/archives/. \\
  Review MEMORY.md for outdated entries. \\
  Git commit and push all changes. \\
  Write a 1-line summary of what was cleaned to tomorrow's daily note."

# Weekly review — every Sunday at 10 AM
0 10 * * 0 openclaw cron run --task "weekly-review" \\
  --prompt "Read all daily notes from this week. \\
  Write a weekly summary: accomplishments, blockers, patterns noticed. \\
  Score the week 1-10. Suggest one improvement for next week."
`}</Code>

      <h2>The Compound Knowledge Effect</h2>

      <p>Here's what happens when your agent runs a daily routine consistently:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">📅 Day 1</div>
            <div className="text-xs text-red-400 font-bold">Barely useful</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent knows your name and basic preferences. Morning briefing is generic. Needs constant hand-holding.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">📅 Day 7</div>
            <div className="text-xs text-[var(--accent-light)] font-bold">Getting useful</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent knows your projects, your schedule patterns, your communication style. Morning briefings start including relevant context.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">📅 Day 30</div>
            <div className="text-xs text-emerald-400 font-bold">Genuinely valuable</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent anticipates your needs. "I noticed you always check gold prices Monday mornings — here's the analysis." Proactively surfaces relevant information.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">📅 Day 90</div>
            <div className="text-xs text-[var(--accent-light)] font-bold">Indispensable</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent runs entire workflows you forgot you set up. Catches mistakes before they happen. Feels like it reads your mind. You genuinely can't imagine working without it.</p>
        </div>
      </div>

      <h2>Measuring Agent Performance</h2>

      <p>You can't improve what you don't measure. Track these metrics:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">📊</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Tasks completed per day</strong> — is the agent actually doing work, or just generating morning briefings?</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🎯</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Accuracy rate</strong> — how often do you need to correct the agent's output? Track corrections over time.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">💰</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Cost per task</strong> — total daily API cost ÷ tasks completed. Should trend down as the agent gets smarter.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">⏱️</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Human time saved</strong> — estimate how long each task would take you manually. That's the ROI.</div>
        </div>
      </div>

      <h2>The Weekly Review Pattern</h2>

      <p>Every Sunday, your agent reviews its own week. This is where the compounding really kicks in:</p>

      <Code title="Weekly review prompt">{`Read all daily notes from this week (memory/2026-02-17.md through
memory/2026-02-23.md).

Write a weekly review covering:
1. Tasks completed (with count)
2. Tasks failed or incomplete (with reasons)
3. Patterns noticed ("human always asks for X on Mondays")
4. Lessons learned ("Y approach worked better than Z")
5. Self-score: 1-10 with justification
6. One specific improvement to implement next week

Save to memory/weekly-review-2026-W08.md
Update knowledge/tacit.md with any new patterns.`}</Code>

      <h2>Monthly Retrospectives</h2>

      <p>Once a month, the agent writes its own performance report. This surfaces long-term trends:</p>

      <Code title="Monthly retro prompt">{`Read all weekly reviews from this month.

Write a monthly retrospective:
- Total tasks completed vs. previous month
- Average accuracy trend (improving or declining?)
- Cost trend (getting more efficient?)
- Top 3 wins this month
- Top 3 areas needing improvement
- Recommended changes to daily routine
- Recommended changes to knowledge base structure

Save to memory/monthly-retro-2026-02.md`}</Code>

      <Callout emoji="🔄" title="The Flywheel">
        Daily notes feed weekly reviews. Weekly reviews feed monthly retros. Monthly retros update the daily routine. <strong>The system improves itself.</strong> After 3 months, your agent's routine looks nothing like where it started — it's been refined by 12 weekly reviews and 3 monthly retros, each one making it slightly better.
      </Callout>

      <Quiz
        question="Why does evening consolidation happen BEFORE the nightly cleanup?"
        options={[
          { text: "It doesn't matter — they can run in any order", explanation: "Order absolutely matters. Consolidation extracts knowledge FROM daily notes. If cleanup archives them first, there's nothing to extract." },
          { text: "Consolidation extracts knowledge from daily notes, cleanup then archives them", correct: true, explanation: "Exactly! Consolidation is the brain processing the day's experiences. Cleanup is the janitor filing things away. Brain first, then janitor." },
          { text: "Consolidation is faster so it should go first", explanation: "Speed isn't the reason. The dependency is: consolidation READS daily notes, cleanup MOVES them." },
          { text: "Because the agent is less tired earlier in the evening", explanation: "Agents don't get tired! The order is about data dependencies, not fatigue." },
        ]}
      />

      <Quiz
        question="What's the most important metric for agent performance?"
        options={[
          { text: "Number of API calls per day", explanation: "More API calls could mean more work or more waste. It's not directly useful." },
          { text: "Cost per task (trending down over time)", correct: true, explanation: "Cost per task captures both efficiency and value. If it's going down, your agent is getting smarter — doing more work per dollar. That's the compound effect in action." },
          { text: "Number of files created", explanation: "More files doesn't mean better work. An agent could create lots of useless files." },
          { text: "Length of daily notes", explanation: "Longer notes don't mean better notes. A concise, high-signal daily note is better than a verbose one." },
        ]}
      />

      <Checklist
        title="Daily Routine Setup Checklist"
        items={[
          "Set up morning briefing cron (6-7 AM, delivered to your preferred channel)",
          "Configured heartbeat for work-hours check-ins (every 30-60 min)",
          "Set up evening consolidation cron (9-10 PM)",
          "Set up nightly cleanup cron (2 AM)",
          "Created weekly review cron (Sunday mornings)",
          "Created monthly retrospective cron (1st of each month)",
          "Defined performance metrics to track (tasks, accuracy, cost, time saved)",
          "Tested the full cycle: morning → work → evening → night → next morning",
          "Let it run for 7 days before making adjustments",
        ]}
      />

      <Tip emoji="⏳" title="The Patience Principle">
        Your agent's daily routine will feel underwhelming for the first week. The morning briefings will be generic. The consolidations will be shallow. <strong>Don't change anything for 14 days.</strong> The compound effect needs time to kick in. By day 14, you'll start seeing the agent surface insights you didn't ask for. By day 30, you'll wonder how you ever worked without it.
      </Tip>
    </>
  );
}
