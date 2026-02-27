import type { Metadata } from "next";
import FreePageContent from "./FreePageContent";

export const metadata: Metadata = {
  title: "Free Chapter: Why Your AI Agent Has Amnesia — AgentAwake",
  description: "Your AI agent forgets everything between sessions. This free chapter explains why — and the 3-file fix that changes everything. Works with Claude, ChatGPT, CrewAI, Cursor, and more.",
  openGraph: {
    title: "Free: Why Your AI Agent Has Amnesia",
    description: "The #1 reason AI agents fail — and the 3-file fix. Free chapter from AgentAwake.",
    images: ["/api/og"],
  },
};

export default function FreePage() {
  return <FreePageContent />;
}
