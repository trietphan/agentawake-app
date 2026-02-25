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
        Every time your agent asks you "hey, I need X to continue" — that's a <strong>bottleneck</strong>. Most people answer the question and move on. <strong>Top operators eliminate the question forever.</strong> This chapter shows you how — on every platform.
      </p>

      <Analogy>
        Imagine a factory where a robot arm stops 10 times a day to ask a human "which color paint?" You could answer every time (reactive). Or you could put up a sign that says "always blue for Model A, always red for Model B" and the robot arm never asks again. <strong>That's bottleneck elimination.</strong>
      </Analogy>

      <h2>The 3 Types of Bottlenecks</h2>

      <div className="my-6 grid gap-4">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-red-400 mb-1">1. Missing Context — "What is this?"</div>
          <p className="text-sm text-[var(--text-secondary)]">Agent doesn't know project history, preferences, or credentials.</p>
          <p className="text-xs text-green-400 mt-2"><strong>Fix:</strong> Add it to the Knowledge Base or Tacit Knowledge layer.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">2. Missing Permission — "Can I do this?"</div>
          <p className="text-sm text-[var(--text-secondary)]">Agent knows <em>how</em> but isn't authorized (e.g., tweet, deploy, send email).</p>
          <p className="text-xs text-green-400 mt-2"><strong>Fix:</strong> Grant appropriate autonomy level (see Progressive Trust chapter) or set specific guardrails.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-blue-400 mb-1">3. Missing Logic — "How do I decide?"</div>
          <p className="text-sm text-[var(--text-secondary)]">Agent faces a fork in the road and doesn't have a decision framework.</p>
          <p className="text-xs text-green-400 mt-2"><strong>Fix:</strong> Create a Decision Protocol doc with clear if/then rules.</p>
        </div>
      </div>

      <h2>The Compound Effect</h2>

      <div className="my-6 space-y-3">
        <div className="flex gap-4 items-center">
          <span className="text-xs font-bold text-[var(--text-tertiary)] w-16">Week 1</span>
          <div className="flex-1 h-3 rounded-full bg-[var(--surface-hover)] overflow-hidden"><div className="h-full bg-red-500/60 rounded-full" style={{width: "100%"}} /></div>
          <span className="text-xs text-[var(--text-tertiary)]">Agent stuck 10x/day</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xs font-bold text-[var(--text-tertiary)] w-16">Week 2</span>
          <div className="flex-1 h-3 rounded-full bg-[var(--surface-hover)] overflow-hidden"><div className="h-full bg-[var(--accent)]/50 rounded-full" style={{width: "50%"}} /></div>
          <span className="text-xs text-[var(--text-tertiary)]">5 bottlenecks removed → stuck 5x/day</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xs font-bold text-[var(--text-tertiary)] w-16">Month 1</span>
          <div className="flex-1 h-3 rounded-full bg-[var(--surface-hover)] overflow-hidden"><div className="h-full bg-green-500/60 rounded-full" style={{width: "10%"}} /></div>
          <span className="text-xs text-[var(--text-tertiary)]">20 removed → stuck 1x/day</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xs font-bold text-[var(--text-tertiary)] w-16">Month 2</span>
          <div className="flex-1 h-3 rounded-full bg-[var(--surface-hover)] overflow-hidden"><div className="h-full bg-emerald-500/60 rounded-full" style={{width: "2%"}} /></div>
          <span className="text-xs text-[var(--text-tertiary)]">Agent rarely needs you. You do strategy.</span>
        </div>
      </div>

      <h2>The "Five Whys" Technique</h2>

      <p>When your agent stops, don't just unblock it. Ask <strong>why</strong> it stopped — then eliminate that class of problem forever.</p>

      <div className="my-4 space-y-3 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="flex gap-3 text-sm text-[var(--foreground)]/80">
          <span className="font-bold text-red-400">Stop:</span>
          <span>"Should I use Tailwind or CSS Modules for this component?"</span>
        </div>
        <div className="flex gap-3 text-sm text-[var(--text-secondary)]">
          <span className="font-bold text-[var(--text-tertiary)]">Why?</span>
          <span>Because I didn't specify a preference.</span>
        </div>
        <div className="flex gap-3 text-sm text-[var(--text-secondary)]">
          <span className="font-bold text-[var(--text-tertiary)]">Why?</span>
          <span>Because it's not in the project README.</span>
        </div>
        <div className="flex gap-3 text-sm text-[var(--text-secondary)]">
          <span className="font-bold text-[var(--text-tertiary)]">Why?</span>
          <span>Because we never wrote a tech stack standard.</span>
        </div>
        <div className="flex gap-3 text-sm text-green-400">
          <span className="font-bold">Fix:</span>
          <span>Create a standards doc: "Always Tailwind + shadcn/ui." Agent never asks again.</span>
        </div>
      </div>

      <h2>Bottleneck Log Template</h2>

      <Code title="knowledge/resources/bottleneck-log.md">{`# Bottleneck Log

## 2026-02-20
- **Stop:** Asked for Stripe API key
- **Type:** Missing Context
- **Fix:** Added key to .env + documented in project.md
- **Status:** ✅ Eliminated

## 2026-02-21
- **Stop:** "Is this tweet tone okay?"
- **Type:** Missing Logic (no decision framework)
- **Fix:** Updated tacit.md with 5 examples of good vs bad voice
- **Status:** ✅ Eliminated

## 2026-02-22
- **Stop:** "Database migration failed, what do I do?"
- **Type:** Missing Context
- **Fix:** Created troubleshooting.md with standard DB reset commands
- **Status:** ✅ Eliminated`}</Code>

      <h2>Decision Protocols (Advanced)</h2>

      <p>For complex decisions, give your agent a <strong>flowchart in text form</strong>:</p>

      <Code title="knowledge/protocols/content-approval.md">{`# Content Approval Protocol

When evaluating a draft tweet:

1. Is it controversial or political?
   → Yes → STOP. Ask me. Never post.
   → No → Continue.

2. Is it factually accurate?
   → No → Fix it. Cite sources.
   → Yes → Continue.

3. Does it mention a competitor?
   → Yes → Ensure tone is respectful. Never trash-talk.
   → No → Continue.

4. All checks pass?
   → Schedule for 9 AM ET.
   → Do NOT ask for confirmation.`}</Code>

      <h2>🔌 Platform-Specific Bottleneck Patterns</h2>

      <p>Each platform has its own common bottlenecks. Here's what to pre-solve:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="text-sm font-bold text-cyan-400 mb-2">🐾 OpenClaw</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Bottleneck:</strong> Agent asks "which Discord channel?" → <strong>Fix:</strong> Add channel IDs to MEMORY.md or knowledge base</li>
            <li>• <strong>Bottleneck:</strong> "Should I use cron or heartbeat?" → <strong>Fix:</strong> Create a decision protocol doc</li>
            <li>• <strong>Bottleneck:</strong> "Context too long" → <strong>Fix:</strong> Set up auto-compact rules, use isolated sessions for big tasks</li>
          </ul>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">🤖 Claude (API / Projects)</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Bottleneck:</strong> Forgets project context every conversation → <strong>Fix:</strong> Use Projects feature, paste your AGENTS.md + knowledge base as project docs</li>
            <li>• <strong>Bottleneck:</strong> Asks "what framework are you using?" → <strong>Fix:</strong> Add tech stack to project instructions</li>
            <li>• <strong>Bottleneck:</strong> Can't access files → <strong>Fix:</strong> Upload key files to project, or use Claude Code CLI</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">💬 ChatGPT (Custom GPTs / API)</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Bottleneck:</strong> Loses memory after conversation → <strong>Fix:</strong> Use Memory feature or Custom GPT instructions (paste knowledge base)</li>
            <li>• <strong>Bottleneck:</strong> "I can't access the internet" → <strong>Fix:</strong> Enable browsing in settings, or use API with function calling</li>
            <li>• <strong>Bottleneck:</strong> Inconsistent voice → <strong>Fix:</strong> Paste tacit.md examples in system prompt</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🔗 LangChain / CrewAI / AutoGPT</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Bottleneck:</strong> Agent loops endlessly → <strong>Fix:</strong> Set max iterations, add clear exit conditions</li>
            <li>• <strong>Bottleneck:</strong> Tool calls fail silently → <strong>Fix:</strong> Add error handling + fallback logic in chain definition</li>
            <li>• <strong>Bottleneck:</strong> Agents argue with each other → <strong>Fix:</strong> Define clear role boundaries, use sequential (not parallel) for dependent tasks</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">⚡ n8n / Make / Zapier</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Bottleneck:</strong> Workflow breaks on unexpected data → <strong>Fix:</strong> Add data validation nodes before AI steps</li>
            <li>• <strong>Bottleneck:</strong> AI node returns wrong format → <strong>Fix:</strong> Add explicit output format in prompt + JSON schema</li>
            <li>• <strong>Bottleneck:</strong> Rate limits → <strong>Fix:</strong> Add delay nodes, batch processing, error retry logic</li>
          </ul>
        </div>
        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="text-sm font-bold text-yellow-400 mb-2">💻 Cursor / Windsurf / Cline</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Bottleneck:</strong> "Which file should I edit?" → <strong>Fix:</strong> Add .cursorrules / AGENTS.md with project structure map</li>
            <li>• <strong>Bottleneck:</strong> Suggests wrong patterns → <strong>Fix:</strong> Add code examples in .cursorrules showing your preferred patterns</li>
            <li>• <strong>Bottleneck:</strong> Doesn't know about existing utilities → <strong>Fix:</strong> Reference your utils/helpers in project docs</li>
          </ul>
        </div>
      </div>

      <Callout emoji="🚀" title="The Transformation">
        Week 1: you unblock your agent 10 times a day (you're a babysitter).<br />
        Month 1: you unblock it once a week (you're a manager).<br />
        Month 3: it runs operations while you do strategy (you're the CEO).<br /><br />
        <strong>The bottleneck log is the single most important practice in this entire playbook.</strong> Start one today.
      </Callout>

      <Tip emoji="🏆" title="The 'Zero Bottleneck' Challenge">
        Keep a bottleneck log for one week. Every time your agent asks you something or gets stuck, log it. At the end of the week, eliminate the top 3. Next week, eliminate the next 3. Within a month, your agent will run nearly autonomously. This is the single highest-ROI practice you can do.
      </Tip>

      <Tip emoji="🔄" title="The 'Preemptive Knowledge Dump'">
        Instead of waiting for bottlenecks to happen, spend 15 minutes brainstorming: "What questions will my agent ask this week?" Write the answers into your knowledge base before it asks. Front-loading context is 10x cheaper than interruption-driven context.
      </Tip>
    </>
  );
}
