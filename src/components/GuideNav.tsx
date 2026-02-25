"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

interface Chapter {
  slug: string;
  number: number;
  title: string;
  emoji: string;
  requiredTier: string;
  readTime: string;
}

interface GuideNavProps {
  chapters: Chapter[];
  currentSlug: string;
  userTier: string;
}

const tierLevel: Record<string, number> = { free: 0, blueprint: 1, pro: 2, accelerator: 3 };
const tierColors: Record<string, string> = {
  free: "text-[var(--text-secondary)]",
  blueprint: "text-[var(--accent-light)]",
  pro: "text-blue-400",
  accelerator: "text-[var(--accent-light)]",
};

export default function GuideNav({ chapters, currentSlug, userTier }: GuideNavProps) {
  const [open, setOpen] = useState(false);
  const canAccess = (tier: string) => tierLevel[userTier] >= tierLevel[tier];

  const navContent = (
    <nav className="p-3 space-y-0.5">
      {chapters.map((ch) => {
        const active = ch.slug === currentSlug;
        const locked = !canAccess(ch.requiredTier);

        return (
          <Link
            key={ch.slug}
            href={locked ? "/#pricing" : `/guide/${ch.slug}`}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
              active
                ? "bg-[var(--accent)]/15 text-[var(--accent-light)] font-medium"
                : locked
                  ? "text-[var(--text-tertiary)] hover:text-[var(--text-tertiary)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]/50"
            }`}
          >
            <span className="text-lg shrink-0">{locked ? "🔒" : ch.emoji}</span>
            <div className="min-w-0">
              <div className={`truncate ${active ? "" : ""}`}>
                {ch.number}. {ch.title}
              </div>
              <div className={`text-xs mt-0.5 ${tierColors[ch.requiredTier] || "text-[var(--text-tertiary)]"}`}>
                {ch.readTime} · {ch.requiredTier}
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors">
            ← AgentAwake
          </Link>
          <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Hamburger: only on smaller screens */}
          <button
            onClick={() => setOpen(true)}
            className="flex xl:hidden items-center gap-2 rounded-lg bg-[var(--surface-hover)]/60 px-3 py-1.5 text-sm text-[var(--foreground)]/80 hover:bg-zinc-700/60 transition-colors"
          >
            <span className="text-base">☰</span>
            <span className="hidden sm:inline">Chapters</span>
          </button>
          </div>
        </div>
      </div>

      {/* Desktop persistent sidebar (xl+) */}
      <aside className="hidden xl:block fixed top-[53px] left-0 w-72 h-[calc(100vh-53px)] border-r border-[var(--border)]/60 bg-[var(--background)] overflow-y-auto z-40">
        <div className="px-4 pt-5 pb-2">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)]">📖 Chapters</h2>
        </div>
        {navContent}
        <div className="p-4 border-t border-[var(--border)]">
          <Link
            href="/#pricing"
            className="block w-full text-center rounded-xl bg-[var(--accent-muted)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--accent)] transition-colors"
          >
            Unlock All Chapters →
          </Link>
        </div>
      </aside>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex xl:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Drawer */}
          <div className="relative ml-auto w-full max-w-sm bg-[var(--surface)] border-l border-[var(--border)] overflow-y-auto animate-slide-in">
            <div className="sticky top-0 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-5 py-4">
              <h2 className="text-base font-bold text-[var(--foreground)]">📖 Chapters</h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors"
              >
                ✕
              </button>
            </div>

            {navContent}

            <div className="p-4 border-t border-[var(--border)]">
              <Link
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-xl bg-[var(--accent-muted)] px-4 py-2.5 text-sm font-bold text-white hover:bg-[var(--accent)] transition-colors"
              >
                Unlock All Chapters →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
