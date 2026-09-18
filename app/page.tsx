import { HeroSection } from "@/components/sections/hero-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CloudProvidersSection } from "@/components/sections/cloud-providers-section";
import { AnalyzerSection } from "@/components/sections/analyzer-section";
import { PillarsSection } from "@/components/sections/pillars-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <main id="main" className="flex flex-1 flex-col">
      <HeroSection />
      <TrustedBySection />
      <ProcessSection />
      <CloudProvidersSection />
      <AnalyzerSection />
      <PillarsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}
