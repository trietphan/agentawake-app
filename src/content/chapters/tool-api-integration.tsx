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
        An agent without tools is just a chatbot. Tools are what make agents <strong>actually useful</strong> — they can search the web, read files, send messages, deploy code, and interact with any API. This chapter covers how to wire it all up.
      </p>

      <Analogy>
        A chef without a kitchen is just someone who knows recipes. The <strong>tools</strong> (oven, knives, pans) are what turn knowledge into meals. Your agent's tools are what turn intelligence into action. More tools = more capable chef. Better tools = better meals.
      </Analogy>

      <h2>The Tool Landscape</h2>

      <div className="my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">🔍 Information Tools</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Web search (Google, Brave, Perplexity)</li>
            <li>• Web browsing / scraping</li>
            <li>• File reading</li>
            <li>• Database queries</li>
            <li>• API data fetching</li>
          </ul>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">✍️ Action Tools</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• File writing / code generation</li>
            <li>• Message sending (Discord, Slack, email)</li>
            <li>• Deployment (Vercel, AWS, Docker)</li>
            <li>• Git operations</li>
            <li>• Payment processing</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🧠 Cognitive Tools</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Memory read/write</li>
            <li>• Sub-agent spawning</li>
            <li>• Code execution (sandboxed)</li>
            <li>• Image analysis / generation</li>
            <li>• TTS / speech synthesis</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--accent-light)]/15 bg-[var(--accent-light)]/4 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🔗 Integration Tools</div>
          <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
            <li>• Webhooks (incoming/outgoing)</li>
            <li>• MCP servers (Model Context Protocol)</li>
            <li>• OAuth connections</li>
            <li>• Calendar (Google, Outlook)</li>
            <li>• CRM (HubSpot, Salesforce)</li>
          </ul>
        </div>
      </div>

      <h2>MCP (Model Context Protocol) — The Future of Tool Integration</h2>

      <p>MCP is an open standard (created by Anthropic) that lets any AI agent connect to any tool server through a universal protocol. Think of it as <strong>USB for AI tools</strong> — plug in any MCP server and your agent can use it immediately.</p>

      <Code title="MCP Server Setup Example">{`# Install an MCP server (e.g., filesystem access)
npx @anthropic/create-mcp-server filesystem

# Or use community MCP servers:
npx mcp-server-github    # GitHub operations
npx mcp-server-slack     # Slack integration  
npx mcp-server-postgres  # Database access
npx mcp-server-brave     # Web search

# Configure in your agent's config:
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@anthropic/mcp-server-filesystem", "/path/to/workspace"]
    },
    "github": {
      "command": "npx", 
      "args": ["mcp-server-github"],
      "env": { "GITHUB_TOKEN": "ghp_xxxx" }
    }
  }
}`}</Code>

      <h2>🔌 Tool Integration by Platform</h2>

      <div className="my-6 space-y-4">
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <div className="text-sm font-bold text-cyan-400 mb-2">🐾 OpenClaw — Built-in Tool Suite</div>
          <p className="text-xs text-[var(--text-secondary)] mb-2">OpenClaw comes with tools pre-wired. You configure which ones are available:</p>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>exec:</strong> Shell commands, background processes</li>
            <li>• <strong>web_search / web_fetch:</strong> Search and scrape the web</li>
            <li>• <strong>browser:</strong> Full browser automation (Playwright-based)</li>
            <li>• <strong>message:</strong> Send to Discord, Telegram, Slack, WhatsApp, Signal</li>
            <li>• <strong>cron:</strong> Schedule recurring tasks</li>
            <li>• <strong>nodes:</strong> Control paired devices (camera, screen, location)</li>
            <li>• <strong>sessions_spawn:</strong> Create sub-agent sessions</li>
            <li>• <strong>image / tts:</strong> Image analysis and text-to-speech</li>
          </ul>
        </div>
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
          <div className="text-sm font-bold text-green-400 mb-2">🤖 Claude — MCP + Tool Use API</div>
          <Code title="Claude Tool Use (Python)">{`import anthropic

client = anthropic.Anthropic()

# Define tools the agent can use
tools = [
    {
        "name": "search_web",
        "description": "Search the web for current information",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search query"}
            },
            "required": ["query"]
        }
    },
    {
        "name": "send_email",
        "description": "Send an email",
        "input_schema": {
            "type": "object",
            "properties": {
                "to": {"type": "string"},
                "subject": {"type": "string"},
                "body": {"type": "string"}
            },
            "required": ["to", "subject", "body"]
        }
    }
]

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "Search for AI news today"}]
)

# Handle tool calls in the response
for block in response.content:
    if block.type == "tool_use":
        # Execute the tool and return results
        result = execute_tool(block.name, block.input)
        # Continue conversation with tool result...`}</Code>
        </div>
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
          <div className="text-sm font-bold text-blue-400 mb-2">💬 ChatGPT — Function Calling</div>
          <Code title="OpenAI Function Calling">{`import openai

tools = [{
    "type": "function",
    "function": {
        "name": "get_stock_price",
        "description": "Get current stock price",
        "parameters": {
            "type": "object",
            "properties": {
                "symbol": {"type": "string", "description": "Stock ticker"}
            },
            "required": ["symbol"]
        }
    }
}]

response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "What's AAPL at?"}],
    tools=tools,
    tool_choice="auto"
)

# Check if model wants to call a function
if response.choices[0].message.tool_calls:
    for call in response.choices[0].message.tool_calls:
        result = execute_function(call.function.name, 
                                  call.function.arguments)
        # Return result to continue conversation`}</Code>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">🚀 CrewAI / LangChain — Custom Tools</div>
          <Code title="CrewAI Custom Tool">{`from crewai_tools import BaseTool

class PriceLookupTool(BaseTool):
    name: str = "Price Lookup"
    description: str = "Look up current price for a product or service"
    
    def _run(self, query: str) -> str:
        # Your implementation here
        result = search_prices(query)
        return f"Found: {result}"

# Assign tools to agents
agent = Agent(
    role="Research Analyst",
    tools=[PriceLookupTool(), SearchTool(), WebScrapeTool()],
    llm="claude-sonnet-4-20250514"
)`}</Code>
        </div>
        <div className="rounded-xl border border-[var(--accent)]/15 bg-[var(--accent)]/5 p-5">
          <div className="text-sm font-bold text-[var(--accent-light)] mb-2">⚡ n8n / Make / Zapier — Visual Wiring</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>n8n:</strong> 400+ integrations. Drag nodes for Slack, Gmail, Sheets, HTTP, etc. AI agent node connects to OpenAI/Anthropic with tool definitions</li>
            <li>• <strong>Make:</strong> 1000+ app modules. Use "AI Text Generator" module with custom connections</li>
            <li>• <strong>Zapier:</strong> 6000+ apps. Use "Code by Zapier" for custom logic, "Webhooks" for API calls</li>
            <li>• <strong>Best practice:</strong> Use webhooks as the bridge between AI agents and no-code tools</li>
          </ul>
        </div>
        <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
          <div className="text-sm font-bold text-yellow-400 mb-2">💻 Cursor / Windsurf / Cline — MCP Integration</div>
          <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
            <li>• <strong>Cursor:</strong> Supports MCP servers natively. Add to settings, agent can use any MCP tool</li>
            <li>• <strong>Cline:</strong> Full MCP support. Create/install MCP servers directly from Cline</li>
            <li>• <strong>Windsurf:</strong> MCP support via configuration file</li>
            <li>• <strong>Use case:</strong> Connect coding agent to GitHub MCP for PR creation, database MCP for schema queries</li>
          </ul>
        </div>
      </div>

      <h2>Webhook Patterns</h2>

      <p>Webhooks are the universal glue. Any platform can send/receive webhooks, making them the easiest way to connect different systems:</p>

      <Code title="Webhook Integration Pattern">{`# Incoming webhook: External service → Your agent
# Example: Stripe payment → trigger agent action
POST https://your-openclaw.com/webhook/stripe
{
  "event": "payment.completed",
  "amount": 29.00,
  "customer": "john@example.com"
}
# Agent receives this as a system event and acts on it

# Outgoing webhook: Your agent → External service  
# Example: Agent publishes content → notify Slack
POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL
{
  "text": "📝 New content published: [Title]",
  "channel": "#content-updates"
}`}</Code>

      <Callout emoji="🔌" title="Start with 3 Tools, Expand from There">
        Don't try to wire up 20 integrations on day one. Start with: <strong>1) Web search</strong> (information), <strong>2) File system</strong> (memory), <strong>3) One messaging channel</strong> (output). Master those three, then add more as needed.
      </Callout>

      <h2>The Tool Integration Hierarchy</h2>

      <FlowDiagram steps={[
        { emoji: "🔍", label: "Information Tools", detail: "Web search, RSS feeds, API reads — your agent learns about the world" },
        { emoji: "💾", label: "Memory Tools", detail: "File system, databases, vector stores — your agent remembers" },
        { emoji: "📤", label: "Output Tools", detail: "Messaging, email, social media — your agent communicates" },
        { emoji: "⚡", label: "Action Tools", detail: "Webhooks, deployments, payments — your agent DOES things" },
        { emoji: "🔗", label: "Integration Tools", detail: "Zapier, Make, custom APIs — your agent connects to your stack" }
      ]} />

      <p>Move through this hierarchy in order. Each level builds on the previous one. Don't give your agent action tools until it's proven reliable with information and memory tools first.</p>

      <h2>API Integration Patterns</h2>

      <p>When connecting your agent to external APIs, use these patterns:</p>

      <div className="my-6 space-y-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔄 Read-then-Act</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent reads data from the API, processes it, then takes action. Example: read Stripe dashboard → analyze churn → post summary to Discord. Always read first, act second.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🎣 Webhook Listener</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent receives webhook events and reacts. Example: Stripe sends "new subscription" webhook → agent updates knowledge base → posts celebration to team chat. Event-driven, real-time.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)]/30 p-4">
          <div className="text-sm font-semibold text-[var(--foreground)]">🔁 Poll and Diff</div>
          <p className="text-xs text-[var(--text-tertiary)] mt-1">Agent periodically polls an API and compares with last known state. Example: check competitor pricing page every Monday → diff with saved version → alert if changed. Simple but effective.</p>
        </div>
      </div>

      <h2>Error Handling for API Tools</h2>

      <p>APIs fail. A lot. Your agent needs to handle: rate limits (back off and retry), auth failures (alert you, don't retry with bad creds), timeouts (retry once, then move on), and unexpected responses (log them and use fallback behavior). The agents that survive are the ones that fail gracefully, not the ones that never fail.</p>

      <Tip emoji="🔑" title="API Keys: The Rotation Rule">
        Rotate your API keys every 90 days. Set a cron job reminder. When a key leaks (and eventually one will), you want the blast radius to be small. Also: never give your agent a key with more permissions than it needs. Read-only keys for read-only tasks.
      </Tip>

      <Tip emoji="🧪" title="Test APIs with Curl First">
        Before wiring an API into your agent, test it manually with curl. Understand the request format, response structure, rate limits, and error codes. THEN teach your agent. Debugging an API issue through an agent layer is 10x harder than debugging it directly.
      </Tip>

      <Quiz
        question="Your agent needs to check Stripe for new subscriptions and post them to Discord. What's the best integration pattern?"
        options={[
          { text: "Poll the Stripe API every minute from a cron job", explanation: "Polling every minute is wasteful and will eat your rate limit. Stripe has webhooks — use them." },
          { text: "Set up a Stripe webhook that triggers the agent on 'customer.subscription.created' events", correct: true, explanation: "Correct! Webhooks are real-time, efficient, and exactly what Stripe was designed for. Your agent reacts to events instead of constantly asking 'anything new?'" },
          { text: "Have the agent scrape the Stripe dashboard website", explanation: "Never scrape when there's an API. It's fragile, slow, and might violate terms of service." },
          { text: "Manually tell the agent when you see a new subscription", explanation: "This defeats the purpose of automation. The whole point is that the agent catches events you'd miss." }
        ]}
      />
    </>
  );
}
