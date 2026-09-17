"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProviderIcon } from "@/components/ui/provider-icon";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CLOUD_PROVIDERS } from "@/lib/constants";

const SOURCE_Y = [48, 120, 192];
const MERGE_X = 340;
const MERGE_Y = 120;
const ENGINE_X = 560;

export function ConnectionFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      aria-labelledby="connection-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          id="connection-heading"
          eyebrow="Data flow"
          title="Ingest, understand, decide, act — continuously"
          description="Billing, usage, and activity signals stream from every connected cloud into an isolated, per-customer intelligence core."
        />

        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface p-4 sm:p-8"
        >
          <svg
            viewBox="0 0 680 240"
            className="h-auto w-full"
            role="img"
            aria-label="Diagram showing AWS, Azure and Google Cloud connecting into the Opsera optimization engine"
          >
            {SOURCE_Y.map((y, index) => {
              const d = `M 96 ${y} C ${MERGE_X - 80} ${y}, ${MERGE_X - 80} ${MERGE_Y}, ${MERGE_X} ${MERGE_Y}`;
              return (
                <motion.path
                  key={y}
                  d={d}
                  fill="none"
                  stroke="var(--border-strong)"
                  strokeWidth={1.5}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { pathLength: 1, opacity: 1 }
                      : { pathLength: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 }
                  }
                  transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                />
              );
            })}

            <motion.path
              d={`M ${MERGE_X} ${MERGE_Y} L ${ENGINE_X} ${MERGE_Y}`}
              fill="none"
              stroke="var(--primary)"
              strokeWidth={2}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={
                isInView
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 }
              }
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            />

            {SOURCE_Y.map((y, index) => (
              <motion.circle
                key={`dot-${y}`}
                r={3}
                fill="var(--accent-cyan)"
                initial={{ opacity: 0 }}
                animate={
                  isInView && !prefersReducedMotion
                    ? {
                        cx: [96, MERGE_X - 80, MERGE_X],
                        cy: [y, y, MERGE_Y],
                        opacity: [0, 1, 0],
                      }
                    : { opacity: 0 }
                }
                transition={{
                  duration: 2,
                  delay: 1 + index * 0.4,
                  repeat: isInView && !prefersReducedMotion ? Infinity : 0,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {SOURCE_Y.map((y, index) => (
              <foreignObject key={`icon-${y}`} x={0} y={y - 20} width={96} height={40}>
                <div className="flex h-10 w-24 items-center gap-2 rounded-lg border border-border-strong bg-surface-raised px-2 text-xs font-medium text-muted-strong">
                  <ProviderIcon
                    provider={CLOUD_PROVIDERS[index].id}
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: CLOUD_PROVIDERS[index].accentColor }}
                  />
                  {CLOUD_PROVIDERS[index].shortName}
                </div>
              </foreignObject>
            ))}

            <foreignObject x={ENGINE_X} y={MERGE_Y - 28} width={120} height={56}>
              <div className="flex h-14 w-[110px] flex-col items-center justify-center gap-0.5 rounded-xl border border-primary/40 bg-primary/10 px-2 text-center">
                <span className="text-[11px] font-medium leading-tight text-foreground">
                  Optimization
                </span>
                <span className="text-[11px] font-medium leading-tight text-foreground">
                  Engine
                </span>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
}
