import { MetadataRoute } from "next";
import { chapters } from "@/lib/chapters";

const siteUrl = "https://agentawake.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePages = chapters.map((ch) => ({
    url: `${siteUrl}/guide/${ch.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: ch.requiredTier === "free" ? 0.9 : 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/free`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    ...guidePages,
  ];
}
