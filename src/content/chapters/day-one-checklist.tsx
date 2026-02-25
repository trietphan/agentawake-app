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
        Enough theory. Let's build this thing. Here's your exact 45-minute setup — step by step, nothing skipped. I've done this dozens of times and refined it to the minimum viable setup that actually works.
      </p>

      <Analogy>
        Think of this as assembling IKEA furniture, except the instructions actually make sense and you'll be done before your pizza arrives. 🍕 Each step has a time estimate. If you're faster, great. If you're slower, don't stress — an extra 15 minutes won't hurt.
      </Analogy>

      <div className="my-6 space-y-4">
        {[
          { time: "5 min", title: "Create the PARA knowledge structure", desc: "Four folders and a README. Your agent's organized brain." },
          { time: "10 min", title: "Write your first project file", desc: "Whatever you're working on right now. Give your agent context." },
          { time: "10 min", title: "Create tacit.md", desc: "Start with 5 communication preferences. You'll add more over time." },
          { time: "5 min", title: "Set up nightly consolidation cron", desc: "Copy the config from Chapter 5. Your agent's night shift starts tonight." },
          { time: "5 min", title: "Create HEARTBEAT.md", desc: "List 2-3 things for your agent to check periodically." },
          { time: "5 min", title: "Write your SOUL.md", desc: "Give your agent personality and boundaries. This is its identity." },
          { time: "5 min", title: "Update AGENTS.md with the rules", desc: "Tell your agent about the knowledge base and security model." },
        ].map((step, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/15 flex items-center justify-center text-sm font-bold text-[var(--accent-light)]">
              {i + 1}
            </div>
            <div className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-[var(--foreground)]">{step.title}</div>
                <div className="text-xs text-[var(--text-tertiary)]">{step.time}</div>
              </div>
              <p className="mt-1 text-xs text-[var(--text-tertiary)]">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Step-by-Step Walkthrough</h2>

      <h3>Step 1: Create the PARA Structure (5 min)</h3>

      <Code title="terminal">{`# Create the folder structure
mkdir -p knowledge/{projects,areas,resources,archives}
mkdir -p memory

# Create the knowledge base README
cat > knowledge/README.md << 'EOF'
# Knowledge Base (PARA)
- projects/  → Active work (one .md per project)
- areas/     → Ongoing responsibilities
- resources/ → Reference material
- archives/  → Completed work

Rules:
1. One file per project/area
2. Finished projects → archives/
3. File names: lowercase-with-dashes.md
4. Each file starts with status emoji: 🟢 live, 🟡 building, 🔴 blocked
EOF

echo "✅ PARA structure created"`}</Code>

      <h3>Step 2: Write Your First Project File (10 min)</h3>

      <p>Open your editor and create a file for whatever you're working on right now. Use this template:</p>

      <Code title="knowledge/projects/my-project.md">{`# [Project Name]

## Status: 🟡 Building (Started [Date])

## What Is This?
[2-3 sentences explaining the project]

## Current Priority
- [ ] [Most important task right now]
- [ ] [Second most important]
- [ ] [Third]

## Tech Stack / Tools
- [List what you're using]

## Key Decisions Made
- [Any important decisions so far]

## Links
- [Repo, staging URL, dashboards, docs]`}</Code>

      <p>Don't overthink this. Spend 10 minutes, not 2 hours. You can always add more later.</p>

      <h3>Step 3: Create tacit.md (10 min)</h3>

      <Code title="knowledge/tacit.md">{`# What I Know About My Human

## Communication Style
- [How do you like messages formatted?]
- [Short or detailed?]
- [Formal or casual?]

## Pet Peeves
- [What annoys you in AI interactions?]
- [What should your agent NEVER do?]

## Work Patterns
- Timezone: [Your timezone]
- Most productive: [When?]
- Don't bother me: [When?]

## Decision Style
- [Do you want options or recommendations?]
- [How much autonomy should the agent have?]

## Technical Preferences
- [Languages, frameworks, tools you prefer]`}</Code>

      <h3>Step 4: Set Up Nightly Consolidation (5 min)</h3>

      <Code title="terminal">{`openclaw cron add \\
  --name "Nightly Memory Consolidation" \\
  --cron "0 2 * * *" \\
  --tz "YOUR_TIMEZONE" \\
  --session isolated \\
  --message "Review today's daily note. Extract key \\
    decisions and learnings. Update knowledge base files. \\
    Update tacit.md with any new preferences discovered. \\
    Log what you consolidated." \\
  --model "sonnet"`}</Code>

      <h3>Step 5: Create HEARTBEAT.md (5 min)</h3>

      <Code title="HEARTBEAT.md">{`# Heartbeat Checklist
- [ ] Any urgent emails?
- [ ] Calendar events in next 2 hours?
- [ ] Any social mentions/DMs?
- If nothing: reply HEARTBEAT_OK
- Late night (11 PM - 8 AM): only urgent stuff`}</Code>

      <h3>Step 6: Write SOUL.md (5 min)</h3>

      <Code title="SOUL.md">{`# Who You Are

You are an operator, not a help desk.

Be genuinely helpful, not performatively helpful.
Skip "Great question!" — just answer the question.
Have opinions. Disagree when you think I'm wrong.
Be resourceful before asking. Try to figure it out.
Ship fast, iterate later.

You're a guest in someone's life. Be respectful.
Be the assistant you'd actually want to talk to.`}</Code>

      <h3>Step 7: Update AGENTS.md (5 min)</h3>

      <p>Add the memory system rules, security model, and daily notes protocol from the previous chapters. (The Pro tier gives you copy-paste-ready configs for this.)</p>

      <h2>The Verification Test</h2>

      <p>After completing all 7 steps, run this test:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
          <div className="text-sm font-bold text-green-400">✅ Test 1: Start a fresh conversation</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Your agent should greet you with context — mentioning your project, current status, etc. If it says "Hi! How can I help?" with no context, something's not connected.</p>
        </div>
        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
          <div className="text-sm font-bold text-green-400">✅ Test 2: Ask about your project</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Without re-explaining anything, ask "What's the status of my project?" Your agent should be able to answer from the knowledge base file.</p>
        </div>
        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
          <div className="text-sm font-bold text-green-400">✅ Test 3: Check formatting</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Ask for a summary of something. Does the output match your communication preferences from tacit.md? If you said "no tables" and you get a table, the tacit file isn't being read.</p>
        </div>
        <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
          <div className="text-sm font-bold text-green-400">✅ Test 4: Wait for the cron</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Let the nightly consolidation run once. The next morning, check if the knowledge base was updated and a daily note exists.</p>
        </div>
      </div>

      <h2>What to Do If Something Isn't Working</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">Agent doesn't read the knowledge base</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Check your AGENTS.md — does it tell the agent where to look? Add: "On startup, read knowledge/tacit.md and memory/YYYY-MM-DD.md for context."</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">Cron job doesn't fire</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Run <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">openclaw cron list</code> to verify it's registered. Check the timezone is correct. Check logs with <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">openclaw cron logs</code>.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">Agent ignores preferences</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">The tacit.md file might not be in the agent's read path. Explicitly tell it: "Read knowledge/tacit.md before responding." If that works, add it to AGENTS.md permanently.</p>
        </div>
      </div>

      <Callout emoji="🚀" title="After 45 Minutes">
        Your agent has persistent memory, automated maintenance, a security model, and a personality. It's no longer a chatbot — it's an operator. Send it your first real task and watch the difference. Tomorrow morning, when it greets you with full context and a plan for the day, you'll know it was worth it.
      </Callout>

      <p>
        That's the Blueprint tier complete. You now have everything you need to run a functional AI agent with persistent memory. The next tier — Pro — gives you battle-tested configs you can copy-paste, plus real case studies of agents making money.
      </p>

      <Checklist
        title="Day One Setup Checklist"
        items={[
          "Create workspace/knowledge/ folder structure",
          "Write AGENTS.md with core rules and personality",
          "Create knowledge/tacit.md with your preferences",
          "Set up memory/YYYY-MM-DD.md for daily notes",
          "Configure first heartbeat or cron job",
          "Add security rules (authorized senders, data boundaries)",
          "Test: send a task and verify it reads context correctly",
          "Test: wait for cron/heartbeat to fire and check output",
        ]}
      />
    </>
  );
}
