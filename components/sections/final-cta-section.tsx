"use client";

import MoltenMetal from "@/components/sections/background-action-call";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function FinalCtaSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section aria-labelledby="final-cta-heading" className="px-6 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-border-strong bg-surface">
        <div className="absolute inset-0" aria-hidden="true">
          <MoltenMetal
            lightMode
            backgroundColor="#ffffff"
            color1="#2f8fa3"
            color2="#006d77"
            color3="#00525a"
            speed={prefersReducedMotion ? 0 : 0.35}
            scale={4}
            detail={3}
            glow={1.6}
            coreSize={0.1}
            swirl={1}
            fold={-0.2}
            blackPoint={0.05}
            brightness={1.3}
            grain
            grainIntensity={0.05}
            mouseInteraction={!prefersReducedMotion}
            mouseStrength={0.3}
            opacity={0.55}
          />
        </div>

        {/* Soft white wash behind the copy keeps the text readable over the effect. */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_70%_at_50%_50%,rgba(255,255,255,0.92),rgba(255,255,255,0.55)_60%,transparent)]"
          aria-hidden="true"
        />

        <div className="pointer-events-none relative mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-14 text-center sm:px-12">
          <h2
            id="final-cta-heading"
            className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-[44px]"
          >
            Take control of every{" "}
            <span className="font-serif font-normal italic text-primary">cloud</span>.
          </h2>

          <p className="max-w-md text-balance text-sm leading-relaxed text-muted-strong sm:text-base">
            Cost, compliance and sovereignty in one control layer. Start free on one
            cloud, then scale to every provider.
          </p>

          <div className="pointer-events-auto mt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get started
            </a>
            <a
              href="#faq"
              className="group inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
