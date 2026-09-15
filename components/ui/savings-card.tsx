import { AnimatedNumber } from "@/components/ui/animated-number";

interface SavingsCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  emphasis?: boolean;
}

export function SavingsCard({
  label,
  value,
  prefix = "$",
  suffix,
  emphasis = false,
}: SavingsCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 overflow-hidden rounded-2xl border p-6 sm:p-8 ${
        emphasis
          ? "border-accent-green/30 bg-accent-green/[0.06]"
          : "border-border bg-surface"
      }`}
    >
      <span className="text-sm text-muted">{label}</span>
      <div className="flex flex-wrap items-baseline gap-x-2">
        <AnimatedNumber
          value={value}
          prefix={prefix}
          className={`font-mono font-semibold tracking-tight ${
            emphasis
              ? "text-4xl text-accent-green sm:text-5xl"
              : "text-3xl text-foreground sm:text-4xl"
          }`}
        />
        {suffix ? (
          <span
            className={`font-mono font-medium ${
              emphasis ? "text-lg text-accent-green/80" : "text-base text-muted"
            }`}
          >
            {suffix}
          </span>
        ) : null}
      </div>
    </div>
  );
}
