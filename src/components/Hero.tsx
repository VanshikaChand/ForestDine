type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  ctaLabel?: string;
  ctaHref?: string;
  showSearch?: boolean;
};

export default function Hero({
  eyebrow,
  headline,
  subheadline,
  ctaLabel = "Find a stay",
  ctaHref = "#listings",
  showSearch = true,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-canopy-deep text-parchment">
      {/* dappled light — sun filtering through canopy, the page's signature motion */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="dapple-light absolute -top-24 -left-10 h-72 w-72 rounded-full bg-moss/40 blur-3xl" />
        <div
          className="dapple-light absolute top-10 right-0 h-64 w-64 rounded-full bg-honey/30 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="dapple-light absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-moss-light/30 blur-3xl"
          style={{ animationDelay: "9s" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 py-20 sm:py-28">
        {eyebrow && (
          <p className="font-body text-xs uppercase tracking-[0.2em] text-moss-light mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display max-w-2xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
          {headline}
        </h1>
        <p className="mt-5 max-w-lg text-base sm:text-lg text-parchment/80">
          {subheadline}
        </p>

        {showSearch ? (
          <div className="mt-9 flex flex-col sm:flex-row gap-2 bg-parchment rounded-2xl p-2 max-w-xl shadow-lg">
            <input
              type="text"
              placeholder="Where to — Coorg, Munnar, Uttarakhand…"
              className="flex-1 bg-transparent px-4 py-3 text-canopy-deep placeholder:text-canopy/50 text-sm outline-none"
            />
            <a
              href={ctaHref}
              className="rounded-xl bg-moss px-6 py-3 text-center text-sm font-semibold text-parchment transition-colors hover:bg-moss-light"
            >
              {ctaLabel}
            </a>
          </div>
        ) : (
          <a
            href={ctaHref}
            className="mt-9 inline-block rounded-xl bg-moss px-6 py-3 text-sm font-semibold text-parchment transition-colors hover:bg-moss-light"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
