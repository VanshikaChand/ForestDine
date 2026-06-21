type CardProps = {
  title: string;
  description: string;
  image?: string;
  tag?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function Card({
  title,
  description,
  image,
  tag,
  actionLabel,
  actionHref,
}: CardProps) {
  return (
    <article className="group rounded-2xl border border-canopy/10 bg-white/60 overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      <div className="relative h-44 w-full bg-parchment-dim overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-canopy/30 font-display text-sm">
            Photo coming soon
          </div>
        )}
        {tag && (
          <span className="absolute top-3 left-3 rounded-full bg-canopy-deep/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-parchment">
            {tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-canopy-deep">
          {title}
        </h3>
        <p className="mt-2 text-sm text-canopy/70 flex-1">{description}</p>
        {actionLabel && (
          <a
            href={actionHref ?? "#"}
            className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-moss hover:text-honey transition-colors"
          >
            {actionLabel}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}
