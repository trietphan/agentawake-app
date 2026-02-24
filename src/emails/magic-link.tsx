import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface MagicLinkEmailProps {
  magicLink: string;
  tierName: string;
}

export default function MagicLinkEmail({ magicLink, tierName }: MagicLinkEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your access link to AgentForge {tierName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Your AgentForge Access Link 🔑</Heading>
          <Text style={text}>
            Click the button below to access your <strong>{tierName}</strong> content.
            This link is unique to you — don&apos;t share it.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href={magicLink}>
              Access My Playbook
            </Button>
          </Section>
          <Text style={smallText}>
            This link expires in 24 hours. If it&apos;s expired, request a new one from
            your purchase confirmation email or reply to this email.
          </Text>
          <Text style={smallText}>
            Button not working? Copy this link: {magicLink}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#f6f9fc', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
const container = { backgroundColor: '#ffffff', margin: '0 auto' as const, padding: '40px 20px', maxWidth: '560px', borderRadius: '8px' };
const h1 = { color: '#1a1a1a', fontSize: '24px', fontWeight: '700' as const, margin: '0 0 20px', textAlign: 'center' as const };
const text = { color: '#4a4a4a', fontSize: '16px', lineHeight: '26px', margin: '0 0 20px' };
const buttonContainer = { textAlign: 'center' as const, margin: '30px 0' };
const button = { backgroundColor: '#5046e5', borderRadius: '6px', color: '#fff', fontSize: '16px', fontWeight: '600' as const, textDecoration: 'none', textAlign: 'center' as const, display: 'inline-block' as const, padding: '12px 30px' };
const smallText = { color: '#8898aa', fontSize: '13px', lineHeight: '20px', margin: '0 0 10px' };
