"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

export default function BlogToc() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const root = document.getElementById("blog-content");
    if (!root) return;

    const found = Array.from(root.querySelectorAll("h2, h3")) as HTMLHeadingElement[];
    const next = found
      .map((el) => {
        const text = el.textContent?.trim() ?? "";
        if (!text) return null;
        if (!el.id) {
          el.id = text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-");
        }
        return { id: el.id, text, level: el.tagName.toLowerCase() as "h2" | "h3" };
      })
      .filter(Boolean) as Heading[];

    setHeadings(next);
  }, []);

  if (!headings.length) return null;

  return (
    <aside className="hidden xl:block xl:w-[240px]">
      <div className="sticky top-24 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-4">
        <p className="text-xs uppercase tracking-widest text-[var(--text-tertiary)] mb-3">On this page</p>
        <ul className="space-y-2">
          {headings.map((h) => (
            <li key={h.id} className={h.level === "h3" ? "ml-3" : ""}>
              <a href={`#${h.id}`} className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-light)] transition-colors leading-relaxed">
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
