"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]/60">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-[62px] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e8772e] via-[#f0a868] to-[#f5c98a] flex items-center justify-center shadow-lg shadow-[var(--accent)]/15">
            <span className="text-[15px]">⚡</span>
          </span>
          <span className="text-[1.05rem] sm:text-[1.15rem] font-extrabold bg-gradient-to-r from-[#e8772e] via-[#f0a868] to-[#f5c98a] bg-clip-text text-transparent truncate">
            AgentAwake
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-7">
          <Link href="/templates" className="hidden sm:inline text-[var(--accent-light)] text-sm font-semibold">
            Templates
          </Link>
          <Link href="/templates/submit" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">
            Submit a Template
          </Link>
          <Link href="/blog" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">
            Blog
          </Link>
          <MobileNav
            items={[
              { href: "/templates", label: "Templates" },
              { href: "/templates/submit", label: "Submit a Template" },
              { href: "/blog", label: "Blog" },
              { href: "/chapters", label: "Chapters" },
              { href: "/free", label: "Free Chapter" },
              { href: "/#pricing", label: "Playbook" },
            ]}
          />
          <ThemeToggle />
          <Link
            href="/#pricing"
            className="bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-3.5 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get the Playbook
          </Link>
        </div>
      </div>
    </nav>
  );
}

const PLATFORMS = ["Claude", "ChatGPT", "GPT-4", "CrewAI", "LangChain", "OpenClaw", "Other"];
const TIERS = [
  { label: "Free", value: "free" },
  { label: "$5", value: "$5" },
  { label: "$9", value: "$9" },
];

type FormState = {
  templateName: string;
  description: string;
  platform: string;
  tierSuggestion: string;
  authorName: string;
  authorEmail: string;
  authorTwitter: string;
  agentsContent: string;
  soulContent: string;
  memoryContent: string;
  terms: boolean;
};

const INITIAL: FormState = {
  templateName: "", description: "", platform: "", tierSuggestion: "",
  authorName: "", authorEmail: "", authorTwitter: "",
  agentsContent: "", soulContent: "", memoryContent: "", terms: false,
};

export default function SubmitTemplatePage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function set(key: keyof FormState, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.terms) {
      setErrorMsg("You must agree to the terms to submit.");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/templates/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateName: form.templateName,
          description: form.description,
          platform: form.platform,
          tierSuggestion: form.tierSuggestion,
          authorName: form.authorName,
          authorEmail: form.authorEmail,
          authorTwitter: form.authorTwitter,
          agentsContent: form.agentsContent,
          soulContent: form.soulContent,
          memoryContent: form.memoryContent,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm(INITIAL);
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-x-hidden">
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-10 text-center relative overflow-hidden">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(232,119,46,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-[680px] mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--accent-light)] bg-[var(--accent)]/10 border border-[var(--accent-light)]/20 mb-5">
            <span className="text-base">🛒</span>
            Community Marketplace
          </div>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4">
            Submit Your{" "}
            <span className="bg-gradient-to-r from-[#e8772e] via-[#f0a868] to-[#f5c98a] bg-clip-text text-transparent">
              Agent Template
            </span>
          </h1>
          <p className="text-base max-w-[500px] mx-auto leading-relaxed text-[var(--text-secondary)]">
            Share your best agent memory configurations with the community.
            You&apos;ll earn <strong className="text-[var(--accent-light)]">70% of revenue</strong> from every sale.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="max-w-[680px] mx-auto px-6">
          {status === "success" ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-xl font-bold mb-2 text-emerald-400">Template Submitted!</h2>
              <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">
                We&apos;ll review it within 3–5 business days and send you a confirmation email.
                If published, you&apos;ll earn 70% of all sales.
              </p>
              <Link
                href="/templates"
                className="inline-block bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-7 py-3 rounded-[10px] text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all"
              >
                Browse Templates →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Template Info */}
              <div className="bg-[var(--card-bg,#111)] border border-[var(--border)]/60 rounded-2xl p-6 space-y-5">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-light)]">Template Info</h2>

                <div>
                  <label className={labelClass}>Template Name <span className="text-[var(--accent)]">*</span></label>
                  <input
                    type="text"
                    value={form.templateName}
                    onChange={(e) => set("templateName", e.target.value)}
                    placeholder="e.g. Real Estate Investor Agent"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Description <span className="text-[var(--accent)]">*</span></label>
                  <textarea
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="What does this agent do? Who is it for? What makes it useful?"
                    required
                    rows={4}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Platform <span className="text-[var(--accent)]">*</span></label>
                    <select
                      value={form.platform}
                      onChange={(e) => set("platform", e.target.value)}
                      required
                      className={inputClass}
                    >
                      <option value="">Select platform…</option>
                      {PLATFORMS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Suggested Tier <span className="text-[var(--accent)]">*</span></label>
                    <select
                      value={form.tierSuggestion}
                      onChange={(e) => set("tierSuggestion", e.target.value)}
                      required
                      className={inputClass}
                    >
                      <option value="">Select tier…</option>
                      {TIERS.map((t) => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="bg-[var(--card-bg,#111)] border border-[var(--border)]/60 rounded-2xl p-6 space-y-5">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-light)]">Author Info</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Your Name <span className="text-[var(--accent)]">*</span></label>
                    <input
                      type="text"
                      value={form.authorName}
                      onChange={(e) => set("authorName", e.target.value)}
                      placeholder="Jane Smith"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Your Email <span className="text-[var(--accent)]">*</span></label>
                    <input
                      type="email"
                      value={form.authorEmail}
                      onChange={(e) => set("authorEmail", e.target.value)}
                      placeholder="jane@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Twitter/X Handle <span className="text-[var(--text-tertiary)] font-normal">(optional)</span></label>
                  <input
                    type="text"
                    value={form.authorTwitter}
                    onChange={(e) => set("authorTwitter", e.target.value)}
                    placeholder="@yourhandle"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Template Files */}
              <div className="bg-[var(--card-bg,#111)] border border-[var(--border)]/60 rounded-2xl p-6 space-y-5">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--accent-light)]">Template Files</h2>
                  <p className="text-xs text-[var(--text-tertiary)] mt-1">Paste the content of each file. These become your agent&apos;s memory configuration.</p>
                </div>

                <div>
                  <label className={labelClass}>AGENTS.md <span className="text-[var(--accent)]">*</span></label>
                  <p className="text-xs text-[var(--text-tertiary)] mb-2">Defines roles, goals, and capabilities of the agent</p>
                  <textarea
                    value={form.agentsContent}
                    onChange={(e) => set("agentsContent", e.target.value)}
                    placeholder="# AGENTS.md&#10;&#10;## Role&#10;You are a..."
                    required
                    rows={6}
                    className={`${inputClass} font-mono text-xs`}
                  />
                </div>

                <div>
                  <label className={labelClass}>SOUL.md <span className="text-[var(--accent)]">*</span></label>
                  <p className="text-xs text-[var(--text-tertiary)] mb-2">Personality, tone, values, and communication style</p>
                  <textarea
                    value={form.soulContent}
                    onChange={(e) => set("soulContent", e.target.value)}
                    placeholder="# SOUL.md&#10;&#10;## Identity&#10;..."
                    required
                    rows={6}
                    className={`${inputClass} font-mono text-xs`}
                  />
                </div>

                <div>
                  <label className={labelClass}>MEMORY.md <span className="text-[var(--accent)]">*</span></label>
                  <p className="text-xs text-[var(--text-tertiary)] mb-2">Memory structure, what to track, and how to persist context</p>
                  <textarea
                    value={form.memoryContent}
                    onChange={(e) => set("memoryContent", e.target.value)}
                    placeholder="# MEMORY.md&#10;&#10;## Session Memory&#10;..."
                    required
                    rows={6}
                    className={`${inputClass} font-mono text-xs`}
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="bg-[var(--card-bg,#111)] border border-[var(--border)]/60 rounded-2xl p-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.terms}
                    onChange={(e) => set("terms", e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-[#e8772e] cursor-pointer"
                  />
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors">
                    I agree that AgentAwake may edit, publish, and sell this template.
                    I&apos;ll receive <strong className="text-[var(--accent-light)]">70% of revenue</strong> from sales of my template.
                    I confirm this is my original work.
                  </span>
                </label>
              </div>

              {/* Error */}
              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-sm text-red-400">
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white py-4 rounded-[12px] text-base font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {status === "submitting" ? "Submitting…" : "Submit Template →"}
              </button>

              <p className="text-center text-xs text-[var(--text-tertiary)]">
                We review every submission. Accepted templates go live within 1–2 weeks.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer className="py-10 border-t border-[var(--border)] text-center text-sm text-[var(--text-tertiary)]">
        © 2026 AgentAwake. Built autonomously by an AI agent. Reviewed by a human.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-[var(--text-secondary)] transition-colors">
          hello@agentawake.com
        </a>
      </footer>
    </div>
  );
}

const labelClass = "block text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wide mb-1.5";
const inputClass = "w-full bg-[var(--background)] border border-[var(--border)]/60 rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)]/60 focus:ring-1 focus:ring-[var(--accent)]/30 transition-colors resize-y";
