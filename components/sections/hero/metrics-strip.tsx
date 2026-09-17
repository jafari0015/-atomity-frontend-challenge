import { BarChart3Icon, Globe2Icon, LeafIcon } from "./icons";

const METRICS = [
  {
    icon: <BarChart3Icon className="h-4.5 w-4.5" />,
    value: "€9.5k/mo",
    label: "Potential savings",
    iconBg: "#FAEBDD",
    iconColor: "#38152F",
  },
  {
    icon: <LeafIcon className="h-4.5 w-4.5" />,
    value: "1.8 tCO₂e",
    label: "Carbon avoided",
    iconBg: "rgba(76, 154, 114, 0.14)",
    iconColor: "#4C9A72",
  },
  {
    icon: <Globe2Icon className="h-4.5 w-4.5" />,
    value: "100% EU",
    label: "Data residency",
    iconBg: "#FAEBDD",
    iconColor: "#5B3B51",
  },
];

export function MetricsStrip() {
  return (
    <div className="flex w-full max-w-[750px] flex-col divide-y divide-[#E9D8CA] rounded-[17px] border border-[rgba(83,57,48,0.10)] bg-[rgba(255,255,255,0.90)] shadow-[0_18px_40px_rgba(60,36,28,0.05)] sm:min-h-[96px] sm:flex-row sm:items-center sm:divide-x sm:divide-y-0">
      {METRICS.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-1 items-center gap-2.5 px-4 py-4 sm:py-0"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ background: metric.iconBg, color: metric.iconColor }}
          >
            {metric.icon}
          </span>
          <div className="min-w-0">
            <div className="whitespace-nowrap font-mono text-[17px] font-semibold leading-tight text-[#121212]">
              {metric.value}
            </div>
            <div className="whitespace-nowrap text-[12.5px] text-[#8A7D82]">
              {metric.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
