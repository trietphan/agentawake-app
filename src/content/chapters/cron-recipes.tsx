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
        Chapter 5 gave you the theory. Chapter 8 gave you the four essential crons. This chapter goes further — <strong>12 battle-tested cron recipes</strong> for specific use cases. Find the ones that match your workflow, copy them, and customize.
      </p>

      <Analogy>
        Think of each cron job as a <strong>specific employee with a specific shift</strong>:
        <br /><br />
        ☀️ <strong>Morning Briefing</strong> — The executive assistant who puts a summary on your desk before you arrive<br />
        📡 <strong>Social Monitor</strong> — The social media intern who watches mentions all day<br />
        💰 <strong>Revenue Tracker</strong> — The finance person who hands you a report every Monday<br />
        🌙 <strong>Nightly Consolidation</strong> — The night janitor who organizes everything after hours<br />
        🔍 <strong>Competitor Watch</strong> — The analyst who tracks what your competitors are doing<br />
        📧 <strong>Email Digest</strong> — The secretary who sorts your mail and flags what matters
      </Analogy>

      <h2>Recipe 1: ☀️ Morning Briefing (Daily)</h2>
      <p>Your agent's most visible output. This is the thing that makes you say "wow, this actually works" every morning.</p>

      <Code title="terminal">{`openclaw cron add \\
  --name "Morning Brief" \\
  --cron "0 8 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Morning briefing time. Do the following in order:

1. Read yesterday's daily note for continuity
2. Check email inbox — summarize anything urgent (skip newsletters)
3. Review calendar for next 24 hours
4. Check project statuses (read knowledge/projects/*.md)
5. Check overnight social mentions
6. Check weather forecast

Compile into a brief with these sections:
- 🔥 Urgent (needs attention NOW)
- 📅 Today's Calendar
- 📊 Project Status (one line each)
- 📱 Social (notable mentions only)
- 🌤️ Weather (one line)
- 🎯 Suggested priorities for today

Keep the whole thing under 25 lines. 
Be opinionated about priorities." \\
  --model "sonnet" --announce \\
  --channel discord --to "channel:YOUR_ID"`}</Code>

      <Callout emoji="💡" title="Why 'Be opinionated about priorities' matters">
        Without this instruction, your agent will just list everything neutrally. With it, the agent will say things like "I'd skip the LinkedIn post today and focus on fixing the auth bug — that's blocking the launch." That's the difference between a summary and an <em>assistant</em>.
      </Callout>

      <h2>Recipe 2: 📡 Social Monitor (Every 4 Hours)</h2>

      <Code title="terminal">{`openclaw cron add \\
  --name "Social Monitor" \\
  --cron "0 8,12,16,20 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Social media check:

1. Check Twitter/X mentions and replies since last check
2. Check DMs for anything unread
3. Note engagement metrics on posts from last 24h

Actions:
- Like genuine compliments and thank-yous
- Log any questions that need my response
- Flag negative sentiment or complaints
- Ignore spam and bots

If nothing notable: reply HEARTBEAT_OK
If something needs human attention: summarize with urgency level

Update memory/heartbeat-state.json with check timestamp." \\
  --model "sonnet" --delivery none`}</Code>

      <h2>Recipe 3: 💰 Revenue & Metrics (Weekly)</h2>

      <Code title="terminal">{`openclaw cron add \\
  --name "Weekly Revenue Report" \\
  --cron "0 9 * * 1" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Weekly revenue and metrics report:

1. Check Stripe dashboard for past 7 days:
   - Total revenue
   - New customers
   - Churn (if applicable)
   - Any failed payments

2. Website analytics:
   - Visitors this week vs last week  
   - Top traffic sources
   - Conversion rate

3. Social metrics:
   - Follower growth
   - Top performing content
   - Engagement rate trend

Format as a quick scorecard. Include week-over-week 
change (↑/↓) for each metric. End with one insight 
and one recommendation." \\
  --model "sonnet" --announce \\
  --channel discord --to "channel:YOUR_ID"`}</Code>

      <h2>Recipe 4: 🔍 Competitor Watch (Weekly)</h2>

      <Code title="terminal">{`openclaw cron add \\
  --name "Competitor Watch" \\
  --cron "0 10 * * 3" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Competitor intelligence scan:

Read knowledge/resources/competitors.md for the list.

For each competitor:
1. Check their website for new features or pricing changes
2. Check their Twitter/social for announcements
3. Search for recent mentions/reviews

Report format:
- 🆕 New developments (features, pricing, launches)
- 📢 Notable announcements
- 💬 What customers are saying about them
- 💡 Opportunities for us (gaps they're leaving)

If nothing changed: 'No notable competitor moves this week.'
Keep it under 30 lines." \\
  --model "sonnet" --announce \\
  --channel discord --to "channel:YOUR_ID"`}</Code>

      <h2>Recipe 5: 📧 Email Triage (Every 2 Hours)</h2>

      <p>For the person who hates email but can't ignore it.</p>

      <Code title="terminal">{`openclaw cron add \\
  --name "Email Triage" \\
  --cron "0 */2 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Scan inbox for last 2 hours.

Rules:
- IGNORE: newsletters, marketing, receipts, notifications
- FLAG: personal emails, client questions, urgent alerts
- DRAFT: if it's a simple question, draft a reply (don't send)

Output:
'📧 [Sender]: [Subject] — [One sentence summary] (Drafted reply)'

If no important emails, say HEARTBEAT_OK." \\
  --model "sonnet" --delivery none`}</Code>

      <h2>Recipe 6: 🚀 Build Watchdog (Hourly during work)</h2>

      <p>Checks your GitHub Actions or Vercel deployments and yells if something breaks.</p>

      <Code title="terminal">{`openclaw cron add \\
  --name "Build Watchdog" \\
  --cron "0 9-17 * * 1-5" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Check Vercel/GitHub build status for active projects.
  
If all green: HEARTBEAT_OK
If failed: '🚨 BUILD FAILED: [Project Name] - [Error summary]. Link: [URL]'" \\
  --model "sonnet" --delivery none`}</Code>

      <h2>Recipe 7: 📝 Meeting Prep (30 min before each meeting)</h2>

      <Code title="terminal">{`openclaw cron add \\
  --name "Meeting Prep" \\
  --cron "*/30 8-17 * * 1-5" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Check calendar for meetings in the next 30 minutes.
  
If a meeting is found:
- Who is attending?
- What was the last email/thread with these people?
- Any relevant project updates to mention?
- Prepare 3 talking points

Output:
'📅 Meeting in 30 min: [Title]
   With: [Names]
   Context: [What you last discussed]
   Prep: [3 bullet points]'

If no meetings in next 30 min: HEARTBEAT_OK" \\
  --model "haiku" --delivery none`}</Code>

      <h2>Recipe 8: 🧹 Weekly Knowledge Base Cleanup</h2>

      <Code title="terminal">{`openclaw cron add \\
  --name "KB Cleanup" \\
  --cron "0 3 * * 0" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Weekly knowledge base maintenance:

1. Read all files in knowledge/projects/
2. Check which projects are stale (no updates in 2+ weeks)
3. Move completed projects to knowledge/archives/
4. Check MEMORY.md for outdated entries
5. Review tacit.md for contradictions or stale preferences

Output a summary of what was cleaned up.
Only actually move/edit files if the action is clearly correct.
If unsure, list it as a suggestion instead." \\
  --model "sonnet"`}</Code>

      <h2>Recipe 9: 🎯 Goal Tracker (Weekly)</h2>

      <Code title="terminal">{`openclaw cron add \\
  --name "Goal Tracker" \\
  --cron "0 18 * * 5" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Weekly goal check:

Read knowledge/goals.md for current goals.
Read daily notes from this week.

For each goal:
- Progress this week: [what moved forward]
- Blockers: [what's in the way]
- Next week's action: [one specific step]

End with an honest assessment:
Are we on track? Behind? Ahead?
What's the ONE thing to focus on next week?" \\
  --model "sonnet" --announce \\
  --channel discord --to "channel:YOUR_ID"`}</Code>

      <h2>Recipe 10: 🔔 Price Drop Monitor</h2>

      <p>Track prices of tools, services, or products you're interested in:</p>

      <Code title="terminal">{`openclaw cron add \\
  --name "Price Monitor" \\
  --cron "0 10 * * 1,4" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Check prices for items in knowledge/watchlist.md.
  
For each item, search for current pricing.
Compare to last known price in the file.

If price dropped >10%: '🔔 PRICE DROP: [item] was $X, now $Y'
If price increased: note it but don't alert.
If no change: HEARTBEAT_OK

Update knowledge/watchlist.md with current prices." \\
  --model "haiku" --delivery none`}</Code>

      <h2>Recipe 11: 📊 A/B Test Monitor (Daily)</h2>

      <p>If you're running experiments (landing page variants, email subject lines, pricing), track the results:</p>

      <Code title="terminal">{`openclaw cron add \\
  --name "AB Test Monitor" \\
  --cron "0 9 * * *" \\
  --session isolated \\
  --message "Check running A/B tests:

Read knowledge/experiments.md for active tests.
For each test, check relevant analytics.

Report:
- Test name
- Variant A vs B metrics  
- Statistical significance (rough estimate)
- Recommendation: keep running / winner found / kill it

If a test has a clear winner (>20% difference, 
100+ observations), flag it for action." \\
  --model "sonnet" --announce`}</Code>

      <h2>Recipe 12: 🌅 End-of-Day Journal (Automated)</h2>

      <p>The nightly consolidation handles knowledge base updates. This is different — it writes a human-readable journal entry:</p>

      <Code title="terminal">{`openclaw cron add \\
  --name "Daily Journal" \\
  --cron "0 21 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Write today's daily note entry.

Read today's sessions and conversations.
Read any cron outputs from today.

Write a journal entry in memory/YYYY-MM-DD.md:
- What we accomplished
- Decisions made and why
- Problems we ran into
- Lessons learned
- What's on deck for tomorrow

Keep it factual and concise. 
This is for future-me context, not poetry." \\
  --model "sonnet"`}</Code>

      <Callout emoji="💡" title="Pro Tip: The 'Delivery None' Trick">
        Notice how the watchdog says <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">HEARTBEAT_OK</code> if everything is fine. Because we set <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">--delivery none</code>, it stays silent. But if it outputs "🚨 BUILD FAILED", that's <em>not</em> HEARTBEAT_OK, so OpenClaw will detect the anomaly and send you the message. Silence is success.
      </Callout>

      <h2>More Recipes: The Advanced Collection</h2>

      <h3>Recipe 7: Weekly Knowledge Base Cleanup</h3>

      <Code title="terminal">{`openclaw cron add \\
  --name "weekly-kb-cleanup" \\
  --schedule "0 10 * * 0" \\
  --prompt "Review all files in knowledge/projects/. For any project that hasn't been updated in 30+ days, move it to knowledge/archives/ with a note about why it was archived. Then check knowledge/areas/ for any area files that reference completed projects and update them. Report what you moved." \\
  --channel general`}</Code>

      <p>This is your Sunday cleaning crew. Left unchecked, your projects/ folder becomes a graveyard of abandoned ideas. This cron job keeps it honest.</p>

      <h3>Recipe 8: Daily Standup Summary</h3>

      <Code title="terminal">{`openclaw cron add \\
  --name "daily-standup" \\
  --schedule "0 9 * * 1-5" \\
  --prompt "Read the last 3 daily notes and the current sprint in knowledge/projects/. Generate a standup summary: what was done yesterday, what's planned today, and any blockers. Keep it under 10 lines." \\
  --channel general`}</Code>

      <p>Perfect if you're a solo dev who misses having a team to do standups with. Your agent becomes your accountability partner.</p>

      <h3>Recipe 9: Competitor Price Monitor</h3>

      <Code title="terminal">{`openclaw cron add \\
  --name "competitor-watch" \\
  --schedule "0 12 * * 1" \\
  --prompt "Check the pricing pages of these competitors: [competitor1.com/pricing, competitor2.com/pricing]. Compare with our current pricing in knowledge/areas/pricing.md. If anything changed, alert me with the old vs new prices." \\
  --channel alerts`}</Code>

      <p>Competitors change their pricing quietly. This catches it. One founder caught a competitor dropping their price 40% — and adjusted their positioning the same day.</p>

      <h3>Recipe 10: Inbox Zero Nudge</h3>

      <Code title="terminal">{`openclaw cron add \\
  --name "inbox-nudge" \\
  --schedule "0 17 * * 1-5" \\
  --prompt "Check my unread emails. If there are any older than 24 hours that haven't been replied to, send me a summary with suggested one-line responses for each. Prioritize emails from known contacts." \\
  --channel general`}</Code>

      <p>End-of-day nudge to clear your inbox. The agent drafts responses so you just have to approve or tweak them. Most people reply within 30 seconds when the draft is already written.</p>

      <h3>Recipe 11: Weekly Revenue Dashboard</h3>

      <Code title="terminal">{`openclaw cron add \\
  --name "weekly-revenue" \\
  --schedule "0 8 * * 1" \\
  --prompt "Pull this week's metrics: MRR, new signups, churn, and trial-to-paid conversion rate. Compare with last week. Format as a clean dashboard with arrows (↑↓→) showing trends. Save to daily-notes/weekly-revenue-{date}.md" \\
  --channel general`}</Code>

      <h3>Recipe 12: Content Calendar Reminder</h3>

      <Code title="terminal">{`openclaw cron add \\
  --name "content-reminder" \\
  --schedule "0 8 * * 1,3,5" \\
  --prompt "Check knowledge/areas/social-media.md for the content calendar. What's scheduled for today? If nothing is scheduled, suggest 3 content ideas based on recent daily notes and trending topics in our niche. Draft a post for my preferred platform." \\
  --channel general`}</Code>

      <p>Never stare at a blank tweet composer again. Your agent either reminds you what's planned or generates options. Three posts a week, zero writer's block.</p>

      <h2>The Recipe Design Pattern</h2>

      <p>Notice the pattern in every recipe above? They all follow the same structure:</p>

      <ul className="my-4 space-y-2 text-[var(--foreground)]/80 text-sm">
        <li className="flex gap-3"><span>1.</span> <span><strong>Trigger</strong> — when should this run? (cron schedule)</span></li>
        <li className="flex gap-3"><span>2.</span> <span><strong>Context</strong> — what files should the agent read? (knowledge base paths)</span></li>
        <li className="flex gap-3"><span>3.</span> <span><strong>Action</strong> — what should the agent DO? (specific, concrete verb)</span></li>
        <li className="flex gap-3"><span>4.</span> <span><strong>Output</strong> — where does the result go? (channel, file, or silence)</span></li>
      </ul>

      <p>When designing your own recipes, fill in those four blanks and you'll have a solid cron job every time.</p>

      <Tip emoji="⏰" title="Stagger Your Cron Jobs">
        Don't schedule everything at 9 AM. If you have 5 cron jobs, spread them: 8:00, 8:30, 9:00, 9:30, 10:00. This prevents overload, keeps your context windows clean, and means you get a steady drip of useful info throughout the morning instead of a firehose.
      </Tip>

      <Tip emoji="🔇" title="The Silent Success Pattern">
        For monitoring jobs (build watchdog, uptime checks), use the "delivery none + anomaly detection" pattern. Your agent says HEARTBEAT_OK when everything's fine (silent), and only bothers you when something's wrong. You should NEVER get "everything is fine!" messages — that's noise.
      </Tip>

      <Quiz
        question="You want a cron job that checks your SaaS uptime every 5 minutes and only alerts you if it's down. What's the right approach?"
        options={[
          { text: "Schedule it every 5 min with --delivery discord so you get constant updates", explanation: "You'd get 288 'everything is fine' messages per day. That's noise, not monitoring." },
          { text: "Schedule it every 5 min with --delivery none, and have the agent say HEARTBEAT_OK when up, but output an alert message when down", correct: true, explanation: "The silent success pattern! HEARTBEAT_OK = silence. Any other output = anomaly = you get notified. Clean, quiet, effective." },
          { text: "Schedule it every hour — 5 minutes is too frequent", explanation: "If your SaaS is down for 55 minutes before you know, that's a lot of angry customers. 5-minute checks are standard for uptime monitoring." },
          { text: "Don't use a cron job — use an external monitoring service instead", explanation: "External monitoring is great too, but the question is about cron jobs. And your agent can do things external monitors can't — like checking specific features, not just HTTP status." }
        ]}
      />
    </>
  );
}
