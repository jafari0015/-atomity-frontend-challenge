import type {
  AnalysisMetrics,
  CloudProvider,
  CloudResource,
  CorePillar,
  FaqItem,
  OptimizationRecommendation,
  PricingTier,
  ProcessStep,
  SavingsSummary,
  Testimonial,
} from "@/types";

export const NAV_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Capabilities", href: "#pillars" },
  { label: "Customers", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

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

export const SOVEREIGN_PROVIDERS: CloudProvider[] = [
  {
    id: "ionos",
    name: "IONOS Cloud",
    shortName: "IONOS",
    accentColor: "#7c5cff",
    resourceCount: 18,
    sovereign: true,
  },
  {
    id: "hetzner",
    name: "Hetzner",
    shortName: "Hetzner",
    accentColor: "#ff6a2b",
    resourceCount: 12,
    sovereign: true,
  },
  {
    id: "ovh",
    name: "OVHcloud",
    shortName: "OVH",
    accentColor: "#4fd1e8",
    resourceCount: 9,
    sovereign: true,
  },
  {
    id: "stackit",
    name: "STACKIT",
    shortName: "STACKIT",
    accentColor: "#f5b544",
    resourceCount: 7,
    sovereign: true,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Detect optimization",
    description:
      "Every workload is continuously scored across cloud, IONOS, Hetzner, OVH and STACKIT configurations to surface where it should actually run.",
  },
  {
    index: "02",
    title: "Engine processes fix",
    description:
      "The optimization engine builds a cross-cloud migration plan, weighing cost, sovereignty, compliance and carbon together.",
  },
  {
    index: "03",
    title: "Benchmark & approve",
    description:
      "Throughput, p95 SLA, and risk are benchmarked before anything moves. Every plan ships with a confidence score.",
  },
  {
    index: "04",
    title: "Execute & notify",
    description:
      "A pull request is drafted, a Jira ticket opens, and the owning team is pinged in Slack. Engineering keeps control.",
  },
  {
    index: "05",
    title: "Measure savings",
    description:
      "Realized savings are verified against the plan, workload by workload, month after month.",
  },
];

export const CORE_PILLARS: CorePillar[] = [
  {
    id: "economics",
    label: "Economics",
    headline: "Unpredictable cloud and AI spend, brought under control",
    description:
      "AI workloads create volatile, hard-to-control infrastructure spend. Atomity eliminates waste and automates FinOps decisions.",
    points: [
      "Eliminate cloud waste from overprovisioning and idle compute",
      "GPU cost optimization for AI workloads",
      "Price variation modeling across every connected cloud",
      "Measure real ROI and automate FinOps decisions",
    ],
  },
  {
    id: "regulations",
    label: "Regulations",
    headline: "Built for EU compliance, continuously enforced",
    description:
      "Stay aligned with the AI Act and Data Act without slowing engineering down.",
    points: [
      "Continuous policy enforcement across every workload",
      "Simplified audit readiness with exportable evidence",
      "Multi-cloud governance from one control plane",
      "Adapt automatically as regulation changes",
    ],
  },
  {
    id: "sovereignty",
    label: "Sovereignty",
    headline: "Control data jurisdiction, not just data residency",
    description:
      "Sovereign by design — decide who can compel access to your data, not only where it's stored.",
    points: [
      "Avoid foreign access risk such as the US CLOUD Act",
      "No vendor lock-in across hyperscalers or sovereign clouds",
      "Strategic workload placement by jurisdiction",
      "Full infrastructure control, on your terms",
    ],
  },
  {
    id: "operations",
    label: "Operations",
    headline: "One control plane for multi-cloud complexity",
    description:
      "Unified orchestration that understands dependencies before it moves anything.",
    points: [
      "Unified control plane across every provider",
      "Automated, dependency-aware orchestration",
      "Faster incident response with full context",
      "Consistent operations across every region",
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    headline: "Make carbon a metric, not an afterthought",
    description:
      "Track and reduce the energy footprint of every workload alongside cost.",
    points: [
      "Track carbon impact per workload",
      "Optimize placement for energy efficiency",
      "Align infrastructure decisions with ESG goals",
      "Region-aware deployment for lower emissions",
    ],
  },
  {
    id: "visibility",
    label: "Visibility",
    headline: "Cost, carbon, and compliance in a single view",
    description:
      "Real-time, workload-level attribution that turns spend into a decision, not a surprise.",
    points: [
      "Unified visibility across every cloud",
      "Workload-level cost and carbon attribution",
      "Real-time optimization opportunities",
      "Data-driven decisions, not guesswork",
    ],
  },
];

export const ANALYSIS_METRICS: AnalysisMetrics = {
  resourcesScanned: 128,
  monthlyCloudCost: 18600,
  averageUtilizationPercent: 31,
  potentialSavings: 9800,
};

export const FLAGGED_RESOURCE: CloudResource = {
  provider: "gcp",
  category: "Compute",
  name: "Production inference cluster",
  instance: "a2-highgpu-4g",
  monthlyCost: 18600,
  cpuUsage: 19,
  memoryUsage: 27,
  status: "Underutilized",
};

export const RECOMMENDATION: OptimizationRecommendation = {
  currentProvider: "Google Cloud",
  currentInstance: "a2-highgpu-4g",
  currentVcpu: 48,
  currentMemoryGb: 340,
  currentCost: 18600,
  recommendedProvider: "IONOS Cloud",
  recommendedInstance: "H200-S · Continuity",
  recommendedVcpu: 32,
  recommendedMemoryGb: 256,
  recommendedCost: 8800,
  monthlySavings: 9800,
  yearlySavings: 117600,
  rationale:
    "Balanced option with low risk and a strong fit: same SLA envelope, EU-resident by default, at less than half the monthly cost.",
};

export const SAVINGS_SUMMARY: SavingsSummary = {
  monthlySavings: 9800,
  yearlySavings: 117600,
  costReductionPercent: 53,
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Atomity addresses a crucial question for Europe's digital future: how can we strengthen digital capabilities without losing control over critical infrastructure?",
    name: "Dr. Matthias Wilkes",
    title: "Landrat a.D., Bergstraße Regional Chairman MIT",
  },
  {
    quote:
      "Atomity is closing a gap by securing data autonomy across cloud services and cuts cost.",
    name: "Dieter Brockmeyer",
    title: "Founder, Diplomatic World Institute",
  },
  {
    quote:
      "Atomity is responding to a growing public-sector need: making cloud infrastructure decisions more transparent, structured and controllable.",
    name: "Thomas Wieland",
    title: "Head of Digitalization and E-Government, Metropolregion Rhein-Neckar",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Insights",
    audience: "For emerging teams",
    description:
      "Fast visibility into cloud cost, utilization, and optimization opportunities within a single hyperscaler environment.",
    features: [
      "Single-cloud support (AWS, Azure, or GCP)",
      "Dashboard-based cost visibility",
      "GPU and compute utilization insights",
      "Cost and performance recommendations",
      "Waste detection for underutilized resources",
    ],
    cta: "View pricing details",
  },
  {
    name: "Optimize",
    audience: "For scaling infrastructure",
    description:
      "Cross-cloud waste detection and remediation across hyperscalers and sovereign providers, with compliance guardrails built in.",
    features: [
      "Everything in Insights",
      "Multi-cloud support including IONOS, Hetzner, OVH, STACKIT",
      "Automated remediation workflows (PR, Jira, Slack)",
      "EU compliance and audit-readiness reporting",
      "Carbon tracking per workload",
    ],
    featured: true,
    cta: "Talk to an expert",
  },
  {
    name: "Orchestrate",
    audience: "For sovereign-scale operations",
    description:
      "Full policy-driven workload orchestration across every connected cloud, with human sign-off and auto-undo safeguards.",
    features: [
      "Everything in Optimize",
      "Autonomous cross-cloud orchestration",
      "Custom policy engine for cost, risk and sovereignty",
      "Dedicated, isolated intelligence core",
      "White-glove onboarding and SLAs",
    ],
    cta: "Talk to an expert",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What is a sovereign cloud control layer?",
    answer:
      "A decision-and-control system that helps a regulated organization choose where each workload runs, under which policy, and with what audit evidence, across sovereign and multi-cloud environments. It's vendor-neutral by design.",
  },
  {
    question: "How is data residency different from sovereignty?",
    answer:
      "Data residency is about where data is stored or processed. Sovereignty is about whose laws govern access to it. EU data residency alone does not remove foreign jurisdictional exposure such as the US CLOUD Act.",
  },
  {
    question: "Is Atomity a cloud provider?",
    answer:
      "No. Atomity is not a cloud provider, hyperscaler, or data center. It is a control layer that sits above your existing clouds.",
  },
  {
    question: "How is Atomity different from a FinOps or CSPM tool?",
    answer:
      "Most FinOps tools optimize cost and most CSPM tools optimize security posture. Atomity sits one layer up as a decision-and-control layer that brings cost, compliance, sovereignty, and carbon into a single, auditable placement decision.",
  },
  {
    question: "Which clouds does Atomity work with?",
    answer:
      "Atomity works across hyperscaler and European sovereign providers, including AWS, Azure, and Google Cloud, alongside STACKIT, Hetzner, OVH, and IONOS.",
  },
  {
    question: "Does Atomity run or host my workloads?",
    answer:
      "No. Atomity evaluates requirements, checks policy, assesses sovereignty, residency, risk and cost, and helps you decide and document where workloads should run.",
  },
];
