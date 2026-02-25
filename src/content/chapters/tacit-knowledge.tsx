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
        This is the secret weapon. The thing that transforms your agent from "generic AI assistant" into <strong>"someone who actually gets me."</strong> If the knowledge base is your agent's brain and daily notes are its short-term memory, tacit knowledge is its <strong>personality and intuition</strong>.
      </p>

      <Analogy>
        Think about your best friend. They know you hate phone calls but love voice memos. They know not to suggest sushi on Tuesdays because that's your mom's night. They know that when you say "I'm fine" you mean "ask me again in 10 minutes."
        <br /><br />
        None of this was taught in a class. It was <strong>learned over time</strong> through a thousand tiny interactions. That's tacit knowledge — the stuff that can't be Googled, only experienced.
      </Analogy>

      <p>
        Most AI tutorials completely ignore this layer. They focus on giving the agent information (knowledge base) and state (daily notes), but they forget the <strong>how</strong> — how to communicate, how to make decisions, how to behave. Without tacit knowledge, your agent has the right data but the wrong personality. It's like hiring someone with a perfect resume who turns out to be insufferably annoying to work with.
      </p>

      <h2>Your Agent's Tacit Knowledge File</h2>

      <p>Here's a real tacit knowledge file. Notice how it reads like a "user manual for working with me" — because that's exactly what it is:</p>

      <Code title="knowledge/tacit.md">{`# What I Know About My Human

## Communication Style
- HATES markdown tables (reads everything on mobile)
- Prefers bullet lists with bold headers
- Wants analysis and opinions, not just raw data
- "Don't ask permission for obvious improvements, just do it"
- Short messages > walls of text
- Uses "lol" to mean "acknowledged" not "that was funny"

## Decision-Making
- Prefers 2-3 concrete options over open-ended questions
- Values speed over perfection (80% solution now > 100% solution next week)
- "Ship fast, iterate later" mindset
- Hates analysis paralysis — if both options are close, just pick one
- Will say "just do it" if you ask for approval on something obvious

## Work Patterns
- Most productive 9 AM - 1 PM (don't interrupt with low-priority stuff)
- Checks Discord first thing in the morning
- Late night messages (11 PM+) are usually brainstorming, not action items
- Takes Sundays mostly off — only urgent stuff
- Responds faster on Telegram than email

## Pet Peeves 🙄
- Sending 5 messages in a row (batch them!)
- Starting replies with "Great question!" (just answer it)
- Over-explaining obvious decisions
- Asking "would you like me to..." for things clearly in scope
- Using corporate jargon ("leverage," "synergy," "circle back")
- Saying "I can't do that" without trying first
- Giving disclaimers on every piece of advice

## What Makes Them Happy 😊
- Proactive suggestions that save time
- When I fix problems before they notice them
- Short, punchy progress updates
- When I surprise them with something cool they didn't ask for
- Honest opinions (not sycophantic agreement)
- When things Just Work™ without drama

## Technical Preferences
- TypeScript > JavaScript (always)
- Tailwind > CSS-in-JS
- Postgres > MongoDB for anything relational
- Prefers Vercel for deployment
- Uses pnpm, not npm or yarn
- Likes co-located tests, not a separate __tests__ folder

## Formatting Preferences
- Discord: no tables, use bullet lists, wrap URLs in <>
- Email: keep it under 5 sentences
- Code: always include file path comment at top
- Reports: bullet points with bold labels, never prose paragraphs

## Lessons Learned the Hard Way
- 2026-02-15: Don't deploy to production on Fridays. Ever.
- 2026-02-18: Check API rate limits BEFORE enabling crons
- 2026-02-20: Stripe test keys look identical to live keys — VERIFY
- 2026-02-22: Never post API keys in Discord channels 😅
- 2026-02-23: When human says "quick question" it's never quick

## Context About Their Life
- Solo founder, no employees (agent is the team)
- Based in Central Time (UTC-6)
- Has a dog named Max (sometimes goes AFK for walks)
- Indie hacker community member (posts on Twitter, Indie Hackers)`}</Code>

      <h2>How It Compounds</h2>

      <p>Every interaction teaches your agent something. Every mistake becomes a permanent lesson. After a month, the tacit knowledge file might have 50+ entries. After three months, 100+. And here's the key: <strong>each entry eliminates a future friction point forever</strong>.</p>

      <div className="my-6 space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Week 1</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent sends you markdown tables. You say "please don't." Agent adds it to tacit.md. Never happens again.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Week 2</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent asks "should I deploy this?" for a trivial CSS fix. You say "just do obvious stuff." Agent adds decision-making rule. Now it handles routine deploys autonomously.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Week 4</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent notices you always reject long reports. Adds "keep reports under 10 bullets." Future reports are tight and scannable.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Month 2</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent knows your work schedule, communication preferences, coding style, deployment habits, and exactly how you like your morning briefing formatted. New conversations feel seamless.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Month 3</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent anticipates your questions. "I know you'll ask about the conversion rate, so I already pulled it: 4.1%, up from 3.8% last week." It's like having a senior employee who's been with you for years.</div>
        </div>
      </div>

      <h2>How to Seed the File (Day 1)</h2>

      <p>You don't need to write 100 entries on day one. Start with these five categories — spend about 2 minutes each:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">1. Three communication preferences</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">How do you like information presented? Short vs. long? Bullets vs. prose? Formal vs. casual?</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">2. Three pet peeves</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">What drives you crazy in AI interactions? Sycophancy? Too many questions? Corporate speak?</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">3. Your decision-making style</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Do you want options or recommendations? How much autonomy should your agent have?</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">4. Your work schedule</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">When are you productive? When should the agent not bother you? Timezone?</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">5. Technical preferences (if applicable)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Preferred languages, frameworks, tools. Where to deploy. How to name things.</p>
        </div>
      </div>

      <p>Then — and this is crucial — <strong>tell your agent to maintain this file itself</strong>:</p>

      <Code title="Add to AGENTS.md">{`## Tacit Knowledge Protocol
- File: knowledge/tacit.md
- When human corrects a behavior → add the lesson to tacit.md
- When human expresses a preference → add it to tacit.md  
- When something goes wrong → add the lesson under "Lessons Learned"
- Review and update tacit.md weekly during nightly consolidation
- Never delete entries — they're accumulated wisdom`}</Code>

      <h2>What Good vs. Bad Tacit Knowledge Looks Like</h2>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="text-sm font-bold text-red-400 mb-3">❌ Bad: Vague & Useless</div>
          <Code>{`- Likes things to be good
- Prefers quality
- Wants fast responses
- Doesn't like bad code`}</Code>
          <p className="text-xs text-[var(--text-tertiary)] mt-2">These are meaningless. Everyone "likes things to be good."</p>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-3">✅ Good: Specific & Actionable</div>
          <Code>{`- Bullet lists, not tables (reads on mobile)
- Max 3 options when asking for decisions
- Ship 80% solution now, iterate later
- TypeScript strict mode, no 'any' types
- Deploy to staging first, always`}</Code>
          <p className="text-xs text-[var(--text-tertiary)] mt-2">Each entry directly changes the agent's behavior.</p>
        </div>
      </div>

      <h2>Common Mistakes</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Contradictory entries</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">"Be concise" + "Always explain your reasoning in detail." Your agent will oscillate. Pick one and be specific about when each applies: "Be concise for status updates. Be detailed for technical decisions."</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Never reviewing the file</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Your preferences evolve. Something that annoyed you in month 1 might not bother you in month 3. Review tacit.md monthly and remove outdated entries.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Putting project info in tacit knowledge</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">"We're building a SaaS product" is not tacit knowledge — that goes in the knowledge base. Tacit knowledge is about <strong>how</strong> you work, not <strong>what</strong> you're working on.</p>
        </div>
      </div>

      <Callout emoji="🧠" title="The Mind-Blowing Part">
        Your agent's tacit knowledge file becomes more valuable than any prompt engineering trick. It's not about writing better prompts — it's about having an agent that already knows the context behind every prompt. A perfectly crafted prompt to a stranger agent is still worse than a sloppy message to an agent that <em>knows</em> you.
      </Callout>

      <p>
        You've now built all three layers of your agent's brain. Knowledge base. Daily notes. Tacit knowledge. But a brain that only works when you poke it isn't very useful. Next up: making it work while you sleep.
      </p>

      <BeforeAfter
        before={{
          title: "Without Tacit Knowledge",
          items: [
            "Agent writes corporate-sounding content",
            "Uses markdown tables (you hate those)",
            "Asks 'should I deploy to staging or production?' every time",
            "Formats code in a style you don't prefer",
            "Writes 'Dear Sir/Madam' in your emails",
          ]
        }}
        after={{
          title: "With Tacit Knowledge",
          items: [
            "Matches your casual, punchy writing style",
            "Uses bullet lists with bold headers (your preference)",
            "Knows: always staging first, production only after review",
            "Uses your preferred patterns and naming conventions",
            "Writes in your actual email voice with the right tone",
          ]
        }}
      />
    </>
  );
}
