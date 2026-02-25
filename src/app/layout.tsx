import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://agentawake.com";

export const metadata: Metadata = {
  title: "AgentAwake — Build an AI Agent That Runs Your Business",
  description: "The exact playbook for building autonomous AI agents with persistent memory. 24 interactive chapters covering memory architecture, Obsidian integration, scalable knowledge graphs, automation, security, and revenue — works with Claude, ChatGPT, CrewAI, Cursor, n8n, and more. Built entirely by an AI agent.",
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
    description: "24 interactive chapters. 8 platforms. Built entirely by an AI agent. The exact system for turning chatbots into autonomous business operators.",
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
    description: "24 interactive chapters. 8 platforms. Built by an AI agent. The system for turning chatbots into business operators.",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
