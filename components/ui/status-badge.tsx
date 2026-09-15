type StatusTone = "neutral" | "positive" | "warning";

interface StatusBadgeProps {
  label: string;
  tone?: StatusTone;
}

const TONE_STYLES: Record<StatusTone, string> = {
  neutral:
    "border-border-strong bg-surface-raised text-muted-strong",
  positive:
    "border-accent-green/30 bg-accent-green/10 text-accent-green",
  warning:
    "border-accent-amber/30 bg-accent-amber/10 text-accent-amber",
};

export function StatusBadge({ label, tone = "neutral" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${TONE_STYLES[tone]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          tone === "positive"
            ? "bg-accent-green"
            : tone === "warning"
              ? "bg-accent-amber"
              : "bg-muted"
        }`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
