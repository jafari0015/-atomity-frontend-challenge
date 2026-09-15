"use client";

import { motion } from "motion/react";
import { StatusBadge } from "@/components/ui/status-badge";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col items-center justify-center gap-8 overflow-hidden border-b border-border px-6 py-24 text-center sm:py-32"
    >
      <div
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <StatusBadge label="Supports AWS, Azure and Google Cloud" />
      </motion.div>

      <motion.h1
        id="hero-heading"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="relative max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl"
      >
        Optimize your cloud.
        <br />
        Cut unnecessary costs.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative max-w-xl text-balance text-lg leading-relaxed text-muted"
      >
        Analyze infrastructure usage, identify waste, and discover smarter
        cloud configurations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative"
      >
        <a
          href="#analysis"
          className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Analyze Infrastructure
        </a>
      </motion.div>
    </section>
  );
}
