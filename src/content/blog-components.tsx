"use client";
import React, { useState } from "react";

export function MemoryQuiz() {
  const questions = [
    "Does your AI remember your name between sessions?",
    "Can your AI recall decisions you made last week?",
    "Does your AI know your project's current status without you explaining it?",
    "Has your AI ever referenced something you told it days ago?",
    "Can you switch AI platforms without losing all your context?",
  ];
  const [answers, setAnswers] = useState<(boolean | null)[]>(Array(5).fill(null));
  const [showResult, setShowResult] = useState(false);

  const score = answers.filter((a) => a === true).length;
  const allAnswered = answers.every((a) => a !== null);
  const label =
    score <= 1 ? "🐠 Goldfish Brain" : score <= 3 ? "👨 Weekend Dad" : "🧠 Actually Remembers";
  const desc =
    score <= 1
      ? "Your AI has the long-term memory of a goldfish at a frat party. Every session is a first date. Keep reading — you need this."
      : score <= 3
        ? "Your AI remembers some things, kind of, sometimes. Like a weekend dad who knows your name but not your teacher's. There's room to improve."
        : "Okay, show-off. Your agent actually retains context. You're either already using a memory system or you're lying. Either way, nice.";

  return (
    <div style={{ background: "rgba(232,119,46,0.06)", border: "1px solid rgba(232,119,46,0.18)", borderRadius: 12, padding: "24px 28px", margin: "32px 0" }}>
      <p style={{ fontWeight: 700, fontSize: "1.15em", marginBottom: 16 }}>🧠 Quiz: How Amnesiac Is Your AI?</p>
      {questions.map((q, i) => (
        <div key={i} style={{ marginBottom: 14 }}>
          <p style={{ marginBottom: 6 }}>{q}</p>
          <span style={{ display: "flex", gap: 8 }}>
            {[true, false].map((val) => (
              <button
                key={String(val)}
                onClick={() => { const next = [...answers]; next[i] = val; setAnswers(next); setShowResult(false); }}
                style={{
                  padding: "6px 18px", borderRadius: 6, cursor: "pointer", fontWeight: 600,
                  background: answers[i] === val ? (val ? "#22c55e" : "#ef4444") : "rgba(255,255,255,0.08)",
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
        <button onClick={() => setShowResult(true)} style={{ marginTop: 8, padding: "10px 24px", borderRadius: 8, background: "#e8772e", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer" }}>
          Show My Score
        </button>
      )}
      {showResult && (
        <div style={{ marginTop: 16, padding: 16, background: "rgba(0,0,0,0.2)", borderRadius: 8 }}>
          <p style={{ fontSize: "1.3em", fontWeight: 700, marginBottom: 4 }}>{label} — {score}/5</p>
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
}

export function CostCalculator() {
  const [mins, setMins] = useState(10);
  const [sessions, setSessions] = useState(2);
  const [rate, setRate] = useState(50);
  const monthly = ((mins * sessions * rate) / 60) * 22;

  return (
    <div style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.25)", borderRadius: 12, padding: "24px 28px", margin: "32px 0" }}>
      <p style={{ fontWeight: 700, fontSize: "1.15em", marginBottom: 16 }}>💸 How Much Does AI Amnesia Cost You?</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <label>Minutes re-explaining per session: <input type="range" min={1} max={30} value={mins} onChange={(e) => setMins(+e.target.value)} style={{ verticalAlign: "middle", marginLeft: 8 }} /> <strong>{mins} min</strong></label>
        <label>Sessions per day: <input type="range" min={1} max={10} value={sessions} onChange={(e) => setSessions(+e.target.value)} style={{ verticalAlign: "middle", marginLeft: 8 }} /> <strong>{sessions}</strong></label>
        <label>Your hourly rate ($): <input type="number" min={10} max={1000} value={rate} onChange={(e) => setRate(+e.target.value)} style={{ width: 80, padding: "4px 8px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.08)", color: "inherit", marginLeft: 8 }} /></label>
      </div>
      <div style={{ marginTop: 20, padding: 16, background: "rgba(0,0,0,0.2)", borderRadius: 8, textAlign: "center" }}>
        <p style={{ fontSize: "0.9em", opacity: 0.7 }}>You&apos;re burning roughly...</p>
        <p style={{ fontSize: "2em", fontWeight: 800, color: "#eab308" }}>${Math.round(monthly)}/month</p>
        <p style={{ fontSize: "0.9em", opacity: 0.7 }}>...explaining the same damn things to an AI that can&apos;t be bothered to remember.</p>
      </div>
    </div>
  );
}

export function SpotTheAgent() {
  const [revealed, setRevealed] = useState(false);
  const paragraphs = [
    {
      text: "Based on our previous discussions about the Q1 launch timeline and your preference for deploying on Tuesdays, I've prepared the migration script. I noticed the Stripe webhook issue from last week is still open — want me to prioritize that before the deployment?",
      label: "Agent WITH memory",
    },
    {
      text: "I'd be happy to help you with a migration script! Could you provide some context about the project? What tech stack are you using? What's the timeline? Also, are there any specific requirements I should know about? 😊",
      label: "Agent WITHOUT memory",
    },
  ];
  const [guess, setGuess] = useState<number | null>(null);

  return (
    <div style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", borderRadius: 12, padding: "24px 28px", margin: "32px 0" }}>
      <p style={{ fontWeight: 700, fontSize: "1.15em", marginBottom: 4 }}>🕵️ Spot the Agent: Which One Has Memory?</p>
      <p style={{ opacity: 0.7, marginBottom: 16 }}>Two agents. Same question. One remembers you. One doesn&apos;t. Can you tell?</p>
      {paragraphs.map((p, i) => (
        <div key={i} onClick={() => { if (!revealed) setGuess(i); }} style={{
          padding: 16, marginBottom: 12, borderRadius: 8, cursor: revealed ? "default" : "pointer",
          background: revealed ? (i === 0 ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)") : guess === i ? "rgba(59,130,246,0.2)" : "rgba(255,255,255,0.05)",
          border: `1px solid ${guess === i && !revealed ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.1)"}`,
        }}>
          <p style={{ fontWeight: 600, marginBottom: 4 }}>Agent {i === 0 ? "A" : "B"}</p>
          <p style={{ fontStyle: "italic" }}>&ldquo;{p.text}&rdquo;</p>
          {revealed && <p style={{ fontWeight: 700, marginTop: 8, color: i === 0 ? "#22c55e" : "#ef4444" }}>← {p.label}</p>}
        </div>
      ))}
      {guess !== null && !revealed && (
        <button onClick={() => setRevealed(true)} style={{ padding: "10px 24px", borderRadius: 8, background: "#3b82f6", color: "#fff", fontWeight: 700, border: "none", cursor: "pointer" }}>
          Reveal Answer
        </button>
      )}
      {revealed && (
        <p style={{ marginTop: 8, opacity: 0.8 }}>
          {guess === 0 ? "Nailed it! 🎯 Agent A knew the project, the timeline, and even remembered an open bug." : "Not quite — Agent A was the one with memory. Notice how it referenced past decisions and open issues? That's the difference a memory system makes."}
        </p>
      )}
    </div>
  );
}

export function MemoryTimeline() {
  const stages = [
    { day: "Day 1", title: "Stranger Danger", desc: "Your agent knows literally nothing. You spend 20 minutes explaining your project, your stack, your name. It responds with \"I'd be happy to help! 😊\" and you die a little inside.", color: "#ef4444" },
    { day: "Day 7", title: "Acquaintance", desc: "A week of accumulated notes. Your agent knows your active projects, your preferred stack, and that you deploy on Tuesdays. It still asks some questions, but relevant ones.", color: "#eab308" },
    { day: "Day 30", title: "Reliable Coworker", desc: "Your agent has a month of context. It references past decisions, anticipates blockers, and writes morning briefings tailored to your schedule. You've stopped re-explaining things entirely.", color: "#22c55e" },
    { day: "Day 90", title: "Mind Reader", desc: "Three months of compounding memory. Your agent runs workflows autonomously, flags issues before you notice them, and knows your patterns better than most humans you work with.", color: "#e8772e" },
  ];
  const [active, setActive] = useState(0);

  return (
    <div style={{ background: "rgba(232,119,46,0.06)", border: "1px solid rgba(232,119,46,0.18)", borderRadius: 12, padding: "24px 28px", margin: "32px 0" }}>
      <p style={{ fontWeight: 700, fontSize: "1.15em", marginBottom: 16 }}>📈 The Memory Timeline: From Goldfish to Mind Reader</p>
      <div style={{ display: "flex", gap: 0, marginBottom: 20, position: "relative" }}>
        {stages.map((s, i) => (
          <div key={i} onClick={() => setActive(i)} style={{ flex: 1, cursor: "pointer", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", margin: "0 auto 8px",
              background: i <= active ? s.color : "rgba(255,255,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 800, fontSize: "0.85em", transition: "all 0.3s",
              border: i === active ? `3px solid ${s.color}` : "3px solid transparent",
              boxShadow: i === active ? `0 0 12px ${s.color}50` : "none",
            }}>
              {i + 1}
            </div>
            <p style={{ fontSize: "0.8em", fontWeight: i === active ? 700 : 400, opacity: i === active ? 1 : 0.5 }}>{s.day}</p>
          </div>
        ))}
      </div>
      <div style={{ padding: 16, background: "rgba(0,0,0,0.2)", borderRadius: 8, transition: "all 0.3s" }}>
        <p style={{ fontWeight: 700, fontSize: "1.1em", color: stages[active].color, marginBottom: 4 }}>{stages[active].title}</p>
        <p>{stages[active].desc}</p>
      </div>
    </div>
  );
}
