import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    heading: "Explore",
    links: [
      { label: "Homestays", href: "/" },
      { label: "Forest Dining", href: "/" },
      { label: "Hosting", href: "/about" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Login", href: "/login" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", icon: "instagram" },
  { label: "Pinterest", icon: "pinterest" },
  { label: "Email", icon: "mail" },
] as const;

function SocialIcon({ icon }: { icon: (typeof SOCIALS)[number]["icon"] }) {
  const paths: Record<typeof icon, React.ReactNode> = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" />
        <circle cx="17.2" cy="6.8" r="1" />
      </>
    ),
    pinterest: (
      <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.8.2-2.6l1.4-5.9s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-1 3.8-.2 1 .5 1.8 1.5 1.8 1.8 0 3.1-2.3 3.1-5 0-2.1-1.5-3.6-4-3.6-2.9 0-4.7 2.2-4.7 4.5 0 .8.3 1.4.6 1.8.2.2.2.3.1.5l-.3 1c0 .2-.2.3-.4.2-1.2-.5-1.7-1.8-1.7-3.3 0-2.5 2.1-5.4 6.2-5.4 3.3 0 5.5 2.4 5.5 5 0 3.4-1.9 5.9-4.6 5.9-.9 0-1.8-.5-2.1-1l-.6 2.3c-.2.8-.7 1.7-1 2.3.9.3 1.9.4 2.9.4A10 10 0 0 0 12 2Z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" />
        <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      {paths[icon]}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-canopy-deep text-parchment">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg font-semibold">ForestDine</p>
          <p className="mt-2 text-sm text-parchment/60 max-w-[22ch]">
            Eco-homestays and forest dining, hosted by people who live there.
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="text-xs uppercase tracking-[0.15em] text-parchment/50">
              {col.heading}
            </p>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-parchment/80 hover:text-honey transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-parchment/50">
            Follow
          </p>
          <div className="mt-3 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-parchment/20 text-parchment/80 hover:border-honey hover:text-honey transition-colors"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-parchment/10 px-5 sm:px-8 py-5 text-xs text-parchment/50">
        © {new Date().getFullYear()} ForestDine. All rights reserved.
      </div>
    </footer>
  );
}
