import type { Metadata } from "next";
import Link from "next/link";
import { chapters } from "@/lib/chapters";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "All Chapters — AgentAwake",
  description: "Browse all 36 AgentAwake chapters by tier. Free preview + paid implementation guides.",
};

const tierOrder = ["free", "blueprint", "pro", "accelerator"] as const;

const tierMeta = {
  free: { label: "Free", price: "Free", cta: "Read now", accent: "text-emerald-300", border: "border-emerald-500/30", bg: "bg-emerald-500/8" },
  blueprint: { label: "Blueprint", price: "$9", cta: "Unlock Blueprint", accent: "text-blue-300", border: "border-blue-500/30", bg: "bg-blue-500/8" },
  pro: { label: "Pro", price: "$29", cta: "Unlock Pro", accent: "text-violet-300", border: "border-violet-500/30", bg: "bg-violet-500/8" },
  accelerator: { label: "Accelerator", price: "$69", cta: "Unlock Accelerator", accent: "text-[var(--accent-light)]", border: "border-[var(--accent)]/30", bg: "bg-[var(--accent)]/10" },
} as const;

const grouped = tierOrder.map((tier) => ({ tier, chapters: chapters.filter((ch) => ch.requiredTier === tier) }));

export default function ChaptersPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AgentAwake Chapters",
    itemListElement: chapters.map((chapter, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: chapter.title,
      url: `https://agentawake.com/guide/${chapter.slug}`,
    })),
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <div className="mb-12">
          <Link href="/" className="text-sm text-[var(--text-tertiary)] hover:text-[var(--foreground)] transition-colors">← Back to home</Link>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight mt-4">36 Interactive Chapters</h1>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl">Everything in the playbook, organized by access tier. Free chapter is open. Paid chapters are listed with tier unlock paths.</p>
        </div>

        <div className="space-y-12">
          {grouped.map(({ tier, chapters: tierChapters }) => {
            const meta = tierMeta[tier];
            return (
              <ScrollReveal key={tier} direction="fade">
                <section>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-xl font-bold">
                    {meta.label} Tier <span className="text-[var(--text-tertiary)] text-base font-medium">({meta.price})</span>
                  </h2>
                  {tier !== "free" && (
                    <Link href="/#pricing" className="text-sm text-[var(--accent-light)] hover:text-[var(--accent-light)]/80 transition-colors">View pricing →</Link>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tierChapters.map((ch, index) => {
                    const isFree = ch.requiredTier === "free";
                    const isNewPlatform = ch.number >= 28 && ch.number <= 35;
                    const card = (
                      <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 p-5 hover:border-[var(--accent)]/30 transition-all">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-xs text-[var(--text-tertiary)] mb-1">Chapter {ch.number}</div>
                            <h3 className="text-lg font-semibold leading-snug">{ch.emoji} {ch.title}</h3>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {isNewPlatform && <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[var(--accent)] text-white">NEW</span>}
                            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${meta.border} ${meta.bg} ${meta.accent}`}>
                              {meta.label} {tier !== "free" ? meta.price : ""}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mt-2">{ch.subtitle}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-xs text-[var(--text-tertiary)]">📖 {ch.readTime} read</span>
                          {isFree ? (
                            <span className="text-sm text-emerald-300 font-medium">Open chapter →</span>
                          ) : (
                            <span className="text-sm text-[var(--accent-light)] font-medium">🔒 {meta.cta} →</span>
                          )}
                        </div>
                      </article>
                    );

                    return (
                      <ScrollReveal key={ch.slug} delay={(index % 3) * 100}>
                        {isFree ? (
                          <Link href={`/guide/${ch.slug}`}>
                            {card}
                          </Link>
                        ) : (
                          <Link href="/#pricing">
                            {card}
                          </Link>
                        )}
                      </ScrollReveal>
                    );
                  })}
                </div>
                </section>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
