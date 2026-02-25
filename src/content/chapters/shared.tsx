import React from "react";

export function Callout({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
      <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[var(--accent-light)]">
        <span className="text-lg">{emoji}</span> {title}
      </div>
      <div className="text-sm leading-relaxed text-[var(--foreground)]/80">{children}</div>
    </div>
  );
}

export function Analogy({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border-l-4 border-[var(--accent-light)]/40 bg-[var(--accent-light)]/4 p-5">
      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-[var(--accent-light)]">🍕 Real-life analogy</div>
      <div className="text-[0.95rem] leading-relaxed text-[var(--foreground)] italic">{children}</div>
    </div>
  );
}

export function Code({ title, children }: { title?: string; children: string }) {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-[var(--border)] bg-[#0d1117]">
      {title && (
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2.5 bg-[var(--surface-hover)]/50">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-[var(--text-tertiary)] font-mono">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-[0.82rem] leading-relaxed text-emerald-300/90 font-mono">{children}</pre>
    </div>
  );
}
