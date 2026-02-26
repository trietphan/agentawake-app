from pathlib import Path

root = Path('/Users/trietphan/.openclaw/workspace/agentforge-app/src/content/chapters')
files = [
 'claude-implementation.tsx','chatgpt-implementation.tsx','crewai-implementation.tsx','langchain-implementation.tsx',
 'autogpt-implementation.tsx','n8n-implementation.tsx','cursor-implementation.tsx','openclaw-implementation.tsx'
]

block = '''
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
'''

for f in files:
    p = root / f
    t = p.read_text()
    if 'Operational Readiness Checklist' in t:
      print('skip', f)
      continue
    marker = '\n\n      <p>\n        That\'s the full pattern for'
    i = t.find(marker)
    if i == -1:
      print('missing', f)
      continue
    p.write_text(t[:i] + block + t[i:])
    print('updated', f)
