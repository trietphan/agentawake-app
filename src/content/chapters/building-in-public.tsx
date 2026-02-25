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
        Here's the most underrated strategy in the AI agent space: <strong>document your journey as you build.</strong> Every problem you solve, every workflow you automate, every "aha" moment — that's content. And not just any content. It's the kind that attracts exactly the people who would pay for what you're building.
      </p>

      <Analogy>
        Think of a cooking show. The chef doesn't just serve you the final dish — they show you every step. The chopping, the seasoning, the mistakes, the saves. <strong>The process IS the product.</strong> People watch cooking shows not just to learn recipes but to be entertained by the journey. Building in public with your agent is the same: the journey of automation is more compelling than the finished product.
      </Analogy>

      <h2>Why Building in Public Works</h2>

      <p>Three reasons this strategy is uniquely powerful for agent builders:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-emerald-400">🎯 Built-in audience targeting</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">People who follow your "building with AI agents" journey are <em>exactly</em> the people who'd buy an AI agent product. Zero marketing waste.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-blue-400">📈 Compound content</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Every post adds to your credibility. Day 1 posts get 5 likes. Day 90 posts reference 89 days of proof. The longer you do it, the more powerful each post becomes.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--accent-light)]">🤖 Your agent creates the content</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">The meta-play: your agent does work → you document it → the documentation itself is created by the agent. Your agent is literally marketing itself.</p>
        </div>
      </div>

      <h2>The X/Twitter Thread Formula</h2>

      <p>The highest-performing format for building in public on X:</p>

      <Code title="The daily thread template">{`Day [X] of building with my AI agent:

[One specific thing that happened today]

The setup:
- [What the agent was supposed to do]
- [What actually happened]

The result:
- [Concrete outcome with numbers if possible]

What I learned:
- [One actionable takeaway anyone can use]

Tomorrow: [teaser for next post]

---

Example:

Day 47 of building with my AI agent:

It wrote its own weekly performance review 🤯

The setup:
- Cron job every Sunday at 10 AM
- Agent reads all 7 daily notes and self-evaluates

The result:
- Identified that it was spending 40% of its time on
  tasks I never look at
- Recommended cutting 2 cron jobs → saved $3/week

What I learned:
- Give your agent permission to criticize its own work.
  It found inefficiencies I'd never have noticed.

Tomorrow: implementing its own suggestions (letting
the AI optimize the AI)`}</Code>

      <h2>The Reddit Strategy</h2>

      <p>Reddit hates self-promotion but loves genuine value. Here's the playbook:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">1️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Answer questions</strong> in r/ClaudeAI, r/ChatGPT, r/LocalLLaMA, r/artificial with genuine, detailed answers. Reference your experience.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">2️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Post tutorials</strong> that solve specific problems: "How I gave my agent persistent memory with 3 markdown files"</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">3️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Share failures</strong> honestly: "My agent accidentally sent 200 emails. Here's what I learned about safety." Failures get more engagement than wins.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">4️⃣</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Link subtly</strong> — put your product link in your profile, not your posts. Let people find it through your comment history.</div>
        </div>
      </div>

      <h2>Creating an Agent-Powered Newsletter</h2>

      <p>Your agent already generates daily analysis, content drafts, and insights. Package those into a weekly newsletter:</p>

      <Code title="Newsletter automation">{`# Weekly newsletter cron — every Friday at 3 PM
0 15 * * 5 openclaw cron run --task "newsletter" \\
  --prompt "Read this week's daily notes and weekly review. \\
  Write a newsletter issue with: \\
  1. One 'Agent Insight of the Week' (a specific technique or lesson) \\
  2. Three quick tips anyone can implement today \\
  3. One 'Behind the Scenes' story (what went wrong and how we fixed it) \\
  4. A teaser for next week \\
  Format for email. Save to output/newsletter/2026-W08.md"`}</Code>

      <Callout emoji="💰" title="The Revenue Connection">
        A newsletter with 1,000 subscribers who are interested in AI agents is worth $50-200/month in sponsorships alone. At 5,000 subscribers, you can launch paid tiers. Your agent writes 80% of the content. You add personality and hit send. The flywheel: agent works → content → subscribers → revenue → fund more agent work.
      </Callout>

      <h2>The Compounding Content Flywheel</h2>

      <p>Here's why this strategy is exponential, not linear:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">⚙️</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Agent works</strong> → produces daily output (analysis, content, insights)</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">📝</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>You document</strong> → turn outputs into tweets, posts, newsletter issues</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">👥</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Audience grows</strong> → people follow for the consistent, authentic journey</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">💸</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Revenue flows</strong> → newsletter subs, product sales, consulting inquiries</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🔄</span>
          <div className="text-sm text-[var(--foreground)]/80"><strong>Revenue funds</strong> → more agent compute → better outputs → better content → repeat</div>
        </div>
      </div>

      <h2>What NOT to Share</h2>

      <p>Building in public doesn't mean sharing everything. Keep these private:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">🔑</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">API keys and credentials</strong> — obviously. But also watch for keys in screenshots of config files.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">💰</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Exact revenue numbers</strong> (early on) — share percentages and trends, not exact dollars until you're established.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">🧠</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Your complete system prompt</strong> — share principles and patterns, not the exact prompt that gives you an edge.</div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-red-500/5 border border-red-500/20 p-3">
          <span className="text-lg">👤</span>
          <div className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--foreground)]">Private data from your agent's memory</strong> — your MEMORY.md might contain personal info. Redact before sharing.</div>
        </div>
      </div>

      <h2>Monetizing the Journey</h2>

      <p>The journey itself is a product. Here's the progression:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Month 1-2: Free content</div>
            <div className="text-xs text-[var(--text-tertiary)] font-bold">$0 (building trust)</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Daily tweets, Reddit posts, open-source templates. Goal: 500 followers who care about AI agents.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Month 3-4: Paid product</div>
            <div className="text-xs text-[var(--accent-light)] font-bold">$500-2K/mo</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Launch a playbook, template pack, or course based on your documented journey. Your content IS your marketing.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Month 5-6: Community + consulting</div>
            <div className="text-xs text-emerald-400 font-bold">$2-5K/mo</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Paid community ($19/mo), consulting calls ($200/hr), partnerships with AI tools. You're now a recognized voice.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-semibold text-[var(--foreground)]">Month 7+: Scaled products</div>
            <div className="text-xs text-[var(--accent-light)] font-bold">$5-20K/mo</div>
          </div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">SaaS built on your agent stack, premium newsletter, agency services. The journey funded the infrastructure that funds the business.</p>
        </div>
      </div>

      <Quiz
        question="Why is building in public particularly effective for AI agent products?"
        options={[
          { text: "Because AI is trendy and gets lots of engagement", explanation: "Trendiness helps but isn't the core reason. Trends fade; the structural advantage doesn't." },
          { text: "Because your audience IS your customer base — people following AI agent content are buyers", correct: true, explanation: "Exactly! Zero marketing waste. Every follower who's interested in your journey is a potential customer. The content qualifies the audience automatically." },
          { text: "Because it's free marketing", explanation: "It's not free — it costs time and effort. The advantage is audience-product fit, not price." },
          { text: "Because other AI builders will share your content", explanation: "They might, but virality isn't the core mechanism. Consistent, authentic documentation is." },
        ]}
      />

      <Quiz
        question="What should you share when building in public?"
        options={[
          { text: "Everything including API keys and system prompts for maximum transparency", explanation: "Never share credentials or your exact competitive advantage. Transparency has limits." },
          { text: "Only polished wins and successes", explanation: "People see through this. Failures and mistakes get MORE engagement and build MORE trust." },
          { text: "Patterns, lessons, failures, and specific techniques — but not credentials or exact prompts", correct: true, explanation: "Share the principles, not the secrets. 'I use a three-layer memory system' (share). The exact system prompt (keep). API keys (never)." },
          { text: "Nothing until you have a perfect product", explanation: "You'll never have a perfect product. The journey IS the content. Waiting means missing months of compound audience growth." },
        ]}
      />

      <Checklist
        title="Building in Public Launch Checklist"
        items={[
          "Created X/Twitter account (or dedicated thread) for your agent journey",
          "Written your first 'Day 1' post about what you're building and why",
          "Set up agent to draft daily content from its own output",
          "Identified 3-5 Reddit communities to provide value in",
          "Created a simple newsletter signup (even just a Google Form to start)",
          "Established what you WILL and WON'T share publicly",
          "Committed to 30 consecutive days of posting (the minimum for compound effects)",
          "Set up a content calendar: daily tweets, weekly newsletter, monthly deep-dive",
        ]}
      />

      <Tip emoji="🎬" title="The Meta Move">
        The ultimate flex: your agent writes the content about itself. Set up a cron job that drafts a daily "building in public" post based on what the agent actually did that day. You review for 2 minutes, add your personality, and hit send. The agent is literally <strong>marketing itself while doing its job.</strong> That's the flywheel in action.
      </Tip>
    </>
  );
}
