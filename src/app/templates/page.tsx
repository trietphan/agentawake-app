/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import { templates } from "@/content/templates";
import TemplateFilters from "./TemplateFilters";

export const metadata: Metadata = {
  title: "AI Agent Templates — Plug-and-Play Memory Configs | AgentAwake",
  description:
    "12 ready-to-use AI agent templates. Paste into Claude, ChatGPT, Cursor, or any AI platform and instantly have a specialized agent with persistent memory. Free and paid options.",
  openGraph: {
    title: "AI Agent Templates — Plug-and-Play Memory Configs | AgentAwake",
    description:
      "12 ready-to-use AI agent templates for every use case. Real estate, trading, content creation, coding, freelancing, and more.",
    url: "https://agentawake.com/templates",
    type: "website",
  },
};

function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]/60">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-[62px] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 min-w-0">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e8772e] via-[#f0a868] to-[#f5c98a] flex items-center justify-center shadow-lg shadow-[var(--accent)]/15">
            <span className="text-[15px]">⚡</span>
          </span>
          <span className="text-[1.05rem] sm:text-[1.15rem] font-extrabold bg-gradient-to-r from-[#e8772e] via-[#f0a868] to-[#f5c98a] bg-clip-text text-transparent truncate">
            AgentAwake
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-7">
          <Link href="/templates" className="hidden sm:inline text-[var(--accent-light)] text-sm font-semibold">
            Templates
          </Link>
          <Link href="/chapters" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">
            Chapters
          </Link>
          <Link href="/blog" className="hidden sm:inline text-[var(--text-tertiary)] text-sm font-medium hover:text-[var(--foreground)] transition-colors">
            Blog
          </Link>
          <MobileNav
            items={[
              { href: "/templates", label: "Templates" },
              { href: "/blog", label: "Blog" },
              { href: "/chapters", label: "Chapters" },
              { href: "/free", label: "Free Chapter" },
              { href: "/#pricing", label: "Playbook" },
            ]}
          />
          <ThemeToggle />
          <Link
            href="/#pricing"
            className="bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-3.5 sm:px-5 py-2.5 rounded-[10px] text-xs sm:text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 whitespace-nowrap"
          >
            Get the Playbook
          </Link>
        </div>
      </div>
    </nav>
  );
}

function PriceBadge({ price, tier }: { price: number; tier: string }) {
  if (price === 0) {
    return (
      <span className="text-[0.72rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
        Free
      </span>
    );
  }
  if (tier === "premium") {
    return (
      <span className="text-[0.72rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--accent-light)] border border-[var(--accent)]/20">
        ${price} Premium
      </span>
    );
  }
  return (
    <span className="text-[0.72rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
      ${price}
    </span>
  );
}

export default function TemplatesPage() {
  const freeCount = templates.filter((t) => t.price === 0).length;
  const paidCount = templates.filter((t) => t.price > 0).length;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AgentAwake Templates",
    description:
      "Plug-and-play AI agent memory configurations for every use case.",
    url: "https://agentawake.com/templates",
    hasPart: templates.map((t) => ({
      "@type": "Product",
      name: t.title,
      description: t.description,
      url: `https://agentawake.com/templates/${t.slug}`,
      offers: {
        "@type": "Offer",
        price: t.price.toFixed(2),
        priceCurrency: "USD",
        availability:
          t.price === 0
            ? "https://schema.org/InStock"
            : "https://schema.org/InStock",
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-14 text-center relative overflow-hidden">
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(232,119,46,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-[1080px] mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[var(--accent-light)] bg-[var(--accent)]/10 border border-[var(--accent-light)]/20 mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            {templates.length} templates · {freeCount} free · {paidCount} paid
          </div>
          <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-4">
            AI Agent Templates{" "}
            <span className="bg-gradient-to-r from-[#e8772e] via-[#f0a868] to-[#f5c98a] bg-clip-text text-transparent">
              Ready to Paste
            </span>
          </h1>
          <p className="text-lg max-w-[540px] mx-auto mb-3 leading-relaxed text-[var(--text-secondary)]">
            Pre-built memory configurations for Claude, ChatGPT, Cursor, and more.
            Skip the setup. Start with a working agent.
          </p>
          <p className="text-sm text-[var(--text-tertiary)]">
            Copy → paste → your AI agent instantly knows what to do.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="pb-24">
        <div className="max-w-[1080px] mx-auto px-6">
          <TemplateFilters templates={templates} />
        </div>
      </section>

      {/* Upsell section */}
      <section className="py-16 border-t border-[var(--border)]/40">
        <div className="max-w-[1080px] mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3">
            Want to build your own?
          </p>
          <h2 className="text-2xl font-bold mb-3">Learn the Architecture Behind Every Template</h2>
          <p className="text-[var(--text-secondary)] max-w-md mx-auto mb-7 text-sm leading-relaxed">
            The AgentAwake Playbook teaches you the full memory system — so you can build templates
            for any use case and deploy them on any platform.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-8 py-3.5 rounded-[10px] text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5"
          >
            Get the Full Playbook →
          </Link>
        </div>
      </section>

      <footer className="py-10 border-t border-[var(--border)] text-center text-sm text-[var(--text-tertiary)]">
        © 2026 AgentAwake. Built autonomously by an AI agent. Reviewed by a human.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-[var(--text-secondary)] transition-colors">
          hello@agentawake.com
        </a>
      </footer>
    </div>
  );
}
