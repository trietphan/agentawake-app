"use client";

import { useState } from "react";
import Link from "next/link";

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
  free: "text-zinc-400",
  blueprint: "text-purple-400",
  pro: "text-blue-400",
  accelerator: "text-amber-400",
};

export default function GuideNav({ chapters, currentSlug, userTier }: GuideNavProps) {
  const [open, setOpen] = useState(false);
  const canAccess = (tier: string) => tierLevel[userTier] >= tierLevel[tier];

  return (
    <>
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0a0a0e]/95 backdrop-blur-md">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm font-bold text-zinc-400 hover:text-zinc-200 transition-colors">
            ← AgentForge
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-lg bg-zinc-800/60 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-700/60 transition-colors"
          >
            <span className="text-base">☰</span>
            <span className="hidden sm:inline">Chapters</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />

          {/* Drawer */}
          <div className="relative ml-auto w-full max-w-sm bg-[#0c0c10] border-l border-zinc-800 overflow-y-auto animate-slide-in">
            <div className="sticky top-0 flex items-center justify-between border-b border-zinc-800 bg-[#0c0c10] px-5 py-4">
              <h2 className="text-base font-bold text-zinc-100">📖 Chapters</h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                ✕
              </button>
            </div>

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
                        ? "bg-purple-500/15 text-purple-300 font-medium"
                        : locked
                          ? "text-zinc-600 hover:text-zinc-500"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                    }`}
                  >
                    <span className="text-lg shrink-0">{locked ? "🔒" : ch.emoji}</span>
                    <div className="min-w-0">
                      <div className={`truncate ${active ? "" : ""}`}>
                        {ch.number}. {ch.title}
                      </div>
                      <div className={`text-xs mt-0.5 ${tierColors[ch.requiredTier] || "text-zinc-500"}`}>
                        {ch.readTime} · {ch.requiredTier}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-zinc-800">
              <Link
                href="/#pricing"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-xl bg-purple-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-purple-500 transition-colors"
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
