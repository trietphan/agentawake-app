"use client";
import { useState, useEffect, useRef } from "react";

export default function ChapterProgress() {
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      const article = document.querySelector("article");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const articleHeight = article.offsetHeight;
      const viewportHeight = window.innerHeight;
      // How much of the article has scrolled past the top of the viewport
      const scrolled = Math.max(0, -rect.top);
      const scrollable = articleHeight - viewportHeight;
      if (scrollable <= 0) {
        setProgress(100);
        return;
      }
      setProgress(Math.min(100, Math.round((scrolled / scrollable) * 100)));
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler(); // initialize
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (progress === 0) return null;

  return (
    <div ref={articleRef} className="flex items-center gap-2 mb-6">
      <div className="flex-1 h-1 bg-[var(--surface-hover)] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-[0.7rem] font-semibold text-[var(--text-tertiary)] whitespace-nowrap">
        {progress}% read
      </span>
    </div>
  );
}
