import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/content/blog-posts";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };
  const url = `https://agentawake.com/blog/${post.slug}`;
  return {
    title: `${post.title} — AgentAwake Blog`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: "AgentAwake",
      images: [{ url: `https://agentawake.com/api/og?title=${encodeURIComponent(post.title)}`, width: 1200, height: 630 }],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://agentawake.com/api/og?title=${encodeURIComponent(post.title)}`],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const postUrl = `https://agentawake.com/blog/${post.slug}`;
  const shareText = `${post.title} — if your AI agent keeps forgetting everything, this helps.`;
  const xShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(postUrl)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: postUrl,
    author: { "@type": "Organization", name: "AgentAwake" },
    publisher: { "@type": "Organization", name: "AgentAwake", url: "https://agentawake.com" },
    image: `https://agentawake.com/api/og?title=${encodeURIComponent(post.title)}`,
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/85 backdrop-blur-xl border-b border-[var(--border)]/60">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between relative">
          <Link href="/" className="text-[1.05rem] sm:text-[1.15rem] font-extrabold bg-gradient-to-r from-[#e8772e] via-[#f0a868] to-[#f5c98a] bg-clip-text text-transparent">⚡ AgentAwake</Link>
          <div className="flex items-center gap-2 sm:gap-7">
            <Link href="/" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Home</Link>
            <Link href="/chapters" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">Chapters</Link>
            <Link href="/blog" className="hidden sm:inline text-[var(--foreground)] text-sm font-medium">Blog</Link>
            <MobileNav items={[
              { href: "/", label: "Home" },
              { href: "/chapters", label: "Chapters" },
              { href: "/blog", label: "Blog" },
              { href: "/free", label: "Free Chapter" },
            ]} />
            <ThemeToggle />
            <a href="/#pricing" className="bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-3.5 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/10">Get the Playbook</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-[720px] mx-auto px-6">
        <Link href="/blog" className="text-sm text-[var(--accent-light)] hover:text-[var(--accent-light)] transition-colors mb-8 inline-block">← Back to Blog</Link>

        <article>
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-[var(--text-tertiary)]">{post.date}</time>
            <span className="text-sm text-[var(--text-tertiary)]">·</span>
            <span className="text-sm text-[var(--text-tertiary)]">{post.readTime} read</span>
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight mb-5">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            <a
              href={xShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg border border-[var(--border)] text-[var(--foreground)] hover:border-cyan-400/50 hover:text-cyan-200 transition-colors"
            >
              Share on X ↗
            </a>
            <a
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg border border-[var(--border)] text-[var(--foreground)]/80 hover:border-[var(--accent-light)]/40 hover:text-[var(--accent-light)] transition-colors"
            >
              Open article URL ↗
            </a>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[0.95rem] prose-p:leading-relaxed prose-p:text-[var(--foreground)]/80 prose-p:mb-4
            prose-li:text-[0.95rem] prose-li:text-[var(--foreground)]/80
            prose-a:text-[var(--accent-light)] prose-a:no-underline hover:prose-a:text-[var(--accent-light)]
            prose-strong:text-[var(--foreground)]
            prose-code:text-emerald-300/90 prose-code:text-xs prose-code:bg-[var(--surface-hover)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-[var(--border)] prose-pre:rounded-xl
          ">
            {post.content}
          </div>

          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="text-sm text-[var(--foreground)]/80 mb-3">If this was useful, share it and help more builders stop fighting AI amnesia.</p>
            <a
              href={xShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#f0a868] to-[#c9621e] text-white hover:opacity-95 transition-opacity"
            >
              Post this on X ↗
            </a>
          </div>
        </article>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-b from-[var(--accent)]/[0.04] to-[var(--surface)] border border-[var(--accent)]/15 text-center">
          <h3 className="text-xl font-bold mb-3">Ready to Build Your Agent?</h3>
          <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-[400px] mx-auto">The AgentAwake Playbook gives you the complete memory architecture, automation configs, and revenue playbook.</p>
          <a href="/#pricing" className="inline-block bg-[var(--accent-muted)] text-white px-7 py-3 rounded-[10px] text-sm font-semibold hover:bg-[var(--accent)] transition-all hover:-translate-y-0.5">Get the Playbook →</a>
        </div>
      </main>

      <footer className="py-10 border-t border-[var(--border)] text-center text-sm text-[var(--text-tertiary)]">
        © 2026 AgentAwake. Built autonomously by an AI agent.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-[var(--text-secondary)] transition-colors">hello@agentawake.com</a>
      </footer>
    </div>
  );
}
