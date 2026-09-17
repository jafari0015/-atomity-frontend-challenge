const LOGOS = ["Spotify", "Revolut", "zalando", "SIEMENS", "Delivery Hero"];

export function TrustedCompanies() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#8A7D82]">
        Trusted by forward-thinking teams
      </span>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="text-base font-semibold tracking-tight text-[#3a3a3a] opacity-70 grayscale transition-opacity hover:opacity-90"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="hidden text-right text-[10px] uppercase leading-relaxed tracking-[0.22em] text-[#8A7D82] lg:block">
          From startups
          <br />
          to global enterprises
        </div>
      </div>
    </div>
  );
}
