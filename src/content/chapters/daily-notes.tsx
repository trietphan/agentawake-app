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
        This is the layer most people skip — and it's exactly why their agents feel broken after a week. Daily notes aren't a diary. They're not a journal. They're your agent's <strong>morning coffee ritual</strong> — the thing that takes it from "blank slate" to "I know exactly what's going on" in under 5 seconds.
      </p>

      <Analogy>
        You know that thing you do every morning? Check your phone, scroll through notifications, remember what you were doing yesterday, figure out what's on your plate today? You do this automatically because you have a continuous stream of consciousness.
        <br /><br />
        Your agent doesn't. It wakes up with the mental equivalent of <strong>a blank whiteboard</strong>. Daily notes are how it reconstructs "oh right, here's what's happening" in seconds instead of minutes.
      </Analogy>

      <h2>The Template</h2>

      <p>Every day, your agent writes (or updates) a file called <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">memory/YYYY-MM-DD.md</code>. Here's the structure:</p>

      <Code title="memory/2026-02-22.md">{`# Saturday, Feb 22

## What's Cooking 🍳
- **SaaS Landing Page** → Live! Stripe checkout working
- **Content Calendar** → 3 posts scheduled, 2 need review
- **AgentAwake Playbook** → Writing chapters 8-12

## Running in the Background 🔄
- Market analysis cron → fires 6 AM daily ✅
- Social monitor → every 2 hours ✅
- Memory consolidation → 2 AM nightly ✅

## Decisions We Made Today ✍️
- Went with interactive web pages over PDF-only
- Chose $29/$79/$199 pricing (not subscription)
- Decided to use Tailwind + Framer Motion for animations

## What Went Well 🎉
- Stripe integration took 20 min (way less than expected)
- Landing page conversion rate hit 3.8% (above 3% target!)

## What Didn't Go Well 😤
- Auth integration took 4 hours (expected 1 hour)
- Twitter API rate limited us — had to add retry logic

## Stuck On 🚧
- Need a custom domain (agentawake.ai?)
- Twitter API rate limit — might need premium tier
- Can't decide between Clerk and Supabase Auth

## Lessons Learned 📚
- Always check API rate limits BEFORE writing integration code
- Supabase docs are great but their auth examples are outdated
- Test Stripe webhook locally with CLI before deploying

## Tomorrow's Hit List 🎯
1. Build the interactive content reader
2. Set up proper gated access after purchase
3. Write 3 more chapters
4. Reply to that partnership DM from @builderguy`}</Code>

      <h2>Why This Is Game-Changing</h2>

      <p><strong>Without daily notes:</strong></p>
      <div className="my-3 rounded-lg bg-red-500/5 border border-red-500/20 p-4 text-sm text-[var(--text-secondary)]">
        🤖 "Hi! What would you like to work on today?"<br />
        😩 "We talked about this yesterday..."<br />
        🤖 "I apologize! Could you remind me of the context?"<br />
        😩 *spends 15 minutes re-explaining everything*<br />
        🤖 "Got it! Now, what was the tech stack again?"<br />
        😩 *closes laptop, goes outside, touches grass*
      </div>

      <p><strong>With daily notes:</strong></p>
      <div className="my-3 rounded-lg bg-green-500/5 border border-green-500/20 p-4 text-sm text-[var(--text-secondary)]">
        🤖 "Morning! I see the landing page is live and Stripe is working. Today's plan: build the interactive reader, set up gated access, write 3 chapters. The domain is still pending from your end, and you've got a DM from @builderguy to reply to. Want to start with the reader?"<br />
        😊 "Yes, let's go."<br />
        🤖 "On it. I'll use Next.js app router since that's our stack, and I noticed the Clerk auth integration took longer than expected yesterday — want me to try Supabase Auth instead, or push through with Clerk?"
      </div>

      <p>See the difference? The second agent isn't just remembering — it's <strong>thinking ahead</strong>, referencing yesterday's pain points, and offering actionable options. All from a single markdown file.</p>

      <Callout emoji="⏱️" title="Time Saved">
        <strong>15 minutes</strong> of re-explaining context × <strong>365 days</strong> = <strong>91 hours per year</strong> you get back. That's more than two full work weeks. From one text file.
      </Callout>

      <h2>Who Writes the Daily Notes?</h2>

      <p>Here's the thing people get wrong: <strong>you don't write the daily notes. Your agent does.</strong></p>

      <p>Add this to your AGENTS.md:</p>

      <Code title="AGENTS.md (add this section)">{`## Daily Notes Protocol
- At the end of each conversation, update memory/YYYY-MM-DD.md
- Include: what we worked on, decisions made, blockers, learnings
- At the START of each conversation, read today's note (and yesterday's if today's is empty)
- Keep each daily note under 100 lines
- Be specific: "fixed Stripe webhook" not "worked on payments"`}</Code>

      <p>
        Your agent will automatically maintain its own daily notes. You'll occasionally glance at them, correct something, or add a note. But 90% of the writing is automatic.
      </p>

      <h2>The "Yesterday + Today" Read Pattern</h2>

      <p>When your agent wakes up on Monday morning, it should read <strong>two files</strong>:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">📄 memory/2026-02-23.md (today — might be empty)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">If there's already a note for today (maybe a cron job ran overnight and logged something), read it first.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">📄 memory/2026-02-22.md (yesterday)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Yesterday's context gives the agent continuity. "We were stuck on auth, we need to reply to that DM, and the domain purchase is pending."</p>
        </div>
      </div>

      <p>This two-file read gives your agent a rolling 48-hour context window. It's like how you wake up remembering yesterday pretty well and two days ago vaguely. That's usually enough to be productive.</p>

      <h2>What About Weekends and Days Off?</h2>

      <p>If you don't interact with your agent on Saturday, the daily note for Saturday will either be empty or contain only cron job outputs. That's fine. On Monday, your agent reads Friday's note (the last meaningful day) and catches up. The system handles gaps gracefully because <strong>the knowledge base holds the durable state</strong>. Daily notes are just the "what's happening right now" layer.</p>

      <h2>Common Mistakes</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Writing daily notes like a journal</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">"Today was a productive day. I felt good about the progress we made on the project." — Your agent doesn't care about feelings. It needs actionable state: what changed, what's blocked, what's next.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Making daily notes too long</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">If your daily note exceeds 100 lines, you're including too much detail. Move project-specific details into the knowledge base. The daily note is a summary, not a transcript.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Not having a "Tomorrow" section</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">The most important part of a daily note is the last section: "Tomorrow's Hit List." This is what your agent reads first the next morning. Without it, the agent knows what happened but not what to do next.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Never cleaning up old notes</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">After 30 days, the nightly consolidation cron should extract key learnings from old daily notes into the knowledge base, then optionally compress old notes. You don't need February 3rd's full daily note in June.</p>
        </div>
      </div>

      <h2>Advanced: Linking Daily Notes to Knowledge Base</h2>

      <p>As your system matures, daily notes start <strong>referencing</strong> knowledge base files:</p>

      <Code title="memory/2026-02-22.md (advanced)">{`## What's Cooking 🍳
- **SaaS MVP** (→ knowledge/projects/saas-mvp.md) — Auth done!
- **Content** (→ knowledge/areas/social-media.md) — Posted thread

## Decisions
- Switched from Clerk to Supabase Auth
  → Updated knowledge/projects/saas-mvp.md tech stack section`}</Code>

      <p>This creates a beautiful paper trail. Your agent can follow the reference to get full project context, and you can trace any decision back to the day it was made.</p>

      <Callout emoji="🎯" title="The Daily Note Litmus Test">
        Read your agent's daily note for today. Can you — as a human — understand what happened today just from reading it? If yes, your agent can too. If not, the note needs more specificity. "Worked on stuff" = useless. "Fixed Stripe webhook, deployed to staging, tested with $1 charge" = useful.
      </Callout>

      <h2>More Template Variants</h2>

      <p>The basic daily note template works, but different workflows need different flavors. Here are battle-tested variants:</p>

      <h3>The Creator Template</h3>

      <Code title="daily-notes/2026-02-23.md (creator variant)">{`# Mon Feb 23 — Creator Log

## Published Today
- Twitter thread on AI agents (12 tweets, posted 9:15 AM)
- LinkedIn post adapting the thread (posted 11 AM)

## Content Pipeline
- 🔴 Blog post on PARA method — needs editing
- 🟡 YouTube script on agent memory — draft done
- 🟢 Newsletter for Friday — scheduled

## Engagement
- Replied to 8 comments on yesterday's post
- 2 new DM conversations (potential collabs)

## Ideas Captured
- "Agents as employees" analogy for next thread
- Comparison post: agent with memory vs without

## Tomorrow
- Edit PARA blog post
- Record YouTube intro`}</Code>

      <h3>The Developer Template</h3>

      <Code title="daily-notes/2026-02-23.md (developer variant)">{`# Mon Feb 23 — Dev Log

## Commits
- feat: add Stripe webhook handler (3 files, +120 lines)
- fix: auth redirect loop on Safari

## Blockers
- Supabase RLS policy not working for team invites
  → Asked in Discord, waiting for response

## Decisions Made
- Using Clerk instead of Auth0 (simpler, better DX)
- Skipping email verification for MVP (add post-launch)

## Bugs Found
- Safari: cookies not persisting after redirect
- Mobile: sidebar overlaps content < 768px

## Tomorrow
- Fix Safari cookie issue (priority)
- Start dashboard UI components`}</Code>

      <h3>The Solopreneur Template</h3>

      <Code title="daily-notes/2026-02-23.md (solopreneur variant)">{`# Mon Feb 23

## Revenue
- 2 new signups ($58 MRR added)
- 1 churn ($29 lost) — reason: "not using it enough"
- Current MRR: $1,247

## Support
- 3 tickets resolved (avg response: 22 min)
- Feature request: dark mode (5th time asked — adding to roadmap)

## Marketing
- Published comparison post (us vs Notion for freelancers)
- Started Google Ads experiment ($10/day, "task management freelancer")

## Operations
- Updated onboarding email sequence (added day-3 nudge)
- Fixed broken link in footer

## Key Metric
- Trial → Paid conversion: 18% (up from 15% last week)`}</Code>

      <p>Pick the template that matches your workflow, or frankenstein pieces from multiple templates. The point isn't the format — it's the <strong>habit</strong> of capturing what happened today so your agent can reference it tomorrow.</p>

      <h2>Advanced: Auto-Generated Daily Notes</h2>

      <p>The ultimate power move: have your agent <strong>write its own daily notes</strong>. Set up an end-of-day cron job that tells your agent to summarize everything it did today into a daily note. It's already done the work — now it documents the work. You just review it in the morning.</p>

      <p>This creates a beautiful loop: the agent reads yesterday's notes → does today's work → writes today's notes → reads them tomorrow. Self-documenting, self-maintaining memory.</p>

      <Tip emoji="📅" title="The 7-Day Window">
        Your agent doesn't need to read ALL daily notes. Configure it to read only the last 7 days. This gives enough context for continuity without overloading the context window. For anything older, that's what your knowledge base archives are for.
      </Tip>

      <Tip emoji="🏷️" title="Tag Your Notes for Searchability">
        Add tags at the bottom of each daily note: `tags: #saas #marketing #bug-fix`. When your agent needs to find "that day I decided to switch auth providers," it can grep for #auth or #decision instead of reading every file.
      </Tip>

      <Quiz
        question="What's the main purpose of daily notes for your agent?"
        options={[
          { text: "To replace your knowledge base entirely", explanation: "Daily notes complement your knowledge base — they don't replace it. The knowledge base stores structured, long-lived info. Daily notes capture what happened today." },
          { text: "To give your agent 'what happened recently' context so it's not starting from scratch", correct: true, explanation: "Exactly! Daily notes are the bridge between sessions. They tell your agent what happened, what was decided, and what's next — like a shift handoff." },
          { text: "To create a personal diary your agent can read", explanation: "Daily notes aren't a diary — they're operational logs. They should contain decisions, actions, and status — not feelings or reflections." },
          { text: "To track your agent's token usage", explanation: "Token tracking is important but that's a monitoring concern, not what daily notes are for." }
        ]}
      />

      <Checklist
        title="Daily Notes Setup Checklist"
        items={[
          "Created daily-notes/ directory",
          "Chosen a template variant that matches your workflow",
          "Written today's first daily note manually",
          "Configured your agent to read the last 7 days of notes on startup",
          "Added a reminder to write notes at end of day (or set up auto-generation)",
          "Added tags to notes for searchability",
          "Tested by asking your agent 'what did I work on yesterday?'"
        ]}
      />

      <p>
        Your countertop is set up. Now let's build the secret weapon — the layer that makes your agent feel like it actually <em>knows</em> you.
      </p>
    </>
  );
}
