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
  description: string;
  accentColor: string;
  resourceCount: number;
  sovereign?: boolean;
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
  panel: {
    accent: "cyan" | "primary" | "amber" | "green";
    meta: string;
    label: string;
    headline: string;
    subline: string;
    badge: string;
    rows: { code: string; title: string; tag: string }[];
    footer: string;
  };
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organization: string;
  logo: string;
}

export interface PricingTier {
  name: string;
  audience: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
  /** Monthly list price in EUR; 0 means free. */
  monthlyPrice: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

