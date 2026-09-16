"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <SectionHeading
          id="process-heading"
          eyebrow="How it works"
          title="From detection to verified savings, in five steps"
          description="Atomity runs the same continuous loop for every workload — no manual spreadsheets, no guesswork."
        />

        <div className="relative flex flex-col gap-6">
          <div
            className="pointer-events-none absolute left-[27px] top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-primary/60 via-border-strong to-transparent sm:block"
            aria-hidden="true"
          />
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="relative flex gap-5 rounded-2xl border border-border bg-surface p-6 sm:pl-8"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary-strong">
                {step.index}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
