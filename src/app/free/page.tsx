/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Chapter: Why Your AI Agent Has Amnesia — AgentForge",
  description: "Your AI agent forgets everything between sessions. This free chapter explains why — and the 3-file fix that changes everything. Works with Claude, ChatGPT, CrewAI, Cursor, and more.",
  openGraph: {
    title: "Free: Why Your AI Agent Has Amnesia",
    description: "The #1 reason AI agents fail — and the 3-file fix. Free chapter from AgentForge.",
    images: ["/api/og"],
  },
};

function EmailCapture() {
  return (
    <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-500/[0.06] to-[#111116] p-8 text-center">
      <div className="text-2xl mb-2">📬</div>
      <h3 className="text-lg font-bold mb-2">Get the Full Architecture Guide Free</h3>
      <p className="text-sm text-zinc-400 mb-5 max-w-sm mx-auto">
        Join 0→1 builders getting the memory architecture cheat sheet + weekly agent techniques. No spam, unsubscribe anytime.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 rounded-xl bg-zinc-900 border border-zinc-700 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none focus:ring-1 focus:ring-purple-500/30"
        />
        <button
          type="submit"
          className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-bold text-white hover:bg-purple-500 transition-all hover:-translate-y-0.5 shrink-0"
        >
          Send It →
        </button>
      </form>
      <p className="text-[10px] text-zinc-600 mt-3">No credit card required · Works with any AI platform</p>
    </div>
  );
}

export default function FreePage() {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#07070a]/90 backdrop-blur-xl border-b border-zinc-800/60">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold text-zinc-400 hover:text-zinc-200 transition-colors">
            ← AgentForge
          </Link>
          <Link
            href="/#pricing"
            className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-bold text-white hover:bg-purple-500 transition-all"
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
            Why Your AI Agent Has Amnesia <span className="text-zinc-500">(And the 3-File Fix)</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            You gave ChatGPT or Claude a complex task. It was brilliant. You came back the next day — and it had no idea who you were. Here's exactly why, and how to fix it in 45 minutes.
          </p>
          <div className="flex items-center gap-4 mt-4 text-xs text-zinc-600">
            <span>📖 4 min read</span>
            <span>·</span>
            <span>🔓 100% Free</span>
            <span>·</span>
            <span>Works with 8+ AI platforms</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose-custom space-y-5 text-[0.95rem] leading-relaxed text-zinc-300 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-zinc-100 [&_h2]:mt-10 [&_h2]:mb-4 [&_strong]:text-zinc-100">

          <p>Let's be honest. You downloaded ChatGPT, Claude, or some shiny AI agent tool. You had a <strong>magical</strong> first conversation. It felt like the future. Then you came back the next day and it said:</p>

          <div className="my-6 rounded-xl border border-red-500/20 bg-red-500/5 p-5 font-mono text-sm text-red-300/80">
            "Hi! I'm Claude. How can I help you today?"
          </div>

          <p><em>Who are you?</em> We just spent two hours building a content strategy! You wrote me a 47-point business plan! YOU KNOW MY DOG'S NAME!</p>

          <p>Gone. All of it. Every conversation starts from absolute zero.</p>

          <div className="my-6 rounded-2xl border-l-4 border-amber-400/60 bg-amber-400/5 p-5">
            <div className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-400">🍕 Real-life analogy</div>
            <div className="text-[0.95rem] leading-relaxed text-zinc-200 italic">
              Imagine hiring the smartest person you've ever met. They solve three months of problems in one afternoon. Then they get blackout drunk at dinner and forget everything. Every. Single. Night. That's your AI agent without a memory system.
            </div>
          </div>

          <h2>The Three Files That Change Everything</h2>

          <p>The fix isn't complex AI infrastructure. It's not RAG pipelines or vector databases. It's <strong>three files</strong> that your agent reads on startup:</p>

          <div className="my-6 space-y-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="text-sm font-bold text-blue-400 mb-1">📚 File 1: Knowledge Base</div>
              <p className="text-sm text-zinc-400">Permanent stuff. Your projects, your clients, your tech stack, your business rules. The agent reads this like a new employee reads the company handbook. Once written, it barely changes.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="text-sm font-bold text-green-400 mb-1">📝 File 2: Daily Notes</div>
              <p className="text-sm text-zinc-400">What happened today. Decisions made, tasks completed, blockers hit, things to follow up on. The agent reads yesterday's notes and picks up where it left off.</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
              <div className="text-sm font-bold text-purple-400 mb-1">✨ File 3: Tacit Knowledge</div>
              <p className="text-sm text-zinc-400">The stuff that can't be Googled. "Boss hates tables." "Always explain the why." "Never deploy on Fridays." Lessons learned through experience.</p>
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
              <div key={p.name} className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/30 px-3 py-2.5 text-sm">
                <span>{p.icon}</span>
                <span className="text-zinc-400">{p.name}</span>
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
              <div key={item.ch} className="flex gap-4 items-start rounded-xl border border-zinc-800/50 bg-zinc-900/20 px-4 py-3">
                <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2 py-1 rounded shrink-0 mt-0.5">{item.ch}</span>
                <div>
                  <div className="text-sm font-semibold text-zinc-200">{item.title}</div>
                  <div className="text-xs text-zinc-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-bold text-purple-300">
              <span className="text-lg">🤯</span> The meta part
            </div>
            <div className="text-sm leading-relaxed text-zinc-300">
              This entire product — the landing page, the interactive chapters, the payment system — was <strong>built by the exact agent system documented in this playbook</strong>. We're selling the map we used to navigate the territory.
            </div>
          </div>
        </div>

        {/* Email capture */}
        <div className="mt-12 mb-8">
          <EmailCapture />
        </div>

        {/* CTA */}
        <div className="text-center mt-12 pb-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Fix the Amnesia?</h2>
          <p className="text-zinc-400 mb-6">22 interactive chapters. 8 platforms. Real code. Starting at $9.</p>
          <Link
            href="/#pricing"
            className="inline-block bg-purple-600 text-white px-9 py-4 rounded-xl text-base font-bold hover:bg-purple-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Get the Full Playbook →
          </Link>
          <p className="text-xs text-zinc-600 mt-3">One-time purchase · 30-day money-back guarantee</p>
        </div>
      </article>

      <footer className="py-8 border-t border-zinc-800 text-center text-xs text-zinc-600">
        © 2026 AgentForge · Built by an AI agent · <Link href="/" className="hover:text-zinc-400">Home</Link>
      </footer>
    </div>
  );
}
