import { BarChart3Icon, LeafIcon, ShieldIcon } from "./icons";
import { FloatingInsightCard } from "./floating-insight-card";

const NODES = [
  { top: "4%", size: 9, color: "#38152F", pulse: true },
  { top: "27.4%", size: 6, color: "#5B3B51" },
  { top: "49%", size: 6, color: "#F0D6C0" },
  { top: "72.6%", size: 6, color: "#8A7D82" },
];

const CONNECTORS = [
  "M310,21 H430 V90",
  "M310,255 H190 V271",
  "M310,378 H448 V404",
];

export function CloudDecisionStack() {
  return (
    <div
      className="relative mx-auto w-full max-w-[620px]"
      style={{ aspectRatio: "620 / 520" }}
      aria-hidden="true"
    >
      {/* central dashed guide line */}
      <span
        className="absolute left-1/2 top-[4%] h-[92%] -translate-x-1/2 border-l border-dashed"
        style={{ borderColor: "rgba(74,47,46,0.28)" }}
      />
      {NODES.map((node) => (
        <span
          key={node.top}
          className={`absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            node.pulse ? "hero-node-pulse" : ""
          }`}
          style={{
            top: node.top,
            width: node.size,
            height: node.size,
            background: node.color,
          }}
        />
      ))}

      {/* elbowed dotted connectors from nodes to insight cards */}
      <svg
        viewBox="0 0 620 520"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {CONNECTORS.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="rgba(80,50,45,0.32)"
            strokeWidth="1"
            strokeDasharray="2.5 4"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* stacked cloud-decision discs */}
      <div
        className="hero-disc hero-disc-a"
        style={{
          width: "62.9%",
          height: "20%",
          top: "16%",
          left: "16.9%",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(240,215,199,0.18))",
          border: "1px solid rgba(117,79,67,0.18)",
          boxShadow: "0 18px 45px rgba(70,40,33,0.05)",
        }}
      />
      <div
        className="hero-disc hero-disc-b"
        style={{
          width: "62.9%",
          height: "21%",
          top: "37%",
          left: "16.1%",
          background:
            "linear-gradient(135deg, rgba(247,226,208,0.72), rgba(218,176,145,0.5))",
          border: "1px solid rgba(118,73,61,0.22)",
          boxShadow: "0 22px 55px rgba(75,43,32,0.07)",
        }}
      />
      <div
        className="hero-disc hero-disc-c overflow-hidden"
        style={{
          width: "62.9%",
          height: "22%",
          top: "60%",
          left: "16.1%",
          background:
            "linear-gradient(135deg, #68475C 0%, #402039 55%, #30162C 100%)",
          border: "1px solid rgba(43,21,36,0.5)",
          boxShadow: "0 28px 65px rgba(51,27,43,0.22)",
        }}
      >
        <span
          className="absolute rounded-[50%]"
          style={{
            inset: "18% 8% -12% 28%",
            background:
              "linear-gradient(135deg, rgba(224,196,208,0.55), rgba(168,128,150,0.15))",
          }}
        />
      </div>

      {/* floating connector dots */}
      <span className="absolute left-[8%] top-[20%] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(80,50,45,0.35)" }} />
      <span className="absolute right-[16%] top-[33%] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(80,50,45,0.35)" }} />
      <span className="absolute left-[10%] top-[55%] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(80,50,45,0.35)" }} />
      <span className="absolute right-[10%] top-[78%] h-1.5 w-1.5 rounded-full" style={{ background: "rgba(80,50,45,0.35)" }} />

      <FloatingInsightCard
        icon={<BarChart3Icon className="h-4 w-4" />}
        iconColor="#38152F"
        title="Lower Costs"
        subtitle="Up to 40%"
        className="right-[4%] top-[11%] w-[165px]"
        animationDelay="0s"
      />
      <FloatingInsightCard
        icon={<ShieldIcon className="h-4 w-4" />}
        iconColor="#5B3B51"
        title="Data Sovereignty"
        subtitle="Your rules"
        className="left-0 top-[46%] w-[180px]"
        animationDelay="1.4s"
      />
      <FloatingInsightCard
        icon={<LeafIcon className="h-4 w-4" />}
        iconColor="#4C9A72"
        title="Lower Emissions"
        subtitle="Real impact"
        className="right-0 top-[72%] w-[172px]"
        animationDelay="2.6s"
      />

      {/* vertical PLAN / COMPARE / OPTIMIZE label */}
      <div className="absolute right-[-4px] top-[30%] hidden items-center gap-3 xl:flex">
        <span className="h-[110px] w-px" style={{ background: "rgba(74,47,46,0.22)" }} />
        <div
          className="flex flex-col gap-1 text-[11px] font-medium uppercase leading-[2] tracking-[0.28em]"
          style={{ color: "#8B7B80" }}
        >
          <span>Plan</span>
          <span>Compare</span>
          <span>Optimize</span>
        </div>
      </div>

      {/* bottom-right micro copy */}
      <div
        className="absolute bottom-[-6%] right-0 text-right text-[10px] uppercase leading-[1.8] tracking-[0.30em]"
        style={{ color: "#8B7B80" }}
      >
        A more open
        <br />
        cloud tomorrow
      </div>
    </div>
  );
}
