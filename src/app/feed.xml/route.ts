import { blogPosts } from "@/content/blog-posts";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const items = blogPosts
    .map(
      (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>https://agentawake.com/blog/${p.slug}</link>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <guid>https://agentawake.com/blog/${p.slug}</guid>
    </item>
  `,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AgentAwake Blog</title>
    <link>https://agentawake.com/blog</link>
    <description>Build AI agents that actually remember. Tutorials, guides, and build-in-public updates.</description>
    <language>en-us</language>
    <atom:link href="https://agentawake.com/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
