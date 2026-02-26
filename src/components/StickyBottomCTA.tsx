"use client";
import { useState, useEffect } from "react";

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[var(--background)]/95 backdrop-blur-lg border-t border-[var(--border)] p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <a
        href="#pricing"
        className="block w-full text-center bg-gradient-to-r from-[var(--accent-muted)] to-[var(--accent)] text-white py-3.5 rounded-xl text-sm font-bold hover:shadow-lg transition-all"
      >
        Get the Playbook — From $9 →
      </a>
    </div>
  );
}
