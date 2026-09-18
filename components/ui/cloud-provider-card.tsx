"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ProviderIcon } from "@/components/ui/provider-icon";
import type { CloudProvider } from "@/types";

interface CloudProviderCardProps {
  provider: CloudProvider;
  index: number;
}

export function CloudProviderCard({ provider, index }: CloudProviderCardProps) {
  const accent = provider.accentColor;

  return (
    <motion.a
      href="#analysis"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span
        className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45"
        style={{ backgroundColor: accent }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between gap-3">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
          style={{
            color: accent,
            backgroundColor: `color-mix(in srgb, ${accent} 14%, var(--surface))`,
          }}
        >
          <ProviderIcon provider={provider.id} className="h-4 w-4" />
        </span>
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>

      <h3 className="relative mt-4 text-[15px] font-semibold text-foreground">
        {provider.shortName}
      </h3>
      <p className="relative mt-1.5 text-[13px] leading-relaxed text-muted">
        {provider.description}
      </p>

      <div className="relative mt-5 flex items-center justify-between gap-3 pt-1">
        <span className="rounded-full border border-border-strong px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors duration-300 group-hover:border-primary group-hover:text-primary">
          Learn more
        </span>
        <span className="shrink-0 font-mono text-xs text-muted">
          {provider.resourceCount} resources
        </span>
      </div>
    </motion.a>
  );
}
