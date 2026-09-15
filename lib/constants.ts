import type {
  AnalysisMetrics,
  CloudProvider,
  CloudResource,
  OptimizationRecommendation,
  SavingsSummary,
} from "@/types";

export const CLOUD_PROVIDERS: CloudProvider[] = [
  {
    id: "aws",
    name: "Amazon Web Services",
    shortName: "AWS",
    accentColor: "#f59e0b",
    resourceCount: 54,
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    shortName: "Azure",
    accentColor: "#38bdf8",
    resourceCount: 41,
  },
  {
    id: "gcp",
    name: "Google Cloud",
    shortName: "Google Cloud",
    accentColor: "#34d399",
    resourceCount: 33,
  },
];

export const ANALYSIS_METRICS: AnalysisMetrics = {
  resourcesScanned: 128,
  monthlyCloudCost: 8420,
  averageUtilizationPercent: 31,
  potentialSavings: 2360,
};

export const FLAGGED_RESOURCE: CloudResource = {
  provider: "aws",
  category: "Compute",
  name: "Production API",
  instance: "m6i.2xlarge",
  monthlyCost: 860,
  cpuUsage: 14,
  memoryUsage: 22,
  status: "Underutilized",
};

export const RECOMMENDATION: OptimizationRecommendation = {
  currentInstance: "m6i.2xlarge",
  currentVcpu: 8,
  currentMemoryGb: 32,
  currentCost: 860,
  recommendedInstance: "m6i.large",
  recommendedVcpu: 2,
  recommendedMemoryGb: 8,
  recommendedCost: 420,
  monthlySavings: 440,
  yearlySavings: 5280,
  rationale:
    "Based on observed usage, this workload can run on a smaller instance without impacting expected performance.",
};

export const SAVINGS_SUMMARY: SavingsSummary = {
  monthlySavings: 440,
  yearlySavings: 5280,
  costReductionPercent: 51,
};
