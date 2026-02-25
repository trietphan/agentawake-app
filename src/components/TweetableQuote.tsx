"use client";

export default function TweetableQuote({ quote }: { quote: string }) {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}"\n\nagentawake.com`)}`;

  return (
    <blockquote className="relative my-8 pl-5 pr-4 py-4 border-l-4 border-fuchsia-500 bg-fuchsia-500/[0.04] rounded-r-xl group hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(217,70,239,0.08)] transition-all duration-300">
      <p className="text-[0.95rem] text-zinc-200 leading-relaxed italic mb-3">&ldquo;{quote}&rdquo;</p>
      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
      >
        Share on X →
      </a>
    </blockquote>
  );
}
