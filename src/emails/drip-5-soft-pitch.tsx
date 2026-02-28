import {
  Body, Container, Head, Heading, Html, Link, Preview, Text, Hr,
} from '@react-email/components';

export default function Drip5SoftPitchEmail() {
  return (
    <Html>
      <Head />
      <Preview>Ready to go deeper? Here's what's waiting for you.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🚀 You've Got the Foundation. Here's What's Next.</Heading>
          <Text style={text}>
            Over the past 12 days you've gotten the free templates, a chapter preview, a real case study, and the 3 patterns that break most setups.
          </Text>
          <Text style={text}>
            If any of that clicked, the full playbook goes 36 chapters deep.
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>📘 Pro — $29</strong>
          </Text>
          <Text style={text}>
            The complete memory architecture system. Every pattern, every template, every chapter on building agents that actually retain context across sessions.
          </Text>
          <Text style={text}>
            ✅ 28 chapters (memory, automation, security, multi-agent orchestration)<br />
            ✅ All free templates included<br />
            ✅ Lifetime access + all future updates
          </Text>
          <Text style={text}>
            <Link href="https://agentawake.com/#pricing" style={ctaLink}>Get Pro for $29 →</Link>
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>🔥 Accelerator — $69</strong>
          </Text>
          <Text style={text}>
            Everything in Pro, plus 8 platform-specific implementation guides built for the tools you're already using:
          </Text>
          <Text style={text}>
            Claude · ChatGPT · CrewAI · LangChain · AutoGPT · n8n · Cursor · OpenClaw
          </Text>
          <Text style={text}>
            Each guide includes: setup walkthroughs, code examples, troubleshooting, cost analysis, and "your first 30 minutes" quick-start.
          </Text>
          <Text style={text}>
            <Link href="https://agentawake.com/#pricing" style={ctaLinkAlt}>Get Accelerator for $69 →</Link>
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            No pressure. The free chapter and templates are yours forever either way.
          </Text>
          <Text style={text}>
            But if you're serious about building agents that don't forget — the full system is worth it. Most people make back the cost in saved time within the first week.
          </Text>
          <Text style={text}>
            Questions? Just reply to this email.
          </Text>
          <Text style={text}>
            — Triet
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
const ctaLink = { color: '#ffffff', backgroundColor: '#e8772e', padding: '12px 24px', borderRadius: '8px', fontWeight: '700' as const, textDecoration: 'none' as const, display: 'inline-block' as const };
const ctaLinkAlt = { color: '#ffffff', backgroundColor: '#c9621e', padding: '12px 24px', borderRadius: '8px', fontWeight: '700' as const, textDecoration: 'none' as const, display: 'inline-block' as const };
const hr = { borderColor: '#e6e6e6', margin: '20px 0' };
