import type { PricingTier } from "@/types";

export function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`flex flex-col gap-6 rounded-2xl border p-7 sm:p-8 ${
        tier.featured
          ? "card-glow border-primary/50 bg-gradient-to-b from-primary/[0.08] to-transparent"
          : "border-border bg-surface"
      }`}
    >
      <div className="flex flex-col gap-2">
        {tier.featured ? (
          <span className="w-fit rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary-strong">
            Most popular
          </span>
        ) : null}
        <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
        <span className="text-sm text-muted">{tier.audience}</span>
      </div>

      <p className="text-sm leading-relaxed text-muted-strong">
        {tier.description}
      </p>

      <ul className="flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-sm text-muted-strong"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mt-0.5 h-4 w-4 shrink-0 text-accent-green"
              aria-hidden="true"
            >
              <path
                d="M5 12.5l4.5 4.5L19 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          tier.featured
            ? "bg-primary text-white hover:bg-primary-strong"
            : "border border-border-strong bg-surface-raised text-foreground hover:border-primary"
        }`}
      >
        {tier.cta}
      </a>
    </div>
  );
}
