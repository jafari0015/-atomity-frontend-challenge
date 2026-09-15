"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { MetricCard } from "@/components/ui/metric-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ANALYSIS_METRICS } from "@/lib/constants";

const ANALYSIS_PROGRESS = 72;

export function AnalyzerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="analysis"
      aria-labelledby="analysis-heading"
      className="border-b border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          id="analysis-heading"
          eyebrow="Analysis"
          title="Checking cost, performance, and usage"
          description="Atomity cross-references what you're paying, how powerful your resources are, and how much of that power you actually use."
        />

        <div ref={containerRef} className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-strong">Analyzing infrastructure...</span>
              <span className="font-mono text-foreground">{ANALYSIS_PROGRESS}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-raised">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: prefersReducedMotion ? `${ANALYSIS_PROGRESS}%` : 0 }}
                animate={{ width: isInView ? `${ANALYSIS_PROGRESS}%` : 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 1.6, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="Resources scanned"
              value={ANALYSIS_METRICS.resourcesScanned}
            />
            <MetricCard
              label="Monthly cloud cost"
              value={ANALYSIS_METRICS.monthlyCloudCost}
              prefix="$"
            />
            <MetricCard
              label="Average utilization"
              value={ANALYSIS_METRICS.averageUtilizationPercent}
              suffix="%"
            />
            <MetricCard
              label="Potential savings"
              value={ANALYSIS_METRICS.potentialSavings}
              prefix="$"
              suffix="/mo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
