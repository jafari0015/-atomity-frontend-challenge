"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <header className="pointer-events-none sticky top-0 z-50 bg-transparent px-4 pt-4">
      <div className="nav-glass pointer-events-auto mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] md:rounded-full">
        <div className="flex h-14 items-center justify-between px-4 sm:h-18 sm:px-6">
          <a
            href="#top"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            <Image
              src="/logo.svg"
              alt="Opsera"
              width={341}
              height={77}
              priority
              className="h-7 w-auto sm:h-10"
            />
          </a>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 -mr-4 md:flex">
            <a
              href="#analysis"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Launch Console
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong text-foreground md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              {open ? (
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.nav
              key="mobile-menu"
              aria-label="Mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="md:hidden"
            >
              <div className="flex flex-col border-t border-border-strong px-4 pb-4 pt-2 sm:px-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface-raised hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#analysis"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-strong"
                >
                  Launch Console
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
