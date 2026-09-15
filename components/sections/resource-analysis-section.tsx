import { SectionHeading } from "@/components/ui/section-heading";
import { ResourceCard } from "@/components/ui/resource-card";
import { FLAGGED_RESOURCE } from "@/lib/constants";

export function ResourceAnalysisSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="border-b border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <SectionHeading
          id="problem-heading"
          eyebrow="Waste detected"
          title="This resource is too expensive for how little it's used"
          description="One EC2 compute instance is running well below capacity, month after month, at full price."
        />
        <ResourceCard resource={FLAGGED_RESOURCE} />
      </div>
    </section>
  );
}
