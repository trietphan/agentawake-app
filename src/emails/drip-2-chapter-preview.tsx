import {
  Body, Container, Head, Heading, Html, Link, Preview, Text, Hr,
} from '@react-email/components';

export default function Drip2ChapterPreviewEmail() {
  return (
    <Html>
      <Head />
      <Preview>Here's what you'll learn in Chapter 0 of AgentAwake</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>📖 Chapter 0: The Memory Architecture That Changes Everything</Heading>
          <Text style={text}>
            Two days ago you grabbed the free templates. Today I want to show you what the full system looks like — so you know exactly where you're headed.
          </Text>
          <Text style={text}>
            <strong>Chapter 0 is the foundation.</strong> It's where 90% of people get stuck before they even start, because they try to hold everything in the prompt.
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Here's what Chapter 0 covers:</strong>
          </Text>
          <Text style={text}>
            🧠 <strong>Why agents forget</strong> — the context window problem explained in plain English<br />
            📂 <strong>The 3-file system</strong> — AGENT.md, MEMORY.md, TASKS.md and what goes in each<br />
            🔁 <strong>The update loop</strong> — how to teach your agent to maintain its own memory<br />
            ⚡ <strong>First 10 minutes</strong> — exactly what to do when you load a fresh session<br />
            🚫 <strong>Common mistakes</strong> — the 4 things that break memory systems on day one
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>The key insight from Chapter 0:</strong>
          </Text>
          <Text style={text}>
            Your agent isn't bad at remembering. It's operating without a filing system. Once you give it structure, everything changes — response quality, consistency, speed.
          </Text>
          <Text style={text}>
            One developer told me: <em>"I stopped re-explaining my stack and preferences every session. My agent just knows now."</em>
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <Link href="https://agentawake.com/free" style={ctaLink}>Read the Free Chapter →</Link>
          </Text>
          <Text style={text}>
            More coming on Day 5 — a real case study from someone who saved 3 hours a week with this system.
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
const hr = { borderColor: '#e6e6e6', margin: '20px 0' };
