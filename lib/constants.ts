import type {
  CloudProvider,
  CorePillar,
  FaqItem,
  PricingTier,
  ProcessStep,
  Testimonial,
} from "@/types";

export const NAV_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Cloud providers", href: "#cloud-providers" },
  { label: "Optimization", href: "#analysis" },
  { label: "Platform", href: "#pillars" },
];

export const CLOUD_PROVIDERS: CloudProvider[] = [
  {
    id: "aws",
    name: "Amazon Web Services",
    shortName: "AWS",
    description:
      "Compute, storage and managed data services scored across every region you run in.",
    accentColor: "#f59e0b",
    resourceCount: 54,
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    shortName: "Azure",
    description:
      "Subscriptions, resource groups and reserved instances reviewed in one place.",
    accentColor: "#38bdf8",
    resourceCount: 41,
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    shortName: "Google Cloud",
    description:
      "Projects, committed-use discounts and analytics spend tracked continuously.",
    accentColor: "#34d399",
    resourceCount: 33,
  },
];

export const SOVEREIGN_PROVIDERS: CloudProvider[] = [
  {
    id: "ionos",
    name: "IONOS Cloud",
    shortName: "IONOS",
    description:
      "German-operated cloud with full data residency and processing inside the EU.",
    accentColor: "#7c5cff",
    resourceCount: 18,
    sovereign: true,
  },
  {
    id: "hetzner",
    name: "Hetzner Cloud",
    shortName: "Hetzner",
    description:
      "Cost-efficient European compute for steady-state and batch workloads.",
    accentColor: "#ff6a2b",
    resourceCount: 12,
    sovereign: true,
  },
  {
    id: "ovh",
    name: "OVHcloud",
    shortName: "OVH",
    description:
      "Sovereign French infrastructure with predictable, flat-rate pricing.",
    accentColor: "#4fd1e8",
    resourceCount: 9,
    sovereign: true,
  },
  {
    id: "stackit",
    name: "STACKIT Cloud",
    shortName: "STACKIT",
    description:
      "Sovereign German platform built for regulated, data-sensitive workloads.",
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
    panel: {
      accent: "cyan",
      meta: "~30 s",
      label: "Detection report",
      headline: "scan-4821",
      subline: "128 resources · 7 providers · 30-day window",
      badge: "live",
      rows: [
        { code: "128", title: "Resources monitored", tag: "Live" },
        { code: "31%", title: "Sustained utilization", tag: "Below target" },
        { code: "$9,800", title: "Monthly waste surfaced", tag: "Recoverable" },
      ],
      footer: "+ 37 workloads flagged with a reason",
    },
  },
  {
    index: "02",
    title: "Engine processes fix",
    description:
      "The optimization engine builds a cross-cloud migration plan, weighing cost, sovereignty, compliance and carbon together.",
    panel: {
      accent: "primary",
      meta: "2–4 min",
      label: "Migration plan",
      headline: "plan-2214",
      subline: "7 providers compared · 4 weighted factors",
      badge: "draft",
      rows: [
        { code: "7", title: "Providers compared", tag: "Ranked" },
        { code: "4", title: "Trade-offs balanced", tag: "Tuned" },
        { code: "37", title: "Sequenced moves", tag: "Drafted" },
      ],
      footer: "+ rollback points on every move",
    },
  },
  {
    index: "03",
    title: "Benchmark & approve",
    description:
      "Throughput, p95 SLA, and risk are benchmarked before anything moves. Every plan ships with a confidence score.",
    panel: {
      accent: "amber",
      meta: "8–12 min",
      label: "Benchmark run",
      headline: "bench-0917",
      subline: "Production traffic replayed · 37 candidates",
      badge: "passing",
      rows: [
        { code: "+4%", title: "Throughput delta", tag: "Improved" },
        { code: "128 ms", title: "p95 under real load", tag: "Within SLA" },
        { code: "96%", title: "Confidence score", tag: "Signed off" },
      ],
      footer: "+ 3 workloads held for sovereignty review",
    },
  },
  {
    index: "04",
    title: "Execute & notify",
    description:
      "A pull request is drafted, a Jira ticket opens, and the owning team is pinged in Slack. Engineering keeps control.",
    panel: {
      accent: "primary",
      meta: "Guarded",
      label: "Change set",
      headline: "OPS-2214",
      subline: "34 pull requests · terraform/eu-central",
      badge: "in review",
      rows: [
        { code: "34", title: "Pull requests opened", tag: "Awaiting review" },
        { code: "34", title: "Tickets linked", tag: "Tracked" },
        { code: "0", title: "Rollbacks needed", tag: "Under control" },
      ],
      footer: "+ nothing moves until engineering approves",
    },
  },
  {
    index: "05",
    title: "Measure savings",
    description:
      "Realized savings are verified against the plan, workload by workload, month after month.",
    panel: {
      accent: "green",
      meta: "Monthly",
      label: "Savings ledger",
      headline: "FY-2026",
      subline: "34 of 34 workloads reconciled against plan",
      badge: "verified",
      rows: [
        { code: "$9,800", title: "Realized monthly savings", tag: "Verified" },
        { code: "$117,600", title: "Annualised impact", tag: "On track" },
        { code: "41%", title: "In-region carbon cut", tag: "Reported" },
      ],
      footer: "+ evidence exported for finance and audit",
    },
  },
];

export const CORE_PILLARS: CorePillar[] = [
  {
    id: "economics",
    label: "Economics",
    headline: "Unpredictable cloud and AI spend, brought under control",
    description:
      "AI workloads create volatile, hard-to-control infrastructure spend. Opsera eliminates waste and automates FinOps decisions.",
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

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Opsera addresses a crucial question for Europe's digital future: how can we strengthen digital capabilities without losing control over critical infrastructure?",
    name: "Dr. Matthias Wilkes",
    title: "Landrat a.D., Bergstraße Regional Chairman MIT",
    organization: "Wirtschaftsregion Bergstraße",
    logo: "/wirtschaftsregion-bergstrasse-new.avif",
  },
  {
    quote:
      "Opsera is closing a gap by securing data autonomy across cloud services and cuts cost.",
    name: "Dieter Brockmeyer",
    title: "Founder, Diplomatic World Institute",
    organization: "Diplomatic World Institute",
    logo: "/diplomatic-world.svg",
  },
  {
    quote:
      "Opsera is responding to a growing public-sector need: making cloud infrastructure decisions more transparent, structured and controllable.",
    name: "Thomas Wieland",
    title: "Head of Digitalization and E-Government, Metropolregion Rhein-Neckar",
    organization: "Metropolregion Rhein-Neckar",
    logo: "/metropolregion-rhein-neckar-new.svg",
  },
];

// Prices are placeholders until real pricing is confirmed.
export const YEARLY_DISCOUNT = 0.2;

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
    cta: "Start for free",
    monthlyPrice: 0,
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
    cta: "Get started",
    monthlyPrice: 1200,
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
    cta: "Get started",
    monthlyPrice: 3500,
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
    question: "Is Opsera a cloud provider?",
    answer:
      "No. Opsera is not a cloud provider, hyperscaler, or data center. It is a control layer that sits above your existing clouds.",
  },
  {
    question: "How is Opsera different from a FinOps or CSPM tool?",
    answer:
      "Most FinOps tools optimize cost and most CSPM tools optimize security posture. Opsera sits one layer up as a decision-and-control layer that brings cost, compliance, sovereignty, and carbon into a single, auditable placement decision.",
  },
  {
    question: "Which clouds does Opsera work with?",
    answer:
      "Opsera works across hyperscaler and European sovereign providers, including AWS, Azure, and Google Cloud, alongside STACKIT, Hetzner, OVH, and IONOS.",
  },
  {
    question: "Does Opsera run or host my workloads?",
    answer:
      "No. Opsera evaluates requirements, checks policy, assesses sovereignty, residency, risk and cost, and helps you decide and document where workloads should run.",
  },
];
