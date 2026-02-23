import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #07070a 0%, #0f0a1a 50%, #07070a 100%)",
          fontFamily: "Inter, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "600px",
            background: "radial-gradient(ellipse, rgba(139,92,246,0.15), transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 20px",
            borderRadius: "50px",
            border: "1px solid rgba(139,92,246,0.3)",
            background: "rgba(139,92,246,0.08)",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#4ade80",
            }}
          />
          <span style={{ color: "#c4b5fd", fontSize: "16px", fontWeight: 600 }}>
            Built entirely by an AI agent
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "white",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              marginBottom: "16px",
            }}
          >
            Your AI Agent Should Be
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              background: "linear-gradient(90deg, #a855f7, #d8b4fe, #f0abfc)",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "center",
              lineHeight: 1.1,
              letterSpacing: "-2px",
              marginBottom: "30px",
            }}
          >
            Running Your Business
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: "650px",
            lineHeight: 1.5,
            marginBottom: "40px",
          }}
        >
          22 interactive chapters · 8 platforms · Memory architecture, automation, security & revenue playbook
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: "50px",
          }}
        >
          {[
            { num: "22", label: "Chapters" },
            { num: "8+", label: "Platforms" },
            { num: "45min", label: "Setup" },
            { num: "$9", label: "Starting at" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 800, color: "white" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "#71717a", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom branding */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ fontSize: "18px", fontWeight: 800, color: "#a855f7" }}>⚡</span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#71717a" }}>AgentForge</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
