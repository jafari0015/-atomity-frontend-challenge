import { CloudProviderCard } from "@/components/ui/cloud-provider-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { CLOUD_PROVIDERS, SOVEREIGN_PROVIDERS } from "@/lib/constants";

export function CloudProvidersSection() {
  return (
    <section
      id="cloud-providers"
      aria-labelledby="providers-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <SectionHeading
          id="providers-heading"
          eyebrow="Connected accounts"
          title="Your cloud, in one view — hyperscaler or sovereign"
          description="Opsera connects to the providers you already run infrastructure on, and the European sovereign clouds you're evaluating."
        />
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Hyperscalers
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CLOUD_PROVIDERS.map((provider, index) => (
              <CloudProviderCard key={provider.id} provider={provider} index={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            European sovereign clouds
          </span>
          <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {SOVEREIGN_PROVIDERS.map((provider, index) => (
              <CloudProviderCard key={provider.id} provider={provider} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
