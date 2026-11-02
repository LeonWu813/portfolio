**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-001: Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode)

## Purpose

Persistent layout shell rendered on every page. Provides: a persistent slim left sidebar (w-64, fixed) containing the profile section, seven primary navigation links with SVG icons and keyboard shortcut badges, and an "Online" block with social/contact links; the mobile top bar and drawer; and a dark mode toggle with blocking inline script and localStorage persistence. No footer. Selecting the Slideshow item or pressing `7` opens the full-screen slideshow (MOD-012) through the CONV-006 contract.

## Context

**Business problem:** The site must give technical recruiters a fast, credible picture of Leon's engineering ability. The layout shell is the frame within which every page is experienced. From PRD Goal 3: "Make contact and resume access effortless from any page." From PRD Goal 4: "Have the site itself serve as evidence of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious." From PRD Goal 5: "Give Leon a ready-to-present interview deck on the site, one click or one key press from any page."

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD sections 2, 3 and 6 govern this module:

- Persistent slim left sidebar (w-64, fixed) containing: the profile section (LW initials circle (accent-colored), name "Leon Wu", subtitle "Full-Stack Software Engineer"); primary navigation links with SVG icons and keyboard shortcut badges; a horizontal rule separator; an "Online" block with social/contact links and external link icons; the theme toggle at the bottom (desktop only).
- Main content area to the right of the sidebar (`md:ml-64`): each page controls its own max-width and padding. The root `<main>` has no padding or max-width of its own.
- No footer. The footer requirement has been removed.
- Mobile: fixed top bar (h-12) shows "Leon Wu" wordmark + theme toggle + hamburger; off-canvas drawer slides in from the left; body is `h-screen overflow-hidden`; mobile content area accounts for the 48px top-bar spacer.
- Dark mode: class-based strategy (`dark` class on `<html>`). Default to `prefers-color-scheme`; persist override in `localStorage`. Toggle reachable from desktop sidebar and mobile top bar.

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog or blog infrastructure.
- Footer: Removed. No bottom bar or copyright line on any page.
- Internationalization (i18n): English only.
- Turning keyboard shortcuts off: No setting to turn off or remap the single-key shortcuts: the site's `1`–`7` (section 6) and the slideshow's `F`, `M` and number keys (section 4.11). Known accessibility limitation, accepted by Leon in revision 1.10: these keys do not fully meet WCAG 2.1.4 (Character Key Shortcuts), so a speech-input user may trigger one by speaking a word.

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD sections 2, 3, 4.11 (Opening), 6 and 9.

## Requirements

**Layout and theme (PRD section 2):**
- Sidebar (w-64, fixed) contains: profile section (LW initials circle (accent-colored), name "Leon Wu", subtitle "Full-Stack Software Engineer"); primary navigation links with SVG icons and keyboard shortcut badges; horizontal rule separator; "Online" block with social/contact links and external link icons; theme toggle at the bottom (desktop only).
- The sidebar profile subtitle reads "Full-Stack Software Engineer" wherever the profile section shows (desktop sidebar, and the mobile drawer if it shows the profile), on one line, not truncated, at 1280px and at 375px wide (AC-124).
- Main content area to the right of the sidebar (`md:ml-64`): each page controls its own max-width and padding. The root `<main>` has no padding or max-width of its own.
- No footer. No bottom bar or copyright line appears on any page.
- Design reference: onur.dev layout and IBM Carbon Design System colors. Color: IBM Carbon White theme (light) and G100 theme (dark).
- Color palette (IBM Carbon):

  | Token | Light (White theme) | Dark (G100 theme) | Role |
  | --- | --- | --- | --- |
  | `--bg` | `#ffffff` | `#161616` | Page background |
  | `--surface` | `#f4f4f4` | `#262626` | Sidebar, cards, chips |
  | `--text` | `#161616` | `#f4f4f4` | Primary text; also active nav bg |
  | `--text-muted` | `#525252` | `#c6c6c6` | Secondary text, dates, subtitles |
  | `--border` | `#e0e0e0` | `#393939` | Dividers, chip borders |
  | `--hover` | `#e8e8e8` | `#333333` | Nav/link hover background |
  | `--accent` | `#0f62fe` | `#78a9ff` | Links, focus rings, pull-quote border |
  | `--accent-hover` | `#0043ce` | `#a6c8ff` | Accent hover state |

- Active nav item: `bg-[var(--text)] text-[var(--bg)]` (dark bg, light text in light mode; inverted in dark mode).
- Typography: Roboto (Google Fonts), weights 400/500/700, `font-display: swap`. Clear hierarchy: H1 page title → H2 section headings → H3 subsections → body ~16px with generous line-height. No em dashes anywhere in site copy. Use hyphens or sentence rewrites instead.
- Mobile-first. On mobile: fixed top bar (h-12) shows "Leon Wu" wordmark + theme toggle + hamburger; off-canvas drawer slides in from the left; body is `h-screen overflow-hidden`; mobile content area accounts for the 48px top-bar spacer.
- Semantic HTML throughout (nav, main, section, article, aside). Sufficient color contrast on all text (WCAG AA minimum; AAA preferred for body text). All images have meaningful alt text (or `alt=""` for decorative). All interactive elements reachable by keyboard. Visible focus states (outline using `--accent`).
- Performance: fast initial load, aim for Lighthouse performance > 90; all routes statically generated at build time; minimal blocking scripts.
- Dark mode: class-based strategy (`dark` class on `<html>`). Default to `prefers-color-scheme`; persist override in `localStorage`. Toggle reachable from desktop sidebar and mobile top bar.

**Navigation (PRD section 3):**

| Position | Label      | Route       | Keyboard shortcut |
|----------|------------|-------------|-------------------|
| 1        | Home       | /           | `1`               |
| 2        | Projects   | /projects   | `2`               |
| 3        | Experience | /experience | `3`               |
| 4        | Skills     | /skills     | `4`               |
| 5        | About      | /about      | `5`               |
| 6        | Contact    | /contact    | `6`               |
| 7        | Slideshow  | /slideshow  | `7`               |

- Keyboard shortcuts fire on `keydown` with no modifier keys, and are suppressed when focus is on an `<input>`, `<textarea>`, or `contenteditable` element.
- The Slideshow item appears in the desktop sidebar and in the mobile drawer, with its own icon and shortcut badge like the other items. Its icon is the one in the approved slideshow design (section 4.11, Design: `slideshow-ui.md` section 14). Selecting it opens the full-screen slideshow (section 4.11), not a normal page inside the sidebar layout.
- Connect block (sidebar, present on every page), displayed below the nav separator in the sidebar under the label "Online". Three links in this order: 1. LinkedIn — https://www.linkedin.com/in/leon-wu-tsan-yu/ 2. GitHub — https://github.com/LeonWu813 3. Email — leon.wu.tsan.yu@gmail.com. Each link opens in a new tab with an external-link arrow icon.

**Keyboard Shortcuts (PRD section 6):** Number keys `1`–`7` navigate to the corresponding nav item (`7` opens the slideshow, section 4.11). Implemented as a global `keydown` listener in `Sidebar.tsx`. Suppressed when:
- Focus is on `INPUT`, `TEXTAREA`, or `contenteditable` element
- Any modifier key (`metaKey`, `ctrlKey`, `altKey`) is held
- The slideshow is open (inside it, keys work as listed in section 4.11)
- An image overlay is open on a project page (section 4.2): the keys do nothing until it closes

**Opening the slideshow (PRD section 4.11, Opening):** Selecting the Slideshow nav item or pressing `7` puts the browser in full screen, where the browser supports it, and shows slide 1. Where full screen is not available (for example on iPhone), the slideshow fills the browser window instead.

**Adopted conventions that bind this module (PRD section 9, copied verbatim):**
- CONV-006: Slideshow entry contract between MOD-001 and MOD-012. When the site opens the slideshow (the Slideshow nav link or key `7`), MOD-001, in the same event handler and in this order: writes `sessionStorage["slideshow-return"] = JSON.stringify({ path: location.pathname, t: Date.now(), fs })`, where `fs` is `true` when it is about to call `document.documentElement.requestFullscreen()` in the same handler (that is, when `document.fullscreenEnabled`), otherwise `false`; calls `document.documentElement.requestFullscreen()` if `document.fullscreenEnabled`, ignoring a rejection; and navigates client-side to `/slideshow`. MOD-012 reads and removes that key once on first mount. A value whose `path` starts with "/" and is not "/slideshow", and whose `t` is at most 10 seconds old, means "opened from the site": leaving returns to `path` with `router.replace`. Anything else means a direct visit: leaving goes to "/". A value without `fs` reads as `fs: false` (no request made). MOD-012 shows the "Press F for full screen" hint only while slide 1 is in a browser window and `document.fullscreenEnabled` is true. After an opening from the site with `fs: true`, it waits until full screen starts (the hint then never shows) or about 1.5 seconds pass with the browser still windowed. On any other opening it shows the hint at once, after its entrance delay. Every full-screen request the slideshow makes (`F` and the hint) targets `document.documentElement`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; hint rule changed by Leon's design decision L-2; `fs` field and hint timing from the 2026-11-01 change review rev 1.9, D1 (a) and Q6)
- CONV-007: The shell on /slideshow. On `/slideshow` the site shell renders nothing: Sidebar returns `null`, its number-key handler does nothing, and no shell image is requested (no `/head.png`, no `/Subject.png`, verified in DevTools Network). MOD-001 moves or guards the `main::after` decoration so it is not generated there. The slideshow root is a fixed full-viewport layer above the shell, owned by MOD-012. Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; T1 (b), T3 (a), T6)

**Engineering rules (Tech Lead change review rev 1.7 + 1.8, 0051840, and rev 1.9, b8395f1):**
- CONV-006 is written with the `fs` field: `fs` is `true` when `document.fullscreenEnabled` and MOD-001 is about to call `requestFullscreen()` in the same handler, otherwise `false`.
- MOD-001 calls `document.documentElement.requestFullscreen()` synchronously in the Slideshow link's click handler and in the `7` key handler, before navigating, and only `if (document.fullscreenEnabled)`. It catches a rejected promise and does nothing with it. No shared helper file. MOD-001 feature-detects `document.fullscreenEnabled` and does nothing else (no webkit prefix).
- CONV-007 with both bails: `Sidebar.tsx` (the `/slideshow` bail) returns `null` on `/slideshow` (its hooks still run before the early return), and its number-key handler (`Sidebar.tsx:177-187`) does nothing on `/slideshow` and does nothing while `document.querySelector("dialog[open]")` exists; both bails run before the `router.push` in the number-key handler.
- The `main::after` decoration (`globals.css:72-81`, `/Subject.png`) is moved or guarded so it is not generated on `/slideshow`; no `/head.png` is requested there either (an `<img>` loads even when hidden with CSS).
- AC-124 needs no size or layout change: MOD-001 changes only the text and keeps `truncate` as a safety net. QA checks `scrollWidth <= clientWidth` on the subtitle span at 1280 and 375 px wide.
- AC-125 at `layout.tsx:16`: the root description names "Leon Wu" in place of "Tsan-Yu (Leon) Wu" and keeps the rest of the text.
- Slideshow icon: the one in `project-planning/design/ux-team/slideshow-ui.md` section 14, at commit ac1a07d (approved design, status.md Decisions "Slideshow design approval (rev 1.9)").
- Copy `asset/Leon_cv.pdf` at commit cfa3367 to `site/public/Leon_cv.pdf`.
- This module owns every unclaimed file in `site/public/` (Module Map Project files line), including the About photos, `head.png`, `Subject.png`, the two Seattle photos used on slide 3 of the slideshow, and `og-image.png` when it is supplied (open, non-blocking).

**Technical setup carried from earlier syncs (production.md Shared Conventions; still in force):**
- A blocking inline `<script>` tag is injected into `<html>` as the first child of the `<html>` element in `layout.tsx`, written via `dangerouslySetInnerHTML`, to set the `dark` class before React hydrates.
- The ThemeToggle Client Component writes to `localStorage` and toggles the class on `document.documentElement`. No other component reads or writes theme state.
- Tailwind v4 dark mode variant is registered in `globals.css`: `@variant dark (&:where(.dark, .dark *));`.
- Roboto is loaded via `next/font/google` in `layout.tsx` with weights 400, 500, 700; `subsets: ['latin']`; `display: 'swap'`; `variable: '--font-roboto'`. No `@import url()` for Google Fonts anywhere in the codebase.
- Tailwind v4 CSS cascade note: all base resets (e.g. `a { color: inherit }`) must be wrapped in `@layer base { }` to avoid unlayered CSS overriding layered utility classes.
- No `output: 'export'` in `next.config.ts`. Standard Node server deployment.
- Favicon: `favicon.ico` and `apple-touch-icon.png` in `site/app/` — Next.js App Router generates correct `<link>` tags automatically.
- No shadcn/ui — sidebar is built from scratch with Tailwind + useState. Sidebar toggle and ThemeToggle are the only Client Components in this module. Layout and page files are Server Components.

**SEO and name rule (PRD section 6):**
- Every page includes `<title>` `"{Page Name} — Leon Wu"`, a page-specific `<meta name="description">`, Open Graph and Twitter card tags, and a canonical URL tag; canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
- The site names Leon "Leon Wu": in the sidebar, the mobile wordmark, page titles, and wherever page text or a meta tag gives his full name. The full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear on the site. The CV PDF served at /Leon_cv.pdf is outside this rule.
- Resume PDF served at `/Leon_cv.pdf`, linked from Contact page and Home page CTA. File: `asset/Leon_cv.pdf` → copy to `public/Leon_cv.pdf` before deploying. The served file is replaced with the file at commit cfa3367. This CV still names tab-vault.com under the multi-agent project; Leon chose it knowing that, so the PDF's contents are outside AC-117. The CV also lists Leon's phone number, which the site's pages do not show (AC-126); the PDF's contents are outside AC-126.

## Input / Output Contract

**Input:**
- `children: React.ReactNode` — page content rendered in the main content area to the right of the sidebar.
- Browser `localStorage` key (read by the blocking inline script and the ThemeToggle) — key name: `theme`, values: `"dark"` or `"light"`.
- Browser `prefers-color-scheme` media query (read by the blocking inline script as fallback when no `localStorage` value exists).

**Output:**
- Rendered HTML structure: `<html>` with optional `class="dark"` → `<body>` → sidebar + `<main>` (page content). No footer.
- Sidebar: profile section ("Leon Wu", "Full-Stack Software Engineer"), nav links (7 items), "Online" block (3 links), ThemeToggle (desktop).
- On opening the slideshow: `sessionStorage["slideshow-return"]` written per CONV-006, a full-screen request where supported, and a client-side navigation to `/slideshow`.
- CSS custom properties for color tokens available globally via `globals.css`.
- Roboto font applied as CSS variable `--font-roboto` globally.

## Dependencies

- none (this is the root shell; all other modules depend on it)

## Acceptance Criteria

- AC-001: The system shall render a persistent sidebar containing the profile section, navigation links in the order listed in section 3, and the "Online" block on every page when viewed on a desktop viewport.
- AC-002: The system shall collapse the sidebar into a top bar and off-canvas drawer when viewed on a mobile viewport (top bar h-12 with "Leon Wu" wordmark, theme toggle and hamburger).
- AC-003: The system shall apply the `dark` class to `<html>` before React hydration when the blocking inline script reads `localStorage.theme === "dark"` or when no `localStorage` value exists and `prefers-color-scheme: dark` is active.
- AC-004: The system shall persist the user's theme override in `localStorage` and apply it on subsequent page loads when the ThemeToggle is activated.
- AC-005: The system shall render no footer: no bottom bar or copyright line appears on any page.
- AC-006: The system shall serve the favicon and apple-touch-icon via the Next.js App Router file convention (files placed in `site/app/`) without manual `<link>` tags.
- AC-007: The system shall load Roboto (weights 400, 500, 700) via `next/font/google` in `layout.tsx` with no `@import url()` in any CSS file.
- AC-008: The system shall register `@variant dark (&:where(.dark, .dark *));` in `globals.css` so that `dark:` Tailwind utility classes compile correctly.
- AC-009: The system shall make all navigation links and the ThemeToggle operable by keyboard with visible focus states.
- AC-010: The system shall apply `target="_blank" rel="noopener noreferrer"` to all "Online" block external links (LinkedIn, GitHub, Email mailto).
- AC-093: The desktop sidebar and the mobile drawer show a seventh item, "Slideshow", directly after Contact, with an icon and the shortcut badge "7", in the same style as the other six items. Selecting it opens /slideshow.
- AC-094: Pressing `7` (no modifier key, focus not in an input, textarea or contenteditable element) opens the slideshow exactly as selecting the Slideshow item does. While the slideshow is open, the number keys `1`–`7` never navigate the site; they only do what section 4.11 lists.
- AC-095: Selecting the Slideshow nav item or pressing `7` shows slide 1 with the browser in full screen in desktop Chrome, Safari and Firefox. On a browser without full-screen support (iPhone Safari), the slideshow fills the window. In both cases no sidebar, top bar or other site element is visible.
- AC-099: Esc or the close button returns to the page the slideshow was opened from, or to Home after a direct visit, with one Esc press, including while in full screen. Leaving full screen through the browser's own controls also returns to that page. Back on the site, the sidebar and keyboard shortcuts work as before.
- AC-124: The sidebar profile subtitle reads "Full-Stack Software Engineer" wherever the profile section shows (desktop sidebar, and the mobile drawer if it shows the profile), on one line, not truncated, at 1280px and at 375px wide.
- AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-001, the shell-owned copy and the served files.)
- AC-129: While the image overlay (section 4.2) is open, pressing any of `1`–`7` does nothing: the overlay stays open and the page does not change.

## Integration Points

### Integration with MOD-012 (Interview Slideshow) — Entry contract and shell
- **Contract:** CONV-006 and CONV-007, copied verbatim under Requirements. MOD-001 writes the `sessionStorage["slideshow-return"]` value (with `fs`), makes the full-screen request, navigates to `/slideshow`, and renders nothing on `/slideshow`; MOD-012 reads and removes the key once on first mount and owns the fixed full-viewport root.
- **AC:** AC-094, AC-095 and AC-099 gate QA (MOD-001 and MOD-012 are QA'd together, because AC-094, AC-095 and AC-099 need both).

### Integration with MOD-003 (Projects Split Panel) — Image overlay
- **Contract:** CONV-007 sentence "Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`." MOD-003 builds the overlay; MOD-001 owns the Sidebar bail.
- **AC:** AC-129.
