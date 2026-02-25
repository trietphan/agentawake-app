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
        Let's be honest. You downloaded ChatGPT, Claude, or some shiny AI agent tool. You had a <strong>magical</strong> first conversation. It felt like the future. Then you came back the next day and it said:
      </p>

      <div className="my-6 rounded-xl bg-[var(--surface-hover)]/50 border border-[var(--border)] p-5 font-mono text-sm text-[var(--text-secondary)]">
        "Hi! How can I help you today? 😊"
      </div>

      <p>
        <strong>It forgot everything.</strong> Your project details. Your preferences. The fact that you hate markdown tables. That brilliant plan you made at 2 AM. All gone. Poof. Like it never happened.
      </p>

      <p>
        And it's not just annoying — it's <strong>expensive</strong>. Every conversation where you re-explain context is time you're paying for twice. Every "as I mentioned yesterday" that falls on deaf ears is friction that compounds into frustration. Eventually, most people give up and go back to doing everything manually, muttering "AI is overhyped."
      </p>

      <Analogy>
        Imagine hiring the world's smartest assistant — they have a PhD, speak 12 languages, can code, write, and research anything in seconds. <strong>But they get blackout drunk every single night</strong> and wake up with zero memory of who you are. Every morning you start over: "Hi, I'm your boss. We're building a SaaS product. No, I told you this yesterday. And the day before." After a week, you'd fire them. After a month, you'd question your sanity.
      </Analogy>

      <p>
        That's what using an AI agent without a memory system is like. You're paying for a genius who can't remember breakfast.
      </p>

      <h2>Why This Happens (And Why It's Not the AI's Fault)</h2>

      <p>
        Here's the thing most people don't understand: <strong>LLMs don't have amnesia because they're bad at remembering. They have amnesia because nobody gave them a filing cabinet.</strong>
      </p>

      <p>
        Think about it. When ChatGPT forgets your project details, it's not because the model is stupid. GPT-4 can hold entire textbooks in its context window. The problem is architectural — every conversation starts a fresh session with zero prior state. It's like having a brilliant employee who works in a room where someone shreds every document at the end of each day.
      </p>

      <Analogy>
        Your brain doesn't store memories in the "thinking" part. You think with your prefrontal cortex, but memories live in your hippocampus, your cerebellum, scattered across your neural networks. If your prefrontal cortex got wiped every night, you'd be just as amnesiac as ChatGPT — even though your raw intelligence would be perfectly intact.
        <br /><br />
        AI agents need the same separation: a <strong>thinking engine</strong> (the LLM) and a <strong>memory system</strong> (external files the LLM reads and writes). That's literally all this playbook teaches — how to build that memory system.
      </Analogy>

      <h2>The $4,000/Week Difference</h2>

      <p>
        Meanwhile, some people are building agents that generate <strong>$4,000 per week</strong> autonomously. Their agents write content, analyze markets, validate business ideas, and process payments — all while the human is literally sleeping.
      </p>

      <p>What's the difference? It's not smarter AI. GPT-4, Claude, Gemini — they're all brilliant enough. The difference is <strong>three files</strong>.</p>

      <p>Yep. Three files turn your goldfish-brained chatbot into an autonomous operator. This playbook shows you exactly which three, how to set them up, and how they compound over time until your agent knows you better than your best friend does.</p>

      <h2>The Three Files (A Sneak Peek)</h2>

      <p>We'll go deep on each one in the coming chapters, but here's the 30-second overview so you know where we're headed:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-blue-400 mb-1">📁 File 1: Knowledge Base</div>
          <p className="text-sm text-[var(--text-secondary)]">Everything your agent needs to know about your world — projects, preferences, reference material. Organized once, referenced forever. Think of it as your agent's long-term memory.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">📁 File 2: Daily Notes</div>
          <p className="text-sm text-[var(--text-secondary)]">What happened today. Decisions made, tasks completed, blockers hit. Your agent reads this every morning to reconstruct "where we left off." Think of it as your agent's short-term memory.</p>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-1">📁 File 3: Tacit Knowledge</div>
          <p className="text-sm text-[var(--text-secondary)]">The stuff that can't be Googled. "Boss hates tables." "Always explain the why, not just the what." "Never deploy on Fridays." Lessons learned through experience, accumulated over time.</p>
        </div>
      </div>

      <Callout emoji="⏱️" title="How long does setup take?">
        About 45 minutes. Less time than watching one episode of your favorite show. But unlike Netflix, this one pays you back. By the end of Chapter 7, you'll have a fully operational agent with persistent memory, automated maintenance, and a security model. And we give you copy-paste configs so you're not starting from scratch.
      </Callout>

      <h2>What This Playbook Is (And What It's Not)</h2>

      <p>This isn't a "10 tips for better prompts" blog post. This is the <strong>complete operating system</strong> for building an AI agent that actually runs your business:</p>

      <ul className="my-4 space-y-3 text-[var(--foreground)]/80">
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">→</span> <span>The three-layer memory architecture (knowledge base + daily notes + tacit knowledge)</span></li>
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">→</span> <span>How to make your agent work while you sleep (heartbeats & cron jobs)</span></li>
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">→</span> <span>A security model that lets you actually trust your agent with real tools</span></li>
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">→</span> <span>Real case studies: trading bot, content pipeline, idea validation engine</span></li>
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">→</span> <span>Copy-paste configs so you don't have to figure anything out from scratch</span></li>
        <li className="flex gap-3"><span className="text-[var(--accent-light)] font-bold">→</span> <span>Advanced techniques: multi-agent orchestration, prompt injection defense, progressive trust</span></li>
      </ul>

      <p>What it's <strong>not</strong>: a theoretical treatise on AI alignment, a prompt engineering course, or a tutorial on how to use ChatGPT. We assume you've already talked to an AI and thought "this is powerful but kind of useless for real work." We're here to fix the "kind of useless" part.</p>

      <h2>Who This Is For</h2>

      <p>
        You're a <strong>builder</strong>. Maybe you're a solopreneur, an indie hacker, a freelancer, or a small team lead. You've tried AI tools and hit the wall. You know the potential is there — you've seen the Twitter threads about people making $10K/month with AI agents — but your experience has been more "20 minutes re-explaining my project" than "passive income while sleeping."
      </p>

      <p>
        You don't need to be a developer. You need to be comfortable with files and folders, and willing to spend 45 minutes setting things up. If you can organize a Google Drive, you can build this system.
      </p>

      <h2>How to Read This Playbook</h2>

      <p><strong>Blueprint Tier (Chapters 1-7):</strong> The foundation. Read these in order. Do the exercises. By the end, you'll have a working agent with persistent memory. This is where 80% of the value comes from.</p>

      <p><strong>Pro Tier (Chapters 8-12):</strong> Copy-paste configs and real case studies. Read these when you're ready to level up from "it works" to "it runs my business." The case studies aren't hypothetical — they're systems we actually run.</p>

      <p><strong>Accelerator Tier (Chapters 13-16):</strong> Expert territory. Multi-agent orchestration, security hardening, progressive trust. Read these when your single agent is humming and you're ready to build a team of agents. This is the difference between "AI user" and "AI operator."</p>

      <Callout emoji="🤯" title="The meta part">
        This entire product — the landing page, the payment system, the content you're reading right now — was built by the exact agent system documented in this playbook. We're selling the map we used to navigate the territory. The agent that built this site reads the same three files we're about to teach you to create.
      </Callout>

      <h2>One Last Thing Before We Start</h2>

      <p>
        The people making money with AI agents aren't smarter than you. They're not using some secret model or API. They simply <strong>gave their AI a memory system</strong> and then let compound interest do its thing. Every day the agent remembers more, learns more, and needs less hand-holding. After three months, it's like having a senior employee who's been with you for years.
      </p>

      <h2>The Compound Effect of Agent Memory</h2>

      <p>Here's what most people miss: <strong>an agent with memory doesn't just remember — it compounds.</strong> Every conversation makes it smarter. Every mistake becomes a permanent lesson. Every preference you express gets encoded forever.</p>

      <div className="my-6 space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Day 1</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">You explain your project, your tech stack, your preferences. Agent takes notes.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Day 7</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent knows your project inside out. Stops asking basic questions. Starts anticipating what you need.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Day 30</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent runs daily operations autonomously. You review output for 5 minutes over coffee. It handles everything else.</div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-sm font-bold text-[var(--text-tertiary)] mt-0.5 w-16">Day 90</span>
          <div className="rounded-lg bg-[var(--surface-hover)]/40 px-4 py-2 text-sm text-[var(--text-secondary)]">Agent suggests improvements you didn't think of. "I noticed our Tuesday posts get 3x more engagement — should I shift the content calendar?" It's not just executing — it's <em>thinking</em>.</div>
        </div>
      </div>

      <p>This doesn't happen by accident. It happens because of a specific architecture — three layers of memory, working together. That's what this playbook teaches.</p>

      <h2>Who This Playbook Is For</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔨 Builders & Indie Hackers</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You want an AI agent that actually helps you ship products, not just chat about them. You want automation that runs while you sleep. You want to turn $15/month in API costs into $6K+/month in revenue.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">💼 Knowledge Workers</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You spend hours on research, emails, reports, and content. You want an AI assistant that actually knows your job, your preferences, and your workflow — not one that asks "what's your name?" every morning.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚀 Aspiring AI Entrepreneurs</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You see the opportunity in AI agents but don't know how to build a profitable one. Chapter 21 has 7 revenue models with real math. Several of them get to first revenue in 2-4 weeks.</p>
        </div>
      </div>

      <p>
        You're 45 minutes away from that. Let's go.
      </p>

      <ROICalculator />

      <Quiz
        question="Why do most AI agents feel 'useless' for real work?"
        options={[
          { text: "The AI models aren't smart enough", explanation: "Models are incredibly capable — the bottleneck is usually context, not intelligence." },
          { text: "They forget everything between conversations", correct: true, explanation: "Exactly! Without persistent memory, every conversation starts from zero. That's the #1 problem this playbook solves." },
          { text: "They're too expensive to run", explanation: "Most agent setups cost under $15/month. Cost isn't the issue — memory is." },
          { text: "They can't access external tools", explanation: "Most platforms support tools. The real issue is the agent doesn't remember HOW you want those tools used." },
        ]}
      />

      <ArchitectureDiagram />
    </>
  );
}
