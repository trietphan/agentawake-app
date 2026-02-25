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
        Your agent ran a cron job at 3 AM. Something went wrong. The output was weird. <strong>How do you figure out what happened?</strong> This chapter gives you the debugging and observability toolkit.
      </p>

      <Analogy>
        Imagine you hire a night-shift worker. They work while you sleep. In the morning, the work is done — but something's off. Without security cameras (logs), a task checklist (traces), and a supervisor's report (summaries), you'd have no idea what went wrong. Observability is your security camera system for AI agents.
      </Analogy>

      <h2>The 3 Pillars of Agent Observability</h2>

      <div className="my-6 grid gap-4">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">1. 📋 Logs — What Happened</div>
          <p className="text-xs text-[var(--text-secondary)]">Raw record of every action. Input → thinking → output → tool calls → results. The foundation of debugging.</p>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">2. 🔗 Traces — The Full Journey</div>
          <p className="text-xs text-[var(--text-secondary)]">Connected chain of events: trigger → model call → tool use → response → delivery. Shows cause and effect.</p>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">3. 📊 Metrics — The Trends</div>
          <p className="text-xs text-[var(--text-secondary)]">Token usage over time, error rates, response latency, cost per task. Tells you if things are getting better or worse.</p>
        </div>
      </div>

      <h2>Common Agent Failures & How to Debug Them</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400 mb-2">🐛 "The output was wrong/hallucinated"</div>
          <p className="text-xs text-[var(--text-secondary)]"><strong>Debug steps:</strong></p>
          <ol className="text-xs text-[var(--text-tertiary)] space-y-1 mt-1">
            <li>1. Check the input prompt — was context missing?</li>
            <li>2. Check which model was used — cheaper models hallucinate more</li>
            <li>3. Check if knowledge base files were accessible</li>
            <li>4. Check context window — was it full/truncated?</li>
            <li>5. <strong>Fix:</strong> Add missing context to knowledge base, or upgrade model for that task</li>
          </ol>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400 mb-2">🐛 "The cron job didn't run"</div>
          <ol className="text-xs text-[var(--text-tertiary)] space-y-1 mt-1">
            <li>1. Check cron expression — is the timezone correct?</li>
            <li>2. Check if the gateway was running at scheduled time</li>
            <li>3. Check API key validity — expired keys fail silently</li>
            <li>4. Check rate limits — were you throttled?</li>
            <li>5. <strong>Fix:</strong> Add a heartbeat check that monitors cron execution</li>
          </ol>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400 mb-2">🐛 "The agent went off-script"</div>
          <ol className="text-xs text-[var(--text-tertiary)] space-y-1 mt-1">
            <li>1. Check for prompt injection in input data</li>
            <li>2. Check if system prompt was too vague or contradictory</li>
            <li>3. Check conversation history — did it drift over many messages?</li>
            <li>4. Check if it hit a tool error and improvised badly</li>
            <li>5. <strong>Fix:</strong> Tighten system prompt, add guardrails, use isolated sessions for risky tasks</li>
          </ol>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400 mb-2">🐛 "Costs spiked unexpectedly"</div>
          <ol className="text-xs text-[var(--text-tertiary)] space-y-1 mt-1">
            <li>1. Check for infinite loops (agent retrying failed tool calls)</li>
            <li>2. Check context window size — bloated history = expensive</li>
            <li>3. Check if a cron job ran more often than expected</li>
            <li>4. Check if model was accidentally set to Opus/o3 for routine tasks</li>
            <li>5. <strong>Fix:</strong> Set max iterations, compact context, fix model routing</li>
          </ol>
        </div>
      </div>

      <h2>🔌 Observability by Platform</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="text-sm font-bold text-cyan-400 mb-2">🐾 OpenClaw</div>
          <Code title="Built-in Debugging">{`# View session history
openclaw sessions list --active 60

# Check cron job runs
openclaw cron runs --job "Trading Plan" --limit 5

# View session logs
openclaw sessions history --session <key> --include-tools

# Check gateway status
openclaw status

# Monitor in real-time
# Add a daily self-diagnostic cron:
openclaw cron add --name "Daily Health Check" \\
  --cron "0 22 * * *" --session isolated \\
  --message "Run a self-diagnostic:
  1. Check all cron jobs ran today (list runs)
  2. Check for any errors in recent sessions
  3. Report: tasks completed, tasks failed, total cost
  Post summary to Discord."
  --model "haiku" --announce`}</Code>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">🤖 Claude API — Built-in Logging</div>
          <Code title="Python Logging Setup">{`import anthropic
import json
from datetime import datetime

client = anthropic.Anthropic()

def logged_completion(prompt, model="claude-sonnet-4-20250514"):
    """Wrapper that logs every API call"""
    start = datetime.now()
    
    response = client.messages.create(
        model=model,
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}]
    )
    
    log_entry = {
        "timestamp": start.isoformat(),
        "model": model,
        "input_tokens": response.usage.input_tokens,
        "output_tokens": response.usage.output_tokens,
        "latency_ms": (datetime.now() - start).total_seconds() * 1000,
        "prompt_preview": prompt[:100],
        "stop_reason": response.stop_reason,
    }
    
    with open("logs/agent.jsonl", "a") as f:
        f.write(json.dumps(log_entry) + "\\n")
    
    return response`}</Code>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🚀 CrewAI / LangChain — LangSmith & Arize</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>LangSmith:</strong> Automatic tracing for LangChain. See every chain step, token count, latency</li>
            <li>• <strong>Arize Phoenix:</strong> Open-source observability. Local dashboard for traces + evals</li>
            <li>• <strong>CrewAI verbose=True:</strong> Prints every agent step to console — basic but effective</li>
            <li>• <strong>OpenTelemetry:</strong> Industry standard. Export traces to any observability platform</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">⚡ n8n / Make / Zapier</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>n8n:</strong> Built-in execution history. Click any run to see input/output for every node</li>
            <li>• <strong>Make:</strong> Scenario history with full data flow visualization</li>
            <li>• <strong>Zapier:</strong> Task history with per-step data. Set up error notifications</li>
            <li>• <strong>Pro tip:</strong> Add a "log to spreadsheet" node at the end of every workflow for your own analytics</li>
          </ul>
        </div>
        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="text-sm font-bold text-yellow-400 mb-2">💻 Cursor / Windsurf / Cline</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Cursor:</strong> Check Settings → Usage to monitor token consumption</li>
            <li>• <strong>Git diff:</strong> Review what the agent changed with <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">git diff</code> before committing</li>
            <li>• <strong>Undo:</strong> Use git to revert bad changes: <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">git checkout -- .</code></li>
            <li>• <strong>Cline:</strong> Shows full conversation log in the sidebar — review reasoning</li>
          </ul>
        </div>
      </div>

      <h2>The "Morning After" Checklist</h2>

      <Code title="Daily Review Prompt (5 minutes)">{`Quick daily review checklist:

1. Did all scheduled cron jobs run? ✅/❌
2. Any error messages in logs? ✅/❌
3. Token usage within budget? ✅/❌
4. Output quality acceptable? ✅/❌
5. Any unexpected behaviors? ✅/❌

If all ✅ → Great, move on.
If any ❌ → Debug using the failure patterns above.`}</Code>

      <h2>The "Time Travel" Debug Technique</h2>

      <p>The most powerful debugging technique for agents: <strong>reproduce the exact conditions</strong>. When something goes wrong at 3 AM, you need to see what the agent saw.</p>

      <Code title="Time Travel Debugging">{`# Step 1: Find the failing run
openclaw cron runs --job "Trading Plan" --limit 1

# Step 2: Check what files existed at that time
git log --oneline --until="2026-02-22T06:00:00" -5

# Step 3: Check what the agent's memory looked like
git show HEAD~2:memory/2026-02-21.md

# Step 4: Re-run with the same context
openclaw cron run --job "Trading Plan" --force
# This re-runs the exact same prompt in a fresh session

# Step 5: Compare outputs
# Old output (from logs) vs new output (from re-run)
# If they match → the input was the problem
# If they differ → the model was non-deterministic (use temperature 0)`}</Code>

      <h2>Building Your Dashboard</h2>

      <p>After a month of running agents, you'll want a dashboard. Here's the minimal viable monitoring setup:</p>

      <Code title="Daily Health Cron">{`openclaw cron add \\
  --name "Agent Health Dashboard" \\
  --cron "0 22 * * *" \\
  --session isolated \\
  --message "End-of-day health check:

1. List all cron jobs and their last run status
2. Count total sessions today
3. Estimate today's API cost
4. Check for any errors in logs
5. Compare today's output quality to baseline

Format:
📊 **Agent Health — [Date]**
- Cron jobs: [X/Y ran successfully]
- Sessions: [N total]
- Est. cost: $[amount]
- Errors: [count] [brief description if any]
- Quality: [✅ Good / ⚠️ Check needed / ❌ Issues found]

If all green, keep it to 5 lines max." \\
  --model "haiku" --announce \\
  --channel discord --to "channel:YOUR_ID"`}</Code>

      <Callout emoji="🔑" title="The #1 Debugging Rule">
        <strong>Always check the input before blaming the model.</strong> 90% of "the AI is broken" problems are actually "I gave it bad/missing context" problems. Check what went IN before analyzing what came OUT.
      </Callout>

      <h2>The Debugging Flowchart</h2>

      <p>When your agent does something weird, follow this exact sequence:</p>

      <FlowDiagram steps={[
        { emoji: "🔍", label: "Check the input", detail: "What context/files did the agent actually receive? Was anything missing or malformed?" },
        { emoji: "📋", label: "Check the prompt", detail: "Did your instructions clearly describe what you wanted? Any ambiguity?" },
        { emoji: "🧠", label: "Check the context window", detail: "Did you exceed the token limit? Was important info truncated?" },
        { emoji: "🔧", label: "Check the tools", detail: "Did the agent have access to the right tools? Did any tool calls fail?" },
        { emoji: "🎯", label: "Check the output parsing", detail: "Did the agent output correctly but your parser misread it?" },
        { emoji: "🤖", label: "THEN blame the model", detail: "Only after checking everything else. Try a different model or temperature." }
      ]} />

      <h2>Observable Agent Architecture</h2>

      <p>The best debugging setup is one where you can see everything without adding debug code. Build observability in from day one:</p>

      <ul className="my-4 space-y-2 text-[var(--foreground)]/80 text-sm">
        <li className="flex gap-3"><span>📝</span> <span><strong>Input logging</strong> — save every prompt sent to the model (with timestamps)</span></li>
        <li className="flex gap-3"><span>📝</span> <span><strong>Output logging</strong> — save every response received</span></li>
        <li className="flex gap-3"><span>📝</span> <span><strong>Tool call logging</strong> — which tools were called, with what args, and what they returned</span></li>
        <li className="flex gap-3"><span>📝</span> <span><strong>Decision logging</strong> — why the agent chose action A over action B</span></li>
        <li className="flex gap-3"><span>📝</span> <span><strong>Cost logging</strong> — tokens used per request (catches runaway costs early)</span></li>
      </ul>

      <h2>The "Replay" Technique</h2>

      <p>The most powerful debugging technique: <strong>replay the exact same input</strong> and see if you get the same output. If you do, the bug is deterministic (probably a prompt issue). If you don't, the bug is stochastic (probably a temperature or context window issue).</p>

      <p>This is why input logging matters so much. Without the exact input, you can't replay. And without replay, you're guessing.</p>

      <Tip emoji="🌡️" title="Temperature 0 for Debugging">
        When debugging, set temperature to 0. This makes the model's output deterministic (or close to it). Once you've found and fixed the issue, switch back to your normal temperature. Debugging non-deterministic systems is a nightmare — remove randomness first.
      </Tip>

      <Tip emoji="📊" title="The Cost-Per-Task Dashboard">
        Track how many tokens each cron job and task uses. Plot it over time. A sudden spike means something changed — maybe a file got bigger, maybe the agent entered a retry loop, maybe a new tool is being chatty. Cost anomalies are often the first signal that something is broken.
      </Tip>

      <Quiz
        question="Your agent suddenly starts giving wrong answers about your project. It worked fine yesterday. What do you check first?"
        options={[
          { text: "The model — maybe OpenAI/Anthropic changed something", explanation: "Model changes are rare and well-publicized. This is almost never the cause of sudden issues." },
          { text: "The input — did the knowledge base files change, get corrupted, or get too large?", correct: true, explanation: "Correct! 90% of sudden agent failures trace back to changed input. A file was modified, deleted, or grew past the context window limit. Always check input first." },
          { text: "The temperature setting — maybe it got changed", explanation: "Temperature affects randomness, not accuracy about specific facts. Wrong answers about YOUR project point to context/input issues." },
          { text: "The internet connection — maybe the API is slow", explanation: "A slow API would cause timeouts, not wrong answers. The agent got an answer, just the wrong one. That's an input/context problem." }
        ]}
      />

      <Checklist
        title="Observability Setup Checklist"
        items={[
          "Enabled input logging for all agent prompts",
          "Enabled output logging for all agent responses",
          "Set up tool call logging (args + return values)",
          "Created a cost-per-task tracking system",
          "Set up alerts for cost anomalies (2x normal spend)",
          "Built a replay mechanism for debugging (save exact inputs)",
          "Added error handling with meaningful error messages (not just 'something went wrong')",
          "Created a debugging runbook with your most common failure modes"
        ]}
      />
    </>
  );
}
