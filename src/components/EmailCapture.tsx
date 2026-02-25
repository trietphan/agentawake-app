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
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.08] via-amber-500/[0.05] to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-orange-500/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-28 -right-10 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-blob-delay" />

      <div className="max-w-[980px] mx-auto px-6 relative">
        <div className="rounded-3xl border border-zinc-700/60 bg-[#0f0f14]/85 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_80px_rgba(139,92,246,0.12)]">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-300 mb-4 px-3 py-1.5 rounded-full border border-orange-400/30 bg-orange-500/10 animate-fadeIn">
                Free Starter Kit
              </span>
              <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-tight tracking-tight mb-4">
                Start Free — Build an Agent That Actually Remembers
              </h2>
              <p className="text-[1.05rem] text-zinc-300 leading-relaxed mb-6">
                Grab the exact templates we use in production: <strong className="text-white">AGENTS.md</strong>, <strong className="text-white">SOUL.md</strong>, and <strong className="text-white">MEMORY.md</strong> + Chapter 0 free.
                If your AI currently has goldfish memory, this fixes it fast.
              </p>

              <div className="space-y-3 text-sm text-zinc-300">
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
                    className="w-full px-5 py-4 rounded-xl bg-[var(--surface)] border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-orange-400/60 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white px-7 py-4 rounded-xl text-sm font-semibold hover:from-orange-500 hover:to-amber-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25"
                  >
                    Get Free Templates →
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
              <p className="mt-4 text-xs text-zinc-500">No spam. Unsubscribe anytime. We respect your inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
