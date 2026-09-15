"use client";

import { motion } from "motion/react";
import { ProviderIcon } from "@/components/ui/provider-icon";
import type { CloudProvider } from "@/types";

interface CloudProviderCardProps {
  provider: CloudProvider;
  index: number;
}

export function CloudProviderCard({ provider, index }: CloudProviderCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong"
        style={{ color: provider.accentColor }}
      >
        <ProviderIcon provider={provider.id} className="h-5 w-5" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-medium text-foreground">{provider.shortName}</h3>
        <p className="text-sm text-muted">{provider.name}</p>
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs text-muted">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: provider.accentColor }}
          aria-hidden="true"
        />
        {provider.resourceCount} resources connected
      </div>
    </motion.div>
  );
}
