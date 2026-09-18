"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import {
  Activity,
  Boxes,
  Code,
  Cpu,
  Database,
  HardDrive,
  Receipt,
  Settings2,
  type LucideIcon,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

// Tiles are placed in percentages of the diagram box; connectors are drawn in
// measured pixels so the curves never stretch with the box's aspect ratio.
interface FlowNode {
  label: string;
  chip: string;
  unit?: string;
  icon: LucideIcon;
  x: number;
  y: number;
  color?: string;
}

interface Point {
  x: number;
  y: number;
}

const SIGNALS: FlowNode[] = [
  { label: "Configuration", chip: "1.2k", unit: " signals", icon: Settings2, x: 20, y: 14 },
  { label: "Telemetry", chip: "48k", unit: " signals", icon: Activity, x: 9, y: 38 },
  { label: "Code", chip: "312", unit: " signals", icon: Code, x: 9, y: 62 },
  { label: "Commitments", chip: "36", unit: " signals", icon: Receipt, x: 20, y: 86 },
];

const FINDINGS: FlowNode[] = [
  { label: "Compute", chip: "$4,200", icon: Cpu, x: 80, y: 14, color: "var(--primary)" },
  { label: "Kubernetes", chip: "$2,300", icon: Boxes, x: 91, y: 38, color: "var(--primary)" },
  { label: "Storage", chip: "$1,900", icon: HardDrive, x: 91, y: 62, color: "var(--primary)" },
  { label: "Data platforms", chip: "$1,400", icon: Database, x: 80, y: 86, color: "var(--primary)" },
];

// Size of the center logo tile in px; lines attach to its edges.
const LOGO_SIZE = { base: 56, sm: 96 };
const CORNER_RADIUS = 18;
// On phones every tile sits in one column per side so the runs stay long enough for chips.
const MOBILE_COLUMN_X = { left: 10, right: 90 };

// A straight run out of the tile, one rounded corner into a shared vertical
// trunk at `bendX`, and a second corner into the hub.
function elbow(from: Point, to: Point, bendX: number) {
  const dirX = Math.sign(to.x - from.x) || 1;
  const dirY = Math.sign(to.y - from.y);
  const r = Math.min(
    CORNER_RADIUS,
    Math.abs(to.y - from.y) / 2,
    Math.abs(bendX - from.x),
    Math.abs(to.x - bendX),
  );
  const firstRunEnd = bendX - dirX * r;
  const lastRunStart = bendX + dirX * r;

  const d =
    dirY === 0 || r <= 0
      ? `M ${from.x} ${from.y} H ${to.x}`
      : `M ${from.x} ${from.y} H ${firstRunEnd} Q ${bendX} ${from.y} ${bendX} ${from.y + dirY * r} ` +
        `V ${to.y - dirY * r} Q ${bendX} ${to.y} ${lastRunStart} ${to.y} H ${to.x}`;

  return {
    d,
    firstRunMid: { x: (from.x + firstRunEnd) / 2, y: from.y },
    lastRunMid: { x: (lastRunStart + to.x) / 2, y: to.y },
  };
}

function useDiagramSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function useIsSmallUp() {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const update = () => setMatches(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return matches;
}

function Tile({
  node,
  x,
  index,
  isInView,
  animate,
}: {
  node: FlowNode;
  x: number;
  index: number;
  isInView: boolean;
  animate: boolean;
}) {
  const Icon = node.icon;

  return (
    <motion.div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{ left: `${x}%`, top: `${node.y}%` }}
      initial={animate ? { opacity: 0, scale: 0.85 } : false}
      animate={isInView ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="absolute bottom-full mb-1 whitespace-nowrap rounded bg-background px-1 text-[10px] font-medium text-muted-strong sm:text-xs">
        {node.label}
      </span>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-surface text-primary shadow-sm sm:h-14 sm:w-14 sm:rounded-2xl">
        <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
    </motion.div>
  );
}

function Chip({ node, point }: { node: FlowNode; point: Point }) {
  return (
    <span
      className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums text-white shadow-sm sm:px-2 sm:py-1 sm:text-xs ${
        node.color ? "" : "bg-foreground/85"
      }`}
      style={{ left: point.x, top: point.y, backgroundColor: node.color }}
    >
      {node.chip}
      {node.unit ? <span className="hidden sm:inline">{node.unit}</span> : null}
    </span>
  );
}

function HubSummary({ className }: { className: string }) {
  return (
    <div className={`flex-col items-center gap-1 whitespace-nowrap text-center ${className}`}>
      <span className="rounded-md border border-primary/25 bg-surface px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]">
        Opsera Intelligence
      </span>
      <span className="font-mono text-base font-bold tabular-nums text-foreground sm:text-lg">
        $9,800 / month
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-[11px]">
        Recoverable waste
      </span>
    </div>
  );
}

export function AnalyzerSection() {
  const flowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(flowRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const animate = !prefersReducedMotion;
  const { width, height } = useDiagramSize(flowRef);
  const isSmallUp = useIsSmallUp();

  const logoSize = isSmallUp ? LOGO_SIZE.sm : LOGO_SIZE.base;
  const tileHalf = isSmallUp ? 28 : 20;
  const center = { x: width / 2, y: height / 2 };
  const attachRadius = logoSize / 2;

  // All lines on a side converge on a single point at the ring's edge.
  const ringPoint = (side: -1 | 1): Point => ({
    x: center.x + side * attachRadius,
    y: center.y,
  });

  const nodeX = (node: FlowNode) =>
    isSmallUp ? node.x : node.color ? MOBILE_COLUMN_X.right : MOBILE_COLUMN_X.left;

  const tilePoint = (node: FlowNode, side: -1 | 1): Point => ({
    x: (nodeX(node) / 100) * width - side * tileHalf,
    y: (node.y / 100) * height,
  });

  // The trunk sits between the innermost tile edge and the ring.
  const innermostTileEdge = Math.max(...SIGNALS.map((node) => tilePoint(node, -1).x));
  const trunkGap = isSmallUp ? Math.max(18, (ringPoint(-1).x - innermostTileEdge) * 0.3) : 12;

  const inputs = SIGNALS.map((node) => {
    const path = elbow(tilePoint(node, -1), ringPoint(-1), ringPoint(-1).x - trunkGap);
    return { node, d: path.d, chipAt: path.firstRunMid };
  });
  const outputs = FINDINGS.map((node) => {
    const path = elbow(ringPoint(1), tilePoint(node, 1), ringPoint(1).x + trunkGap);
    return { node, d: path.d, chipAt: path.lastRunMid };
  });
  const measured = width > 0 && height > 0;

  return (
    <section
      id="analysis"
      aria-labelledby="analysis-heading"
      className="px-6 py-20 sm:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:gap-16">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <h2
            id="analysis-heading"
            className="max-w-md text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
          >
            Industry&rsquo;s deepest waste detection
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted lg:pb-2">
            Opsera connects configuration, telemetry, code and commitments to explain
            not only where waste exists — but why.
          </p>
        </div>

        <div
          ref={flowRef}
          className="relative mx-auto aspect-[3/5] w-full max-w-5xl sm:aspect-[2/1]"
          role="img"
          aria-label="Configuration, telemetry, code and commitment signals flow into Opsera Intelligence, which surfaces $9,800 of monthly waste: $4,200 compute, $2,300 Kubernetes, $1,900 storage and $1,400 data platforms."
        >
          {measured ? (
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              {inputs.map(({ node, d }, index) => (
                <motion.g
                  key={node.label}
                  initial={animate ? { opacity: 0 } : false}
                  animate={isInView ? { opacity: 1 } : undefined}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                >
                  <path
                    d={d}
                    fill="none"
                    stroke="var(--muted)"
                    strokeOpacity={0.5}
                    strokeWidth={1.25}
                  />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="var(--surface)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray="4 12"
                    animate={
                      animate && isInView ? { strokeDashoffset: [0, -16] } : undefined
                    }
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </motion.g>
              ))}

              {outputs.map(({ node, d }, index) => (
                <motion.g
                  key={node.label}
                  initial={animate ? { opacity: 0 } : false}
                  animate={isInView ? { opacity: 1 } : undefined}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.08 }}
                >
                  <path
                    d={d}
                    fill="none"
                    stroke="var(--primary)"
                    strokeOpacity={0.25}
                    strokeWidth={1.25}
                  />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeDasharray="4 12"
                    animate={
                      animate && isInView ? { strokeDashoffset: [0, -16] } : undefined
                    }
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </motion.g>
              ))}
            </svg>
          ) : null}

          <div
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border-strong bg-surface"
            style={{ width: logoSize, height: logoSize }}
          >
            <Image
              src="/logo-mark.svg"
              alt=""
              width={96}
              height={96}
              className="h-[78%] w-[78%]"
            />
            <HubSummary className="absolute top-full mt-3 hidden sm:flex" />
          </div>

          {measured
            ? [...inputs, ...outputs].map(({ node, chipAt }) => (
                <Chip key={node.label} node={node} point={chipAt} />
              ))
            : null}

          {[...SIGNALS, ...FINDINGS].map((node, index) => (
            <Tile
              key={node.label}
              node={node}
              x={nodeX(node)}
              index={index}
              isInView={isInView}
              animate={animate}
            />
          ))}
        </div>

        <HubSummary className="-mt-6 flex sm:hidden" />
      </div>
    </section>
  );
}
