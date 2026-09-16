export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="7" fill="url(#logo-gradient)" />
      <path
        d="M7 16.5 12 7l5 9.5"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 13.5h6"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="24" y2="24">
          <stop stopColor="#7c5cff" />
          <stop offset="1" stopColor="#ff6a2b" />
        </linearGradient>
      </defs>
    </svg>
  );
}
