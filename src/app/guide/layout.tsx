import Link from "next/link";
import { getCurrentUser, hasAccess } from "@/lib/auth";
import { chapters } from "@/lib/chapters";

export default async function GuideLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  const userTier = user?.tier || "free";

  return (
    <div className="min-h-screen bg-[#07070a]">
      {/* Top bar */}
      <header className="fixed top-0 z-50 w-full border-b border-zinc-800/60 bg-[#07070a]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <Link href="/" className="text-sm font-extrabold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
            ⚡ AgentForge
          </Link>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-500">{user.email}</span>
                <span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400 capitalize">
                  {user.tier}
                </span>
              </div>
            ) : (
              <Link href="/#pricing" className="rounded-lg bg-purple-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-purple-500 transition-colors">
                Get Access
              </Link>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl pt-14">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 flex-shrink-0 border-r border-zinc-800/60 h-[calc(100vh-56px)] sticky top-14 overflow-y-auto py-6 px-4">
          <div className="mb-6">
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-zinc-600 mb-3">Chapters</div>
          </div>
          <nav className="space-y-1">
            {chapters.map((ch) => {
              const locked = !hasAccess(userTier, ch.requiredTier);
              return (
                <Link
                  key={ch.slug}
                  href={`/guide/${ch.slug}`}
                  className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                    locked
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-zinc-800/50 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <span className="text-base">{ch.emoji}</span>
                  <span className="flex-1 truncate text-[0.82rem]">{ch.title}</span>
                  {locked && <span className="text-[0.65rem] text-zinc-600">🔒</span>}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
