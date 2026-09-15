import { CloudProviderCard } from "@/components/ui/cloud-provider-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CLOUD_PROVIDERS } from "@/lib/constants";

export function CloudProvidersSection() {
  return (
    <section
      aria-labelledby="providers-heading"
      className="border-b border-border px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <SectionHeading
          id="providers-heading"
          eyebrow="Connected accounts"
          title="Your cloud, in one view"
          description="Atomity connects to the providers you already run infrastructure on and continuously analyzes every resource."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CLOUD_PROVIDERS.map((provider, index) => (
            <CloudProviderCard key={provider.id} provider={provider} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
