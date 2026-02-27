import { notFound } from "next/navigation";
import Link from "next/link";
import { getCurrentUser, hasAccess, UserTier } from "@/lib/auth";
import { getChapter, chapters } from "@/lib/chapters";
import { chapterContent } from "@/content/chapters";
import ShareButton from "@/components/ShareButton";
import ChapterProgress from "@/components/ChapterProgress";

function LockedOverlay({ requiredTier, content }: { requiredTier: UserTier; content: React.ReactNode | null }) {
  const tierPrices: Record<string, string> = {
    blueprint: "$9",
    pro: "$19",
    accelerator: "$29",
  };
  return (
    <div className="relative">
      {/* Show real chapter content preview — first ~25% visible, then fade to blur */}
      {content ? (
        <div className="pointer-events-none select-none">
          {/* Visible preview section */}
          <div className="max-h-[500px] overflow-hidden relative">
            <div className="prose-custom space-y-4 text-[0.95rem] leading-relaxed text-[var(--foreground)]/80 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[var(--foreground)] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[var(--foreground)] [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-[var(--foreground)] [&_em]:text-[var(--foreground)]">
              {content}
            </div>
            {/* Gradient fade overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/80 to-transparent" />
          </div>
        </div>
      ) : (
        <div className="pointer-events-none select-none blur-sm opacity-30 max-h-[300px] overflow-hidden">
          <p className="text-lg leading-relaxed mb-4">
            This chapter covers advanced techniques that will transform how your agent operates...
          </p>
        </div>
      )}
      {/* Unlock CTA */}
      <div className="flex items-center justify-center mt-4">
        <div className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--surface)]/95 backdrop-blur-sm p-8 text-center max-w-md mx-4">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-lg font-bold mb-2">
            Continue reading with {requiredTier.charAt(0).toUpperCase() + requiredTier.slice(1)}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mb-5">
            You&apos;ve read the preview. Unlock the full chapter with the <strong className="text-[var(--accent-light)]">{requiredTier}</strong> tier
            ({tierPrices[requiredTier] || ""}).
          </p>
          <Link
            href="/#pricing"
            className="inline-block rounded-xl bg-[var(--accent-muted)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--accent)] transition-colors"
          >
            Unlock Full Chapter →
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
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{chapter.emoji}</span>
            <div>
              <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--accent-light)]">
                Chapter {chapter.number} · {chapter.readTime} read
              </div>
            </div>
          </div>
          <ShareButton />
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-3">
          {chapter.title}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          {chapter.subtitle}
        </p>
      </div>

      {/* Reading progress indicator */}
      <ChapterProgress />

      {/* Content or locked overlay */}
      {canRead && content ? (
        <div className="prose-custom space-y-4 text-[0.95rem] leading-relaxed text-[var(--foreground)]/80 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[var(--foreground)] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-[var(--foreground)] [&_h3]:mt-6 [&_h3]:mb-2 [&_strong]:text-[var(--foreground)] [&_em]:text-[var(--foreground)]">
          {content}
        </div>
      ) : (
        <LockedOverlay requiredTier={chapter.requiredTier} content={content || null} />
      )}

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-[var(--border)]">
        <div className="flex items-center justify-between mb-8">
          {prev ? (
            <Link href={`/guide/${prev.slug}`} className="group flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--foreground)]/80 transition-colors">
              <span>←</span>
              <span className="group-hover:underline">{prev.title}</span>
            </Link>
          ) : <div />}
          {/* placeholder to push next to right if no prev */}
          {next && !prev && <div />}
        </div>

        {/* Next Chapter Preview Card */}
        {next && (
          <div className="mt-4">
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-3">Up next</p>
            <Link
              href={`/guide/${next.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/30 hover:shadow-[0_0_30px_rgba(232,119,46,0.06)] transition-all"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{next.emoji}</span>
              <div className="min-w-0">
                <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--accent-light)] mb-1">
                  Chapter {next.number} · {next.readTime} read
                </div>
                <h3 className="text-base font-bold leading-snug mb-1 group-hover:text-[var(--accent-light)] transition-colors">
                  {next.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{next.subtitle}</p>
              </div>
              <span className="ml-auto flex-shrink-0 text-[var(--text-tertiary)] group-hover:text-[var(--accent-light)] text-lg transition-colors">→</span>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
