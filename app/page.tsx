import { HeroSection } from "@/components/sections/hero-section";
import { CloudProvidersSection } from "@/components/sections/cloud-providers-section";
import { ConnectionFlowSection } from "@/components/sections/connection-flow-section";
import { AnalyzerSection } from "@/components/sections/analyzer-section";
import { ResourceAnalysisSection } from "@/components/sections/resource-analysis-section";
import { RecommendationSection } from "@/components/sections/recommendation-section";
import { SavingsSection } from "@/components/sections/savings-section";
import { RegionsSection } from "@/components/sections/regions-section";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <CloudProvidersSection />
      <ConnectionFlowSection />
      <AnalyzerSection />
      <ResourceAnalysisSection />
      <RecommendationSection />
      <SavingsSection />
      <RegionsSection />
      <footer className="px-6 py-10 text-center text-xs text-muted">
        Atomity is a frontend product simulation. All infrastructure, cost,
        and usage data shown is demonstration data.
      </footer>
    </main>
  );
}
