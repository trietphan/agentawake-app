/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Chapter: Why Your AI Agent Has Amnesia — AgentAwake",
  description: "Your AI agent forgets everything between sessions. This free chapter explains why — and the 3-file fix that changes everything. Works with Claude, ChatGPT, CrewAI, Cursor, and more.",
  openGraph: {
    title: "Free: Why Your AI Agent Has Amnesia",
    description: "The #1 reason AI agents fail — and the 3-file fix. Free chapter from AgentAwake.",
    images: ["/api/og"],
  },
};

function EmailCapture() {
  return (
    <div className="rounded-2xl border border-[var(--accent)]/20 bg-gradient-to-b from-[var(--accent)]/[0.04] to-[var(--surface)] p-8 text-center">
      <div className="text-2xl mb-2">📬</div>
      <h3 className="text-lg font-bold mb-2">Get Notified When We Add New Chapters</h3>
      <p className="text-sm text-[var(--text-secondary)] mb-2 max-w-sm mx-auto">
        Join 100+ builders already using the system — get new chapters and techniques delivered to your inbox. No spam, unsubscribe anytime.
      </p>
      <p className="text-xs text-[var(--accent-light)] font-semibold mb-5">Join 100+ builders already using the system</p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent)]/30"
        />
        <button
          type="submit"
          className="rounded-xl bg-[var(--accent-muted)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--accent)] transition-all hover:-translate-y-0.5 shrink-0"
        >
          Notify Me →
        </button>
      </form>
      <p className="text-[10px] text-[var(--text-tertiary)] mt-3">No credit card required · Works with any AI platform</p>
    </div>
  );
}

function UpgradeFunnel() {
  const tiers = [
    {
      emoji: "🏗️",
      name: "The Foundation",
      price: "$9",
      desc: "Everything you need to give your first agent persistent memory. Set up in one afternoon.",
      bestFor: "Getting started fast",
      href: "https://buy.stripe.com/4gM4gz0EC7GfdJ3gj4bMQ05",
    },
    {
      emoji: "🛠️",
      name: "The Operator's Toolkit",
      price: "$19",
      desc: "Production templates, automation recipes, and 3 real case studies. Build agents that run your business.",
      bestFor: "Solo operators & freelancers",
      href: "https://buy.stripe.com/4gMdR94US0dN6gB7MybMQ03",
      featured: true,
    },
    {
      emoji: "🚀",
      name: "The Complete System",
      price: "$29",
      desc: "Multi-agent orchestration, 8 platform guides, revenue playbook, and advanced security. The full arsenal.",
      bestFor: "Agencies & serious builders",
      href: "https://buy.stripe.com/5kQ14ngDAbWv5cx0k6bMQ04",
    },
  ];

  return (
    <div className="mt-16 mb-8">
      <div className="text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-2">What&apos;s Next</p>
        <h2 className="text-2xl font-extrabold tracking-tight mb-2">Loved Chapter 0? Here&apos;s what&apos;s next...</h2>
        <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">The full playbook goes 22 chapters deep — templates, configs, case studies, and the revenue playbook.</p>
        <p className="text-xs text-[var(--accent-light)] font-semibold mt-2">Join 100+ builders already using the system</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-6 flex flex-col ${
              t.featured
                ? "border-[var(--accent-light)]/35 bg-gradient-to-b from-[var(--accent)]/[0.06] to-[var(--surface)] shadow-[0_0_40px_rgba(232,119,46,0.08)]"
                : "border-[var(--border)] bg-[var(--surface)]"
            }`}
          >
            {t.featured && (
              <span className="text-xs font-bold uppercase tracking-wide text-[var(--accent-light)] bg-[var(--accent)]/10 px-2 py-1 rounded-md self-start mb-3">Most Popular</span>
            )}
            <div className="text-2xl mb-2">{t.emoji}</div>
            <h3 className="text-base font-bold mb-1">{t.name}</h3>
            <div className="text-2xl font-extrabold tracking-tight mb-1">{t.price} <span className="text-sm font-normal text-[var(--text-tertiary)]">one-time</span></div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2 flex-1">{t.desc}</p>
            <p className="text-xs text-[var(--accent-light)] font-semibold mb-4">Best for: {t.bestFor}</p>
            <a
              href={t.href}
              className={`block text-center py-3 rounded-xl text-sm font-bold transition-all ${
                t.featured
                  ? "bg-[var(--accent-muted)] text-white hover:bg-[var(--accent)]"
                  : "border border-[var(--border)] text-[var(--foreground)]/80 hover:border-[var(--accent)]/30 hover:text-[var(--accent-light)]"
              }`}
            >
              Get Instant Access →
            </a>
            <p className="text-[0.65rem] text-[var(--text-tertiary)] text-center mt-2">One-time payment · 30-day refund</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FreePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--border)]/60">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
            ← AgentAwake
          </Link>
          <Link
            href="/#pricing"
            className="rounded-lg bg-[var(--accent-muted)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--accent)] transition-all"
          >
            Get Full Playbook
          </Link>
        </div>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-12">
        {/* SEO-rich header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-5">
            ✨ FREE CHAPTER — No signup required
          </div>
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
            Why Your AI Agent Has Amnesia <span className="text-[var(--text-tertiary)]">(And the 3-File Fix)</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            You gave ChatGPT or Claude a complex task. It was brilliant. You came back the next day — and it had no idea who you were. Here's exactly why, and how to fix it in 45 minutes.
          </p>
          <div className="flex items-center gap-4 mt-4 text-xs text-[var(--text-tertiary)]">
            <span>📖 4 min read</span>
            <span>·</span>
            <span>🔓 100% Free</span>
            <span>·</span>
            <span>Works with 8+ AI platforms</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom space-y-5 text-[0.95rem] leading-relaxed text-[var(--foreground)]/80 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[var(--foreground)] [&_h2]:mt-10 [&_h2]:mb-4 [&_strong]:text-[var(--foreground)]">

          <p>Let's be honest. You downloaded ChatGPT, Claude, or some shiny AI agent tool. You had a <strong>magical</strong> first conversation. It felt like the future. Then you came back the next day and it said:</p>

          <div className="my-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5 font-mono text-sm text-red-300/80">
            "Hi! I'm Claude. How can I help you today?"
          </div>

          <p><em>Who are you?</em> We just spent two hours building a content strategy! You wrote me a 47-point business plan! YOU KNOW MY DOG'S NAME!</p>

          <p>Gone. All of it. Every conversation starts from absolute zero.</p>

          <div className="my-6 rounded-2xl border-l-4 border-[var(--accent-light)]/40 bg-[var(--accent-light)]/4 p-5">
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-[var(--accent-light)]">🍕 Real-life analogy</div>
            <div className="text-[0.95rem] leading-relaxed text-[var(--foreground)] italic">
              Imagine hiring the smartest person you've ever met. They solve three months of problems in one afternoon. Then they get blackout drunk at dinner and forget everything. Every. Single. Night. That's your AI agent without a memory system.
            </div>
          </div>

          <h2>The Three Files That Change Everything</h2>

          <p>The fix isn't complex AI infrastructure. It's not RAG pipelines or vector databases. It's <strong>three files</strong> that your agent reads on startup:</p>

          <div className="my-6 space-y-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
              <div className="text-sm font-bold text-blue-400 mb-1">📚 File 1: Knowledge Base</div>
              <p className="text-sm text-[var(--text-secondary)]">Permanent stuff. Your projects, your clients, your tech stack, your business rules. The agent reads this like a new employee reads the company handbook. Once written, it barely changes.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
              <div className="text-sm font-bold text-green-400 mb-1">📝 File 2: Daily Notes</div>
              <p className="text-sm text-[var(--text-secondary)]">What happened today. Decisions made, tasks completed, blockers hit, things to follow up on. The agent reads yesterday's notes and picks up where it left off.</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)]/50 p-5">
              <div className="text-sm font-bold text-[var(--accent-light)] mb-1">✨ File 3: Tacit Knowledge</div>
              <p className="text-sm text-[var(--text-secondary)]">The stuff that can't be Googled. "Boss hates tables." "Always explain the why." "Never deploy on Fridays." Lessons learned through experience.</p>
            </div>
          </div>

          <p>That's it. Three files. Your agent goes from "Hi, how can I help?" to "Morning — I see yesterday's deploy had issues. I already drafted a fix and it's in staging for your review."</p>

          <h2>Works With Any AI Platform</h2>

          <p>This architecture isn't locked to one tool. It works with:</p>

          <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: "⚡", name: "OpenClaw" },
              { icon: "🟣", name: "Claude" },
              { icon: "🟢", name: "ChatGPT" },
              { icon: "🚀", name: "CrewAI" },
              { icon: "🔗", name: "LangChain" },
              { icon: "⚙️", name: "n8n / Zapier" },
              { icon: "💻", name: "Cursor" },
              { icon: "🤖", name: "AutoGPT" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 px-3 py-2.5 text-sm">
                <span>{p.icon}</span>
                <span className="text-[var(--text-secondary)]">{p.name}</span>
              </div>
            ))}
          </div>

          <h2>What You'll Learn in the Full Playbook</h2>

          <div className="my-6 space-y-2">
            {[
              { ch: "Ch 1-4", title: "The complete memory architecture", desc: "Knowledge base, daily notes, and tacit knowledge — with templates" },
              { ch: "Ch 5-6", title: "Automation & security", desc: "Cron jobs, heartbeats, trust levels, and prompt injection defense" },
              { ch: "Ch 7", title: "45-minute setup guide", desc: "Day-one checklist with interactive progress tracking" },
              { ch: "Ch 8-12", title: "Copy-paste configs + case studies", desc: "Trading bot, content pipeline, idea validation engine — with real code" },
              { ch: "Ch 13-16", title: "Advanced orchestration", desc: "Multi-agent systems, bottleneck elimination, progressive trust" },
              { ch: "Ch 17-21", title: "Cost optimization & revenue", desc: "Spend $15/mo, earn $6K+/mo — with 7 proven revenue models" },
            ].map((item) => (
              <div key={item.ch} className="flex gap-4 items-start rounded-xl border border-[var(--border)]/50 bg-[var(--surface-hover)]/20 px-4 py-3">
                <span className="text-xs font-bold text-[var(--accent-light)] bg-[var(--accent)]/10 px-2 py-1 rounded shrink-0 mt-0.5">{item.ch}</span>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)]">{item.title}</div>
                  <div className="text-xs text-[var(--text-tertiary)]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 rounded-2xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[var(--accent-light)]">
              <span className="text-lg">🤯</span> The meta part
            </div>
            <div className="text-sm leading-relaxed text-[var(--foreground)]/80">
              This entire product — the landing page, the interactive chapters, the payment system — was <strong>built by the exact agent system documented in this playbook</strong>. We're selling the map we used to navigate the territory.
            </div>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-12 mb-8">
          <EmailCapture />
        </div>

        {/* Upgrade Funnel */}
        <UpgradeFunnel />

        {/* CTA */}
        <div className="text-center mt-12 pb-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Fix the Amnesia?</h2>
          <p className="text-[var(--text-secondary)] mb-6">22 interactive chapters. 8 platforms. Real code. Starting at $9.</p>
          <Link
            href="/#pricing"
            className="inline-block bg-[var(--accent-muted)] text-white px-9 py-4 rounded-xl text-base font-bold hover:bg-[var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/10"
          >
            Get the Full Playbook →
          </Link>
          <p className="text-xs text-[var(--text-tertiary)] mt-3">One-time purchase · 30-day money-back guarantee</p>
        </div>
      </article>

      <footer className="py-8 border-t border-[var(--border)] text-center text-xs text-[var(--text-tertiary)]">
        © 2026 AgentAwake · Built by an AI agent · <Link href="/" className="hover:text-[var(--text-secondary)]">Home</Link>
      </footer>
    </div>
  );
}
