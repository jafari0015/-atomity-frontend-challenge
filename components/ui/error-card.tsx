interface ErrorCardProps {
  message: string;
  onRetry: () => void;
}

export function ErrorCard({ message, onRetry }: ErrorCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent-amber/30 bg-accent-amber/[0.06] p-8 text-center">
      <p className="text-sm text-muted-strong">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-full border border-border-strong bg-surface-raised px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-border-strong focus-visible:outline-2 focus-visible:outline-primary"
      >
        Try again
      </button>
    </div>
  );
}
