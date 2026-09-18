"use client";

import { motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Testimonial } from "@/types";

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.figure
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col rounded-2xl border border-border-strong bg-surface p-[2px]"
    >
      <div className="flex h-14 items-center justify-between gap-3 px-4">
        {/* The logo files are single-color, so they're used as a mask and filled with the brand color. */}
        <span
          role="img"
          aria-label={testimonial.organization}
          className="block h-8 w-40 max-w-[70%] bg-primary"
          style={{
            WebkitMaskImage: `url(${testimonial.logo})`,
            maskImage: `url(${testimonial.logo})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "left center",
            maskPosition: "left center",
          }}
        />
        <span className="font-mono text-xs text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 rounded-[14px] bg-background p-5 sm:p-6">
        <svg
          viewBox="0 0 32 24"
          fill="none"
          className="h-5 w-6 text-primary"
          aria-hidden="true"
        >
          <path
            d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.6C9.6 5.2 7.2 8 7.2 12h6.4v12H0Zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4L32 3.6C27.2 5.2 24.8 8 24.8 12h6.4v12H17.6Z"
            fill="currentColor"
          />
        </svg>

        <blockquote className="text-pretty text-base leading-relaxed text-foreground sm:text-[17px]">
          {testimonial.quote}
        </blockquote>

        <figcaption className="mt-auto flex items-center gap-3 border-t border-border-strong pt-4">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-strong bg-surface font-mono text-xs font-semibold text-primary"
            aria-hidden="true"
          >
            {initials(testimonial.name)}
          </span>
          <span className="flex min-w-0 flex-col gap-0.5">
            <span className="text-sm font-semibold text-foreground">{testimonial.name}</span>
            <span className="text-xs leading-snug text-muted">{testimonial.title}</span>
          </span>
        </figcaption>
      </div>
    </motion.figure>
  );
}
