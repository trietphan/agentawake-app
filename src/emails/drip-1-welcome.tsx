import {
  Body, Container, Head, Heading, Html, Link, Preview, Text, Hr,
} from '@react-email/components';

export default function Drip1WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>Your free templates are inside — plus what's coming next ⚡</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>⚡ You're in. Let's cure your agent's amnesia.</Heading>
          <Text style={text}>
            Welcome to AgentAwake. You joined a community of developers who are done re-explaining themselves to their AI tools every single session.
          </Text>
          <Text style={text}>
            <strong>📥 Your free templates (grab them now):</strong>
          </Text>
          <Text style={text}>
            • <Link href="https://agentawake.com/templates/basic-memory-starter" style={link}>Basic Memory Starter</Link> — the 3-file system that fixes AI amnesia<br />
            • <Link href="https://agentawake.com/templates/freelancer-assistant" style={link}>Freelancer Assistant</Link> — client management + invoice tracking<br />
            • <Link href="https://agentawake.com/templates/student-research-helper" style={link}>Student Research Helper</Link> — paper organization + study plans
          </Text>
          <Text style={text}>
            <strong>📖 Start here — the free chapter:</strong><br />
            <Link href="https://agentawake.com/free" style={link}>Why Your AI Agent Has Amnesia (And the 3-File Fix)</Link>
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Here's what's coming your way over the next 2 weeks:</strong>
          </Text>
          <Text style={text}>
            📬 <strong>Day 2</strong> — A preview of Chapter 0: what the full memory system looks like end-to-end<br />
            📬 <strong>Day 5</strong> — A real case study: how one dev saved 3 hours/week with agent memory<br />
            📬 <strong>Day 8</strong> — The 3 memory patterns most people get wrong (and how to fix them)<br />
            📬 <strong>Day 12</strong> — How to go deeper if you're ready to level up
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Quick start (takes 10 min):</strong>
          </Text>
          <Text style={text}>
            1. Download the Basic Memory Starter template<br />
            2. Fill in the [BRACKETS] with your info<br />
            3. Load it into Claude, ChatGPT, or Cursor<br />
            4. Your agent now remembers who you are
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
const hr = { borderColor: '#e6e6e6', margin: '20px 0' };
