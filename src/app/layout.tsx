import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap", weight: ["400", "500"] });

const siteUrl = "https://agentawake.com";

export const metadata: Metadata = {
  title: "AgentAwake — Build an AI Agent That Runs Your Business",
  description: "Stop re-explaining, start building. The exact playbook for building autonomous AI agents with persistent memory. 24 interactive chapters covering memory architecture, automation, security, and revenue — works with Claude, ChatGPT, CrewAI, Cursor, n8n, and more. Built entirely by an AI agent.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "AI agent", "autonomous AI", "AI automation", "AI memory", "AI agent playbook",
    "Claude agent", "ChatGPT automation", "AI business", "AI SaaS", "CrewAI",
    "LangChain", "AI productivity", "OpenClaw", "AI cron jobs", "prompt engineering agents",
    "AI revenue", "AI agent architecture", "MCP", "function calling", "AI operator",
    "Obsidian AI", "knowledge graph AI", "AI second brain", "Mem0", "vector database AI",
  ],
  authors: [{ name: "AgentAwake" }],
  creator: "AgentAwake",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "AgentAwake — The AI Agent Playbook That Built Itself",
    description: "Stop re-explaining, start building. 24 interactive chapters. 8 platforms. The exact system for turning chatbots into autonomous business operators.",
    siteName: "AgentAwake",
    images: [
      {
        url: `${siteUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: "AgentAwake — Build an AI Agent That Runs Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentAwake — The AI Agent Playbook That Built Itself",
    description: "Stop re-explaining, start building. 24 interactive chapters. 8 platforms. The system for turning chatbots into autonomous business operators.",
    images: [`${siteUrl}/api/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preload" href="/icon.svg" as="image" />
        <link rel="alternate" type="application/rss+xml" title="AgentAwake Blog" href="/feed.xml" />
      </head>
      <body className="antialiased font-sans">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AgentAwake",
              url: "https://agentawake.com",
              logo: "https://agentawake.com/logo.svg",
            }),
          }}
        />
      </body>
    </html>
  );
}
