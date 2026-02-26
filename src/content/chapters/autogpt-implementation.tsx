/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Callout, Analogy, Code } from "./shared";

export default function AutogptImplementation() {
  return (
    <>
      <p className="text-lg leading-relaxed mb-6">
        AutoGPT (classic + forge patterns) can absolutely run a proper three-layer brain. The trick is not "use more prompts" — it's giving the agent a pantry (knowledge), countertop (daily notes), and recipe book (tacit knowledge) that survive context resets.
      </p>

      <Analogy>
        AutoGPT (classic + forge patterns) is like a high-end espresso machine: powerful, fast, and expensive enough to hurt if misconfigured. This chapter is your barista training so you get consistent shots instead of random brown water.
      </Analogy>

      <h2>What We'll Build</h2>
      <p>Set explicit workspace persistence, choose backend intentionally, and add guardrails so autonomous mode does not become autonomous chaos.</p>

      <div className="my-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/40 p-4">
          <div className="text-xs font-bold text-blue-300 mb-1">Layer 1</div>
          <p className="text-sm text-[var(--text-secondary)]">Workspace docs + optional Pinecone/Weaviate index.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/40 p-4">
          <div className="text-xs font-bold text-[var(--accent-light)] mb-1">Layer 2</div>
          <p className="text-sm text-[var(--text-secondary)]">auto_gpt_workspace/daily/YYYY-MM-DD.md</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/40 p-4">
          <div className="text-xs font-bold text-purple-300 mb-1">Layer 3</div>
          <p className="text-sm text-[var(--text-secondary)]">ai_settings.yaml constraints + tacit file.</p>
        </div>
      </div>

      <h2>Step 0: Baseline Setup</h2>
      <p>Start from a clean baseline and make persistence explicit. Hidden defaults are how agents "forget" things and then gaslight you about it.</p>
      <Code title="bootstrap.sh">{`#!/usr/bin/env bash
mkdir -p auto_gpt_workspace/{knowledge,memory,daily}
cat > .env <<'EOF'
MEMORY_BACKEND=json
AI_SETTINGS_FILE=ai_settings.yaml
EOF
`}</Code>

      <h2>Layer 1 — Knowledge Base (PARA)</h2>
      <p>
        Build a simple PARA structure and keep each file scannable. Your future self and your agent both hate giant walls of text.
      </p>
      <Code title="knowledge/README.md">{`# Knowledge Base (PARA)

## projects/
Active initiatives with goals, scope, architecture, and open questions.

## areas/
Ongoing responsibilities (ops, growth, support, engineering quality).

## resources/
Reusable references: templates, API docs, snippets, checklists.

## archives/
Completed or paused work. Keep for context, exclude from default scans.

## writing rules
- One topic per file
- Start with a 5-line executive summary
- Add "Last updated" and owner
- Prefer bullets over prose
`}</Code>

      <Code title="knowledge/projects/sample.md">{`# Project: Memory OS Rollout

Last updated: 2026-02-25
Owner: Operator
Status: active

## Outcome
Ship reliable agent memory across channels with <2% context-loss incidents.

## Architecture
- Layer 1: PARA docs in markdown
- Layer 2: daily notes by date
- Layer 3: tacit rules/preferences

## Current Milestones
- [x] Baseline structure
- [ ] Add retrieval hooks
- [ ] Add nightly consolidation

## Known Risks
- Files too long become expensive to load
- Stale notes pollute retrieval
`}</Code>

      <h2>Layer 2 — Daily Notes</h2>
      <p>
        Treat daily notes as volatile working memory that gets summarized into durable knowledge. That's how you avoid a 700-file graveyard.
      </p>
      <Code title="memory/YYYY-MM-DD.md template">{`# 2026-02-25

## Focus
- What matters today

## Inputs
- Meetings, incidents, user requests

## Decisions
- Why we chose approach A over B

## Open loops
- Blockers and dependencies

## End-of-day summary
- 3 bullets max
`}</Code>

      <Code title="nightly-consolidation.md">{`# Consolidation Protocol
1) Read today's and yesterday's notes.
2) Extract durable insights (patterns, decisions, SOP updates).
3) Append to knowledge/projects or knowledge/resources.
4) Update tacit rules if behavior preference changed.
5) Leave a short "what changed" audit trail.
`}</Code>

      <h2>Layer 3 — Tacit Knowledge</h2>
      <p>
        This is where your style and preferences live. Not project facts. Not today's TODOs. Tacit rules should survive project changes.
      </p>
      <Code title="knowledge/tacit.md">{`# Tacit Knowledge

## Communication
- Be direct; skip motivational fluff
- For Discord/WhatsApp: no markdown tables
- Give action-first summaries

## Engineering
- Prefer reversible changes
- Add verification command after edits
- If unsure, propose two viable options

## Safety
- Ask before external sends
- trash > rm
- Never reveal private context in group channels
`}</Code>

      <h2>Platform-Specific Implementation</h2>
      <Code title="platform-config">{`MEMORY_BACKEND=json
python scripts/main.py --continuous-limit 25
`}</Code>

      <h2>Automation Patterns</h2>
      <ul className="my-4 space-y-2 text-sm text-[var(--foreground)]/80">
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Morning brief at 08:30: read Layer 2 + fetch urgent Layer 1 docs.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Midday checkpoint: append progress and blockers.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Nightly consolidation: compress daily notes into durable knowledge.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Weekly pruning: archive stale docs and remove contradictory tacit rules.</span></li>
      </ul>

      <h2>Copy-Paste Runbook</h2>
      <Code title="runbook.sh">{`#!/usr/bin/env bash
set -euo pipefail

mkdir -p knowledge/{projects,areas,resources,archives} memory
[ -f knowledge/tacit.md ] || cat > knowledge/tacit.md <<'EOF'
# Tacit Knowledge
- Be concise
- Prefer concrete examples
EOF

today=$(date +%F)
[ -f "memory/$today.md" ] || cat > "memory/$today.md" <<EOF
# $today

## Focus

## Decisions

## Open loops
EOF

echo "Memory skeleton ready: $today"
`}</Code>

      <h2>Failure Modes (and Fixes)</h2>
      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-red-500/25 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">Failure: Giant monolithic memory file</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Fix: Split into PARA + daily logs; cap file size and add summaries.</p>
        </div>
        <div className="rounded-lg border border-amber-500/25 bg-amber-500/5 p-4">
          <div className="text-xs font-bold text-amber-300">Failure: Stale context poisoning</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Fix: Weekly archive pass and explicit retrieval filters.</p>
        </div>
        <div className="rounded-lg border border-blue-500/25 bg-blue-500/5 p-4">
          <div className="text-xs font-bold text-blue-300">Failure: Tacit knowledge contradictions</div>
          <p className="text-sm text-[var(--text-secondary)] mt-1">Fix: Keep a single canonical tacit file + changelog entries.</p>
        </div>
      </div>

      <h2>Practical Limits</h2>
      <p>Classic AutoGPT can spiral API usage quickly; set api_budget and continuous limits before unattended runs.</p>

      <Callout emoji="🤖" title="AutoGPT Implementation Guide: Quick Win">
        If you do only one thing today: implement Layer 2 daily notes + nightly consolidation. It gives the biggest reliability jump per minute spent.
      </Callout>

      <h2>30-60-90 Day Plan</h2>
      <Code title="roadmap.md">{`## Day 0-30
- Stand up three-layer memory
- Add one scheduled consolidation
- Track context-loss incidents

## Day 31-60
- Add semantic retrieval or scoped memory
- Add guardrails + trust ladder
- Instrument latency and token costs

## Day 61-90
- Add cross-channel automation
- Delegate repeat workflows to subagents
- Create weekly memory quality review
`}</Code>
      <h2>Your First 30 Minutes (Fresh Start)</h2>
      <p>
        If you're starting from zero on AutoGPT, follow this exact timer-based sequence. Don't optimize yet — just establish a working baseline you can trust.
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

      <h2>Architecture Diagram (AutoGPT)</h2>
      <Code title="memory-architecture.txt">{`User/Trigger
   |
   v
[Agent Runtime: AutoGPT]
   |
   +--> [Layer 1: Knowledge Base] ----> PARA docs / vector index
   |
   +--> [Layer 2: Daily Notes] -------> date-based logs / SQL rows
   |
   +--> [Layer 3: Tacit Rules] -------> behavior + safety defaults
   |
   v
[Consolidation Job @ 02:00]
   |
   +--> Promote durable insights to Layer 1
   +--> Prune stale items + update change log`}</Code>

      <h2>Step-by-Step Walkthrough (Production Baseline)</h2>
      <ol className="my-5 space-y-3 text-sm text-[var(--foreground)]/80 list-decimal pl-5">
        <li>
          <strong>Create the platform config.</strong> Keep keys in environment variables and commit only templates.
          <Code title=".env.autogpt">{`OPENAI_API_KEY=your_key
MEMORY_BACKEND=redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
WORKSPACE_PATH=./auto_gpt_workspace
AI_SETTINGS_FILE=./ai_settings.yaml
API_BUDGET=8.00`}</Code>
        </li>
        <li>
          <strong>Create one daily runner script.</strong> This is the backbone for your heartbeat/nightly memory behavior.
          <Code title="scripts/autogpt-guarded-run.sh">{`#!/usr/bin/env bash
set -euo pipefail

python scripts/main.py   --continuous   --continuous-limit 20   --use-memory redis   --ai-settings ai_settings.yaml`}</Code>
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
        Coming from <strong>n8n workflows or simple CLI automations</strong>? The biggest shift in AutoGPT is operational discipline: explicit memory IO, explicit scheduling, explicit safety rules. Assume nothing is implicit.
      </p>
      <ul className="my-4 space-y-2 text-sm text-[var(--foreground)]/80">
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span><strong>Context model:</strong> define where long-term facts live before you write prompts.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span><strong>Automation model:</strong> decide who triggers runs (cron, scheduler, workflow trigger) and who logs outcomes.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span><strong>Failure model:</strong> implement retries and dead-letter behavior for failed memory writes.</span></li>
      </ul>

      <h2>Cost Analysis (Monthly Estimate)</h2>
      <Code title="cost-estimate.md">{`Assumptions
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
3) Run consolidation once nightly, not continuously`}</Code>

      <h2>Pro Tips for Power Users</h2>
      <ul className="my-4 space-y-2 text-sm text-[var(--foreground)]/80">
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Tag durable facts with <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">decision:</code>, <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">constraint:</code>, and <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">owner:</code> metadata for faster retrieval.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Promote only proven patterns from daily notes into Layer 1 — avoid polluting your durable memory with temporary noise.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Keep a "known-failures" file and inject it before risky operations to reduce repeated mistakes.</span></li>
      </ul>

      <Analogy>
        Mature agent operations are like running a kitchen during dinner rush: mise en place (knowledge), prep station notes (daily memory), and house standards (tacit rules). If any one is missing, service slows and quality drops.
      </Analogy>

      <h2>Operational Readiness Checklist</h2>
      <p>
        Before trusting this in production, run one rehearsal day where you deliberately inject small failures and verify your system self-recovers.
      </p>
      <Code title="ops-checklist.md">{`# Daily reliability checklist
- [ ] Morning run completed before 09:00
- [ ] Retrieval quality check passed (top 3 references relevant)
- [ ] Daily notes appended with decisions + blockers
- [ ] Consolidation wrote a diff summary
- [ ] Cost budget still under monthly threshold
- [ ] Alert channel received success heartbeat

# Weekly checks
- [ ] Archive stale memory documents
- [ ] Remove contradictory tacit rules
- [ ] Update one SOP based on real failures
- [ ] Restore test from latest backup`}</Code>

      <h2>Failure Drill (Run This Once Per Week)</h2>
      <ol className="my-5 space-y-2 text-sm text-[var(--foreground)]/80 list-decimal pl-5">
        <li>Temporarily disable retrieval and confirm the agent reports degraded context instead of pretending confidence.</li>
        <li>Block memory writes and verify failed writes trigger alerts with retry metadata.</li>
        <li>Simulate token budget pressure and validate fallback to smaller models.</li>
        <li>Restore from backup snapshot and compare output quality with yesterday's baseline.</li>
      </ol>

      <Code title="kpi-dashboard.json">{`{
  "metrics": [
    "context_loss_incidents",
    "avg_retrieval_relevance",
    "daily_note_write_success_rate",
    "monthly_model_spend",
    "time_to_recover_minutes"
  ],
  "targets": {
    "context_loss_incidents": "< 3 per month",
    "avg_retrieval_relevance": "> 0.75",
    "daily_note_write_success_rate": "> 99%",
    "monthly_model_spend": "< budget",
    "time_to_recover_minutes": "< 15"
  }
}`}</Code>

      <Callout emoji="🧪" title="Treat Memory Like Infrastructure">
        If you test your database and deployment pipeline but never test memory integrity, your agent will eventually fail in subtle ways. Run drills, track metrics, and keep rollback paths warm.
      </Callout>


      <h2>AutoGPT-Specific Guardrails</h2>
      <ul className="my-4 space-y-2 text-sm text-[var(--foreground)]/80">
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Always run with <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">--continuous-limit</code> in production until logs are stable for 14 days.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Set an explicit API budget ceiling and alert when 70% of budget is reached.</span></li>
        <li className="flex gap-3"><span className="font-bold text-[var(--accent-light)]">•</span><span>Require confirmation for external side effects (email, posts, and payments).</span></li>
      </ul>

      <Code title="autogpt-reliability-targets.md">{`Reliability targets
- Loop completion success: > 95%
- Memory write success: > 99%
- Average task retries: < 2
- Budget overrun incidents: 0`}</Code>

      <p>
        That's the full pattern for AutoGPT (classic + forge patterns). Same brain architecture, different plumbing. Once this is stable, your agent stops being a clever intern and starts acting like an operator.
      </p>
    </>
  );
}
