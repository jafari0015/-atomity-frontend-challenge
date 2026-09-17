"use client";

import { motion } from "motion/react";
import { StatusBadge } from "@/components/ui/status-badge";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col items-center justify-center gap-8 overflow-hidden px-6 pb-20 pt-20 text-center sm:pb-28 sm:pt-28"
    >

      <motion.h1
        id="hero-heading"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="relative max-w-4xl text-balance text-4xl font-semibold uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
      >
        <span className="text-gradient">COMPARE CLOUDS.</span>
        <br />
        <span className="text-primary">CUT COSTS.</span> <br />
        <span className="text-foreground"> STAY IN CONTROL.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative max-w-xl text-balance text-lg leading-relaxed text-muted"
      >
        Opsera helps teams decide where every workload should run, prove
        why, and keep it optimized across clouds.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        className="relative mt-8 w-full max-w-4xl"
      >
        <div className="card-glow overflow-hidden rounded-2xl border border-border-strong bg-surface/90 backdrop-blur">
          <div className="flex items-center gap-2 px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-orange/60" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/60" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent-green/60" aria-hidden="true" />
            <span className="ml-3 font-mono text-xs text-muted">
              Opsera.io/control-plane
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 p-5 text-left sm:grid-cols-3 sm:p-8">
            <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface-raised p-4">
              <span className="text-xs uppercase tracking-wide text-muted">
                Realized monthly saving
              </span>
              <span className="font-mono text-2xl font-semibold text-accent-green">
                €9.5k/mo
              </span>
              <span className="text-xs text-muted">vs. €9.8k planned</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface-raised p-4">
              <span className="text-xs uppercase tracking-wide text-muted">
                Carbon avoided
              </span>
              <span className="font-mono text-2xl font-semibold text-foreground">
                1.8 tCO₂e/mo
              </span>
              <span className="text-xs text-muted">verified vs. GCP baseline</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl border border-border bg-surface-raised p-4">
              <span className="text-xs uppercase tracking-wide text-muted">
                Data residency
              </span>
              <span className="font-mono text-2xl font-semibold text-foreground">
                100% EU
              </span>
              <span className="text-xs text-muted">all workloads in-region</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
