import type { CSSProperties } from "react";
import type { CloudProviderId } from "@/types";

interface ProviderIconProps {
  provider: CloudProviderId;
  className?: string;
  style?: CSSProperties;
}

export function ProviderIcon({ provider, className, style }: ProviderIconProps) {
  if (provider === "aws") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M6 9.5c0-2.485 2.686-4.5 6-4.5s6 2.015 6 4.5-2.686 4.5-6 4.5-6-2.015-6-4.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M4 15.5c2.5 1.8 5.5 2.5 8 2.5s5.5-.7 8-2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 14.5c1.2.4 2 1 2 1.8 0 1.2-1.79 2.2-4 2.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (provider === "azure") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <path
          d="M9.5 4h5l-5.2 15h-5L9.5 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M13.8 13.5 20 19H8.5l5.3-5.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (provider === "gcp") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
        <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 4.5v15M4.5 12h15M6.5 6.5l11 11M17.5 6.5l-11 11"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 12h7M12 8.5v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
