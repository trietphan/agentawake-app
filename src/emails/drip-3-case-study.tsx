import {
  Body, Container, Head, Heading, Html, Link, Preview, Text, Hr,
} from '@react-email/components';

export default function Drip3CaseStudyEmail() {
  return (
    <Html>
      <Head />
      <Preview>How Marcus saved 3 hours/week with agent memory (real story)</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>⏱️ 3 Hours a Week. Every Week. Here's How.</Heading>
          <Text style={text}>
            Marcus is a freelance full-stack dev. He builds Shopify integrations for e-commerce clients. Before AgentAwake, his AI workflow looked like this:
          </Text>
          <Text style={text}>
            Every. Single. Session:<br />
            <em>"Hey Claude, I'm working on a Shopify store. Here's my stack: Node/Express, Postgres, hosted on Railway. My client is [name]. We're building [feature]. The conventions we use are..."</em>
          </Text>
          <Text style={text}>
            He was spending <strong>20–30 minutes per day</strong> just re-briefing his agent. That's 2–3 hours a week — gone.
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>What he did:</strong>
          </Text>
          <Text style={text}>
            1. Created an <code style={code}>AGENT.md</code> — his identity file. Stack, conventions, client context, preferences.<br />
            2. Created a <code style={code}>MEMORY.md</code> — a running log of decisions made and why.<br />
            3. Created a <code style={code}>TASKS.md</code> — current sprint, open bugs, priorities.<br />
            4. Told his agent: "Start every session by reading these three files."
          </Text>
          <Text style={text}>
            Setup time: <strong>45 minutes</strong> (once).
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>What changed:</strong>
          </Text>
          <Text style={text}>
            ✅ Agent already knows his stack on session start<br />
            ✅ Picks up exactly where they left off<br />
            ✅ Remembers client preferences and past decisions<br />
            ✅ Writes code that matches his conventions without reminding<br />
            ✅ 3 hours/week back — every week
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            The templates Marcus used are the same ones in your free download. The Basic Memory Starter is exactly what he started with.
          </Text>
          <Text style={text}>
            <Link href="https://agentawake.com/templates/basic-memory-starter" style={ctaLink}>Get the Basic Memory Starter →</Link>
          </Text>
          <Text style={text}>
            Next email (Day 8): the 3 memory patterns that break most setups — and the fixes.
          </Text>
          <Text style={textSmall}>
            You&apos;re receiving this because you signed up at agentawake.com. Unsubscribe anytime by replying &quot;unsubscribe&quot;.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#f6f9fc', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
const container = { backgroundColor: '#ffffff', margin: '0 auto' as const, padding: '40px 20px', maxWidth: '560px', borderRadius: '8px' };
const h1 = { color: '#1a1a1a', fontSize: '24px', fontWeight: '700' as const, margin: '0 0 20px' };
const text = { color: '#4a4a4a', fontSize: '16px', lineHeight: '26px', margin: '0 0 16px' };
const textSmall = { color: '#999', fontSize: '12px', lineHeight: '20px', margin: '16px 0 0' };
const link = { color: '#e8772e', fontWeight: '600' as const };
const ctaLink = { color: '#ffffff', backgroundColor: '#e8772e', padding: '12px 24px', borderRadius: '8px', fontWeight: '700' as const, textDecoration: 'none' as const, display: 'inline-block' as const };
const code = { fontFamily: 'monospace', backgroundColor: '#f3f3f3', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' };
const hr = { borderColor: '#e6e6e6', margin: '20px 0' };
