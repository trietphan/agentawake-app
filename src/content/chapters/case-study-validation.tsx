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
        The #1 reason startups fail? <strong>Building something nobody wants.</strong> This agent makes sure you never do that — by running continuous market research across every platform where your customers complain.
      </p>

      <Analogy>
        Before a movie studio spends $200 million on a film, they do test screenings. Before a restaurant opens, they do pop-up events. Before you spend 3 months coding a SaaS... you should probably check if anyone cares. That's what this agent does — it's your <strong>idea test-screening service</strong>. 🎬
      </Analogy>

      <h2>The Validation Pipeline</h2>

      <p>This isn't a one-time prompt. It's a <strong>continuous system</strong> that runs weekly, scanning the internet for problems worth solving. Here's the complete architecture:</p>

      <div className="my-6 space-y-3">
        {[
          { emoji: "🔍", title: "Pain Point Mining", desc: "Scans Reddit, Twitter, Indie Hackers, Product Hunt, and niche forums for people complaining about the same things. Searches for phrases like 'I wish there was...', 'why is there no...', 'I hate how...'" },
          { emoji: "📊", title: "Pattern Detection", desc: "Groups complaints into themes. Ranks by frequency (how many people), intensity (how angry), and recency (is this growing?). Filters out one-off rants from systemic pain." },
          { emoji: "💡", title: "Solution Matching", desc: "For each validated pain point, proposes 2-3 product ideas with rough scope: MVP feature list, estimated build time, target price point." },
          { emoji: "🏪", title: "Competitive Analysis", desc: "Finds every existing solution, their pricing, App Store/G2 ratings, and what the 1-star reviews say. The 1-star reviews are GOLD — they tell you exactly what's missing." },
          { emoji: "💰", title: "Market Sizing", desc: "Estimates TAM using search volume, subreddit size, competitor revenue (where available). A $10K/mo opportunity feels different than a $100K/mo one." },
          { emoji: "⭐", title: "Opportunity Score", desc: "Ranks ideas by: pain intensity × market size × competitive gap × your ability to build it. Outputs a 1-10 score with reasoning." },
        ].map((step, i) => (
          <div key={i} className="flex gap-3 items-start rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
            <span className="text-xl">{step.emoji}</span>
            <div>
              <div className="text-sm font-semibold text-[var(--foreground)]">{step.title}</div>
              <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Where to Mine for Pain Points (By Platform)</h2>

      <p>Different platforms reveal different types of pain. Your agent should scan all of them:</p>

      <div className="my-6 space-y-3">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🟠 Reddit — The Complaint Goldmine</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">People are brutally honest on Reddit. They vent. They ask for help. They describe problems in detail.</p>
          <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
            <li>• <strong>Search:</strong> r/SaaS, r/startups, r/Entrepreneur, r/smallbusiness + niche subreddits</li>
            <li>• <strong>Keywords:</strong> "frustrated with", "anyone know a tool for", "I've been looking for", "why doesn't X exist"</li>
            <li>• <strong>Sort by:</strong> Top (month) to find recurring complaints, not one-off rants</li>
            <li>• <strong>Gold signal:</strong> Posts with 50+ upvotes asking for a solution = validated demand</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">🐦 Twitter/X — The Real-Time Pulse</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Twitter shows you what people are frustrated about <em>right now</em>. Great for catching emerging problems.</p>
          <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
            <li>• <strong>Search:</strong> "[tool name] sucks", "[category] is broken", "wish there was a better"</li>
            <li>• <strong>Monitor:</strong> Replies to competitor products — their customers' complaints = your opportunity</li>
            <li>• <strong>Track:</strong> People quote-tweeting competitor announcements with criticism</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">🏗️ Indie Hackers / Product Hunt — The Builder Community</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">These communities talk about what they're building and what they need. Great for B2B ideas.</p>
          <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
            <li>• <strong>Search:</strong> "Looking for", "Does anyone know", "I'd pay for"</li>
            <li>• <strong>Signal:</strong> Multiple people asking for the same thing in different threads</li>
            <li>• <strong>Product Hunt:</strong> Sort by "newest" and read comments — people suggest missing features constantly</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">⭐ App Store / G2 / Capterra — The Review Gold</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">Competitor reviews tell you exactly what's wrong with existing solutions. 1-3 star reviews are your feature roadmap.</p>
          <ul className="space-y-1 text-xs text-[var(--text-tertiary)]">
            <li>• <strong>Focus on:</strong> 2-star reviews (specific enough to be actionable, not just "it sucks")</li>
            <li>• <strong>Pattern:</strong> "I love X but hate Y" = Y is your niche</li>
            <li>• <strong>Pricing complaints:</strong> "Too expensive for what it does" = room for a cheaper alternative</li>
          </ul>
        </div>
      </div>

      <h2>The Weekly Validation Cron</h2>

      <Code title="Weekly Idea Scanner">{`openclaw cron add \\
  --name "Idea Validation Scan" \\
  --cron "0 10 * * 1" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Weekly idea validation scan.

CRITICAL: Full detailed output. Do NOT summarize.

1. Search Reddit (r/SaaS, r/startups, r/Entrepreneur) 
   for posts with 20+ upvotes containing:
   'I wish', 'frustrated', 'looking for', 'anyone know'
   
2. Search Twitter for '[niche] sucks', 
   '[niche] is broken', 'wish there was'
   
3. Check Product Hunt 'newest' for gaps in comments.

For each pain point found (minimum 5):

## Pain Point: [Name]
- 😤 Quote: '[Exact user quote]'
- 📍 Source: [Platform + link]
- 🔥 Frequency: [How many people mentioned this]
- 💡 Product Idea: [What would solve this]
- 🏢 Existing Solutions: [Competitors + pricing]
- 📉 Their Weakness: [What reviews complain about]
- ⭐ Opportunity Score: [1-10] — [reasoning]
- 🛠️ MVP Scope: [Core features, est. build time]
- 💰 Revenue Potential: [Pricing × estimated market]

Rank all pain points by opportunity score.
Save to knowledge/projects/idea-pipeline.md" \\
  --model "opus" --announce --channel discord`}</Code>

      <h2>The Quick Validation Prompt (On-Demand)</h2>

      <p>Have a specific idea? Run this validation immediately:</p>

      <Code title="On-Demand Idea Validator">{`Validate this idea: "[Your Idea Here]"

1. Search Reddit for related complaints (3+ subreddits)
2. Search Twitter for people wanting this
3. Find 3-5 competitors and their pricing
4. Read their 1-star reviews on G2/App Store
5. Estimate market size (search volume + community size)

Output:
## Validation Report: [Idea Name]

### 😤 Top 3 Pain Points (with real quotes)
1. "[Quote]" — u/user on r/subreddit (142 upvotes)
2. "[Quote]" — @user on Twitter (89 likes)
3. "[Quote]" — G2 review of [Competitor]

### 🏢 Competitive Landscape
| Competitor | Price | Rating | Weakness |

### 💡 The Gap
[What existing solutions miss that you could nail]

### ⭐ Opportunity Score: X/10
- Pain intensity: X/10
- Market size: X/10  
- Competitive gap: X/10
- Build feasibility: X/10

### ✅ Go / ❌ No-Go Recommendation
[Clear recommendation with reasoning]`}</Code>

      <h2>Real Output: How This Playbook Was Validated</h2>

      <div className="my-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 p-5">
        <div className="text-xs text-[var(--text-tertiary)] mb-3">Actual validation output — Jan 2026</div>
        <div className="space-y-3 text-sm text-[var(--foreground)]/80">
          <p className="font-bold text-[var(--foreground)]">Validation Report: AI Agent Playbook / Digital Product</p>
          <p><strong className="text-red-400">😤 Pain Points Found:</strong></p>
          <ul className="text-xs space-y-1.5 text-[var(--text-secondary)]">
            <li>• "I set up Claude with MCP tools but it forgets everything the next day. Am I doing something wrong?" — r/ClaudeAI (234 upvotes)</li>
            <li>• "Spent 3 hours configuring my AI agent. Next session it asked me my name again." — @indie_dev on Twitter (156 likes)</li>
            <li>• "Is there a complete guide to building persistent AI agents? Every tutorial covers basics but not the memory architecture." — r/LocalLLaMA (89 upvotes)</li>
          </ul>
          <p><strong className="text-green-400">💡 The Gap:</strong> Hundreds of "getting started with AI agents" tutorials exist, but zero comprehensive playbooks covering memory architecture, automation, security, and real case studies in one package.</p>
          <p><strong className="text-[var(--accent-light)]">⭐ Opportunity Score: 8/10</strong> — High pain, growing market, no direct competitor, low build cost (it's a digital product, not SaaS).</p>
          <p><strong className="text-green-400">✅ GO</strong> — Validated. Build it.</p>
        </div>
      </div>

      <h2>From Validation to Launch: The Pipeline</h2>

      <div className="my-6 space-y-3">
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm font-bold text-blue-400">1</div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4 flex-1">
            <div className="text-sm font-semibold text-[var(--foreground)]">Validate (Week 1)</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-1">Run the scanner. Find 5+ people expressing the same pain. Score 7+ = proceed.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/15 flex items-center justify-center text-sm font-bold text-[var(--accent-light)]">2</div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4 flex-1">
            <div className="text-sm font-semibold text-[var(--foreground)]">Pre-sell (Week 2)</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-1">Build landing page. Post in the communities where you found the pain. See if anyone puts money down before you build. Agent handles the landing page, you handle the marketing voice.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-sm font-bold text-green-400">3</div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4 flex-1">
            <div className="text-sm font-semibold text-[var(--foreground)]">Build MVP (Week 3-4)</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-1">Minimum viable product. Not perfect — viable. Agent builds 80%, you handle the 20% that requires taste and judgment.</p>
          </div>
        </div>
        <div className="flex gap-4 items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent-light)]/8 border border-[var(--accent-light)]/15 flex items-center justify-center text-sm font-bold text-[var(--accent-light)]">4</div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4 flex-1">
            <div className="text-sm font-semibold text-[var(--foreground)]">Launch & Iterate (Week 5+)</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-1">Launch in those same communities. Agent monitors feedback, you prioritize features. Rinse and repeat.</p>
          </div>
        </div>
      </div>

      <Callout emoji="🎯" title="Real Results">
        We ran this system for one month. It generated <strong>23 validated ideas</strong>. 3 became real products. One of those products is <strong>this playbook you're reading right now</strong>. Total validation time: 0 minutes of human effort (fully automated weekly scans). Total revenue from validated ideas: growing every week.
      </Callout>

      <h2>The Validation Pipeline</h2>

      <p>Here's the full flow from "random internet signal" to "validated idea worth building":</p>

      <FlowDiagram steps={[
        { emoji: "🔍", label: "Signal Detection", detail: "Agent scans Reddit, Twitter, forums for pain points and complaints" },
        { emoji: "📊", label: "Pattern Matching", detail: "Groups similar complaints — are 50+ people saying the same thing?" },
        { emoji: "💰", label: "Market Sizing", detail: "Estimates willingness to pay based on language ('I'd pay for...' vs 'it'd be nice if...')" },
        { emoji: "🏗️", label: "Solution Sketch", detail: "Agent drafts a one-paragraph product concept addressing the pain" },
        { emoji: "⚡", label: "Feasibility Check", detail: "Can this be built in a weekend? A week? A month? Filters by your skill set" },
        { emoji: "✅", label: "Validation Score", detail: "Combines demand + willingness to pay + feasibility into a 1-10 score" }
      ]} />

      <h2>Reading the Validation Signals</h2>

      <p>Not all pain is created equal. Your agent should weight these signals differently:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🟢 Strong Signals (high confidence)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">"I'd pay $X for this" / "shut up and take my money" / people building hacky workarounds / recurring complaints over months (not just one viral rant)</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🟡 Medium Signals (investigate further)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">"Someone should build X" / feature requests on competitor products / "is there a tool that does X?" questions / moderate engagement on complaint posts</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔴 Weak Signals (probably skip)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">"It'd be cool if..." / one-off rants with no engagement / ideas that require massive scale to work / solutions that need behavior change from users</p>
        </div>
      </div>

      <Tip emoji="🎣" title="Fish Where the Fish Are">
        The best validation signals come from communities where people are already spending money on solutions: SaaS review sites, "what tools do you use?" threads, and AppSumo/ProductHunt comments. People complaining on free forums rarely pay for solutions. People complaining about paid tools ABSOLUTELY will pay for better ones.
      </Tip>

      <Tip emoji="📝" title="The 'Anti-Portfolio' Trick">
        Keep a file of ideas your agent found that you DIDN'T build, and why. Review it quarterly. Sometimes an idea that seemed too early 3 months ago is now perfectly timed. And sometimes you'll see someone else built it and validate that the demand was real.
      </Tip>

      <Quiz
        question="Your agent found 50 Reddit posts complaining about a tool's UX. What's the best next validation step?"
        options={[
          { text: "Start building a competitor immediately — 50 posts is enough validation", explanation: "50 complaints doesn't mean 50 customers. People love to complain but that doesn't mean they'll switch to (or pay for) an alternative." },
          { text: "Check if complainers mention willingness to pay or are actively seeking alternatives", correct: true, explanation: "Correct! The gap between 'this sucks' and 'I'd pay for something better' is enormous. Look for buying intent signals, not just frustration signals." },
          { text: "Ignore it — Reddit complaints aren't real market data", explanation: "Reddit is actually great for validation signals. The key is reading BETWEEN the complaints for buying intent." },
          { text: "Survey all 50 posters directly", explanation: "Surveys are slow and have low response rates. You can learn more from analyzing the language and context of existing complaints." }
        ]}
      />
    </>
  );
}
