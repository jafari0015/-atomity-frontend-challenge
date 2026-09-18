"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Users } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { PRICING_TIERS, YEARLY_DISCOUNT } from "@/lib/constants";
import type { PricingTier } from "@/types";

type Billing = "yearly" | "monthly";

const [STARTER, ...PLANS] = PRICING_TIERS;

function formatEuro(amount: number) {
  return `€${amount.toLocaleString("en-US")}`;
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2 text-sm leading-snug text-muted-strong">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} aria-hidden="true" />
          {feature}
        </li>
      ))}
    </ul>
  );
}

function PlanColumn({ tier, billing }: { tier: PricingTier; billing: Billing }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isYearly = billing === "yearly";
  const price = isYearly ? Math.round(tier.monthlyPrice * (1 - YEARLY_DISCOUNT)) : tier.monthlyPrice;

  return (
    <div className="flex flex-col gap-4">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        {tier.name}
      </span>

      <div className="flex flex-col gap-0.5">
        <span
          className={`font-mono text-xs text-muted line-through transition-opacity ${
            isYearly ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!isYearly}
        >
          {formatEuro(tier.monthlyPrice)}
        </span>
        <p className="flex items-baseline gap-1.5">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={price}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-4xl font-semibold tabular-nums tracking-tight text-foreground"
            >
              {formatEuro(price)}
            </motion.span>
          </AnimatePresence>
          <span className="text-sm text-muted">/month</span>
        </p>
        <span className="text-xs text-muted">
          {isYearly ? "Billed yearly" : "Billed monthly"}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-strong">{tier.description}</p>

      <a
        href="#"
        className={`w-fit rounded-full px-6 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
          tier.featured
            ? "bg-primary text-white hover:bg-primary-strong"
            : "border border-border-strong bg-surface text-foreground hover:border-primary"
        }`}
      >
        {tier.cta}
      </a>

      <div className="border-t border-border-strong pt-4">
        <FeatureList features={tier.features} />
      </div>
    </div>
  );
}

function BillingToggle({ billing, onChange }: { billing: Billing; onChange: (value: Billing) => void }) {
  return (
    <div
      role="group"
      aria-label="Billing period"
      className="flex shrink-0 rounded-full border border-border-strong bg-background p-1"
    >
      {(["yearly", "monthly"] as const).map((option) => {
        const isActive = billing === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={`relative cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              isActive ? "text-white" : "text-muted hover:text-foreground"
            }`}
          >
            {isActive ? (
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
              />
            ) : null}
            <span className="relative">{option}</span>
          </button>
        );
      })}
    </div>
  );
}

export function PricingSection() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
          >
            Choose the plan that&rsquo;s right for you
          </h2>
          <span className="rounded-full border border-border-strong bg-surface px-4 py-1.5 text-sm text-muted-strong">
            Save {Math.round(YEARLY_DISCOUNT * 100)}% with yearly billing
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <article className="flex flex-col gap-6 rounded-2xl border border-border-strong bg-surface p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground">
                {STARTER.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-strong">{STARTER.description}</p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                {STARTER.audience}
              </span>
              <span className="text-4xl font-semibold tabular-nums tracking-tight text-foreground">
                {formatEuro(STARTER.monthlyPrice)}
              </span>
              <span className="text-xs text-muted">Free forever on one cloud</span>
            </div>

            <FeatureList features={STARTER.features} />

            <a
              href="#"
              className="mt-auto rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {STARTER.cta}
            </a>
          </article>

          <article className="flex flex-col gap-6 rounded-2xl border border-border-strong bg-surface p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-primary px-4 py-1.5 text-xl font-semibold tracking-tight text-white">
                Multi-cloud
              </span>
              <BillingToggle billing={billing} onChange={setBilling} />
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-muted-strong">
              For teams running across hyperscalers and sovereign clouds. Remediate waste,
              enforce policy and orchestrate every workload from one control layer.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              {PLANS.map((tier) => (
                <PlanColumn key={tier.name} tier={tier} billing={billing} />
              ))}
            </div>
          </article>
        </div>

        <aside className="flex flex-col gap-5 rounded-2xl border border-border-strong bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-background text-primary">
              <Users className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Public sector or enterprise?
              </h3>
              <p className="text-sm text-muted">
                Custom sovereignty policies, dedicated deployment and volume pricing.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="w-fit shrink-0 rounded-full border border-border-strong bg-surface px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Contact us
          </a>
        </aside>
      </div>
    </section>
  );
}
