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
        Before we get into the technical stuff, let's understand <em>why</em> your agent needs three types of memory — not one, not five, but exactly three. This isn't arbitrary. It mirrors how human cognition actually works, and more importantly, it's the minimum viable architecture that actually holds up in production.
      </p>

      <Analogy>
        Think about how <strong>your kitchen</strong> works. You have three distinct storage areas, and each one serves a totally different purpose:
        <br /><br />
        🏪 <strong>The Pantry</strong> — long-term storage. Flour, rice, spices. Things that rarely change but you always need access to. You organized it once and it just works.<br /><br />
        🍳 <strong>The Countertop</strong> — active workspace. The ingredients you pulled out for tonight's dinner. Changes every day. You clean it up each night.<br /><br />
        📖 <strong>The Recipe Book</strong> — your personal notes. "Dad hates cilantro." "Use less salt than the recipe says." "Last time I burned the garlic at high heat." Wisdom accumulated over time.
      </Analogy>

      <p>Your agent's brain works the same way:</p>

      <div className="my-6 grid gap-4">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-blue-400 mb-1">🏪 Layer 1: Knowledge Base (The Pantry)</div>
          <p className="text-sm text-[var(--text-secondary)]">All your projects, reference materials, and organized information. Structured, searchable, rarely changes day-to-day. This is the stuff that's true regardless of what day it is.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">🍳 Layer 2: Daily Notes (The Countertop)</div>
          <p className="text-sm text-[var(--text-secondary)]">What's happening right now. Today's tasks, decisions, blockers, and priorities. Changes every day. Your agent reads this first thing in the morning. This is the "what did I do yesterday and what's next" layer.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">📖 Layer 3: Tacit Knowledge (The Recipe Book)</div>
          <p className="text-sm text-[var(--text-secondary)]">Your preferences, lessons learned, communication style. "Boss hates markdown tables." "Always include analysis, not just data." Compounds over time. This is the layer that makes your agent feel like it actually knows you.</p>
        </div>
      </div>

      <h2>Why Not Just One Big File?</h2>

      <p>This is the #1 mistake people make. "I'll just put everything in MEMORY.md!" Here's why that implodes:</p>

      <Analogy>
        Imagine keeping your pantry items, tonight's dinner ingredients, and your recipe notes all in the same drawer. Need cinnamon? Good luck finding it under today's chopped onions and a sticky note that says "Mom's allergic to shrimp."
      </Analogy>

      <p>
        That's what happens when people dump everything into one MEMORY.md file. The agent wastes time searching, grabs wrong context, and your conversations start with 10 minutes of "no, not that project, the other one."
      </p>

      <p>But it gets worse. A single file creates three specific failure modes:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Failure 1: Context Overflow</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Your MEMORY.md grows to 5,000 lines. The LLM's context window can't hold it all. Now your agent only reads the first chunk and misses critical info at the bottom. You don't even know what it's missing.</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Failure 2: Stale Context Pollution</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Last month's project notes sit next to today's tasks. Your agent brings up a project you finished 3 weeks ago because it's still in the file. You waste time saying "no, we're done with that."</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Failure 3: Preference Drift</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Your preferences from week 1 ("use formal language") contradict your preferences from week 4 ("be more casual"). Both are in the same file. Your agent oscillates randomly between the two.</p>
        </div>
      </div>

      <p>
        Separation is the key. Each layer has a purpose. Each layer is stored differently. And together, they give your agent something no single file can: <strong>the ability to think at different time scales</strong>.
      </p>

      <h2>How the Three Layers Work Together</h2>

      <p>Here's what happens when your agent starts a new conversation:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">1️⃣</span>
          <div className="text-sm"><strong className="text-[var(--accent-light)]">Tacit Knowledge loads first</strong> <span className="text-[var(--text-tertiary)]">— "Who is my human? What do they like? What should I avoid?" (Takes 2 seconds, rarely changes)</span></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">2️⃣</span>
          <div className="text-sm"><strong className="text-[var(--accent-light)]">Daily Notes load second</strong> <span className="text-[var(--text-tertiary)]">— "What's happening today? Where did we leave off?" (Takes 3 seconds, changes daily)</span></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">3️⃣</span>
          <div className="text-sm"><strong className="text-blue-300">Knowledge Base loads on-demand</strong> <span className="text-[var(--text-tertiary)]">— Agent only opens project files when needed. "Let me pull up the SaaS project details..." (Targeted reads, never loads everything)</span></div>
        </div>
      </div>

      <p>This loading order means your agent always has the most critical context first (who you are, what's happening today) and only fetches detailed project info when it's relevant. It's like how you walk into your kitchen knowing your preferences automatically, check the countertop for tonight's plan, and only open the pantry when you need a specific ingredient.</p>

      <h2>What Good Looks Like vs. What Bad Looks Like</h2>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="text-sm font-bold text-red-400 mb-3">❌ Bad: Single File Brain</div>
          <Code title="MEMORY.md">{`Everything goes here:
- Working on SaaS MVP
- Had a meeting Tuesday
- Hates markdown tables
- Stripe integration pending
- Prefer bullet lists
- Weather was nice today
- Old project X is archived
- Likes morning briefings
... (800 more lines of mixed context)`}</Code>
          <p className="text-xs text-[var(--text-tertiary)] mt-2">Agent is confused. Context is muddled. Slow. Grabs wrong info.</p>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-3">✅ Good: Three-Layer Brain</div>
          <Code title="File structure">{`knowledge/
  projects/saas-mvp.md    ← focused project details
  areas/social-media.md   ← ongoing responsibilities
  tacit.md                ← preferences & lessons

memory/
  2026-02-22.md           ← today's context
  2026-02-21.md           ← yesterday (for continuity)
  
# Each file is small, focused, purposeful`}</Code>
          <p className="text-xs text-[var(--text-tertiary)] mt-2">Agent is fast. Context is relevant. Knows exactly where to look.</p>
        </div>
      </div>

      <h2>Common Mistakes When Setting Up the Three Layers</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Putting everything in the Knowledge Base</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">If it changes daily, it's a daily note. If it's a preference, it's tacit knowledge. The knowledge base is for <strong>reference material that's true regardless of date</strong>.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Overcomplicating the structure</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You don't need 12 folders and a tagging system. PARA (four folders) is enough. If you find yourself creating sub-sub-sub-folders, stop. Simplicity beats organization.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Never cleaning up daily notes</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">After 30 days, you'll have 30 daily note files. That's fine — but you need a nightly cron (Chapter 5) to consolidate key learnings into the knowledge base. Otherwise you end up with 365 files and the agent can't find anything.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Writing tacit knowledge yourself</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Seed the file with 5 obvious preferences, then <strong>let the agent update it</strong>. Tell your agent: "When you learn something about my preferences, add it to tacit.md." This is way more effective than trying to pre-list every preference you have.</p>
        </div>
      </div>

      <Callout emoji="💡" title="The Compound Effect">
        <strong>Week 1:</strong> Your agent stops asking "what are we working on?" every morning.<br />
        <strong>Month 1:</strong> Your agent remembers your preferences better than your coworkers do.<br />
        <strong>Month 3:</strong> Your agent anticipates what you need before you ask. It feels like magic, but it's just good filing.<br />
        <strong>Month 6:</strong> You can't imagine working without it. Going back to a plain chatbot feels like downgrading from a smartphone to a flip phone.
      </Callout>

      <h2>A Quick Note on Token Costs</h2>

      <p>
        "But won't loading all these files burn through my API budget?" Great question. Here's the math:
      </p>

      <ul className="my-4 space-y-2 text-[var(--foreground)]/80 text-sm">
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">•</span> <span>Tacit knowledge file: ~500 tokens (~$0.001 per read)</span></li>
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">•</span> <span>Daily notes: ~800 tokens (~$0.002 per read)</span></li>
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">•</span> <span>Project file (on-demand): ~1,000 tokens (~$0.003 per read)</span></li>
      </ul>

      <p>
        That's about <strong>$0.006 per conversation</strong> in additional context. For context, a single GPT-4 conversation already costs $0.05-0.50 depending on length. The memory files add roughly 1-5% overhead. The time you save re-explaining context? Priceless. (Well, about $0.10-0.50 per conversation, technically.)
      </p>

      <p>
        Now let's build each layer. Starting with the foundation: the Knowledge Base.
      </p>

      <BrainDiagram />

      <Quiz
        question="Which memory layer stores 'always use Tailwind, never use CSS modules'?"
        options={[
          { text: "Knowledge Base", explanation: "Close — project standards could go here, but 'always/never' preferences are more personal." },
          { text: "Daily Notes", explanation: "Daily notes are for what happened today, not permanent preferences." },
          { text: "Tacit Knowledge", correct: true, explanation: "Correct! Tacit knowledge captures your preferences, biases, and unwritten rules — the 'vibes' layer." },
        ]}
      />

      <Tip emoji="💡" title="Pro Tip: Start with just 3 files">
        Don't over-engineer your memory system on day one. Start with: <strong>1)</strong> A project overview, <strong>2)</strong> Your preferences/rules, <strong>3)</strong> Today's notes. You can add more layers as you discover what your agent keeps forgetting.
      </Tip>
    </>
  );
}
