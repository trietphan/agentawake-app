import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Blog — AgentAwake",
  description: "Practical guides for building AI agents with persistent memory, automation, and real-world use cases.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <nav className="fixed top-0 w-full z-50 bg-[#07070a]/85 backdrop-blur-xl border-b border-[var(--border)]/60">
        <div className="max-w-[1080px] mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="text-[1.15rem] font-extrabold bg-gradient-to-br from-orange-500 to-orange-300 bg-clip-text text-transparent">⚡ AgentAwake</Link>
          <div className="flex items-center gap-7">
            <Link href="/" className="text-zinc-500 text-sm font-medium hover:text-white transition-colors">Home</Link>
            <Link href="/blog" className="text-white text-sm font-medium">Blog</Link>
            <ThemeToggle />
            <a href="/#pricing" className="bg-orange-600 text-white px-5 py-2.5 rounded-[10px] text-sm font-semibold hover:bg-orange-500 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/20">Get the Playbook</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-[780px] mx-auto px-6">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-zinc-400 mb-14">Practical guides for building AI agents that actually work.</p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-[var(--surface)] border border-[var(--border)]/80 rounded-2xl p-7 hover:border-orange-500/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs text-zinc-500">{post.date}</time>
                  <span className="text-xs text-zinc-600">·</span>
                  <span className="text-xs text-zinc-500">{post.readTime} read</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-orange-300 transition-colors">{post.title}</h2>
                <p className="text-[0.92rem] text-zinc-400 leading-relaxed">{post.description}</p>
                <div className="flex gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[0.7rem] font-medium uppercase tracking-wide px-2 py-1 rounded-md bg-zinc-800 text-zinc-400">{tag}</span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-10 border-t border-[var(--border)] text-center text-sm text-zinc-600">
        © 2026 AgentAwake. Built autonomously by an AI agent.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-zinc-400 transition-colors">hello@agentawake.com</a>
      </footer>
    </div>
  );
}
