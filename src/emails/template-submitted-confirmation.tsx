import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from '@react-email/components';

interface TemplateConfirmationEmailProps {
  authorName: string;
  templateName: string;
}

export default function TemplateConfirmationEmail({ authorName, templateName }: TemplateConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>We got your template submission — thanks, {authorName}!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>⚡ Template Received!</Heading>
          <Text style={text}>Hey {authorName},</Text>
          <Text style={text}>
            We received your submission for <strong style={{ color: '#e8772e' }}>{templateName}</strong>.
            Thanks for contributing to the AgentAwake community!
          </Text>
          <Text style={text}>
            Here&apos;s what happens next:
          </Text>
          <Text style={text}>
            • We&apos;ll review your template within 3–5 business days<br />
            • If we publish it, you&apos;ll receive <strong style={{ color: '#f0a868' }}>70% of all revenue</strong> it generates<br />
            • We may reach out to refine the content or details<br />
            • Once live, you&apos;ll get a link to share with your audience
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            Questions? Reply to this email or reach us at{' '}
            <a href="mailto:hello@agentawake.com" style={link}>hello@agentawake.com</a>
          </Text>
          <Text style={text}>— The AgentAwake Team</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#0f0f0f', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
const container = { maxWidth: '600px', margin: '0 auto', padding: '32px 24px' };
const h1 = { color: '#e8772e', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' };
const text = { color: '#a0a0a0', fontSize: '14px', lineHeight: '1.8' };
const link = { color: '#e8772e' };
const hr = { borderColor: '#2a2a2a', margin: '24px 0' };
