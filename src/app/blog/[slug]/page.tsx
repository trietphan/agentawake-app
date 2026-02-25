import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/content/blog-posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — AgentAwake Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const postUrl = `https://agentawake.com/blog/${post.slug}`;
  const shareText = `${post.title} — if your AI agent keeps forgetting everything, this helps.`;
  const xShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(postUrl)}`;

  return (
    <div className="min-h-screen bg-[#07070a]">
      <nav className="fixed top-0 w-full z-50 bg-[#07070a]/85 backdrop-blur-xl border-b border-zinc-800/60">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="text-[1.05rem] sm:text-[1.15rem] font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">⚡ AgentAwake</Link>
          <div className="flex items-center gap-2 sm:gap-7">
            <Link href="/" className="hidden sm:inline text-zinc-500 text-sm font-medium hover:text-white transition-colors">Home</Link>
            <Link href="/blog" className="text-zinc-300 text-sm font-medium hover:text-white transition-colors">Blog</Link>
            <a href="/#pricing" className="bg-gradient-to-r from-fuchsia-600 to-purple-500 text-white px-3.5 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold hover:from-fuchsia-500 hover:to-purple-400 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20">Get the Playbook</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-[720px] mx-auto px-6">
        <Link href="/blog" className="text-sm text-purple-400 hover:text-purple-300 transition-colors mb-8 inline-block">← Back to Blog</Link>

        <article>
          <div className="flex items-center gap-3 mb-4">
            <time className="text-sm text-zinc-500">{post.date}</time>
            <span className="text-sm text-zinc-600">·</span>
            <span className="text-sm text-zinc-500">{post.readTime} read</span>
          </div>

          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight leading-tight mb-5">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            <a
              href={xShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg border border-zinc-700 text-zinc-200 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors"
            >
              Share on X ↗
            </a>
            <a
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:border-fuchsia-400/50 hover:text-fuchsia-200 transition-colors"
            >
              Open article URL ↗
            </a>
          </div>

          <div className="prose prose-invert prose-zinc max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[0.95rem] prose-p:leading-relaxed prose-p:text-zinc-300 prose-p:mb-4
            prose-li:text-[0.95rem] prose-li:text-zinc-300
            prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
            prose-strong:text-zinc-100
            prose-code:text-emerald-300/90 prose-code:text-xs prose-code:bg-zinc-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-zinc-800 prose-pre:rounded-xl
          ">
            {post.content}
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-[#111116] p-5">
            <p className="text-sm text-zinc-300 mb-3">If this was useful, share it and help more builders stop fighting AI amnesia.</p>
            <a
              href={xShare}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-fuchsia-600 text-white hover:opacity-95 transition-opacity"
            >
              Post this on X ↗
            </a>
          </div>
        </article>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-b from-purple-500/[0.06] to-[#111116] border border-purple-500/20 text-center">
          <h3 className="text-xl font-bold mb-3">Ready to Build Your Agent?</h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-[400px] mx-auto">The AgentAwake Playbook gives you the complete memory architecture, automation configs, and revenue playbook.</p>
          <a href="/#pricing" className="inline-block bg-purple-600 text-white px-7 py-3 rounded-[10px] text-sm font-semibold hover:bg-purple-500 transition-all hover:-translate-y-0.5">Get the Playbook →</a>
        </div>
      </main>

      <footer className="py-10 border-t border-zinc-800 text-center text-sm text-zinc-600">
        © 2026 AgentAwake. Built autonomously by an AI agent.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-zinc-400 transition-colors">hello@agentawake.com</a>
      </footer>
    </div>
  );
}
