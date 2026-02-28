import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from '@react-email/components';

interface TemplateSubmissionEmailProps {
  templateName: string;
  description: string;
  platform: string;
  tierSuggestion: string;
  authorName: string;
  authorEmail: string;
  authorTwitter?: string;
  agentsContent: string;
  soulContent: string;
  memoryContent: string;
  submittedAt: string;
}

export default function TemplateSubmissionEmail({
  templateName, description, platform, tierSuggestion,
  authorName, authorEmail, authorTwitter,
  agentsContent, soulContent, memoryContent, submittedAt,
}: TemplateSubmissionEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New template submission: {templateName} by {authorName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🆕 New Template Submission</Heading>
          <Text style={text}>A community member submitted a new template to AgentAwake Marketplace.</Text>

          <Section style={card}>
            <Text style={label}>Template Name</Text>
            <Text style={value}>{templateName}</Text>
            <Text style={label}>Description</Text>
            <Text style={value}>{description}</Text>
            <Text style={label}>Platform</Text>
            <Text style={value}>{platform}</Text>
            <Text style={label}>Suggested Tier</Text>
            <Text style={value}>{tierSuggestion}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={card}>
            <Heading style={h2}>Author Info</Heading>
            <Text style={label}>Name</Text>
            <Text style={value}>{authorName}</Text>
            <Text style={label}>Email</Text>
            <Text style={value}>{authorEmail}</Text>
            {authorTwitter && (
              <>
                <Text style={label}>Twitter/X</Text>
                <Text style={value}>{authorTwitter}</Text>
              </>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={card}>
            <Heading style={h2}>AGENTS.md</Heading>
            <Text style={code}>{agentsContent}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={card}>
            <Heading style={h2}>SOUL.md</Heading>
            <Text style={code}>{soulContent}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={card}>
            <Heading style={h2}>MEMORY.md</Heading>
            <Text style={code}>{memoryContent}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>Submitted at {submittedAt}</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#0f0f0f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
const container = { maxWidth: '680px', margin: '0 auto', padding: '32px 24px' };
const h1 = { color: '#e8772e', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' };
const h2 = { color: '#f0a868', fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' };
const text = { color: '#a0a0a0', fontSize: '14px', lineHeight: '1.6' };
const label = { color: '#606060', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: '2px', marginTop: '12px' };
const value = { color: '#e0e0e0', fontSize: '14px', marginTop: '2px' };
const code = { color: '#b0b0b0', fontSize: '12px', fontFamily: 'monospace', whiteSpace: 'pre-wrap' as const, backgroundColor: '#1a1a1a', padding: '12px', borderRadius: '6px' };
const card = { backgroundColor: '#1a1a1a', borderRadius: '10px', padding: '16px 20px', marginBottom: '16px' };
const hr = { borderColor: '#2a2a2a', margin: '16px 0' };
const footer = { color: '#404040', fontSize: '12px', textAlign: 'center' as const };
