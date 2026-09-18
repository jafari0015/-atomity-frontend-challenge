const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#top" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Customer stories", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Imprint", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

// The wordmark is SVG text stretched to the full width, then cut off by the
// viewBox so only the top of the letters shows above the divider.
const WORDMARK_WIDTH = 1000;
const WORDMARK_VISIBLE_HEIGHT = 150;

export function FooterSection() {
  return (
    <footer className="px-6 pb-6">
      <div className="mx-auto flex max-w-6xl flex-col rounded-3xl border border-border-strong bg-surface px-6 pt-12 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="max-w-xs text-base leading-relaxed text-foreground">
              Opsera is the control layer for sovereign cloud decisions across every
              provider.
            </p>
            <a
              href="#"
              aria-label="Opsera on LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong text-muted-strong transition-colors hover:border-primary hover:text-primary"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col gap-4 border-t border-border-strong pt-6">
                <h3 className="text-base font-semibold text-foreground">{column.title}</h3>
                <ul className="flex flex-col gap-1">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="inline-block py-1 text-sm text-muted-strong transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <svg
          viewBox={`0 0 ${WORDMARK_WIDTH} ${WORDMARK_VISIBLE_HEIGHT}`}
          className="mt-16 block w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="footer-wordmark-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y={WORDMARK_VISIBLE_HEIGHT + 40}
            textLength={WORDMARK_WIDTH}
            lengthAdjust="spacingAndGlyphs"
            fontSize="235"
            fontWeight="500"
            fill="none"
            stroke="url(#footer-wordmark-fade)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          >
            OPSERA
          </text>
        </svg>

        <div className="flex flex-col gap-4 border-t border-border-strong py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Opsera · Demonstration data only</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="inline-block py-1 transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
