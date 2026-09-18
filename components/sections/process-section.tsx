"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import type { ProcessStep } from "@/types";

const ACCENT_VAR = {
  cyan: "var(--accent-cyan)",
  primary: "var(--primary)",
  amber: "var(--accent-amber)",
  green: "var(--accent-green)",
} as const;

function StepDetail({ step, index }: { step: ProcessStep; index: number }) {
  const accent = ACCENT_VAR[step.panel.accent];

  return (
    <motion.div
      id={`process-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`process-tab-${index}`}
      tabIndex={0}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="min-w-0 rounded-2xl border border-border bg-surface p-[2px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <div className="flex items-center justify-between gap-3 px-3.5 py-3">
        <span className="truncate text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          {step.panel.label}
        </span>
        <span className="shrink-0 text-xs text-muted">
          Step {Number(step.index)} of {PROCESS_STEPS.length}
        </span>
      </div>

      <div className="flex flex-col gap-5 rounded-[14px] bg-background p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-xl font-bold tracking-tight text-foreground">
              {step.panel.headline}
            </p>
            <p className="mt-1.5 text-xs text-muted">{step.panel.subline}</p>
          </div>
          <span
            className="shrink-0 rounded-full px-2.5 py-1 font-mono text-[11px] font-medium"
            style={{
              color: accent,
              backgroundColor: `color-mix(in srgb, ${accent} 14%, var(--surface))`,
            }}
          >
            {step.panel.badge}
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {step.panel.rows.map((row, rowIndex) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.08 + rowIndex * 0.08,
                ease: "easeOut",
              }}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-3"
            >
              <span className="shrink-0 font-mono text-xs text-muted">
                {row.code}
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
                {row.title}
              </span>
              <span
                className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium"
                style={{
                  color: accent,
                  backgroundColor: `color-mix(in srgb, ${accent} 12%, var(--surface))`,
                }}
              >
                {row.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted">{step.panel.footer}</p>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeStep = PROCESS_STEPS[activeIndex];
  const accent = ACCENT_VAR[activeStep.panel.accent];

  useEffect(() => {
    if (prefersReducedMotion || !listRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".step-row", {
        scrollTrigger: { trigger: listRef.current, start: "top 82%", once: true },
        opacity: 0,
        x: -18,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.09,
      });
    }, listRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = PROCESS_STEPS.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }

    if (next === null) return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:gap-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              How it works
            </span>
            <h2
              id="process-heading"
              className="max-w-md text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            >
              From detection to verified savings in five steps.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted lg:pb-2">
            Opsera runs the same sequence for every workload: visible to the whole
            team, enforced by gates, and reversible in one click.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            ref={listRef}
            role="tablist"
            aria-label="How Opsera works, step by step"
            aria-orientation="vertical"
            className="flex min-w-0 flex-col gap-1"
          >
            {PROCESS_STEPS.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={step.index}
                  type="button"
                  role="tab"
                  id={`process-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`process-panel-${index}`}
                  tabIndex={isActive ? 0 : -1}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className={`step-row relative cursor-pointer rounded-xl px-4 py-3.5 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                    isActive ? "bg-surface" : "hover:bg-surface/60"
                  }`}
                >
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span
                        className="font-mono text-xs transition-colors duration-300"
                        style={isActive ? { color: accent } : undefined}
                      >
                        {step.index}
                      </span>
                      <span
                        className={`truncate text-[15px] transition-colors duration-300 ${
                          isActive
                            ? "font-semibold text-foreground"
                            : "font-medium text-muted-strong"
                        }`}
                      >
                        {step.title}
                      </span>
                    </span>
                    <span className="shrink-0 text-xs text-muted">
                      {step.panel.meta}
                    </span>
                  </span>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.span
                        key="description"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="block overflow-hidden pl-8"
                      >
                        <span className="block pt-2 text-sm leading-relaxed text-muted">
                          {step.description}
                        </span>
                      </motion.span>
                    ) : null}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <StepDetail key={activeStep.index} step={activeStep} index={activeIndex} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
