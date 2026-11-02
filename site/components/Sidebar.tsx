"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    href: "/",
    label: "Home",
    shortcut: 1,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    shortcut: 2,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    href: "/experience",
    label: "Experience",
    shortcut: 3,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    href: "/skills",
    label: "Skills",
    shortcut: 4,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    shortcut: 5,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    shortcut: 6,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 8l10 6 10-6" />
      </svg>
    ),
  },
  {
    href: "/slideshow",
    label: "Slideshow",
    shortcut: 7,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    ),
  },
];

const SLIDESHOW_HREF = "/slideshow";

// CONV-006: record the return point, request full screen, all inside the caller's event handler.
function openSlideshow(router: ReturnType<typeof useRouter>) {
  const fs = document.fullscreenEnabled;
  try {
    sessionStorage.setItem(
      "slideshow-return",
      JSON.stringify({ path: location.pathname, t: Date.now(), fs }),
    );
  } catch {}
  if (fs) {
    try {
      document.documentElement.requestFullscreen().catch(() => {});
    } catch {}
  }
  router.push(SLIDESHOW_HREF);
}

const connectLinks = [
  { href: "https://www.linkedin.com/in/leon-wu-tsan-yu/", label: "LinkedIn" },
  { href: "https://github.com/LeonWu813", label: "GitHub" },
  { href: "mailto:leon.wu.tsan.yu@gmail.com", label: "Email" },
];

function NavLinks({ onClick }: { onClick?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex flex-col gap-1">
        {navLinks.map(({ href, label, icon, shortcut }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={(e) => {
                  if (href === SLIDESHOW_HREF && !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)) {
                    e.preventDefault();
                    openSlideshow(router);
                  }
                  onClick?.();
                }}
                className={`group flex items-center justify-between rounded-lg p-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${isActive
                  ? "bg-[var(--text)] text-[var(--bg)]"
                  : "text-[var(--text)] hover:bg-[var(--hover)]"
                  }`}
              >
                <span className="flex items-center gap-2 font-medium">
                  {icon}
                  {label}
                </span>
                <span
                  className={`hidden size-5 place-content-center rounded-sm border text-xs font-medium lg:grid ${isActive
                    ? "border-[var(--text-muted)] bg-[var(--bg)] text-[var(--text-muted)]"
                    : "border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] group-hover:border-[var(--text-muted)] opacity-80"
                    }`}
                  title={`Shortcut key: ${shortcut}`}
                >
                  {shortcut}
                </span>
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
    <div className="flex flex-col gap-1">
      <span className="px-2 text-xs font-medium leading-relaxed text-[var(--text-muted)]">
        Online
      </span>
      <ul className="flex flex-col gap-1">
        {connectLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={onClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 rounded-lg p-2 text-sm font-medium text-[var(--text)] hover:bg-[var(--hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              {label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProfileSection() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-lg p-2 transition-colors hover:bg-[var(--hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
    >
      <img
        src="/head.png"
        alt="Leon Wu"
        className="w-10 h-10 rounded-full flex-shrink-0 object-cover border border-[var(--border)]"
      />
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-semibold tracking-tight text-[var(--text)] leading-tight truncate">
          Leon Wu
        </span>
        <span className="text-xs text-[var(--text-muted)] leading-tight truncate">
          Full-Stack Software Engineer
        </span>
      </div>
    </Link>
  );
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const onSlideshow = pathname === SLIDESHOW_HREF;

  useEffect(() => {
    if (onSlideshow) return;
    const handler = (e: KeyboardEvent) => {
      if (document.querySelector("dialog[open]")) return;
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement).isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const link = navLinks.find((l) => String(l.shortcut) === e.key);
      if (!link) return;
      if (link.href === SLIDESHOW_HREF) openSlideshow(router);
      else router.push(link.href);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router, onSlideshow]);

  if (onSlideshow) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed bottom-5 right-5 z-10 h-20 w-[120px] pointer-events-none bg-[url('/Subject.png')] bg-contain bg-center bg-no-repeat"
      />
      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 h-12 bg-[var(--surface)] border-b border-[var(--border)]">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] rounded"
        >
          Leon Wu
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="p-2 rounded-lg text-[var(--text)] hover:bg-[var(--hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer backdrop */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-12 left-0 bottom-0 z-40 w-64 bg-[var(--surface)] border-r border-[var(--border)] flex flex-col gap-4 p-3 transition-transform duration-200 ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        aria-label="Site navigation"
      >
        <ProfileSection />
        <NavLinks onClick={() => setMobileOpen(false)} />
        <hr className="border-[var(--border)]" />
        <ConnectLinks onClick={() => setMobileOpen(false)} />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex fixed top-0 left-0 h-full w-64 flex-col gap-4 p-3 border-r border-[var(--border)] bg-[var(--surface)]"
        aria-label="Site navigation"
      >
        <ProfileSection />
        <NavLinks />
        <hr className="border-[var(--border)]" />
        <ConnectLinks />
        <div className="mt-auto">
          <ThemeToggle />
        </div>
      </aside>
    </>
  );
}
