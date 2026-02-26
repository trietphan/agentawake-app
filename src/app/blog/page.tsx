import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Blog — AgentAwake",
  description: "Practical guides for building AI agents with persistent memory, automation, and real-world use cases.",
};

const cardColors = [
  "border-l-[var(--accent)]",
  "border-l-cyan-400",
  "border-l-emerald-400",
  "border-l-amber-400",
  "border-l-rose-400",
];

function tagColor(tag: string) {
  const t = tag.toLowerCase();
  if (t.includes("claude")) return "bg-violet-400/10 text-violet-300 border-violet-400/20";
  if (t.includes("chatgpt") || t.includes("openai")) return "bg-emerald-400/10 text-emerald-300 border-emerald-400/20";
  if (t.includes("memory")) return "bg-amber-400/10 text-amber-300 border-amber-400/20";
  if (t.includes("agent")) return "bg-cyan-400/10 text-cyan-300 border-cyan-400/20";
  if (t.includes("mcp") || t.includes("code")) return "bg-blue-400/10 text-blue-300 border-blue-400/20";
  return "bg-[var(--surface-hover)] text-[var(--text-secondary)] border-[var(--border)]";
}

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

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

      <main className="pt-32 pb-24 max-w-[900px] mx-auto px-5 sm:px-6 overflow-x-hidden">
        <div className="relative mb-16">
          <div className="absolute -top-20 left-1/4 w-64 h-64 rounded-full bg-[var(--accent)]/8 blur-3xl pointer-events-none" />
          <div className="absolute -top-10 right-1/4 w-48 h-48 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none" />
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-4 px-3 py-1.5 rounded-full border border-[var(--accent-light)]/20 bg-[var(--accent)]/8">
            📝 From the Lab
          </span>
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)] to-[var(--accent-light)] bg-clip-text text-transparent">
            AgentAwake Blog
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-lg">
            Practical guides, deep dives, and build-in-public updates for AI agent builders.
          </p>
        </div>

        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="block group mb-12">
            <article className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/25 bg-gradient-to-br from-[var(--accent)]/[0.06] via-[var(--surface)] to-[var(--surface)]">
              <div className="h-48 sm:h-56 bg-gradient-to-br from-[var(--accent)]/20 via-amber-500/10 to-cyan-500/10 flex items-center justify-center">
                <span className="text-6xl opacity-40">🧠</span>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[var(--accent-light)] px-2.5 py-1 rounded-full bg-[var(--accent)]/15 border border-[var(--accent)]/20">Latest</span>
                  <time className="text-xs text-[var(--text-tertiary)]">{featuredPost.date}</time>
                  <span className="text-xs text-[var(--text-tertiary)]">·</span>
                  <span className="text-xs text-[var(--text-tertiary)]">{featuredPost.readTime} read</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 group-hover:text-[var(--accent-light)] transition-colors">{featuredPost.title}</h2>
                <p className="text-[0.95rem] text-[var(--text-secondary)] leading-relaxed mb-4">{featuredPost.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="text-[0.65rem] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/15">{tag}</span>
                  ))}
                </div>
                <span className="inline-flex items-center text-sm font-semibold text-[var(--accent-light)] group-hover:translate-x-0.5 transition-transform">Read the latest post →</span>
              </div>
            </article>
          </Link>
        )}

        <div className="grid grid-cols-1 gap-6">
          {remainingPosts.map((post, i) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <article className={`bg-[var(--surface)] border border-[var(--border)]/60 border-l-4 ${cardColors[i % cardColors.length]} rounded-2xl p-6 sm:p-7 hover:border-[var(--accent)]/30 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-all hover:-translate-y-1`}>
                  <div className="flex items-center gap-3 mb-3">
                    <time className="text-xs text-[var(--text-tertiary)]">{post.date}</time>
                    <span className="text-xs text-[var(--text-tertiary)]">·</span>
                    <span className="text-xs text-[var(--text-tertiary)]">{post.readTime} read</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-[var(--accent-light)] transition-colors">{post.title}</h2>
                  <p className="text-[0.95rem] text-[var(--text-secondary)] leading-relaxed mb-4">{post.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className={`text-[0.65rem] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border ${tagColor(tag)}`}>{tag}</span>
                    ))}
                  </div>
                </article>
              </Link>

              {i === 1 && (
                <div className="rounded-2xl bg-gradient-to-r from-[var(--accent)]/10 via-amber-500/5 to-cyan-500/5 border border-[var(--accent)]/20 p-6 sm:p-8 text-center mt-6">
                  <p className="text-lg font-bold mb-2">🔥 Get the free starter kit</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">AGENTS.md + SOUL.md + MEMORY.md templates + Chapter 0</p>
                  <a href="/free" className="inline-block bg-[var(--accent-muted)] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[var(--accent)] transition-all">Get Free Templates →</a>
                </div>
              )}
            </div>
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
