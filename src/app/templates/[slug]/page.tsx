/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";
import { templates, getTemplateBySlug } from "@/content/templates";
import TemplateEmailGate from "@/components/TemplateEmailGate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) return { title: "Template Not Found" };

  const priceLabel =
    template.price === 0 ? "Free Download" : `$${template.price} One-Time`;

  return {
    title: `${template.title} — ${priceLabel} AI Agent Template | AgentAwake`,
    description: `${template.description} Works with ${template.platforms.slice(0, 3).join(", ")}. Setup in ${template.setupTime}.`,
    openGraph: {
      title: `${template.emoji} ${template.title} — AI Agent Template`,
      description: template.description,
      url: `https://agentawake.com/templates/${template.slug}`,
      type: "website",
    },
  };
}

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
      <span className="text-sm font-bold uppercase tracking-wide px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
        Free
      </span>
    );
  }
  if (tier === "premium") {
    return (
      <span className="text-sm font-bold uppercase tracking-wide px-3 py-1.5 rounded-full bg-[var(--accent)]/15 text-[var(--accent-light)] border border-[var(--accent)]/20">
        ${price} Premium
      </span>
    );
  }
  return (
    <span className="text-sm font-bold uppercase tracking-wide px-3 py-1.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
      ${price}
    </span>
  );
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);
  if (!template) notFound();

  const isFree = template.price === 0;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: template.title,
    description: template.description,
    image: `https://agentawake.com/api/og?title=${encodeURIComponent(template.title)}`,
    brand: { "@type": "Brand", name: "AgentAwake" },
    offers: {
      "@type": "Offer",
      price: template.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://agentawake.com/templates/${template.slug}`,
    },
  };

  // Breadcrumb structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Templates",
        item: "https://agentawake.com/templates",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: template.title,
        item: `https://agentawake.com/templates/${template.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--background)] relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <NavBar />

      <div className="max-w-[1080px] mx-auto px-6 pt-28 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] mb-8">
          <Link href="/templates" className="hover:text-[var(--accent-light)] transition-colors">
            Templates
          </Link>
          <span>›</span>
          <span className="text-[var(--foreground)]">{template.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ─── Main content ─── */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title block */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent)]/5 border border-[var(--accent)]/15 flex items-center justify-center text-3xl">
                  {template.emoji}
                </div>
                <PriceBadge price={template.price} tier={template.tier} />
              </div>
              <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold tracking-tight mb-3 leading-tight">
                {template.title}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-5">
                {template.longDescription}
              </p>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-3 text-sm">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <span>⏱</span>
                  <span className="text-[var(--text-secondary)]">
                    Setup: <span className="font-semibold text-[var(--foreground)]">{template.setupTime}</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <span>📄</span>
                  <span className="text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--foreground)]">{template.includes.length} files</span> included
                  </span>
                </div>
              </div>
            </div>

            {/* Platform compatibility */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-3">
                Platform Compatibility
              </h2>
              <div className="flex flex-wrap gap-2">
                {template.platforms.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm font-medium text-[var(--text-secondary)]"
                  >
                    {p === "Claude" && <span>🟣</span>}
                    {p === "ChatGPT" && <span>🟢</span>}
                    {p === "Cursor" && <span>💻</span>}
                    {p === "OpenClaw" && <span>⚡</span>}
                    {p === "n8n" && <span>⚙️</span>}
                    {p === "CrewAI" && <span>🚀</span>}
                    {p === "LangChain" && <span>🔗</span>}
                    {p === "Cline" && <span>🤖</span>}
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-3">
                What's Included
              </h2>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                {template.includes.map((file, i) => (
                  <div
                    key={file}
                    className={`flex items-center gap-3 px-5 py-3.5 ${
                      i < template.includes.length - 1
                        ? "border-b border-[var(--border)]/50"
                        : ""
                    }`}
                  >
                    <span className="text-[var(--text-tertiary)] font-mono text-sm">
                      {file.endsWith(".md") ? "📄" : "📋"}
                    </span>
                    <span className="font-mono text-sm text-[var(--foreground)]">
                      {file}
                    </span>
                    {isFree && ["AGENTS.md", "SOUL.md", "MEMORY.md", "README.md"].includes(file) && (
                      <span className="ml-auto text-xs text-emerald-400 font-semibold">
                        Free
                      </span>
                    )}
                    {!isFree && (
                      <span className="ml-auto text-xs text-[var(--text-tertiary)]">
                        Included
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AGENTS.md Preview */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
                  Preview — AGENTS.md
                </h2>
                <span className="text-xs text-[var(--accent-light)] font-semibold bg-[var(--accent)]/10 px-2.5 py-1 rounded-full border border-[var(--accent)]/20">
                  Full file
                </span>
              </div>

              <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
                {/* Code header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)]/50 bg-[var(--surface-hover)]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs font-mono text-[var(--text-tertiary)]">AGENTS.md</span>
                  <div className="w-14" />
                </div>

                {/* Content */}
                <div className="p-5 overflow-x-auto">
                  <pre className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed whitespace-pre-wrap break-words">
                    {template.previewContent}
                  </pre>
                </div>

                {/* Blur overlay for paid templates — only on extra files */}
                {!isFree && (
                  <div className="mt-0 px-5 pb-5">
                    <div className="relative rounded-xl border border-[var(--border)] overflow-hidden">
                      <div className="blur-sm select-none pointer-events-none p-5">
                        <pre className="text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
{`# SOUL.md — Agent Personality & Values

## Core Identity
[Carefully crafted personality profile for this specific use case...]

## Communication Style
[Detailed tone and voice guidelines...]

## Values & Principles
[Domain-specific ethics and operating principles...]

# MEMORY.md — Persistent Context

## [Domain]-Specific Memory Structure
[Pre-built memory template with all the right fields...]`}
                        </pre>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/80 to-transparent flex items-end justify-center pb-8">
                        <div className="text-center">
                          <div className="text-2xl mb-2">🔒</div>
                          <p className="text-sm font-semibold text-[var(--foreground)] mb-1">
                            SOUL.md + MEMORY.md + {template.includes.length - 2} more files
                          </p>
                          <p className="text-xs text-[var(--text-secondary)]">
                            Unlock all files for ${template.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ─── Sidebar ─── */}
          <div className="lg:col-span-1 space-y-5">
            {/* Sticky wrapper */}
            <div className="lg:sticky lg:top-24 space-y-5">
              {/* CTA card */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <div className="text-center mb-5">
                  <div className="text-4xl mb-2">{template.emoji}</div>
                  <div className="text-2xl font-extrabold mb-1">
                    {template.price === 0 ? "Free" : `$${template.price}`}
                  </div>
                  {template.price > 0 && (
                    <div className="text-xs text-[var(--text-tertiary)]">
                      One-time · Instant access
                    </div>
                  )}
                </div>

                {/* Free: email gate */}
                {isFree ? (
                  <TemplateEmailGate
                    slug={template.slug}
                    title={template.title}
                    files={["AGENTS.md", "SOUL.md", "MEMORY.md", "README.md"]}
                  />
                ) : (
                  /* Paid: Stripe link */
                  <div className="space-y-3">
                    <a
                      href={template.stripeLink || "#"}
                      className="block w-full text-center bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-5 py-3.5 rounded-xl text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5"
                    >
                      Get Instant Access → ${template.price}
                    </a>
                    <div className="flex items-center justify-center gap-4 text-xs text-[var(--text-tertiary)]">
                      <span>🔒 Secure checkout</span>
                      <span>⚡ Instant download</span>
                    </div>
                    <p className="text-[0.7rem] text-[var(--text-tertiary)] text-center">
                      30-day money-back guarantee. No subscription.
                    </p>
                  </div>
                )}
              </div>

              {/* Files list quick view */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-3">
                  Files in this template
                </h3>
                <ul className="space-y-1.5">
                  {template.includes.map((file) => (
                    <li key={file} className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                      <span className="text-[var(--text-tertiary)]">📄</span>
                      {file}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Setup time */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-lg flex-shrink-0">
                    ⏱
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-tertiary)] font-medium">Setup time</div>
                    <div className="font-bold text-sm">{template.setupTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Bottom upsell ─── */}
        <div className="mt-20 rounded-3xl border border-[var(--accent)]/20 bg-gradient-to-b from-[var(--accent)]/5 to-[var(--surface)] p-10 text-center">
          <div className="text-3xl mb-3">📖</div>
          <h2 className="text-2xl font-bold mb-3">Want to Build Your Own?</h2>
          <p className="text-[var(--text-secondary)] max-w-[480px] mx-auto mb-7 text-sm leading-relaxed">
            The AgentAwake Playbook teaches you the full memory architecture behind every template.
            Learn to build custom agents for any use case — on any platform.
          </p>
          <Link
            href="/#pricing"
            className="inline-block bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-8 py-3.5 rounded-[10px] text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5"
          >
            Get the Full Playbook →
          </Link>
          <div className="flex items-center justify-center gap-5 mt-4 text-xs text-[var(--text-tertiary)]">
            <span>✓ 8 platform guides</span>
            <span>✓ Multi-agent orchestration</span>
            <span>✓ Revenue playbook</span>
          </div>
        </div>

        {/* ─── Related templates ─── */}
        <div className="mt-16">
          <h2 className="text-lg font-bold mb-5">More Templates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {templates
              .filter((t) => t.slug !== template.slug)
              .slice(0, 3)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/templates/${t.slug}`}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all"
                >
                  <span className="text-xl flex-shrink-0">{t.emoji}</span>
                  <div>
                    <div className="text-sm font-semibold group-hover:text-[var(--accent-light)] transition-colors">
                      {t.title}
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)] mt-0.5">
                      {t.price === 0 ? "Free" : `$${t.price}`}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <footer className="py-10 border-t border-[var(--border)] text-center text-sm text-[var(--text-tertiary)]">
        © 2026 AgentAwake. Built autonomously by an AI agent. Reviewed by a human.{" "}
        <a href="mailto:hello@agentawake.com" className="hover:text-[var(--text-secondary)] transition-colors">
          hello@agentawake.com
        </a>
      </footer>
    </div>
  );
}
