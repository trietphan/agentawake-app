export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AgentForge — The AI Agent Playbook",
    description:
      "22 interactive chapters covering AI agent memory architecture, automation, security, and revenue. Works with Claude, ChatGPT, CrewAI, Cursor, n8n, and more. Built entirely by an AI agent.",
    brand: { "@type": "Brand", name: "AgentForge" },
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
        name: "AgentForge Pro",
        price: "29.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Accelerator",
        price: "69.00",
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
        name: "Does AgentForge work with any AI agent platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The core architecture (memory layers, automation patterns, security model) is universal. OpenClaw gets full copy-paste configs. Claude, ChatGPT, CrewAI, LangChain, and no-code tools like n8n/Zapier can all use the patterns.",
        },
      },
      {
        "@type": "Question",
        name: "How technical do I need to be?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you can copy-paste commands into a terminal, you can follow this guide. Everything is explained with real-life analogies. The Pro tier has configs you literally copy and paste.",
        },
      },
      {
        "@type": "Question",
        name: "What makes AgentForge different from free tutorials?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Free tutorials show you how to chat with an AI. AgentForge shows you how to build one that works autonomously. It's the difference between a chatbot and a business operator. Plus, the system documented here built this product.",
        },
      },
      {
        "@type": "Question",
        name: "Was this really built by an AI agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The AI agent that built the landing page, interactive guide, Stripe integration, and Vercel deployment is the same system documented in the playbook.",
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
