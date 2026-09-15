import { StatusBadge } from "@/components/ui/status-badge";
import { UtilizationBar } from "@/components/ui/utilization-bar";
import type { CloudResource } from "@/types";

interface ResourceCardProps {
  resource: CloudResource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wide text-muted">
            {resource.category} instance
          </span>
          <h3 className="text-xl font-medium text-foreground">{resource.name}</h3>
          <span className="font-mono text-sm text-primary">
            {resource.instance}
          </span>
        </div>
        <StatusBadge label={resource.status} tone="warning" />
      </div>

      <div className="flex flex-col gap-4">
        <UtilizationBar label="CPU utilization" value={resource.cpuUsage} />
        <UtilizationBar label="Memory utilization" value={resource.memoryUsage} />
      </div>

      <div className="flex items-center justify-between border-t border-border pt-5">
        <span className="text-sm text-muted">Current monthly cost</span>
        <span className="font-mono text-lg font-semibold text-foreground">
          ${resource.monthlyCost.toLocaleString("en-US")}/month
        </span>
      </div>
    </div>
  );
}
