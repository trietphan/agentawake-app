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
        Your flat files have been working beautifully. Then one day you ask: "What was the reasoning behind the pricing change we made after that customer complaint in November?" And your agent fumbles. It finds the pricing change. Finds <em>a</em> customer complaint. But can't connect them. Your flat files just hit their ceiling.
      </p>

      <Analogy>
        Think of agent memory like housing. A studio apartment (flat files) works great when you're starting out. A one-bedroom with a closet organizer (Obsidian) lets you find things. A house with a smart filing system (vector DB) finds the closest match. A house with a librarian who understands <em>relationships</em> (knowledge graph) — that's the upgrade.
      </Analogy>

      <h2>The Memory Maturity Ladder</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--text-secondary)] mb-1">Level 1: Flat Files</div>
          <p className="text-sm text-[var(--text-tertiary)]">MEMORY.md, daily notes, raw markdown. Simple, cheap, works great starting out.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--text-secondary)] mb-1">Level 2: Structured Markdown + Obsidian</div>
          <p className="text-sm text-[var(--text-tertiary)]">PARA method, wiki-links, visual graph. Same stuff, but you can find things.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-blue-400 mb-1">Level 3: Vector DB + RAG</div>
          <p className="text-sm text-[var(--text-tertiary)]">What OpenClaw already does under the hood. Describe what you want, it finds the closest match.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">Level 4: Knowledge Graphs</div>
          <p className="text-sm text-[var(--text-tertiary)]">Understands <em>relationships</em>. "The contract signed after the meeting where Bob disagreed." The librarian gets it.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">Level 5: Tiered Cognitive Memory</div>
          <p className="text-sm text-[var(--text-tertiary)]">Different rooms for different thinking: whiteboard (working), journal (episodic), encyclopedia (semantic), recipe book (procedural).</p>
        </div>
      </div>

      <Callout emoji="⚠️" title="Don't Upgrade Because It Sounds Cool">
        Most people reading this are at Level 1 or 2. <strong>That's fine.</strong> Don't upgrade until you hit a real wall. The best memory system matches your <strong>actual</strong> complexity, not your aspirational complexity.
      </Callout>

      <h2>The Three Triggers: When to Upgrade</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-sm font-bold text-red-400">Trigger 1: The Multi-Agent Tangle (&gt;3 Agents)</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1"><strong>Symptom:</strong> Agents contradict each other. Info gets lost. You're manually mediating between agent memories.</p>
          <p className="text-xs text-[var(--text-tertiary)] mt-1"><strong>Upgrade:</strong> Shared vector DB or knowledge graph with read/write isolation.</p>
        </div>
        <div className="rounded-lg border border-[var(--accent-light)]/15 bg-[var(--accent-light)]/4 p-4">
          <div className="text-sm font-bold text-[var(--accent-light)]">Trigger 2: The Time Horizon Problem (&gt;90 Days)</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1"><strong>Symptom:</strong> Agent gives outdated answers. Search results feel random. You're manually pruning files.</p>
          <p className="text-xs text-[var(--text-tertiary)] mt-1"><strong>Upgrade:</strong> Knowledge graph with temporal awareness, or aggressive consolidation pipeline.</p>
        </div>
        <div className="rounded-lg border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-4">
          <div className="text-sm font-bold text-[var(--accent-light)]">Trigger 3: The Multi-Hop Failure</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1"><strong>Symptom:</strong> Complex questions get wrong answers. Agent finds piece A and C but misses the connection through B.</p>
          <p className="text-xs text-[var(--text-tertiary)] mt-1"><strong>Upgrade:</strong> Knowledge graph. Full stop.</p>
        </div>
      </div>

      <h2>Option 1: Vector DB + RAG (You Already Have This)</h2>

      <p>When your agent uses <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">memory_search</code>, it's doing vector search. Your markdown files are the source. Vector similarity is the retrieval.</p>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">✅ Where It Shines</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Simple to set up (already set up)</li>
            <li>• Great for "find me things about X"</li>
            <li>• Handles large volumes of text</li>
            <li>• Cost-effective — embedding is cheap</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="text-sm font-bold text-red-400 mb-2">❌ Where It Plateaus</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• No understanding of relationships</li>
            <li>• No temporal awareness</li>
            <li>• Multi-hop queries fail</li>
            <li>• Duplicate/conflicting info returned</li>
          </ul>
        </div>
      </div>

      <h2>Option 2: Graph Memory (Mem0, Graphiti/Zep)</h2>

      <Analogy>
        Think of it as a detective's evidence board. Photos (nodes) connected by red string (edges), with dates on each connection. You can follow the string from suspect to crime to witness to alibi.
      </Analogy>

      <Code title="Example: Graph Relationships">{`Nodes:
  Alice (person)
  Q3 Review (event, date: 2024-09-15)
  Pivot to B2B (decision, date: 2024-09-16)
  Project Phoenix (project, started: 2024-09-20)

Edges:
  Alice → attended → Q3 Review
  Q3 Review → resulted in → Pivot to B2B
  Pivot to B2B → spawned → Project Phoenix
  Alice → leads → Project Phoenix`}</Code>

      <p>Now "What came out of the Q3 review?" follows the edges: Review → Decision → Project. Multi-hop? Easy.</p>

      <h2>Option 3: Tiered Cognitive Memory</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🧠 Working Memory</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">What the agent thinks about <em>right now</em>. Small, fast, ephemeral. Your current conversation context.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">📔 Episodic Memory</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Specific experiences with timestamps. "On Jan 15th, the deploy failed because of a missing env var." Your daily notes.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">📚 Semantic Memory</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">General knowledge and facts. "The production DB is on AWS us-east-1." No timestamp needed. MEMORY.md, knowledge base.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔧 Procedural Memory</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">How to do things. "To deploy, run <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">git push origin main</code> then check Vercel." AGENTS.md, skill files.</p>
        </div>
      </div>

      <h2>The Pragmatic Recommendation</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
          <div className="text-sm font-bold text-green-400">1-2 agents, &lt;6 months of history</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Keep markdown + Obsidian + OpenClaw's vector search. <strong>Stop here.</strong> This handles 90% of use cases.</p>
        </div>
        <div className="rounded-lg border border-[var(--accent-light)]/20 bg-[var(--accent-light)]/4 p-4">
          <div className="text-sm font-bold text-[var(--accent-light)]">Hit a trigger (3+ agents, &gt;90 days, multi-hop failures)</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Add Mem0. Keep markdown as source of truth backup. <strong>Sweet spot for power users.</strong></p>
        </div>
        <div className="rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4">
          <div className="text-sm font-bold text-[var(--accent-light)]">Production systems (paying customers, SLAs)</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Add Graphiti/Zep for temporal reasoning. Implement tiered memory. Use a proper vector DB. <strong>Enterprise territory.</strong></p>
        </div>
      </div>

      <h2>Setting Up Mem0</h2>

      <Code title="lib/mem0.ts">{`import { MemoryClient } from 'mem0ai';

const mem0 = new MemoryClient({
  apiKey: process.env.MEM0_API_KEY,
});

// Store a memory
export async function addMemory(
  content: string,
  userId: string,
  metadata?: Record<string, any>
) {
  return await mem0.add(
    [{ role: 'user', content }],
    { user_id: userId, metadata }
  );
}

// Search memories
export async function searchMemory(query: string, userId: string) {
  return await mem0.search(query, {
    user_id: userId,
    limit: 10,
  });
}`}</Code>

      <h2>The Bridge Pattern: Gradual Migration</h2>

      <p>Don't rip out markdown to add a graph. Use the <strong>bridge pattern</strong>:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">1️⃣</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Keep writing to markdown</strong> — source of truth and backup</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">2️⃣</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Sync to your graph</strong> — nightly job pushes new notes</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">3️⃣</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Query the graph first</strong> — complex questions hit graph; simple ones hit files</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">4️⃣</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Fall back gracefully</strong> — if graph is down, agent still works with markdown</div>
        </div>
      </div>

      <Code title="The bridge pattern in code">{`async function agentSearch(query: string, agentId: string) {
  // Try graph first for complex queries
  if (isComplexQuery(query)) {
    try {
      const graphResults = await searchMem0(query, agentId);
      if (graphResults.length > 0) return graphResults;
    } catch (e) {
      console.warn('Graph search failed, falling back');
    }
  }
  // Fall back to vector/markdown search
  return await vectorSearch(query, agentId);
}

function isComplexQuery(query: string): boolean {
  const indicators = [
    'before', 'after', 'because', 'led to',
    'resulted in', 'changed', 'decided',
    'when did', 'why did', 'how did',
  ];
  return indicators.some(i =>
    query.toLowerCase().includes(i)
  );
}`}</Code>

      <h2>Cost Comparison</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Markdown + Vector Search</div>
            <div className="text-xs text-green-400 font-bold">Free — $5/mo</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Already done. Minimal maintenance. Good for single agent, &lt;90 days.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Mem0 (Managed)</div>
            <div className="text-xs text-[var(--accent-light)] font-bold">Free — $49/mo</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">30 min setup. Near zero maintenance. Good for 1-3 agents, production.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Graphiti/Zep (Self-Hosted)</div>
            <div className="text-xs text-[var(--accent-light)] font-bold">$50 — $100/mo</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Half-day setup. High maintenance. Good for temporal reasoning, multi-agent.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Full Tiered Cognitive Memory</div>
            <div className="text-xs text-red-400 font-bold">$100 — $500/mo</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">1-2 weeks setup. Enterprise territory. Hire someone who's done this before.</p>
        </div>
      </div>

      <h2>The Decision Framework</h2>

      <p>Ask these in order. Stop at the first "yes":</p>

      <div className="my-6 space-y-2">
        <div className="rounded-lg bg-[var(--surface-hover)]/30 p-3 text-sm">
          <strong className="text-[var(--foreground)]">1.</strong> <span className="text-[var(--text-secondary)]">"1-2 agents, &lt;90 days?" →</span> <span className="text-green-400 font-semibold">Stay with markdown + Obsidian.</span>
        </div>
        <div className="rounded-lg bg-[var(--surface-hover)]/30 p-3 text-sm">
          <strong className="text-[var(--foreground)]">2.</strong> <span className="text-[var(--text-secondary)]">"Multi-hop failures or temporal confusion?" →</span> <span className="text-[var(--accent-light)] font-semibold">Add Mem0.</span>
        </div>
        <div className="rounded-lg bg-[var(--surface-hover)]/30 p-3 text-sm">
          <strong className="text-[var(--foreground)]">3.</strong> <span className="text-[var(--text-secondary)]">"Need point-in-time queries?" →</span> <span className="text-[var(--accent-light)] font-semibold">Add Graphiti/Zep.</span>
        </div>
        <div className="rounded-lg bg-[var(--surface-hover)]/30 p-3 text-sm">
          <strong className="text-[var(--foreground)]">4.</strong> <span className="text-[var(--text-secondary)]">"Building a product with memory as core feature?" →</span> <span className="text-blue-400 font-semibold">Tiered cognitive memory.</span>
        </div>
        <div className="rounded-lg bg-[var(--surface-hover)]/30 p-3 text-sm">
          <strong className="text-[var(--foreground)]">5.</strong> <span className="text-[var(--text-secondary)]">"10+ agents serving paying customers?" →</span> <span className="text-red-400 font-semibold">Go enterprise. Hire help.</span>
        </div>
      </div>

      <Quiz
        question="Your agent has been running for 2 months with a single workspace and answers past questions correctly. Should you add Mem0?"
        options={[
          { text: "Yes, more memory is always better", explanation: "More complexity isn't always better. If it's working, don't fix it." },
          { text: "No — it's working fine, don't fix what isn't broken", correct: true, explanation: "Exactly! Upgrade when you hit a trigger, not before. If it ain't broke, don't architect it." },
          { text: "Yes, but only the free tier", explanation: "Even the free tier adds complexity you don't need yet." },
          { text: "Only if adding more agents soon", explanation: "Reasonable if you *know* more agents are coming, but 'soon' can mean 'never.' Wait for the trigger." },
        ]}
      />

      <Quiz
        question="You ask 'Why did we change pricing after the October meeting?' and the agent gives you the pricing change but not the connection to the meeting. What type of failure is this?"
        options={[
          { text: "Vector search limitation — can't chain events", correct: true, explanation: "Classic multi-hop failure. The meeting, decision, and pricing change are semantically related but the causal chain requires graph traversal, not similarity search." },
          { text: "The daily notes don't have enough detail", explanation: "Detail isn't the issue — the connection between events is. Each piece exists, but the link is missing." },
          { text: "The agent needs more context window", explanation: "Context window size isn't the bottleneck. The retrieval method (similarity search) can't chain causal relationships." },
          { text: "The embedding model is too small", explanation: "A bigger embedding model still does similarity search. It won't understand that event A caused event B." },
        ]}
      />

      <Checklist
        title="Memory Scaling Checklist"
        items={[
          "Identified your current level on the memory maturity ladder",
          "Assessed whether any of the three triggers apply right now",
          "If upgrading: chosen between Mem0 (simplicity) and Graphiti (temporal power)",
          "If NOT upgrading: bookmarked this chapter for 60-day revisit",
          "If implementing: set up the bridge pattern so markdown still works",
          "Resisted the urge to build the most complex option just because it sounds cool",
        ]}
      />

      <Tip emoji="🧪" title="The Real Talk">
        The best memory system is the one that matches your <strong>actual complexity</strong>, not your <strong>aspirational complexity</strong>. Start simple. Stay simple as long as it works. Upgrade when — and only when — you hit a real wall. Go check if your current system is actually failing, or if you're just looking for an excuse to play with graph databases.
      </Tip>
    </>
  );
}
