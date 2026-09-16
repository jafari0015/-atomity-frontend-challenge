"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { CorePillar } from "@/types";

export function PillarTabs({ pillars }: { pillars: CorePillar[] }) {
  const [activeId, setActiveId] = useState(pillars[0].id);
  const active = pillars.find((p) => p.id === activeId) ?? pillars[0];

  return (
    <div className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Core capabilities"
        className="flex flex-wrap gap-2"
      >
        {pillars.map((pillar) => (
          <button
            key={pillar.id}
            role="tab"
            aria-selected={pillar.id === activeId}
            onClick={() => setActiveId(pillar.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              pillar.id === activeId
                ? "border-primary bg-primary/15 text-foreground"
                : "border-border-strong bg-surface text-muted hover:text-foreground"
            }`}
          >
            {pillar.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="card-glow grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {active.headline}
            </h3>
            <p className="max-w-md text-base leading-relaxed text-muted">
              {active.description}
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {active.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface-raised px-4 py-3 text-sm text-muted-strong"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-green"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5l4.5 4.5L19 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
