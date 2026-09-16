export type CloudProviderId =
  | "aws"
  | "azure"
  | "gcp"
  | "ionos"
  | "hetzner"
  | "ovh"
  | "stackit";

export interface CloudProvider {
  id: CloudProviderId;
  name: string;
  shortName: string;
  accentColor: string;
  resourceCount: number;
  sovereign?: boolean;
}

export type ResourceCategory = "Compute" | "Database" | "Storage" | "Network";

export interface CloudResource {
  provider: CloudProviderId;
  category: ResourceCategory;
  name: string;
  instance: string;
  monthlyCost: number;
  cpuUsage: number;
  memoryUsage: number;
  status: "Underutilized" | "Optimized" | "At risk";
}

export interface OptimizationRecommendation {
  currentProvider: string;
  currentInstance: string;
  currentVcpu: number;
  currentMemoryGb: number;
  currentCost: number;
  recommendedProvider: string;
  recommendedInstance: string;
  recommendedVcpu: number;
  recommendedMemoryGb: number;
  recommendedCost: number;
  monthlySavings: number;
  yearlySavings: number;
  rationale: string;
}

export interface CorePillar {
  id: string;
  label: string;
  headline: string;
  description: string;
  points: string[];
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface PricingTier {
  name: string;
  audience: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SavingsSummary {
  monthlySavings: number;
  yearlySavings: number;
  costReductionPercent: number;
}

export interface AnalysisMetrics {
  resourcesScanned: number;
  monthlyCloudCost: number;
  averageUtilizationPercent: number;
  potentialSavings: number;
}

export interface CloudRegion {
  code: string;
  name: string;
  continent: string;
  flag: string;
}
