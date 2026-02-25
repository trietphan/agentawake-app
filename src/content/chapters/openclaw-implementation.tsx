/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Callout, Analogy, Code } from "./shared";

export default function OpenclawImplementation() {
  return (
    <>
      <p className="text-lg leading-relaxed mb-6">
        OpenClaw can absolutely run a proper three-layer brain. The trick is not "use more prompts" — it's giving the agent a pantry (knowledge), countertop (daily notes), and recipe book (tacit knowledge) that survive context resets.
      </p>

      <Analogy>
        OpenClaw is like a high-end espresso machine: powerful, fast, and expensive enough to hurt if misconfigured. This chapter is your barista training so you get consistent shots instead of random brown water.
      </Analogy>

      <h2>What We'll Build</h2>
      <p>Configure full operating behavior: AGENTS.md policy, HEARTBEAT batching, identity/user memory files, knowledge folders, and automation loops.</p>

      <div className="my-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/40 p-4">
          <div className="text-xs font-bold text-blue-300 mb-1">Layer 1</div>
          <p className="text-sm text-[var(--text-secondary)]">knowledge/PARA folders loaded on demand.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/40 p-4">
          <div className="text-xs font-bold text-[var(--accent-light)] mb-1">Layer 2</div>
          <p className="text-sm text-[var(--text-secondary)]">memory/YYYY-MM-DD.md + heartbeat-state.json cadence tracking.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/40 p-4">
          <div className="text-xs font-bold text-purple-300 mb-1">Layer 3</div>
          <p className="text-sm text-[var(--text-secondary)]">SOUL.md + AGENTS.md + IDENTITY.md + USER.md + knowledge/tacit.md.</p>
        </div>
      </div>

      <h2>Step 0: Baseline Setup</h2>
      <p>Start from a clean baseline and make persistence explicit. Hidden defaults are how agents "forget" things and then gaslight you about it.</p>
      <Code title="bootstrap.sh">{`#!/usr/bin/env bash
mkdir -p knowledge/{projects,areas,resources,archives} memory
cat > HEARTBEAT.md <<'EOF'
# Heartbeat Checklist
- Check urgent mentions
- Check events in next 24h
- Append one line to today's daily note
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
      <Code title="platform-config">{`# AGENTS.md excerpt
## Every Session
1) Read SOUL.md
2) Read USER.md
3) Read today+yesterday notes
4) Main session only: read MEMORY.md

0 2 * * * cd ~/.openclaw/workspace && openclaw run "Consolidate notes"
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
      <p>OpenClaw behavior is file-defined; treat these files as production configuration and review them like code.</p>

      <Callout emoji="🐾" title="OpenClaw Implementation Guide: Quick Win">
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

      <p>
        That's the full pattern for OpenClaw. Same brain architecture, different plumbing. Once this is stable, your agent stops being a clever intern and starts acting like an operator.
      </p>
    </>
  );
}
