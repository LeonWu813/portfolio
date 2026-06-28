**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Module ID & Name

MOD-001: Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode)

## Purpose

Persistent layout shell rendered on every page. Provides: a slim left sidebar containing the wordmark "Leon", primary navigation links, and a "Connect" block with social/contact links; a footer rendered below the main content area; and a dark mode toggle with blocking inline script and localStorage persistence.

## Context

**Business problem:** The site must give technical recruiters a fast, credible picture of Leon's engineering ability. The layout shell is the frame within which every page is experienced. It must present navigation, identity (wordmark), and contact access from every page, and demonstrate frontend and accessibility skills by being responsive, keyboard-navigable, and visually consistent. From PRD Goal 3: "Make contact and resume access effortless from any page." From PRD Goal 4: "Have the site itself serve as evidence of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from the PRD govern this module:

- Every page must include a persistent slim left sidebar containing the wordmark "Leon", primary navigation links, and a "Connect" block with LinkedIn, GitHub, and Email links.
- Mobile: sidebar collapses into a top bar or hamburger menu. Connect block is accessible from the collapsed menu or relocated to footer on mobile.
- The dark mode toggle must be reachable from the sidebar on desktop and from the mobile top bar or hamburger menu on small screens.
- Footer: single line "Made by Leon · {current year}", rendered below main content on every page.
- Dark mode: class-based (`dark` on `<html>`), defaults to system preference (`prefers-color-scheme`), persists overrides in `localStorage`.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog or blog infrastructure.
- No internationalization (i18n) — English only.
- No X/Twitter or additional social links beyond LinkedIn, GitHub, and Email unless Leon later requests them.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.2. Requirements are drawn directly from PRD sections 2, 3, and 6.

## Requirements

- The sidebar contains, in order: the wordmark "Leon", primary navigation links (Home, Projects, Experience, About, Skills, Contact), and a "Connect" block with LinkedIn, GitHub, and Email links.
- Navigation link order: Home (/), Projects (/projects), Experience (/experience), About (/about), Skills (/skills), Contact (/contact).
- Connect block link order: LinkedIn (https://www.linkedin.com/in/leon-wu-tsan-yu/), GitHub (https://github.com/LeonWu813), Email (leon.wu.tsan.yu@gmail.com).
- All Connect block links are external links and must include `target="_blank" rel="noopener noreferrer"`.
- On mobile, the sidebar collapses into a top bar or hamburger menu; the Connect block is accessible from the collapsed menu or relocated to the footer on mobile.
- The dark mode toggle is reachable from the sidebar on desktop and from the mobile top bar or hamburger menu on small screens.
- Dark mode uses Tailwind CSS `dark:` variant with class-based strategy (`class="dark"` on `<html>`).
- Default theme is system preference via `prefers-color-scheme`; overrides persist in `localStorage`.
- A blocking inline `<script>` tag is injected into `<html>` as the first child of the `<html>` element in `layout.tsx`, written via `dangerouslySetInnerHTML`, to set the `dark` class before React hydrates.
- The ThemeToggle Client Component writes to `localStorage` and toggles the class on `document.documentElement`. No other component reads or writes theme state.
- Tailwind v4 dark mode variant is registered in `globals.css`: `@variant dark (&:where(.dark, .dark *));`.
- Roboto is loaded via `next/font/google` in `layout.tsx` with weights 400, 500, 700; `subsets: ['latin']`; `display: 'swap'`; `variable: '--font-roboto'`. No `@import url()` for Google Fonts anywhere in the codebase.
- Remove the Geist and Geist_Mono font imports that the Next.js scaffold includes by default.
- No `output: 'export'` in `next.config.ts`. Standard Node server deployment.
- Footer text: "Made by Leon · {current year}" (current year rendered dynamically).
- Favicon: copy `favicon.ico` and `apple-touch-icon.png` from `asset/favicon_io/` to `site/app/` — Next.js App Router generates correct `<link>` tags automatically.
- Semantic HTML throughout: `<nav>`, `<main>`, `<aside>`, `<footer>` used appropriately.
- All interactive elements (nav links, toggle, hamburger) are keyboard-navigable with visible focus states.
- Sufficient color contrast on all text (WCAG AA minimum; AAA preferred for body text).
- No shadcn/ui — sidebar is built from scratch with Tailwind + useState.
- Sidebar toggle and ThemeToggle are the only Client Components in this module. Layout and page files are Server Components.
- `app/globals.css` must remove the `@import url()` Google Fonts line and add `@variant dark (&:where(.dark, .dark *));`.
- Color tokens defined in PRD section 2: background `#f2f0ef`, primary accent `#b2ac88`, secondary accent `#4b6e48`, muted `#898989`, body text `#1a1a1a`.

## Input / Output Contract

**Input:**
- `children: React.ReactNode` — page content rendered in the main content area to the right of the sidebar.
- Browser `localStorage` key (read by the blocking inline script and the ThemeToggle) — key name: `theme`, values: `"dark"` or `"light"`.
- Browser `prefers-color-scheme` media query (read by the blocking inline script as fallback when no `localStorage` value exists).

**Output:**
- Rendered HTML structure: `<html>` with optional `class="dark"` → `<body>` → `<aside>` (sidebar) + `<main>` (page content) + `<footer>`.
- Sidebar: wordmark "Leon", nav links (6 items), Connect block (3 links), ThemeToggle.
- Footer: "Made by Leon · {current year}".
- CSS custom properties for color tokens available globally via `globals.css`.
- Roboto font applied as CSS variable `--font-roboto` globally.

## Dependencies

- none (this is the root shell; all other modules depend on it)

## Acceptance Criteria

- AC-001: The system shall render a persistent sidebar containing the wordmark "Leon", navigation links in the specified order, and the Connect block on every page when viewed on a desktop viewport.
- AC-002: The system shall collapse the sidebar into a top bar or hamburger menu when viewed on a mobile viewport, with the Connect block accessible from the collapsed menu or footer.
- AC-003: The system shall apply the `dark` class to `<html>` before React hydration when the blocking inline script reads `localStorage.theme === "dark"` or when no `localStorage` value exists and `prefers-color-scheme: dark` is active.
- AC-004: The system shall persist the user's theme override in `localStorage` and apply it on subsequent page loads when the ThemeToggle is activated.
- AC-005: The system shall render the footer with "Made by Leon · {current year}" below the main content area on every page.
- AC-006: The system shall serve the favicon and apple-touch-icon via the Next.js App Router file convention (files placed in `site/app/`) without manual `<link>` tags.
- AC-007: The system shall load Roboto (weights 400, 500, 700) via `next/font/google` in `layout.tsx` with no `@import url()` in any CSS file.
- AC-008: The system shall register `@variant dark (&:where(.dark, .dark *));` in `globals.css` so that `dark:` Tailwind utility classes compile correctly.
- AC-009: The system shall make all navigation links and the ThemeToggle operable by keyboard with visible focus states.
- AC-010: The system shall apply `target="_blank" rel="noopener noreferrer"` to all Connect block external links (LinkedIn, GitHub, Email mailto).
