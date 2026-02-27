"use client";

import { useState } from "react";
import Link from "next/link";
import type { Template } from "@/content/templates";

type FilterType = "all" | "free" | "paid" | "premium";
type PlatformFilter = string;

const ALL_PLATFORMS = [
  "Claude",
  "ChatGPT",
  "Cursor",
  "OpenClaw",
  "n8n",
  "CrewAI",
  "LangChain",
  "Cline",
];

function PriceBadge({ price, tier }: { price: number; tier: string }) {
  if (price === 0) {
    return (
      <span className="text-[0.7rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
        Free
      </span>
    );
  }
  if (tier === "premium") {
    return (
      <span className="text-[0.7rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent-light)] border border-[var(--accent)]/20">
        ${price} Premium
      </span>
    );
  }
  return (
    <span className="text-[0.7rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
      ${price}
    </span>
  );
}

function TemplateCard({ template }: { template: Template }) {
  return (
    <Link
      href={`/templates/${template.slug}`}
      className="group block rounded-2xl border border-[var(--border)]/80 bg-[var(--surface)] p-6 hover:border-[var(--accent)]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent)]/5 border border-[var(--accent)]/10 flex items-center justify-center text-2xl flex-shrink-0">
          {template.emoji}
        </div>
        <PriceBadge price={template.price} tier={template.tier} />
      </div>

      {/* Content */}
      <h3 className="text-[1rem] font-bold mb-2 group-hover:text-[var(--accent-light)] transition-colors leading-snug">
        {template.title}
      </h3>
      <p className="text-[0.85rem] text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
        {template.description}
      </p>

      {/* Meta row */}
      <div className="flex items-center gap-2 mb-4 text-xs text-[var(--text-tertiary)]">
        <span>⏱ {template.setupTime}</span>
        <span className="text-[var(--border)]">·</span>
        <span>{template.includes.length} files</span>
      </div>

      {/* Platform badges */}
      <div className="flex flex-wrap gap-1.5">
        {template.platforms.slice(0, 4).map((p) => (
          <span
            key={p}
            className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-md bg-[var(--surface-hover)] text-[var(--text-tertiary)] border border-[var(--border)]/50"
          >
            {p}
          </span>
        ))}
        {template.platforms.length > 4 && (
          <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-md bg-[var(--surface-hover)] text-[var(--text-tertiary)] border border-[var(--border)]/50">
            +{template.platforms.length - 4} more
          </span>
        )}
      </div>

      {/* CTA hint */}
      <div className="mt-4 pt-4 border-t border-[var(--border)]/40 flex items-center justify-between">
        <span className="text-xs text-[var(--text-tertiary)]">
          {template.price === 0 ? "Free download" : `One-time · $${template.price}`}
        </span>
        <span className="text-xs text-[var(--accent-light)] opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
          View template →
        </span>
      </div>
    </Link>
  );
}

export default function TemplateFilters({ templates }: { templates: Template[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [activePlatform, setActivePlatform] = useState<PlatformFilter>("");

  const filtered = templates.filter((t) => {
    const tierMatch =
      activeFilter === "all" ||
      (activeFilter === "free" && t.price === 0) ||
      (activeFilter === "paid" && t.price > 0 && t.tier !== "premium") ||
      (activeFilter === "premium" && t.tier === "premium");

    const platformMatch =
      !activePlatform || t.platforms.includes(activePlatform);

    return tierMatch && platformMatch;
  });

  const tierFilters: { key: FilterType; label: string; count: number }[] = [
    { key: "all", label: "All Templates", count: templates.length },
    {
      key: "free",
      label: "Free",
      count: templates.filter((t) => t.price === 0).length,
    },
    {
      key: "paid",
      label: "$5",
      count: templates.filter((t) => t.price === 5).length,
    },
    {
      key: "premium",
      label: "$9 Premium",
      count: templates.filter((t) => t.tier === "premium").length,
    },
  ];

  return (
    <div>
      {/* Tier filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tierFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              activeFilter === f.key
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/30 hover:text-[var(--foreground)]"
            }`}
          >
            {f.label}
            <span
              className={`ml-1.5 text-xs ${
                activeFilter === f.key ? "opacity-80" : "opacity-50"
              }`}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* Platform filters */}
      <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[var(--border)]/40">
        <span className="text-xs text-[var(--text-tertiary)] self-center mr-1 font-medium">
          Platform:
        </span>
        <button
          onClick={() => setActivePlatform("")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
            !activePlatform
              ? "bg-[var(--surface-hover)] border-[var(--border-hover)] text-[var(--foreground)]"
              : "border-[var(--border)]/60 text-[var(--text-tertiary)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)]"
          }`}
        >
          Any
        </button>
        {ALL_PLATFORMS.map((p) => (
          <button
            key={p}
            onClick={() => setActivePlatform(p === activePlatform ? "" : p)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              activePlatform === p
                ? "bg-[var(--surface-hover)] border-[var(--border-hover)] text-[var(--foreground)]"
                : "border-[var(--border)]/60 text-[var(--text-tertiary)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)]"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-[var(--text-tertiary)] mb-5">
        Showing {filtered.length} template{filtered.length !== 1 ? "s" : ""}
        {activePlatform && ` for ${activePlatform}`}
      </p>

      {/* Template grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-[var(--text-secondary)]">
            No templates match those filters. Try a different combination.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((template) => (
            <TemplateCard key={template.slug} template={template} />
          ))}
        </div>
      )}
    </div>
  );
}
