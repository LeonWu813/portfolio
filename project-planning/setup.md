# Setup Guide — Leon's Portfolio Website

All shell commands in this guide are executed from `site/` unless stated otherwise.

---

## Runtime Requirements

| Tool | Required | Verified on this machine |
|------|----------|--------------------------|
| Node.js | >= 20.x LTS | v24.14.1 |
| npm | >= 10.x | 11.11.0 |

No other runtimes are needed. There is no database, no Redis, no Docker, and no backend server — this is a fully static Next.js site deployed to Vercel.

---

## Repository Layout

```
portfolio/                  ← repo root
├── asset/                  ← all source content (do not edit during build)
│   ├── content/
│   │   ├── case-study-marketing-analytics.md
│   │   ├── case-study-multi-agent-system.md
│   │   ├── case-study-tabvault.md
│   │   ├── site-copy.md
│   │   ├── experience.md
│   │   └── skills.md
│   ├── favicon_io/
│   │   ├── favicon.ico         ← already copied to site/app/favicon.ico
│   │   ├── apple-touch-icon.png
│   │   └── site.webmanifest
│   └── Leon_cv.pdf             ← already copied to site/public/Leon_cv.pdf
├── project-planning/           ← all planning docs
└── site/                       ← Next.js 16.2.9 scaffold (work here)
    ├── app/
    │   ├── favicon.ico         ← served via App Router file conventions
    │   ├── apple-touch-icon.png
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── about/
    │   ├── contact/
    │   ├── experience/
    │   ├── projects/
    │   │   ├── marketing-analytics/   ← to be deleted; replace with [slug]/
    │   │   ├── multi-agent-system/    ← to be deleted
    │   │   └── tabvault/             ← to be deleted
    │   └── skills/
    ├── public/
    │   └── Leon_cv.pdf
    ├── package.json
    └── tsconfig.json
```

**Path alias**: `@/*` maps to `site/`. Use it for all cross-directory imports. Do not use `../../` chains except within the same feature directory.

**Case study content path**: `path.join(process.cwd(), '../asset/content/', filename)` resolves correctly when Next.js is run from `site/`. Alternatively, copy `.md` files into `site/content/` if you prefer to keep them inside the project root.

---

## Installing Dependencies

Dependencies are already installed (`node_modules/` is present in `site/`). If you ever need to reinstall from scratch:

```bash
cd site
npm install
```

`marked` (v18.0.5) is already installed as a runtime dependency for server-side markdown parsing on the project detail pages.

---

## Running the Dev Server

```bash
cd site
npm run dev
```

Opens at `http://localhost:3000` with Turbopack hot reload.

---

## Running a Production Build

```bash
cd site
npm run build
```

Output goes to `site/.next/`. A successful run prints all static routes and their sizes. The build will warn about the `@import url(...)` line in `globals.css` — that warning is resolved by MOD-001 (see Scaffold Cleanup below).

---

## Running Lint

```bash
cd site
npm run lint
```

Uses ESLint with `eslint-config-next`. The scaffold currently passes with zero errors or warnings.

---

## Scaffold Cleanup Required Before MOD-001 Work

The following items exist in the scaffold and must be removed as the first task of MOD-001. They are not bugs that block the dev server or build — but they must be gone before MOD-001 is considered complete.

### 1. Remove Geist font imports from `site/app/layout.tsx`

The scaffold imports `Geist` and `Geist_Mono` from `next/font/google`. These must be deleted entirely. Replace with a `Roboto` import:

```ts
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});
```

Apply the variable to `<html>` and remove all `geistSans.variable` / `geistMono.variable` references.

### 2. Remove the Google Fonts `@import` line from `site/app/globals.css`

Line 2 of `globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
```

Delete this line. Font loading is handled exclusively by `next/font/google` in `layout.tsx`. The `--font-sans` entry in `@theme inline` should also be updated to reference `--font-roboto` once the variable is applied.

### 3. Delete the three static project detail directories and replace with `[slug]`

```
site/app/projects/marketing-analytics/   ← delete
site/app/projects/multi-agent-system/    ← delete
site/app/projects/tabvault/             ← delete
```

Replace with a single `site/app/projects/[slug]/page.tsx` dynamic route. See MOD-001 spec and the Tech Lead recommendation in `project-planning/status.md`.

### 4. Add `@variant dark` to `globals.css`

Tailwind v4 requires explicit variant registration for class-based dark mode. Add this line after the `@import "tailwindcss"` line:

```css
@variant dark (&:where(.dark, .dark *));
```

Without this, all `dark:` utility classes compile to empty rules.

### 5. Add the blocking theme script to `layout.tsx`

The dark mode toggle requires a synchronous inline script as the first child of `<html>` to prevent a hydration flash. See the Tech Lead review in `project-planning/status.md` for the required pattern using `dangerouslySetInnerHTML`.

---

## Assets Already in Place

The following assets were copied from `asset/` into the scaffold before this setup guide was written:

| Asset | Location in scaffold | How it is served |
|-------|---------------------|-----------------|
| `favicon.ico` | `site/app/favicon.ico` | App Router file convention — auto-generates `<link>` tags |
| `apple-touch-icon.png` | `site/app/apple-touch-icon.png` | App Router file convention |
| `favicon-16x16.png` | `site/public/` | Static file (fallback) |
| `favicon-32x32.png` | `site/public/` | Static file (fallback) |
| `site.webmanifest` | `site/public/` | Static file |
| `Leon_cv.pdf` | `site/public/Leon_cv.pdf` | Plain `<a href="/Leon_cv.pdf" download>` — do not use `next/link` |

---

## Vercel Deployment

No configuration file is needed. Connect the GitHub repo to Vercel and set the **Root Directory** to `site`. Vercel detects Next.js automatically. No `output: 'export'` setting — see Tech Lead recommendation in `project-planning/status.md`.

---

## Setup Confirmation

This setup guide was written after verification. All steps above were confirmed against the live scaffold on 2026-06-28. You do not need to repeat verification — proceed directly to MOD-001.
