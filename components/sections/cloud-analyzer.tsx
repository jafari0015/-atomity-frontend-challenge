"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  Activity,
  BarChart3,
  CircleDollarSign,
  Cloud,
  Database,
  Gauge,
  Globe2,
  Leaf,
  Lightbulb,
  Quote,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const providers = [
  {
    name: "AWS",
    shortName: "aws",
    region: "eu-central-1",
    amount: "€14,320",
    percent: 48,
    resources: 34,
    color: "var(--accent-aws)",
  },
  {
    name: "Google Cloud",
    shortName: "GCP",
    region: "europe-west4",
    amount: "€8,060",
    percent: 27,
    resources: 19,
    color: "var(--accent-gcp)",
  },
  {
    name: "Azure",
    shortName: "A",
    region: "West Europe",
    amount: "€5,370",
    percent: 18,
    resources: 12,
    color: "var(--accent-azure)",
  },
];

const navItems = [
  {
    label: "Overview",
    description: "Live analysis",
    icon: Activity,
  },
  {
    label: "Cost Analysis",
    description: "Find savings",
    icon: CircleDollarSign,
  },
  {
    label: "Performance",
    description: "Compare options",
    icon: Gauge,
  },
  {
    label: "Compliance",
    description: "Data residency",
    icon: ShieldCheck,
  },
  {
    label: "Recommendations",
    description: "Actionable insights",
    icon: Lightbulb,
  },
];

const analysisLogs = [
  "Connected to AWS, Google Cloud and Azure",
  "Fetching billing data and resource metadata",
  "Analyzing resource utilization",
  "Detecting underutilized instances",
  "Comparing alternative deployments",
  "Generating optimization recommendations",
];

export default function CloudAnalyzer() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [activeLog, setActiveLog] = useState(5);
  const [lastUpdated, setLastUpdated] = useState("14:32:18");

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = window.setInterval(() => {
      setActiveLog((current) => {
        if (current >= analysisLogs.length - 1) {
          return 0;
        }

        return current + 1;
      });

      const now = new Date();

      setLastUpdated(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    }, 1600);

    return () => window.clearInterval(interval);
  }, [autoRefresh]);

  const processingText = useMemo(() => {
    if (!autoRefresh) return "Paused";

    if (activeLog <= 1) return "Collecting data...";
    if (activeLog <= 3) return "Analyzing...";
    if (activeLog === 4) return "Comparing...";
    return "Optimizing...";
  }, [activeLog, autoRefresh]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
      <div
        className="
          overflow-hidden
          rounded-[26px]
          border border-border
          bg-surface
        "
      >
        <div className="flex min-h-[58px] flex-wrap items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-5">
          <div className="flex min-w-0 items-center gap-4">
            <div
              className="
                flex items-center gap-2
                rounded-full
                bg-accent-green/10
                px-3.5 py-2
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-30" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
              </span>

              <span className="text-xs font-semibold text-accent-green">
                Live Analysis
              </span>
            </div>

            <p className="hidden truncate text-xs text-muted sm:block">
              Scanning your cloud infrastructure...
            </p>
          </div>

          <div className="flex items-center gap-5">
            <p className="hidden font-mono text-[11px] text-muted md:block">
              Last updated · {lastUpdated}
            </p>

            <label
              className="
                flex cursor-pointer items-center gap-3
                rounded-full
                border border-border
                bg-background/40
                px-3 py-2
              "
            >
              <span className="text-[11px] font-medium text-muted-strong">
                Auto refresh
              </span>

              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(event) => setAutoRefresh(event.target.checked)}
                className="peer sr-only"
              />

              <span
                className="
                  relative h-[22px] w-[38px]
                  rounded-full
                  bg-border-strong
                  transition-colors duration-300
                  peer-checked:bg-primary
                  peer-focus-visible:outline-2
                  peer-focus-visible:outline-offset-2
                  peer-focus-visible:outline-primary

                  after:absolute
                  after:left-[3px]
                  after:top-[3px]
                  after:h-4
                  after:w-4
                  after:rounded-full
                  after:bg-white
                  after:transition-transform
                  after:duration-300
                  peer-checked:after:translate-x-4
                "
              />
            </label>
          </div>
        </div>

        <div
          className="
            grid
            grid-cols-1

            xl:grid-cols-[240px_minmax(0,1.35fr)_minmax(230px,0.72fr)_minmax(280px,0.9fr)]
          "
        >

          <aside className="border-b border-border bg-background/25 p-3 xl:border-b-0 xl:border-r">
            <nav className="flex gap-2 overflow-x-auto xl:block xl:space-y-2 xl:overflow-visible">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = activeNav === item.label;

                return (
                  <button
                    type="button"
                    key={item.label}
                    onClick={() => setActiveNav(item.label)}
                    className={`
                      group
                      relative
                      flex min-w-[150px]
                      items-center
                      gap-3
                      rounded-xl
                      px-3 py-3
                      text-left
                      transition-all
                      duration-200
                      xl:w-full

                      ${active
                        ? "bg-primary/[0.07] text-primary"
                        : "text-muted-strong hover:bg-background hover:text-primary"
                      }
                    `}
                  >
                    {active && (
                      <span className="absolute -left-3 top-2 bottom-2 w-[3px] rounded-full bg-primary" />
                    )}

                    <div
                      className={`
                        grid h-8 w-8
                        shrink-0
                        place-items-center
                        rounded-full
                        transition-colors

                        ${active
                          ? "bg-primary text-white"
                          : "border border-border bg-surface text-primary"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold leading-snug">{item.label}</p>

                      <p className="mt-0.5 text-[10px] leading-snug text-muted">
                        {item.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Quote */}

            <div
              className="
                mt-8 hidden
                rounded-2xl
                border border-border
                bg-surface/70
                p-4
                xl:block
              "
            >
              <Quote className="mb-4 h-5 w-5 text-muted" />

              <p className="text-xs leading-5 text-muted-strong">
                Smarter cloud decisions for a more sovereign tomorrow.
              </p>

              <p className="mt-3 text-[10px] font-semibold tracking-[0.12em] text-muted">
                — OPSERA
              </p>
            </div>
          </aside>


          <div className="min-w-0 border-b border-border p-4 sm:p-5 xl:border-b-0 xl:border-r">
            <div className="flex items-start justify-between gap-4">
              <SectionTitle
                icon={<Globe2 className="h-4 w-4" />}
                title="Global Infrastructure"
                subtitle="Your workloads across regions"
              />

              <div className="flex items-center gap-2 rounded-full bg-accent-green/[0.07] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-accent-green" />

                <div>
                  <p className="text-[10px] font-semibold text-foreground">
                    3 providers
                  </p>

                  <p className="text-[9px] text-muted">65 resources</p>
                </div>
              </div>
            </div>

            {/* MAP */}

            <div className="relative mt-5 h-[235px] overflow-hidden rounded-2xl">
              <WorldMap />

              {/* Canada / US */}

              <MapNode
                className="left-[26%] top-[45%]"
                color="var(--accent-aws)"
              />

              {/* Europe */}

              <MapNode
                className="left-[51%] top-[43%]"
                color="var(--accent-gcp)"
                large
              />

              {/* India */}

              <MapNode
                className="left-[68%] top-[57%]"
                color="var(--accent-azure)"
              />

              {/* Australia */}

              <MapNode
                className="left-[78%] top-[76%]"
                color="var(--accent-gcp)"
              />

              {/* Frankfurt tooltip */}

              <div
                className="
                  absolute
                  right-2
                  top-[25%]
                  sm:left-[53%]
                  sm:right-auto
                  z-20
                  min-w-[138px]
                  rounded-xl
                  border border-border
                  bg-surface
                  px-3 py-2.5
                "
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-green" />

                  <p className="text-xs font-semibold">Frankfurt, DE</p>
                </div>

                <p className="mt-1 pl-4 text-[10px] text-muted">
                  12 resources
                </p>

                <p className="pl-4 font-mono text-[10px] text-foreground">
                  €4,120/mo
                </p>
              </div>

              {/* Legend */}

              <div className="absolute bottom-2 left-2 space-y-1.5">
                <MapLegend
                  color="var(--accent-aws)"
                  text="AWS"
                />

                <MapLegend
                  color="var(--accent-gcp)"
                  text="Google Cloud"
                />

                <MapLegend
                  color="var(--accent-azure)"
                  text="Azure"
                />
              </div>
            </div>

            {/* LIVE ANALYSIS LOG */}

            <div className="mt-3 border-t border-border pt-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />

                  <span className="text-xs font-semibold">
                    Live Analysis Log
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {autoRefresh && (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin text-primary" />
                  )}

                  <span className="text-[10px] text-muted">
                    {processingText}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {analysisLogs.map((log, index) => {
                  const done = index < activeLog;
                  const active = index === activeLog;

                  return (
                    <div
                      key={log}
                      className={`
                        grid
                        grid-cols-[64px_12px_1fr]
                        items-start
                        gap-2
                        text-[10px]
                        transition-opacity


                      `}
                    >
                      <span className="font-mono text-muted">
                        14:32:{String(10 + index * 2).padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          mt-1 h-1.5 w-1.5 rounded-full

                          ${done
                            ? "bg-accent-green"
                            : active
                              ? "animate-pulse bg-primary"
                              : "bg-muted"
                          }
                        `}
                      />

                      <span
                        className={
                          active
                            ? "font-medium text-foreground"
                            : done
                              ? "text-muted-strong"
                              : "text-muted"
                        }
                      >
                        {log}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>


          <div className="min-w-0 border-b border-border p-4 sm:p-5 xl:border-b-0 xl:border-r">
            {/* SPEND BREAKDOWN */}

            <SectionTitle
              icon={<Database className="h-4 w-4" />}
              title="Cloud Spend Breakdown"
              subtitle="Current monthly spend"
            />

            <div className="mt-4 space-y-2.5">
              {providers.map((provider) => (
                <ProviderSpend
                  key={provider.name}
                  {...provider}
                />
              ))}
            </div>

            {/* TREND */}

            <div className="mt-5 border-t border-border pt-4">
              <div className="flex items-start justify-between gap-4">
                <SectionTitle
                  icon={<BarChart3 className="h-4 w-4" />}
                  title="Spending Trend"
                />

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 text-accent-green">
                    <TrendingDown className="h-3.5 w-3.5" />

                    <span className="text-xs font-semibold">
                      18%
                    </span>
                  </div>

                  <span className="text-[9px] text-muted">
                    vs last month
                  </span>
                </div>
              </div>

              <SpendingChart />
            </div>
          </div>


          <div className="min-w-0 p-4 sm:p-5">
            {/* OPTIMIZATION */}

            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <SectionTitle
                  icon={<Sparkles className="h-4 w-4" />}
                  title="Top Optimization Opportunity"
                />
              </div>

              <div className="rounded-2xl border border-border bg-background/35 p-4">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-accent-amber/10
                    px-2.5 py-1
                    text-[9px]
                    font-bold
                    text-accent-amber
                  "
                >
                  HIGH IMPACT
                </span>

                <h3 className="mt-3 text-[15px] font-semibold tracking-tight">
                  Rightsize compute instances
                </h3>

                <p className="mt-2 text-xs leading-5 text-muted">
                  11 underutilized instances across AWS can be replaced with
                  more efficient types.
                </p>

                <div className="mt-5">
                  <p className="text-[10px] text-accent-green">
                    Estimated saving
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-4">
                    <div>
                      <span className="font-mono text-3xl font-semibold text-accent-green">
                        €323
                      </span>

                      <span className="ml-1 text-xs text-accent-green">
                        /mo
                      </span>
                    </div>

                    <div
                      className="
                        flex items-center gap-1
                        rounded-xl
                        bg-accent-green/10
                        px-3 py-2
                        text-accent-green
                      "
                    >
                      <TrendingDown className="h-4 w-4" />

                      <span className="font-mono text-xl font-semibold">
                        44%
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="
                    mt-5
                    flex min-h-11
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    cursor-pointer
                    bg-primary
                    px-4
                    text-xs
                    font-semibold
                    text-white
                    transition-all
                    duration-200

                    hover:bg-primary-strong

                    active:scale-[0.99]
                  "
                >
                  View recommendation

                </button>
              </div>
            </div>

            {/* IMPACT SUMMARY */}

            <div className="mt-5 border-t border-border pt-4">
              <SectionTitle
                icon={<Leaf className="h-4 w-4" />}
                title="Impact Summary"
              />

              <div className="mt-4 space-y-3">
                <ImpactItem
                  icon={
                    <CircleDollarSign className="h-4 w-4 text-accent-amber" />
                  }
                  value="€3,876"
                  suffix="/mo"
                  label="Total potential savings"
                />

                <ImpactItem
                  icon={<Leaf className="h-4 w-4 text-accent-green" />}
                  value="1.8 t"
                  suffix="/ year"
                  label="Estimated CO₂ reduction"
                />

                <ImpactItem
                  icon={
                    <ShieldCheck className="h-4 w-4 text-accent-azure" />
                  }
                  value="100%"
                  label="EU data residency compliant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SectionTitle({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-[1px] text-primary">{icon}</div>

      <div>
        <h2 className="text-xs font-semibold text-foreground">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-0.5 text-[10px] text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function ProviderSpend({
  name,
  shortName,
  amount,
  percent,
  color,
}: {
  name: string;
  shortName: string;
  amount: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/25 p-3">
      <div className="flex items-center gap-3">
        <ProviderLogo
          provider={name}
          shortName={shortName}
        />

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="truncate text-xs font-semibold">
              {name}
            </span>

            <span className="font-mono text-[11px] font-semibold">
              {amount}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-border/60">
              <div
                className="h-full rounded-full transition-[width] duration-700"
                style={{
                  width: `${percent}%`,
                  backgroundColor: color,
                }}
              />
            </div>

            <span className="w-7 text-right font-mono text-[10px] text-muted">
              {percent}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProviderLogo({
  provider,
  shortName,
}: {
  provider: string;
  shortName: string;
}) {
  if (provider === "AWS") {
    return (
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface">
        <span className="text-[15px] font-bold lowercase tracking-tight text-foreground">
          aws
        </span>
      </div>
    );
  }

  if (provider === "Google Cloud") {
    return (
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface">
        <Cloud className="h-5 w-5 text-accent-gcp" />
      </div>
    );
  }

  return (
    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface">
      <span className="text-xl font-black text-accent-azure">
        {shortName}
      </span>
    </div>
  );
}

function ImpactItem({
  icon,
  value,
  suffix,
  label,
}: {
  icon: ReactNode;
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-background/50">
        {icon}
      </div>

      <div>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-sm font-semibold text-foreground">
            {value}
          </span>

          {suffix && (
            <span className="text-[9px] text-muted">
              {suffix}
            </span>
          )}
        </div>

        <p className="mt-0.5 text-[10px] text-muted">
          {label}
        </p>
      </div>
    </div>
  );
}

function MapLegend({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />

      <span className="text-[9px] text-muted-strong">
        {text}
      </span>
    </div>
  );
}

function MapNode({
  className,
  color,
  large = false,
}: {
  className: string;
  color: string;
  large?: boolean;
}) {
  return (
    <span
      className={`absolute z-10 ${className}`}
    >
      <span
        className={`
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          opacity-20
          animate-ping

          ${large ? "h-8 w-8" : "h-6 w-6"}
        `}
        style={{
          backgroundColor: color,
        }}
      />

      <span
        className={`
          relative
          block
          rounded-full
          border-2
          border-white

          ${large ? "h-4 w-4" : "h-3 w-3"}
        `}
        style={{
          backgroundColor: color,
        }}
      />
    </span>
  );
}

/* ================================================================
   SIMPLE WORLD MAP SVG
================================================================ */

function WorldMap() {
  return (
    <svg
      viewBox="0 0 760 350"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label="Global cloud infrastructure map"
    >
      <defs>
        <pattern
          id="opsora-map-dots"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="2"
            cy="2"
            r="1.6"
            fill="var(--border-strong)"
            opacity="0.75"
          />
        </pattern>
      </defs>

      <g fill="url(#opsora-map-dots)">
        {/* North America */}
        <path d="M72 81L112 54L179 52L225 79L234 109L211 131L204 157L170 174L151 203L122 195L113 166L91 152L64 128L52 98Z" />

        {/* South America */}
        <path d="M194 190L222 200L242 229L235 260L218 291L207 328L189 303L182 271L165 247L169 214Z" />

        {/* Europe */}
        <path d="M345 79L374 68L408 76L425 92L414 110L382 113L359 102Z" />

        {/* Africa */}
        <path d="M354 121L394 119L425 144L423 190L404 232L381 256L359 225L341 185L337 148Z" />

        {/* Asia */}
        <path d="M416 84L459 61L527 61L578 78L637 87L681 110L661 134L618 140L594 159L548 151L523 169L474 153L439 129L410 110Z" />

        {/* India */}
        <path d="M505 158L532 169L537 193L520 218L502 196L494 174Z" />

        {/* South East Asia */}
        <path d="M557 179L578 187L594 208L576 221L554 208L544 191Z" />

        {/* Japan */}
        <path d="M650 129L660 140L654 157L646 147Z" />

        {/* Australia */}
        <path d="M595 244L632 229L669 239L691 265L677 293L643 304L611 293L586 270Z" />

        {/* Greenland */}
        <path d="M228 35L251 20L277 27L269 51L241 62Z" />
      </g>

      <g
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
        opacity="0.55"
      >
        <path d="M20 176H740" />
        <path d="M380 18V330" />
      </g>
    </svg>
  );
}


function SpendingChart() {
  const values = [
    { label: "Jan", value: 42 },
    { label: "Feb", value: 38 },
    { label: "Mar", value: 61 },
    { label: "Apr", value: 40 },
    { label: "May", value: 48 },
    { label: "Jun", value: 57 },
  ];

  return (
    <div className="mt-5">
      <div className="flex h-[125px] items-end justify-between gap-2">
        {values.map((item, index) => {
          const current = index === values.length - 1;

          return (
            <div
              key={item.label}
              className="flex flex-1 flex-col items-center justify-end gap-2"
            >
              {current && (
                <span
                  className="
                    rounded-md
                    bg-primary
                    px-2 py-1
                    font-mono
                    text-[9px]
                    text-white
                  "
                >
                  €29,840
                </span>
              )}

              <div
                className={`
                  w-full
                  max-w-[28px]
                  rounded-t-[7px]
                  transition-all

                  ${current
                    ? "bg-primary"
                    : "bg-primary/20"
                  }
                `}
                style={{
                  height: `${item.value}px`,
                }}
              />

              <span className="text-[9px] text-muted">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}