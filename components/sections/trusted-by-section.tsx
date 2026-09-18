"use client";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const LOGOS = [
  { name: "Alugha", src: "/alugha-new.svg", width: 112, height: 32 },
  {
    name: "Diplomatic World",
    src: "/diplomatic-world.svg",
    width: 148,
    height: 32,
  },
  { name: "Seceon", src: "/seceon-new.avif", width: 112, height: 32 },
  {
    name: "Metropolregion Rhein-Neckar",
    src: "/metropolregion-rhein-neckar-new.svg",
    width: 168,
    height: 32,
  },
  {
    name: "Wirtschaftsregion Bergstraße",
    src: "/wirtschaftsregion-bergstrasse-new.avif",
    width: 176,
    height: 32,
  },
] as const;

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <>
      {LOGOS.map((logo) => (
        <div
          key={`${logo.name}-${ariaHidden ? "clone" : "original"}`}
          className="flex shrink-0 items-center px-5 sm:px-8"
          aria-hidden={ariaHidden || undefined}
        >
          <span
            role={ariaHidden ? undefined : "img"}
            aria-label={ariaHidden ? undefined : logo.name}
            className="block h-7 max-w-[140px] shrink-0 bg-primary sm:h-11 sm:max-w-[220px] opacity-70 transition-opacity duration-300 hover:opacity-100"
            style={{
              aspectRatio: `${logo.width} / ${logo.height}`,
              WebkitMaskImage: `url(${logo.src})`,
              maskImage: `url(${logo.src})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
      ))}
    </>
  );
}

export function TrustedBySection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section aria-labelledby="trusted-by-heading" className="py-10 sm:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:gap-10">
        <p
          id="trusted-by-heading"
          className="max-w-2xl text-balance text-center text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm"
        >
          Trusted by the most ambitious teams
        </p>

        <div className="relative w-full overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
            aria-hidden="true"
          />

          {reducedMotion ? (
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
              <LogoRow />
            </div>
          ) : (
            <div className="trusted-marquee flex w-max items-center">
              <LogoRow />
              <LogoRow ariaHidden />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
