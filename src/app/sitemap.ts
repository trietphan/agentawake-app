import { MetadataRoute } from "next";
import { chapters } from "@/lib/chapters";
import { blogPosts } from "@/content/blog-posts";

const siteUrl = "https://agentawake.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePages = chapters.map((ch) => ({
    url: `${siteUrl}/guide/${ch.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: ch.requiredTier === "free" ? 0.9 : 0.7,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.7,
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
    {
      url: `${siteUrl}/chapters`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/feed.xml`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...blogPages,
    ...guidePages,
  ];
}
