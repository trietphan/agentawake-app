import { notFound } from "next/navigation";
import Link from "next/link";
import { getCurrentUser, hasAccess, UserTier } from "@/lib/auth";
import { getChapter, chapters } from "@/lib/chapters";
import { chapterContent } from "@/content/chapters";

function LockedOverlay({ requiredTier }: { requiredTier: UserTier }) {
  const tierPrices: Record<string, string> = {
    blueprint: "$9",
    pro: "$29",
    accelerator: "$69",
  };
  return (
    <div className="relative">
      {/* Blurred preview */}
      <div className="pointer-events-none select-none blur-sm opacity-30 max-h-[300px] overflow-hidden">
        <p className="text-lg leading-relaxed mb-4">
          This chapter covers advanced techniques that will transform how your agent operates.
          The content below includes step-by-step instructions, real examples from our production system,
          and copy-paste configurations you can deploy immediately...
        </p>
        <p>
          Building on the foundation from previous chapters, this section dives deep into practical
          implementation patterns that separate hobbyist setups from professional, revenue-generating
          agent systems. Every technique has been tested in our own operation...
        </p>
      </div>
      {/* Unlock CTA */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-orange-500/30 bg-[var(--surface)]/95 backdrop-blur-sm p-8 text-center max-w-md mx-4">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-lg font-bold mb-2">
            Unlock with {requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)}
          </h3>
          <p className="text-sm text-zinc-400 mb-5">
            This chapter requires the <strong className="text-orange-400">{requiredTier}</strong> tier
            ({tierPrices[requiredTier] || ""}).
            Get instant access to this chapter and everything below it.
          </p>
          <Link
            href="/#pricing"
            className="inline-block rounded-xl bg-orange-600 px-6 py-3 text-sm font-bold text-white hover:bg-orange-500 transition-colors"
          >
            Upgrade to {requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)} →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const chapter = getChapter(slug);
  if (!chapter) notFound();

  const user = await getCurrentUser();
  const userTier = user?.tier || "free";
  const canRead = hasAccess(userTier, chapter.requiredTier);
  const content = chapterContent[slug];

  // Find prev/next chapters
  const idx = chapters.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? chapters[idx - 1] : null;
  const next = idx < chapters.length - 1 ? chapters[idx + 1] : null;

  return (
    <article className="max-w-2xl mx-auto xl:ml-72 xl:mr-auto px-6 py-12 lg:py-16 xl:max-w-3xl">
      {/* Chapter header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{chapter.emoji}</span>
          <div>
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-orange-400">
              Chapter {chapter.number} · {chapter.readTime} read
            </div>
          </div>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-3">
          {chapter.title}
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          {chapter.subtitle}
        </p>
      </div>

      {/* Content or locked overlay */}
      {canRead && content ? (
        <div className="prose-custom space-y-4 text-[0.95rem] leading-relaxed text-zinc-300 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-zinc-100 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-zinc-200 [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-zinc-100 [&_em]:text-zinc-200">
          {content}
        </div>
      ) : (
        <LockedOverlay requiredTier={chapter.requiredTier} />
      )}

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[var(--border)] pt-8">
        {prev ? (
          <Link href={`/guide/${prev.slug}`} className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            <span>←</span>
            <span className="group-hover:underline">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/guide/${next.slug}`} className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            <span className="group-hover:underline">{next.title}</span>
            <span>→</span>
          </Link>
        ) : <div />}
      </div>
    </article>
  );
}
