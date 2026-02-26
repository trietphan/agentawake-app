const fs = require('fs');
const path = require('path');

const root = '/Users/trietphan/.openclaw/workspace/agentforge-app/src/content/chapters';

const configs = [
  {
    file: 'claude-implementation.tsx',
    platform: 'Claude',
    from: 'ChatGPT / OpenAI Assistants',
    configTitle: '.claude/settings.json',
    configCode: `{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "mcp-memory-service"],
      "env": {
        "MEMORY_DIR": "./memory/mcp"
      }
    }
  },
  "permissions": {
    "allow": ["Read", "Write", "Bash(npm run build)"]
  }
}`,
    scriptTitle: 'scripts/claude-daily-sync.sh',
    scriptCode: `#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
today=$(date +%F)
mkdir -p memory

claude --print "Read memory/${today}.md and summarize top 3 decisions + blockers. Append summary to knowledge/projects/current-status.md" \
  >> logs/claude-sync.log 2>&1

echo "Daily sync complete: ${today}"`,
  },
  {
    file: 'chatgpt-implementation.tsx',
    platform: 'ChatGPT / OpenAI',
    from: 'Claude Projects or Claude Code',
    configTitle: 'assistant-memory-config.json',
    configCode: `{
  "assistant_name": "agentawake-ops",
  "model": "gpt-4.1",
  "tools": ["file_search", "function_calling"],
  "vector_store": "agentawake-kb",
  "daily_note_endpoint": "https://api.example.com/daily-notes",
  "memory_policy": {
    "knowledge": "vector_store",
    "daily": "external_db",
    "tacit": "assistant_instructions"
  }
}`,
    scriptTitle: 'scripts/openai-nightly-consolidation.ts',
    scriptCode: `import { OpenAI } from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function run() {
  const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Consolidate last 24h daily notes into knowledge/resources/ops-lessons.md"
  });

  console.log(response.output_text);
}

run().catch(console.error);`,
  },
  {
    file: 'crewai-implementation.tsx',
    platform: 'CrewAI',
    from: 'LangChain graphs or n8n AI Agent nodes',
    configTitle: 'config/crew.yaml',
    configCode: `crew:
  name: memory-ops
  process: sequential
  memory: true
  verbose: true

agents:
  researcher:
    role: "Research Analyst"
    goal: "Extract actionable insights"
  operator:
    role: "Operations Integrator"
    goal: "Update knowledge and daily notes"

tasks:
  summarize_day:
    description: "Summarize daily events and decisions"
    agent: researcher
  persist_summary:
    description: "Write summary to memory and project docs"
    agent: operator`,
    scriptTitle: 'scripts/run-crew.sh',
    scriptCode: `#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
python -m crewai run --config config/crew.yaml --inputs '{"date":"'"$(date +%F)"'"}'`,
  },
  {
    file: 'langchain-implementation.tsx',
    platform: 'LangChain / LangGraph',
    from: 'CrewAI task orchestration',
    configTitle: 'langgraph.config.ts',
    configCode: `export default {
  checkpointer: {
    provider: "postgres",
    connectionString: process.env.POSTGRES_URL,
  },
  store: {
    provider: "postgres",
    namespace: "agentawake",
  },
  tracing: {
    langsmith: true,
    project: "agentawake-memory"
  }
};`,
    scriptTitle: 'scripts/langgraph-cron.ts',
    scriptCode: `import { graph } from "../src/agent/graph";

async function runDaily() {
  await graph.invoke(
    { messages: [{ role: "user", content: "Run daily review and update memory." }] },
    { configurable: { thread_id: "daily-review" } }
  );
}

runDaily().catch(console.error);`,
  },
  {
    file: 'autogpt-implementation.tsx',
    platform: 'AutoGPT',
    from: 'n8n workflows or simple CLI automations',
    configTitle: '.env.autogpt',
    configCode: `OPENAI_API_KEY=your_key
MEMORY_BACKEND=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
WORKSPACE_PATH=./auto_gpt_workspace
AI_SETTINGS_FILE=./ai_settings.yaml
API_BUDGET=8.00`,
    scriptTitle: 'scripts/autogpt-guarded-run.sh',
    scriptCode: `#!/usr/bin/env bash
set -euo pipefail

python scripts/main.py \
  --continuous \
  --continuous-limit 20 \
  --use-memory redis \
  --ai-settings ai_settings.yaml`,
  },
  {
    file: 'n8n-implementation.tsx',
    platform: 'n8n',
    from: 'Zapier or Make automations',
    configTitle: 'workflow-memory-pattern.json',
    configCode: `{
  "name": "daily-memory-consolidation",
  "nodes": [
    { "name": "Schedule Trigger", "type": "n8n-nodes-base.scheduleTrigger" },
    { "name": "AI Agent", "type": "@n8n/n8n-nodes-langchain.agent" },
    { "name": "Postgres", "type": "n8n-nodes-base.postgres" }
  ],
  "connections": {
    "Schedule Trigger": { "main": [[{ "node": "AI Agent", "type": "main", "index": 0 }]] },
    "AI Agent": { "main": [[{ "node": "Postgres", "type": "main", "index": 0 }]] }
  }
}`,
    scriptTitle: 'scripts/bootstrap-n8n.sh',
    scriptCode: `#!/usr/bin/env bash
set -euo pipefail

docker run -d --name n8n \
  -p 5678:5678 \
  -e N8N_ENCRYPTION_KEY="change-me" \
  -v n8n_data:/home/node/.n8n \
  n8nio/n8n:latest`,
  },
  {
    file: 'cursor-implementation.tsx',
    platform: 'Cursor / Windsurf / Cline',
    from: 'OpenClaw or Claude Code project memory',
    configTitle: '.cursor/rules/memory-bank.mdc',
    configCode: `---
rule_type: always
---
# Memory Bank Protocol
1. Read .memory/project-brief.md and .memory/active-context.md at session start.
2. Before edits, update .memory/active-context.md with intent.
3. After edits, append results to .memory/progress.md.
4. Log recurring bugs in .memory/errors.md.
5. Record architectural choices in .memory/decisions.md.`,
    scriptTitle: 'scripts/new-session.sh',
    scriptCode: `#!/usr/bin/env bash
set -euo pipefail

date=$(date +%F)
mkdir -p .memory
cat > .memory/active-context.md <<EOF
# Active Context (${date})
- Goal:
- Current task:
- Open questions:
EOF

echo "Session context reset"`,
  },
  {
    file: 'openclaw-implementation.tsx',
    platform: 'OpenClaw',
    from: 'Any CLI-first agent stack',
    configTitle: 'AGENTS.md (core protocol excerpt)',
    configCode: `## Every Session
1. Read SOUL.md
2. Read USER.md
3. Read memory/YYYY-MM-DD.md (today + yesterday)
4. If main session: read MEMORY.md

## Safety
- Don't exfiltrate private data
- Ask before external actions
- trash > rm`,
    scriptTitle: 'scripts/nightly-memory-maintenance.sh',
    scriptCode: `#!/usr/bin/env bash
set -euo pipefail

cd "${HOME}/.openclaw/workspace"
openclaw run "Review last 2 daily files and update MEMORY.md with durable insights" \
  >> memory/nightly-maintenance.log 2>&1`,
  },
];

function expansion(c) {
  return `
      <h2>Your First 30 Minutes (Fresh Start)</h2>
      <p>
        If you're starting from zero on ${c.platform}, follow this exact timer-based sequence. Don't optimize yet — just establish a working baseline you can trust.
      </p>
      <ol className="my-5 space-y-2 text-sm text-[var(--foreground)]/80 list-decimal pl-5">
        <li><strong>Minute 0-5:</strong> Create folders for knowledge, daily memory, and tacit rules. Keep names boring and predictable.</li>
        <li><strong>Minute 5-10:</strong> Add one "project snapshot" file with outcomes, constraints, and open questions.</li>
        <li><strong>Minute 10-15:</strong> Configure a daily note write path (file or database table) and test one write/read cycle.</li>
        <li><strong>Minute 15-20:</strong> Add your tacit preferences: communication style, safety boundaries, and formatting defaults.</li>
        <li><strong>Minute 20-25:</strong> Run one end-to-end prompt: retrieve context → perform task → append summary to daily notes.</li>
        <li><strong>Minute 25-30:</strong> Schedule one nightly consolidation job and capture a rollback plan.</li>
      </ol>

      <Callout emoji="⏱️" title="30-Minute Rule">
        A small, reliable memory loop beats a giant architecture that only works in your imagination. In week one, optimize for consistency.
      </Callout>

      <h2>Architecture Diagram (${c.platform})</h2>
      <Code title="memory-architecture.txt">{
`User/Trigger\n   |\n   v\n[Agent Runtime: ${c.platform}]\n   |\n   +--> [Layer 1: Knowledge Base] ----> PARA docs / vector index\n   |\n   +--> [Layer 2: Daily Notes] -------> date-based logs / SQL rows\n   |\n   +--> [Layer 3: Tacit Rules] -------> behavior + safety defaults\n   |\n   v\n[Consolidation Job @ 02:00]\n   |\n   +--> Promote durable insights to Layer 1\n   +--> Prune stale items + update change log`
}</Code>

      <h2>Step-by-Step Walkthrough (Production Baseline)</h2>
      <ol className="my-5 space-y-3 text-sm text-[var(--foreground)]/80 list-decimal pl-5">
        <li>
          <strong>Create the platform config.</strong> Keep keys in environment variables and commit only templates.
          <Code title="${c.configTitle}">{\`${c.configCode}\`}</Code>
        </li>
        <li>
          <strong>Create one daily runner script.</strong> This is the backbone for your heartbeat/nightly memory behavior.
          <Code title="${c.scriptTitle}">{\`${c.scriptCode}\`}</Code>
        </li>
        <li><strong>Dry run locally.</strong> Execute the script once and verify it writes a deterministic artifact (file row, markdown update, or DB insert).</li>
        <li><strong>Add observability.</strong> Log runtime, token use, and failures. If a run fails silently, it's already broken.</li>
        <li><strong>Add backup + rollback.</strong> Take snapshots before consolidation; keep last 7 days restorable.</li>
      </ol>

      <h2>Troubleshooting: Common Failures and Fixes</h2>
      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-red-500/25 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">Issue: Agent ignores recent context</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Fix: force retrieval order (today → yesterday → project snapshot) and cap each file to concise summaries.</p>
        </div>
        <div className="rounded-lg border border-amber-500/25 bg-amber-500/5 p-4">
          <div className="text-xs font-bold text-amber-300">Issue: Memory quality degrades after a week</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Fix: nightly dedupe + weekly archive pass. Delete contradictory stale notes instead of endlessly appending.</p>
        </div>
        <div className="rounded-lg border border-blue-500/25 bg-blue-500/5 p-4">
          <div className="text-xs font-bold text-blue-300">Issue: Costs spike unexpectedly</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Fix: route simple tasks to cheaper models, shrink retrieval chunks, and cache static project context.</p>
        </div>
      </div>

      <h2>Migration Guide</h2>
      <p>
        Coming from <strong>${c.from}</strong>? The biggest shift in ${c.platform} is operational discipline: explicit memory IO, explicit scheduling, explicit safety rules. Assume nothing is implicit.
      </p>
      <ul className="my-4 space-y-2 text-sm text-[var(--foreground)]/80">
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span><strong>Context model:</strong> define where long-term facts live before you write prompts.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span><strong>Automation model:</strong> decide who triggers runs (cron, scheduler, workflow trigger) and who logs outcomes.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span><strong>Failure model:</strong> implement retries and dead-letter behavior for failed memory writes.</span></li>
      </ul>

      <h2>Cost Analysis (Monthly Estimate)</h2>
      <Code title="cost-estimate.md">{
`Assumptions
- 3 scheduled runs/day + 20 interactive requests/day
- Moderate retrieval (2-6 docs/request)
- One nightly consolidation job

Estimated monthly spend
- Model/API usage:      $25 - $180
- Storage (files/DB):   $0 - $25
- Scheduler/hosting:    $0 - $40
- Observability:        $0 - $30
---------------------------------
Total:                  $25 - $275 / month

Optimization levers
1) Use smaller models for extraction/summarization
2) Keep memory files concise and chunked
3) Run consolidation once nightly, not continuously`
}</Code>

      <h2>Pro Tips for Power Users</h2>
      <ul className="my-4 space-y-2 text-sm text-[var(--foreground)]/80">
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Tag durable facts with <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">decision:</code>, <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">constraint:</code>, and <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">owner:</code> metadata for faster retrieval.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Promote only proven patterns from daily notes into Layer 1 — avoid polluting your durable memory with temporary noise.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Keep a "known-failures" file and inject it before risky operations to reduce repeated mistakes.</span></li>
      </ul>

      <Analogy>
        Mature agent operations are like running a kitchen during dinner rush: mise en place (knowledge), prep station notes (daily memory), and house standards (tacit rules). If any one is missing, service slows and quality drops.
      </Analogy>
`;
}

for (const c of configs) {
  const p = path.join(root, c.file);
  let text = fs.readFileSync(p, 'utf8');
  if (text.includes('Your First 30 Minutes (Fresh Start)')) {
    console.log('Skip (already expanded):', c.file);
    continue;
  }

  const marker = '\n\n      <p>\n        That\'s the full pattern for';
  const idx = text.indexOf(marker);
  if (idx === -1) {
    console.error('Marker not found:', c.file);
    continue;
  }

  text = text.slice(0, idx) + expansion(c) + text.slice(idx);
  fs.writeFileSync(p, text, 'utf8');
  console.log('Expanded:', c.file);
}
