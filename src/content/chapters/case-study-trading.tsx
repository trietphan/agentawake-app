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
        This is the story of how we built a bot that wakes up at 6 AM every day, scans what Wall Street Twitter is feeling, and produces a structured trading plan — before we even open our eyes. It runs on Discord, but we'll show you how to deploy it on <strong>every platform</strong>.
      </p>

      <Analogy>
        Imagine having a financial analyst who never sleeps, reads every relevant tweet and Reddit post overnight, and has a perfectly formatted briefing on your desk by breakfast. That analyst costs $150K/year. Ours costs about $3/month in API calls. ☕
      </Analogy>

      <h2>The Problem We Solved</h2>

      <p>Every morning before market open, traders do the same thing: check Twitter for sentiment, look at overnight price action, identify key levels, and make a plan. This takes 30-60 minutes of scrolling, reading, and note-taking. Most people skip it because they're tired, rushed, or just lazy.</p>

      <p>Our agent does it in 6 minutes. Every single day. Without complaining about being tired.</p>

      <h2>The Complete Architecture</h2>

      <div className="my-6 space-y-3">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">⏰</span>
          <div className="text-sm"><strong className="text-[var(--foreground)]">6:00 AM</strong> <span className="text-[var(--text-tertiary)]">— Cron job fires. Fresh isolated session, clean context, no history pollution.</span></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🐦</span>
          <div className="text-sm"><strong className="text-[var(--foreground)]">6:01 AM</strong> <span className="text-[var(--text-tertiary)]">— Searches Twitter/X for $ES_F, $GC_F, $NQ_F sentiment from last 4 hours. Filters noise from trusted finance accounts.</span></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">📰</span>
          <div className="text-sm"><strong className="text-[var(--foreground)]">6:02 AM</strong> <span className="text-[var(--text-tertiary)]">— Checks economic calendar: FOMC? CPI? Jobs report? Flags anything market-moving.</span></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">📊</span>
          <div className="text-sm"><strong className="text-[var(--foreground)]">6:03 AM</strong> <span className="text-[var(--text-tertiary)]">— Pulls previous session's key levels (prior day High/Low/Close, weekly pivots).</span></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">🧠</span>
          <div className="text-sm"><strong className="text-[var(--foreground)]">6:04 AM</strong> <span className="text-[var(--text-tertiary)]">— Synthesizes everything: sentiment + levels + events = actionable plan.</span></div>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-hover)]/30 p-3">
          <span className="text-lg">📣</span>
          <div className="text-sm"><strong className="text-[var(--foreground)]">6:06 AM</strong> <span className="text-[var(--text-tertiary)]">— Delivers to your chosen platform. You wake up, read it, trade.</span></div>
        </div>
      </div>

      <h2>Why Social Sentiment Is Your Edge</h2>

      <p>Charts show you what <em>happened</em>. Social sentiment shows you what people <em>feel</em> about what happened — and that gap between reality and emotion is where the money is.</p>

      <p>When Twitter is screaming "CRASH!" but price is holding support? That's a setup. When everyone is euphoric at resistance? That's a warning. Your agent reads the room so you don't have to.</p>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">✅ What the Agent Catches</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• "Everyone is short" → potential squeeze</li>
            <li>• Unusual volume of bearish tweets → capitulation close?</li>
            <li>• Multiple accounts mentioning same level → key zone</li>
            <li>• Silence after big move → uncertainty = range day</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="text-sm font-bold text-red-400 mb-2">❌ What It Filters Out</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Random accounts with no track record</li>
            <li>• Crypto-only traders commenting on ES</li>
            <li>• Spam bots and pump-and-dump promoters</li>
            <li>• Emotional rants with no analysis</li>
          </ul>
        </div>
      </div>

      <h2>The Exact Cron Setup</h2>

      <Code title="The 6 AM Cron Command">{`openclaw cron add \\
  --name "Trading Plan" \\
  --cron "0 6 * * 1-5" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Generate today's trading plan for S&P 500 futures ($ES).

CRITICAL: Output full analysis. Do NOT summarize.

1. Search Twitter for '$ES_F', '$SPX', 'futures' — last 4 hours.
2. Search for overnight news: FOMC, CPI, earnings.
3. Identify social sentiment: bullish/bearish/neutral.
4. Pull yesterday's key levels from memory.

Output format:
# 📅 Trading Plan — [Date]

## 🌡️ Sentiment: [Bullish/Bearish/Neutral]
[2-3 sentence summary of what Twitter is saying]

## 📰 Events Today
[Any economic events, earnings, or catalysts]

## 🎯 Key Levels
- **Resistance 1:** [Level] — [why it matters]
- **Resistance 2:** [Level] — [why it matters]
- **Support 1:** [Level] — [why it matters]
- **Support 2:** [Level] — [why it matters]
- **Pivot:** [Level]

## 🐂 Bull Scenario
If we hold above [Level], look for [Target].
Trigger: [What confirms the move]

## 🐻 Bear Scenario
If we break below [Level], look for [Target].
Trigger: [What confirms the move]

## ⚠️ Risk Factors
[What could invalidate both scenarios]" \\
  --model "sonnet" --announce \\
  --channel discord --to "channel:YOUR_CHANNEL_ID"`}</Code>

      <h2>Real Output Example</h2>

      <div className="my-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 p-5">
        <div className="text-xs text-[var(--text-tertiary)] mb-3">Posted automatically at 6:06 AM CT — Feb 21, 2026</div>
        <div className="space-y-3 text-sm text-[var(--foreground)]/80">
          <p className="font-bold text-[var(--foreground)]">📅 Trading Plan — Friday, Feb 21</p>
          <p><strong className="text-[var(--accent-light)]">🌡️ Sentiment: Cautiously Bullish</strong><br />Twitter consensus is "buy the dip" after yesterday's selloff. Multiple accounts noting 6040 held perfectly. However, OPEX today adds uncertainty — expect choppy price action until 2 PM.</p>
          <p><strong>🎯 Key Levels</strong></p>
          <ul className="text-xs space-y-1 text-[var(--text-secondary)]">
            <li>• <strong>R2:</strong> 6095 — Weekly high, likely to reject first touch</li>
            <li>• <strong>R1:</strong> 6070 — Yesterday's VPOC, strong magnet</li>
            <li>• <strong>S1:</strong> 6040 — Held 3x this week, bull/bear line in the sand</li>
            <li>• <strong>S2:</strong> 6010 — Below here, bulls in serious trouble</li>
          </ul>
          <p><strong className="text-green-400">🐂 Bull:</strong> Hold 6040, target 6070 → 6095. Trigger: 15-min close above 6055.</p>
          <p><strong className="text-red-400">🐻 Bear:</strong> Lose 6040, target 6010 → 5985. Trigger: 2 consecutive 5-min closes below 6035.</p>
          <p><strong>⚠️ Risk:</strong> OPEX pin risk. Don't chase moves between 1-3 PM. Max pain at 6060.</p>
        </div>
      </div>

      <h2>🔌 Platform Delivery: Where Should It Post?</h2>

      <p>The beauty of this system is that the <em>analysis</em> is platform-agnostic. The cron job generates the content, then you just change the delivery target. Here's how to deploy on every major platform:</p>

      <h3>Discord (Recommended for Communities)</h3>
      <p>Best for: building a subscriber community, threaded discussion on each plan.</p>
      <Code title="Discord Delivery">{`# In your cron config, set:
--channel discord --to "channel:YOUR_CHANNEL_ID"

# Pro tip: Create a dedicated #daily-plan channel
# Set it as read-only for subscribers, post-only for bot
# Members can discuss in a thread under each post`}</Code>

      <h3>Telegram (Best for Mobile-First Users)</h3>
      <p>Best for: traders who want instant push notifications on their phone.</p>
      <Code title="Telegram Delivery">{`# In your cron config, set:
--channel telegram --to "chat:YOUR_GROUP_ID"

# Telegram advantages:
# - Instant push notifications
# - Clean formatting with bold/italic
# - Pin the daily plan so it's always visible
# - Users can set custom notification sounds
# - Bot can send silent messages at night`}</Code>

      <h3>Slack (Best for Teams/Offices)</h3>
      <p>Best for: prop trading desks, trading groups, internal teams.</p>
      <Code title="Slack Delivery">{`# In your cron config, set:
--channel slack --to "#trading-plan"

# Slack advantages:
# - Thread discussions per plan
# - Integrate with other Slack bots (TradingView alerts, etc.)
# - Custom emoji reactions for voting (🐂 vs 🐻)
# - Scheduled messages + reminders`}</Code>

      <h3>WhatsApp (Best for Small Private Groups)</h3>
      <p>Best for: friend groups, small mastermind circles, personal delivery.</p>
      <Code title="WhatsApp Delivery">{`# In your cron config, set:
--channel whatsapp --to "group:YOUR_GROUP_JID"

# WhatsApp tips:
# - No markdown tables! Use bullet lists only
# - Keep plans shorter (WhatsApp truncates long messages)
# - Great for personal "send it to my phone" use case
# - Limited formatting — use **bold** and emoji for structure`}</Code>

      <h3>Email (Best for Premium Newsletters)</h3>
      <p>Best for: paid newsletter subscribers, professional distribution.</p>
      <Code title="Email Delivery (via cron + webhook)">{`# Use a webhook delivery to your email service:
--delivery webhook --to "https://api.buttondown.email/v1/emails"

# Or use the agent's email tool:
--message "... [analysis] ... Then email the plan to 
  newsletter@yourdomain.com with subject 
  'Daily Trading Plan - [Date]'"

# Email advantages:
# - Professional formatting with HTML
# - Easy to monetize ($19/mo Substack, Buttondown, etc.)
# - Lands in inbox — no app switching
# - Archive of every plan for backtesting`}</Code>

      <h3>Twitter/X (Best for Building an Audience)</h3>
      <p>Best for: growing a following, establishing credibility, attracting subscribers.</p>
      <Code title="Twitter Post-and-Promote">{`# Add a second cron job that posts a teaser:
--cron "0 7 * * 1-5"
--message "Post a tweet summarizing today's trading plan.
  
  Include:
  - Sentiment (one word)
  - One key level to watch
  - Bull/bear one-liner
  
  End with: 'Full plan in the community. Link in bio.'
  
  Keep it under 280 characters. Make it punchy."
--channel twitter`}</Code>

      <h2>Common Mistakes</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Using the same prompt for all markets</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">ES, Gold, and Crypto have totally different dynamics. Customize the sentiment sources and level calculations for each instrument.</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Not filtering Twitter noise</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">90% of fintwit is noise. Tell your agent to prioritize accounts with 10k+ followers, or maintain a curated list of trusted handles in your knowledge base.</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Running it on weekends</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Futures are closed Sat-Sun. The <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">1-5</code> in the cron expression means Monday-Friday only. Don't waste API calls on empty markets.</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Forgetting to store yesterday's levels</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Add a nightly cron that saves the day's key levels to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">memory/trading/levels.md</code>. Tomorrow's agent needs yesterday's data.</p>
        </div>
      </div>

      <h2>Monetization Strategies</h2>

      <div className="my-6 space-y-3">
        <div className="flex gap-3 items-start rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <span className="text-xl">💰</span>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">Discord Community ($9-29/mo)</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-0.5">Free tier gets delayed plans (1hr late). Paid members get real-time delivery + discussion threads + Q&A access.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <span className="text-xl">📧</span>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">Email Newsletter ($19/mo)</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-0.5">Daily plans + weekly performance review + monthly strategy deep-dive. 100 subs = $1,900/mo from a $3/mo bot.</p>
          </div>
        </div>
        <div className="flex gap-3 items-start rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <span className="text-xl">🐦</span>
          <div>
            <div className="text-sm font-semibold text-[var(--foreground)]">Twitter → Funnel ($0 + conversions)</div>
            <p className="text-xs text-[var(--text-tertiary)] mt-0.5">Post free teasers to build audience. Funnel followers into paid Discord/newsletter. 1000 followers → ~30 paid conversions.</p>
          </div>
        </div>
      </div>

      <Callout emoji="💰" title="The Revenue Math">
        <strong>Cost:</strong> ~$3/month in API calls<br />
        <strong>Revenue at 50 subs ($19/mo):</strong> $950/month<br />
        <strong>Revenue at 200 subs ($19/mo):</strong> $3,800/month<br />
        <strong>Your daily time investment:</strong> 0 minutes (it's fully automated)<br /><br />
        That's not a side hustle. That's a business with 99.7% margins.
      </Callout>

      <AgentThinking
        steps={[
          "Reading market analysis protocol from knowledge base...",
          "Fetching ES futures data from TradingView...",
          "Scanning Twitter for $ES_F sentiment (filtering 5k+ follower accounts)...",
          "Analyzing overnight price action vs. key levels...",
          "Identifying 3 high-probability trade setups...",
          "Generating risk/reward calculations...",
          "Formatting report with mandatory template...",
          "Posting to Discord #dailymplevels channel...",
          "✅ Daily market profile delivered at 6:32 AM CT",
        ]}
      />
    </>
  );
}
