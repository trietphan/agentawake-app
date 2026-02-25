import { getCurrentUser } from "@/lib/auth";
import { chapters } from "@/lib/chapters";
import GuideNav from "@/components/GuideNav";

export default async function GuideLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  const userTier = user?.tier || "free";

  // We pass currentSlug="" here — GuideNav reads it client-side
  // Actually we need a wrapper to get the slug from URL
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <GuideNavWrapper userTier={userTier} />
      {children}
    </div>
  );
}

// Server component that passes data to client nav
function GuideNavWrapper({ userTier }: { userTier: string }) {
  // We serialize chapters for the client component
  const chaptersData = chapters.map(({ slug, number, title, emoji, requiredTier, readTime }) => ({
    slug, number, title, emoji, requiredTier, readTime,
  }));

  return <GuideNavClient chapters={chaptersData} userTier={userTier} />;
}

// Need a client wrapper to get current pathname
import GuideNavClient from "@/components/GuideNavClient";
