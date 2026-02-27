import {
  Body, Container, Head, Heading, Html, Link, Preview, Text, Hr,
} from '@react-email/components';

export default function SubscriberWelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>Welcome to AgentAwake — your free templates are ready</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>⚡ Welcome to AgentAwake</Heading>
          <Text style={text}>
            You&apos;re in. Here&apos;s what you just unlocked:
          </Text>
          <Text style={text}>
            <strong>📥 Free Templates (download now):</strong>
          </Text>
          <Text style={text}>
            • <Link href="https://agentawake.com/templates/basic-memory-starter" style={link}>Basic Memory Starter</Link> — the 3-file system that fixes AI amnesia<br />
            • <Link href="https://agentawake.com/templates/freelancer-assistant" style={link}>Freelancer Assistant</Link> — client management + invoice tracking<br />
            • <Link href="https://agentawake.com/templates/student-research-helper" style={link}>Student Research Helper</Link> — paper organization + study plans
          </Text>
          <Text style={text}>
            <strong>📖 Free Chapter:</strong><br />
            <Link href="https://agentawake.com/free" style={link}>Why Your AI Agent Has Amnesia (And the 3-File Fix)</Link>
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>What to do next:</strong>
          </Text>
          <Text style={text}>
            1. Download the Basic Memory Starter template<br />
            2. Fill in the [BRACKETS] with your info (takes 10 min)<br />
            3. Load it into Claude, ChatGPT, or Cursor<br />
            4. Watch your agent actually remember things
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Want the full system?</strong> The playbook goes 36 chapters deep — automation, security, multi-agent orchestration, and 8 platform implementation guides.
          </Text>
          <Text style={text}>
            <Link href="https://agentawake.com/#pricing" style={ctaLink}>Get the Full Playbook →</Link>
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
