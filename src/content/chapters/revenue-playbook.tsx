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
        You've built a capable AI agent. It runs automations, creates content, does research. Now the question: <strong>How do you turn this into money?</strong> This chapter covers 7 proven revenue models, with specific numbers and implementation guides.
      </p>

      <Analogy>
        You built a bakery. The ovens work, the recipes are dialed in, the kitchen runs itself. But you're eating all the bread yourself. <strong>Time to open the shop.</strong> The question isn't whether your bread is good — it's which business model fits your bakery best.
      </Analogy>

      <h2>The 7 Revenue Models</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">1️⃣</span>
            <div>
              <div className="text-sm font-bold text-green-400">Automated Newsletter / Daily Briefing</div>
              <div className="text-xs text-[var(--text-tertiary)]">Revenue: $500-5,000/mo · Difficulty: Easy · Time to first $: 2-4 weeks</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Your agent researches, writes, and sends a daily/weekly newsletter. You review for 5 minutes. Subscribers pay $9-29/month.</p>
          <div className="rounded-lg bg-[var(--surface-hover)]/50 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--foreground)]/80">Real math:</strong> 100 subscribers × $19/mo = $1,900/mo. Agent costs: ~$5/mo. Your time: 5 min/day reviewing drafts.
          </div>
          <div className="mt-3 text-xs text-[var(--text-tertiary)]">
            <strong>Platforms:</strong> Substack, Buttondown, Beehiiv, ConvertKit<br />
            <strong>Agent stack:</strong> Research cron → Draft cron → You review → Send cron
          </div>
        </div>

        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">2️⃣</span>
            <div>
              <div className="text-sm font-bold text-blue-400">Discord/Telegram Premium Community</div>
              <div className="text-xs text-[var(--text-tertiary)]">Revenue: $1,000-10,000/mo · Difficulty: Medium · Time to first $: 3-6 weeks</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Agent provides daily analysis, answers questions, and curates content in a paid community. Members pay for the agent's output + community access.</p>
          <div className="rounded-lg bg-[var(--surface-hover)]/50 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--foreground)]/80">Real math:</strong> 200 members × $15/mo = $3,000/mo. Free tier gets delayed content. Premium gets real-time + exclusive analysis.
          </div>
          <div className="mt-3 text-xs text-[var(--text-tertiary)]">
            <strong>Platforms:</strong> Discord (Whop/Launchpass for payments), Telegram (InviteMember)<br />
            <strong>Agent stack:</strong> Daily analysis cron → Auto-post to channels → Q&A bot in community
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">3️⃣</span>
            <div>
              <div className="text-sm font-bold text-[var(--accent-light)]">Digital Product (Playbook / Course / Templates)</div>
              <div className="text-xs text-[var(--text-tertiary)]">Revenue: $500-20,000/mo · Difficulty: Medium · Time to first $: 4-8 weeks</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Agent helps you create, maintain, and market a digital product. The product itself can be about AI agents (meta!) or any niche where you have expertise.</p>
          <div className="rounded-lg bg-[var(--surface-hover)]/50 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--foreground)]/80">Real math:</strong> This playbook you're reading. One-time payments $9-69. Agent handles content updates, customer support emails, and marketing content.
          </div>
          <div className="mt-3 text-xs text-[var(--text-tertiary)]">
            <strong>Platforms:</strong> Gumroad, Lemon Squeezy, Stripe + custom site<br />
            <strong>Agent stack:</strong> Content research → Draft chapters → Marketing content → Customer email automation
          </div>
        </div>

        <div className="rounded-xl border border-[var(--accent-light)]/15 bg-[var(--accent-light)]/4 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">4️⃣</span>
            <div>
              <div className="text-sm font-bold text-[var(--accent-light)]">AI-as-a-Service (Agent for Hire)</div>
              <div className="text-xs text-[var(--text-tertiary)]">Revenue: $2,000-15,000/mo · Difficulty: Hard · Time to first $: 6-12 weeks</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Set up and manage AI agents for clients. You're selling your expertise in building what this playbook teaches. Charge monthly retainers.</p>
          <div className="rounded-lg bg-[var(--surface-hover)]/50 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--foreground)]/80">Real math:</strong> 5 clients × $1,500/mo retainer = $7,500/mo. Each client takes 2-3 hours/month to maintain after initial setup.
          </div>
          <div className="mt-3 text-xs text-[var(--text-tertiary)]">
            <strong>Find clients:</strong> Twitter, Indie Hackers, local businesses, LinkedIn<br />
            <strong>Deliverables:</strong> Custom agent setup + monthly optimization + support
          </div>
        </div>

        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">5️⃣</span>
            <div>
              <div className="text-sm font-bold text-red-400">Content-Driven Affiliate Revenue</div>
              <div className="text-xs text-[var(--text-tertiary)]">Revenue: $200-3,000/mo · Difficulty: Easy · Time to first $: 2-4 weeks</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Agent creates content that naturally recommends tools you use (and earn affiliate commissions from). Authentic recommendations, not spam.</p>
          <div className="rounded-lg bg-[var(--surface-hover)]/50 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--foreground)]/80">Real math:</strong> AI tool affiliates pay 20-30% recurring. 50 referrals × $20/mo average × 25% commission = $250/mo passive. Scales with content volume.
          </div>
        </div>

        <div className="rounded-xl border border-pink-500/20 bg-pink-500/5 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">6️⃣</span>
            <div>
              <div className="text-sm font-bold text-pink-400">Automated SaaS (Agent-Powered Product)</div>
              <div className="text-xs text-[var(--text-tertiary)]">Revenue: $1,000-50,000+/mo · Difficulty: Hard · Time to first $: 8-16 weeks</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Build a SaaS product where your agent does the work. Customers subscribe, agent delivers value, you manage and improve the system.</p>
          <div className="rounded-lg bg-[var(--surface-hover)]/50 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--foreground)]/80">Examples:</strong> AI-generated meal plans ($9/mo), automated SEO audits ($29/mo), daily market analysis ($19/mo), personalized workout plans ($14/mo).
          </div>
          <div className="mt-3 text-xs text-[var(--text-tertiary)]">
            <strong>Stack:</strong> Landing page → Payment (Stripe) → Webhook triggers agent → Agent delivers to customer<br />
            <strong>Key insight:</strong> The agent IS the product. No engineering team needed for MVP.
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">7️⃣</span>
            <div>
              <div className="text-sm font-bold text-cyan-400">Freelance Acceleration</div>
              <div className="text-xs text-[var(--text-tertiary)]">Revenue: +50-200% existing income · Difficulty: Easy · Time to first $: Immediate</div>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Not a new revenue stream — it's multiplying your existing one. Use your agent to do 3-5x more freelance work in the same time.</p>
          <div className="rounded-lg bg-[var(--surface-hover)]/50 p-3 text-xs text-[var(--text-secondary)]">
            <strong className="text-[var(--foreground)]/80">Real math:</strong> Freelance writer earning $3K/mo → Agent handles research + first drafts → Take on 3x more clients → $9K/mo. Same hours.
          </div>
        </div>
      </div>

      <h2>The Launch Sequence (For Any Model Above)</h2>

      <div className="my-6 space-y-3">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--surface-hover)] flex items-center justify-center text-xs font-bold text-[var(--text-secondary)]">1</div>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">Week 1: Validate</div>
            <p className="text-xs text-[var(--text-tertiary)]">Run the Idea Validation Engine (Chapter 12). Find 50+ people who want this. Pre-sell if possible.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--surface-hover)] flex items-center justify-center text-xs font-bold text-[var(--text-secondary)]">2</div>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">Week 2: Build MVP</div>
            <p className="text-xs text-[var(--text-tertiary)]">Agent does the work. You build the wrapper (landing page, payment, delivery mechanism). Keep it ugly but functional.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--surface-hover)] flex items-center justify-center text-xs font-bold text-[var(--text-secondary)]">3</div>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">Week 3: Launch to 10 Customers</div>
            <p className="text-xs text-[var(--text-tertiary)]">Find 10 paying customers. Not free users — paying. This validates the price point and forces you to deliver.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--surface-hover)] flex items-center justify-center text-xs font-bold text-[var(--text-secondary)]">4</div>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">Week 4+: Iterate & Scale</div>
            <p className="text-xs text-[var(--text-tertiary)]">Use the Content Pipeline (Chapter 11) to market. Use feedback to improve. Agent handles operations while you handle growth.</p>
          </div>
        </div>
      </div>

      <h2>Revenue Stack: Combining Models</h2>

      <p>The best operators don't pick one model — they stack them:</p>

      <div className="my-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="text-sm font-bold text-[var(--foreground)] mb-3">Example: The AI Trading Analyst Stack</div>
        <div className="space-y-2 text-xs text-[var(--text-secondary)]">
          <div className="flex justify-between"><span>📧 Daily Newsletter (Substack)</span><span className="text-green-400">$1,900/mo (100 subs × $19)</span></div>
          <div className="flex justify-between"><span>💬 Premium Discord Community</span><span className="text-green-400">$3,000/mo (200 members × $15)</span></div>
          <div className="flex justify-between"><span>🐦 Twitter → Affiliate referrals</span><span className="text-green-400">$400/mo (tool commissions)</span></div>
          <div className="flex justify-between"><span>📋 Playbook (one-time sales)</span><span className="text-green-400">$800/mo (avg)</span></div>
          <div className="flex justify-between border-t border-[var(--border)] pt-2 mt-2 font-bold"><span className="text-[var(--foreground)]">Total Monthly Revenue</span><span className="text-green-400">$6,100/mo</span></div>
          <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Agent costs (API + hosting)</span><span className="text-red-400">-$25/mo</span></div>
          <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Your time investment</span><span className="text-[var(--foreground)]/80">~30 min/day</span></div>
        </div>
      </div>

      <Callout emoji="💰" title="The Truth About AI Revenue">
        The money isn't in the AI — it's in the <strong>problem you solve with the AI</strong>. Nobody pays for "an AI agent." They pay for "daily trading plans that make me money" or "content that grows my audience." Focus on the outcome, not the technology. The agent is the engine. The product is the destination.
      </Callout>

      <Quiz
        question="What's the fastest path from 'I have an AI agent' to 'I have revenue'?"
        options={[
          { text: "Build a complex SaaS product with the agent", explanation: "SaaS takes 8-16 weeks and significant engineering. It's the highest ceiling but slowest path to first dollar." },
          { text: "Start a premium newsletter or community", correct: true, explanation: "Correct! Newsletter/community is 2-4 weeks to first revenue. Agent does the research and writing, you review for 5 minutes. Low complexity, high margins, recurring revenue." },
          { text: "Offer AI consulting services", explanation: "Good money but trades time for money. It's a stepping stone, not a scalable endgame." },
          { text: "Sell the agent itself", explanation: "Nobody buys 'an agent.' They buy outcomes. Package the agent's output as a product, not the agent itself." },
        ]}
      />

      <Checklist
        title="Revenue Launch Checklist"
        items={[
          "Pick ONE revenue model from the 7 above",
          "Validate demand: find 50+ people who want this (Reddit, Twitter, communities)",
          "Build MVP in 1 week: landing page + payment + agent delivers value",
          "Get 10 paying customers (not free users — paying)",
          "Set up agent automation for daily/weekly delivery",
          "Create content pipeline to attract more customers",
          "Iterate based on feedback for 30 days",
          "Consider adding a second revenue model to stack",
        ]}
      />
    </>
  );
}
