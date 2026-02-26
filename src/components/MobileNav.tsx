"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNav({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden relative z-[70]">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--border-hover)] transition-colors relative z-[72]"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
        )}
      </button>
      {open && (
        <>
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-[69]"
          />
          <div className="absolute top-full left-0 right-0 mt-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-3 flex flex-col gap-2 animate-fadeIn shadow-xl z-[71]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[var(--foreground)]/80 hover:text-[var(--accent-light)] text-sm font-medium py-3 px-3 min-h-[44px] rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
