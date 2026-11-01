# /pstack:how: site shell, /slideshow and the project-page image overlay (PRD rev 1.7)

Run by: coordinator, 2026-11-01, after PM applied PRD rev 1.7 (9d6eb14) tagged [SUBSTANTIVE] [ARCHITECTURAL], before the Tech Lead change review.
Scope: site/app/layout.tsx, site/components/Sidebar.tsx and TopNav.tsx, site/app/projects/layout.tsx and [slug]/page.tsx, site/data/projects-data.ts, module_scope.py ownership, Next.js 16.2.9 docs under site/node_modules/next/dist/docs/.
Status: findings only. Nothing has been applied. The Tech Lead accepts or rejects each one.

## Overview

The site uses Next.js 16.2.9 with the App Router and React 19.2.4. It has exactly one root layout, `site/app/layout.tsx`, a Server Component. It sets the Roboto font variable and an inline theme script that adds `.dark` to `<html>` before paint (lines 19-28, 38). It makes the page a fixed-height, no-scroll frame: `body.h-screen.overflow-hidden.flex.flex-col` (line 40). Inside the body it renders `<Sidebar/>`, a 48px mobile spacer (line 43), and `main.overflow-y-auto` (line 45), the scroll container on non-project pages. Every route, including a future `/slideshow`, renders inside that `main` as `{children}`.

`Sidebar.tsx` is a Client Component holding the six-item `navLinks` array (8-74), the global number-key `keydown` listener (177-187), the mobile top bar and drawer (192-242), and the desktop sidebar (245-256). `TopNav.tsx` is dead code: nothing imports it, and it lists the items in a different order.

The project page `site/app/projects/[slug]/page.tsx` is an async, statically generated Server Component (`dynamicParams = false`, `generateStaticParams`, 30-34). It renders plain `<img>` in three places: the feature image in `<figure>`/`<figcaption>` (128-141), a single section image (157-162) and a two-column section grid (164-173). It sits inside `site/app/projects/layout.tsx`, whose panel `div.flex-1.overflow-y-auto` (line 14) is the scroll container.

Main conclusions:
- `/slideshow` should stay under the single root layout. Multiple root layouts force a full page load, which drops the user gesture full screen needs.
- The image overlay fits as a small Client Component that the server page passes plain string props to.
- The cleanest way to escape the shell, a route group, breaks the Source Path of nearly every module in the Module Map.

## Key concepts

- **Root vs nested layout.** `app/slideshow/layout.tsx` can only wrap content inside its parent; it cannot remove the Sidebar the root renders. Only a route group that moves the shell out of the root, or the shell hiding itself, escapes it.
- **Multiple root layouts mean a full page load** (`docs/01-app/03-api-reference/03-file-conventions/route-groups.md`, Caveats; `.../layout.md` 142-145). That exits full screen and loses the user activation the Fullscreen API needs.
- **User activation.** `requestFullscreen()` must run synchronously in the click or keydown handler. That handler is in `Sidebar.tsx` (MOD-001), not in `/slideshow` (MOD-012).
- **Server/Client interleaving.** A Server Component can render a Client Component with serializable props (`docs/01-app/01-getting-started/05-server-and-client-components.md` 178, 295-313).
- **Native History API** works with the router and stays in sync with `usePathname`/`useSearchParams` (`.../04-linking-and-navigating.md` 341-345). This enables "phone Back closes the overlay".
- **Static route vs searchParams.** Reading the page's `searchParams` prop makes the route dynamic (fails AC-107). `useSearchParams` client-renders up to the nearest `<Suspense>` (`docs/01-app/03-api-reference/04-functions/use-search-params.md` 80-86, 180-182).

## 1. Shell, the 7th nav item and /slideshow

```
app/layout.tsx (Server, only root layout)
 body.h-screen.overflow-hidden.flex.flex-col
   <Sidebar/> (Client)  window keydown "1".."6" → router.push      Sidebar.tsx:177-187
     mobile header (fixed z-40, md:hidden)                          :192-221
     drawer backdrop (z-30) + drawer (fixed z-40)                   :224-242
     desktop aside (fixed w-64) + <img src="/head.png">             :245-256, :156
   div.md:hidden.h-12 spacer                                        layout.tsx:43
   div.md:ml-64 > main.overflow-y-auto.pb-16                        layout.tsx:44-47
     {children}
       ├─ app/projects/layout.tsx → ProjectMobileNav (fixed z-30) + ProjectList + panel > [slug]/page
       └─ app/slideshow/page.tsx ← lands here, still inside main
```

Adding `{href:"/slideshow", label:"Slideshow", shortcut:7, icon}` to `navLinks` shows it in both the desktop sidebar and the drawer (shared `NavLinks`, 239 and 250), and the shortcut lookup at 182 picks it up. That is not enough on its own:

- **Full screen needs the gesture.** The Slideshow link needs its own click handler calling `document.documentElement.requestFullscreen?.()` synchronously before `<Link>` navigates; the `7` branch (183) needs the same before `router.push`. Target `document.documentElement`, since the slideshow does not exist yet. Client-side navigation keeps the document, so full screen survives; the shell may flash in full screen before `/slideshow` paints. iPhone Safari has no element Fullscreen API: feature-detect (a webkit prefix may be needed on older Safari, not verified).
- **Number keys while the slideshow is open (AC-094).** Sidebar is mounted on every route, so its window listener stays alive on `/slideshow`. Either it checks `usePathname() === "/slideshow"`, or Sidebar is not mounted there.
- **Hiding the shell (AC-095).** Options:
  - (a) Route group under the same root: `app/layout.tsx` keeps html/body/font/theme script; `app/(site)/layout.tsx` takes Sidebar, spacer and main; existing page folders move into `app/(site)/`; `app/slideshow/` stays outside. Still one root, so navigation stays client-side. Sidebar unmounts on `/slideshow` (listener and head.png gone). Cost: ownership (section 3).
  - (b) Keep the tree: Sidebar returns `null` (after its hooks) on `/slideshow` and its keydown handler bails; the slideshow renders `fixed inset-0` above z-40, covering the wrapper, spacer and main padding. Only `Sidebar.tsx` (MOD-001) and `site/app/slideshow/` (MOD-012) change. `usePathname` works during prerender, so the SSR HTML should contain no sidebar (reading of the docs, not tested).
  - (c) Multiple root layouts: rejected. Full page load exits full screen (breaks AC-095), and the theme script and font would be duplicated.
  - (d) Nested `app/slideshow/layout.tsx`: cannot remove the Sidebar.

MOD-012 responsibilities:
- One window keyboard listener of its own. A capture-phase listener with `stopPropagation` could block Sidebar's, but that is fragile; prefer the pathname check in Sidebar.
- Esc in full screen is consumed by the browser. "One Esc press returns" (AC-099) must come from `fullscreenchange` (fullscreenElement set → null, then navigate back). The close button calls `exitFullscreen()` then navigates, with a guard so the listener does not navigate twice.
- `F` key (direct visits) is a keydown in MOD-012, so it counts as a gesture.
- Static output: read `?project=` from `window.location.search` in an effect, or `useSearchParams` under `<Suspense>`, never the page `searchParams` prop. Export metadata with a canonical URL without the query (AC-107). Root metadata has no `metadataBase`, so use absolute URLs as `[slug]/page.tsx:51-60` does.
- Theme follows automatically under (a) and (b), because `.dark` is on `<html>`.

## 2. Image overlay (MOD-003)

`ProjectDetailPage` (page.tsx 75-182) stays a Server Component. The three `<img>` sites (130, 157, 166) become a Client Component such as `<ZoomableImage src alt className/>` with plain string props. `generateStaticParams`, `generateMetadata` and `groupItems` do not change.

The client component:
- Renders the image inside a `<button>` (Tab, Enter and Space for free, AC-108) with `cursor: zoom-in`.
- On open, measures `getBoundingClientRect()` and opens the overlay; the original stays in place at `opacity: 0`, so nothing shifts (AC-110).
- Animates a copy from the measured rectangle to the centre at `min(0.9·vw/naturalW, 0.9·vh/naturalH)`, at most ~300ms; fade only under `prefers-reduced-motion`.
- Closes on click, tap or Esc and returns focus to the button (AC-109).

Use a native `<dialog>` with `showModal()` (or a portal to `document.body`): the top layer covers the fixed Sidebar header and drawer (z-40), the desktop aside and ProjectMobileNav (z-30); `showModal()` makes the page inert and keeps Tab inside; the dialog can be named with `aria-label={alt}`.

Phone Back: `history.pushState` on open, `popstate` closes; closing by click or Esc calls `history.back()`. Same URL, so the router does not refetch.

Scroll lock: the window never scrolls (body is overflow-hidden); the panel at `projects/layout.tsx:14` is the scroll container, so locking body is a no-op. With a modal dialog, wheel events land outside the panel; believed to stay still but unverified, test it. `overscroll-behavior: contain` on the dialog helps.

Component location: `module_scope.py check project-planning/status.md mod-projects-grid 'site/app/projects/[slug]/ImageZoom.tsx'` → exit 0 (MOD-003 owns it). `site/components/ImageZoom.tsx` → exit 1 for both mod-projects-grid and mod-site-shell (unowned).

## 3. Ownership (verified with module_scope.py from the repo root; argument order `check <status.md> <module-dir> <path>`)

- MOD-001 mod-site-shell: `site/app/layout.tsx`, `globals.css`, `favicon.ico`, `apple-touch-icon.png`, `site/components/Sidebar.tsx`, `ThemeToggle.tsx`, `TopNav.tsx`, project files (package.json, lockfile, next.config.ts, tsconfig, eslint/postcss configs, AGENTS.md, CLAUDE.md, README.md, .gitignore) and the whole `site/public/` folder.
- MOD-003 mod-projects-grid: `site/app/projects/`, `ProjectList.tsx`, `ProjectMobileNav.tsx`, `site/data/projects-data.ts`.
- MOD-012 mod-slideshow: `site/app/slideshow/` only.

| Path | Result |
|---|---|
| `site/app/slideshow/page.tsx`, `layout.tsx`, `images/snow.jpg` | mod-slideshow, exit 0 |
| `site/public/slideshow-snow.jpg` | mod-site-shell (site/public/ catch-all), contradicting the status.md note "plus any site/public/slideshow-* image copies", which is not in the Module Map |
| `site/app/(site)/layout.tsx` | unowned |
| `site/app/(site)/page.tsx` | unowned |
| `site/app/(site)/projects/layout.tsx` | unowned |
| `site/components/ShellChrome.tsx`, `site/lib/fullscreen.ts`, `site/app/manifest.ts`, `site/proxy.ts` | unowned |
| `site/public/sw.js` | mod-site-shell (catch-all) |

Option (a) needs a Module Map rewrite for MOD-001 to MOD-010 before any engineer can move a file. Option (b) needs no new paths. Shared logic between MOD-001 and MOD-012 (full-screen helper, return-path key) has no neutral home: `site/lib/` is unowned.

Content-model gaps: `SectionItem = string | { image: string }` (`projects-data.ts:12`) has no alt, and the template hard-codes `alt=""` on section images (page.tsx 160, 169). AC-109 (dialog named by alt) and AC-111 (ProjectDay alts) need an `alt` field: a MOD-003 type change (CONV-005) plus each record file (MOD-004, MOD-005, MOD-006, MOD-011).

## 4. Offline after load; next/image vs plain img

Nothing uses `next/image` today; all images are plain `<img>` with `/public` URLs.

For `/slideshow`:
- Keep slide state in React state, never in the URL. A `router.push`/`replace` fetches an RSC payload and fails offline.
- Do not code-split slides with `next/dynamic`.
- Request every slide image at mount (render all `<img>` eagerly, hidden, or hold `new Image()` references).

Why not `next/image`: it defaults to `loading="lazy"` (`docs/01-app/03-api-reference/02-components/image.md` 300-304), so off-screen slides never load before going offline; it serves `/_next/image?url=…&w=…` with `srcset` (428-447), so entering full screen, resizing or rotating can request a new candidate offline. Use plain `<img>`, or `next/image` with `unoptimized` and `loading="eager"`. Static imports from `site/app/slideshow/…` give hashed `/_next/static/media` URLs and keep files in MOD-012's folder.

Reload: hosting headers for `/public` are probably revalidate-on-use, which fails offline after a reload; AC-105 only covers the same document. Not verified; QA must test with DevTools offline. A service worker is not needed for AC-105 (Next's PWA guide says offline needs Serwist plus webpack, `docs/01-app/02-guides/progressive-web-apps.md:668`).

Byte budget (stat): IMG_6875.JPG 389,847; 4D0BDA8A….JPG 796,301; siteplusplus-home.jpg 102,403; siteplusplus-reports.jpeg 89,566; tabvault-home.png 466,838; subtotal 1,844,955. The ProjectDay files (three-screen image plus three singles for B5) do not exist in `site/public/` yet; at AC-112's 300 KB cap they add up to ~1.2 MB, about 3.04 MB total, over AC-106's 3 MB. The bouldering photo needs the smaller copy the PRD allows.

`head.png` is 1,834,627 bytes, loaded by Sidebar's ProfileSection (Sidebar.tsx:156). An `<img>` loads even under `display:none`, so if the shell is only hidden with CSS, a direct visit loads it and blows the budget. Sidebar must not render at all on `/slideshow`.

## Where things live

- `site/app/layout.tsx`: root layout, theme script, body frame, shell mount (MOD-001).
- `site/components/Sidebar.tsx`: navLinks 8-74, NavLinks 82-120, number keys 177-187, mobile bar/drawer 192-242, desktop aside 245-256 (MOD-001).
- `site/components/TopNav.tsx`: unused (MOD-001).
- `site/app/projects/layout.tsx`: split panel and scroll container (MOD-003).
- `site/app/projects/[slug]/page.tsx`: template and the three `<img>` sites (MOD-003).
- `site/data/projects-data.ts`: SectionItem and ProjectEntry (MOD-003); records in `site/data/projects/*.ts` (MOD-004/005/006/011).
- `site/app/slideshow/`: not created yet (MOD-012). `project-planning/design/` does not exist yet; the approved design is a blocking input.
- Next docs used: route-groups.md, layout.md, linking-and-navigating.md, server-and-client-components.md, use-search-params.md, image.md, progressive-web-apps.md, staleTimes.md, 08-caching.md.

## Gotchas

1. Any multiple-root-layout design silently breaks AC-095 (full page load, no full screen).
2. `requestFullscreen` belongs in MOD-001's handlers (link click and `7`), a cross-module contract.
3. Esc in full screen is consumed by the browser: implement return via `fullscreenchange`, guard against double navigation from the close button.
4. A CSS-hidden shell still loads head.png (1.8 MB) and keeps the window keydown listener alive.
5. The `site/public/` catch-all makes any `site/public/slideshow-*` copy MOD-001's (verified).
6. The shortcut badge is `hidden … lg:grid` (Sidebar.tsx:105), so the `7` badge is hidden in the mobile drawer like 1-6.
7. Section images use `alt=""` (decorative), which conflicts with focusable buttons and an alt-named dialog.
8. The overlay must not change the in-page image (AC-110): animate a copy, keep the original in layout at opacity 0.
9. While the overlay is open, Sidebar number keys still navigate and leave a pushed history entry. Decide whether to suppress them.
10. Reading `searchParams` in the slideshow page makes it dynamic and fails AC-107.
11. Leaving the slideshow while offline may need an RSC fetch; not covered by AC-105 but could look broken in a demo.
12. Existing slide images plus max-size ProjectDay images exceed 3 MB.

## Open questions for the Tech Lead

1. How `/slideshow` escapes the shell: (a) route group `app/(site)/` under the single root (cleanest; needs Module Map Source Path rewrite for MOD-001 to MOD-010 via PM and Doc-Sync); (b) Sidebar renders nothing on `/slideshow` plus a `fixed inset-0` slideshow (no ownership change). Multiple root layouts ruled out.
2. Where the full-screen call and helper live: (a) inline in Sidebar for click and `7`, MOD-012 keeps its own copy for `F`; (b) shared `site/lib/fullscreen.ts` (unowned; needs a Module Map entry).
3. How the slideshow knows the page it was opened from: (a) Sidebar writes the path to sessionStorage, MOD-012 reads it with Home fallback (cross-module contract in both specs); (b) `router.back()` when an in-app entry is detected (fragile); (c) a `?from=` parameter (keep out of canonical, no collision with `?project=`).
4. Where slideshow image copies live: (a) `site/public/slideshow-*` (PM must add the pattern to MOD-012; today it resolves to MOD-001); (b) static imports from `site/app/slideshow/images/` (already MOD-012, hashed immutable URLs); (c) reuse originals and shrink only the bouldering photo as a MOD-001 task.
5. Slideshow image element: (a) plain `<img>` with eager preload; (b) `next/image` with `unoptimized` and `loading="eager"`. Optimized next/image is risky offline.
6. Overlay mechanism: (a) native `<dialog>` + `showModal()`; (b) `createPortal` with a hand-written focus trap. Put the component under `site/app/projects/[slug]/` (MOD-003, verified), not `site/components/` (unowned).
7. Section-image alt text: (a) extend `SectionItem` to `{ image: string; alt: string }` (MOD-003 type change under CONV-005, then each record module); (b) keep `alt=""` (conflicts with AC-109 and AC-111).
8. Number keys while the overlay is open: suppress Sidebar shortcuts while a modal is open (MOD-001), or allow them (PRD silent).
9. `TopNav.tsx`: delete as dead code (MOD-001), or update to 7 items.
10. Byte budget: mandate a smaller bouldering copy now, or let MOD-011's final file sizes decide.
