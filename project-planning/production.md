**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Project Summary

A personal portfolio website for Tsan-Yu Wu (Leon), full-stack engineer and CS master's student at Northeastern, currently seeking a 2026/2027 software engineering internship (full-stack, frontend, or backend). The site presents Leon's four flagship projects, work history, and technical skills in a clean, minimal, recruiter-friendly format.

**Goals:**
1. Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page.
2. Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar.
3. Make contact and resume access effortless from any page.
4. Have the site itself serve as evidence of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious.
5. Give Leon a ready-to-present interview deck on the site, one click or one key press from any page.

**Target Audience:**
- Primary: Technical recruiters and engineering hiring managers evaluating internship candidates.
- Secondary: Engineers who may follow linked GitHub repos.

**Success Criteria:**
- All four projects are visible in the projects sidebar without scrolling on a standard laptop viewport.
- Every project links to its GitHub repository when that repository is public and, where one exists, to a working live product (a website or an App Store listing).
- The site loads fast, works well on mobile, and passes basic WCAG accessibility checks.
- A visitor can reach Leon's email, LinkedIn, GitHub, and resume PDF from any page.

---

## Tech Stack

| Component | Name + Version | Notes |
| --- | --- | --- |
| Framework | Next.js 16.2.9 | App Router |
| Language | TypeScript | Throughout |
| Styling | Tailwind CSS v4 | Class-based dark mode |
| Font | Roboto | Via next/font/google; weights 400, 500, 700 |
| Deployment | Vercel | Standard Node.js server; no output: 'export' |

---

## Architecture

**Layout:** Persistent slim left sidebar (w-64, fixed) containing:
- Profile section: LW initials circle (accent-colored), name "Leon Wu", subtitle "Full-Stack Software Engineer".
- Primary navigation links with SVG icons and keyboard shortcut badges.
- Horizontal rule separator.
- "Online" block with social/contact links and external link icons.
- Theme toggle at the bottom (desktop only).

Main content area to the right of the sidebar (`md:ml-64`): each page controls its own max-width and padding. The root `<main>` has no padding or max-width of its own.

**No footer.** The footer requirement has been removed.

**Routing:** All routes are static or statically generated at build time. App Router file-based routing under `site/app/`.

| Route | Page |
| --- | --- |
| / | Home |
| /projects | Redirects to /projects/multi-agent-system |
| /projects/siteplus | SitePlus+ detail |
| /projects/multi-agent-system | Multi-Agent System detail |
| /projects/tabvault | TabVault detail |
| /projects/projectday | ProjectDay detail |
| /experience | Experience |
| /about | About |
| /skills | Skills |
| /contact | Contact |
| /slideshow | Slideshow (full-screen interview deck) |

**Project detail pages:** Four project detail pages are collapsed into a single `app/projects/[slug]/page.tsx` dynamic route. `generateStaticParams` returns all four slugs from the `projects` array. `dynamicParams = false` ensures unknown slugs return 404. `params` is `Promise<{ slug: string }>` and must be awaited.

**Data files:** Project records, experience entries, and education entries are defined as TypeScript data files. Each project record is a `ProjectEntry` (PRD section 5: `ProjectLink` with `name`, `label` and `href`; `ProjectSection` with `items`; `featureImage`, `featureImageAlt` and `featureImageCaption`) in its own record file `site/data/projects/<slug>.ts`; the ordered `projects` array in `site/data/projects-data.ts` holds them (CONV-005).

**Theme:** Class-based dark mode. `dark` class on `<html>` is the single source of truth. A blocking inline `<script>` in `layout.tsx` sets the class before React hydrates by reading `localStorage` and falling back to `prefers-color-scheme`. The ThemeToggle Client Component writes to `localStorage` and toggles the class on `document.documentElement`.

**Design reference:** onur.dev layout and IBM Carbon Design System colors.

**Color Palette — IBM Carbon Design System:**

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

Active nav item: `bg-[var(--text)] text-[var(--bg)]` (dark bg, light text in light mode; inverted in dark mode).

**Assets:**

| Asset | Location |
| --- | --- |
| Favicon files | `asset/favicon_io/` — copy `favicon.ico` and `apple-touch-icon.png` to `site/app/` |
| Resume PDF | `asset/Leon_cv.pdf` — copy to `site/public/Leon_cv.pdf` (replaced 2026-11-01 with Leon's newer CV; the file at commit cfa3367 is the one served) |
| Case study content | `asset/content/case-study-*-detailed.md` |
| Multi-agent feature image | `asset/diagrams/multi-agent-horizontal.png` (source: `asset/diagrams/multi-agent-horizontal.html`) |
| ProjectDay case study | `asset/content/case-study-projectday-detailed.md` |
| Site copy | `asset/content/site-copy.md` |
| Experience content | `asset/content/experience.md` |
| Skills content | `asset/content/skills.md` |
| Domain | https://www.leon-wu.com |
| SitePlus+ screenshots | Shown in the SitePlus+ Images section (PRD section 4.3) |
| TabVault screenshots | Shown in the TabVault Images section (PRD section 4.5) |
| ProjectDay screenshots | `asset/screenshots/projectday/` (five 1206x2622 iPhone screenshots of demo data, cleared for publishing; all five are used, see PRD sections 4.6 and 4.11) |
| Interview deck copy | `asset/content/interview-deck.md` |
| Seattle photos for the slideshow | `site/public/IMG_6875.JPG` (snowboarding), `site/public/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG` (bouldering) |
| Slideshow design | `project-planning/design/ux-team/` at commit ac1a07d, approved by Leon on 2026-11-01 (`status.md` Decisions) |

**SEO / Open Graph:** Every page exports a `metadata` object (Next.js Metadata API). Title format: `"{Page Name} — Leon Wu"`. Every page includes `description`, `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, and a canonical URL tag.

Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.

The site names Leon "Leon Wu": in the sidebar, the mobile wordmark, page titles, and wherever page text or a meta tag gives his full name. The full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear on the site. The CV PDF served at /Leon_cv.pdf is outside this rule.

Social preview image: [ASSET NEEDED — 1200×630px]

**Deployment:** Vercel. Zero-config deploys, automatic HTTPS, global CDN. Connect GitHub repo to Vercel; every push to `main` triggers production deploy. Domain: www.leon-wu.com. Configure via Vercel domain settings.

**Still needed — blocking:** None.

**Still needed — non-blocking:**

| Asset | Used On | Notes |
| --- | --- | --- |
| Social preview image (OG image) | All pages (og:image) | 1200×630px; affects link previews only |
| ProjectDay App Store link | /projects/projectday | Add once the App Store listing is live |

---

## Shared Conventions

Build: npm run build
Lint:  npm run lint
Test:  (none — static site, no automated test suite defined)

*Note: Commands assume execution from the `site/` subdirectory where the Next.js scaffold lives.*

**Tech Lead Shared Conventions (all modules must follow):**

1. All route layouts and page components are Server Components by default. Add `'use client'` only when a component requires `useState`, `useEffect`, or browser APIs. The dark mode toggle and mobile nav toggle are the only expected Client Components in MOD-001. Do not mark page or layout files as client components.

2. Dynamic route pages must declare `params` as `Promise<{ slug: string }>` and always await it: `const { slug } = await params`. This applies to both page components and `generateMetadata` functions.

3. The `dark` CSS class on `<html>` is the single source of truth for the active theme. It is set by a blocking inline script in `layout.tsx` (reads `localStorage`, falls back to `prefers-color-scheme`). The Client Component toggle writes to `localStorage` and toggles the class on `document.documentElement`. No other component should read or write the theme state.

4. Tailwind v4 dark mode variant must be registered in `globals.css`: `@variant dark (&:where(.dark, .dark *));`. Theme values use CSS custom properties defined in the `.dark` block. Use `dark:` utilities freely once the variant is registered.

5. Roboto is loaded exclusively via `next/font/google` in `layout.tsx`. No `@import url()` for any Google Font anywhere in the codebase.

6. External links (LinkedIn, GitHub, live demos) must always include `target="_blank" rel="noopener noreferrer"`.

7. The resume PDF is served from `public/Leon_cv.pdf` via a plain `<a href="/Leon_cv.pdf" download="Leon_Wu_Resume.pdf">` — not `next/link`.

8. Path alias `@/*` maps to the `site/` root. Use it for all cross-directory imports. No `../../` relative imports except within the same feature directory.

9. File naming follows defaults: React component files use PascalCase (`Sidebar.tsx`, `ProjectCard.tsx`); data, utility, and config files use kebab-case (`project-data.ts`, `markdown-utils.ts`).

10. `generateStaticParams` iterates the data array — it never contains hard-coded slug strings. Adding a project means adding a record to the data file only.

**Additional conventions from Tech Lead review:**

- No `output: 'export'` in `next.config.ts` — standard Vercel Node server deployment. Leave `next.config.ts` as is or add only `reactStrictMode: true`.
- No shadcn/ui — build sidebar from scratch with Tailwind + useState.
- Favicon: copy `favicon.ico` and `apple-touch-icon.png` from `asset/favicon_io/` directly into `site/app/` — Next.js App Router generates correct `<link>` tags automatically. Do not place in `public/` with manual link tags.
- Add `export const dynamicParams = false` in `app/projects/[slug]/page.tsx` to return 404 for unknown slugs.
- Server Components by default; `use client` only for Sidebar toggle and ThemeToggle.
- External links always get `target="_blank" rel="noopener noreferrer"`.

**Adopted Conventions (PRD section 9, copied verbatim):**

- CONV-001: The shared project frame belongs to MOD-003: `site/app/projects/`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered `projects` array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-002: A project record's position in `projects` is its display order everywhere: the side panel, the mobile switcher and the Home list. `projects[0]` is the `/projects` redirect target. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-003: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-004: A `spec-update` changes only the ACs named in the triggering Sync Report. Code that differs from the spec in other ACs is reported in Engineering Progress and is not changed. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-005: A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (Tech Lead Reviews, 2026-11-01 change review, rev 1.5)
- CONV-006: Slideshow entry contract between MOD-001 and MOD-012. When the site opens the slideshow (the Slideshow nav link or key `7`), MOD-001, in the same event handler and in this order: writes `sessionStorage["slideshow-return"] = JSON.stringify({ path: location.pathname, t: Date.now(), fs })`, where `fs` is `true` when it is about to call `document.documentElement.requestFullscreen()` in the same handler (that is, when `document.fullscreenEnabled`), otherwise `false`; calls `document.documentElement.requestFullscreen()` if `document.fullscreenEnabled`, ignoring a rejection; and navigates client-side to `/slideshow`. MOD-012 reads and removes that key once on first mount. A value whose `path` starts with "/" and is not "/slideshow", and whose `t` is at most 10 seconds old, means "opened from the site": leaving returns to `path` with `router.replace`. Anything else means a direct visit: leaving goes to "/". A value without `fs` reads as `fs: false` (no request made). MOD-012 shows the "Press F for full screen" hint only while slide 1 is in a browser window and `document.fullscreenEnabled` is true. After an opening from the site with `fs: true`, it waits until full screen starts (the hint then never shows) or about 1.5 seconds pass with the browser still windowed. On any other opening it shows the hint at once, after its entrance delay. Every full-screen request the slideshow makes (`F` and the hint) targets `document.documentElement`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; hint rule changed by Leon's design decision L-2; `fs` field and hint timing from the 2026-11-01 change review rev 1.9, D1 (a) and Q6)
- CONV-007: The shell on /slideshow. On `/slideshow` the site shell renders nothing: Sidebar returns `null`, its number-key handler does nothing, and no shell image is requested (no `/head.png`, no `/Subject.png`, verified in DevTools Network). MOD-001 moves or guards the `main::after` decoration so it is not generated there. The slideshow root is a fixed full-viewport layer above the shell, owned by MOD-012. Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`. (Tech Lead Reviews, 2026-11-01 change review rev 1.7 + 1.8; T1 (b), T3 (a), T6)

---

## Module Index

| MOD-ID | Module Name | Directory | Description |
| --- | --- | --- | --- |
| MOD-001 | Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) | mod-site-shell | Persistent layout shell: left sidebar with profile section (name "Leon Wu", subtitle "Full-Stack Software Engineer"), seven navigation items (the seventh, Slideshow, opens /slideshow), and "Online" block; dark mode toggle with blocking inline script and localStorage persistence. Writes the CONV-006 slideshow entry value and keeps the shell off /slideshow (CONV-007). No footer. |
| MOD-002 | Home Page | mod-home | Hero screen with greeting headline, bio, current status line, primary CTA linking to LinkedIn, secondary CTA "Reach out", tertiary CTA "Download CV", and a projects list. |
| MOD-003 | Projects Grid Page | mod-projects-grid | /projects route and persistent split-panel layout: scrollable project list aside (title and tech string, active item highlighted) beside the active project detail; /projects redirects to /projects/multi-agent-system. Owns the shared project frame (CONV-001) and the image overlay on every project image (AC-108 to AC-110). |
| MOD-004 | Project Detail: Marketing Analytics | mod-project-marketing | Detail page for SitePlus+ at /projects/siteplus; header with H1, At-a-glance, tags, links, description pull-quote, feature image with alt text, and nine case study sections including Images. Owns site/data/projects/siteplus.ts. |
| MOD-005 | Project Detail: Multi-Agent System | mod-project-multi-agent | Detail page for the Multi-Agent Software Development System at /projects/multi-agent-system; header with H1, At-a-glance, tags, two links, description pull-quote, feature image with alt text and caption, and eight case study sections. Owns site/data/projects/multi-agent-system.ts. |
| MOD-006 | Project Detail: TabVault | mod-project-tabvault | Detail page for TabVault at /projects/tabvault; header with H1, At-a-glance, tags, one link, description pull-quote, feature image with alt text, and nine case study sections including Images. TabVault is not live. Owns site/data/projects/tabvault.ts. |
| MOD-007 | Experience Page | mod-experience | Reverse-chronological list of two professional roles (Exascend, GoFreight) and two education entries, per Leon's CV. |
| MOD-008 | About Page | mod-about | Short narrative about Leon's pivot story, two body paragraphs; no photo and no education block on this page. |
| MOD-009 | Skills Page | mod-skills | Technical skills in six groups as chip/badge elements, scannable at a glance. |
| MOD-010 | Contact Page | mod-contact | Contact page with real email address, LinkedIn, GitHub links, and resume PDF download; no phone number. |
| MOD-011 | Project Detail: ProjectDay | mod-project-projectday | Detail page for ProjectDay at /projects/projectday; renders case study content (seven sections including Images) with header metadata, a three-screen feature image and no external links. Owns site/data/projects/projectday.ts and site/public/projectday-*. |
| MOD-012 | Interview Slideshow | mod-slideshow | Full-screen interview slideshow at /slideshow: three slides about Leon, a project menu and four project tracks, designed by the design team (project-planning/design/ux-team/ at commit ac1a07d), with copy from asset/content/interview-deck.md. Owns site/app/slideshow/. |
