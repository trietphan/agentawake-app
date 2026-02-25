"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const preferLight = stored === "light" || (!stored && window.matchMedia("(prefers-color-scheme: light)").matches);
    setLight(preferLight);
    if (preferLight) document.documentElement.classList.add("light");
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors text-lg"
    >
      {light ? "🌙" : "☀️"}
    </button>
  );
}
