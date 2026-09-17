import type { ReactNode } from "react";

interface FloatingInsightCardProps {
  icon: ReactNode;
  iconColor: string;
  title: string;
  subtitle: string;
  className: string;
  animationDelay?: string;
}

export function FloatingInsightCard({
  icon,
  iconColor,
  title,
  subtitle,
  className,
  animationDelay,
}: FloatingInsightCardProps) {
  return (
    <div
      className={`hero-card-float absolute z-10 flex items-center gap-3 rounded-[15px] border border-[rgba(100,70,55,0.10)] bg-[rgba(255,255,255,0.91)] px-4 py-3 shadow-[0_12px_35px_rgba(60,35,28,0.07)] ${className}`}
      style={{ animationDelay }}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAEBDD]"
        style={{ color: iconColor }}
      >
        {icon}
      </span>
      <div>
        <div className="text-[13px] font-semibold leading-tight text-[#111111]">
          {title}
        </div>
        <div className="text-[11px] text-[#8A7D82]">{subtitle}</div>
      </div>
    </div>
  );
}
