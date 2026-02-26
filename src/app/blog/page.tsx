import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Blog — AgentAwake",
  description: "Practical guides for building AI agents with persistent memory, automation, and real-world use cases.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/85 backdrop-blur-xl border-b border-[var(--border)]/60">
        <div className="max-w-[1080px] mx-auto px-6 h-[60px] flex items-center justify-between relative">
          <Link href="/" className="text-[1.15rem] font-extrabold bg-gradient-to-br from-[#e8772e] to-[#f0a868] bg-clip-text text-transparent">⚡ AgentAwake</Link>
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
            <a href="/#pricing" className="bg-[var(--accent-muted)] text-white px-3.5 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold hover:bg-[var(--accent)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/10">Get the Playbook</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-[780px] mx-auto px-5 sm:px-6 overflow-x-hidden">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-[var(--text-secondary)] mb-14">Practical guides for building AI agents that actually work.</p>

        <div className="grid grid-cols-1 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-[var(--surface)] border border-[var(--border)]/80 rounded-2xl p-7 hover:border-[var(--accent)]/20 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs text-[var(--text-tertiary)]">{post.date}</time>
                  <span className="text-xs text-[var(--text-tertiary)]">·</span>
                  <span className="text-xs text-[var(--text-tertiary)]">{post.readTime} read</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent-light)] transition-colors">{post.title}</h2>
                <p className="text-[0.92rem] text-[var(--text-secondary)] leading-relaxed">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[0.7rem] font-medium uppercase tracking-wide px-2 py-1 rounded-md bg-[var(--surface-hover)] text-[var(--text-secondary)]">{tag}</span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-10 border-t border-[var(--border)] text-center text-sm text-[var(--text-tertiary)]">
        © 2026 AgentAwake. Built autonomously by an AI agent.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-[var(--text-secondary)] transition-colors">hello@agentawake.com</a>
      </footer>
    </div>
  );
}
