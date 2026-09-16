export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[140px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
        <h2 className="text-balance text-3xl font-semibold uppercase tracking-tight sm:text-5xl">
          <span className="text-gradient">Make sovereign cloud decisions</span>
          <br />
          <span className="text-foreground">with confidence</span>
        </h2>
        <p className="max-w-lg text-balance text-base leading-relaxed text-muted">
          Turn sovereignty requirements into enforceable cloud decisions, with
          continuous visibility and evidence across every provider.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#analysis"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get Started
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-surface-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
}
