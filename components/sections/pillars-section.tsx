"use client";

import { motion } from "motion/react";
import {
  CircleDollarSign,
  Eye,
  Leaf,
  Scale,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CORE_PILLARS } from "@/lib/constants";

const PILLAR_ICONS: Record<string, LucideIcon> = {
  economics: CircleDollarSign,
  regulations: Scale,
  sovereignty: ShieldCheck,
  operations: Workflow,
  sustainability: Leaf,
  visibility: Eye,
};

export function PillarsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:gap-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Core capabilities
            </span>
            <h2
              id="pillars-heading"
              className="max-w-md text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            >
              Six decisions, one control layer
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted lg:pb-2">
            Cost, compliance, sovereignty, operations, sustainability and visibility —
            evaluated together, not in six different tools.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CORE_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[pillar.id] ?? CircleDollarSign;

            return (
              <motion.li
                key={pillar.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col rounded-2xl border border-border-strong bg-surface p-[2px] transition-colors duration-300 hover:border-primary/50"
              >
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {pillar.label}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-5 rounded-[14px] bg-background p-5 sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-surface text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-balance text-lg font-semibold leading-snug tracking-tight text-foreground">
                      {pillar.headline}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
                  </div>

                  <ul className="mt-auto flex flex-col gap-2 border-t border-border-strong pt-4">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm leading-snug text-muted-strong"
                      >
                        <span
                          className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
