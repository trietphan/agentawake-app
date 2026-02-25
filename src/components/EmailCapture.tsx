"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/[0.06] via-[var(--accent-light)]/[0.04] to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-[var(--accent)]/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-28 -right-10 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-blob-delay" />

      <div className="max-w-[980px] mx-auto px-6 relative">
        <div className="rounded-3xl border border-[var(--border)]/60 bg-[var(--surface)]/90 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_80px_rgba(232,119,46,0.08)]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-4 px-3 py-1.5 rounded-full border border-[var(--accent-light)]/20 bg-[var(--accent)]/10 animate-fadeIn">
                Free Starter Kit
              </span>
              <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight mb-4">
                Start Free — Build an Agent That Actually Remembers
              </h2>
              <p className="text-[1.05rem] text-[var(--foreground)]/80 leading-relaxed mb-6">
                Grab the exact templates we use in production: <strong className="text-white">AGENTS.md</strong>, <strong className="text-white">SOUL.md</strong>, and <strong className="text-white">MEMORY.md</strong> + Chapter 0 free.
                If your AI currently has goldfish memory, this fixes it fast.
              </p>

              <div className="space-y-3 text-sm text-[var(--foreground)]/80">
                <p className="flex items-start gap-2"><span className="text-emerald-400">✓</span> Copy-paste templates you can use today</p>
                <p className="flex items-start gap-2"><span className="text-emerald-400">✓</span> 15-minute setup walkthrough</p>
                <p className="flex items-start gap-2"><span className="text-emerald-400">✓</span> No fluff. Just working architecture</p>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-7 text-center">
                  <p className="text-emerald-300 font-semibold text-lg">🎉 Check your inbox! Templates are on the way.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-white placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-light)]/40 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-7 py-4 rounded-xl text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/15"
                  >
                    Get Free Templates →
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">No spam. Unsubscribe anytime. We respect your inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
