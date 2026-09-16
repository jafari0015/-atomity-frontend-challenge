import { SectionHeading } from "@/components/ui/section-heading";
import { PillarTabs } from "@/components/ui/pillar-tabs";
import { CORE_PILLARS } from "@/lib/constants";

export function PillarsSection() {
  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          id="pillars-heading"
          eyebrow="Core capabilities"
          title="Six decisions, one control layer"
          description="Cost, compliance, sovereignty, operations, sustainability and visibility — evaluated together, not in six different tools."
        />
        <PillarTabs pillars={CORE_PILLARS} />
      </div>
    </section>
  );
}
