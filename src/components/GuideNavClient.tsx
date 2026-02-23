"use client";

import { usePathname } from "next/navigation";
import GuideNav from "./GuideNav";

interface Chapter {
  slug: string;
  number: number;
  title: string;
  emoji: string;
  requiredTier: string;
  readTime: string;
}

export default function GuideNavClient({ chapters, userTier }: { chapters: Chapter[]; userTier: string }) {
  const pathname = usePathname();
  const currentSlug = pathname?.split("/guide/")[1] || "";

  return <GuideNav chapters={chapters} currentSlug={currentSlug} userTier={userTier} />;
}
