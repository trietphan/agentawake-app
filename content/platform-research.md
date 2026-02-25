# Platform Research: AI Agent Memory Architectures
> Compiled February 2026 for AgentAwake Playbook implementation guides

---

## 1. Claude (Anthropic)

### Current Capabilities (Early 2026)
- **Claude Projects** (Pro/Team/Enterprise): Self-contained workspaces with custom instructions, document library (knowledge files), and persistent conversation history
- **Claude Code CLI**: Local terminal-based agent with file system access, tool use, and persistent memory
- **MCP (Model Context Protocol)**: Open standard for connecting Claude to external tools and data sources via local servers

### Memory/Persistence Features

#### Claude Projects (Web UI)
- **Custom Instructions**: System-prompt-level text that applies to all conversations in the project (up to ~7500 words)
- **Knowledge Files**: Upload documents (PDF, TXT, CSV, code files) that persist across all chats in the project — up to 200K tokens of context per project
- **Conversation History**: Each project maintains separate chat histories
- **Limitations**: No cross-project memory, no API access to project knowledge, no scheduled/automated runs

#### Claude Code CLI — Memory System
Claude Code has a sophisticated hierarchical memory system:

| Memory Type | Location | Purpose | Shared With |
|---|---|---|---|
| **Managed policy** | `/Library/Application Support/ClaudeCode/CLAUDE.md` (macOS) | Org-wide instructions | All users |
| **Project memory** | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Team-shared project instructions | Team via git |
| **Project rules** | `./.claude/rules/*.md` | Modular topic-specific rules | Team via git |
| **User memory** | `~/.claude/CLAUDE.md` | Personal preferences, all projects | Just you |
| **Project local** | `./CLAUDE.local.md` | Personal project-specific prefs | Just you |
| **Auto memory** | `~/.claude/projects/<project>/memory/` | Claude's automatic notes & learnings | Just you (per project) |

- **Auto memory**: Claude automatically saves project patterns, build commands, debugging insights, architecture notes, and user preferences. First 200 lines of `MEMORY.md` loaded at session start.
- **CLAUDE.md files**: Loaded in full at launch. Files in child directories load on-demand.
- `CLAUDE.local.md` auto-added to `.gitignore` — ideal for private preferences

#### MCP Memory Servers
- **mcp-memory-service** (open source): Persistent memory with knowledge graphs, autonomous consolidation. REST API, 5ms retrieval. `pip install mcp-memory-service`
- **mcp-memory-keeper**: Persistent context management specifically for coding assistants — survives context compaction
- Configure in `~/.claude/settings.json` or `.claude/settings.json`:

```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "mcp-memory-service"],
      "env": {
        "MEMORY_DIR": "/path/to/memory/store"
      }
    }
  }
}
```

### Implementing 3-Layer Memory in Claude

#### Layer 1: Knowledge Base (PARA Structure in Claude Projects)
Create a Claude Project with knowledge files organized as:
- `projects-active.md` — Current project docs, goals, architecture
- `areas-ongoing.md` — Responsibilities, recurring workflows
- `resources-reference.md` — Templates, API docs, config examples
- Upload as project knowledge files; referenced automatically in all chats

#### Layer 2: Daily Notes (Claude Code)
```
# In CLAUDE.md:
## Memory Policy
- Write daily observations to memory/YYYY-MM-DD.md
- After each task, append 1-3 bullet summary (decisions + next steps)
- When user says "remember:" → append to today's daily note
```

#### Layer 3: Tacit Knowledge
- `CLAUDE.md` (project root) for team-shared patterns and preferences
- `~/.claude/CLAUDE.md` for personal style preferences
- `.claude/rules/*.md` for modular guidelines (testing, API standards, etc.)
- Auto memory captures implicit patterns over time

### Automation Capabilities
- **Claude Code**: Can be invoked via CLI (`claude` command), scriptable with shell/cron
- **No native scheduling** in Claude Projects (web UI)
- **MCP tools** can trigger external automations
- **Claude Code subagents**: Can spawn background tasks
- Example cron for daily consolidation:
```bash
# Crontab entry
0 2 * * * cd /path/to/project && claude --print "Read recent daily notes and update knowledge base" >> /tmp/claude-cron.log 2>&1
```

### Limitations & Workarounds
- Claude Projects: No API, no automation, no cross-project memory → Use Claude Code for automation needs
- Claude Code auto memory: Only first 200 lines loaded → Keep MEMORY.md curated
- No native vector search in file-based memory → Use MCP memory servers for semantic recall
- Context window limits → Structure knowledge files to be scannable, not monolithic

---

## 2. ChatGPT / OpenAI

### Current Capabilities (Early 2026)
- **ChatGPT Memory**: Native memory feature that remembers facts across conversations. Rolling out to free users (June 2025+)
- **Custom GPTs**: Specialized assistants with custom instructions + knowledge files
- **Assistants API**: Programmatic agents with file search, code interpreter, and function calling
- **GPT-5 / o-series models**: Advanced reasoning capabilities

### Memory/Persistence Features

#### ChatGPT Native Memory
- Automatically saves user preferences, facts, and context from conversations
- Stored as short text snippets (e.g., "The user lives in Seattle", "User prefers Python")
- Users can view, edit, and delete individual memories in Settings → Personalization → Memory
- "Model Set Context" — inferred preferences from conversation patterns (separate from explicit memories)
- **Limitation**: Memory is global (not per-project), opaque, and can hallucinate memories

#### Custom GPTs
- **Instructions**: Up to ~8000 characters of system-level instructions
- **Knowledge Files**: Upload up to 20 files (up to 512MB each), searchable via built-in retrieval
- **Actions**: Connect to external APIs via OpenAPI specs
- **Conversation Starters**: Pre-defined prompts
- **Limitations**: No persistent memory between conversations (each chat starts fresh with only instructions + knowledge), no cron/scheduling

#### Assistants API
- **Threads**: Persistent conversation threads that maintain message history
- **File Search**: Upload files to vector stores, automatically chunked and embedded
- **Code Interpreter**: Execute Python in a sandbox, read/write files
- **Function Calling**: Define custom tools the assistant can invoke
- **Vector Stores**: Persistent storage for document retrieval (up to 10,000 files per store)

```python
from openai import OpenAI
client = OpenAI()

# Create a vector store for knowledge base
vector_store = client.vector_stores.create(name="agent-knowledge")

# Upload knowledge files
file = client.files.create(file=open("knowledge-base.md", "rb"), purpose="assistants")
client.vector_stores.files.create(vector_store_id=vector_store.id, file_id=file.id)

# Create assistant with memory
assistant = client.assistants.create(
    name="AgentAwake Assistant",
    instructions="""You are a persistent agent with a 3-layer memory system.
    Layer 1: Search the knowledge vector store for reference information.
    Layer 2: Use code interpreter to read/write daily notes in /mnt/data/daily/.
    Layer 3: Your instructions (this text) encode tacit knowledge.""",
    model="gpt-4o",
    tools=[
        {"type": "file_search"},
        {"type": "code_interpreter"}
    ],
    tool_resources={
        "file_search": {"vector_store_ids": [vector_store.id]}
    }
)

# Create persistent thread
thread = client.threads.create()
# Thread ID persists — use it across sessions
```

### Implementing 3-Layer Memory

#### Layer 1: Knowledge Base
- Upload structured markdown files to a Custom GPT or Assistants API vector store
- Organize as: `projects.md`, `areas.md`, `resources.md`
- For Assistants API: use vector stores with metadata filtering

#### Layer 2: Daily Notes
- **Custom GPTs**: Not possible natively (no persistence between chats)
- **Assistants API**: Use Code Interpreter to write files to `/mnt/data/`, but files are ephemeral per thread
- **Workaround**: Use Actions to call an external API (Notion, Google Sheets, or custom endpoint) that stores daily notes

#### Layer 3: Tacit Knowledge
- Custom GPT Instructions or Assistant system prompt
- Encode preferences, patterns, and lessons learned directly in instructions

### Automation Capabilities
- **No native cron/scheduling** in ChatGPT UI
- **Assistants API**: Fully programmable — trigger via any scheduler (cron, Zapier, Make, n8n)
- **Zapier/Make integration**: 
  - Trigger assistant runs on schedule
  - Connect to 5000+ apps for input/output
  - Example: Zapier Schedule → OpenAI Assistant → Google Sheets (daily log)
- **ChatGPT Actions**: GPTs can call webhooks but can't self-trigger

### Limitations & Workarounds
- ChatGPT memory is shallow (short text snippets) → Supplement with knowledge files
- Custom GPTs have no cross-session persistence → Use Assistants API with persistent threads
- Assistants API file storage is per-thread → Use external storage (S3, Notion) via function calling
- No native heartbeat/cron → Use Zapier, Make, or custom scheduler
- Knowledge file search can miss context → Structure files with clear headers and metadata

---

## 3. CrewAI

### Current Capabilities (Early 2026)
- Multi-agent orchestration framework in Python
- **Unified Memory class** replacing separate memory types
- Hierarchical crew structures with delegation
- Production-ready with Flows for complex orchestration
- Supports multiple LLM providers

### Memory/Persistence Features

CrewAI has a **unified Memory system** with:
- **Automatic scope inference**: LLM analyzes content and places it in a hierarchical scope tree
- **Composite scoring**: Blends semantic similarity, recency, and importance for retrieval
- **Four usage modes**: Standalone, with Crews, with Agents, inside Flows

```python
from crewai import Memory

memory = Memory()

# Store — LLM infers scope, categories, importance
memory.remember("We decided to use PostgreSQL for the user database.")

# Retrieve — ranked by composite score
matches = memory.recall("What database did we choose?")

# Tune scoring weights
memory = Memory(
    recency_weight=0.4,
    semantic_weight=0.4,
    importance_weight=0.2,
    recency_half_life_days=14
)

# Explore the self-organized scope tree
print(memory.tree())

# Forget specific scopes
memory.forget(scope="/project/old")
```

#### Hierarchical Scopes
```
/
  /company
    /company/engineering
    /company/product
  /project
    /project/alpha
    /project/beta
  /agent
    /agent/researcher
    /agent/writer
```

#### With Crews
```python
from crewai import Crew, Agent, Task, Process, Memory

# Simple: default memory
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential,
    memory=True,  # enables default Memory()
    verbose=True,
)

# Advanced: custom memory with tuned scoring
memory = Memory(
    recency_weight=0.5,
    recency_half_life_days=7,
)
crew = Crew(agents=[...], tasks=[...], memory=memory)
```

When `memory=True`:
- After each task: crew extracts discrete facts from output and stores them
- Before each task: agent recalls relevant context and injects into prompt

#### Agent-Scoped Memory
```python
memory = Memory()

# Private scope — only sees /agent/researcher
researcher = Agent(
    role="Researcher",
    goal="Find and analyze information",
    memory=memory.scope("/agent/researcher"),
)

# Writer uses shared crew memory (no agent-level memory set)
writer = Agent(role="Writer", goal="Produce content")
```

#### With Flows
```python
from crewai.flow.flow import Flow, listen, start

class ResearchFlow(Flow):
    @start()
    def gather_data(self):
        findings = "PostgreSQL handles 10k concurrent connections."
        self.remember(findings, scope="/research/databases")
        return findings

    @listen(gather_data)
    def write_report(self, findings):
        past = self.recall("database performance benchmarks")
        context = "\n".join(f"- {m.record.content}" for m in past)
        return f"Report:\n{findings}\nContext:\n{context}"
```

#### Long-Term Storage
- Default: SQLite at configurable `db_path`
- Custom backends: Any RAG storage (Pinecone, Weaviate, ChromaDB, etc.)

```python
from crewai.memory import EnhanceLongTermMemory
from crewai.memory.storage import LTMSQLiteStorage

crew = Crew(
    agents=[...],
    tasks=[...],
    memory=True,
    long_term_memory=EnhanceLongTermMemory(
        storage=LTMSQLiteStorage(
            db_path="/data/my_crew/long_term_memory.db"
        )
    ),
)
```

### Implementing 3-Layer Memory

#### Layer 1: Knowledge Base
- Use Memory scopes: `/knowledge/projects`, `/knowledge/areas`, `/knowledge/resources`
- Pre-load with `memory.remember(content, scope="/knowledge/...")` at crew initialization
- Or use custom RAG storage backed by a vector DB

#### Layer 2: Daily Notes
- Scope: `/daily/YYYY-MM-DD`
- Add a task at end of crew run to extract and store daily summary
- Use `memory.extract_memories(raw_text)` to atomize meeting notes into discrete facts

#### Layer 3: Tacit Knowledge
- Agent backstories encode tacit knowledge
- Scope: `/tacit/preferences`, `/tacit/patterns`
- Accumulates naturally through memory system over multiple runs

### Automation Capabilities
- Python-native — run via cron, systemd, or any scheduler
- CrewAI Flows support event-driven orchestration
- No built-in scheduling — use external scheduler

```bash
# Crontab
0 9 * * * cd /app && python -m crewai run daily_standup_crew
```

### crew.yaml Configuration
```yaml
# config/crew.yaml
crew:
  name: daily-ops
  process: sequential
  memory: true
  verbose: true

agents:
  researcher:
    role: "Research Analyst"
    goal: "Find relevant information"
    backstory: "Expert analyst with 10 years experience"
    memory: true
    
tasks:
  research:
    description: "Research the latest developments"
    agent: researcher
    expected_output: "Summary report"
```

### Limitations & Workarounds
- Memory persistence requires explicit `db_path` configuration for production
- Default embedder may not suit all use cases → Configure custom embedder
- No built-in UI for memory inspection → Use `memory.tree()` and `memory.info()` programmatically
- Scope inference depends on LLM quality → Specify scopes explicitly for critical data

---

## 4. AutoGPT / AgentGPT

### Current Capabilities (Early 2026)
- **AutoGPT Platform**: Evolved from the original autonomous agent into a low-code platform for building and deploying AI agents
- **AutoGPT Classic**: The original CLI-based autonomous agent (MIT licensed)
- **Forge**: Framework for building custom agents based on AutoGPT concepts
- **Agent Protocol Standard**: Standardized API for agent communication
- Repository split: `autogpt_platform/` (BSL license) vs classic agent + Forge (MIT)

### Memory/Persistence Features

#### Memory Backends (Classic Agent)
Configured via `.env` file:

```env
# Local JSON (default, no setup needed)
MEMORY_BACKEND=json

# Redis
MEMORY_BACKEND=redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Pinecone
MEMORY_BACKEND=pinecone
PINECONE_API_KEY=your-key
PINECONE_ENV=us-west1-gcp

# Weaviate
MEMORY_BACKEND=weaviate
WEAVIATE_HOST=127.0.0.1
WEAVIATE_PORT=8080
WEAVIATE_PROTOCOL=http
MEMORY_INDEX=Autogpt

# No memory
MEMORY_BACKEND=no_memory
```

Run with specific backend:
```bash
python scripts/main.py --use-memory pinecone
# or
docker run -it --env-file=./.env -v $PWD/auto_gpt_workspace:/app/auto_gpt_workspace autogpt
```

#### Workspace Persistence
- `auto_gpt_workspace/` directory persists files between runs
- Agent can read/write files here
- Mount as Docker volume for containerized deployments

#### AutoGPT Platform (2025+)
- Visual node-based agent builder
- Built-in persistence through the platform's backend
- Block-based architecture with reusable components
- Marketplace for sharing agent templates

### Implementing 3-Layer Memory

#### Layer 1: Knowledge Base
- Upload reference documents to workspace directory
- Use Pinecone/Weaviate for semantic search over knowledge
- Configure agent goals to reference specific knowledge files

#### Layer 2: Daily Notes
- Agent writes to `auto_gpt_workspace/daily/YYYY-MM-DD.md`
- Configure as a recurring task in agent goals
- Use `--continuous` mode for persistent operation

#### Layer 3: Tacit Knowledge
- `ai_settings.yaml` encodes agent personality and constraints:
```yaml
ai_name: AgentAwake
ai_role: "A persistent personal assistant that maintains context"
ai_goals:
  - "Maintain daily notes in workspace/daily/"
  - "Reference knowledge base before answering questions"
  - "Update tacit.md with learned preferences"
api_budget: 5.0
```

### Automation Capabilities
- `--continuous` mode: Agent runs without human approval for each step
- `--continuous-limit N`: Run N steps then stop
- Scriptable via CLI for cron integration
- Platform version has webhook triggers

### Limitations & Workarounds
- Classic agent can be expensive (many API calls per task) → Set `api_budget` limit
- Memory backends require separate infrastructure → Use JSON for local dev
- Agent can loop or hallucinate actions → Use `--continuous-limit` 
- Platform is relatively new, less community patterns → Consider LangGraph or CrewAI for production
- No native scheduling → Wrap in cron or container orchestration

---

## 5. LangChain / LangGraph

### Current Capabilities (Early 2026)
- **LangGraph**: Graph-based agent framework with explicit state management
- **LangChain**: Foundation library for LLM applications (chains, tools, retrievers)
- **LangSmith**: Observability platform for tracing, evaluation, and monitoring
- **LangServe**: Deploy LangChain/LangGraph apps as REST APIs
- **LangGraph Platform**: Managed deployment with built-in persistence

### Memory/Persistence Features

#### Short-Term Memory (Thread-Level)
Checkpointers save state at every graph superstep:

```python
from langgraph.checkpoint.memory import InMemorySaver

checkpointer = InMemorySaver()
graph = builder.compile(checkpointer=checkpointer)

# Each thread maintains conversation history
graph.invoke(
    {"messages": [{"role": "user", "content": "hi, I'm Bob"}]},
    {"configurable": {"thread_id": "1"}},
)
```

#### Production Checkpointers
```python
# PostgreSQL
from langgraph.checkpoint.postgres import PostgresSaver
DB_URI = "postgresql://postgres:postgres@localhost:5442/postgres?sslmode=disable"
with PostgresSaver.from_conn_string(DB_URI) as checkpointer:
    graph = builder.compile(checkpointer=checkpointer)

# MongoDB
from langgraph.checkpoint.mongodb import MongoDBSaver
with MongoDBSaver.from_conn_string("localhost:27017") as checkpointer:
    graph = builder.compile(checkpointer=checkpointer)

# AWS AgentCore
from langgraph_checkpoint_aws import AgentCoreMemorySaver
```

Available checkpointers: `InMemorySaver`, `PostgresSaver`, `AsyncPostgresSaver`, `MongoDBSaver`, `SqliteSaver`

#### Long-Term Memory (Cross-Session)
LangGraph's `Store` API for user/application-level persistence:

```python
from langgraph.store.memory import InMemoryStore

store = InMemoryStore()

# Store memories with namespaces
store.put(("user", "bob", "preferences"), "lang", {"value": "python"})
store.put(("user", "bob", "facts"), "location", {"value": "Seattle"})

# Retrieve
items = store.search(("user", "bob", "preferences"))
```

#### State Schema with TypedDict
```python
from typing import TypedDict, Annotated
from langgraph.graph import MessagesState

class AgentState(TypedDict):
    messages: Annotated[list, add_messages]
    knowledge_base: dict
    daily_notes: list[str]
    tacit_knowledge: dict
```

### Implementing 3-Layer Memory

#### Layer 1: Knowledge Base
```python
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from langchain.tools.retriever import create_retriever_tool

# Create vector store from knowledge files
vectorstore = Chroma.from_documents(docs, OpenAIEmbeddings())
retriever = vectorstore.as_retriever()

knowledge_tool = create_retriever_tool(
    retriever,
    "knowledge_base",
    "Search the knowledge base for project info, areas, and resources"
)
```

#### Layer 2: Daily Notes (File-Based Tool)
```python
from langchain.tools import tool
from datetime import date

@tool
def write_daily_note(content: str) -> str:
    """Write a note to today's daily log."""
    today = date.today().isoformat()
    path = f"memory/daily/{today}.md"
    with open(path, "a") as f:
        f.write(f"- {content}\n")
    return f"Noted in {path}"

@tool
def read_daily_notes(days_back: int = 7) -> str:
    """Read recent daily notes."""
    notes = []
    for i in range(days_back):
        d = date.today() - timedelta(days=i)
        path = f"memory/daily/{d.isoformat()}.md"
        if os.path.exists(path):
            notes.append(f"## {d}\n{open(path).read()}")
    return "\n".join(notes)
```

#### Layer 3: Tacit Knowledge (Store API)
```python
from langgraph.store.memory import InMemoryStore

store = InMemoryStore()

# Pre-load tacit knowledge
store.put(("tacit",), "code_style", {
    "value": "Prefer functional patterns, type hints required"
})
store.put(("tacit",), "communication", {
    "value": "Be concise, skip pleasantries, show code"
})
```

### Automation / Scheduling
- **LangServe**: Deploy as REST API, trigger via any HTTP client
- **LangGraph Platform**: Managed hosting with cron-like capabilities
- **Custom**: Standard Python cron (APScheduler, celery-beat, system cron)

```python
# Deploy with LangServe
from langserve import add_routes
from fastapi import FastAPI

app = FastAPI()
add_routes(app, graph, path="/agent")
# POST /agent/invoke to trigger
```

### LangSmith Observability
```python
import os
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "ls__..."
os.environ["LANGCHAIN_PROJECT"] = "agent-awake"
# All LangGraph runs automatically traced
```

### Limitations & Workarounds
- LangGraph has a steeper learning curve than simple chains → Start with `create_react_agent` preset
- InMemorySaver doesn't persist across restarts → Use PostgresSaver for production
- Store API is relatively new → Consider file-based fallback for simplicity
- LangServe is being superseded by LangGraph Platform → Check current deployment recommendations

---

## 6. n8n

### Current Capabilities (Early 2026)
- **Visual workflow automation** platform (open source, self-hostable)
- **AI Agent nodes**: LangChain-based agent execution within workflows
- **400+ integrations**: Connect to virtually any service
- **Self-hosted or cloud**: Full control over data and execution
- **Cron/Schedule triggers**: Native scheduling built-in

### Memory/Persistence Features

#### AI Agent Node
- Built on LangChain under the hood
- Supports multiple LLM providers (OpenAI, Anthropic, Ollama, etc.)
- **Chat Memory nodes**: 
  - **Window Buffer Memory**: Last N messages (in-memory, per execution)
  - **Postgres Chat Memory**: Persistent chat history in PostgreSQL/Supabase
  - **Redis Chat Memory**: Persistent via Redis
  - **Motorhead Memory**: Managed memory service

#### Postgres Chat Memory (with Supabase)
Workflow pattern:
1. **Schedule Trigger** or **Webhook** → triggers the workflow
2. **AI Agent** node → processes the request
3. **Postgres Chat Memory** sub-node → stores/retrieves conversation history
4. **Supabase** or **Postgres** nodes → read/write structured data

Setup:
- Create a Supabase project (or self-hosted Postgres)
- Configure Postgres credentials in n8n
- AI Agent node automatically creates and manages the `chat_messages` table
- Session ID differentiates conversations

#### Vector Store for RAG
- **Supabase Vector Store** node: Store and retrieve embeddings
- **Pinecone**, **Qdrant**, **Weaviate** nodes also available
- Chain: Document Loader → Text Splitter → Embeddings → Vector Store

### Implementing 3-Layer Memory

#### Layer 1: Knowledge Base
n8n workflow:
1. **Manual Trigger** → process knowledge files
2. **Read Binary File** → load markdown/PDF documents
3. **Text Splitter** → chunk documents
4. **Embeddings** (OpenAI/Ollama) → generate vectors
5. **Supabase Vector Store** → store for retrieval

The AI Agent node then uses a **Vector Store Tool** to search this knowledge base.

#### Layer 2: Daily Notes
Workflow: `Daily Notes Agent`
1. **Schedule Trigger** (cron: `0 22 * * *` — 10 PM daily)
2. **AI Agent** → "Summarize today's activities and write to daily notes"
3. **Postgres** node → INSERT into `daily_notes` table
4. **Supabase** → or write to a Supabase table

Reading notes: AI Agent has a **Postgres Tool** that can query `SELECT * FROM daily_notes WHERE date >= NOW() - INTERVAL '7 days'`

#### Layer 3: Tacit Knowledge
- Store in a `tacit_knowledge` Postgres table or dedicated Supabase table
- AI Agent system prompt references these patterns
- Workflow to update: human triggers "remember this preference" → writes to tacit table

### Automation Capabilities
- **Schedule Trigger**: Full cron expression support
  - Every N minutes/hours
  - Specific times and days
  - Custom cron expressions
- **Webhook Trigger**: HTTP endpoint for on-demand execution
- **Email/Chat Triggers**: React to incoming messages
- Self-hosted: runs 24/7 on your server

```
Schedule Trigger (every day at 9 AM)
  → AI Agent (review inbox, check calendar)
    → Postgres Chat Memory (persist context)
    → Send Message (Slack/Discord/Email)
```

### Self-Hosted vs Cloud
| Aspect | Self-Hosted | n8n Cloud |
|---|---|---|
| Data control | Full | n8n manages |
| Cost | Server costs only | $20+/mo |
| Maintenance | You manage | Managed |
| Integrations | All | All |
| Execution limits | None | Plan-based |

Self-hosted recommended for agent memory (data sovereignty, no execution limits):
```bash
docker run -d --name n8n \
  -p 5678:5678 \
  -v n8n_data:/home/node/.n8n \
  -e N8N_ENCRYPTION_KEY=your-key \
  n8nio/n8n
```

### Limitations & Workarounds
- AI Agent node has limited tool access compared to code-based agents → Use Code nodes for custom logic
- Postgres Chat Memory can grow large → Implement cleanup workflow on schedule
- No native "agent memory" abstraction → Build it from primitives (Postgres + Vector Store + system prompt)
- Debugging AI agent workflows can be tricky → Use n8n's execution log + LangSmith integration

---

## 7. Cursor / Windsurf / Cline

### Current Capabilities (Early 2026)
- **Cursor**: AI-powered code editor (VS Code fork) with Agent mode, rules system, and memories
- **Windsurf** (Codeium): Similar AI coding editor with Cascade agent and rules
- **Cline** (formerly Claude Dev): VS Code extension for autonomous coding with Claude/GPT
- **RooCode**: Cline fork with enhanced features

### Memory/Persistence Features

#### Cursor Rules System
Three levels of rules:
1. **User Rules**: Personal preferences across all projects (Cursor Settings → Rules)
2. **Project Rules**: `.cursor/rules/*.md` — checked into git, shared with team
3. **`.cursorrules`** (legacy): Single file in project root (deprecated in favor of `.cursor/rules/`)

Rule types (frontmatter):
```markdown
---
rule_type: always
---
# Always Applied Rule
Never use phrases like "Certainly!" or "Of course!"
Just provide answers directly.
```

```markdown
---
rule_type: auto_attached
globs: ["*.test.ts", "*.spec.ts"]
---
# Testing Standards
Use vitest. Prefer `describe`/`it` blocks. Mock external dependencies.
```

```markdown
---
rule_type: agent_requested
description: "Database migration patterns"
---
# Migration Rules
Always use reversible migrations. Include both up and down.
```

#### Cursor Memories (Native Feature)
- Cursor can auto-generate memories from conversations
- Stored internally, loaded into context
- Use `/Generate Cursor Rules` command to create project rules from chat

#### Cursor Features for Context
- `@docs` — reference external documentation
- `@codebase` — search across your entire codebase
- `@file` — include specific files
- **Composer Agent Mode**: Multi-file autonomous editing with tool use

#### Windsurf Rules
- `.windsurfrules` file in project root (equivalent to `.cursorrules`)
- Similar syntax and purpose
- Cascade agent mode for multi-step tasks

#### Cline Rules & Memory
- `.clinerules` file or `.clinerules/` directory
- Cline can read/write files autonomously — natural fit for file-based memory
- Community pattern: **Memory Bank** system

### Memory Bank Pattern (Community Standard)
A widely-adopted pattern across Cursor/Cline/Windsurf:

```
project/
├── .cursor/rules/          # Cursor project rules
├── .clinerules/            # Cline rules + memory
├── .memory/                # Memory Bank directory
│   ├── project-brief.md    # What this project is
│   ├── tech-stack.md       # Technologies and patterns
│   ├── active-context.md   # Current work focus
│   ├── progress.md         # What's done, what's next
│   ├── decisions.md        # Architecture decisions log
│   └── errors.md           # Common errors and fixes
├── docs/                   # Living documentation
└── tasks/                  # Task management
```

Memory Bank rule (in `.cursor/rules/memory.md`):
```markdown
---
rule_type: always
---
# Memory Bank Protocol
At the start of every session, read all files in .memory/ directory.
Before making changes, update .memory/active-context.md with current focus.
After completing tasks, update .memory/progress.md.
When encountering errors, log solutions in .memory/errors.md.
When making architecture decisions, document in .memory/decisions.md.
```

### Implementing 3-Layer Memory

#### Layer 1: Knowledge Base
- `.memory/project-brief.md` — project overview, goals
- `.memory/tech-stack.md` — technologies, API docs references
- `.memory/architecture.md` — system design, key patterns
- Use `@docs` to link external documentation

#### Layer 2: Daily Notes
- `.memory/active-context.md` — updated each session with current focus
- `.memory/progress.md` — running log of completed work
- Not truly daily-note-based (sessions, not dates) — adapted to coding workflow

#### Layer 3: Tacit Knowledge
- `.cursor/rules/` — modular rules for code style, testing, API patterns
- `.memory/decisions.md` — why things are done a certain way
- `.memory/errors.md` — learned lessons from debugging

### Automation Capabilities
- **No native scheduling** — these are interactive editors
- Cursor Agent mode can run multi-step tasks autonomously within a session
- Cline can be triggered programmatically via VS Code extension API (advanced)
- **Workaround**: Use Claude Code or shell scripts for scheduled work, share memory files

### Limitations & Workarounds
- Context window limits — memory files compete with code context → Keep memory files concise
- No cross-session persistence by default → Memory Bank pattern solves this
- `.cursorrules` is deprecated → Migrate to `.cursor/rules/` directory
- Different editors have different rule formats → Maintain parallel files or use a common `.memory/` directory
- No semantic search over memory → Agent re-reads files each session (works for small projects)
- Cline/RooCode: Token costs can be high with large memory banks → Prioritize which files are "always" vs "agent_requested"

---

## 8. OpenClaw (Reference / Delta)

### Already Covered in Existing Chapters
- Full AGENTS.md / SOUL.md / MEMORY.md architecture
- PARA-structured knowledge base (`knowledge/projects/`, `knowledge/areas/`, etc.)
- Daily notes system (`memory/YYYY-MM-DD.md`)
- Tacit knowledge (`knowledge/tacit.md`)
- Heartbeat system for proactive work
- Cron scheduling for precise timing
- MCP integration
- Multi-channel support (Discord, Slack, WhatsApp)
- Subagent orchestration
- Browser automation
- Node control (remote macOS/devices)

### Delta: New/Updated Features (Since Playbook Written)
Based on current workspace configuration:

- **HEARTBEAT.md**: Editable checklist for heartbeat tasks — batches multiple periodic checks
- **Heartbeat vs Cron guidance**: Clear decision framework for when to use each
- **Memory maintenance during heartbeats**: Periodic MEMORY.md consolidation from daily notes
- **Knowledge base nightly consolidation**: 2 AM CT cron for auto-updating knowledge from daily notes
- **Subagent context**: Structured subagent spawning with clear task boundaries and auto-announcement
- **IDENTITY.md**: Separate identity file (name, creature type, vibe, emoji)
- **USER.md**: Structured user profile for personalization
- **Canvas tool**: Present/eval/snapshot rendered UI
- **Platform formatting rules**: Discord/WhatsApp-specific formatting (no markdown tables in Discord, etc.)
- **Operator mindset**: "Three approaches, attempt two" before declaring something impossible
- **Safety hierarchy**: `trash > rm`, ask before external actions
- **TTS integration**: Voice storytelling capabilities
- **Emoji reactions**: Natural social signaling in group chats

### OpenClaw-Specific Implementation Notes
The OpenClaw architecture is the reference implementation for the 3-layer memory system:

```
~/.openclaw/workspace/
├── AGENTS.md              # Operating manual (loaded every session)
├── SOUL.md                # Personality & values
├── IDENTITY.md            # Name, creature type, vibe
├── USER.md                # Human's profile
├── MEMORY.md              # Long-term curated memory
├── HEARTBEAT.md           # Heartbeat task checklist
├── TOOLS.md               # Environment-specific notes
├── memory/
│   ├── YYYY-MM-DD.md      # Daily notes (raw logs)
│   └── heartbeat-state.json
├── knowledge/
│   ├── projects/          # Active project docs
│   ├── areas/             # Ongoing responsibilities
│   ├── resources/         # Templates, configs
│   ├── archives/          # Completed projects
│   ├── tacit.md           # Preferences & patterns
│   └── README.md          # Structure overview
└── [project dirs]
```

---

## Cross-Platform Comparison Matrix

| Feature | Claude Code | ChatGPT | CrewAI | AutoGPT | LangGraph | n8n | Cursor/Cline | OpenClaw |
|---|---|---|---|---|---|---|---|---|
| **Built-in Memory** | CLAUDE.md + Auto | Native memories | Unified Memory | .env backends | Checkpointers + Store | Postgres Chat Memory | Rules + Memory Bank | AGENTS.md + MEMORY.md |
| **Knowledge Base** | Project files | Knowledge files / Vector stores | Memory scopes | Workspace files | Vector stores | Supabase Vector | .memory/ directory | knowledge/ PARA |
| **Daily Notes** | File-based | API only | Scope-based | Workspace files | Custom tools | Postgres table | progress.md | memory/YYYY-MM-DD.md |
| **Tacit Knowledge** | .claude/rules/ | Instructions | Agent backstory | ai_settings.yaml | Store API | System prompt | .cursor/rules/ | knowledge/tacit.md |
| **Scheduling** | CLI + cron | API + external | Python + cron | CLI + cron | API + cron | Native cron trigger | None | Heartbeat + cron |
| **Semantic Search** | MCP servers | Vector stores | Built-in | Vector backends | Built-in | Vector Store nodes | None (file-based) | MCP servers |
| **Multi-Agent** | Subagents | No | Core feature | Single agent | Graph nodes | Workflow nodes | No | Subagents |
| **Ease of Setup** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Production Ready** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | N/A (dev tool) | ⭐⭐⭐ |

---

## Key Takeaways for Playbook Authors

1. **File-based memory is the universal pattern**: Every platform either uses it natively (Claude Code, Cursor, OpenClaw) or can be made to (CrewAI, LangGraph, AutoGPT)

2. **The 3-layer model maps to every platform**, but implementation varies:
   - Knowledge Base → Vector stores (LangGraph, n8n) OR flat files (Claude Code, Cursor) OR scoped memory (CrewAI)
   - Daily Notes → File system (most) OR database tables (n8n, LangGraph) OR API storage (ChatGPT)
   - Tacit Knowledge → System prompts/instructions (all) + rule files (Claude Code, Cursor) + agent backstories (CrewAI)

3. **Automation is the biggest differentiator**: 
   - Native: n8n (cron triggers), OpenClaw (heartbeats + cron)
   - CLI-scriptable: Claude Code, CrewAI, AutoGPT, LangGraph
   - API-only: ChatGPT Assistants (needs external scheduler)
   - None: Cursor/Windsurf/Cline (interactive tools)

4. **CrewAI's unified Memory class** is the most sophisticated programmatic memory system — hierarchical scopes with LLM-inferred organization

5. **The Memory Bank pattern** for Cursor/Cline has become a community standard and is worth recommending as the default approach for coding agents
