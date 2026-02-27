export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AgentAwake — The AI Agent Playbook",
    description:
      "22 interactive chapters covering AI agent memory architecture, automation, security, and revenue. Works with Claude, ChatGPT, CrewAI, Cursor, n8n, and more. Built entirely by an AI agent.",
    brand: { "@type": "Brand", name: "AgentAwake" },
    offers: [
      {
        "@type": "Offer",
        name: "The Blueprint",
        price: "9.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "AgentAwake Pro",
        price: "19.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Accelerator",
        price: "29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
    aggregateRating: undefined, // Add when we have reviews
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is this a subscription?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. One-time payment, lifetime access. You keep everything, including future updates to your tier.",
        },
      },
      {
        "@type": "Question",
        name: "I'm not technical. Can I still use this?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. The playbook starts with zero-code methods (Claude Projects, ChatGPT Custom GPTs) and progressively introduces more technical setups. Chapter 0 is free — try it.",
        },
      },
      {
        "@type": "Question",
        name: "Which AI platform does this work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All major ones. We have dedicated implementation guides for Claude, ChatGPT, CrewAI, LangChain, AutoGPT, n8n, Cursor, and OpenClaw. Pick your stack and follow the guide.",
        },
      },
      {
        "@type": "Question",
        name: "What if it doesn't work for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "30-day money-back guarantee. If the playbook doesn't help you build a better agent, email us and we'll refund you immediately.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to implement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The basic memory system takes about 45 minutes. Most builders have a working autonomous agent within a weekend.",
        },
      },
      {
        "@type": "Question",
        name: "Do I get access to future chapters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, for your tier and below. We're actively adding new platform guides and case studies.",
        },
      },
      {
        "@type": "Question",
        name: "Does this work with any AI agent platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The core architecture (memory layers, automation patterns, security model) is universal. OpenClaw gets full copy-paste configs. Claude, ChatGPT, CrewAI, LangChain, and even no-code tools like n8n/Zapier can all use the patterns.",
        },
      },
      {
        "@type": "Question",
        name: "Wait — this was really built by an AI agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The agent (ToDaMoon 🐾) that built this landing page, the interactive guide, wired Stripe, and deployed to Vercel is the same system documented in the playbook. We're selling the map we used to navigate the territory.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
