/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Quiz,
  Checklist,
  Tip,
  CostCalculator,
  BeforeAfter,
  FlowDiagram,
  BrainDiagram,
  TrustSlider,
  ROICalculator,
  ArchitectureDiagram,
  AgentThinking,
} from "@/components/Interactive";
import { Callout, Analogy, Code } from "./shared";

export default function Chapter() {
  return (
    <>
      <p className="text-lg leading-relaxed mb-6">
        At some point, one agent won't be enough. Just like one employee can't run a whole company. This chapter covers how to build an AI team — and how each platform handles multi-agent differently.
      </p>

      <Analogy>
        Think of it like a <strong>small business</strong>:
        <br /><br />
        🔍 <strong>Research Agent</strong> = Your market analyst. Reads everything, spots trends, reports findings.<br />
        🔨 <strong>Builder Agent</strong> = Your developer. Writes code, deploys things, fixes bugs.<br />
        ✍️ <strong>Content Agent</strong> = Your marketing person. Writes posts, manages social, engages community.<br />
        ⚙️ <strong>Ops Agent</strong> = Your operations manager. Monitors systems, handles alerts, maintains infrastructure.<br /><br />
        <strong>You</strong> = The CEO. Vision, strategy, final decisions, and the occasional "no, absolutely not."
      </Analogy>

      <h2>Architecture Patterns</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">Pattern 1: Hub-and-Spoke (Recommended for Beginners)</div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">You're the hub. Each agent is a spoke. They communicate through shared files, not direct messages. Simple, debuggable, scalable.</p>
          <div className="text-xs text-[var(--text-tertiary)]">
            <p>Research Agent → writes to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">knowledge/research/</code></p>
            <p>Content Agent → reads research, writes to <code className="text-xs bg-[var(--surface-hover)] px-1 py-0.5 rounded">content/drafts/</code></p>
            <p>You → approve drafts</p>
            <p>Content Agent → publishes</p>
          </div>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">Pattern 2: Pipeline (For Sequential Workflows)</div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Agent A's output becomes Agent B's input. Like an assembly line. Best for content creation, data processing, code review.</p>
          <div className="text-xs text-[var(--text-tertiary)]">
            <p>Research → Draft → Edit → Format → Publish (each step = different agent or prompt)</p>
          </div>
        </div>
        <div className="rounded-xl border border-[var(--accent-light)]/15 bg-[var(--accent-light)]/4 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">Pattern 3: Swarm (For Complex Problems)</div>
          <p className="text-xs text-[var(--text-secondary)] mb-3">Multiple agents work on the same problem from different angles. A coordinator agent synthesizes results. Best for research, analysis, competitive intelligence.</p>
          <div className="text-xs text-[var(--text-tertiary)]">
            <p>Agent A searches Reddit + Agent B searches Twitter + Agent C checks competitors → Coordinator combines findings</p>
          </div>
        </div>
      </div>

      <h2>🔌 Multi-Agent on Every Platform</h2>

      <h3>🐾 OpenClaw — Native Multi-Agent</h3>
      <p>OpenClaw has built-in sub-agent spawning. The main agent can create isolated sessions for specific tasks.</p>

      <Code title="OpenClaw Sub-Agent Example">{`# In your main agent session, spawn a research sub-agent:
sessions_spawn(
  task: "Research the top 5 AI agent frameworks. 
         Compare features, pricing, community size. 
         Save findings to knowledge/research/frameworks.md",
  model: "sonnet",
  mode: "run"  # one-shot: runs task and returns result
)

# Spawn a content sub-agent:
sessions_spawn(
  task: "Read knowledge/research/frameworks.md. 
         Draft a Twitter thread comparing them. 
         Save to content/drafts/frameworks-thread.md",
  model: "sonnet",
  mode: "run"
)

# Main agent reviews both outputs and publishes`}</Code>

      <h3>🤖 Claude — Projects + Claude Code</h3>
      <p>Claude doesn't have native multi-agent, but you can simulate it with Projects and parallel conversations.</p>

      <Code title="Claude Multi-Agent Pattern">{`# Create separate Claude Projects for each "agent":

Project: "Research Agent"
  - Instructions: "You are a research analyst. 
    Your job is to find data and write briefs."
  - Upload: industry reports, competitor lists

Project: "Content Agent"  
  - Instructions: "You are a content writer. 
    You write in [my voice]. Never be corporate."
  - Upload: tacit.md, brand guidelines, past posts

# Workflow:
# 1. Ask Research Agent to investigate topic
# 2. Copy findings into Content Agent conversation
# 3. Content Agent drafts posts
# 4. You review and post

# With Claude Code CLI (true multi-agent):
# Run separate Claude Code instances in different 
# terminal tabs, each with different system prompts`}</Code>

      <h3>💬 ChatGPT — Custom GPTs as Agents</h3>
      <p>Create multiple Custom GPTs, each specialized for a role. Use the API for automated orchestration.</p>

      <Code title="ChatGPT Multi-Agent Pattern">{`# Create Custom GPTs:

GPT: "Market Researcher"
  Instructions: "You research markets. You use 
  browsing to find real data. Output structured 
  markdown reports."

GPT: "Content Writer"
  Instructions: "You write social media content. 
  You match [voice examples]. You output 
  platform-ready drafts."

GPT: "Code Reviewer"
  Instructions: "You review code for bugs, 
  security issues, and best practices. 
  You are brutally honest."

# API orchestration (Python):
import openai

# Step 1: Research
research = openai.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": researcher_prompt},
        {"role": "user", "content": "Research AI agents market"}
    ]
)

# Step 2: Content (uses research output)
content = openai.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": writer_prompt},
        {"role": "user", "content": f"Write a thread based on: {research}"}
    ]
)`}</Code>

      <h3>🚀 CrewAI — Purpose-Built Multi-Agent</h3>
      <p>CrewAI was literally designed for this. Define agents, give them roles, assign tasks, and let them collaborate.</p>

      <Code title="CrewAI Example (Python)">{`from crewai import Agent, Task, Crew

researcher = Agent(
    role="Market Research Analyst",
    goal="Find validated business opportunities",
    backstory="You're a veteran analyst who reads Reddit, "
              "Twitter, and HN to find pain points.",
    tools=[SearchTool(), WebScrapeTool()],
    llm="claude-sonnet-4-20250514"
)

writer = Agent(
    role="Content Strategist",
    goal="Turn research into engaging content",
    backstory="You write punchy, no-BS content that "
              "sounds human, not corporate.",
    llm="gpt-4o"
)

# Define tasks
research_task = Task(
    description="Find 5 pain points in the AI agent space",
    agent=researcher,
    expected_output="Markdown report with quotes and sources"
)

content_task = Task(
    description="Write a Twitter thread from the research",
    agent=writer,
    expected_output="Thread draft, 5-7 tweets",
    context=[research_task]  # Depends on research output
)

# Run the crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, content_task],
    verbose=True
)

result = crew.kickoff()`}</Code>

      <h3>🦜 LangChain — Chain-Based Orchestration</h3>

      <Code title="LangChain Multi-Agent (Python)">{`from langchain.agents import initialize_agent, Tool
from langchain.chat_models import ChatOpenAI

# Create specialized chains
research_llm = ChatOpenAI(model="gpt-4o", temperature=0)
content_llm = ChatOpenAI(model="gpt-4o", temperature=0.7)

# Define tools for research agent
tools = [
    Tool(name="Search", func=search_tool, 
         description="Search the web for information"),
    Tool(name="ReadReddit", func=reddit_tool,
         description="Read Reddit posts and comments"),
]

# Research agent
researcher = initialize_agent(
    tools, research_llm, 
    agent="zero-shot-react-description",
    verbose=True
)

# Pipeline: research → content
research_output = researcher.run(
    "Find pain points about AI agents on Reddit"
)
content_output = content_llm.predict(
    f"Write a thread based on: {research_output}"
)`}</Code>

      <h3>🤖 AutoGPT — Autonomous Multi-Agent</h3>

      <div className="my-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]/40 p-5">
        <div className="text-xs font-bold text-[var(--text-secondary)] mb-3">AUTOGPT APPROACH</div>
        <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
          <li>• AutoGPT runs fully autonomous — it decides its own sub-tasks</li>
          <li>• Define a high-level goal: "Build and validate a SaaS idea"</li>
          <li>• It creates its own agent team internally</li>
          <li>• <strong>Warning:</strong> Can be unpredictable. Set spending limits and review checkpoints.</li>
          <li>• Best for: exploration and brainstorming. Not for production workflows (yet).</li>
          <li>• Use our memory architecture (AGENTS.md, knowledge base) as AutoGPT's workspace files</li>
        </ul>
      </div>

      <h3>⚡ n8n / Make / Zapier — Visual Multi-Agent</h3>
      <p>No-code platforms handle multi-agent through workflow chains. Each AI node is effectively an "agent."</p>

      <Code title="n8n Multi-Agent Workflow">{`# n8n Workflow: Research → Draft → Approve → Post

Node 1: Schedule Trigger (7 AM daily)
  ↓
Node 2: HTTP Request → Search Twitter API
  ↓
Node 3: AI Agent (OpenAI) → "Analyze these tweets. 
         Find 3 trending topics in [niche]."
  ↓
Node 4: AI Agent (Claude) → "Write 3 tweet drafts 
         about the top topic. Voice: [examples]."
  ↓
Node 5: Slack Message → Send drafts to #content-review
  ↓
Node 6: Wait for Approval (Slack reaction ✅)
  ↓
Node 7: HTTP Request → Post to Twitter API

# Make.com: Same flow, drag-and-drop modules
# Zapier: Same concept, but use "Paths" for branching`}</Code>

      <h3>💻 Cursor / Windsurf / Cline — Coding Agent Teams</h3>
      <p>Coding agents benefit from the same memory architecture, but applied to code.</p>

      <Code title=".cursorrules (Memory Architecture for Coding)">{`# Project Memory Architecture

## Knowledge Base (always available)
- /docs/architecture.md — system design decisions
- /docs/api-spec.md — API contracts
- /docs/patterns.md — preferred code patterns

## Decision Protocols
- New component? → Use shadcn/ui + Tailwind
- State management? → Zustand for client, React Query for server
- Database? → Convex (dev) / Postgres (production)
- Testing? → Vitest + Playwright

## Tacit Knowledge (my preferences)
- I prefer composition over inheritance
- Use named exports, not default exports
- Error messages should be user-friendly
- Comments explain WHY, not WHAT
- Keep functions under 50 lines

## Multi-Agent Setup
- Tab 1: "Architect" — designs components, writes interfaces
- Tab 2: "Builder" — implements from architect's design
- Tab 3: "Reviewer" — reviews builder's code, catches bugs`}</Code>

      <h2>When to Add Another Agent</h2>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">✅ Add an Agent When:</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• Current agent is maxing out context window</li>
            <li>• Tasks need genuinely different expertise/models</li>
            <li>• You need parallel execution (research while drafting)</li>
            <li>• One agent's output feeds another's input cleanly</li>
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
          <div className="text-sm font-bold text-red-400 mb-2">❌ Don't Add an Agent When:</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• One agent can handle it with better prompting</li>
            <li>• You're adding complexity for complexity's sake</li>
            <li>• The coordination overhead exceeds the benefit</li>
            <li>• You haven't eliminated bottlenecks on agent #1 yet</li>
          </ul>
        </div>
      </div>

      <Callout emoji="💡" title="The Golden Rule">
        <strong>Start with 1 agent. Master it. Then add a second only when the pain of not having one is real.</strong> Most people never need more than 2-3. The ones running 10+ agents usually have 8 doing nothing useful.
      </Callout>

      <h2>The Orchestration Maturity Path</h2>

      <BeforeAfter
        before={{
          title: "Without Orchestration",
          items: [
            "One agent tries to do everything",
            "Context window overloaded with unrelated info",
            "Agent forgets mid-task because too much is loaded",
            "One failure breaks the entire workflow",
            "Can't scale beyond what one context window holds"
          ]
        }}
        after={{
          title: "With Orchestration",
          items: [
            "Each agent has a focused, specific role",
            "Clean context — each agent only loads what it needs",
            "Failures are isolated — one agent down doesn't kill the rest",
            "Agents can run in parallel for faster execution",
            "Scales horizontally by adding specialized agents"
          ]
        }}
      />

      <h2>Communication Patterns</h2>

      <p>How agents talk to each other matters more than how many you have. Here are the three patterns that actually work:</p>

      <FlowDiagram steps={[
        { emoji: "👑", label: "Hub & Spoke", detail: "One coordinator agent delegates to specialists. Best for most setups." },
        { emoji: "🔗", label: "Pipeline", detail: "Agent A's output feeds Agent B's input. Best for sequential workflows." },
        { emoji: "📢", label: "Event-Driven", detail: "Agents listen for events and react independently. Best for monitoring." }
      ]} />

      <p><strong>Hub & Spoke</strong> is what you want 90% of the time. One "manager" agent that understands the big picture and delegates specific tasks to specialist agents. The manager doesn't do the work — it coordinates.</p>

      <p><strong>Pipeline</strong> works for content workflows: Research Agent → Writing Agent → Editing Agent → Publishing Agent. Each agent is excellent at one thing and passes the baton.</p>

      <p><strong>Event-Driven</strong> is for monitoring setups: a price-change event triggers the trading agent, a new-mention event triggers the social media agent, a deploy event triggers the QA agent. No central coordinator needed.</p>

      <Tip emoji="🎯" title="The Two-Agent Sweet Spot">
        For most solopreneurs, the ideal setup is exactly two agents: one for your main workflow (content, coding, business ops) and one for monitoring/maintenance (uptime, backups, analytics). Two agents with clear boundaries outperform ten agents with fuzzy roles every single time.
      </Tip>

      <Tip emoji="📬" title="Use Files as Message Queues">
        The simplest way for agents to communicate is through shared files. Agent A writes to shared/tasks/content-brief.md, Agent B watches that directory and picks it up. No complex message broker needed. Files are debuggable, persistent, and human-readable.
      </Tip>

      <Quiz
        question="You have a content agent and a social media agent. What's the best way to coordinate them?"
        options={[
          { text: "Merge them into one agent that does both", explanation: "This overloads a single context window. Content creation and social media management are different skills requiring different context." },
          { text: "Content agent writes drafts to a shared folder, social media agent reads and publishes from there", correct: true, explanation: "Correct! The pipeline pattern with files as the interface. Each agent stays focused, the interface is simple and debuggable, and you can inspect the drafts between stages." },
          { text: "Have them send messages to each other via Discord", explanation: "Using a chat channel as an agent-to-agent communication layer adds latency and complexity. Files are simpler and more reliable." },
          { text: "Run them both on the same schedule so they coordinate automatically", explanation: "Same schedule doesn't mean coordination. They'd still need a way to share information — timing alone doesn't solve that." }
        ]}
      />
    </>
  );
}
