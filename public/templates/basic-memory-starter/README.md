# Basic Memory Starter — Setup Guide

**Time to set up: ~10 minutes**
**Works with:** Claude, ChatGPT, Cursor, OpenClaw, and most AI platforms

---

## What You're Getting

Three files that transform any AI assistant from an amnesiac chatbot into a persistent agent that actually knows you:

| File | What it does |
|------|-------------|
| `AGENTS.md` | System prompt — defines how your agent behaves |
| `SOUL.md` | Personality config — makes it feel like YOUR agent |
| `MEMORY.md` | Long-term memory — everything it needs to know about you |

---

## Step 1: Fill In the Brackets

Open each file and replace everything in `[SQUARE BRACKETS]` with your actual information.

**In AGENTS.md:**
- Your name
- Your 3 primary use cases

**In SOUL.md:**
- Agent name (optional, but fun)
- Communication vibe / tone
- Your timezone, work style, pet peeves

**In MEMORY.md:**
- Your active projects with status
- Your tool preferences
- Any important context

Don't overthink it. You can refine over time. A 60% complete memory is infinitely better than no memory.

---

## Step 2: Load Into Your Platform

### Claude (Recommended)
1. Go to Claude.ai → Projects → Create new project
2. Click "Project instructions" → paste the contents of `AGENTS.md`
3. Click "Add content" → upload `SOUL.md` and `MEMORY.md`
4. Start a conversation in this project

**Why Claude Projects work best:** The files load fresh every conversation. Your agent has full context automatically.

### ChatGPT Custom GPT
1. Go to ChatGPT → Explore GPTs → Create a GPT
2. In "Instructions", paste the contents of `AGENTS.md`
3. Under "Knowledge", upload `SOUL.md` and `MEMORY.md`
4. Save and start chatting

### Cursor
1. Create a file called `.cursorrules` at your project root
2. Paste the contents of `AGENTS.md` into it
3. For memory, keep `SOUL.md` and `MEMORY.md` in your project and reference them in `.cursorrules`

### OpenClaw
1. Place `AGENTS.md` at your workspace root
2. Add `SOUL.md` and `MEMORY.md` to the same folder
3. The platform auto-loads them each session

### Any other platform
1. Use `AGENTS.md` as your system prompt
2. Paste `SOUL.md` + `MEMORY.md` content at the top of your first message in each session (or upload as context files if supported)

---

## Step 3: Test It

Start a conversation with something like:

> "Hi! Take a moment to review your files and tell me what you know about me and what we're working on."

Your agent should be able to:
- State your name and current projects
- Describe your communication preferences
- Explain the memory update protocol

If it can do all three, you're set up correctly.

---

## Step 4: Keep Memory Updated

The magic happens when memory actually accumulates. Set a habit:

**After significant sessions**, tell your agent:
> "Add to my memory: [what you want it to remember]"

Or just let it suggest updates — a well-configured agent will proactively say "Should I add X to your memory?"

**Every few weeks**, review `MEMORY.md`:
- Remove outdated project entries
- Update "current focus" section
- Archive completed decisions

---

## Troubleshooting

**"My agent isn't reading the files"**
Make sure the files are attached as knowledge/context, not just in the conversation. Re-read the platform-specific setup above.

**"It keeps forgetting things between sessions"**
That's the point of this system! Make sure MEMORY.md is in your platform's persistent context (Project Knowledge in Claude, Knowledge files in GPT). Not just in the conversation thread.

**"It's not updating memory when I ask"**
Be explicit: "Update MEMORY.md → Projects: [project name] is now [status]."
Some platforms need you to manually paste back the updated file. That's normal.

**"The personality feels off"**
Edit SOUL.md more aggressively. Be specific about examples. "Direct and concise" is vague. "Like a CTO giving a 30-second status update" is specific and memorable.

---

## Going Further

This is the foundation. Once you have this working, you can:

1. **Add daily notes** — Create a `memory/YYYY-MM-DD.md` file for each session's raw log
2. **Add domain-specific files** — For a coding project: `CODEBASE.md`. For content: `BRAND-VOICE.md`.
3. **Automate updates** — Use tools like n8n or Make to auto-update MEMORY.md from external sources

Or grab a more advanced template from [agentawake.com/templates](https://agentawake.com/templates) for your specific use case.

---

## Why This Works

Without memory files, every AI session starts from zero. You spend 10-20 minutes re-explaining context before getting to the actual work. With these three files, your agent arrives pre-briefed.

The more you update the files, the smarter your agent gets — not because the model changes, but because it has better information to work with.

**The model is the hardware. Memory is the software. This is your OS.**

---

*Built by [AgentAwake](https://agentawake.com) — the playbook for autonomous AI agents.*  
*Questions? hello@agentawake.com*
