"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RegionCard, RegionCardSkeleton } from "@/components/ui/region-card";
import { ErrorCard } from "@/components/ui/error-card";
import { useInfrastructureData } from "@/hooks/use-infrastructure-data";

export function RegionsSection() {
  const { data, isLoading, isError, refetch, isFetching } =
    useInfrastructureData();

  return (
    <section
      aria-labelledby="regions-heading"
      className="border-b border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="regions-heading"
            align="left"
            eyebrow="Live environment metadata"
            title="Active cloud regions"
            description="Live data pulled from a public REST API, reshaped to represent the regions in this environment."
          />
          {!isLoading && !isError ? (
            <button
              type="button"
              onClick={() => refetch()}
              disabled={isFetching}
              className="inline-flex items-center gap-2 self-start rounded-full border border-border-strong bg-surface-raised px-4 py-2 text-xs font-medium text-muted-strong transition-colors hover:bg-border-strong disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-primary sm:self-auto"
            >
              {isFetching ? "Refreshing..." : "Refresh"}
            </button>
          ) : null}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <RegionCardSkeleton key={index} />
            ))}
          </div>
        ) : isError ? (
          <ErrorCard
            message="Unable to load environment data."
            onRetry={() => refetch()}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {data?.map((region) => (
              <RegionCard key={region.code} region={region} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
