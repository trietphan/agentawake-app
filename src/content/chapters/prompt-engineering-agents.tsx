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
        Prompting an agent is <strong>not</strong> the same as prompting ChatGPT. An agent has persistent memory, tools, scheduled tasks, and operates autonomously. The prompt engineering techniques that work for chat conversations often fail for agents.
      </p>

      <Analogy>
        Giving someone directions to your house is different from giving them a GPS. Directions work for one trip. A GPS works for every trip, adapts to traffic, and handles unexpected situations. <strong>Agent prompts are GPS systems, not directions.</strong> They need to handle any situation, not just the one you're thinking of right now.
      </Analogy>

      <h2>Chat Prompting vs Agent Prompting</h2>

      <p>Let's make this concrete. Here's the same task, prompted two ways:</p>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="text-sm font-bold text-red-400 mb-3">❌ Chat-Style Prompt</div>
          <div className="text-xs text-[var(--text-secondary)] font-mono bg-[var(--surface-hover)]/50 rounded p-3">
            "Hey, can you check if there are any important emails and let me know? Also maybe check Twitter for anything interesting about AI agents."
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-2">Vague. Open-ended. Requires follow-up questions. Fine for a conversation — terrible for an autonomous agent.</p>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-3">✅ Agent-Style Prompt</div>
          <div className="text-xs text-[var(--text-secondary)] font-mono bg-[var(--surface-hover)]/50 rounded p-3">
            "Morning briefing. Check email: flag subjects containing 'urgent' or senders in knowledge/vip-list.md. Check Twitter: search '$AI agent' last 4hrs, filter 5k+ follower accounts. Output: bullets, max 15 lines. If nothing urgent: 'All clear.' Save to memory/YYYY-MM-DD.md."
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-2">Specific. Self-contained. Handles edge cases. Defines output format. Works at 3 AM with zero human input.</p>
        </div>
      </div>

      <p>The difference? The agent prompt is a <strong>complete specification</strong>. It tells the agent what to do, how to do it, what the output looks like, where to save it, and what to do if there's nothing to report. The chat prompt requires a human to answer 5 follow-up questions before work can begin.</p>

      <h2>The "Fresh Session Test"</h2>

      <p>Here's a mental model that will improve every prompt you write: <strong>Imagine someone with amnesia reading this prompt.</strong> They're smart — really smart — but they have no context about you, your project, or your preferences. Can they complete the task from the prompt alone?</p>

      <p>This is literally what happens with isolated cron sessions. No chat history. No memory of yesterday. Just the prompt + knowledge base files. If your prompt passes the "fresh session test," it'll work reliably at 3 AM.</p>

      <h2>The 5 Principles of Agent Prompting</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">1. State, Don't Ask</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">In chat, you ask questions. For agents, you state rules. The agent should never need to ask "what do you want me to do?" — it should know from the prompt.</p>
          <div className="grid gap-2 sm:grid-cols-2 mt-3">
            <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-3">
              <div className="text-xs font-bold text-red-400 mb-1">❌ Chat-style</div>
              <p className="text-xs text-[var(--text-tertiary)]">"Can you check if there are any urgent emails?"</p>
            </div>
            <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-3">
              <div className="text-xs font-bold text-green-400 mb-1">✅ Agent-style</div>
              <p className="text-xs text-[var(--text-tertiary)]">"Check emails. If subject contains 'urgent' or sender is in VIP list, forward to Discord immediately. Otherwise, batch for daily summary."</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">2. Define Boundaries, Not Just Tasks</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">An agent running autonomously needs to know what it <em>shouldn't</em> do, not just what it should.</p>
          <Code title="Boundary-aware prompt">{`Generate today's content plan.

DO:
- Research trending topics in AI/SaaS
- Draft 3 tweet options
- Save drafts to content/drafts.md

DO NOT:
- Post anything without approval
- Engage with controversial topics
- Reply to other accounts
- Use hashtags (they look spammy)

IF UNSURE:
- Save to content/needs-review.md with your concern
- Do not ask me — decide based on these rules`}</Code>
        </div>

        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">3. Give Examples, Not Descriptions</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Showing beats telling. 2 examples are worth 200 words of explanation.</p>
          <div className="grid gap-2 sm:grid-cols-2 mt-3">
            <div className="rounded-lg bg-red-500/5 border border-red-500/20 p-3">
              <div className="text-xs font-bold text-red-400 mb-1">❌ Describing</div>
              <p className="text-xs text-[var(--text-tertiary)]">"Write in a casual, witty, slightly irreverent tone that feels authentic and human."</p>
            </div>
            <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-3">
              <div className="text-xs font-bold text-green-400 mb-1">✅ Showing</div>
              <p className="text-xs text-[var(--text-tertiary)]">"Match this voice:<br />GOOD: 'Hot take: most AI agents are just chatbots with a cron job.'<br />BAD: 'In this article, we will explore the fascinating world of AI agents.'"</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent-light)]/15 bg-[var(--accent-light)]/4 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">4. Design for Failure</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Chat prompts assume success. Agent prompts must handle: tool failures, missing data, rate limits, unexpected inputs.</p>
          <Code title="Failure-aware prompt">{`Search Twitter for $ES_F sentiment.

IF search returns results:
  → Analyze sentiment and include quotes
IF search fails or returns no results:
  → Use yesterday's sentiment from memory
  → Add note: "⚠️ Live search unavailable, using cached data"
IF search returns spam/irrelevant results:
  → Filter to accounts with 5k+ followers
  → If still no good data, state "Insufficient signal today"`}</Code>
        </div>

        <div className="rounded-xl border border-pink-500/20 bg-pink-500/5 p-5">
          <div className="text-sm font-bold text-pink-400 mb-2">5. Enforce Output Format</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Agents often need to produce output that feeds into other systems. Strict format prevents downstream failures.</p>
          <Code title="Format enforcement">{`CRITICAL INSTRUCTION: Output MUST follow this exact format.
Do NOT summarize. Do NOT add commentary outside the template.
Do NOT skip sections.

# 📅 Daily Report — [Date]

## 📊 Metrics
- Tasks completed: [number]
- Tasks failed: [number]
- Total cost: $[amount]

## ✅ Completed
- [Task 1]: [one-line result]
- [Task 2]: [one-line result]

## ❌ Failed
- [Task]: [reason] → [suggested fix]

## 📋 Tomorrow
- [Priority 1]
- [Priority 2]`}</Code>
        </div>
      </div>

      <h2>🔌 Platform-Specific Prompting Tips</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="text-sm font-bold text-cyan-400 mb-2">🐾 OpenClaw — AGENTS.md is your system prompt</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Put rules in AGENTS.md — it's loaded every session automatically</li>
            <li>• Use SOUL.md for personality/voice — keep it separate from rules</li>
            <li>• Cron job prompts should be self-contained (isolated sessions have no chat history)</li>
            <li>• Use "CRITICAL INSTRUCTION" prefix for rules the model must never skip</li>
          </ul>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">🤖 Claude — System prompt best practices</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Claude follows system prompts very faithfully — invest time in getting them right</li>
            <li>• Use XML tags for structure: <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">&lt;rules&gt;...&lt;/rules&gt;</code></li>
            <li>• Claude responds well to "think step by step" for complex reasoning</li>
            <li>• For tool use: describe tools precisely — Claude will use them more effectively</li>
          </ul>
        </div>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">💬 ChatGPT — Custom GPT instructions</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• GPT-4o benefits from explicit role assignment: "You are a [role] who [does what]"</li>
            <li>• Use numbered steps for multi-step tasks</li>
            <li>• ChatGPT can be chatty — add "Be concise. No preamble. No concluding remarks."</li>
            <li>• Custom GPT instructions have a character limit — prioritize rules over examples</li>
          </ul>
        </div>
        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="text-sm font-bold text-yellow-400 mb-2">💻 Cursor / Windsurf / Cline — .cursorrules</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Keep .cursorrules under 2000 lines — too long and the model ignores parts</li>
            <li>• Put the most important rules first (models pay more attention to the beginning)</li>
            <li>• Include code examples of your patterns — the agent will match them</li>
            <li>• Negative examples ("never do X") are just as important as positive ones</li>
          </ul>
        </div>
      </div>

      <Callout emoji="🎯" title="The Meta-Skill">
        Prompt engineering for agents is less about clever tricks and more about <strong>thinking like a manager writing an employee handbook.</strong> Be clear, be specific, anticipate problems, give examples, and define boundaries. The better your "handbook," the less you need to intervene.
      </Callout>

      <h2>Before and After: Prompt Upgrades</h2>

      <BeforeAfter
        before={{
          title: "Vague Prompts",
          items: [
            "\"Write good content for social media\"",
            "\"Be helpful and professional\"",
            "\"Check my emails and handle them\"",
            "\"Make my code better\"",
            "\"Do market research on competitors\""
          ]
        }}
        after={{
          title: "Agent-Ready Prompts",
          items: [
            "\"Write a Twitter thread (8-12 tweets) about [topic] using the voice in knowledge/resources/my-best-content.md. Start with a hook, end with a CTA.\"",
            "\"Respond in a casual, first-name tone. Use contractions. Max 3 sentences unless asked for detail. Never say 'certainly' or 'I'd be happy to.'\"",
            "\"Read unread emails. For each: summarize in 1 line, suggest a reply draft, flag urgency (🔴🟡🟢). Skip newsletters and promotions.\"",
            "\"Review this PR for: security issues, performance bottlenecks, and missing error handling. Suggest fixes with code snippets. Ignore style/formatting.\"",
            "\"Check pricing pages of [3 URLs]. Extract: plans, prices, feature limits, and free tier details. Format as a comparison table in knowledge/resources/competitor-pricing.md.\""
          ]
        }}
      />

      <h2>The Prompt Structure That Works</h2>

      <p>Every great agent prompt has these five sections, in this order:</p>

      <ul className="my-4 space-y-2 text-[var(--foreground)]/80 text-sm">
        <li className="flex gap-3"><span>1.</span> <span><strong>Identity</strong> — who is this agent? What's its role?</span></li>
        <li className="flex gap-3"><span>2.</span> <span><strong>Context</strong> — what files/info should it load? What's the situation?</span></li>
        <li className="flex gap-3"><span>3.</span> <span><strong>Task</strong> — what specifically should it DO? (concrete verbs)</span></li>
        <li className="flex gap-3"><span>4.</span> <span><strong>Constraints</strong> — what should it NOT do? What are the boundaries?</span></li>
        <li className="flex gap-3"><span>5.</span> <span><strong>Output format</strong> — how should the result be structured?</span></li>
      </ul>

      <p>Miss any of these and your agent fills in the blanks with assumptions. Sometimes good assumptions. Often terrible ones.</p>

      <h2>Advanced: The Few-Shot Technique</h2>

      <p>Instead of describing what you want, <strong>show examples</strong>. Include 2-3 examples of ideal output in your prompt. The agent will pattern-match and produce similar results. This works better than any amount of description for things like tone, format, and style.</p>

      <p>Think of it like training a new employee: "Here are three reports I loved. Make the next one like these." Way more effective than a 500-word style guide.</p>

      <Tip emoji="🎭" title="The Persona Trick">
        Instead of describing personality traits, give your agent a one-line persona: "You are a sarcastic senior developer who gives honest code reviews." or "You are a concise, data-driven business analyst." One sentence of persona beats ten sentences of personality rules.
      </Tip>

      <Tip emoji="❌" title="Negative Examples Are Gold">
        Don't just show what you want — show what you DON'T want. "Never respond like this: 'Certainly! I'd be happy to help you with that!'" is more powerful than "Be casual." Negative examples draw a clear line that the model rarely crosses.
      </Tip>

      <Quiz
        question="You want your agent to write in your personal voice. What's the most effective prompting technique?"
        options={[
          { text: "Describe your voice in detail: 'casual, punchy, uses humor, short sentences'", explanation: "Descriptions are vague. Every person's version of 'casual and punchy' is different. The model will use its default interpretation." },
          { text: "Provide 5-10 examples of your actual writing and say 'match this style'", correct: true, explanation: "Correct! Few-shot examples are the most reliable way to transfer voice. The model can pattern-match on real examples much better than it can interpret abstract descriptions." },
          { text: "Use a custom fine-tuned model trained on your writing", explanation: "Fine-tuning works but is expensive and overkill for most use cases. Few-shot examples in the prompt get you 90% of the way there with zero cost." },
          { text: "Just let the AI use its natural voice — it's good enough", explanation: "If you want generic AI-sounding content, sure. But the whole point of agent personalization is that it sounds like YOU, not like every other AI output." }
        ]}
      />

      <Checklist
        title="Prompt Engineering Checklist"
        items={[
          "Every prompt has: Identity, Context, Task, Constraints, Output Format",
          "Added 2-3 few-shot examples for style-sensitive tasks",
          "Included negative examples ('never do this') for common failure modes",
          "Used concrete verbs instead of vague adjectives",
          "Specified output format explicitly (bullet list, table, JSON, prose)",
          "Tested prompts with edge cases (empty input, huge input, ambiguous input)",
          "Created a prompt library in knowledge/resources/ for reusable prompts",
          "Set up A/B testing for important prompts (try two versions, measure which performs better)"
        ]}
      />
    </>
  );
}
