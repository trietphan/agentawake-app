"use client";

import { useState, useEffect } from "react";

interface TemplateEmailGateProps {
  slug: string;
  title: string;
  files: string[];
}

const STORAGE_KEY = "agentawake_unlocked_templates";

function getUnlocked(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function markUnlocked(slug: string) {
  const current = getUnlocked();
  if (!current.includes(slug)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, slug]));
  }
}

export default function TemplateEmailGate({ slug, title, files }: TemplateEmailGateProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (getUnlocked().includes(slug)) {
      setUnlocked(true);
    }
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: `template-${slug}`,
          template: title,
        }),
      });

      if (res.ok || res.status === 409) {
        // 409 = already subscribed — still grant access
        markUnlocked(slug);
        setUnlocked(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) {
    return (
      <div className="rounded-2xl border border-[var(--accent)]/20 bg-gradient-to-b from-[var(--accent)]/5 to-[var(--surface)] p-8 text-center">
        <div className="h-6 w-32 bg-[var(--surface-hover)] rounded animate-pulse mx-auto mb-4" />
        <div className="h-12 bg-[var(--surface-hover)] rounded-xl animate-pulse" />
      </div>
    );
  }

  if (unlocked) {
    return (
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-emerald-500/15 flex items-center justify-center text-xl">
            ✅
          </div>
          <div>
            <div className="font-bold text-emerald-400">Download Unlocked!</div>
            <div className="text-sm text-[var(--text-secondary)]">All files are ready for download</div>
          </div>
        </div>
        <div className="space-y-2.5">
          {files.map((file) => (
            <a
              key={file}
              href={`/templates/${slug}/${file}`}
              download
              className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-[var(--text-tertiary)] text-sm font-mono group-hover:text-emerald-400 transition-colors">
                  📄
                </span>
                <span className="text-sm font-medium font-mono">{file}</span>
              </div>
              <span className="text-xs text-[var(--accent-light)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Download ↓
              </span>
            </a>
          ))}
        </div>
        <p className="text-xs text-[var(--text-tertiary)] mt-4 text-center">
          Files are Markdown (.md) — open in any text editor, or paste directly into your AI platform.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--accent)]/20 bg-gradient-to-b from-[var(--accent)]/5 to-[var(--surface)] p-8">
      <div className="text-center mb-6">
        <div className="text-2xl mb-2">📧</div>
        <h3 className="font-bold text-lg mb-1">Get Free Download</h3>
        <p className="text-sm text-[var(--text-secondary)]">
          Enter your email to unlock all {files.length} files — no spam, just the goods.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent)]/50 focus:ring-1 focus:ring-[var(--accent)]/25 transition-all text-sm"
        />
        {error && (
          <p className="text-xs text-red-400 px-1">{error}</p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        >
          {loading ? "Unlocking…" : "Unlock Free Download →"}
        </button>
      </form>
      <p className="text-[0.7rem] text-[var(--text-tertiary)] text-center mt-3">
        No spam. Unsubscribe any time. Your email joins the AgentAwake newsletter.
      </p>
    </div>
  );
}
