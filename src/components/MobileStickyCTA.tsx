"use client";

import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)]/70 bg-[var(--background)]/95 backdrop-blur-xl p-3 pb-[max(12px,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-[1080px] flex gap-2">
        <Link href="/free" className="flex-1 text-center py-3 rounded-xl border border-[var(--border-hover)] text-[var(--foreground)] text-sm font-semibold hover:border-[var(--accent)]/40 transition-colors">
          Free Chapter
        </Link>
        <a href="#pricing" className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-[var(--accent-muted)] to-[var(--accent)] text-white text-sm font-semibold shadow-lg shadow-[var(--accent)]/10">
          Get Playbook
        </a>
      </div>
    </div>
  );
}
