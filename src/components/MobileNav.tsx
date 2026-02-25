"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNav({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--border-hover)] transition-colors"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[var(--surface)] border-b border-[var(--border)] p-4 flex flex-col gap-3 animate-fadeIn z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[var(--foreground)]/80 hover:text-[var(--accent-light)] text-sm font-medium py-2 px-3 rounded-lg hover:bg-[var(--surface-hover)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
