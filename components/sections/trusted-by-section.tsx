const LOGOS = [
  "Alugha",
  "Diplomatic World",
  "Seceon",
  "Metropolregion Rhein-Neckar",
  "Wirtschaftsregion Bergstraße",
];

export function TrustedBySection() {
  return (
    <section className="px-6 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Trusted by the most ambitious teams
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-sm font-medium text-muted-strong opacity-70 transition-opacity hover:opacity-100"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
