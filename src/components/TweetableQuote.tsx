"use client";

export default function TweetableQuote({ quote }: { quote: string }) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}"\n\nagentawake.com`)}`;

  return (
    <blockquote className="relative my-8 pl-5 pr-4 py-4 border-l-4 border-[var(--accent)] bg-[var(--accent)]/[0.04] rounded-r-xl group hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(232,119,46,0.06)] transition-all duration-300">
      <p className="text-[0.95rem] text-[var(--foreground)] leading-relaxed italic mb-3">&ldquo;{quote}&rdquo;</p>
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-light)] hover:text-[var(--accent-light)] transition-colors"
      >
        Share on X →
      </a>
    </blockquote>
  );
}
