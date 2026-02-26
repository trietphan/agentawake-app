"use client";
import { useState, useEffect } from "react";

export default function ExitIntent() {
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Don't show if already dismissed this session, or on mobile
    if (sessionStorage.getItem("exit_dismissed") || window.innerWidth < 768) return;

    const handler = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) {
        setShown(true);
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, [dismissed]);

  const dismiss = () => {
    setDismissed(true);
    setShown(false);
    // Only block for this session — resets when tab closes
    sessionStorage.setItem("exit_dismissed", "1");
  };

  if (!shown) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 max-w-md mx-4 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-[var(--text-tertiary)] hover:text-[var(--foreground)] text-xl"
        >
          ×
        </button>
        <div className="text-4xl mb-4">🧠</div>
        <h3 className="text-xl font-bold mb-2">Wait — grab the free chapter first</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          Chapter 0 teaches you the three-layer memory architecture. No email required. No catch.
        </p>
        <a
          href="/free"
          className="inline-block w-full bg-[var(--accent-muted)] text-white py-3.5 rounded-xl text-sm font-bold hover:bg-[var(--accent)] transition-all mb-3"
        >
          Read Chapter 0 Free →
        </a>
        <button
          onClick={dismiss}
          className="text-xs text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
        >
          No thanks, I&apos;ll figure it out myself
        </button>
      </div>
    </div>
  );
}
