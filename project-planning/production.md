**Last Synced from PRD Revision**: 1.2 | **Last Updated**: 2026-06-28

---

## Project Summary

A personal portfolio website for Tsan-Yu Wu (Leon), full-stack engineer and CS master's student at Northeastern, currently seeking a Summer 2026 software engineering internship (full-stack, frontend, or backend). The site presents Leon's three flagship projects, work history, and technical skills in a clean, minimal, recruiter-friendly format.

**Goals:**
1. Give technical recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page.
2. Showcase three strong projects as full case studies, each reachable in one click from the projects grid.
3. Make contact and resume access effortless from any page.
4. Have the site itself serve as evidence of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious.

**Target Audience:**
- Primary: Technical recruiters and engineering hiring managers evaluating internship candidates.
- Secondary: Engineers who may follow linked GitHub repos.

**Success Criteria:**
- The top three projects, each showing role and stack, are visible without scrolling on the Projects page.
- Every project links to a working live demo and a GitHub repository.
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
| Markdown parser | marked | For rendering case study .md files |
| Deployment | Vercel | Standard Node.js server; no output: 'export' |

---

## Architecture

**Layout:** Persistent slim left sidebar containing the wordmark "Leon", primary navigation links, and a "Connect" block with social/contact links. Main content area to the right of the sidebar: single column, comfortable line length (~65–75 characters), generous top and bottom padding between sections.

**Routing:** All routes are static or statically generated at build time. App Router file-based routing under `site/app/`.

| Route | Page |
| --- | --- |
| / | Home |
| /projects | Projects grid |
| /projects/marketing-analytics | Marketing Analytics detail |
| /projects/multi-agent-system | Multi-Agent System detail |
| /projects/tabvault | TabVault detail |
| /experience | Experience |
| /about | About |
| /skills | Skills |
| /contact | Contact |

**Project detail pages:** Three project detail pages are collapsed into a single `app/projects/[slug]/page.tsx` dynamic route. `generateStaticParams` returns all three slugs from the data file. `dynamicParams = false` ensures unknown slugs return 404. `params` is `Promise<{ slug: string }>` and must be awaited.

**Data files:** Project records, experience entries, and education entries are defined as TypeScript data files. Case study prose is read from markdown files on disk via `fs.readFileSync` and parsed with `marked`.

**Theme:** Class-based dark mode. `dark` class on `<html>` is the single source of truth. A blocking inline `<script>` in `layout.tsx` sets the class before React hydrates by reading `localStorage` and falling back to `prefers-color-scheme`. The ThemeToggle Client Component writes to `localStorage` and toggles the class on `document.documentElement`.

**Color Palette:**

| Token | Value | Usage |
| --- | --- | --- |
| Background | `#f2f0ef` | Off-white/cream background |
| Primary accent | `#b2ac88` | CTA buttons, links, active nav state |
| Secondary accent | `#4b6e48` | Status badges, hover states |
| Muted | `#898989` | Secondary text, borders, muted elements |
| Body text | `#1a1a1a` | Near-black body text |

**Assets:**

| Asset | Location |
| --- | --- |
| Favicon files | `asset/favicon_io/` — copy `favicon.ico` and `apple-touch-icon.png` to `site/app/` |
| Resume PDF | `asset/Leon_cv.pdf` — copy to `site/public/Leon_cv.pdf` |
| Case study content | `asset/content/case-study-marketing-analytics.md`, `asset/content/case-study-multi-agent-system.md`, `asset/content/case-study-tabvault.md` |
| Site copy | `asset/content/site-copy.md` |
| Experience content | `asset/content/experience.md` |

**SEO / Open Graph:** Every page exports a `metadata` object (Next.js Metadata API). Title format: `"{Page Name} — Leon Wu"`. Every page includes `description`, `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, and a canonical URL tag.

[AMBIGUITY: PRD section 6 lists a social preview OG image (1200x630px) as a still-needed asset with no confirmed value — canonical URL and og:image values cannot be fully populated until the domain name and OG image are confirmed. PM must provide the domain and OG image before production deploy.]

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
- Case studies rendered from markdown files via `fs.readFileSync` (resolved via `path.join(process.cwd(), '../asset/content/', filename)`) and parsed with `marked`. Do not inline prose as TypeScript strings.
- Favicon: copy `favicon.ico` and `apple-touch-icon.png` from `asset/favicon_io/` directly into `site/app/` — Next.js App Router generates correct `<link>` tags automatically. Do not place in `public/` with manual link tags.
- Add `export const dynamicParams = false` in `app/projects/[slug]/page.tsx` to return 404 for unknown slugs.
- Server Components by default; `use client` only for Sidebar toggle and ThemeToggle.
- External links always get `target="_blank" rel="noopener noreferrer"`.

---

## Module Index

| MOD-ID | Module Name | Directory | Description |
| --- | --- | --- | --- |
| MOD-001 | Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) | mod-site-shell | Persistent layout shell: left sidebar with wordmark, navigation, and Connect block; footer; dark mode toggle with blocking inline script and localStorage persistence. |
| MOD-002 | Home Page | mod-home | Hero screen with greeting headline, role subtitle, bio, current status line, and primary CTA linking to LinkedIn. |
| MOD-003 | Projects Grid Page | mod-projects-grid | Grid of three project cards showing name, tagline, description, tags, status badge, and action links; responsive 1–3 column layout. |
| MOD-004 | Project Detail: Marketing Analytics | mod-project-marketing | Detail page for the Marketing Analytics Platform at /projects/marketing-analytics; renders case study markdown with header metadata and links. |
| MOD-005 | Project Detail: Multi-Agent System | mod-project-multi-agent | Detail page for the Multi-Agent Software Development System at /projects/multi-agent-system; renders case study markdown with header metadata and links. |
| MOD-006 | Project Detail: TabVault | mod-project-tabvault | Detail page for TabVault at /projects/tabvault; renders case study markdown with header metadata and links. |
| MOD-007 | Experience Page | mod-experience | Reverse-chronological list of professional roles and education entries. |
| MOD-008 | About Page | mod-about | Short narrative about Leon's pivot story, two body paragraphs verbatim from site-copy.md, and education block. |
| MOD-009 | Skills Page | mod-skills | Technical skills listed by category as chip/badge elements, scannable at a glance. |
| MOD-010 | Contact Page | mod-contact | Contact page with real email address, LinkedIn, GitHub links, and resume PDF download. |
