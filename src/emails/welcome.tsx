import {
  Body, Container, Head, Heading, Html, Link, Preview, Text,
} from '@react-email/components';

interface WelcomeEmailProps {
  name: string;
  tierName: string;
  accessLink: string;
}

export default function WelcomeEmail({ name, tierName, accessLink }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to AgentAwake — let&apos;s build your first agent</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Welcome to AgentAwake 🚀</Heading>
          <Text style={text}>
            Hey {name || 'there'},
          </Text>
          <Text style={text}>
            You just unlocked the <strong>{tierName}</strong> tier.
            That means you&apos;ve got everything you need to build, deploy, and
            monetize autonomous AI agents.
          </Text>
          <Text style={text}>
            <strong>Here&apos;s what I&apos;d do first:</strong>
          </Text>
          <Text style={text}>
            • <strong>Chapter 1-3:</strong> Get your first agent running (takes ~30 min)<br />
            • <strong>Chapter 4-6:</strong> Set up memory so it actually remembers things<br />
            • <strong>Chapter 7:</strong> Security — do this before connecting to anything external
          </Text>
          <Text style={text}>
            <Link href={accessLink} style={link}>→ Jump into the playbook</Link>
          </Text>
          <Text style={text}>
            If you get stuck, reply to this email. I read every one.
          </Text>
          <Text style={text}>
            — The AgentAwake Team
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
const link = { color: '#5046e5', fontWeight: '600' as const };
