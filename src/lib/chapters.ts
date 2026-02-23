import { UserTier } from "./auth";

export interface Chapter {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  emoji: string;
  requiredTier: UserTier;
  readTime: string;
}

export const chapters: Chapter[] = [
  // FREE PREVIEW
  {
    slug: "why-your-agent-has-amnesia",
    number: 0,
    title: "Why Your AI Agent Has Amnesia",
    subtitle: "And why it's like hiring a genius who gets blackout drunk every night",
    emoji: "🧠",
    requiredTier: "free",
    readTime: "4 min",
  },

  // BLUEPRINT TIER ($9)
  {
    slug: "the-three-layer-brain",
    number: 1,
    title: "The Three-Layer Brain",
    subtitle: "Think of it like a kitchen: pantry, countertop, and recipe book",
    emoji: "🧁",
    requiredTier: "blueprint",
    readTime: "8 min",
  },
  {
    slug: "knowledge-base",
    number: 2,
    title: "Layer 1: The Knowledge Base",
    subtitle: "Marie Kondo your agent's brain (it sparks SO much joy)",
    emoji: "📚",
    requiredTier: "blueprint",
    readTime: "10 min",
  },
  {
    slug: "daily-notes",
    number: 3,
    title: "Layer 2: Daily Notes",
    subtitle: "Your agent's morning coffee ritual (but actually useful)",
    emoji: "📝",
    requiredTier: "blueprint",
    readTime: "8 min",
  },
  {
    slug: "tacit-knowledge",
    number: 4,
    title: "Layer 3: Tacit Knowledge",
    subtitle: "Teaching your agent your vibes (yes, really)",
    emoji: "✨",
    requiredTier: "blueprint",
    readTime: "7 min",
  },
  {
    slug: "heartbeat-and-cron",
    number: 5,
    title: "The Heartbeat & Cron System",
    subtitle: "Like giving your agent a Fitbit — it checks in even when you don't",
    emoji: "💓",
    requiredTier: "blueprint",
    readTime: "9 min",
  },
  {
    slug: "security-basics",
    number: 6,
    title: "The Security Model",
    subtitle: "Teaching your agent stranger danger (it's more important than you think)",
    emoji: "🛡️",
    requiredTier: "blueprint",
    readTime: "8 min",
  },
  {
    slug: "day-one-checklist",
    number: 7,
    title: "Day One: Your 45-Minute Setup",
    subtitle: "Less time than an episode of The Office. More life-changing.",
    emoji: "🚀",
    requiredTier: "blueprint",
    readTime: "6 min",
  },

  // PRO TIER ($29)
  {
    slug: "copy-paste-configs",
    number: 8,
    title: "Copy-Paste Config Templates",
    subtitle: "The IKEA instructions your agent actually needs",
    emoji: "📋",
    requiredTier: "pro",
    readTime: "12 min",
  },
  {
    slug: "cron-recipes",
    number: 9,
    title: "4 Cron Job Recipes",
    subtitle: "Set it and forget it (like a slow cooker, but for productivity)",
    emoji: "⏰",
    requiredTier: "pro",
    readTime: "10 min",
  },
  {
    slug: "case-study-trading",
    number: 10,
    title: "Case Study: The Trading Bot",
    subtitle: "How our agent became a Wall Street morning person",
    emoji: "📊",
    requiredTier: "pro",
    readTime: "9 min",
  },
  {
    slug: "case-study-content",
    number: 11,
    title: "Case Study: 90/10 Content Pipeline",
    subtitle: "Your agent does the dishes, you bring the personality",
    emoji: "✍️",
    requiredTier: "pro",
    readTime: "8 min",
  },
  {
    slug: "case-study-validation",
    number: 12,
    title: "Case Study: Idea Validation Engine",
    subtitle: "Stop building things nobody wants (your agent will tell you)",
    emoji: "🔍",
    requiredTier: "pro",
    readTime: "8 min",
  },

  // ACCELERATOR TIER ($69)
  {
    slug: "bottleneck-elimination",
    number: 13,
    title: "The Bottleneck Elimination Framework",
    subtitle: "Every 'can you help me with this?' is a bug to fix forever",
    emoji: "🔧",
    requiredTier: "accelerator",
    readTime: "10 min",
  },
  {
    slug: "multi-agent-orchestration",
    number: 14,
    title: "Multi-Agent Orchestration",
    subtitle: "When one employee isn't enough, hire a team (of AI)",
    emoji: "🎭",
    requiredTier: "accelerator",
    readTime: "12 min",
  },
  {
    slug: "prompt-injection-defense",
    number: 15,
    title: "Prompt Injection Defense",
    subtitle: "People WILL try to trick your agent. Here's the immune system.",
    emoji: "🦠",
    requiredTier: "accelerator",
    readTime: "9 min",
  },
  {
    slug: "progressive-trust",
    number: 16,
    title: "The Progressive Trust Ladder",
    subtitle: "Like dating — don't give them the house keys on date one",
    emoji: "🪜",
    requiredTier: "accelerator",
    readTime: "8 min",
  },
  {
    slug: "cost-optimization",
    number: 17,
    title: "Cost Optimization & Model Selection",
    subtitle: "Stop burning $50/day on GPT-4 when $3/day gets you 90% there",
    emoji: "💸",
    requiredTier: "accelerator",
    readTime: "10 min",
  },
  {
    slug: "debugging-observability",
    number: 18,
    title: "Debugging & Observability",
    subtitle: "Your agent did something weird at 3 AM. Here's how to figure out why.",
    emoji: "🔬",
    requiredTier: "accelerator",
    readTime: "11 min",
  },
  {
    slug: "tool-api-integration",
    number: 19,
    title: "Tool & API Integration Patterns",
    subtitle: "MCP, function calling, webhooks — the wiring that makes agents actually useful",
    emoji: "🔌",
    requiredTier: "accelerator",
    readTime: "12 min",
  },
  {
    slug: "prompt-engineering-agents",
    number: 20,
    title: "Prompt Engineering for Agents",
    subtitle: "It's not the same as prompting ChatGPT. Here's what's different.",
    emoji: "🎯",
    requiredTier: "accelerator",
    readTime: "10 min",
  },
  {
    slug: "revenue-playbook",
    number: 21,
    title: "The Revenue Playbook",
    subtitle: "7 proven models for turning your agent setup into actual income",
    emoji: "💰",
    requiredTier: "accelerator",
    readTime: "14 min",
  },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function getTierChapters(tier: UserTier): Chapter[] {
  const tierLevel: Record<UserTier, number> = { free: 0, blueprint: 1, pro: 2, accelerator: 3 };
  const level = tierLevel[tier];
  return chapters.filter((c) => tierLevel[c.requiredTier] <= level);
}
