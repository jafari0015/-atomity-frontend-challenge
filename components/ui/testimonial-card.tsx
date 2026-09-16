"use client";

import { motion } from "motion/react";
import type { Testimonial } from "@/types";

export function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col justify-between gap-6 rounded-2xl border border-border bg-surface p-7"
    >
      <svg
        viewBox="0 0 32 24"
        fill="none"
        className="h-7 w-8 text-primary/50"
        aria-hidden="true"
      >
        <path
          d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 3.6C9.6 5.2 7.2 8 7.2 12h6.4v12H0Zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4L32 3.6C27.2 5.2 24.8 8 24.8 12h6.4v12H17.6Z"
          fill="currentColor"
        />
      </svg>
      <blockquote className="text-balance text-base leading-relaxed text-muted-strong">
        {testimonial.quote}
      </blockquote>
      <figcaption className="flex flex-col gap-0.5 pt-4">
        <span className="text-sm font-medium text-foreground">
          {testimonial.name}
        </span>
        <span className="text-xs text-muted">{testimonial.title}</span>
      </figcaption>
    </motion.figure>
  );
}
