"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RECOMMENDATION } from "@/lib/constants";

export function RecommendationSection() {
  return (
    <section
      aria-labelledby="recommendation-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        <SectionHeading
          id="recommendation-heading"
          eyebrow="Recommendation"
          title="A cross-cloud migration plan for this workload"
          description={RECOMMENDATION.rationale}
        />

        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-7"
          >
            <span className="text-xs uppercase tracking-wide text-muted">
              Current · {RECOMMENDATION.currentProvider}
            </span>
            <span className="font-mono text-lg font-medium text-foreground">
              {RECOMMENDATION.currentInstance}
            </span>
            <dl className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">vCPU</dt>
                <dd className="text-muted-strong">{RECOMMENDATION.currentVcpu}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Memory</dt>
                <dd className="text-muted-strong">{RECOMMENDATION.currentMemoryGb} GB RAM</dd>
              </div>
              <div className="flex justify-between pt-2">
                <dt className="text-muted">Monthly cost</dt>
                <dd className="font-mono font-medium text-foreground">
                  ${RECOMMENDATION.currentCost}/month
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center justify-center text-muted"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6 rotate-90 sm:rotate-0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 12h15M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-4 rounded-2xl border border-accent-green/30 bg-accent-green/[0.05] p-7"
          >
            <span className="text-xs uppercase tracking-wide text-accent-green">
              Recommended · {RECOMMENDATION.recommendedProvider}
            </span>
            <span className="font-mono text-lg font-medium text-foreground">
              {RECOMMENDATION.recommendedInstance}
            </span>
            <dl className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">vCPU</dt>
                <dd className="text-muted-strong">{RECOMMENDATION.recommendedVcpu}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Memory</dt>
                <dd className="text-muted-strong">
                  {RECOMMENDATION.recommendedMemoryGb} GB RAM
                </dd>
              </div>
              <div className="flex justify-between pt-2">
                <dt className="text-muted">Monthly cost</dt>
                <dd className="font-mono font-medium text-accent-green">
                  ${RECOMMENDATION.recommendedCost}/month
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>

        <p className="text-center text-xs text-muted">
          This is demonstration data, not a real infrastructure recommendation.
        </p>
      </div>
    </section>
  );
}
