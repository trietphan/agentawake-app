"use client";

import React, { useState, useEffect } from "react";

// ─── Quiz Component ────────────────────────────────────────
interface QuizOption {
  text: string;
  correct?: boolean;
  explanation: string;
}

export function Quiz({ question, options }: { question: string; options: QuizOption[] }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="my-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">
      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-indigo-400">🧠 Quick Check</div>
      <div className="text-sm font-semibold text-zinc-200 mb-4">{question}</div>
      <div className="space-y-2">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showResult = selected !== null;
          const isCorrect = opt.correct;
          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              disabled={selected !== null}
              className={`w-full text-left rounded-xl px-4 py-3 text-sm transition-all border ${
                !showResult
                  ? "border-zinc-700 bg-zinc-900/50 text-zinc-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 cursor-pointer"
                  : isSelected && isCorrect
                    ? "border-green-500/40 bg-green-500/10 text-green-300"
                    : isSelected && !isCorrect
                      ? "border-red-500/40 bg-red-500/10 text-red-300"
                      : isCorrect
                        ? "border-green-500/20 bg-green-500/5 text-green-400/70"
                        : "border-[var(--border)] bg-zinc-900/30 text-zinc-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-bold">
                  {showResult ? (isCorrect ? "✓" : isSelected ? "✗" : String.fromCharCode(65 + i)) : String.fromCharCode(65 + i)}
                </span>
                <span>{opt.text}</span>
              </div>
              {showResult && isSelected && (
                <div className={`mt-2 ml-9 text-xs ${isCorrect ? "text-green-400/80" : "text-red-400/80"}`}>
                  {opt.explanation}
                </div>
              )}
              {showResult && !isSelected && isCorrect && (
                <div className="mt-2 ml-9 text-xs text-green-400/60">
                  {opt.explanation}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Interactive Checklist ──────────────────────────────────
export function Checklist({ title, items }: { title: string; items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const progress = checked.filter(Boolean).length;

  return (
    <div className="my-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-bold text-emerald-400">✅ {title}</div>
        <div className="text-xs text-zinc-500">{progress}/{items.length} complete</div>
      </div>
      {/* Progress bar */}
      <div className="h-1.5 rounded-full bg-zinc-800 mb-4 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
          style={{ width: `${(progress / items.length) * 100}%` }}
        />
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              const next = [...checked];
              next[i] = !next[i];
              setChecked(next);
            }}
            className={`w-full flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-left transition-all ${
              checked[i]
                ? "bg-emerald-500/10 text-emerald-300 line-through opacity-70"
                : "bg-zinc-900/30 text-zinc-300 hover:bg-zinc-800/50"
            }`}
          >
            <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded border border-current flex items-center justify-center text-xs">
              {checked[i] ? "✓" : ""}
            </span>
            <span>{item}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Expandable Tip ─────────────────────────────────────────
export function Tip({ emoji, title, children }: { emoji: string; title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-4 rounded-xl border border-zinc-700/50 bg-zinc-900/30 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-zinc-800/30 transition-colors"
      >
        <span className="text-lg">{emoji}</span>
        <span className="font-medium text-zinc-200 flex-1">{title}</span>
        <span className={`text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-zinc-400 border-t border-[var(--border)]/50 pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Cost Calculator ────────────────────────────────────────
export function CostCalculator() {
  const [tasks, setTasks] = useState(5);
  const [model, setModel] = useState<"cheap" | "balanced" | "expert">("balanced");
  const [tokensPerTask, setTokensPerTask] = useState(2000);

  const rates = {
    cheap: { input: 0.15, output: 0.60, name: "GPT-4o-mini / Haiku" },
    balanced: { input: 3, output: 15, name: "Sonnet / GPT-4o" },
    expert: { input: 15, output: 75, name: "Opus / o3" },
  };

  const rate = rates[model];
  const dailyCost = (tasks * tokensPerTask * (rate.input + rate.output)) / 1_000_000;
  const monthlyCost = dailyCost * 30;

  return (
    <div className="my-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-400">💸 Cost Calculator</div>
      <div className="text-sm text-zinc-400 mb-4">Estimate your monthly AI agent costs</div>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-zinc-500 block mb-1.5">Tasks per day: <strong className="text-zinc-300">{tasks}</strong></label>
          <input
            type="range"
            min={1}
            max={50}
            value={tasks}
            onChange={(e) => setTasks(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-600"><span>1</span><span>50</span></div>
        </div>

        <div>
          <label className="text-xs text-zinc-500 block mb-1.5">Tokens per task: <strong className="text-zinc-300">{tokensPerTask.toLocaleString()}</strong></label>
          <input
            type="range"
            min={500}
            max={10000}
            step={500}
            value={tokensPerTask}
            onChange={(e) => setTokensPerTask(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
          <div className="flex justify-between text-[10px] text-zinc-600"><span>500</span><span>10,000</span></div>
        </div>

        <div>
          <label className="text-xs text-zinc-500 block mb-1.5">Model tier</label>
          <div className="grid grid-cols-3 gap-2">
            {(["cheap", "balanced", "expert"] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setModel(tier)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-all border ${
                  model === tier
                    ? "border-amber-500/40 bg-amber-500/15 text-amber-300"
                    : "border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600"
                }`}
              >
                {tier === "cheap" ? "💚 Cheap" : tier === "balanced" ? "💙 Balanced" : "💜 Expert"}
              </button>
            ))}
          </div>
          <div className="text-[10px] text-zinc-600 mt-1">{rate.name}</div>
        </div>

        <div className="rounded-xl bg-zinc-900/60 border border-zinc-700/50 p-4 mt-2">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-zinc-400">Daily cost</span>
            <span className="font-bold text-zinc-200">${dailyCost.toFixed(3)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-400">Monthly cost</span>
            <span className="font-bold text-lg text-amber-400">${monthlyCost.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Before/After Comparison ────────────────────────────────
export function BeforeAfter({ before, after }: { before: { title: string; items: string[] }; after: { title: string; items: string[] } }) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
        <div className="text-xs font-bold text-red-400 mb-3">❌ {before.title}</div>
        <ul className="space-y-2">
          {before.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs text-zinc-400">
              <span className="text-red-500/60 shrink-0">✗</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
        <div className="text-xs font-bold text-green-400 mb-3">✅ {after.title}</div>
        <ul className="space-y-2">
          {after.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-xs text-zinc-400">
              <span className="text-green-500/60 shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Visual Flow Diagram ────────────────────────────────────
export function FlowDiagram({ steps }: { steps: { emoji: string; label: string; detail?: string }[] }) {
  return (
    <div className="my-6 flex flex-col items-center gap-0">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <div className="relative w-full max-w-xs">
            <div className="rounded-xl border border-zinc-700/50 bg-zinc-900/50 p-4 text-center">
              <div className="text-2xl mb-1">{step.emoji}</div>
              <div className="text-sm font-semibold text-zinc-200">{step.label}</div>
              {step.detail && <div className="text-xs text-zinc-500 mt-1">{step.detail}</div>}
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-4 bg-zinc-700" />
              <div className="text-zinc-600 text-xs">▼</div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Diagram: Three Layer Brain ─────────────────────────────
export function BrainDiagram() {
  const [active, setActive] = useState<number | null>(null);

  const layers = [
    {
      emoji: "📚",
      name: "Knowledge Base",
      color: "blue",
      desc: "Permanent knowledge. Project details, preferences, credentials. Like a filing cabinet.",
      classes: "border-blue-500/30 bg-blue-500/10",
      activeClasses: "border-blue-500/60 bg-blue-500/20 scale-105",
      textColor: "text-blue-400",
    },
    {
      emoji: "📝",
      name: "Daily Notes",
      color: "green",
      desc: "Working memory. What happened today, decisions made, things to follow up on.",
      classes: "border-green-500/30 bg-green-500/10",
      activeClasses: "border-green-500/60 bg-green-500/20 scale-105",
      textColor: "text-green-400",
    },
    {
      emoji: "✨",
      name: "Tacit Knowledge",
      color: "orange",
      desc: "Your vibes. Voice, preferences, unwritten rules. The stuff that makes the agent feel like YOUR agent.",
      classes: "border-orange-500/30 bg-orange-500/10",
      activeClasses: "border-orange-500/60 bg-orange-500/20 scale-105",
      textColor: "text-orange-400",
    },
  ];

  return (
    <div className="my-6 rounded-2xl border border-zinc-700/30 bg-zinc-900/20 p-6">
      <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4 text-center">🧠 The Three-Layer Brain — Click to explore</div>
      <div className="space-y-3">
        {layers.map((layer, i) => (
          <button
            key={i}
            onClick={() => setActive(active === i ? null : i)}
            className={`w-full rounded-xl border p-4 text-left transition-all duration-300 cursor-pointer ${
              active === i ? layer.activeClasses : layer.classes
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{layer.emoji}</span>
              <div className="flex-1">
                <div className={`text-sm font-bold ${layer.textColor}`}>{layer.name}</div>
                {active === i && (
                  <div className="text-xs text-zinc-300 mt-1 animate-fadeIn">{layer.desc}</div>
                )}
              </div>
              <span className={`text-xs ${layer.textColor} transition-transform ${active === i ? "rotate-180" : ""}`}>▼</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Trust Level Slider ─────────────────────────────────────
export function TrustSlider() {
  const [level, setLevel] = useState(1);

  const levels = [
    { name: "Observer", emoji: "👀", color: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", access: "Read files, web search, conversation only", risk: "None — pure read-only" },
    { name: "Assistant", emoji: "🤝", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10", access: "Write files, git, staging deploys, draft messages", risk: "Low — internal changes only" },
    { name: "Operator", emoji: "⚙️", color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10", access: "Production deploys, social posts (with review), email drafts", risk: "Medium — external with guardrails" },
    { name: "Autonomous", emoji: "🚀", color: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10", access: "Auto-posting, email send, payment processing", risk: "High — unsupervised external actions" },
    { name: "Partner", emoji: "👑", color: "text-pink-400", border: "border-pink-500/30", bg: "bg-pink-500/10", access: "Strategy execution, opportunity identification, full operations", risk: "Maximum — full autonomy" },
  ];

  const l = levels[level - 1];

  return (
    <div className="my-6 rounded-2xl border border-zinc-700/30 bg-zinc-900/20 p-6">
      <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4 text-center">🪜 Trust Level Explorer — Slide to preview</div>
      <div className="mb-4">
        <input
          type="range"
          min={1}
          max={5}
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="w-full accent-orange-500"
        />
        <div className="flex justify-between text-[10px] text-zinc-600 mt-1">
          <span>👀 Observer</span><span>🤝</span><span>⚙️</span><span>🚀</span><span>👑 Partner</span>
        </div>
      </div>
      <div className={`rounded-xl border ${l.border} ${l.bg} p-5 transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{l.emoji}</span>
          <div>
            <div className={`text-lg font-bold ${l.color}`}>Level {level}: {l.name}</div>
          </div>
        </div>
        <div className="space-y-2 text-xs text-zinc-400">
          <div><strong className="text-zinc-300">Access:</strong> {l.access}</div>
          <div><strong className="text-zinc-300">Risk level:</strong> {l.risk}</div>
        </div>
      </div>
    </div>
  );
}

// ─── ROI Calculator ─────────────────────────────────────────
export function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(50);
  const [automation, setAutomation] = useState(60);

  const timeSaved = hours * (automation / 100);
  const moneySaved = timeSaved * rate * 4.3; // weeks per month
  const agentCost = 15;
  const roi = ((moneySaved - agentCost) / agentCost) * 100;

  return (
    <div className="my-6 rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
      <div className="mb-1 text-xs font-bold uppercase tracking-wider text-green-400">📈 ROI Calculator</div>
      <div className="text-sm text-zinc-400 mb-4">See what an AI agent saves you</div>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-zinc-500 block mb-1.5">Hours/week on repetitive tasks: <strong className="text-zinc-300">{hours}h</strong></label>
          <input type="range" min={1} max={40} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full accent-green-500" />
        </div>
        <div>
          <label className="text-xs text-zinc-500 block mb-1.5">Your hourly value: <strong className="text-zinc-300">${rate}/h</strong></label>
          <input type="range" min={15} max={200} step={5} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full accent-green-500" />
        </div>
        <div>
          <label className="text-xs text-zinc-500 block mb-1.5">% automatable with agent: <strong className="text-zinc-300">{automation}%</strong></label>
          <input type="range" min={10} max={90} step={5} value={automation} onChange={(e) => setAutomation(Number(e.target.value))} className="w-full accent-green-500" />
        </div>

        <div className="rounded-xl bg-zinc-900/60 border border-zinc-700/50 p-4 space-y-2">
          <div className="flex justify-between text-sm"><span className="text-zinc-400">Hours saved/week</span><span className="font-bold text-zinc-200">{timeSaved.toFixed(1)}h</span></div>
          <div className="flex justify-between text-sm"><span className="text-zinc-400">Value saved/month</span><span className="font-bold text-zinc-200">${moneySaved.toFixed(0)}</span></div>
          <div className="flex justify-between text-sm"><span className="text-zinc-400">Agent cost/month</span><span className="text-red-400">-${agentCost}</span></div>
          <div className="flex justify-between text-sm border-t border-zinc-700 pt-2"><span className="text-zinc-400">ROI</span><span className="font-bold text-lg text-green-400">{roi.toFixed(0)}%</span></div>
        </div>
      </div>
    </div>
  );
}

// ─── Architecture Diagram (SVG) ─────────────────────────────
export function ArchitectureDiagram() {
  return (
    <div className="my-6 rounded-2xl border border-zinc-700/30 bg-zinc-900/20 p-6">
      <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-4 text-center">🏗️ Agent Architecture Overview</div>
      <svg viewBox="0 0 400 280" className="w-full max-w-md mx-auto" fill="none">
        {/* You (CEO) */}
        <rect x="150" y="10" width="100" height="40" rx="12" fill="#fb5607" fillOpacity="0.15" stroke="#fb5607" strokeOpacity="0.4" />
        <text x="200" y="35" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontWeight="bold">👤 You (CEO)</text>

        {/* Arrow down */}
        <line x1="200" y1="50" x2="200" y2="75" stroke="#52525b" strokeWidth="1.5" strokeDasharray="4" />
        <polygon points="195,72 200,80 205,72" fill="#52525b" />

        {/* Main Agent */}
        <rect x="120" y="80" width="160" height="45" rx="12" fill="#2563eb" fillOpacity="0.12" stroke="#2563eb" strokeOpacity="0.35" />
        <text x="200" y="100" textAnchor="middle" fill="#93c5fd" fontSize="11" fontWeight="bold">🤖 Main Agent</text>
        <text x="200" y="116" textAnchor="middle" fill="#71717a" fontSize="9">AGENTS.md + SOUL.md + Memory</text>

        {/* Three branches */}
        <line x1="155" y1="125" x2="70" y2="160" stroke="#52525b" strokeWidth="1" />
        <line x1="200" y1="125" x2="200" y2="160" stroke="#52525b" strokeWidth="1" />
        <line x1="245" y1="125" x2="330" y2="160" stroke="#52525b" strokeWidth="1" />

        {/* Knowledge Base */}
        <rect x="20" y="160" width="100" height="40" rx="10" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeOpacity="0.3" />
        <text x="70" y="183" textAnchor="middle" fill="#93c5fd" fontSize="10">📚 Knowledge</text>

        {/* Tools */}
        <rect x="150" y="160" width="100" height="40" rx="10" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeOpacity="0.3" />
        <text x="200" y="183" textAnchor="middle" fill="#6ee7b7" fontSize="10">🔧 Tools</text>

        {/* Outputs */}
        <rect x="280" y="160" width="100" height="40" rx="10" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeOpacity="0.3" />
        <text x="330" y="183" textAnchor="middle" fill="#fcd34d" fontSize="10">📤 Outputs</text>

        {/* Sub items */}
        <text x="70" y="220" textAnchor="middle" fill="#52525b" fontSize="8">MEMORY.md</text>
        <text x="70" y="232" textAnchor="middle" fill="#52525b" fontSize="8">Daily Notes</text>
        <text x="70" y="244" textAnchor="middle" fill="#52525b" fontSize="8">Tacit Knowledge</text>

        <text x="200" y="220" textAnchor="middle" fill="#52525b" fontSize="8">Web Search</text>
        <text x="200" y="232" textAnchor="middle" fill="#52525b" fontSize="8">Shell / Code</text>
        <text x="200" y="244" textAnchor="middle" fill="#52525b" fontSize="8">Browser / API</text>

        <text x="330" y="220" textAnchor="middle" fill="#52525b" fontSize="8">Discord / Slack</text>
        <text x="330" y="232" textAnchor="middle" fill="#52525b" fontSize="8">Email / Twitter</text>
        <text x="330" y="244" textAnchor="middle" fill="#52525b" fontSize="8">Deploy / Publish</text>

        {/* Cron loop */}
        <path d="M 360 100 A 180 80 0 0 1 360 100" stroke="none" />
        <rect x="320" y="85" width="70" height="35" rx="8" fill="#f59e0b" fillOpacity="0.08" stroke="#f59e0b" strokeOpacity="0.2" />
        <text x="355" y="105" textAnchor="middle" fill="#fbbf24" fontSize="9">⏰ Cron</text>
        <line x1="320" y1="102" x2="280" y2="102" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3" />
      </svg>
    </div>
  );
}

// ─── Animated Typing Effect for "Agent Thinking" ────────────
export function AgentThinking({ steps }: { steps: string[] }) {
  const [visibleSteps, setVisibleSteps] = useState(0);

  useEffect(() => {
    if (visibleSteps < steps.length) {
      const timer = setTimeout(() => setVisibleSteps(visibleSteps + 1), 800);
      return () => clearTimeout(timer);
    }
  }, [visibleSteps, steps.length]);

  return (
    <div className="my-6 rounded-xl border border-zinc-700/50 bg-[#0d1117] p-4 font-mono text-xs">
      <div className="flex items-center gap-2 text-zinc-500 mb-3">
        <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Agent thinking...
      </div>
      <div className="space-y-1.5">
        {steps.slice(0, visibleSteps).map((step, i) => (
          <div key={i} className="text-emerald-400/80 animate-fadeIn">
            <span className="text-zinc-600 mr-2">{i + 1}.</span> {step}
          </div>
        ))}
        {visibleSteps < steps.length && (
          <div className="text-zinc-600 animate-pulse">▊</div>
        )}
      </div>
      {visibleSteps >= steps.length && (
        <button
          onClick={() => setVisibleSteps(0)}
          className="mt-3 text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
        >
          ↻ Replay
        </button>
      )}
    </div>
  );
}
