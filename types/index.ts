export type CloudProviderId = "aws" | "azure" | "gcp";

export interface CloudProvider {
  id: CloudProviderId;
  name: string;
  shortName: string;
  accentColor: string;
  resourceCount: number;
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
  currentInstance: string;
  currentVcpu: number;
  currentMemoryGb: number;
  currentCost: number;
  recommendedInstance: string;
  recommendedVcpu: number;
  recommendedMemoryGb: number;
  recommendedCost: number;
  monthlySavings: number;
  yearlySavings: number;
  rationale: string;
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
