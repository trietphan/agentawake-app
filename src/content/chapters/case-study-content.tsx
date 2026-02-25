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
        Creating content is a full-time job. Research trends, write posts, reply to comments, track analytics. Or... you let your agent do 90% of it and you handle the 10% that actually requires a human brain. Here's the complete system, broken down by platform.
      </p>

      <Analogy>
        Think of it like a restaurant. The <strong>agent is the kitchen</strong> — it handles prep work, cooking, plating, washing dishes. <strong>You're the head chef</strong> — you taste the food, approve it, and occasionally add the special sauce that makes it yours. You don't need to wash dishes to run a great restaurant.
      </Analogy>

      <h2>The 90/10 Split</h2>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-3">🤖 Agent Handles (90%)</div>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li>• Research what's trending in your niche</li>
            <li>• Draft 3-5 post options per content slot</li>
            <li>• Repurpose one piece across all platforms</li>
            <li>• Handle simple replies (thanks, acknowledgments)</li>
            <li>• Monitor what's performing well</li>
            <li>• Maintain the content calendar</li>
            <li>• Schedule posts at optimal times per platform</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-3">👤 You Handle (10%)</div>
          <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
            <li>• Pick which draft to post (30 seconds)</li>
            <li>• Add your personality — hot takes, humor</li>
            <li>• Strategic decisions on topics/direction</li>
            <li>• Handle sensitive or controversial replies</li>
            <li>• Record quick voice/video when needed</li>
            <li>• Occasionally say "more of this, less of that"</li>
          </ul>
        </div>
      </div>

      <h2>The Core Workflow</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">1. 🔍 Research (Automated — 7 AM Daily)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent scans Hacker News, Twitter trending topics, specific subreddits, and competitor accounts. Extracts 5 potential topics with engagement data. Saves to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">content/research.md</code>.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">2. ✍️ Drafting (Automated — 7:30 AM)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent writes 3 draft variations for each topic using your voice (pulled from tacit.md). Adapts format per platform — threads for Twitter, carousels for Instagram, long-form for LinkedIn. Saves to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">content/drafts.md</code>.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">3. ✅ Approval (Manual — 5 minutes over coffee)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">You read the drafts. Delete the weak ones. Tweak the good ones. Reply "post 2" or react with ✅. That's your entire content creation for the day.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">4. 📣 Publishing & Engagement (Automated)</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent posts at optimal times per platform, replies to comments, tracks performance, and reports weekly analytics.</p>
        </div>
      </div>

      <h2>The Research Cron</h2>

      <Code title="Daily Content Research">{`openclaw cron add \\
  --name "Content Research" \\
  --cron "0 7 * * *" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Research today's content opportunities.

1. Search Twitter for trending topics in [AI/SaaS/your niche].
2. Check Reddit r/[your-subreddit] for top posts (24h).
3. Scan Hacker News front page for relevant discussions.
4. Check what competitors posted in the last 24h.

Output 5 topic ideas ranked by:
- 🔥 Trending score (is this hot right now?)
- 💬 Discussion potential (will people reply?)
- 🎯 Audience fit (does our audience care?)

For each topic, include:
- One-line hook
- Key angle/take
- Supporting data point or quote

Save to content/research.md" \\
  --model "sonnet"`}</Code>

      <h2>🔌 Platform-Specific Playbooks</h2>

      <p>Each platform has its own culture, format, and algorithm. Your agent needs to speak each platform's language fluently.</p>

      <h3>🐦 Twitter/X — The Engagement Engine</h3>

      <p>Twitter rewards hot takes, threads, and conversations. Your agent should draft differently here than anywhere else.</p>

      <div className="my-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="text-xs font-bold text-blue-400 mb-3">TWITTER CONTENT STRATEGY</div>
        <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
          <li>• <strong>Format:</strong> Single tweets (hot takes), threads (tutorials/stories), quote tweets (commentary)</li>
          <li>• <strong>Optimal times:</strong> 8-10 AM, 12-1 PM, 5-7 PM (your timezone)</li>
          <li>• <strong>What works:</strong> Contrarian takes, "Here's what nobody tells you about X", numbered lists, before/after</li>
          <li>• <strong>Thread structure:</strong> Hook → Problem → Solution → Proof → CTA</li>
          <li>• <strong>Reply strategy:</strong> Agent replies to comments within 1 hour (algorithm boost). Genuine responses only — no "great point!" spam</li>
        </ul>
      </div>

      <Code title="Twitter Draft Cron">{`openclaw cron add \\
  --name "Twitter Drafts" \\
  --cron "30 7 * * *" \\
  --session isolated \\
  --message "Read content/research.md. 
  Draft 3 tweets for today:
  
  1. A hot take or observation (single tweet, <280 chars)
  2. A mini-thread (3-5 tweets) teaching something
  3. A question or poll to drive engagement
  
  Use my voice from tacit.md. Be punchy, 
  not corporate. Save to content/drafts/twitter.md" \\
  --model "sonnet" --announce --channel discord`}</Code>

      <h3>💼 LinkedIn — The Professional Play</h3>

      <p>LinkedIn rewards storytelling, lessons learned, and "I was wrong about X" posts. Totally different vibe from Twitter.</p>

      <div className="my-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="text-xs font-bold text-blue-400 mb-3">LINKEDIN CONTENT STRATEGY</div>
        <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
          <li>• <strong>Format:</strong> Long-form posts (1300+ chars perform best), carousel documents, polls</li>
          <li>• <strong>Optimal times:</strong> Tue-Thu 8-10 AM (business hours)</li>
          <li>• <strong>What works:</strong> Personal stories, failure lessons, "5 things I learned", industry insights with data</li>
          <li>• <strong>Hook formula:</strong> Start with a bold statement. Line break. Then the story. LinkedIn shows only first 2 lines before "see more"</li>
          <li>• <strong>Engagement hack:</strong> End with a question. Comments boost reach 5x vs likes</li>
        </ul>
      </div>

      <h3>📸 Instagram/TikTok — The Visual Pipeline</h3>

      <p>Your agent can't create videos (yet), but it can do everything around them:</p>

      <div className="my-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="text-xs font-bold text-blue-400 mb-3">VISUAL CONTENT STRATEGY</div>
        <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
          <li>• <strong>Agent does:</strong> Research trending audio/formats, write scripts, draft captions, generate carousel text, schedule posts</li>
          <li>• <strong>You do:</strong> Record the 30-second video, take the photo, or approve the carousel</li>
          <li>• <strong>Caption formula:</strong> Hook line → Value → CTA → Hashtags (agent researches optimal hashtags weekly)</li>
          <li>• <strong>Carousel scripts:</strong> Agent writes slide-by-slide text. You drop it into Canva. 5 minutes.</li>
          <li>• <strong>Reels/TikTok scripts:</strong> Agent writes the script + suggests trending audio. You just read it on camera.</li>
        </ul>
      </div>

      <h3>📧 Email Newsletter — The Revenue Driver</h3>

      <p>Email is where the money is. Your agent writes it, you review it, subscribers pay for it.</p>

      <Code title="Weekly Newsletter Cron">{`openclaw cron add \\
  --name "Newsletter Draft" \\
  --cron "0 8 * * 1" \\
  --tz "America/Chicago" \\
  --session isolated \\
  --message "Draft this week's newsletter.

1. Review the past 7 days of content/research.md
2. Pick the 3 most interesting topics
3. Write a 500-word newsletter with:
   - Subject line (A/B test: write 2 options)
   - Opening hook (personal anecdote or observation)
   - 3 key insights with commentary
   - One actionable tip readers can use today
   - CTA to our product/community

Voice: conversational, like emailing a smart friend.
Save to content/drafts/newsletter.md" \\
  --model "opus" --announce --channel discord`}</Code>

      <h3>💬 Discord/Slack Communities — The Engagement Loop</h3>

      <p>Your agent can be an active, helpful member of communities where your audience hangs out. Not spamming — genuinely participating.</p>

      <div className="my-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="text-xs font-bold text-blue-400 mb-3">COMMUNITY ENGAGEMENT STRATEGY</div>
        <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
          <li>• <strong>Answer questions</strong> in relevant channels (with your knowledge base as context)</li>
          <li>• <strong>Share insights</strong> from your research (not links to your stuff — actual value)</li>
          <li>• <strong>Host weekly threads</strong> — "What are you building?" or "Share your wins"</li>
          <li>• <strong>Monitor for opportunities</strong> — someone asking "is there a tool that does X?" when you built X</li>
          <li>• <strong>Rule:</strong> 80% value, 20% promotion. Break this and you get banned.</li>
        </ul>
      </div>

      <h2>The Content Repurposing Machine</h2>

      <p>One piece of content should become 5. Your agent handles the transformation:</p>

      <div className="my-6 space-y-2">
        <div className="flex items-center gap-3 text-sm">
          <span className="text-[var(--text-tertiary)]">📝 Blog post</span>
          <span className="text-[var(--text-tertiary)]">→</span>
          <span className="text-[var(--foreground)]/80">🐦 Twitter thread + 💼 LinkedIn post + 📧 Newsletter section + 📸 Carousel script + 🎬 Video script</span>
        </div>
      </div>

      <Code title="Repurposing Prompt">{`Take this blog post and create:
1. A Twitter thread (5-7 tweets, punchy, 
   end with link to full post)
2. A LinkedIn post (storytelling format, 
   1500 chars, end with question)
3. A newsletter snippet (200 words, 
   with one actionable takeaway)
4. An Instagram carousel script 
   (8 slides, one key point per slide)
5. A 30-second video script 
   (hook → problem → solution → CTA)

Adapt the tone for each platform. 
Twitter = punchy. LinkedIn = professional. 
Newsletter = friendly. Instagram = visual.`}</Code>

      <h2>Measuring What Works</h2>

      <Code title="Weekly Analytics Cron">{`openclaw cron add \\
  --name "Content Analytics" \\
  --cron "0 9 * * 1" \\
  --session isolated \\
  --message "Weekly content performance review.
  
  Check which posts got the most engagement this week.
  Compare against last week's performance.
  
  Output:
  - 🏆 Top performer (and WHY it worked)
  - 📉 Worst performer (and WHY it flopped)  
  - 📊 Engagement trend (up/down/flat)
  - 🎯 Recommendation for next week's content focus
  - 💡 One experiment to try this week
  
  Save insights to content/analytics.md" \\
  --model "sonnet" --announce --channel discord`}</Code>

      <h2>Common Mistakes</h2>

      <div className="my-6 space-y-3">
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Same content everywhere</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Cross-posting the exact same text to Twitter, LinkedIn, and Instagram. Each platform has different culture, format, and audience expectations. Your agent should <em>adapt</em>, not copy-paste.</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ All promotion, no value</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">If every post is "buy my thing," people unfollow. Follow the 80/20 rule: 80% genuinely useful content, 20% promotion. Your agent should know this ratio from tacit.md.</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Ignoring engagement</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Posting and ghosting kills algorithms. Your agent should reply to comments within 1-2 hours. Genuine replies, not "thanks for sharing!" auto-responses.</p>
        </div>
        <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
          <div className="text-xs font-bold text-red-400">❌ Not tracking what works</div>
          <p className="text-xs text-[var(--text-secondary)] mt-1">Without analytics, you're guessing. Set up the weekly analytics cron. Let data guide your content strategy, not vibes.</p>
        </div>
      </div>

      <Callout emoji="📊" title="The Result">
        <strong>10x content output</strong> across 5+ platforms with about <strong>15 minutes of human time per day</strong>. Your morning routine: read 3 draft options → tap "2" → add one personal sentence → done. The agent handles research, adaptation, publishing, engagement, and analytics. You bring the personality.
      </Callout>

      <h2>How the Agent Thinks Through Content Creation</h2>

      <p>Here's what's actually happening inside your agent's "brain" when it gets the morning content task:</p>

      <AgentThinking steps={[
        "Reading daily-notes/ for the last 3 days to find interesting topics and recent wins",
        "Checking knowledge/areas/social-media.md for content pillars and voice guidelines",
        "Scanning trending topics in the niche via web search for timely hooks",
        "Cross-referencing my content calendar — what's scheduled vs what's open?",
        "Generating 3 draft options: one educational, one storytelling, one hot take",
        "Adapting the chosen draft for each platform (Twitter thread → LinkedIn post → newsletter section)",
        "Scheduling posts at optimal times from the social media area file",
        "Setting a reminder to check engagement metrics 4 hours after posting"
      ]} />

      <h2>Common Content Agent Mistakes</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Generic, personality-free content</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">If your agent's posts sound like they could be from anyone, your tacit knowledge file needs work. Add more examples of YOUR voice, your hot takes, your specific experiences.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Same format every time</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">If every post is a "5 tips for X" thread, your audience gets bored. Mix formats: stories, hot takes, tutorials, behind-the-scenes, questions, polls.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🚫 Not learning from analytics</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Set up a weekly cron that reviews what performed well. Feed those insights back into the content strategy. Your agent should be getting BETTER at content over time, not just producing more.</p>
        </div>
      </div>

      <Tip emoji="🎭" title="The Voice Clone Technique">
        Take your 10 best-performing posts ever. Put them in a file called knowledge/resources/my-best-content.md. Tell your agent: "Study these posts. Notice the patterns — sentence length, humor style, how I open and close. Match this energy." Your agent will mimic your voice much better with examples than with descriptions.
      </Tip>

      <Tip emoji="♻️" title="Content Recycling is Underrated">
        A great tweet from 3 months ago can become a LinkedIn post today, a newsletter section next week, and a YouTube script next month. Set up a monthly cron to surface your top-performing old content and suggest recycling opportunities. Most audiences have <strong>zero overlap</strong> across platforms.
      </Tip>

      <Quiz
        question="Your content agent keeps producing bland, generic posts. What's the most effective fix?"
        options={[
          { text: "Tell it to 'be more creative' in the prompt", explanation: "Vague instructions produce vague results. 'Be creative' means nothing to an AI without specific examples of what creative looks like for YOU." },
          { text: "Switch to a more powerful AI model", explanation: "A more powerful model writing bland content just produces higher-quality bland content. The issue is input, not capability." },
          { text: "Add 10+ examples of your best-performing content to the knowledge base and reference them in the prompt", correct: true, explanation: "Correct! Examples beat instructions every time. Your agent can pattern-match on real examples of YOUR voice much better than following abstract descriptions." },
          { text: "Write all the content yourself and just have the agent schedule it", explanation: "This defeats the purpose. You want the agent creating content, not just scheduling it." }
        ]}
      />

      <Checklist
        title="Content Agent Setup Checklist"
        items={[
          "Created knowledge/areas/social-media.md with platforms, pillars, and voice guidelines",
          "Added 10+ examples of your best content to knowledge/resources/",
          "Set up morning content generation cron job",
          "Configured platform-specific adaptation (Twitter vs LinkedIn vs Newsletter)",
          "Created engagement monitoring cron (check replies, DMs, comments)",
          "Set up weekly analytics review cron",
          "Built a content recycling pipeline for cross-platform repurposing",
          "Added your tacit knowledge about content preferences to the agent's brain"
        ]}
      />
    </>
  );
}
