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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.04] to-transparent pointer-events-none" />
      <div className="max-w-[600px] mx-auto px-6 text-center relative">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3.5 block">Free Starter Kit</span>
        <h2 className="text-[clamp(1.8rem,4vw,2.4rem)] font-bold leading-tight tracking-tight mb-4">
          Start Free — Get the Memory Architecture Template
        </h2>
        <p className="text-[1.05rem] text-zinc-400 mb-8 leading-relaxed">
          Get the <strong className="text-zinc-200">AGENTS.md</strong>, <strong className="text-zinc-200">SOUL.md</strong>, and <strong className="text-zinc-200">MEMORY.md</strong> templates + Chapter 0 free. Set up persistent memory in 15 minutes.
        </p>
        {status === "success" ? (
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <p className="text-emerald-400 font-semibold">🎉 Check your inbox! Templates are on the way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-[10px] bg-[#111116] border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500/50 text-sm"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-7 py-3.5 rounded-[10px] text-sm font-semibold hover:bg-purple-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 whitespace-nowrap"
            >
              Get Free Templates →
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
        )}
        <p className="mt-4 text-xs text-zinc-600">No spam. Unsubscribe anytime. We respect your inbox.</p>
      </div>
    </section>
  );
}
