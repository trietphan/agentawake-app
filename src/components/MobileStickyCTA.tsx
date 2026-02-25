"use client";

import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-700/70 bg-[#0b0b12]/95 backdrop-blur-xl p-3 pb-[max(12px,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-[1080px] flex gap-2">
        <Link href="/free" className="flex-1 text-center py-3 rounded-xl border border-zinc-600 text-zinc-200 text-sm font-semibold">
          Free Chapter
        </Link>
        <a href="#pricing" className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-fuchsia-500/20">
          Get Playbook
        </a>
      </div>
    </div>
  );
}
