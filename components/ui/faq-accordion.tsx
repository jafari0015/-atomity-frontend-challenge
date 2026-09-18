"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { FaqItem } from "@/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="border-t border-muted/30">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const number = String(index + 1).padStart(2, "0");
        const buttonId = `faq-question-${index}`;
        const panelId = `faq-answer-${index}`;

        return (
          <div key={item.question} className="border-b border-muted/30">
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="group flex w-full cursor-pointer items-start gap-4 py-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-8"
              >
                <span
                  className={`w-6 shrink-0 pt-1 font-mono text-xs transition-colors ${
                    isOpen ? "text-primary" : "text-muted"
                  }`}
                >
                  {number}
                </span>
                <span className="flex-1 pt-0.5 text-base font-medium text-foreground sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                    isOpen
                      ? "border-primary bg-primary text-white"
                      : "border-border-strong bg-surface text-muted-strong group-hover:border-primary group-hover:text-primary"
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pl-10 pr-12 text-sm leading-relaxed text-muted-strong sm:pl-14 sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
