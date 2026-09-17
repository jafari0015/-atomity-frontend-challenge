"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Image from 'next/image'
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
        className={`pointer-events-auto mx-auto w-full max-w-6xl rounded-full transition-[background-color,backdrop-filter] duration-300 ${scrolled ? "nav-glass" : "bg-transparent backdrop-blur-none"
          }`}
      >
        <div className="flex h-18 items-center justify-between px-4 sm:px-6">
          <a
            href="#top"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            <Image
              src={"/logo.svg"}
              alt="Opsera"
              width={200}
              height={200}
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
                className=" relative text-sm font-semibold text-muted transition-colors duration-200 hover:text-foreground after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
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
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden ${scrolled ? "border border-border-strong" : "border border-transparent"
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
              className=" relative text-sm font-semibold text-muted transition-colors duration-200 hover:text-foreground after:absolute after:left-0 after:-bottom-2 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              {link.label}
            </a>
            ))}
            <a
              href="#analysis"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white"
            >
              Launch Console
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
