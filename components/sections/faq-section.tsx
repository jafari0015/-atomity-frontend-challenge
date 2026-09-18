import { ArrowUpRight, CalendarDays, Mail, type LucideIcon } from "lucide-react";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FAQS } from "@/lib/constants";

// Placeholder contact routes until real booking and support links exist.
const CONTACT_OPTIONS: { title: string; detail: string; href: string; icon: LucideIcon }[] = [
  {
    title: "Talk to an expert",
    detail: "Weekdays, 9:00–18:00 CET",
    href: "#",
    icon: CalendarDays,
  },
  {
    title: "Email our team",
    detail: "Replies within one business day",
    href: "#",
    icon: Mail,
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-6 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-16">
        <div className="flex flex-col gap-8 lg:sticky lg:top-28">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              FAQ
            </span>
            <h2
              id="faq-heading"
              className="max-w-md text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl"
            >
              Everything teams ask before switching.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted">
              The practical details platform, finance and compliance teams want to know
              before putting Opsera in charge of their cloud decisions.
            </p>
          </div>

          <ul className="max-w-md overflow-hidden rounded-2xl border border-border-strong bg-surface">
            {CONTACT_OPTIONS.map(({ title, detail, href, icon: Icon }) => (
              <li key={title} className="border-b border-border-strong last:border-b-0">
                <a
                  href={href}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-surface-raised focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong bg-background text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="flex flex-1 flex-col gap-0.5">
                    <span className="text-sm font-semibold text-foreground">{title}</span>
                    <span className="text-sm text-muted">{detail}</span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}
