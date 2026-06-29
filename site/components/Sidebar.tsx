"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const connectLinks = [
  {
    href: "https://www.linkedin.com/in/leon-wu-tsan-yu/",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/LeonWu813",
    label: "GitHub",
  },
  {
    href: "mailto:leon.wu.tsan.yu@gmail.com",
    label: "Email",
  },
];

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-col gap-1">
        {navLinks.map(({ href, label }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onClick}
                className={`block px-3 py-1.5 rounded text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                  isActive
                    ? "text-[var(--accent)] font-medium"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ConnectLinks({ onClick }: { onClick?: () => void }) {
  return (
    <div>
      <p className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
        Connect
      </p>
      <ul className="flex flex-col gap-1">
        {connectLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={onClick}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-1.5 rounded text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              {label} ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-12 bg-[var(--bg)] border-b border-[var(--border)]">
        <Link
          href="/"
          className="text-base font-medium tracking-wide text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
        >
          Leon
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-1 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-12 left-0 bottom-0 z-40 w-64 bg-[var(--bg)] border-r border-[var(--border)] flex flex-col gap-6 px-2 py-6 transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Site navigation"
      >
        <NavLinks onClick={() => setMobileOpen(false)} />
        <ConnectLinks onClick={() => setMobileOpen(false)} />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-56 flex-col gap-8 px-4 py-8 border-r border-[var(--border)] bg-[var(--bg)]" aria-label="Site navigation">
        <Link
          href="/"
          className="px-3 text-base font-medium tracking-wide text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
        >
          Leon
        </Link>
        <NavLinks />
        <ConnectLinks />
        <div className="mt-auto px-3">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile top-bar spacer */}
      <div className="md:hidden h-12 flex-shrink-0" />
    </>
  );
}
