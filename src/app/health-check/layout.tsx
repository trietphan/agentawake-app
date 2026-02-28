import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Health Check — Free AI Agent Config Analyzer | AgentAwake",
  description: "Paste your AGENTS.md, SOUL.md, and MEMORY.md to get an instant health score + actionable recommendations. Free diagnostic tool for AI agent builders.",
  openGraph: {
    title: "Agent Health Check — Free AI Agent Config Analyzer | AgentAwake",
    description: "Is your AI agent configured for peak performance? Find out in 30 seconds. Free diagnostic tool.",
    url: "https://agentawake.com/health-check",
    siteName: "AgentAwake",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Health Check 🩺 — Free AI Agent Config Analyzer",
    description: "Paste your agent config files and get an instant score + recommendations. Takes 30 seconds.",
  },
  alternates: {
    canonical: "https://agentawake.com/health-check",
  },
};

export default function HealthCheckLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
