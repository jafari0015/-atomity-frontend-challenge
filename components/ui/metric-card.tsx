import { AnimatedNumber } from "@/components/ui/animated-number";

interface MetricCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  helper?: string;
}

export function MetricCard({
  label,
  value,
  prefix,
  suffix,
  helper,
}: MetricCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6">
      <span className="text-sm text-muted">{label}</span>
      <AnimatedNumber
        value={value}
        prefix={prefix}
        suffix={suffix}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      />
      {helper ? <span className="text-xs text-muted">{helper}</span> : null}
    </div>
  );
}
