export function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse bg-[var(--surface-hover)] rounded ${className || ''}`} />;
}

export function ChapterSkeleton() {
  return (
    <div className="space-y-4 p-8">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/5" />
      <div className="h-6" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}
