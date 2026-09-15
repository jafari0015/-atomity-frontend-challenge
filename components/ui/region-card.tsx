import type { CloudRegion } from "@/types";

export function RegionCard({ region }: { region: CloudRegion }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
      <span className="text-xl" aria-hidden="true">
        {region.flag}
      </span>
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-sm font-medium text-foreground">
          {region.name}
        </span>
        <span className="text-xs text-muted">{region.continent}</span>
      </div>
    </div>
  );
}

export function RegionCardSkeleton() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
      <div className="h-6 w-6 animate-pulse rounded bg-surface-raised" />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="h-3 w-3/4 animate-pulse rounded bg-surface-raised" />
        <div className="h-2.5 w-1/2 animate-pulse rounded bg-surface-raised" />
      </div>
    </div>
  );
}
