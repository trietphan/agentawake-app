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
        You've got an agent with memory. It writes markdown files. It reads them back. It remembers things. But <strong>you</strong> can't see any of it. It's like hiring a brilliant assistant who keeps all their notes in a locked filing cabinet. That's what Obsidian fixes.
      </p>

      <Analogy>
        Your agent's workspace is the kitchen pantry — organized shelves, labeled containers, everything in its place. Obsidian is walking into the kitchen and <strong>opening all the cabinets at once.</strong> You can see what's stocked, what's expired, what's missing. You can rearrange the shelves. You can add sticky notes. Without Obsidian, you're yelling ingredient requests through a closed door.
      </Analogy>

      <h2>Why Obsidian Is the Perfect Match</h2>

      <p>Here's the beautiful accident: AI agents already think in markdown. OpenClaw writes <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">.md</code> files. Claude reads <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">.md</code> files. Your MEMORY.md, your daily notes, your PARA knowledge base — it's all plain text sitting in folders.</p>

      <p>And Obsidian? It's a markdown editor that turns folders of <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">.md</code> files into a <strong>visual knowledge graph.</strong></p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">📄 Same format</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Obsidian uses plain markdown. Your agent uses plain markdown. Zero translation layer.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">💻 Local-first</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">No cloud dependency. Your data stays on your machine. They're roommates sharing a fridge.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔄 Bi-directional</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You edit in Obsidian, your agent sees it instantly. Your agent writes a file, it appears in Obsidian instantly. No sync delay.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🕸️ Visual</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">The knowledge graph shows connections between notes. You can literally <em>see</em> when your agent's memory has gaps.</p>
        </div>
      </div>

      <h2>Setting Up the Shared Vault</h2>

      <p>This is almost embarrassingly simple:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">1️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80">Open Obsidian</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">2️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80">Click "Open folder as vault"</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">3️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80">Navigate to your OpenClaw workspace (<code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">~/.openclaw/workspace/</code>)</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">4️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80">Click "Open" — that's it. Your agent's entire memory is now browsable.</div>
        </div>
      </div>

      <h2>Teaching Your Agent Wiki-Links</h2>

      <p>The knowledge graph gets powerful when your agent starts using Obsidian-style wiki-links. Add this to your AGENTS.md:</p>

      <Code title="AGENTS.md (add this section)">{`## Note Linking
When referencing other files in the workspace, use Obsidian-style wiki-links:
- Instead of: see memory/2024-01-15.md
- Use: see [[2024-01-15]]
- Instead of: check knowledge/projects/agentawake.md
- Use: check [[agentawake]]`}</Code>

      <h2>The Five Essential Plugins</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">🔍 1. Smart Connections — Vector Search for Your Notes</div>
          <p className="text-sm text-[var(--text-secondary)]">Embeds all your notes into vectors and lets you find semantically similar content. It's like Netflix recommendations, but for your notes.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-blue-400 mb-1">📊 2. Dataview — Query Notes Like a Database</div>
          <p className="text-sm text-[var(--text-secondary)]">Write queries against your notes' frontmatter and content. "Show all daily notes from the last week" or "List all active projects."</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">📝 3. Templater — Structured Capture</div>
          <p className="text-sm text-[var(--text-secondary)]">Auto-generates notes from templates. Ensures new project docs follow the same structure your agent expects.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-green-400 mb-1">📅 4. Daily Notes — Mirror Your Agent's Memory</div>
          <p className="text-sm text-[var(--text-secondary)]">Configure to use the same <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">memory/</code> folder. Open Obsidian in the morning → see what your agent did overnight.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-pink-400 mb-1">🎨 5. Canvas — Visual Thinking</div>
          <p className="text-sm text-[var(--text-secondary)]">Infinite whiteboard for mapping agent memory architecture, planning multi-agent workflows, and creating visual decision trees.</p>
        </div>
      </div>

      <h2>The Bi-Directional Workflow</h2>

      <Callout emoji="✨" title="The Magic Moment">
        The first time you edit a note in Obsidian and your agent references that edit in its next response — without you telling it to look — that's when you realize you're not using a tool anymore. You're <strong>collaborating with a partner</strong> who happens to think in text files.
      </Callout>

      <h3>Agent → Human Flow</h3>
      <p>Your agent writes daily notes, project updates, and new memories. <strong>You</strong> open Obsidian and see what happened at a glance, read daily notes, spot patterns, and reorganize notes.</p>

      <h3>Human → Agent Flow</h3>
      <p><strong>You</strong> add context to project docs, create notes with instructions, edit MEMORY.md, and add links between related notes. Your <strong>agent</strong> picks up new context automatically.</p>

      <h2>Reading the Knowledge Graph</h2>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">✅ Healthy Graph</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Dense clusters around active projects</li>
            <li>• Bridges between clusters (cross-references)</li>
            <li>• Few orphan nodes (cleanup queue)</li>
            <li>• Clear PARA hierarchy visible</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="text-sm font-bold text-red-400 mb-2">🚩 Red Flags</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• One giant cluster, everything else isolated</li>
            <li>• No connections between daily notes and projects</li>
            <li>• Tons of orphan nodes (memory bloat)</li>
            <li>• Stale clusters with no new connections</li>
          </ul>
        </div>
      </div>

      <h2>The Weekly Review</h2>

      <p>Spend 10 minutes once a week in the graph view:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🔭</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Zoom out</strong> — Does the overall shape make sense? Are clusters balanced?</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🔗</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Check orphans</strong> — Any notes floating alone? Link them or archive them.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🆕</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Review recent nodes</strong> — What did your agent create this week?</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🧹</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Prune dead links</strong> — Any links pointing to deleted files?</div>
        </div>
      </div>

      <h2>Common Pitfalls</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 "My agent's notes are messy!"</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">That's normal. Agents optimize for speed, not aesthetics. Use Obsidian to reorganize — your agent will adapt.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 "My agent keeps overwriting my edits!"</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Define clear ownership zones: "Human Notes" section = yours. "Agent Updates" section = theirs. Document this in AGENTS.md.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 "Obsidian is slow with a huge vault!"</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Use "Excluded files" to hide the memory/ archive. You can still access it — it just won't load on startup.</p>
        </div>
      </div>

      <Quiz
        question="Your agent writes a daily note at 2 AM. When can you see it in Obsidian?"
        options={[
          { text: "After you restart Obsidian", explanation: "No restart needed — Obsidian watches the filesystem." },
          { text: "After you run a sync command", explanation: "No sync needed — same folder, same files." },
          { text: "Immediately — it's the same folder", correct: true, explanation: "Correct! Same folder, same files. Obsidian watches the filesystem in real-time." },
          { text: "After the next heartbeat", explanation: "Heartbeats are an agent concept. Obsidian reads from disk directly." },
        ]}
      />

      <Checklist
        title="Second Brain Setup Checklist"
        items={[
          "Installed Obsidian and pointed it at your agent's workspace",
          "Opened the knowledge graph view and explored it",
          "Installed Smart Connections and Daily Notes plugins",
          "Added wiki-link instructions to AGENTS.md",
          "Created at least one template for new project docs",
          "Done your first weekly review of the graph",
          "Identified orphan notes and linked or archived them",
          "Set up ownership zones (Human Notes / Agent Updates)",
        ]}
      />

      <Tip emoji="🧠" title="The Human Layer">
        The knowledge graph in Obsidian isn't just pretty — it's <strong>diagnostic</strong>. Your agent handles the work. You handle the <strong>oversight</strong>. Obsidian makes oversight visual and intuitive. This is the "human layer" of AI agent management.
      </Tip>
    </>
  );
}
