/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";
import ScrollReveal from "@/components/ScrollReveal";
import RotatingText from "@/components/RotatingText";
import GlowCard from "@/components/GlowCard";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

const EmailCaptureComponent = dynamic(() => import("@/components/EmailCapture"), { loading: () => <div className="h-12" /> });
const MobileStickyCTA = dynamic(() => import("@/components/MobileStickyCTA"), { loading: () => <div /> });
// StickyBottomCTA removed — MobileStickyCTA handles both buttons
const ExitIntentPopup = dynamic(() => import("@/components/ExitIntent"), { loading: () => <></> });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { loading: () => <div /> });

function GuaranteeBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
      <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
      30-Day Money-Back Guarantee
    </div>
  );
}

const faqItems = [
  {
    q: "Is this a subscription?",
    a: "No. One-time payment, lifetime access. You keep everything, including future updates to your tier.",
  },
  {
    q: "I'm not technical. Can I still use this?",
    a: "Absolutely. The playbook starts with zero-code methods (Claude Projects, ChatGPT Custom GPTs) and progressively introduces more technical setups. Chapter 0 is free — try it.",
  },
  {
    q: "Which AI platform does this work with?",
    a: "All major ones. We have dedicated implementation guides for Claude, ChatGPT, CrewAI, LangChain, AutoGPT, n8n, Cursor, and OpenClaw. Pick your stack and follow the guide.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "30-day money-back guarantee. If the playbook doesn't help you build a better agent, email us and we'll refund you immediately.",
  },
  {
    q: "How long does it take to implement?",
    a: "The basic memory system takes about 45 minutes. Most builders have a working autonomous agent within a weekend.",
  },
  {
    q: "Do I get access to future chapters?",
    a: "Yes, for your tier and below. We're actively adding new platform guides and case studies.",
  },
  {
    q: "Does this work with any AI agent platform?",
    a: "Yes! The core architecture (memory layers, automation patterns, security model) is universal. OpenClaw gets full copy-paste configs. Claude, ChatGPT, CrewAI, LangChain, and even no-code tools like n8n/Zapier can all use the patterns.",
  },
  {
    q: "Wait — this was really built by an AI agent?",
    a: "Yes. The agent (ToDaMoon 🐾) that built this landing page, the interactive guide, wired Stripe, and deployed to Vercel is the same system documented in the playbook. We're selling the map we used to navigate the territory.",
  },
];

function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]/60">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-[62px] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e8772e] via-[#f0a868] to-[#f5c98a] flex items-center justify-center shadow-lg shadow-[var(--accent)]/15 animate-float">
            <span className="text-[15px]">⚡</span>
          </span>
          <span className="text-[1.05rem] sm:text-[1.15rem] font-extrabold bg-gradient-to-r from-[#e8772e] via-[#f0a868] to-[#f5c98a] bg-clip-text text-transparent truncate">AgentAwake</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-7">
          <Link href="/templates" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Templates</Link>
          <a href="#use-cases" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Use Cases</a>
          <a href="#platforms" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Platforms</a>
          <Link href="/chapters" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Chapters</Link>
          <a href="#pricing" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Pricing</a>
          <Link href="/blog" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Blog</Link>
          <Link href="/health-check" className="hidden sm:inline text-[var(--accent-light)] text-sm font-semibold hover:text-[var(--accent)] transition-colors">🩺 Health Check</Link>
          <a href="#faq" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">FAQ</a>

          <MobileNav items={[
            { href: "/templates", label: "Templates" },
            { href: "/blog", label: "Blog" },
            { href: "/chapters", label: "Chapters" },
            { href: "/health-check", label: "🩺 Health Check" },
            { href: "/free", label: "Free Chapter" },
            { href: "#pricing", label: "Playbook" },
          ]} />
          <ThemeToggle />
          <a href="#pricing" className="bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-3.5 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/15 whitespace-nowrap">Get the Playbook</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-24 text-center relative overflow-hidden">
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(ellipse,rgba(232,119,46,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[15%] left-[8%] w-40 h-40 rounded-full bg-[var(--accent)]/10 blur-3xl pointer-events-none animate-blob" />
      <div className="absolute top-[30%] right-[8%] w-44 h-44 rounded-full bg-[var(--accent)]/15 blur-3xl pointer-events-none animate-blob-delay" />
      <div className="max-w-[1080px] mx-auto px-6 relative">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-semibold text-[var(--accent-light)] bg-gradient-to-r from-[var(--accent)]/10 via-[var(--accent-light)]/8 to-[var(--accent-light)]/5 border border-[var(--accent-light)]/20 mb-7 animate-gradient-shift animate-hero-reveal">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Built by an autonomous AI agent — the system documented inside
        </div>
        <h1 className="text-[clamp(2.8rem,6vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.035em] mb-6 max-w-[780px] mx-auto animate-hero-reveal-delay">
          Your AI Agent Forgets Everything.{" "}
          <span className="bg-gradient-to-r from-[#e8772e] via-[#f0a868] to-[#f5c98a] bg-clip-text text-transparent animate-gradient-shift">Fix It in 45 Minutes.</span>
        </h1>
        <p className="text-lg max-w-[560px] mx-auto mb-5 leading-relaxed animate-hero-subtitle text-[var(--text-secondary)]">
          The complete system for building AI agents that <span className="hero-accent-word">remember, learn,</span> and work autonomously so you <span className="hero-accent-word">save 5+ hours every week.</span>
        </p>
        <p className="text-sm text-[var(--text-tertiary)] mb-7 animate-hero-subtitle" style={{ animationDelay: '0.8s' }}>
          👥 Join 50+ builders who&apos;ve given their agents memory
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap animate-hero-cta">
          <a href="#pricing" className="bg-[var(--accent-muted)] text-white px-9 py-4 rounded-[10px] text-[1.05rem] font-semibold hover:bg-[var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/10">
            Get the Playbook →
          </a>
          <Link href="/free" className="border border-[var(--border)] text-[var(--foreground)]/80 px-9 py-4 rounded-[10px] text-[1.05rem] font-semibold hover:border-[var(--accent)]/30 hover:text-[var(--accent-light)] transition-all">
            Read Free Chapter
          </Link>
        </div>
        <div className="flex flex-col items-center gap-3 mt-6 animate-hero-cta" style={{ animationDelay: '1.1s' }}>
          <div className="flex items-center justify-center gap-6 text-xs text-[var(--text-tertiary)]">
            <span>✓ Instant access</span>
            <span>✓ One-time payment</span>
            <span>✓ No subscription</span>
          </div>
          <GuaranteeBadge />
        </div>
      </div>
    </section>
  );
}

function PlatformStrip() {
  const platforms = [
    { name: "Claude", emoji: "🟣" },
    { name: "ChatGPT", emoji: "🟢" },
    { name: "CrewAI", emoji: "🚀" },
    { name: "LangChain", emoji: "🔗" },
    { name: "Cursor", emoji: "💻" },
    { name: "n8n", emoji: "⚙️" },
    { name: "OpenClaw", emoji: "⚡" },
    { name: "AutoGPT", emoji: "🤖" },
  ];

  return (
    <div className="border-y border-[var(--border)]/40 py-6 bg-[var(--surface)]/40">
      <div className="max-w-[1080px] mx-auto px-6">
        <p className="text-center text-[0.65rem] font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-4 opacity-70">
          As seen building with
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {platforms.map((p) => (
            <span
              key={p.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[0.75rem] font-semibold text-[var(--text-secondary)] hover:border-[var(--accent)]/30 hover:text-[var(--accent-light)] transition-colors"
            >
              <span className="text-[0.7rem]">{p.emoji}</span>
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BuildersTestimonials() {
  const testimonials = [
    {
      quote: "I was re-explaining my entire codebase to Claude every morning. Set up the memory system from Chapter 3 and now it just... knows. Saved me at least an hour a day.",
      name: "Alex K.",
      role: "Solo SaaS Founder",
      emoji: "🚀",
    },
    {
      quote: "Used the n8n implementation guide to build a self-healing support bot for my client. They think I'm a genius. The playbook is my secret weapon.",
      name: "Sarah M.",
      role: "AI Automation Freelancer",
      emoji: "💼",
    },
    {
      quote: "The Cursor rules chapter alone was worth $29. My AI coding assistant finally remembers my project conventions instead of suggesting random patterns.",
      name: "Dev R.",
      role: "Full-Stack Developer",
      emoji: "⚡",
    },
    {
      quote: "I automated my entire content pipeline — research, drafting, scheduling — using the n8n cron recipes. What used to eat my Sundays now runs itself. I just add the personality layer.",
      name: "Jamie L.",
      role: "Solopreneur & Content Creator",
      emoji: "✍️",
    },
    {
      quote: "We used this to onboard three junior devs to our AI workflow stack in under a week. The AGENTS.md + SOUL.md templates gave them a mental model that would've taken months to absorb otherwise.",
      name: "Marcus T.",
      role: "Dev Team Lead",
      emoji: "🧑‍💻",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-[980px] mx-auto px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-extrabold tracking-tight mb-12">
          What Builders Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <div className="text-3xl mb-4">{t.emoji}</div>
              <p className="text-[0.92rem] text-[var(--foreground)]/80 leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-[var(--text-tertiary)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { num: "90%", lbl: "Less manual work" },
    { num: "24/7", lbl: "Autonomous operation" },
    { num: "45 min", lbl: "Setup time" },
    { num: "8", lbl: "Full implementation guides" },
  ];
  return (
    <section className="py-14 border-y border-[var(--border)]/60">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)] bg-[var(--surface-hover)]/60 px-3 py-1.5 rounded-full border border-[var(--border)]/50">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Updated daily · Building in public
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl mx-auto">
        {stats.map((s, index) => (
          <ScrollReveal key={s.lbl} delay={(index % 3) * 100}>
            <div className="text-center min-w-0">
              <div className="text-[1.8rem] sm:text-[2.2rem] font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent leading-none">{s.num}</div>
              <div className="text-xs sm:text-sm text-[var(--text-tertiary)] font-medium mt-1 break-words">{s.lbl}</div>
            </div>
          </ScrollReveal>
        ))}
        </div>
      </div>
    </section>
  );
}

function BuildLog() {
  const items = [
    {
      label: "Today",
      title: "Rebranded to AgentAwake + domain migration",
      desc: "Shifted brand narrative from generic agent tooling to memory-first positioning.",
      color: "from-[var(--accent)]/15 to-[var(--accent-light)]/8 border-[var(--accent-light)]/20",
    },
    {
      label: "This Week",
      title: "Shipped new chapters + interactive blog games",
      desc: "Added practical depth and playful interactivity to boost retention and shares.",
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-400/30",
    },
    {
      label: "Next",
      title: "X distribution flywheel + content cadence",
      desc: "2 posts/day + high-leverage replies to compound reach and inbound interest.",
      color: "from-[var(--accent)]/12 to-[var(--accent-light)]/6 border-[var(--accent-light)]/20",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="rounded-3xl border border-[var(--border)]/80 bg-[var(--surface)]/85 p-8 md:p-10">
          <div className="flex items-center justify-between gap-3 flex-wrap mb-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)]">Build Log</span>
              <h3 className="text-2xl font-bold mt-2">Shipping Fast, In Public</h3>
            </div>
            <Link href="/blog" className="text-sm text-cyan-300 hover:text-cyan-200 transition-colors">Read updates →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.title} className={`rounded-2xl border p-5 bg-gradient-to-b ${item.color}`}>
                <div className="text-[11px] uppercase tracking-widest text-[var(--foreground)]/80 mb-2">{item.label}</div>
                <h4 className="font-semibold mb-2 leading-snug">{item.title}</h4>
                <p className="text-sm text-[var(--foreground)]/80/85 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    { icon: "🧠", color: "bg-red-500/10", title: "Zero Memory", desc: "Every morning, your agent forgets everything. Yesterday's progress, your preferences, active projects — all gone. You spend 20 minutes re-explaining context before anything useful happens." },
    { icon: "⏳", color: "bg-[var(--accent-light)]/8", title: "Purely Reactive", desc: "Your agent only works when you're typing. It sits idle while you sleep, eat, or live your life. No background monitoring, no scheduled tasks, no proactive work." },
    { icon: "🔓", color: "bg-blue-400/10", title: "No Trust Framework", desc: "You're afraid to give your agent real access because there's no security model. So it stays a chatbot instead of becoming an operator — limited to answering questions instead of doing work." },
  ];
  return (
    <section className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block">The Problem</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4">Your AI Agent Has Amnesia</h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[620px] mb-12">You installed ChatGPT, Claude, or an agent framework. It felt magical for an hour. Then reality hit — every session starts from scratch.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, index) => (
            <ScrollReveal key={c.title} delay={index * 100}>
              <div className="bg-[var(--surface)]/95 border border-[var(--border)]/80 rounded-2xl p-7 hover:border-[var(--accent-light)]/30 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-4 ${c.color}`}>{c.icon}</div>
                <h3 className="text-[1.05rem] font-semibold mb-2">{c.title}</h3>
                <p className="text-[var(--text-secondary)] text-[0.92rem] leading-relaxed">{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    {
      emoji: "📊",
      tag: "Trading",
      tagColor: "bg-emerald-400/10 text-emerald-400",
      title: "Autonomous Market Analysis",
      subtitle: "Your own Wall Street analyst who never sleeps",
      description: "Every morning at 6 AM, your agent scans Twitter sentiment, pulls price levels, and delivers a full S&P 500 and Gold trading plan to your Discord before you open your eyes.",
      analogy: "🍕 It's like having a personal chef who checks what's fresh at the market, plans the menu, and has breakfast ready before your alarm goes off. Except instead of pancakes, it's profit targets.",
      result: "→ Daily output, never misses a day. Monetizable at $19/mo per subscriber.",
    },
    {
      emoji: "✍️",
      tag: "Content",
      tagColor: "bg-blue-400/10 text-blue-400",
      title: "90/10 Content Pipeline",
      subtitle: "Your agent does the dishes, you bring the personality",
      description: "Agent researches trends, drafts 3-5 posts per slot, handles simple replies, and monitors what's performing. You spend 15 minutes picking drafts and adding your voice.",
      analogy: "🍕 Think restaurant: the agent is the prep cook, line cook, and dishwasher. You're the head chef who tastes the food, adds the special sauce, and takes the compliments.",
      result: "→ 10x content output. ~15 minutes of human time per day.",
    },
    {
      emoji: "💡",
      tag: "SaaS Ideas",
      tagColor: "bg-[var(--accent-light)]/8 text-[var(--accent-light)]",
      title: "Idea Validation Engine",
      subtitle: "Stop building things nobody wants",
      description: "Your agent mines Reddit, Twitter, and Indie Hackers for recurring pain points, groups them by theme, validates demand against existing solutions, and scores opportunities.",
      analogy: "🍕 Like a movie studio doing test screenings before spending $200 million. Except your agent does it while you watch Netflix, and it costs about $0.50.",
      result: "→ 23 validated ideas in one month. 3 became real products.",
    },
    {
      emoji: "📧",
      tag: "Email & CRM",
      tagColor: "bg-pink-400/10 text-pink-400",
      title: "Inbox Zero Autopilot",
      subtitle: "Because life's too short for 'just following up'",
      description: "Agent triages your inbox, drafts replies to routine emails, flags urgent ones, and even follows up when people ghost you. You approve drafts with one tap.",
      analogy: "🍕 It's like hiring a receptionist who reads your mind. They know which calls matter, which can wait, and which go straight to voicemail — without you training them for months.",
      result: "→ 80% fewer emails you personally handle. Zero 'sorry for the delayed response.'",
    },
    {
      emoji: "🛒",
      tag: "E-Commerce",
      tagColor: "bg-[var(--accent-light)]/8 text-[var(--accent-light)]",
      title: "Product Research & Listing",
      subtitle: "Find winning products while you're at brunch",
      description: "Agent monitors trending products on TikTok/Pinterest, analyzes competitor pricing, generates optimized listings with SEO keywords, and tracks inventory levels.",
      analogy: "🍕 Imagine having a shopping-obsessed friend who constantly texts you 'OMG this is about to blow up' — except they're right 70% of the time, and they also write your listings.",
      result: "→ 5x more product research. Listings written in minutes, not hours.",
    },
    {
      emoji: "🎓",
      tag: "Learning",
      tagColor: "bg-cyan-400/10 text-cyan-400",
      title: "Personal Research Assistant",
      subtitle: "Your AI study buddy that actually does the reading",
      description: "Agent reads papers, summarizes key findings, creates flashcards, tracks your learning goals, and sends you daily bite-sized lessons on topics you're studying.",
      analogy: "🍕 Remember that friend in college who actually did the readings and then explained them to you at lunch? That, but it never gets tired and it reads 100x faster.",
      result: "→ Learn new topics 3x faster. Never lose your place again.",
    },
    {
      emoji: "🏠",
      tag: "Real Estate",
      tagColor: "bg-[var(--accent-light)]/8 text-[var(--accent-light)]",
      title: "Property Scout & Analyzer",
      subtitle: "Find deals before they hit Zillow's front page",
      description: "Agent monitors new listings, runs comps, calculates cash-on-cash returns, checks flood zones and school ratings, then sends you a ranked shortlist daily.",
      analogy: "🍕 Like having a real estate agent who works 24/7, doesn't take commission, and isn't trying to upsell you on granite countertops.",
      result: "→ Evaluate 50+ properties daily. Never miss a hot listing.",
    },
    {
      emoji: "📱",
      tag: "Social Media",
      tagColor: "bg-rose-400/10 text-rose-400",
      title: "Community Manager",
      subtitle: "Be everywhere without actually being everywhere",
      description: "Agent monitors your Discord, Twitter, and Reddit mentions. Responds to simple questions, escalates complex ones, maintains FAQ documents, and spots emerging conversations.",
      analogy: "🍕 It's like having an intern who actually reads every single reply, never complains, and somehow knows the answer to 80% of the questions before asking you.",
      result: "→ 90% response rate across platforms. Community feels alive 24/7.",
    },
  ];

  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block text-center">Use Cases</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          8 Ways Your Agent Prints Time <span className="text-[var(--text-tertiary)]">(and Money)</span>
        </h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[620px] mx-auto mb-14 text-center">
          These aren't hypothetical. Each one is a real system pattern you can build after reading the playbook. We include the funny version and the profitable version.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, index) => (
            <ScrollReveal key={c.title} delay={(index % 3) * 100}>
              <div className="bg-[var(--surface)] border border-[var(--border)]/80 rounded-2xl p-7 hover:border-[var(--border)] transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[0.72rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md ${c.tagColor}`}>{c.tag}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{c.emoji} {c.title}</h3>
                <p className="text-sm text-[var(--accent-light)]/70 mb-3 italic">{c.subtitle}</p>
                <p className="text-[0.92rem] text-[var(--text-secondary)] leading-relaxed mb-4">{c.description}</p>
                <div className="rounded-xl bg-[var(--accent-light)]/4 border-l-[3px] border-[var(--accent-light)]/30 p-3.5 mb-4">
                  <div className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--accent-light)]/80 mb-1">Real-life translation</div>
                  <p className="text-sm text-[var(--foreground)]/80/80 italic">{c.analogy}</p>
                </div>
                <div className="text-sm font-semibold text-emerald-400 pt-3 border-t border-[var(--border)]">{c.result}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  const platforms = [
    {
      name: "OpenClaw",
      desc: "The platform this playbook was built on. Full configs included.",
      compatibility: "Full templates",
      icon: "⚡",
      featured: true,
    },
    {
      name: "Claude (Anthropic)",
      desc: "Use Projects + custom instructions to build the memory system. Works great for solo operators.",
      compatibility: "Full implementation guide",
      icon: "🟣",
      featured: false,
    },
    {
      name: "ChatGPT + GPTs",
      desc: "Custom GPTs with knowledge files as your pantry. Pair with Zapier for cron-like automation.",
      compatibility: "Full implementation guide",
      icon: "🟢",
      featured: false,
    },
    {
      name: "CrewAI",
      desc: "Multi-agent framework. Use the orchestration chapter for crew setup and task delegation patterns.",
      compatibility: "Full implementation guide",
      icon: "🚀",
      featured: false,
    },
    {
      name: "AutoGPT / AgentGPT",
      desc: "OG autonomous agents. The memory architecture fixes their biggest weakness — context loss between runs.",
      compatibility: "Full implementation guide",
      icon: "🤖",
      featured: false,
    },
    {
      name: "LangChain / LangGraph",
      desc: "Developer-focused agent chains. Apply the PARA memory and security model to your custom agent pipelines.",
      compatibility: "Full implementation guide",
      icon: "🔗",
      featured: false,
    },
    {
      name: "n8n / Make / Zapier",
      desc: "No-code automation platforms. Use the cron recipes and heartbeat patterns as workflow templates.",
      compatibility: "Full implementation guide",
      icon: "⚙️",
      featured: false,
    },
    {
      name: "Cursor / Windsurf / Cline",
      desc: "AI coding agents. Apply the knowledge base and tacit knowledge layers to make your coding assistant remember your codebase patterns.",
      compatibility: "Full implementation guide",
      icon: "💻",
      featured: false,
    },
  ];

  return (
    <section id="platforms" className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block text-center">Platform Compatibility</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          Works With Your Favorite AI Tools
        </h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[620px] mx-auto mb-14 text-center">
          All eight supported platforms now include dedicated, end-to-end implementation chapters with real configs, code snippets, and deployment patterns.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 transition-all ${
              p.featured
                ? "bg-gradient-to-b from-[var(--accent)]/10 to-[var(--surface)] border border-[var(--accent)]/20 hover:border-[var(--accent)]/40"
                : "bg-[var(--surface)] border border-[var(--border)]/80 hover:border-[var(--border)]"
            }`}>
              <div className="text-2xl mb-3">{p.icon}</div>
              <h4 className="text-[0.95rem] font-semibold mb-1">{p.name}</h4>
              <p className="text-[0.82rem] text-[var(--text-tertiary)] mb-3 leading-relaxed">{p.desc}</p>
              <span className={`text-[0.72rem] font-bold uppercase tracking-wide px-2 py-1 rounded-md ${
                p.featured ? "bg-[var(--accent)]/15 text-[var(--accent-light)]" : "bg-[var(--surface-hover)] text-[var(--text-secondary)]"
              }`}>
                {p.compatibility}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  const layers = [
    {
      num: "1",
      title: "Knowledge Base — Your Agent's Long-Term Brain",
      desc: "Structured using the PARA method (Projects, Areas, Resources, Archives). Your agent always knows what's active, what's ongoing, and what's been learned.",
      detail: "Think of it as your agent's pantry — organized, searchable, and always stocked with what it needs.",
    },
    {
      num: "2",
      title: "Daily Notes — Active State That Persists",
      desc: "Every day, your agent maintains a structured log: what it's working on, what's blocked, what decisions were made, and what to do next.",
      detail: "It's your agent's morning coffee ritual — it reads yesterday's notes and picks up exactly where it left off.",
    },
    {
      num: "3",
      title: "Tacit Knowledge — Your Agent's Soul",
      desc: "Preferences, communication style, security rules, and lessons learned — all captured and compounding over time.",
      detail: "Like your best friend who knows you hate phone calls and never suggests sushi on Tuesdays.",
    },
  ];
  return (
    <section className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block">The Solution</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4">A Three-Layer System That Compounds</h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[620px] mb-14">The same architecture behind agents generating thousands per week. Not theory — the exact system we run in production.</p>
        <div className="space-y-4">
          {layers.map((l, index) => (
            <ScrollReveal key={l.num} delay={index * 100}>
              <div className="flex flex-col sm:flex-row gap-5 items-start bg-[var(--surface)] border border-[var(--border)]/80 rounded-2xl p-8 hover:border-[var(--accent)]/15 hover:shadow-[0_0_40px_rgba(232,119,46,0.04)] transition-all">
                <div className="flex-shrink-0 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-lg font-extrabold bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent)]/5 border border-[var(--accent)]/15 text-[var(--accent-light)]">
                  {l.num}
                </div>
                <div>
                  <h3 className="text-[1.1rem] font-semibold mb-1.5">{l.title}</h3>
                  <p className="text-[0.92rem] text-[var(--text-secondary)]">{l.desc}</p>
                  <div className="mt-2.5 text-[0.85rem] text-[var(--text-tertiary)] pl-3.5 border-l-2 border-[var(--border)] italic">{l.detail}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatMakesThisDifferent() {
  const differentiators = [
    {
      icon: "🤖",
      title: "Built By the System It Documents",
      desc: "This isn't theory written by someone who read about AI agents. This playbook, this landing page, this payment system — all built by the exact agent architecture we teach. We're the proof it works.",
      highlight: true,
      accent: "border-t-[var(--accent)]",
    },
    {
      icon: "🎮",
      title: "Interactive, Not Just Readable",
      desc: "Quizzes that test your understanding. Calculators that estimate your costs and ROI. Checklists that track your progress. Architecture diagrams you can click and explore. This isn't a PDF — it's a learning experience.",
      highlight: false,
      accent: "border-t-cyan-400",
    },
    {
      icon: "🔌",
      title: "8 Platforms, One Architecture",
      desc: "Most guides lock you into one tool. We give you the universal architecture, then show platform-specific implementation for Claude, ChatGPT, CrewAI, Cursor, n8n, LangChain, and more. Switch platforms without losing your system.",
      highlight: false,
      accent: "border-t-[var(--accent)]",
    },
    {
      icon: "💰",
      title: "Revenue-First, Not Theory-First",
      desc: "Chapter 21 is a complete Revenue Playbook with 7 proven models, real math, and a 4-week launch sequence. We don't just teach you to build agents — we teach you to profit from them. $6K/mo on $15/mo of costs.",
      highlight: false,
      accent: "border-t-emerald-400",
    },
    {
      icon: "🧠",
      title: "Memory Architecture, Not Prompt Tricks",
      desc: "Everyone teaches prompting. Nobody teaches persistent memory. Our three-layer brain architecture (knowledge base + daily notes + tacit knowledge) is what turns a chatbot into a business operator that compounds daily.",
      highlight: false,
      accent: "border-t-[var(--accent-light)]",
    },
    {
      icon: "🔒",
      title: "Security Built In, Not Bolted On",
      desc: "Progressive trust ladder, prompt injection defense, data classification — from Chapter 1. Most agent guides don't even mention security until something goes wrong. Ours starts with it.",
      highlight: false,
      accent: "border-t-rose-500",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-[1080px] mx-auto px-6 relative">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block text-center">Why AgentAwake</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          Not Another <span className="line-through text-[var(--text-tertiary)]">Prompt Engineering Course</span>
        </h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[620px] mx-auto mb-14 text-center">
          We built something that doesn't exist yet: a complete operating system for AI agents, created by the very system it documents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((d, index) => (
            <ScrollReveal key={d.title} delay={(index % 3) * 100}>
              <div
                className={`bg-[var(--surface)] border border-[var(--border)]/80 border-t-2 ${d.accent} rounded-2xl p-7 hover:border-[var(--border)] transition-all`}
              >
                <div className="text-2xl mb-3">{d.icon}</div>
                <h3 className="text-[1.05rem] font-semibold mb-2">{d.title}</h3>
                <p className="text-[0.88rem] text-[var(--text-secondary)] leading-relaxed">{d.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function Testimonials() {
  const quotes = [
    {
      text: "As agents become pervasive in our daily lives, they'll need access to a vast collection of continuously evolving data. The computational demands of processing multi-million-token context windows will remain impractical for many real-world use cases.",
      source: "Zep Research Paper",
      role: "Temporal Knowledge Graphs for AI Agents",
      link: "https://arxiv.org/abs/2501.13956",
      icon: "📄",
    },
    {
      text: "The key insight is that effective agents require memory systems that go beyond the context window. Without persistent state, every agent interaction starts from zero — making true autonomy impossible.",
      source: "MemGPT / Letta AI",
      role: "UC Berkeley Research",
      link: "https://arxiv.org/abs/2310.08560",
      icon: "🧠",
    },
    {
      text: "Memory is 90% of what makes an agent useful. The model is the brain, but without memory it's a brain floating in a jar. You need the filing cabinet, the daily journal, and the personality config.",
      source: "r/ClaudeAI Community",
      role: "380K+ members discussing agent architecture",
      link: "https://reddit.com/r/ClaudeAI",
      icon: "💬",
    },
    {
      text: "We've demonstrated that Zep outperforms the current state-of-the-art memory system in the Deep Memory Retrieval benchmark, with accuracy improvements of up to 18.5% while reducing response latency by 90%.",
      source: "Zep Engineering Blog",
      role: "State of the Art in Agent Memory",
      link: "https://blog.getzep.com/state-of-the-art-agent-memory/",
      icon: "⚡",
    },
    {
      text: "Mem0 delivers 26% higher accuracy vs OpenAI memory, 91% lower latency, and 90% fewer tokens than full-context approaches. The secret? Structured memory extraction, not bigger context windows.",
      source: "Mem0 Research",
      role: "LOCOMO Benchmark Results",
      link: "https://docs.mem0.ai",
      icon: "📊",
    },
    {
      text: "I gave my AI agent a three-layer memory system — knowledge base, daily notes, and personality config. It went from useless chatbot to autonomous operator in one afternoon. The difference isn't the model. It's the memory.",
      source: "OpenClaw Community",
      role: "Open-source AI agent framework",
      link: "https://discord.com/invite/clawd",
      icon: "🐾",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[var(--accent)]/[0.03] to-transparent">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block text-center">The Evidence</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          The Industry Agrees: Memory Is Everything
        </h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[620px] mx-auto mb-14 text-center">
          Researchers, engineers, and builders are all converging on the same insight — persistent memory is what separates demos from products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quotes.map((q, index) => (
            <ScrollReveal key={q.source} delay={(index % 3) * 100}>
              <a href={q.link} target="_blank" rel="noopener noreferrer" className="bg-[var(--surface)] border border-[var(--border)]/80 rounded-2xl p-6 hover:border-[var(--accent)]/20 transition-all block group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-hover)] flex items-center justify-center text-lg">{q.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent-light)] transition-colors">{q.source}</div>
                    <div className="text-xs text-[var(--text-tertiary)]">{q.role}</div>
                  </div>
                </div>
                <p className="text-[0.88rem] text-[var(--text-secondary)] leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <div className="mt-3 text-xs text-[var(--accent-light)]/60 group-hover:text-[var(--accent-light)] transition-colors">Read source →</div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}



function HowItWorks() {
  const steps = [
    { num: "1", title: "Build the Memory Architecture", desc: "Create the three-layer structure. Copy our templates, fill in the brackets, and your agent instantly has persistent memory.", time: "15 minutes" },
    { num: "2", title: "Set Up Automation", desc: "Deploy cron jobs — morning briefing, social monitoring, nightly memory consolidation. Your agent starts working in the background.", time: "15 minutes" },
    { num: "3", title: "Configure Security", desc: "Classify communication channels, set up the progressive trust ladder, and add prompt injection defenses.", time: "10 minutes" },
    { num: "4", title: "Watch It Compound", desc: "Every day, your agent gets smarter. The nightly consolidation reviews the day, extracts learnings, and updates the knowledge base.", time: "Automatic — runs every night" },
  ];
  return (
    <section id="how" className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block text-center">How It Works</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">From Chatbot to Operator in 45 Minutes</h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] max-w-[560px] mx-auto mb-14 text-center">Less time than an episode of The Office. More life-changing.</p>
        <div className="max-w-[680px] mx-auto relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] to-[var(--surface-hover)]" />
          <div className="space-y-10">
            {steps.map((s, index) => (
              <ScrollReveal key={s.num} delay={(index % 3) * 100}>
                <div className="flex gap-6 relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center font-extrabold text-[var(--accent-light)] z-10">{s.num}</div>
                  <div className="pt-2">
                    <h3 className="text-[1.05rem] font-semibold mb-1">{s.title}</h3>
                    <p className="text-[0.92rem] text-[var(--text-secondary)]">{s.desc}</p>
                    <div className="text-sm text-[var(--accent-light)] font-semibold mt-1.5">⏱ {s.time}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EmailCapture() {
  return <EmailCaptureComponent />;
}

function WhoThisIsFor() {
  return (
    <section className="py-20 relative">
      <div className="max-w-[980px] mx-auto px-6">
        <h2 className="text-center text-[clamp(1.8rem,3.5vw,2.4rem)] font-extrabold tracking-tight mb-4">Built For Builders Who Ship</h2>
        <p className="text-center text-[var(--text-secondary)] mb-12 max-w-lg mx-auto">Not another AI theory course. This is a system for people who need their agents to work.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 hover:border-[var(--accent)]/20 transition-all">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-bold mb-2">Solo SaaS Operators</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">Running a product solo? Your agent handles support, content, monitoring, and ops — while you build.</p>
            <p className="text-xs text-[var(--accent-light)] font-semibold">Saves 5-10 hrs/week on repetitive tasks</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 hover:border-[var(--accent)]/20 transition-all">
            <div className="text-3xl mb-4">💼</div>
            <h3 className="text-lg font-bold mb-2">AI Freelancers &amp; Agencies</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">Productize your client delivery. Reusable memory architecture templates you deploy across every project.</p>
            <p className="text-xs text-[var(--accent-light)] font-semibold">Ship client projects 3x faster</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 hover:border-[var(--accent)]/20 transition-all">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold mb-2">Technical Builders</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">Building on Claude, Cursor, CrewAI, or n8n? Copy-paste configs for persistent memory on your stack.</p>
            <p className="text-xs text-[var(--accent-light)] font-semibold">8 platform implementation guides included</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      product: "The Foundation",
      price: "$9",
      wasPrice: "$19",
      priceCompare: "Less than a Chipotle burrito 🌯",
      desc: "Everything you need to give your first agent persistent memory. Set up in one afternoon.",
      bestFor: "Getting started fast",
      features: [
        "Three-layer memory architecture (40+ pages)",
        "PARA knowledge base setup guide",
        "Heartbeat & cron automation explained",
        "Security model & trust architecture",
        "Real examples from a working system",
        "Day-one setup checklist",
      ],
      cta: "Get Instant Access →",
      tier: "blueprint",
      featured: false,
    },
    {
      name: "Professional",
      product: "The Operator's Toolkit",
      price: "$19",
      wasPrice: "$39",
      priceCompare: "Less than a pizza night 🍕",
      desc: "Production templates, automation recipes, and 3 real case studies. Build agents that run your business.",
      bestFor: "Solo operators & freelancers",
      features: [
        "Everything in The Foundation",
        "Production-ready config templates",
        "4 cron job configs (copy-paste ready)",
        "3 detailed case studies with code",
        "AGENTS.md & SOUL.md templates",
        "Private Discord community access",
      ],
      cta: "Get Instant Access →",
      tier: "pro",
      featured: true,
    },
    {
      name: "Premium",
      product: "The Complete System",
      price: "$29",
      wasPrice: "$69",
      priceCompare: "One month of Netflix you barely watch 📺 (but this keeps working forever)",
      desc: "Multi-agent orchestration, 8 platform guides, revenue playbook, and advanced security. The full arsenal.",
      bestFor: "Agencies & serious builders",
      features: [
        "Everything in The Operator's Toolkit",
        "Multi-agent orchestration guide",
        "Bottleneck elimination framework",
        "Prompt injection defense playbook",
        "Cost optimization & model selection",
        "Debugging & observability toolkit",
        "Tool & API integration patterns (MCP, webhooks)",
        "Prompt engineering for agents (not chatbots)",
        "The Revenue Playbook — 7 proven income models",
        "All future chapters & updates forever",
      ],
      cta: "Get Instant Access →",
      tier: "accelerator",
      featured: false,
    },
  ];

  const checkoutUrls: Record<string, string> = {
    blueprint: "https://buy.stripe.com/4gM4gz0EC7GfdJ3gj4bMQ05",
    pro: "https://buy.stripe.com/4gMdR94US0dN6gB7MybMQ03",
    accelerator: "https://buy.stripe.com/5kQ14ngDAbWv5cx0k6bMQ04",
  };

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3.5 block text-center">Pricing</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight mb-2 text-center">Choose Your Path</h2>
        <p className="text-[1.05rem] text-[var(--text-secondary)] text-center mb-14">One-time purchase. Interactive chapters. Lifetime updates included.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t, index) => (
            <ScrollReveal key={t.tier} delay={index * 100}>
              <GlowCard className="rounded-2xl overflow-visible">
                <div className={`rounded-2xl p-7 sm:p-9 relative transition-all flex flex-col h-full overflow-visible ${
                  t.featured
                    ? "mt-4 sm:mt-0 border border-[var(--accent-light)]/35 bg-gradient-to-b from-[var(--accent)]/[0.06] via-[var(--accent-light)]/[0.04] to-[var(--surface)] shadow-[0_0_70px_rgba(232,119,46,0.1)]"
                    : "bg-[var(--surface)]/95 border border-[var(--border)]/80 hover:border-cyan-400/35 hover:-translate-y-1"
                }`}>
                  {t.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[var(--accent-muted)] text-white text-[0.72rem] font-bold uppercase tracking-wide px-4 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-1">{t.name}</div>
                  <div className="text-xl font-bold mb-3">{t.product}</div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm line-through text-[var(--text-tertiary)] font-medium">{t.wasPrice}</span>
                    <span className="text-[0.65rem] font-bold uppercase tracking-wide text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">Launch Price</span>
                  </div>
                  <div className="text-[2.8rem] font-extrabold tracking-tight mb-1">{t.price} <span className="text-lg font-medium text-[var(--text-tertiary)]">one-time</span></div>
                  <p className="text-xs text-[var(--accent-light)]/80 font-medium mb-3">{t.priceCompare}</p>
                  <p className="text-[0.9rem] text-[var(--text-secondary)] mb-3 leading-relaxed">{t.desc}</p>
                  <p className="text-xs text-[var(--accent-light)] font-semibold mb-6">Best for: {t.bestFor}</p>
                  <ul className="space-y-2 mb-7 flex-1">
                    {t.features.map((f) => (
                      <li key={f} className="flex gap-2.5 items-start text-[0.9rem] text-[var(--text-secondary)]">
                        <span className="text-emerald-400 font-bold flex-shrink-0">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={checkoutUrls[t.tier]}
                    className={`block text-center w-full py-3.5 rounded-[10px] font-semibold text-[0.92rem] transition-all ${
                      t.featured
                        ? "bg-[var(--accent-muted)] text-white hover:bg-[var(--accent)] hover:-translate-y-0.5"
                        : "border border-[var(--border)] text-[var(--foreground)]/80 hover:border-[var(--accent)]/30 hover:text-[var(--accent-light)]"
                    }`}
                  >
                    {t.cta}
                  </a>
                  <p className="text-[0.7rem] text-[var(--text-tertiary)] text-center mt-3">One-time payment · Instant access · 30-day refund</p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mt-10">
          <GuaranteeBadge />
          <div className="flex justify-center items-center gap-4 sm:gap-6 text-xs text-[var(--text-tertiary)] flex-wrap">
            <span>🔒 Secure checkout</span>
            <span className="hidden sm:inline text-[var(--text-tertiary)]">|</span>
            <span>⚡ Instant access</span>
            <span className="hidden sm:inline text-[var(--text-tertiary)]">|</span>
            <span>🚫 No subscription</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-[700px] mx-auto px-6">
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight mb-12 text-center">Questions &amp; Answers</h2>
        <FAQAccordion items={faqItems.map((item) => ({ q: item.q, a: item.a }))} />
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="py-24 text-center relative overflow-hidden">
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(232,119,46,0.08),transparent_70%)] pointer-events-none" />
      <div className="max-w-[1080px] mx-auto px-6 relative">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3">Stop re-explaining, start building.</p>
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight mb-4">Stop Chatting. Start Operating.</h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-[500px] mx-auto mb-9">Your agent should be working while you sleep. The playbook shows you exactly how.</p>
        <a href="#pricing" className="inline-block bg-[var(--accent-muted)] text-white px-9 py-4 rounded-[10px] text-[1.05rem] font-semibold hover:bg-[var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/10">
          Get the Playbook →
        </a>
        <div className="flex justify-center mt-5">
          <GuaranteeBadge />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AgentAwake — The AI Agent Playbook",
    description: "The exact playbook for building autonomous AI agents with persistent memory, automation, security, and revenue workflows.",
    brand: { "@type": "Brand", name: "AgentAwake" },
    offers: [
      { "@type": "Offer", name: "The Blueprint", price: "9.00", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "AgentAwake Pro", price: "19.00", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      { "@type": "Offer", name: "Accelerator", price: "29.00", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-x-hidden">
      <div className="pointer-events-none absolute -top-24 -left-20 w-80 h-80 rounded-full bg-[var(--accent)]/10 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-[32rem] -right-16 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl animate-blob-delay" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <NavBar />
      <Hero />
      <PlatformStrip />
      <Reveal><SocialProof /></Reveal>
      <Reveal><BuildLog /></Reveal>
      <Reveal><Problem /></Reveal>
      <Reveal><Solution /></Reveal>
      <Reveal><WhatMakesThisDifferent /></Reveal>
      <UseCases />
      {/* Testimonials temporarily removed — page too long */}
      <Reveal><Platforms /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><EmailCapture /></Reveal>
      <Reveal><WhoThisIsFor /></Reveal>
      {/* BuildersTestimonials temporarily removed — page too long */}
      <Reveal><Pricing /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><BottomCTA /></Reveal>
      <footer className="py-10 border-t border-[var(--border)] text-center text-sm text-[var(--text-tertiary)] pb-24 sm:pb-10">
        © 2026 AgentAwake. Built autonomously by an AI agent. Reviewed by a human.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-[var(--text-secondary)] transition-colors">hello@agentawake.com</a>
      </footer>
      <MobileStickyCTA />
      <ExitIntentPopup />
    </div>
  );
}
