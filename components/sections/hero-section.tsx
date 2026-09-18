"use client";

import { motion } from "motion/react";
import CloudAnalyzer from "./cloud-analyzer";

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
        className="relative mt-8 w-full max-w-6xl"
      >
        <CloudAnalyzer />
      </motion.div>
    </section>
  );
}
