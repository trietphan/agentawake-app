"use client";

import { useState } from "react";

export default function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-xl border border-[var(--border)] bg-[#0d1117] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-[var(--border)]/50 bg-[var(--surface)]/30">
        {lang && <span className="text-[0.65rem] font-mono text-[var(--text-tertiary)] uppercase">{lang}</span>}
        <button
          onClick={copy}
          className="text-[0.7rem] text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors px-2 py-1 rounded"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-4 text-[0.8rem] sm:text-[0.85rem] leading-relaxed whitespace-pre-wrap break-words word-break-break-word overflow-hidden">
        <code className="text-emerald-300/90 whitespace-pre-wrap break-words word-break-break-word">{code}</code>
      </pre>
    </div>
  );
}
