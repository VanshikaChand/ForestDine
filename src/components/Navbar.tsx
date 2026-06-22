"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Stays" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-parchment/90 dark:bg-canopy-deep/90 backdrop-blur border-b border-canopy/10 dark:border-parchment/10">
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-canopy-deep"
        >
          ForestDine
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-canopy">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-moss"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-canopy text-parchment text-sm font-medium dark:bg-parchment dark:text-canopy-deep"
            aria-label="Account"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                d="M5 19c1.6-3.2 4-4.8 7-4.8s5.4 1.6 7 4.8M12 11a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z"
              />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-canopy/20 text-canopy"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            {open ? (
              <path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-canopy/10 bg-parchment px-5 pb-5 pt-2">
          <ul className="flex flex-col gap-1 text-sm font-medium text-canopy">
            {[...NAV_LINKS, { href: "/login", label: "Login" }].map(
              (link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 border-b border-canopy/5 last:border-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
