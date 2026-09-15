"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SavingsCard } from "@/components/ui/savings-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { SAVINGS_SUMMARY } from "@/lib/constants";

export function SavingsSection() {
  return (
    <section
      aria-labelledby="savings-heading"
      className="relative overflow-hidden border-b border-border px-6 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12">
        <SectionHeading
          id="savings-heading"
          eyebrow="Result"
          title="Money you're paying for capacity you don't need"
          description="Current cost minus recommended cost — the difference goes straight back to your budget."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4 }}
        >
          <StatusBadge label="Optimization opportunity identified" tone="positive" />
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          <SavingsCard
            label="Estimated monthly savings"
            value={SAVINGS_SUMMARY.monthlySavings}
            suffix="/month"
            emphasis
          />
          <SavingsCard
            label="Estimated annual savings"
            value={SAVINGS_SUMMARY.yearlySavings}
            suffix="/year"
          />
          <SavingsCard
            label="Cost reduction"
            value={SAVINGS_SUMMARY.costReductionPercent}
            prefix=""
            suffix="%"
          />
        </div>
      </div>
    </section>
  );
}
