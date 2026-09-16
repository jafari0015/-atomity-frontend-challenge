"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

const SCROLL_THRESHOLD = 20;

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none sticky top-0 z-50 bg-transparent px-4 pt-4">
      <div
        className={`pointer-events-auto mx-auto w-full max-w-6xl rounded-2xl transition-[background-color,backdrop-filter] duration-300 ${
          scrolled ? "nav-glass" : "bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <a
            href="#top"
            className="text-base font-semibold tracking-tight text-foreground"
          >
            Opsora
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#pricing"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Talk to an expert
            </a>
            <a
              href="#analysis"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Try Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden ${
              scrolled ? "border border-border-strong" : "border border-transparent"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
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

        {open ? (
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 px-4 py-4 sm:px-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm text-muted transition-colors hover:bg-surface/60 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#analysis"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white"
            >
              Try Now
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
