"use client";

import { useState, useEffect, useRef } from "react";

interface DimensionResult {
  name: string;
  score: number;
  max: number;
  explanation: string;
  recommendations: string[];
  icon: string;
}

interface HealthCheckResult {
  total: number;
  grade: string;
  gradeLabel: string;
  dimensions: DimensionResult[];
}

function scoreIdentityPersona(soul: string): DimensionResult {
  let score = 0;
  if (soul.trim().length > 0) score += 6;
  if (soul.split("\n").filter((l: string) => l.startsWith("#")).length >= 2) score += 4;
  if (/persona|personality|identity|who you are|vibe|name:/i.test(soul)) score += 3;
  if (/voice|tone|style|speak|communicate/i.test(soul)) score += 3;
  if (/bound|limit|don't|do not|never|avoid/i.test(soul)) score += 4;

  const recs: string[] = [];
  if (!soul.trim()) recs.push("Create a SOUL.md with your agent's name, role, and personality traits.");
  if (!/persona|identity|name:/i.test(soul)) recs.push("Define a clear identity section: name, role, emoji, and vibe.");
  if (!/bound|limit|don't|never/i.test(soul)) recs.push("Add an explicit Boundaries section to prevent scope creep.");
  if (recs.length === 0) recs.push("Add example phrases that capture your agent's voice for consistency.");

  return {
    name: "Identity & Persona",
    score: Math.min(score, 20),
    max: 20,
    explanation: soul.trim()
      ? "SOUL.md is present. Evaluating personality definition, voice, and boundary clarity."
      : "No SOUL.md provided. Your agent lacks a defined identity — it will be inconsistent across sessions.",
    recommendations: recs.slice(0, 2),
    icon: "🧠",
  };
}

function scoreMemoryArchitecture(memory: string): DimensionResult {
  let score = 0;
  if (memory.trim().length > 0) score += 6;
  const sections = memory.split("\n").filter((l: string) => l.startsWith("#")).length;
  if (sections >= 2) score += 4;
  if (sections >= 4) score += 2;
  if (/\d{4}-\d{2}-\d{2}|\d{1,2}\/\d{1,2}\/\d{2,4}/i.test(memory)) score += 4;
  if (/project|task|goal|session|context/i.test(memory)) score += 4;

  const recs: string[] = [];
  if (!memory.trim()) recs.push("Create a MEMORY.md to give your agent persistent context between sessions.");
  if (sections < 2) recs.push("Add structured sections: ## Current Projects, ## Decisions, ## Context.");
  if (!/\d{4}-\d{2}-\d{2}/i.test(memory)) recs.push("Add dated entries so your agent tracks what changed and when.");
  if (recs.length === 0) recs.push("Add a ## Recent Wins section to help your agent build on past progress.");

  return {
    name: "Memory Architecture",
    score: Math.min(score, 20),
    max: 20,
    explanation: memory.trim()
      ? `MEMORY.md found with ${sections} section(s). Checking for structure, dates, and project references.`
      : "No MEMORY.md found. Your agent has goldfish memory — it starts from zero every session.",
    recommendations: recs.slice(0, 2),
    icon: "💾",
  };
}

function scoreTaskRouting(agents: string): DimensionResult {
  let score = 0;
  if (agents.trim().length > 0) score += 4;
  if (/delegat|handoff|route|assign|sub.?agent/i.test(agents)) score += 5;
  if (/tool|api|function|exec|command/i.test(agents)) score += 4;
  if (/crew|team|agent.*name|role:/i.test(agents)) score += 4;
  if (/protocol|workflow|escalat|when to/i.test(agents)) score += 3;

  const recs: string[] = [];
  if (!agents.trim()) recs.push("Create an AGENTS.md to define your agent crew and how tasks are distributed.");
  if (!/delegat|handoff|sub.?agent/i.test(agents)) recs.push("Define delegation rules: which tasks go to which agent.");
  if (!/tool|api|exec/i.test(agents)) recs.push("List each agent's allowed tools and API access explicitly.");
  if (recs.length === 0) recs.push("Add escalation conditions: when should an agent pause and ask for human input?");

  return {
    name: "Task Routing",
    score: Math.min(score, 20),
    max: 20,
    explanation: agents.trim()
      ? "AGENTS.md found. Checking for delegation rules, sub-agent definitions, and tool access."
      : "No AGENTS.md found. Without routing rules, every task lands on one agent — a bottleneck.",
    recommendations: recs.slice(0, 2),
    icon: "🔀",
  };
}

function scoreContextDensity(agents: string, soul: string, memory: string): DimensionResult {
  const combined = [agents, soul, memory].join("\n");
  const words = combined.trim().split(/\s+/).filter(Boolean).length;
  const sections = combined.split("\n").filter((l: string) => l.startsWith("#")).length;
  const bullets = combined.split("\n").filter((l: string) => /^[-*]/.test(l.trim())).length;

  let score = 0;
  if (words > 50) score += 4;
  if (words > 200) score += 4;
  if (words > 500) score += 2;
  if (sections >= 3) score += 4;
  if (bullets >= 5) score += 3;
  if (bullets >= 15) score += 3;

  const recs: string[] = [];
  if (words < 200) recs.push("Add more detail — sparse configs are treated as boilerplate by your agent.");
  if (sections < 3) recs.push("Use ## headings to organize content into scannable sections.");
  if (bullets < 5) recs.push("Use bullet points for rules, examples, and preferences — agents parse lists well.");
  if (recs.length === 0) recs.push("Great density! Consider adding real examples and anti-patterns to each section.");

  return {
    name: "Context Density",
    score: Math.min(score, 20),
    max: 20,
    explanation: `${words} words, ${sections} sections, ${bullets} bullet points across your config files.`,
    recommendations: recs.slice(0, 2),
    icon: "📊",
  };
}

function scoreSecurityBoundaries(agents: string, soul: string, memory: string): DimensionResult {
  const combined = [agents, soul, memory].join("\n");
  let score = 0;
  if (/security|private|secret|confidential|sensitive/i.test(combined)) score += 5;
  if (/trust|trusted|untrust|verify/i.test(combined)) score += 4;
  if (/don't.*send|never.*email|never.*post|no.*public/i.test(combined)) score += 4;
  if (/approval|confirm|ask.*before|human.*review/i.test(combined)) score += 4;
  if (/password|token|api.?key|credential/i.test(combined)) score += 3;

  const recs: string[] = [];
  if (!/security|private|secret/i.test(combined)) recs.push("Add a Security section — define what's confidential and how to handle it.");
  if (!/trust/i.test(combined)) recs.push("Define a trust model: which sources/users can trigger sensitive actions?");
  if (!/approval|confirm|ask.*before/i.test(combined)) recs.push("Add human-in-the-loop rules: when must your agent pause for approval?");
  if (recs.length === 0) recs.push("Add explicit rules about external communication (email, social, APIs).");

  return {
    name: "Security & Boundaries",
    score: Math.min(score, 20),
    max: 20,
    explanation: "Scanning for security rules, private data handling, trust boundaries, and approval gates.",
    recommendations: recs.slice(0, 2),
    icon: "🔒",
  };
}

function computeGrade(total: number): { grade: string; label: string } {
  if (total >= 90) return { grade: "A+", label: "Production Ready" };
  if (total >= 70) return { grade: "B", label: "Good Foundation" };
  if (total >= 50) return { grade: "C", label: "Needs Work" };
  return { grade: "D", label: "Amnesia Mode" };
}

function getDimensionColor(score: number, max: number) {
  const pct = score / max;
  if (pct >= 0.8) return { bar: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" };
  if (pct >= 0.5) return { bar: "bg-amber-500", text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10" };
  return { bar: "bg-red-500", text: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" };
}

function AnimatedScore({ target, duration = 1200 }: { target: number; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    startRef.current = null;
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return <>{display}</>;
}

export default function HealthCheckTool() {
  const [agents, setAgents] = useState("");
  const [soul, setSoul] = useState("");
  const [memory, setMemory] = useState("");
  const [result, setResult] = useState<HealthCheckResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  function runCheck() {
    const d1 = scoreIdentityPersona(soul);
    const d2 = scoreMemoryArchitecture(memory);
    const d3 = scoreTaskRouting(agents);
    const d4 = scoreContextDensity(agents, soul, memory);
    const d5 = scoreSecurityBoundaries(agents, soul, memory);
    const total = d1.score + d2.score + d3.score + d4.score + d5.score;
    const { grade, label } = computeGrade(total);
    setResult({ total, grade, gradeLabel: label, dimensions: [d1, d2, d3, d4, d5] });
    setRevealed(false);
    setEmailSent(false);
    setTimeout(() => {
      setRevealed(true);
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function shareScore() {
    if (!result) return;
    const text = `My AI agent scored ${result.total}/100 on the AgentAwake Health Check! 🩺 ${result.grade} ${result.gradeLabel} — Check yours: https://agentawake.com/health-check #AgentAwake #AI`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  async function handleEmailSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    form.reset();
    setEmailSent(true);
  }

  const gradeColors: Record<string, string> = {
    "A+": "text-emerald-400",
    "B": "text-[var(--accent-light)]",
    "C": "text-amber-400",
    "D": "text-red-400",
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pb-24">
      {/* Input Section */}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-[var(--foreground)]/80 mb-2">
            AGENTS.md <span className="text-[var(--accent-light)]">*</span>
            <span className="ml-2 text-xs font-normal text-[var(--text-tertiary)]">Recommended for best results</span>
          </label>
          <textarea
            value={agents}
            onChange={e => setAgents(e.target.value)}
            placeholder="Paste the contents of your AGENTS.md here..."
            rows={6}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-light)]/40 text-sm font-mono resize-y transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--foreground)]/80 mb-2">
            SOUL.md <span className="text-[var(--text-tertiary)] text-xs font-normal ml-1">(optional)</span>
          </label>
          <textarea
            value={soul}
            onChange={e => setSoul(e.target.value)}
            placeholder="Paste the contents of your SOUL.md here..."
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-light)]/40 text-sm font-mono resize-y transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[var(--foreground)]/80 mb-2">
            MEMORY.md <span className="text-[var(--text-tertiary)] text-xs font-normal ml-1">(optional)</span>
          </label>
          <textarea
            value={memory}
            onChange={e => setMemory(e.target.value)}
            placeholder="Paste the contents of your MEMORY.md here..."
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-light)]/40 text-sm font-mono resize-y transition-colors"
          />
        </div>

        <button
          onClick={runCheck}
          disabled={!agents.trim() && !soul.trim() && !memory.trim()}
          className="w-full bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-7 py-4 rounded-xl text-base font-bold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--accent)]/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          Run Health Check 🩺
        </button>
      </div>

      {/* Results */}
      {result && (
        <div
          ref={resultsRef}
          className={`mt-12 space-y-6 transition-all duration-700 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Overall Score Card */}
          <div className="rounded-2xl border border-[var(--border)]/60 bg-[var(--surface)]/90 backdrop-blur-xl p-8 text-center shadow-[0_0_60px_rgba(232,119,46,0.08)]">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-tertiary)] mb-3">Overall Score</p>
            <div className="flex items-end justify-center gap-2 mb-2">
              <span className="text-[5rem] font-extrabold leading-none text-white tabular-nums">
                <AnimatedScore target={result.total} />
              </span>
              <span className="text-2xl text-[var(--text-tertiary)] mb-4 font-semibold">/100</span>
            </div>
            <div className={`text-3xl font-extrabold mb-1 ${gradeColors[result.grade] ?? "text-white"}`}>
              {result.grade}
            </div>
            <p className={`text-lg font-semibold ${gradeColors[result.grade] ?? "text-white"}`}>
              {result.gradeLabel}
            </p>

            {/* Score bar */}
            <div className="mt-6 h-3 bg-[var(--border)]/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#c9621e] to-[#e8772e] rounded-full transition-all duration-1000 ease-out"
                style={{ width: revealed ? `${result.total}%` : "0%" }}
              />
            </div>

            <button
              onClick={shareScore}
              className="mt-6 inline-flex items-center gap-2 border border-[var(--border)] text-[var(--foreground)]/80 px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-[var(--accent)]/40 hover:text-[var(--accent-light)] transition-all"
            >
              {copied ? "✅ Copied!" : "📋 Share Your Score"}
            </button>
          </div>

          {/* Dimension Cards */}
          <div className="space-y-4">
            {result.dimensions.map((dim, i) => {
              const colors = getDimensionColor(dim.score, dim.max);
              return (
                <div
                  key={dim.name}
                  className={`rounded-2xl border ${colors.border} ${colors.bg} p-6`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3 flex-1 min-w-0">
                      <span className="text-2xl shrink-0 mt-0.5">{dim.icon}</span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-[var(--foreground)]">{dim.name}</h3>
                        <p className="text-sm text-[var(--foreground)]/60 mt-0.5 leading-relaxed">{dim.explanation}</p>
                      </div>
                    </div>
                    <div className={`text-2xl font-extrabold tabular-nums ${colors.text} shrink-0`}>
                      {dim.score}<span className="text-sm font-normal text-[var(--text-tertiary)]">/{dim.max}</span>
                    </div>
                  </div>

                  <div className="h-1.5 bg-black/20 rounded-full overflow-hidden mb-4">
                    <div
                      className={`h-full ${colors.bar} rounded-full transition-all duration-700 ease-out`}
                      style={{ width: revealed ? `${(dim.score / dim.max) * 100}%` : "0%" }}
                    />
                  </div>

                  <div className="space-y-2">
                    {dim.recommendations.map((rec, j) => (
                      <p key={j} className="text-sm text-[var(--foreground)]/70 flex items-start gap-2">
                        <span className="text-[var(--accent-light)] mt-0.5 shrink-0 font-bold">→</span>
                        {rec}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Email Capture */}
          <div className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-7 text-center">
            <p className="text-lg font-bold text-[var(--foreground)] mb-1">
              Want to improve your score?
            </p>
            <p className="text-sm text-[var(--foreground)]/60 mb-5">
              Get our free AGENTS.md, SOUL.md &amp; MEMORY.md templates — battle-tested in production. →
            </p>
            {emailSent ? (
              <p className="text-emerald-400 font-semibold">🎉 Templates on their way! Check your inbox.</p>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-sm mx-auto">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-white placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-light)]/40 text-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#c9621e] to-[#e8772e] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:from-[var(--accent)] hover:to-[var(--accent-light)] transition-all whitespace-nowrap"
                >
                  Get Templates →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
