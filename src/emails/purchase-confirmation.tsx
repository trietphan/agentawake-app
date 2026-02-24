import {
  Body, Container, Head, Heading, Hr, Html, Link, Preview, Text,
} from '@react-email/components';

interface PurchaseConfirmationProps {
  name: string;
  tierName: string;
  amount: string;
  date: string;
  receiptUrl?: string;
}

export default function PurchaseConfirmation({
  name, tierName, amount, date, receiptUrl,
}: PurchaseConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>Your AgentForge receipt — ${amount}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Payment Confirmed ✅</Heading>
          <Text style={text}>Hey {name || 'there'},</Text>
          <Text style={text}>
            Your payment has been processed. Here are the details:
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Product:</strong> AgentForge Playbook — {tierName}<br />
            <strong>Amount:</strong> ${amount}<br />
            <strong>Date:</strong> {date}<br />
            {receiptUrl && (
              <>
                <strong>Stripe Receipt:</strong>{' '}
                <Link href={receiptUrl} style={link}>View receipt</Link>
                <br />
              </>
            )}
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            Check your inbox for a separate welcome email with your access link.
            If you don&apos;t see it within 5 minutes, check spam or reply to this email.
          </Text>
          <Text style={smallText}>
            This is a one-time purchase. No recurring charges.
            Questions? Reply to this email.
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
const hr = { borderColor: '#e6ebf1', margin: '20px 0' };
const smallText = { color: '#8898aa', fontSize: '13px', lineHeight: '20px' };
const link = { color: '#5046e5', fontWeight: '600' as const };
