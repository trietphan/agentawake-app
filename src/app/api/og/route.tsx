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
          background: "radial-gradient(circle at 20% 20%, rgba(240,168,104,0.12), transparent 35%), radial-gradient(circle at 80% 80%, rgba(232,119,46,0.12), transparent 35%), linear-gradient(135deg, #050507 0%, #0d0b11 60%, #050507 100%)",
          fontFamily: "Inter, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: "28px", border: "1px solid rgba(240,168,104,0.18)", borderRadius: "24px" }} />

        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "26px" }}>
          <div style={{ position: "relative", width: "78px", height: "78px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "66px", height: "52px", borderRadius: "50px", border: "2px solid #f0a868", opacity: 0.9 }} />
            <div style={{ position: "absolute", top: "18px", left: "15px", width: "20px", height: "20px", borderRadius: "50%", border: "2px solid #e8772e" }} />
            <div style={{ position: "absolute", top: "18px", right: "15px", width: "20px", height: "20px", borderRadius: "50%", border: "2px solid #e8772e" }} />
            <div
              style={{
                position: "absolute",
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "22px solid #e8772e",
                transform: "translateY(10px) rotate(20deg)",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 18px", borderRadius: "999px", border: "1px solid rgba(240,168,104,0.28)", background: "rgba(232,119,46,0.1)" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "99px", background: "#4ade80" }} />
            <span style={{ color: "#f0a868", fontSize: "16px", fontWeight: 600 }}>Built by an autonomous AI operator</span>
          </div>
        </div>

        <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-2.5px", color: "#fff", textAlign: "center" }}>
          36 Interactive Chapters
        </div>
        <div style={{ fontSize: "32px", fontWeight: 700, lineHeight: 1.25, color: "#f0a868", marginTop: "14px", textAlign: "center" }}>
          8 Platform Implementation Guides
        </div>

        <div style={{ marginTop: "28px", color: "#a1a1aa", fontSize: "21px", textAlign: "center", maxWidth: "820px" }}>
          Memory architecture · automation · security · revenue systems
        </div>

        <div style={{ position: "absolute", bottom: "34px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px", color: "#e8772e" }}>⚡</span>
          <span style={{ fontSize: "17px", fontWeight: 700, color: "#f0a868" }}>AgentAwake</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
