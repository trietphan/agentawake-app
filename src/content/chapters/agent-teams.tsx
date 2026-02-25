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
        You've built one agent and it's incredible. It handles your morning briefing, writes content, monitors markets, and keeps your memory organized. But now you're hitting a wall: <strong>one agent can't do everything well.</strong> It's like having one employee who's your receptionist, accountant, marketer, and developer. Eventually, they start dropping balls.
      </p>

      <Analogy>
        Think of it like a restaurant. When you first open, the owner does everything — cooking, serving, cleaning, managing. It works when you have 5 tables. But at 50 tables? You need a chef, servers, a dishwasher, and a manager. Not because the owner got dumber — because the <strong>workload exceeded what one person can context-switch between.</strong> Agents hit the same wall.
      </Analogy>

      <h2>When to Go Multi-Agent (Decision Framework)</h2>

      <p>Don't add agents just because you can. More agents = more complexity = more cost = more things that can break. Add another agent only when you hit one of these triggers:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-red-400">🚨 Trigger 1: Context Overflow</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Your agent's instructions + memory + current task exceed the context window. It starts "forgetting" parts of its job because there's too much to hold at once.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">⚠️ Trigger 2: Conflicting Personalities</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Your agent needs to be both a careful analyst AND a creative writer AND a blunt code reviewer. These personalities fight each other in a single system prompt.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-blue-400">📊 Trigger 3: Parallel Workloads</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You need things done simultaneously: research happening while content is being written while code is being reviewed. One agent means sequential, not parallel.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-emerald-400">💰 Trigger 4: Cost Optimization</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Some tasks need GPT-4/Claude Opus (complex reasoning). Others work fine with GPT-4o-mini/Haiku (simple extraction). One agent = one model tier for everything.</p>
        </div>
      </div>

      <Callout emoji="⚖️" title="The Rule of Thumb">
        If your single agent is handling 3+ unrelated domains (e.g., trading + content + DevOps), it's time to specialize. If it's handling 3+ related tasks in one domain (e.g., research + draft + edit for content), keep it as one agent.
      </Callout>

      <h2>Shared vs. Private Memory</h2>

      <p>The most critical decision in multi-agent setups: <strong>what can each agent see?</strong></p>

      <Code title="Memory boundaries">{`workspace/
├── shared/              # All agents read/write
│   ├── MEMORY.md        # Shared long-term memory
│   ├── inbox/           # Cross-agent communication
│   │   ├── research-to-writer.md
│   │   └── analyst-to-chief.md
│   └── knowledge/       # Shared knowledge base
│
├── agents/
│   ├── researcher/      # Only the researcher sees this
│   │   ├── SOUL.md
│   │   ├── memory/
│   │   └── scratch/     # Working drafts, raw data
│   ├── writer/          # Only the writer sees this
│   │   ├── SOUL.md
│   │   ├── memory/
│   │   └── drafts/
│   └── analyst/         # Only the analyst sees this
│       ├── SOUL.md
│       ├── memory/
│       └── data/`}</Code>

      <p><strong>Shared memory</strong> contains facts everyone needs: project status, user preferences, completed decisions. <strong>Private memory</strong> contains agent-specific working state: raw research data, draft iterations, intermediate analysis. Think of shared memory as the company wiki and private memory as each employee's notebook.</p>

      <h2>Communication Patterns</h2>

      <p>Agents need to talk to each other. There are two main patterns, and they have very different tradeoffs:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">📁 File-Based Communication (Recommended)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agents write to a shared <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">inbox/</code> folder. Other agents check the inbox periodically. Async, debuggable, auditable. Like internal memos.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">💬 Direct Messaging (Use Sparingly)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">One agent spawns or invokes another directly with a prompt. Faster but harder to debug. Like a phone call — no paper trail unless you create one.</p>
        </div>
      </div>

      <h2>Specialization Patterns</h2>

      <p>The four agent archetypes that cover 90% of use cases:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-blue-400">🔍 The Researcher</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Searches the web, reads documents, summarizes findings. Optimized for breadth and accuracy. Model: can use cheaper models for bulk search, expensive for synthesis.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">✍️ The Writer</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Takes research and turns it into content — blog posts, tweets, reports, emails. Optimized for tone, style, and persuasion. Needs the strongest language model.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-emerald-400">📊 The Analyst</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Crunches numbers, spots patterns, makes recommendations. Optimized for accuracy and structured reasoning. Lives in spreadsheets and data files.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">⚙️ The Operator</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Executes tasks: deploys code, sends emails, updates databases, runs cron jobs. Optimized for reliability and tool use. Needs the highest trust level.</p>
        </div>
      </div>

      <h2>The "Chief of Staff" Pattern</h2>

      <p>The most powerful multi-agent pattern is deceptively simple: <strong>one main agent that delegates to specialized sub-agents.</strong></p>

      <Analogy>
        Think of a CEO with a Chief of Staff. The CEO (you) says "I need a market analysis and a blog post about it." The Chief of Staff (main agent) breaks that into tasks: tells the Researcher to gather data, tells the Analyst to crunch numbers, tells the Writer to draft the post, then compiles everything into a final deliverable. You never talk to the sub-agents directly. The Chief of Staff manages the workflow.
      </Analogy>

      <Code title="Chief of Staff pattern">{`# Main agent (Chief of Staff) receives:
"Analyze the AI agent market and write a blog post about it"

# It breaks this into sub-tasks:
1. → Researcher: "Find top 10 AI agent frameworks, their pricing,
     user counts, and key differentiators. Output to
     shared/inbox/research-ai-agents.md"

2. → Analyst: "Read shared/inbox/research-ai-agents.md. Compare
     frameworks on cost, capability, and ease of use.
     Score each 1-10. Output to shared/inbox/analysis-ai-agents.md"

3. → Writer: "Read research and analysis files. Write a 1500-word
     blog post titled 'Best AI Agent Frameworks in 2026'.
     Match our brand voice in SOUL.md.
     Output to shared/inbox/draft-ai-agents-blog.md"

4. Chief compiles, reviews, delivers to human.`}</Code>

      <h2>Avoiding "Too Many Cooks"</h2>

      <p>More agents doesn't always mean better results. Here are the failure modes:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">💥</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Write conflicts</strong> — two agents editing the same file simultaneously. Solution: each agent owns specific files.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">🔄</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Infinite loops</strong> — Agent A asks Agent B for input, B asks A for clarification, repeat forever. Solution: set max delegation depth.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">💸</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Cost explosion</strong> — 5 agents each using GPT-4 = 5x the cost. Solution: use cheap models for simple tasks, expensive for complex.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">🤷</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Responsibility diffusion</strong> — when nobody owns a task, nobody does it. Solution: explicit ownership in each agent's SOUL.md.</div>
        </div>
      </div>

      <h2>Real Example: Three Agents in Parallel</h2>

      <p>Here's a real setup running in production:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4">
          <div className="text-sm font-semibold text-emerald-400">📊 Market Analysis Agent (runs 6 AM daily)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Scans Twitter sentiment, pulls price data, generates trading plan. Writes to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">shared/market-briefing.md</code>. Cost: ~$0.80/day (GPT-4o-mini for scraping, Claude for analysis).</p>
        </div>
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
          <div className="text-sm font-semibold text-blue-400">✍️ Content Agent (runs 8 AM daily)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Reads market briefing + trending topics. Drafts 3-5 social posts. Writes to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">shared/content-drafts.md</code>. Cost: ~$0.50/day (Claude Sonnet).</p>
        </div>
        <div className="rounded-lg border border-[var(--accent-light)]/15 bg-[var(--accent-light)]/4 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">💡 Idea Validator (runs weekly)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Mines Reddit/Twitter for pain points, validates against market briefings, scores opportunities. Writes to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">shared/ideas-scored.md</code>. Cost: ~$2/week.</p>
        </div>
      </div>

      <p><strong>Total cost: ~$11/week for three specialized agents running autonomously.</strong> They share a knowledge base but each has private working space. The human reviews outputs for 15 minutes a day.</p>

      <h2>Cost Implications</h2>

      <p>Multi-agent setups multiply costs. Here's how to keep them sane:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">💡</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Match model to task</strong> — Researcher uses Haiku ($0.25/1M tokens), Writer uses Sonnet ($3/1M), Analyst uses Opus ($15/1M) only when needed.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">⏰</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Stagger schedules</strong> — don't run all agents at once. Sequential reduces peak cost and lets agents build on each other's output.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">📊</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Track per-agent cost</strong> — know which agent is expensive and whether its output justifies the cost.</div>
        </div>
      </div>

      <Quiz
        question="When should you add a second agent to your setup?"
        options={[
          { text: "As soon as your first agent is working well", explanation: "Working well = don't fix it. Only add complexity when you hit a real limit." },
          { text: "When your single agent's context is overflowing or it needs conflicting personalities", correct: true, explanation: "Correct! Context overflow, conflicting roles, parallel workloads, or cost optimization needs are the real triggers. Not boredom." },
          { text: "When you want to impress people with your setup", explanation: "Nobody is impressed by a complex system that costs 5x more and breaks more often. Results impress people." },
          { text: "After reading about multi-agent frameworks on Twitter", explanation: "Twitter makes everything look easy. Multi-agent adds real complexity. Only add it when single-agent fails." },
        ]}
      />

      <Quiz
        question="In the 'Chief of Staff' pattern, what does the main agent do?"
        options={[
          { text: "Does all the work itself and delegates the easy parts", explanation: "That defeats the purpose. The Chief delegates everything and focuses on coordination." },
          { text: "Breaks tasks into sub-tasks, delegates to specialists, and compiles results", correct: true, explanation: "Exactly! The main agent is a coordinator, not a worker. It decomposes, delegates, and assembles." },
          { text: "Runs all sub-agents simultaneously", explanation: "Sometimes parallel, sometimes sequential. The Chief decides the order based on dependencies." },
          { text: "Talks directly to the human while sub-agents work", explanation: "The Chief does communicate with the human, but its primary role is task decomposition and delegation." },
        ]}
      />

      <Checklist
        title="Multi-Agent Readiness Checklist"
        items={[
          "Confirmed your single agent is hitting at least one trigger (context overflow, conflicting roles, parallel needs, cost optimization)",
          "Defined clear responsibilities for each agent (no overlap)",
          "Set up shared vs. private memory boundaries",
          "Chosen communication pattern (file-based recommended for most)",
          "Assigned appropriate model tiers per agent (cheap for simple, expensive for complex)",
          "Implemented the Chief of Staff pattern for coordination",
          "Set up cost tracking per agent",
          "Tested with 2 agents before scaling to 3+",
          "Written explicit SOUL.md for each agent with its role and boundaries",
        ]}
      />

      <Tip emoji="🎯" title="Start With Two">
        Don't go from 1 agent to 5. Go from 1 to 2. Get the communication pattern working, debug the file ownership issues, understand the cost profile. Then add a third. Then maybe a fourth. The companies running 10+ agents started with 2 and scaled slowly. You should too.
      </Tip>
    </>
  );
}
