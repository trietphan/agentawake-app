# Student Research Helper — Setup Guide

**Time to set up: ~15 minutes**
**Works with:** Claude, ChatGPT, Cursor, OpenClaw, and most AI platforms

---

## What You're Getting

Three files that turn any AI assistant into your personal academic research partner — organizing papers, tracking deadlines, building study plans, and synthesizing research.

- **AGENTS.md** — System prompt defining your agent's research capabilities
- **SOUL.md** — Academic personality config: study style, rigor level, tone
- **MEMORY.md** — Your courses, deadlines, paper database, and research context

---

## Step 1: Fill In the Brackets

Open each file and replace everything in `[SQUARE BRACKETS]` with your actual information.

**In AGENTS.md:**
- Your name
- Your field/subject of study
- Citation format preference (APA, MLA, Chicago)

**In SOUL.md:**
- Your academic level (undergrad, masters, PhD)
- Learning style and preferences
- Fields of study and specialization

**In MEMORY.md:**
- Current courses with instructors and schedules
- Active research topics and questions
- Existing paper database (start with 2-3 key papers)
- Upcoming deadlines

---

## Step 2: Load Into Your Platform

### Claude (Recommended for Research)
1. Go to Claude.ai → Projects → Create new project
2. Click "Project instructions" → paste the contents of `AGENTS.md`
3. Click "Add content" → upload `SOUL.md` and `MEMORY.md`
4. Start a conversation in this project

Claude's large context window makes it especially strong for paper analysis and literature reviews.

### ChatGPT Custom GPT
1. Go to ChatGPT → Explore GPTs → Create a GPT
2. In "Instructions", paste the contents of `AGENTS.md`
3. Under "Knowledge", upload `SOUL.md` and `MEMORY.md`
4. Save and start chatting

### Cursor (For CS/Technical Research)
1. Create `.cursorrules` at your project root
2. Paste `AGENTS.md` contents
3. Keep `SOUL.md` and `MEMORY.md` in your project folder

### OpenClaw
1. Place all three files at your workspace root
2. The platform auto-loads them each session

---

## Step 3: Test It

Start a conversation with:

> "Review your files and tell me: what courses am I taking, what are my nearest deadlines, and what research topics am I focused on?"

Your agent should be able to answer all three from MEMORY.md.

Then try:

> "I just read this paper: [paste a paper abstract]. Add it to my research database and tell me how it connects to my current work."

If it adds the paper with proper fields AND draws connections to your existing research, the system is working.

---

## Step 4: Build the Habit

**After reading a paper:**
> "Add to my paper database: [title, authors, key findings]"

**When assignments are posted:**
> "New deadline: [assignment] for [course], due [date]. Estimate the work and update my schedule."

**Before a study session:**
> "What should I focus on today given my deadlines and progress?"

**Weekly review (Sunday evening):**
> "Give me a weekly summary: what I completed, what's coming up, and where I'm behind."

---

## Common Workflows

### Adding a New Paper
Say: "I'm reading [paper title] by [author]. Here's the abstract: [paste]. Add it to my database."

The agent will:
1. Create a structured entry with all required fields
2. Note methodology and key findings
3. Draw connections to existing papers
4. Flag if it's relevant to an active assignment

### Building a Literature Review
Say: "I need a literature review on [topic] using my paper database."

The agent will:
1. Pull relevant papers from MEMORY.md
2. Group by theme or methodology
3. Map agreements, contradictions, and gaps
4. Propose a structural outline
5. Draft topic sentences per section

### Exam Prep
Say: "Build me a study plan for [exam] on [date]. I have [X hours] available."

The agent will:
1. Break the material into reviewable chunks
2. Estimate time per topic
3. Create a day-by-day schedule
4. Include practice question sessions
5. Build in buffer time

---

## Academic Integrity Note

This template is designed to help you **understand, organize, and synthesize** — not to write your assignments for you. The AGENTS.md file includes explicit guardrails about what's acceptable vs. not. Keep those in place. Your university's academic integrity policy always takes precedence.

---

## Going Further

Once this is working:

1. **Add a `papers/` folder** — keep full paper notes as separate files, reference them in MEMORY.md
2. **Add daily notes** — `memory/YYYY-MM-DD.md` for session-by-session research logs
3. **Create course-specific files** — `courses/CS101.md` with syllabus, notes, and assignment history

Or explore more templates at [agentawake.com/templates](https://agentawake.com/templates).

---

*Built by [AgentAwake](https://agentawake.com) — the playbook for autonomous AI agents.*
*Questions? hello@agentawake.com*
