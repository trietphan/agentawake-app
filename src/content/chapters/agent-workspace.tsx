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
        Everyone wants to give their agent a fancy vector database, a knowledge graph, or some enterprise-grade storage layer. Meanwhile, the agents that actually <strong>ship results every day</strong> are reading and writing plain files in a well-organized folder. Your agent doesn't need a database. It needs a well-organized desk.
      </p>

      <Analogy>
        Think about the most productive person you know. They probably don't have a custom-built productivity app. They have a <strong>clean desk, labeled folders, and a system they actually follow.</strong> Your agent is the same. A messy workspace with random file names is like giving your assistant a desk covered in sticky notes, coffee stains, and unmarked folders. They'll spend more time looking for things than doing things.
      </Analogy>

      <h2>The Workspace as an API</h2>

      <p>Here's the mental shift that changes everything: <strong>your file system is your agent's API.</strong> When your agent needs to store data, it writes a file. When it needs to retrieve data, it reads a file. When it needs to communicate with you (or another agent), it updates a file.</p>

      <p>This isn't a limitation — it's a superpower. Files are:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">👁️ Human-readable</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You can open any file and see exactly what your agent knows. No query language, no admin panel. Just a text editor.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔄 Version-controllable</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Every change is trackable with git. You can see what your agent wrote, when, and revert anything.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🤝 Universally compatible</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Every AI model, every framework, every tool can read and write files. No vendor lock-in.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">💪 Debuggable</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">When something goes wrong, you open the file. No "check the logs" dance. The file IS the log.</p>
        </div>
      </div>

      <h2>File Naming Conventions That Actually Matter</h2>

      <p>Your agent processes file names to understand what's inside. Bad names = confused agent. Good names = an agent that can navigate your workspace without instructions.</p>

      <Code title="Good vs. Bad file names">{`# ❌ Bad — your agent has no idea what these are
notes.md
draft.md
stuff.md
todo.md
meeting.md

# ✅ Good — your agent instantly knows what, when, and why
2026-02-24-market-analysis.md
draft-blog-ai-agent-memory.md
project-agentawake-status.md
todo-weekly-review.md
meeting-2026-02-20-product-roadmap.md`}</Code>

      <p>The pattern is simple: <strong>date-prefix for temporal files, type-prefix for categorical files.</strong> Your agent can sort by date, filter by type, and find anything without a search index.</p>

      <Callout emoji="📏" title="The Naming Rules">
        <strong>1.</strong> Always use ISO dates: <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">YYYY-MM-DD</code> (sorts correctly alphabetically)<br />
        <strong>2.</strong> Use hyphens, not spaces or underscores<br />
        <strong>3.</strong> Be descriptive but concise: <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">project-name-topic.md</code><br />
        <strong>4.</strong> Consistent extensions: <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">.md</code> for everything your agent reads/writes
      </Callout>

      <h2>The .md File as Universal Interface</h2>

      <p>Markdown is the <strong>lingua franca</strong> between humans and agents. It's readable by both, writable by both, and structured enough to parse but flexible enough to handle anything. JSON is too rigid. Plain text has no structure. Markdown is the Goldilocks zone.</p>

      <Analogy>
        Markdown is like English in international business. It's not anyone's native language (well, maybe some developers'), but everyone speaks it well enough. Your agent writes markdown, you read it in Obsidian or VS Code or GitHub. You write markdown, your agent parses it perfectly. No translation layer needed.
      </Analogy>

      <h2>Template Files vs. Living Documents</h2>

      <p>Your workspace needs both, and knowing the difference prevents chaos:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">📝 Templates (read-only reference)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Files your agent copies from but never modifies. Think: <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">templates/daily-note-template.md</code>, <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">templates/project-kickoff.md</code>. These define structure. Store them in a <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">templates/</code> folder.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-emerald-400">📄 Living Documents (read + write)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Files your agent actively updates: <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">MEMORY.md</code>, <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">memory/2026-02-24.md</code>, <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">knowledge/projects/agentawake.md</code>. These are the actual state of your system.</p>
        </div>
      </div>

      <h2>Directory Structure: PARA for Your Agent</h2>

      <p>The PARA method (Projects, Areas, Resources, Archives) maps perfectly to agent workspaces:</p>

      <Code title="The ideal workspace structure">{`workspace/
├── AGENTS.md          # Agent instructions (read every session)
├── SOUL.md            # Personality & behavior rules
├── USER.md            # About the human
├── MEMORY.md          # Curated long-term memory
├── TOOLS.md           # Environment-specific notes
│
├── memory/            # Daily working notes
│   ├── 2026-02-24.md
│   ├── 2026-02-23.md
│   └── heartbeat-state.json
│
├── knowledge/         # PARA structure
│   ├── projects/      # Active work (finite end date)
│   │   ├── agentawake.md
│   │   └── trading-bot.md
│   ├── areas/         # Ongoing responsibilities (no end date)
│   │   ├── trading.md
│   │   └── content-pipeline.md
│   ├── resources/     # Reference material
│   │   ├── api-keys-guide.md
│   │   └── prompt-patterns.md
│   ├── archives/      # Completed/paused work
│   │   └── old-project.md
│   └── tacit.md       # Lessons learned, preferences
│
├── templates/         # File templates (read-only)
│   ├── daily-note.md
│   └── project-kickoff.md
│
└── output/            # Agent-generated deliverables
    ├── reports/
    └── drafts/`}</Code>

      <h2>Git: Version Control for Agent Work</h2>

      <p>Here's something most people don't realize: <strong>your agent can commit its own changes.</strong> This gives you a complete audit trail of everything your agent has done, the ability to roll back mistakes, and automatic backups.</p>

      <Code title="Agent auto-commit pattern">{`# In your agent's nightly routine or after major tasks:
cd ~/.openclaw/workspace
git add -A
git commit -m "agent: daily memory consolidation 2026-02-24"
git push origin main

# Now you can:
git log --oneline          # See everything your agent did
git diff HEAD~1            # See what changed today
git revert HEAD            # Undo the last change`}</Code>

      <Callout emoji="🛡️" title="Why Git Matters for Agents">
        Without git, if your agent corrupts a file or makes a bad decision, you lose data. With git, every state is recoverable. It's your agent's "undo button" — and it costs nothing.
      </Callout>

      <h2>Setting Up a Workspace From Scratch</h2>

      <p>Here's the complete walkthrough — 10 minutes to a production-ready workspace:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">1️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Create the directory structure</strong> — use the PARA layout above</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">2️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Write AGENTS.md</strong> — define how your agent should behave (use our template)</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">3️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Write SOUL.md</strong> — give your agent personality and boundaries</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">4️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Write USER.md</strong> — tell the agent who you are and what you care about</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">5️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Initialize git</strong> — <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">git init && git add -A && git commit -m "initial workspace"</code></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">6️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Point your agent at the folder</strong> — configure it as the working directory</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">7️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Test it</strong> — ask your agent to write something, then check the file appeared in the right place</div>
        </div>
      </div>

      <Quiz
        question="Why is a file system better than a database for most agent workspaces?"
        options={[
          { text: "Files are faster than databases", explanation: "Speed isn't really the advantage. For small agent workspaces, both are instantaneous." },
          { text: "Files are human-readable, debuggable, and universally compatible", correct: true, explanation: "Exactly! You can open any file in a text editor, track changes with git, and every AI tool can read/write files. No admin panel, no query language, no vendor lock-in." },
          { text: "Databases are too expensive", explanation: "SQLite is free. Cost isn't the issue — accessibility and debuggability are." },
          { text: "Files don't need a schema", explanation: "True but incomplete. The real power is the combination of human-readability, version control, and universal compatibility." },
        ]}
      />

      <Quiz
        question="What's the best file naming convention for agent workspaces?"
        options={[
          { text: "Short names like notes.md and draft.md", explanation: "Your agent can't tell what's inside these. It has to read every file to understand what it has." },
          { text: "UUID-based names like 8f3a-4b2c.md", explanation: "Machines love UUIDs but humans can't navigate the workspace. You need both to be able to read it." },
          { text: "Date-prefixed and type-prefixed with hyphens", correct: true, explanation: "Correct! 2026-02-24-market-analysis.md tells both you and the agent what it is, when it's from, and sorts correctly alphabetically." },
          { text: "Whatever feels right in the moment", explanation: "Inconsistency is the enemy of agent navigation. Pick a convention and stick to it." },
        ]}
      />

      <Checklist
        title="Workspace Setup Checklist"
        items={[
          "Created PARA directory structure (knowledge/projects, areas, resources, archives)",
          "Written AGENTS.md with session startup instructions",
          "Written SOUL.md with personality and boundaries",
          "Written USER.md with your context and preferences",
          "Established file naming convention (date-prefix, type-prefix, hyphens)",
          "Created templates/ folder with at least a daily note template",
          "Initialized git and made first commit",
          "Set up agent auto-commit in nightly routine",
          "Tested that agent can read and write files in the correct locations",
        ]}
      />

      <Tip emoji="🏠" title="The Workspace Test">
        Here's how you know your workspace is well-organized: <strong>could a brand new agent — with zero prior context — read AGENTS.md and immediately know where everything is?</strong> If yes, your workspace is an API. If no, it's a junk drawer. Go organize it.
      </Tip>
    </>
  );
}
