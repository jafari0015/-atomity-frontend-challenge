"use client";

import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface UtilizationBarProps {
  label: string;
  value: number;
  tone?: "warning" | "positive";
}

export function UtilizationBar({
  label,
  value,
  tone = "warning",
}: UtilizationBarProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const fillColor =
    tone === "warning" ? "bg-accent-amber" : "bg-accent-green";

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-strong">{label}</span>
        <span className="font-mono text-foreground">{value}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-surface-raised"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          className={`h-full rounded-full ${fillColor}`}
          initial={{ width: prefersReducedMotion ? `${value}%` : 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
