import Link from "next/link";
import HealthCheckTool from "@/components/HealthCheckTool";

export default function HealthCheckPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]/60">
        <div className="max-w-[980px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-[var(--accent)] text-xl">⚡</span>
            <span className="font-bold text-[var(--foreground)]">AgentAwake</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/health-check" className="text-[var(--accent-light)] text-sm font-semibold">Health Check</Link>
            <Link href="/blog" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Blog</Link>
            <Link href="/templates" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Templates</Link>
            <Link href="/#pricing" className="bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all">
              Get the Playbook
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-14 text-center px-6">
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-5 px-3 py-1.5 rounded-full border border-[var(--accent-light)]/20 bg-[var(--accent)]/10">
            Free Diagnostic Tool
          </span>
          <h1 className="text-[clamp(2.4rem,6vw,3.8rem)] font-extrabold leading-tight tracking-tight mb-5">
            Agent Health Check 🩺
          </h1>
          <p className="text-[1.15rem] text-[var(--foreground)]/70 leading-relaxed max-w-xl mx-auto mb-3">
            Is your AI agent configured for peak performance?
          </p>
          <p className="text-[1rem] text-[var(--foreground)]/50 max-w-lg mx-auto mb-10">
            Paste your agent config files below and get an instant score across 5 key dimensions — plus specific recommendations to fix gaps.{" "}
            <strong className="text-[var(--foreground)]/70">Find out in 30 seconds.</strong>
          </p>

          {/* Score dimensions preview */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["🧠 Identity", "💾 Memory", "🔀 Task Routing", "📊 Context", "🔒 Security"].map(d => (
              <span key={d} className="text-xs px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)]/60 text-[var(--text-tertiary)] font-medium">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tool */}
      <HealthCheckTool />

      {/* Footer */}
      <footer className="border-t border-[var(--border)]/40 py-8 text-center text-xs text-[var(--text-tertiary)]">
        <p>
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">AgentAwake</Link>
          {" · "}
          <Link href="/blog" className="hover:text-[var(--foreground)] transition-colors">Blog</Link>
          {" · "}
          <Link href="/templates" className="hover:text-[var(--foreground)] transition-colors">Templates</Link>
          {" · "}
          <a href="mailto:hello@agentawake.com" className="hover:text-[var(--foreground)] transition-colors">hello@agentawake.com</a>
        </p>
      </footer>
    </div>
  );
}
