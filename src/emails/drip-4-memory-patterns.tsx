import {
  Body, Container, Head, Heading, Html, Link, Preview, Text, Hr,
} from '@react-email/components';

export default function Drip4MemoryPatternsEmail() {
  return (
    <Html>
      <Head />
      <Preview>3 memory patterns most devs get wrong (and how to fix them)</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>🧠 3 Memory Patterns Most People Get Wrong</Heading>
          <Text style={text}>
            I've seen hundreds of agent setups. The ones that break always fall into the same traps. Here are the three most common — and the exact fix for each.
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Pattern #1: The Monolith Memory File</strong>
          </Text>
          <Text style={text}>
            <strong>The mistake:</strong> Dumping everything into one giant MEMORY.md — project context, decisions, tasks, preferences, client info, all in one place.
          </Text>
          <Text style={text}>
            <strong>Why it breaks:</strong> Context windows are finite. A 2,000-line memory file eats your entire budget before your agent writes a single line of code.
          </Text>
          <Text style={text}>
            <strong>The fix:</strong> Separate concerns. <code style={code}>AGENT.md</code> for identity/stack (rarely changes). <code style={code}>MEMORY.md</code> for decisions (append-only). <code style={code}>TASKS.md</code> for current work (updated daily). Load only what the session needs.
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Pattern #2: Static Memory That Never Updates</strong>
          </Text>
          <Text style={text}>
            <strong>The mistake:</strong> Setting up the files once and never touching them again.
          </Text>
          <Text style={text}>
            <strong>Why it breaks:</strong> Your project evolves. Your agent's memory doesn't. Six weeks in, it's operating on stale context and making decisions based on decisions you reversed two sprints ago.
          </Text>
          <Text style={text}>
            <strong>The fix:</strong> End every session with: <em>"Update MEMORY.md with any decisions we made today."</em> Takes 30 seconds. Compounds massively over time.
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            <strong>Pattern #3: Trusting Memory Without Verification</strong>
          </Text>
          <Text style={text}>
            <strong>The mistake:</strong> Assuming the agent loaded and understood the memory files.
          </Text>
          <Text style={text}>
            <strong>Why it breaks:</strong> Agents hallucinate, skip files, or misread context. You don't notice until it writes code that contradicts a decision you made weeks ago.
          </Text>
          <Text style={text}>
            <strong>The fix:</strong> Start high-stakes sessions with: <em>"Summarize what you know about this project from the files."</em> If the summary is wrong, you catch it before any damage is done.
          </Text>
          <Hr style={hr} />
          <Text style={text}>
            These three patterns are covered in depth in the playbook — along with 33 more chapters on automation, multi-agent systems, and platform-specific implementation for Claude, ChatGPT, Cursor, and more.
          </Text>
          <Text style={text}>
            <Link href="https://agentawake.com/#pricing" style={link}>See what's in the full playbook →</Link>
          </Text>
          <Text style={text}>
            One more email coming (Day 12). I'll share options if you want to go deeper.
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
const code = { fontFamily: 'monospace', backgroundColor: '#f3f3f3', padding: '2px 6px', borderRadius: '4px', fontSize: '14px' };
const hr = { borderColor: '#e6e6e6', margin: '20px 0' };
