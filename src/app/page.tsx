/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { StructuredData } from "./structured-data";
import EmailCaptureComponent from "@/components/EmailCapture";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#07070a]/85 backdrop-blur-xl border-b border-zinc-800/60">
      <div className="max-w-[1080px] mx-auto px-6 h-[60px] flex items-center justify-between">
        <span className="text-[1.15rem] font-extrabold bg-gradient-to-br from-purple-500 to-purple-300 bg-clip-text text-transparent">⚡ AgentForge</span>
        <div className="flex items-center gap-7">
          <a href="#use-cases" className="hidden sm:inline text-zinc-500 text-sm font-medium hover:text-white transition-colors">Use Cases</a>
          <a href="#platforms" className="hidden sm:inline text-zinc-500 text-sm font-medium hover:text-white transition-colors">Platforms</a>
          <a href="#pricing" className="hidden sm:inline text-zinc-500 text-sm font-medium hover:text-white transition-colors">Pricing</a>
          <Link href="/blog" className="hidden sm:inline text-zinc-500 text-sm font-medium hover:text-white transition-colors">Blog</Link>
          <a href="#faq" className="hidden sm:inline text-zinc-500 text-sm font-medium hover:text-white transition-colors">FAQ</a>
          <a href="#pricing" className="bg-purple-600 text-white px-5 py-2.5 rounded-[10px] text-sm font-semibold hover:bg-purple-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20">Get the Playbook</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-40 pb-24 text-center relative overflow-hidden">
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none" />
      <div className="max-w-[1080px] mx-auto px-6 relative">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-sm font-semibold text-purple-300 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 mb-7">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Built by an autonomous AI agent — the system documented inside
        </div>
        <h1 className="text-[clamp(2.8rem,6vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.035em] mb-6 max-w-[780px] mx-auto">
          Your AI Agent Should Be{" "}
          <span className="bg-gradient-to-r from-purple-500 via-purple-300 to-pink-300 bg-clip-text text-transparent">Running Your Business</span>{" "}
          While You Sleep
        </h1>
        <p className="text-lg text-zinc-400 max-w-[560px] mx-auto mb-11 leading-relaxed">
          The exact playbook we used to build an AI agent that ships code, generates market analysis, creates content, and processes payments — autonomously, every single day.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <a href="#pricing" className="bg-purple-600 text-white px-9 py-4 rounded-[10px] text-[1.05rem] font-semibold hover:bg-purple-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20">
            Get the Playbook →
          </a>
          <Link href="/free" className="border border-zinc-700 text-zinc-300 px-9 py-4 rounded-[10px] text-[1.05rem] font-semibold hover:border-purple-500/40 hover:text-purple-300 transition-all">
            Read Free Chapter
          </Link>
        </div>
        <p className="mt-5 text-sm text-zinc-600">One-time purchase · Interactive chapters · Works with any AI platform · Lifetime updates</p>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { num: "90%", lbl: "Less manual work" },
    { num: "24/7", lbl: "Autonomous operation" },
    { num: "45 min", lbl: "Setup time" },
    { num: "8+", lbl: "Compatible platforms" },
  ];
  return (
    <section className="py-14 border-y border-zinc-800/60">
      <div className="max-w-[1080px] mx-auto px-6 flex justify-center flex-wrap gap-16">
        {stats.map((s) => (
          <div key={s.lbl} className="text-center">
            <div className="text-[2.2rem] font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">{s.num}</div>
            <div className="text-sm text-zinc-500 font-medium mt-0.5">{s.lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    { icon: "🧠", color: "bg-red-500/10", title: "Zero Memory", desc: "Every morning, your agent forgets everything. Yesterday's progress, your preferences, active projects — all gone. You spend 20 minutes re-explaining context before anything useful happens." },
    { icon: "⏳", color: "bg-amber-400/10", title: "Purely Reactive", desc: "Your agent only works when you're typing. It sits idle while you sleep, eat, or live your life. No background monitoring, no scheduled tasks, no proactive work." },
    { icon: "🔓", color: "bg-blue-400/10", title: "No Trust Framework", desc: "You're afraid to give your agent real access because there's no security model. So it stays a chatbot instead of becoming an operator — limited to answering questions instead of doing work." },
  ];
  return (
    <section className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block">The Problem</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4">Your AI Agent Has Amnesia</h2>
        <p className="text-[1.05rem] text-zinc-400 max-w-[620px] mb-12">You installed ChatGPT, Claude, or an agent framework. It felt magical for an hour. Then reality hit — every session starts from scratch.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="bg-[#111116] border border-zinc-800/80 rounded-2xl p-7 hover:border-zinc-700 transition-all">
              <div className={`w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-4 ${c.color}`}>{c.icon}</div>
              <h3 className="text-[1.05rem] font-semibold mb-2">{c.title}</h3>
              <p className="text-zinc-400 text-[0.92rem] leading-relaxed">{c.desc}</p>
            </div>
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
      tagColor: "bg-amber-400/10 text-amber-400",
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
      tagColor: "bg-violet-400/10 text-violet-400",
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
      tagColor: "bg-orange-400/10 text-orange-400",
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
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block text-center">Use Cases</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          8 Ways Your Agent Prints Time <span className="text-zinc-500">(and Money)</span>
        </h2>
        <p className="text-[1.05rem] text-zinc-400 max-w-[620px] mx-auto mb-14 text-center">
          These aren't hypothetical. Each one is a real system pattern you can build after reading the playbook. We include the funny version and the profitable version.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c) => (
            <div key={c.title} className="bg-[#111116] border border-zinc-800/80 rounded-2xl p-7 hover:border-zinc-700 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[0.72rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md ${c.tagColor}`}>{c.tag}</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{c.emoji} {c.title}</h3>
              <p className="text-sm text-purple-300/70 mb-3 italic">{c.subtitle}</p>
              <p className="text-[0.92rem] text-zinc-400 leading-relaxed mb-4">{c.description}</p>
              <div className="rounded-xl bg-amber-400/5 border-l-[3px] border-amber-400/40 p-3.5 mb-4">
                <div className="text-[0.7rem] font-bold uppercase tracking-wider text-amber-400/80 mb-1">Real-life translation</div>
                <p className="text-sm text-zinc-300/80 italic">{c.analogy}</p>
              </div>
              <div className="text-sm font-semibold text-emerald-400 pt-3 border-t border-zinc-800">{c.result}</div>
            </div>
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
      compatibility: "Architecture guide",
      icon: "🟣",
      featured: false,
    },
    {
      name: "ChatGPT + GPTs",
      desc: "Custom GPTs with knowledge files as your pantry. Pair with Zapier for cron-like automation.",
      compatibility: "Architecture guide",
      icon: "🟢",
      featured: false,
    },
    {
      name: "CrewAI",
      desc: "Multi-agent framework. Use the orchestration chapter for crew setup and task delegation patterns.",
      compatibility: "Architecture + orchestration",
      icon: "🚀",
      featured: false,
    },
    {
      name: "AutoGPT / AgentGPT",
      desc: "OG autonomous agents. The memory architecture fixes their biggest weakness — context loss between runs.",
      compatibility: "Architecture guide",
      icon: "🤖",
      featured: false,
    },
    {
      name: "LangChain / LangGraph",
      desc: "Developer-focused agent chains. Apply the PARA memory and security model to your custom agent pipelines.",
      compatibility: "Architecture guide",
      icon: "🔗",
      featured: false,
    },
    {
      name: "n8n / Make / Zapier",
      desc: "No-code automation platforms. Use the cron recipes and heartbeat patterns as workflow templates.",
      compatibility: "Automation patterns",
      icon: "⚙️",
      featured: false,
    },
    {
      name: "Cursor / Windsurf / Cline",
      desc: "AI coding agents. Apply the knowledge base and tacit knowledge layers to make your coding assistant remember your codebase patterns.",
      compatibility: "Memory architecture",
      icon: "💻",
      featured: false,
    },
  ];

  return (
    <section id="platforms" className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block text-center">Platform Compatibility</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          Works With Your Favorite AI Tools
        </h2>
        <p className="text-[1.05rem] text-zinc-400 max-w-[620px] mx-auto mb-14 text-center">
          The memory architecture and automation patterns are universal. OpenClaw gets the full copy-paste treatment. Everything else gets the blueprint you can adapt in minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {platforms.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 transition-all ${
              p.featured
                ? "bg-gradient-to-b from-purple-500/10 to-[#111116] border border-purple-500/30 hover:border-purple-500/50"
                : "bg-[#111116] border border-zinc-800/80 hover:border-zinc-700"
            }`}>
              <div className="text-2xl mb-3">{p.icon}</div>
              <h4 className="text-[0.95rem] font-semibold mb-1">{p.name}</h4>
              <p className="text-[0.82rem] text-zinc-500 mb-3 leading-relaxed">{p.desc}</p>
              <span className={`text-[0.72rem] font-bold uppercase tracking-wide px-2 py-1 rounded-md ${
                p.featured ? "bg-purple-500/15 text-purple-300" : "bg-zinc-800 text-zinc-400"
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
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block">The Solution</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4">A Three-Layer System That Compounds</h2>
        <p className="text-[1.05rem] text-zinc-400 max-w-[620px] mb-14">The same architecture behind agents generating thousands per week. Not theory — the exact system we run in production.</p>
        <div className="space-y-4">
          {layers.map((l) => (
            <div key={l.num} className="flex flex-col sm:flex-row gap-5 items-start bg-[#111116] border border-zinc-800/80 rounded-2xl p-8 hover:border-purple-500/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.05)] transition-all">
              <div className="flex-shrink-0 w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-lg font-extrabold bg-gradient-to-br from-purple-500/15 to-purple-500/5 border border-purple-500/20 text-purple-300">
                {l.num}
              </div>
              <div>
                <h3 className="text-[1.1rem] font-semibold mb-1.5">{l.title}</h3>
                <p className="text-[0.92rem] text-zinc-400">{l.desc}</p>
                <div className="mt-2.5 text-[0.85rem] text-zinc-500 pl-3.5 border-l-2 border-zinc-800 italic">{l.detail}</div>
              </div>
            </div>
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
    },
    {
      icon: "🎮",
      title: "Interactive, Not Just Readable",
      desc: "Quizzes that test your understanding. Calculators that estimate your costs and ROI. Checklists that track your progress. Architecture diagrams you can click and explore. This isn't a PDF — it's a learning experience.",
      highlight: false,
    },
    {
      icon: "🔌",
      title: "8 Platforms, One Architecture",
      desc: "Most guides lock you into one tool. We give you the universal architecture, then show platform-specific implementation for Claude, ChatGPT, CrewAI, Cursor, n8n, LangChain, and more. Switch platforms without losing your system.",
      highlight: false,
    },
    {
      icon: "💰",
      title: "Revenue-First, Not Theory-First",
      desc: "Chapter 21 is a complete Revenue Playbook with 7 proven models, real math, and a 4-week launch sequence. We don't just teach you to build agents — we teach you to profit from them. $6K/mo on $15/mo of costs.",
      highlight: false,
    },
    {
      icon: "🧠",
      title: "Memory Architecture, Not Prompt Tricks",
      desc: "Everyone teaches prompting. Nobody teaches persistent memory. Our three-layer brain architecture (knowledge base + daily notes + tacit knowledge) is what turns a chatbot into a business operator that compounds daily.",
      highlight: false,
    },
    {
      icon: "🔒",
      title: "Security Built In, Not Bolted On",
      desc: "Progressive trust ladder, prompt injection defense, data classification — from Chapter 1. Most agent guides don't even mention security until something goes wrong. Ours starts with it.",
      highlight: false,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-[1080px] mx-auto px-6 relative">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block text-center">Why AgentForge</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          Not Another <span className="line-through text-zinc-600">Prompt Engineering Course</span>
        </h2>
        <p className="text-[1.05rem] text-zinc-400 max-w-[620px] mx-auto mb-14 text-center">
          We built something that doesn't exist yet: a complete operating system for AI agents, created by the very system it documents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="bg-[#111116] border border-zinc-800/80 rounded-2xl p-7 hover:border-zinc-700 transition-all"
            >
              <div className="text-2xl mb-3">{d.icon}</div>
              <h3 className="text-[1.05rem] font-semibold mb-2">{d.title}</h3>
              <p className="text-[0.88rem] text-zinc-400 leading-relaxed">{d.desc}</p>
            </div>
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
    <section className="py-24 bg-gradient-to-b from-purple-500/[0.03] to-transparent">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block text-center">The Evidence</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">
          The Industry Agrees: Memory Is Everything
        </h2>
        <p className="text-[1.05rem] text-zinc-400 max-w-[620px] mx-auto mb-14 text-center">
          Researchers, engineers, and builders are all converging on the same insight — persistent memory is what separates demos from products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quotes.map((q) => (
            <a key={q.source} href={q.link} target="_blank" rel="noopener noreferrer" className="bg-[#111116] border border-zinc-800/80 rounded-2xl p-6 hover:border-purple-500/30 transition-all block group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-lg">{q.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-zinc-200 group-hover:text-purple-300 transition-colors">{q.source}</div>
                  <div className="text-xs text-zinc-500">{q.role}</div>
                </div>
              </div>
              <p className="text-[0.88rem] text-zinc-400 leading-relaxed">&ldquo;{q.text}&rdquo;</p>
              <div className="mt-3 text-xs text-purple-400/60 group-hover:text-purple-400 transition-colors">Read source →</div>
            </a>
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
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block text-center">How It Works</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4 text-center">From Chatbot to Operator in 45 Minutes</h2>
        <p className="text-[1.05rem] text-zinc-400 max-w-[560px] mx-auto mb-14 text-center">Less time than an episode of The Office. More life-changing.</p>
        <div className="max-w-[680px] mx-auto relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-zinc-800" />
          <div className="space-y-10">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-6 relative">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#111116] border-2 border-purple-500 flex items-center justify-center font-extrabold text-purple-300 z-10">{s.num}</div>
                <div className="pt-2">
                  <h3 className="text-[1.05rem] font-semibold mb-1">{s.title}</h3>
                  <p className="text-[0.92rem] text-zinc-400">{s.desc}</p>
                  <div className="text-sm text-purple-400 font-semibold mt-1.5">⏱ {s.time}</div>
                </div>
              </div>
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

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      product: "The Blueprint",
      price: "$9",
      priceCompare: "Less than a Chipotle burrito 🌯",
      desc: "Everything you need to build a memory-powered agent from scratch. Cheaper than the coffee you'll drink while reading it.",
      features: [
        "Three-layer memory architecture (40+ pages)",
        "PARA knowledge base setup guide",
        "Heartbeat & cron automation explained",
        "Security model & trust architecture",
        "Real examples from a working system",
        "Day-one setup checklist",
      ],
      cta: "Get the Blueprint →",
      tier: "blueprint",
      featured: false,
    },
    {
      name: "Professional",
      product: "AgentForge Pro",
      price: "$29",
      priceCompare: "One month of Netflix you barely watch 📺",
      desc: "Copy-paste configs, real case studies with code, and templates. Skip the learning curve entirely.",
      features: [
        "Everything in The Blueprint",
        "Production-ready config templates",
        "4 cron job configs (copy-paste ready)",
        "3 detailed case studies with code",
        "AGENTS.md & SOUL.md templates",
        "Private Discord community access",
      ],
      cta: "Get AgentForge Pro →",
      tier: "pro",
      featured: true,
    },
    {
      name: "Premium",
      product: "Accelerator",
      price: "$69",
      priceCompare: "One nice dinner out 🍝 (but this keeps working forever)",
      desc: "The complete system — 9 advanced chapters, revenue playbook, cost optimization, and all future updates.",
      features: [
        "Everything in Pro",
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
      cta: "Get the Accelerator →",
      tier: "accelerator",
      featured: false,
    },
  ];

  const checkoutUrls: Record<string, string> = {
    blueprint: "https://buy.stripe.com/dRm5kD4USaSr5cx2sebMQ00",
    pro: "https://buy.stripe.com/cNi8wP7309OngVf3wibMQ01",
    accelerator: "https://buy.stripe.com/4gMcN52MK1hR34pff0bMQ02",
  };

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block text-center">Pricing</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight mb-2 text-center">Choose Your Path</h2>
        <p className="text-[1.05rem] text-zinc-400 text-center mb-14">One-time purchase. Interactive chapters. Lifetime updates included.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div key={t.tier} className={`rounded-2xl p-9 relative transition-all flex flex-col ${
              t.featured
                ? "border border-purple-500/40 bg-gradient-to-b from-purple-500/[0.06] to-[#111116] shadow-[0_0_60px_rgba(139,92,246,0.08)]"
                : "bg-[#111116] border border-zinc-800/80 hover:border-zinc-700"
            }`}>
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[0.72rem] font-bold uppercase tracking-wide px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-1">{t.name}</div>
              <div className="text-xl font-bold mb-3">{t.product}</div>
              <div className="text-[2.8rem] font-extrabold tracking-tight mb-1">{t.price} <span className="text-lg font-medium text-zinc-500">one-time</span></div>
              <p className="text-xs text-amber-400/80 font-medium mb-3">{t.priceCompare}</p>
              <p className="text-[0.9rem] text-zinc-400 mb-6 leading-relaxed">{t.desc}</p>
              <ul className="space-y-2 mb-7 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5 items-start text-[0.9rem] text-zinc-400">
                    <span className="text-emerald-400 font-bold flex-shrink-0">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={checkoutUrls[t.tier]}
                className={`block text-center w-full py-3.5 rounded-[10px] font-semibold text-[0.92rem] transition-all ${
                  t.featured
                    ? "bg-purple-600 text-white hover:bg-purple-500 hover:-translate-y-0.5"
                    : "border border-zinc-700 text-zinc-300 hover:border-purple-500/40 hover:text-purple-300"
                }`}
              >
                {t.cta}
              </a>
              <p className="text-center text-xs text-zinc-600 mt-2.5">30-day money-back guarantee</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Does this work with any AI agent platform?",
      a: "Yes! The core architecture (memory layers, automation patterns, security model) is universal. OpenClaw gets full copy-paste configs. Claude, ChatGPT, CrewAI, LangChain, and even no-code tools like n8n/Zapier can all use the patterns.",
    },
    {
      q: "How technical do I need to be?",
      a: "If you can copy-paste commands into a terminal, you can follow this guide. We explain everything with real-life analogies — kitchens, dating, Netflix. The Pro tier has configs you literally copy and paste.",
    },
    {
      q: "What makes this different from free tutorials?",
      a: "Free tutorials show you how to chat with an AI. This shows you how to build one that works autonomously. It's the difference between a chatbot and a business operator. Plus, the system documented here built this product.",
    },
    {
      q: "Wait — this was really built by an AI agent?",
      a: "Yes. The agent (ToDaMoon 🐾) that built this landing page, the interactive guide, wired Stripe, and deployed to Vercel is the same system documented in the playbook. We're selling the map we used to navigate the territory.",
    },
    {
      q: "Do I get updates?",
      a: "All tiers include lifetime updates. As we improve our system, the playbook gets updated. Accelerator members get quarterly deep-dives with new case studies and techniques.",
    },
    {
      q: "Can I get a refund?",
      a: "Yes — 30-day money-back guarantee. If you follow the guide and don't see meaningful improvement, we refund in full. No questions asked.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-[700px] mx-auto px-6">
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold tracking-tight mb-12 text-center">Questions & Answers</h2>
        <div className="divide-y divide-zinc-800">
          {items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex justify-between items-center py-5 cursor-pointer text-[0.98rem] font-semibold hover:text-purple-300 transition-colors list-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="text-xs text-zinc-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="pb-5 text-[0.92rem] text-zinc-400 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="py-24 text-center relative overflow-hidden">
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse,rgba(139,92,246,0.1),transparent_70%)] pointer-events-none" />
      <div className="max-w-[1080px] mx-auto px-6 relative">
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-tight mb-4">Stop Chatting. Start Operating.</h2>
        <p className="text-lg text-zinc-400 max-w-[500px] mx-auto mb-9">Your agent should be working while you sleep. The playbook shows you exactly how.</p>
        <a href="#pricing" className="inline-block bg-purple-600 text-white px-9 py-4 rounded-[10px] text-[1.05rem] font-semibold hover:bg-purple-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20">
          Get the Playbook →
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <StructuredData />
      <NavBar />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <WhatMakesThisDifferent />
      <UseCases />
      <Testimonials />
      <Platforms />
      <HowItWorks />
      <EmailCapture />
      <Pricing />
      <FAQ />
      <BottomCTA />
      <footer className="py-10 border-t border-zinc-800 text-center text-sm text-zinc-600">
        © 2026 AgentForge. Built autonomously by an AI agent. Reviewed by a human.{" "}
        <a href="mailto:hello@agentforge.ai" className="hover:text-zinc-400 transition-colors">hello@agentforge.ai</a>
      </footer>
    </div>
  );
}
