"use client";
import React, { useState } from "react";

export function AmnesiaQuiz() {
  const questions = [
    "Do you re-explain your project to your AI at the start of every session?",
    "Has your AI ever forgotten a decision you made together the day before?",
    "Do you copy-paste old conversations back into new ones for context?",
    "Would switching from ChatGPT to Claude mean losing all your AI's context?",
    "Have you ever said 'As I mentioned earlier...' to an AI that clearly did not remember?",
  ];
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const yesCount = answers.filter((a) => a === true).length;
  const allAnswered = answers.every((a) => a !== null);
  const label =
    yesCount >= 4
      ? "🐠 Goldfish Brain"
      : yesCount >= 2
        ? "🤷 Getting There"
        : "🧠 Memory Master";
  const desc =
    yesCount >= 4
      ? "Your AI has the long-term memory of a goldfish doing tequila shots. Every conversation is a first date. You need this article more than you know."
      : yesCount >= 2
        ? "You're somewhere between 'functional' and 'oh god why.' Your AI remembers some things, forgets others, and you're never sure which is which. Classic."
        : "Either you've already built a memory system or you're in denial. Either way, respect. Share your secrets in the comments (just kidding, there are no comments).";

  return (
    <div style={{ background: "rgba(232,119,46,0.06)", border: "1px solid rgba(232,119,46,0.18)", borderRadius: 12, padding: "30px 24px 34px", margin: "32px 0" }}>
      <p style={{ fontWeight: 700, fontSize: "1.15em", marginBottom: 16 }}>🧠 The AI Amnesia Quiz: How Bad Is It?</p>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: 14 }}>
          <p style={{ marginBottom: 6 }}>{q}</p>
          <span style={{ display: "flex", gap: 8 }}>
            {[true, false].map((val) => (
              <button
                key={String(val)}
                onClick={() => {
                  const next = [...answers];
                  next[i] = val;
                  setAnswers(next);
                  setShowResult(false);
                }}
                style={{
                  minHeight: 44,
                  minWidth: 80,
                  padding: "12px 20px",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "1rem",
                  background:
                    answers[i] === val
                      ? val
                        ? "#22c55e"
                        : "#ef4444"
                      : "rgba(255,255,255,0.08)",
                  color: answers[i] === val ? "#fff" : "inherit",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {val ? "Yes" : "No"}
              </button>
            ))}
          </span>
        </div>
      ))}
      {allAnswered && !showResult && (
        <button
          onClick={() => setShowResult(true)}
          style={{
            marginTop: 8,
            padding: "10px 24px",
            borderRadius: 8,
            background: "#e8772e",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
          }}
        >
          Diagnose Me
        </button>
      )}
      {showResult && (
        <div style={{ marginTop: 16, padding: 16, background: "rgba(0,0,0,0.2)", borderRadius: 8 }}>
          <p style={{ fontSize: "1.3em", fontWeight: 700, marginBottom: 4 }}>
            {label} — {yesCount}/5 symptoms
          </p>
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
}

export function CostCalculator() {
  const [mins, setMins] = useState(10);
  const [sessions, setSessions] = useState(3);
  const [rate, setRate] = useState(75);
  const monthly = ((mins * sessions * rate) / 60) * 22;

  return (
    <div
      style={{
        background: "rgba(234,179,8,0.08)",
        border: "1px solid rgba(234,179,8,0.25)",
        borderRadius: 12,
        padding: "30px 24px 34px",
        margin: "32px 0",
      }}
    >
      <p style={{ fontWeight: 700, fontSize: "1.15em", marginBottom: 16 }}>
        💸 The Amnesia Tax Calculator
      </p>
      <p style={{ opacity: 0.7, marginBottom: 16, fontSize: "0.9em" }}>
        Drag the sliders. Try not to cry.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <label>
          Minutes wasted re-explaining per session:{" "}
          <input
            type="range"
            min={1}
            max={30}
            value={mins}
            onChange={(e) => setMins(+e.target.value)}
            className="ml-2 align-middle h-3 w-full max-w-[220px] appearance-none rounded-full bg-white/15 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent)] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/30"
          />{" "}
          <strong>{mins} min</strong>
        </label>
        <label>
          AI sessions per day:{" "}
          <input
            type="range"
            min={1}
            max={10}
            value={sessions}
            onChange={(e) => setSessions(+e.target.value)}
            className="ml-2 align-middle h-3 w-full max-w-[220px] appearance-none rounded-full bg-white/15 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent)] [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/30"
          />{" "}
          <strong>{sessions}</strong>
        </label>
        <label>
          Your hourly rate ($):{" "}
          <input
            type="number"
            min={10}
            max={1000}
            value={rate}
            onChange={(e) => setRate(+e.target.value)}
            style={{
              minWidth: 80,
              padding: "12px",
              fontSize: "1rem",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.08)",
              color: "inherit",
              marginLeft: 8,
            }}
          />
        </label>
      </div>
      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: "rgba(0,0,0,0.2)",
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "1rem", opacity: 0.75 }}>
          Every month, you light on fire approximately...
        </p>
        <p style={{ fontSize: "2.2em", fontWeight: 800, color: "#eab308" }}>
          ${Math.round(monthly).toLocaleString()}
        </p>
        <p style={{ fontSize: "1rem", opacity: 0.75 }}>
          ...babysitting an AI that refuses to take notes.{" "}
          {monthly > 500
            ? "That's a car payment. For context you already gave it."
            : "Not nothing, right?"}
        </p>
      </div>
    </div>
  );
}

export function SpotTheAgent() {
  const [revealed, setRevealed] = useState(false);
  const [guess, setGuess] = useState<"a" | "b" | null>(null);

  const sampleA = `Sure! I can help with your deployment. Could you tell me about your project, what stack you're using, your deployment environment, and any specific requirements? Also, what's your timeline looking like?`;
  const sampleB = `Since you're deploying the React dashboard on Tuesday as planned, I've prepped the migration script using the Postgres config from last sprint. Heads up — the Stripe webhook bug from Thursday is still unresolved, so I'd suggest we fix that before pushing to prod. Want me to start there?`;

  const memoryAgent = "b";

  return (
    <div
      style={{
        background: "rgba(59,130,246,0.08)",
        border: "1px solid rgba(59,130,246,0.25)",
        borderRadius: 12,
        padding: "24px 28px",
        margin: "32px 0",
      }}
    >
      <p style={{ fontWeight: 700, fontSize: "1.15em", marginBottom: 4 }}>
        🕵️ Spot the Agent: Which One Remembers You?
      </p>
      <p style={{ opacity: 0.7, marginBottom: 16 }}>
        You asked both agents: &quot;Help me deploy.&quot; Click the one you think has persistent memory.
      </p>

      {[
        { key: "a" as const, label: "Agent A", text: sampleA },
        { key: "b" as const, label: "Agent B", text: sampleB },
      ].map(({ key, label, text }) => (
        <div
          key={key}
          onClick={() => {
            if (!revealed) setGuess(key);
          }}
          style={{
            padding: 16,
            marginBottom: 12,
            borderRadius: 8,
            cursor: revealed ? "default" : "pointer",
            background: revealed
              ? key === memoryAgent
                ? "rgba(34,197,94,0.15)"
                : "rgba(239,68,68,0.15)"
              : guess === key
                ? "rgba(59,130,246,0.2)"
                : "rgba(255,255,255,0.05)",
            border: `1px solid ${guess === key && !revealed ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          <p style={{ fontWeight: 600, marginBottom: 4 }}>{label}</p>
          <p style={{ fontStyle: "italic" }}>&ldquo;{text}&rdquo;</p>
          {revealed && (
            <p
              style={{
                fontWeight: 700,
                marginTop: 8,
                color: key === memoryAgent ? "#22c55e" : "#ef4444",
              }}
            >
              ← {key === memoryAgent ? "HAS memory ✓" : "No memory ✗"}
            </p>
          )}
        </div>
      ))}

      {guess !== null && !revealed && (
        <button
          onClick={() => setRevealed(true)}
          style={{
            padding: "10px 24px",
            borderRadius: 8,
            background: "#3b82f6",
            color: "#fff",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
          }}
        >
          Reveal the Answer
        </button>
      )}
      {revealed && (
        <p style={{ marginTop: 8, opacity: 0.8 }}>
          {guess === memoryAgent
            ? "Nailed it! 🎯 Agent B knew the project, the timeline, the stack, AND an open bug from last week. That's what memory looks like."
            : "Close — it was Agent B. Notice how it referenced the Tuesday deploy schedule, last sprint's config, and an unresolved bug? That's not magic. That's three text files."}
        </p>
      )}
    </div>
  );
}
