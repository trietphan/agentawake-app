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
        Most people run GPT-4o for everything and wonder why their bill is $200/month. The truth? <strong>90% of your agent's tasks don't need the smartest model.</strong> This chapter shows you how to cut costs 80% without sacrificing quality.
      </p>

      <Analogy>
        You don't hire a brain surgeon to take your blood pressure. Different tasks need different expertise levels. Your agent's model selection should work the same way — use the expensive specialist for hard problems, and the fast generalist for everything else.
      </Analogy>

      <h2>Why Most People Overspend (and How to Stop)</h2>

      <p>The #1 cost mistake isn't using the wrong model — it's using the <em>right</em> model for the <em>wrong tasks</em>. Here's what typical spending looks like before optimization:</p>

      <div className="my-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
        <div className="text-sm font-bold text-red-400 mb-3">💸 Typical "I didn't think about costs" Setup</div>
        <div className="space-y-2 text-xs text-[var(--text-secondary)]">
          <div className="flex justify-between"><span>Morning briefing (Opus, daily)</span><span className="text-red-300">~$15/mo</span></div>
          <div className="flex justify-between"><span>Heartbeat checks (Opus, every 30 min)</span><span className="text-red-300">~$45/mo</span></div>
          <div className="flex justify-between"><span>Content drafts (Opus, daily)</span><span className="text-red-300">~$12/mo</span></div>
          <div className="flex justify-between"><span>Social monitoring (Opus, 4x daily)</span><span className="text-red-300">~$20/mo</span></div>
          <div className="flex justify-between"><span>Chat conversations (Opus, 20 msgs/day)</span><span className="text-red-300">~$60/mo</span></div>
          <div className="flex justify-between border-t border-red-500/20 pt-2 mt-2 font-bold"><span className="text-[var(--foreground)]">Total</span><span className="text-red-400">~$152/mo 😱</span></div>
        </div>
      </div>

      <p>Now the same setup, optimized with model routing:</p>

      <div className="my-6 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
        <div className="text-sm font-bold text-green-400 mb-3">✅ Same Tasks, Smart Model Selection</div>
        <div className="space-y-2 text-xs text-[var(--text-secondary)]">
          <div className="flex justify-between"><span>Morning briefing (<strong>Sonnet</strong>, daily)</span><span className="text-green-300">~$2/mo</span></div>
          <div className="flex justify-between"><span>Heartbeat checks (<strong>Haiku</strong>, every 30 min)</span><span className="text-green-300">~$0.50/mo</span></div>
          <div className="flex justify-between"><span>Content drafts (<strong>Sonnet</strong>, daily)</span><span className="text-green-300">~$2/mo</span></div>
          <div className="flex justify-between"><span>Social monitoring (<strong>Haiku</strong>, 4x daily)</span><span className="text-green-300">~$0.30/mo</span></div>
          <div className="flex justify-between"><span>Chat conversations (<strong>Sonnet</strong>, 20 msgs/day)</span><span className="text-green-300">~$5/mo</span></div>
          <div className="flex justify-between border-t border-green-500/20 pt-2 mt-2 font-bold"><span className="text-[var(--foreground)]">Total</span><span className="text-green-400">~$10/mo ✨</span></div>
        </div>
      </div>

      <p><strong>Same output quality for 93% less cost.</strong> The heartbeat doesn't need Opus to check "any new emails?" The social monitor doesn't need Opus to count likes. Match the model to the task complexity, and your bill plummets.</p>

      <h2>The Context Window Tax</h2>

      <p>There's a hidden cost most people miss: <strong>context window bloat</strong>. Every message in a long conversation gets re-sent as context. A 50-message chat with a 10K-token system prompt means you're paying for that system prompt 50 times.</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">Fix 1: Use Isolated Sessions for Cron Jobs</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Each cron job starts fresh — no accumulated history. This alone can cut cron costs by 60-80% compared to running everything in the main session.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">Fix 2: Compact Conversations Regularly</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">When your main session hits 100K tokens, run <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">/compact</code>. This summarizes old messages and frees up context, reducing the per-message cost of future interactions.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">Fix 3: Keep System Prompts Lean</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">A 15K-token AGENTS.md means 15K tokens charged on every single message. Move detailed procedures to knowledge base files that are read on-demand, not loaded every turn.</p>
        </div>
      </div>

      <h2>The Model Tier Strategy</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">🟢 Tier 1: Fast & Cheap ($0.10-0.50/day)</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Use for: simple replies, formatting, classification, routine tasks</p>
          <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
            <li>• <strong>GPT-4o-mini</strong> — $0.15/1M input, $0.60/1M output</li>
            <li>• <strong>Claude 3.5 Haiku</strong> — $0.25/1M input, $1.25/1M output</li>
            <li>• <strong>Gemini Flash</strong> — $0.075/1M input, $0.30/1M output</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">🔵 Tier 2: Smart & Balanced ($1-5/day)</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Use for: content writing, analysis, code generation, research synthesis</p>
          <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
            <li>• <strong>Claude Sonnet</strong> — $3/1M input, $15/1M output</li>
            <li>• <strong>GPT-4o</strong> — $2.50/1M input, $10/1M output</li>
            <li>• <strong>Gemini Pro</strong> — $1.25/1M input, $5/1M output</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🟣 Tier 3: Expert & Expensive ($5-20/day)</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Use for: complex reasoning, architecture decisions, strategy, debugging hard problems</p>
          <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
            <li>• <strong>Claude Opus</strong> — $15/1M input, $75/1M output</li>
            <li>• <strong>GPT-4.5</strong> — $75/1M input, $150/1M output</li>
            <li>• <strong>o1 / o3</strong> — Variable, reasoning-heavy</li>
          </ul>
        </div>
      </div>

      <h2>Task-to-Model Mapping</h2>

      <Code title="knowledge/config/model-routing.md">{`# Model Routing Rules

## Use CHEAP model (Haiku/Flash/4o-mini):
- Formatting text (markdown, JSON conversion)
- Simple classification ("is this urgent?")
- Acknowledging messages ("got it, working on it")
- Heartbeat checks (is anything new?)
- Reading and summarizing short documents

## Use BALANCED model (Sonnet/4o/Gemini Pro):
- Writing content (tweets, posts, newsletters)
- Research synthesis (combining multiple sources)
- Code generation (new features, bug fixes)
- Data analysis (trends, patterns)
- Cron job outputs (daily reports, plans)

## Use EXPERT model (Opus/o3) — sparingly:
- Architecture decisions ("how should I structure this?")
- Debugging complex issues
- Strategy and planning
- Code review for critical systems
- When Sonnet gets it wrong twice`}</Code>

      <h2>🔌 Platform-Specific Cost Optimization</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="text-sm font-bold text-cyan-400 mb-2">🐾 OpenClaw</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Set default model to Sonnet in config, override to Opus only for complex tasks</li>
            <li>• Use <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">--model</code> per cron job to pick the right tier</li>
            <li>• Set <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">contextTokens: 50000</code> instead of 200k — most tasks don't need huge context</li>
            <li>• Use isolated sessions for cron jobs — they start fresh without dragging history</li>
            <li>• Run <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">/compact</code> when context exceeds 100k to avoid paying for repeated context</li>
          </ul>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">🤖 Claude API</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Use prompt caching — repeated system prompts cost 90% less after first call</li>
            <li>• Haiku for preprocessing, Sonnet for main work, Opus only for review</li>
            <li>• Set <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">max_tokens</code> to limit output length (don't pay for rambling)</li>
            <li>• Batch API: 50% discount for non-time-sensitive tasks (reports, analysis)</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">💬 ChatGPT / OpenAI API</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• GPT-4o-mini for 80% of tasks — it's shockingly good for the price</li>
            <li>• Use structured outputs (JSON mode) to reduce output tokens</li>
            <li>• Batch API: 50% off for async processing</li>
            <li>• Avoid GPT-4.5 unless genuinely needed — it's 30x more expensive than 4o</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🚀 CrewAI / LangChain</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Assign cheaper models to simple agents (research → Haiku, writing → Sonnet)</li>
            <li>• Set max_iterations per agent to prevent runaway loops</li>
            <li>• Cache tool results — don't re-search the same query twice</li>
            <li>• Use LangSmith/Arize to identify which agents burn the most tokens</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">⚡ n8n / Make / Zapier</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Use AI nodes sparingly — each one is an API call</li>
            <li>• Combine multiple prompts into one node where possible</li>
            <li>• Cache results in a database instead of re-querying</li>
            <li>• Set usage alerts — Zapier/Make can spiral costs if workflows run too often</li>
          </ul>
        </div>
        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="text-sm font-bold text-yellow-400 mb-2">💻 Cursor / Windsurf / Cline</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Use "fast" model for autocomplete, "smart" model only for complex edits</li>
            <li>• Be specific in prompts — vague prompts = more back-and-forth = more tokens</li>
            <li>• Use @file references instead of pasting entire files into chat</li>
            <li>• Cursor Pro ($20/mo) vs API credits — calculate which is cheaper for your usage</li>
          </ul>
        </div>
      </div>

      <h2>The Monthly Budget Framework</h2>

      <div className="my-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="text-sm font-bold text-[var(--foreground)] mb-3">Example: SaaS Operator Running 3 Daily Automations</div>
        <div className="space-y-2 text-xs text-[var(--text-secondary)]">
          <div className="flex justify-between"><span>Trading plan (Sonnet, daily)</span><span className="text-[var(--foreground)]/80">~$1.50/mo</span></div>
          <div className="flex justify-between"><span>Content research (Sonnet, daily)</span><span className="text-[var(--foreground)]/80">~$2.00/mo</span></div>
          <div className="flex justify-between"><span>Idea validation (Opus, weekly)</span><span className="text-[var(--foreground)]/80">~$3.00/mo</span></div>
          <div className="flex justify-between"><span>Heartbeats & misc (Haiku, ongoing)</span><span className="text-[var(--foreground)]/80">~$0.50/mo</span></div>
          <div className="flex justify-between"><span>Interactive chat (Sonnet, ~20 msgs/day)</span><span className="text-[var(--foreground)]/80">~$5.00/mo</span></div>
          <div className="flex justify-between border-t border-[var(--border)] pt-2 mt-2 font-bold"><span className="text-[var(--foreground)]">Total</span><span className="text-green-400">~$12/mo</span></div>
        </div>
      </div>

      <Callout emoji="💡" title="The 80/20 Rule of AI Costs">
        <strong>80% of your costs come from 20% of your tasks.</strong> Find those expensive tasks (usually: long conversations with big context, or unnecessarily using Opus/o3 for simple work). Fix those, and your bill drops dramatically. Most operators should be under $15/month.
      </Callout>

      <CostCalculator />

      <Tip emoji="🧪" title="Experiment: Run your agent on Haiku for a day">
        Switch your agent to the cheapest model for one full day. You'll be surprised how many tasks it handles just fine. Then switch back to Sonnet only for the tasks that actually needed it. Most people discover 60-70% of their tasks work perfectly on cheap models.
      </Tip>
    </>
  );
}
