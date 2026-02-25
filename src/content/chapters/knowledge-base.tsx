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
        Time to build your agent's pantry. We're going to use something called the <strong>PARA method</strong> — don't worry, it's simpler than it sounds. It's basically Marie Kondo for your agent's brain. And just like KonMari, it takes an hour to set up and saves you hundreds of hours going forward.
      </p>

      <h2>PARA: Four Boxes for Everything</h2>

      <Analogy>
        You know how Marie Kondo says to sort everything into categories? PARA is the same idea, but instead of "clothes" and "books," we have four boxes:
        <br /><br />
        📦 <strong>Projects</strong> — things you're actively working on (like the box by the front door with stuff you need this week)<br />
        📦 <strong>Areas</strong> — ongoing responsibilities with no end date (like the box labeled "adulting" — bills, health, household stuff)<br />
        📦 <strong>Resources</strong> — useful reference material (like your bookshelf — you're not reading them all right now, but they're there when you need them)<br />
        📦 <strong>Archives</strong> — done or paused stuff (the storage unit — out of sight, but you can always dig it up)
      </Analogy>

      <p>The beauty of PARA is that every single piece of information in your life fits into exactly one of these four categories. There's no ambiguity. No "should this go here or there?" If it has a deadline and you're working on it → Project. If it's ongoing with no end date → Area. If it's useful reference → Resource. If it's done → Archive.</p>

      <h2>Setting It Up (Literally 2 Minutes)</h2>

      <Code title="terminal">{`mkdir -p knowledge/{projects,areas,resources,archives}

# Create a rules file so your agent knows how this works
cat > knowledge/README.md << 'EOF'
# Knowledge Base Rules

## Structure
- projects/  → Active work with deadlines (one .md per project)
- areas/     → Ongoing responsibilities (one .md per area)
- resources/ → Reference material (templates, guides, notes)
- archives/  → Completed or paused (moved here, never deleted)

## Rules
1. Every active project gets ONE file in projects/
2. When a project finishes → move to archives/ (don't delete!)
3. Ongoing responsibilities → areas/ (social media, finances, health)
4. Reference material → resources/ (templates, checklists, playbooks)
5. The nightly cron maintains everything
6. File names: lowercase-with-dashes.md (e.g., saas-mvp.md)
7. Each file starts with a # heading and current status

## For the Agent
- Read projects/ to know what we're actively working on
- Check areas/ for ongoing duties and schedules
- Search resources/ when you need templates or reference info
- Don't read archives/ unless specifically asked about old projects
EOF`}</Code>

      <p>That's it. Four folders and a README. Your agent now has a structured brain instead of a junk drawer.</p>

      <h2>What Goes Where? (Real Examples)</h2>

      <p>Let's look at actual files you might create. Notice how each one is <strong>self-contained</strong> — your agent can open a single file and instantly have full context on that topic.</p>

      <h3>Projects: Active Work</h3>

      <Code title="knowledge/projects/saas-mvp.md">{`# SaaS MVP — TaskFlow

## Status: 🟡 Building (Started Feb 10)

## What Is This?
A task management SaaS for freelancers. Simple, opinionated, 
not trying to be Notion. $29/mo.

## Current Sprint (Feb 20-27)
- [x] Landing page live
- [x] Stripe checkout working (test mode)
- [ ] User authentication (Clerk)
- [ ] Basic dashboard UI
- [ ] Switch Stripe to live mode

## Tech Stack
- Next.js 14 (app router)
- Supabase (auth + database)
- Stripe (payments)
- Vercel (hosting)
- Tailwind CSS

## Key Decisions
- NO free tier. 14-day free trial then paid.
- Only Stripe. No PayPal (too many chargebacks).
- Mobile-responsive but no native app. Not yet.

## Links
- Repo: github.com/me/taskflow
- Staging: staging.taskflow.app
- Stripe Dashboard: dashboard.stripe.com
- Design: figma.com/file/xxx`}</Code>

      <h3>Areas: Ongoing Responsibilities</h3>

      <Code title="knowledge/areas/social-media.md">{`# Social Media Management

## Platforms
- **Twitter/X**: @myhandle — primary platform
  - Post 3-5x/week (Mon, Wed, Fri minimum)
  - Mix: 60% value content, 30% engagement, 10% promotion
  - Best times: 9 AM and 5 PM EST
  
- **LinkedIn**: /in/myname — secondary
  - Post 1x/week (Tuesday mornings)
  - More professional tone, longer posts
  - Share project milestones and learnings

## Content Pillars
1. Building in public (what I'm working on)
2. AI agent tips and tricks
3. Indie hacker / solopreneur life
4. Occasional hot takes on tech trends

## Voice & Tone
- Conversational, not corporate
- Use analogies and humor
- Never say "leverage" or "synergy" unironically
- Short sentences. Punch. Impact.

## Metrics Tracking (weekly)
- Impressions, engagement rate, follower growth
- Top performing posts (analyze what worked)
- DM conversations started`}</Code>

      <h3>Resources: Reference Material</h3>

      <Code title="knowledge/resources/email-templates.md">{`# Email Templates

## Cold Outreach (for partnerships)
Subject: Quick question about [their product]

Hey [Name],

I've been using [their product] for [time period] and love [specific feature]. 
I'm building [my product] which [brief description].

Would you be open to a 15-min chat about [specific collaboration idea]?

No worries if not — I'll keep being a happy customer either way.

[Name]

---

## Customer Support — Refund Request
Hey [Name],

No problem at all — refund processed. You should see it in 5-10 business days.

If there's anything specific that didn't meet your expectations, I'd genuinely 
love to know. Building this as a solo founder, so every piece of feedback 
directly shapes the product.

Either way, thanks for giving it a try.

[Name]

---

## Follow-Up (no response after 5 days)
Subject: Re: [original subject]

Hey [Name] — just floating this back to the top in case it got buried. 
Happy to adjust the ask if the timing isn't right.

[Name]`}</Code>

      <h3>Archives: Done/Paused</h3>

      <Code title="knowledge/archives/old-landing-page-v1.md">{`# Landing Page V1 (ARCHIVED)

## Archived: Feb 20, 2026
## Reason: Replaced with V2 (interactive design)

## What It Was
Static single-page landing. Hero + features + CTA.
Conversion rate: 2.3% (below 3% target).

## What Worked
- Headline "Your AI agent has amnesia. Let's fix that." — good hook
- Social proof section pulled 40% of scroll engagement

## What Didn't
- Too much text above the fold
- CTA was "Learn More" (weak — changed to "Start Building")
- No pricing preview = too many tire-kickers

## Lessons for V2
- Show price early (filters out non-buyers)
- Use interactive elements (not just text walls)
- Lead with pain, not features`}</Code>

      <Callout emoji="🎯" title="The Payoff">
        When your agent needs to work on your SaaS project, it doesn't dig through a giant memory file. It opens <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">knowledge/projects/saas-mvp.md</code> and instantly has full context — tech stack, current sprint, key decisions, all relevant links. Like opening the right cookbook to the right page instead of flipping through every book you own.
      </Callout>

      <h2>The "How Do I Know If It's Working?" Test</h2>

      <p>After setting up your knowledge base, try this: start a brand new conversation with your agent and ask it about your project. <strong>Without re-explaining anything.</strong> If the agent can tell you:</p>

      <ul className="my-4 space-y-2 text-[var(--foreground)]/80 text-sm">
        <li className="flex gap-3"><span className="text-green-400">✓</span> <span>What you're working on</span></li>
        <li className="flex gap-3"><span className="text-green-400">✓</span> <span>What the current status is</span></li>
        <li className="flex gap-3"><span className="text-green-400">✓</span> <span>What the next steps are</span></li>
        <li className="flex gap-3"><span className="text-green-400">✓</span> <span>What tech stack you're using</span></li>
      </ul>

      <p>...then congratulations, your knowledge base is working. If it can't, the file probably needs more detail or your agent's configuration isn't pointing to the right directory.</p>

      <h2>Common Mistakes</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Files that are too long</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">If a project file is over 200 lines, it's too long. Split it. Your SaaS project doesn't need the API documentation in the same file as the sprint plan. Keep each file to one screen's worth of reading.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Files with no status</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Every project file needs a status indicator at the top. 🟢 Live. 🟡 Building. 🔴 Blocked. Your agent should be able to glance at the first line and know if this project is active or stalled.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Never archiving anything</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Projects finish. When they do, MOVE the file to archives/. Don't just leave it in projects/ with a "DONE" note. Your agent reads the projects/ folder to know what's active. Old files = confusion.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Organizing resources by date instead of topic</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Don't name files "notes-feb-22.md." Name them by what they contain: "email-templates.md," "competitor-analysis.md," "pricing-research.md." Your agent searches by topic, not date.</p>
        </div>
      </div>

      <h2>Pro Tips</h2>

      <Callout emoji="💡" title="Pro Tip: Let Your Agent Maintain Its Own Knowledge Base">
        Add this to your AGENTS.md: <em>"After completing any significant task, update the relevant knowledge base file with learnings, decisions, and status changes."</em> Your agent will start maintaining its own brain. You just review the changes occasionally.
      </Callout>

      <Callout emoji="💡" title="Pro Tip: Use the README as a Router">
        Your agent reads <code className="text-xs bg-[var(--surface-hover)] px-1.5 py-0.5 rounded">knowledge/README.md</code> first to understand the structure. Put "routing hints" in there: <em>"For anything about payments → projects/saas-mvp.md. For content ideas → areas/social-media.md."</em> This helps the agent find the right file faster.
      </Callout>

      <h2>Advanced: Cross-Referencing Between Files</h2>

      <p>Here's something most people miss: your knowledge base files can <strong>reference each other</strong>. In your project file, mention which area it relates to. In your area file, list active projects. This creates a web of context that helps your agent navigate intelligently.</p>

      <Code title="knowledge/projects/saas-mvp.md (with cross-refs)">{`# SaaS MVP — TaskFlow
## Related: areas/social-media.md (for launch promotion)
## Related: resources/pricing-research.md (pricing decisions)
## Related: resources/competitor-analysis.md (feature priorities)`}</Code>

      <p>Think of it like hyperlinks in your brain. When your agent reads your project file and sees those references, it knows exactly where to look for supporting context. No guessing, no searching.</p>

      <h2>Platform-Specific Setup</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🤖 OpenClaw / Claude</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Point your AGENTS.md to read from the knowledge/ directory. Claude loves markdown — keep files clean and well-structured with headers. Use the README.md as a routing file.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🦜 LangChain / LlamaIndex</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Use a vector store to index your knowledge/ folder. Chunk by file (not by paragraph) — each file is already a coherent unit. Re-index on file change via a watcher.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔧 Custom Agents</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Build a simple tool that lists files in each PARA folder and reads them on demand. Don't dump everything into the system prompt — let the agent pull what it needs.</p>
        </div>
      </div>

      <h2>The "Weekly Review" Habit</h2>

      <p>Every Sunday, spend 10 minutes doing a PARA sweep:</p>

      <ul className="my-4 space-y-2 text-[var(--foreground)]/80 text-sm">
        <li className="flex gap-3"><span>1.</span> <span>Move finished projects to archives/</span></li>
        <li className="flex gap-3"><span>2.</span> <span>Update status on active projects</span></li>
        <li className="flex gap-3"><span>3.</span> <span>Add any new areas that emerged this week</span></li>
        <li className="flex gap-3"><span>4.</span> <span>Delete or archive stale resources</span></li>
      </ul>

      <p>Or better yet — have your agent do it for you with a Sunday cron job. We'll cover that in Chapter 9.</p>

      <Tip emoji="🗂️" title="The One-File-Per-Topic Rule">
        Never put two unrelated topics in the same file. Your SaaS project and your fitness goals don't belong together, even if you worked on both today. One file = one topic = one context for your agent. If you're tempted to create a "misc.md" file, you're doing it wrong.
      </Tip>

      <Tip emoji="🔄" title="Let Your Agent Create Files For You">
        Add this to your agent instructions: "When I mention a new project or responsibility that doesn't have a knowledge base file yet, create one using the PARA structure." Your agent becomes self-organizing — it notices gaps and fills them. You just approve the PR.
      </Tip>

      <Quiz
        question="Where should you put a file about a client project that finished last month?"
        options={[
          { text: "knowledge/projects/ — it's still a project", explanation: "Projects are for ACTIVE work. Finished work should be archived." },
          { text: "knowledge/archives/ — it's done, move it out of active view", correct: true, explanation: "Correct! Archives keep your projects/ folder clean and focused on what's actually active." },
          { text: "Delete it — you don't need it anymore", explanation: "Never delete! Old projects contain valuable decisions, learnings, and context. Archive them." },
          { text: "knowledge/resources/ — it's reference material now", explanation: "Resources are for general reference material like templates. Completed projects go to archives/ to preserve their full history." }
        ]}
      />

      <Checklist
        title="Knowledge Base Setup Checklist"
        items={[
          "Created knowledge/ directory with projects/, areas/, resources/, archives/ subfolders",
          "Written a README.md with routing hints for your agent",
          "Created at least one file in projects/ for your current main project",
          "Created at least one file in areas/ for an ongoing responsibility",
          "Added status indicators (🟢🟡🔴) to the top of each project file",
          "Tested by asking your agent about your project in a fresh conversation",
          "Added cross-references between related files",
          "Set up a weekly review habit (manual or cron job)"
        ]}
      />

      <p>
        Your pantry is stocked. Next up: the countertop — daily notes that give your agent the "what happened today" context it desperately needs.
      </p>
    </>
  );
}
