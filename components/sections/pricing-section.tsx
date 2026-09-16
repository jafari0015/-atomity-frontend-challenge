import { SectionHeading } from "@/components/ui/section-heading";
import { PricingCard } from "@/components/ui/pricing-card";
import { PRICING_TIERS } from "@/lib/constants";

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          id="pricing-heading"
          eyebrow="Pricing"
          title="From visibility to fully sovereign orchestration"
          description="Start with a single cloud, or roll out policy-driven orchestration across your entire multi-cloud footprint."
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
