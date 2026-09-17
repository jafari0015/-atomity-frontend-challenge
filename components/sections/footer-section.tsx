import { LogoMark } from "@/components/ui/logo-mark";

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#top" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Team", href: "#testimonials" },
      { label: "Careers", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "News", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Imprint", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight text-foreground">
                Opsera
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              The control layer for sovereign cloud decisions.
            </p>
            <a
              href="#"
              aria-label="Opsera on LinkedIn"
              className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-muted transition-colors hover:border-primary hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M6.5 9.5v8M6.5 6.5v.01M11 17.5v-4.6c0-1.6 1-2.9 2.6-2.9 1.5 0 2.4 1 2.4 2.9v4.6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-strong transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Opsera. All rights reserved.</span>
          <span>Demonstration data only, not a real infrastructure recommendation.</span>
        </div>
      </div>
    </footer>
  );
}
