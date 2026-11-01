# /pstack:how: project pages under PRD rev 1.5 Source Paths

Run by: coordinator, 2026-11-01, before the Tech Lead change review for PRD rev 1.5 (bb741bd).
Scope: site/app/projects/, site/data/projects-data.ts, site/components/Project*.tsx, site/app/page.tsx, plus module_scope.py matching.
Status: findings only. Nothing has been applied. The Tech Lead accepts or rejects each one.

## Overview

All project data comes from one ordered array, `projects`, in `site/data/projects-data.ts:28-278`. That array order decides five things:
- the `/projects` redirect (to `projects[0]`)
- the desktop sidebar order
- the mobile pill-bar order
- the Home list order
- the result of `generateStaticParams`

Every consumer imports `projects` directly from `@/data/projects-data`.

```
projects-data.ts  (interfaces + ordered projects[])
 ├─ app/page.tsx (MOD-002)             map → title/tech links         :3, :82
 ├─ app/projects/page.tsx              redirect(projects[0].slug)     :5
 ├─ app/projects/layout.tsx            full array as prop → ProjectMobileNav, ProjectList (client) :1, :12-13
 └─ app/projects/[slug]/page.tsx       generateStaticParams, metadata, detail render  :3, :32-34, :81
```

## Key concepts

- `ProjectEntry` (`projects-data.ts:14-26`) has the fields `slug`, `year`, `date`, `title`, `tech`, `tags`, `atAGlance`, `description`, `links`, an optional `featureImage`, and `sections`.
- `ProjectLink` is `{label, href, name}`. `name` is plain text rendered before the link (`[slug]/page.tsx:109`).
- `SectionItem` is `string | { image: string }`. It has no alt field and no caption field.
- Order today: multi-agent-system, siteplus, tabvault.
- `dynamicParams = false`, so any slug that is not in the array returns 404.

## How it works

- `/projects` performs a server `redirect` to `projects[0].slug`.
- `layout.tsx` renders three parts: `ProjectMobileNav` (below the `lg` breakpoint), `ProjectList` (at `lg` and above), and the content pane.
  - Both nav components are client components.
  - Both receive the full records as props, although they only use `slug`, `title` and `tech`.
  - As a result, all case-study text is serialized into the RSC payload of every project page.
- `[slug]/page.tsx` renders the page in this order:
  1. Header (`:87-120`)
  2. Pull-quote (`:123-125`)
  3. Feature image (`:128-135`)
  4. Sections (`:138-173`). `groupItems` merges consecutive images: one image renders full width, two or more render as a 2-column grid. `InlineBold` handles `**bold**` text.
- Home (`app/page.tsx:82-98`) lists each project's title and tech in array order.

## Where featureImage, alt and caption render

- The feature image renders in one place only: `[slug]/page.tsx:128-135`, as `<img src={project.featureImage} alt="" ... height="500px" />`.
- Every image has a hard-coded `alt=""`, including the section images at `:154` and `:163`.
- No caption, `<figure>` or type field exists for captions.
- `featureImage` is not used anywhere else. The OG image is the fixed `/og-image.png`.
- To support alt text and captions, MOD-003 must add `featureImageAlt?` and `featureImageCaption?` to `ProjectEntry` and render them as `<figure>`/`<figcaption>`.
  - This type change must land before MOD-005 or MOD-011 set those fields. Until then, TypeScript's excess-property check fails the build.

## What the split touches

- `projects-data.ts` keeps the interfaces. It imports the records and exports `projects = [multiAgentSystem, projectday, siteplus, tabvault]`.
- New record files:
  - `site/data/projects/multi-agent-system.ts` (from lines 29-108)
  - `site/data/projects/siteplus.ts` (from lines 109-191)
  - `site/data/projects/tabvault.ts` (from lines 192-277)
  - `site/data/projects/projectday.ts`, added later
- All six importers stay unchanged, because they use only `projects`, `ProjectEntry` and `SectionItem`. MOD-002 needs no code change.
- The asset patterns already match `site/public`:
  - `siteplus*` matches `siteplusplus-*`
  - `tabvault-*` matches the three tabvault files
  - `multi-agent*` matches both `multi-agent.png` and `multi-agent-horizontal.png` (checked: exit 0)

## How module_scope.py matches Source Paths

Script: `~/.claude/skills/engineer-checklist/scripts/module_scope.py`

- **Parse (`:68-102`).**
  - Module Map column 4 is split on commas.
  - The `Project files:` line is matched with `^Project files:\s*([^|]+)\|\s*(.*)$` and then split on every comma, including commas inside parentheses.
  - Backticks and `**` are stripped, and trailing `/` is removed.
- **Match (`:105-113`).**
  - An entry containing `*`, `?` or `[` is treated as an fnmatch glob, where `*` also crosses `/`.
  - Any other entry is a prefix match.
  - When several entries match, the longest literal prefix wins (`owner_of`, `:116-126`).
- **Enforcement.**
  - `pstack-guard.sh:117-127` runs `check` on every Edit/Write by an `engineer-*` agent. Exit 1 blocks the write.
  - `self-check.sh` and `handoff.sh` run `changed`, which also catches writes made through Bash.
  - `changed` ignores commits whose message starts with `human:`, `coordinator(` or `pstack(`.

## Findings (gotchas)

**F1. MOD-003 is blocked from creating the record files.** The following `check` calls were run:
- `mod-projects-grid site/data/projects/siteplus.ts` → exit 1 (the file belongs to mod-project-marketing)
- `projectday.ts` → exit 1 (MOD-011)
- `index.ts` → exit 1 (unowned)

The split also has to be atomic, because importing a record file that does not exist yet breaks the build. Workable orders:
- **(a)** MOD-004/005/006 each create their record file first, exporting a const that nothing imports yet. `tsconfig` includes `**/*.ts`, so the file still type-checks. MOD-003 then cuts over to the imports. Cost: three extra short engineer runs.
- **(b)** A `human:` commit does the mechanical split. `changed` ignores it.
- **(c)** PM temporarily widens MOD-003's Source Path. This needs a PRD change and is not recommended.

ProjectDay has the same problem: the ordered array belongs to MOD-003. The planned order (MOD-003 → MOD-005 → MOD-011 → MOD-002) has no MOD-003 step after MOD-011 to import `projectday` at index 1. Without that step, ProjectDay never appears and its route returns 404.

**F2. The `Project files:` line parses wrongly.** `paths mod-site-shell` returns junk entries such as `site/public/ files no module pattern matches (favicons` and `Subject.png)`, plus bare names that only match at the repo root.
- These all return exit 1 for mod-site-shell: `favicon.ico`, `favicon-16x16.png`, `favicon_io/x.png`, `android-chrome-192x192.png`, `apple-touch-icon.png`, `site.webmanifest`, `Leon_cv.pdf`, `IMG_6353.jpg`, `head.png`, `Subject.png`.
- `*.svg` works only by accident, and it claims every `.svg` file in the repo.
- Simplest fix: use the folder `site/public/` and rely on longest-prefix matching. Trade-off: a mis-prefixed project asset is silently assigned to site-shell.
- Alternative: list full paths (`site/public/favicon*`, `site/public/favicon_io/`, `site/public/IMG_*`, ...).
- Related: `site/public/og-image.png` is referenced on every page but does not exist, so it returns 404 and has no owner.

**F3. Redirect to index 0.** `/projects` redirects to `projects[0]`, which is multi-agent-system. Inserting ProjectDay at index 1 keeps the redirect unchanged. It also puts ProjectDay above SitePlus+ in the sidebar, the pill bar and the Home list.

**F4. Import cycle.** Record files import types from `projects-data.ts`, and `projects-data.ts` imports the record files.
- `import type` is safe: it is erased at build time, and `isolatedModules: true` is set.
- A value import would create a real ESM cycle and a TDZ risk.
- Rules: records use `import type` only, and `projects-data.ts` holds no helpers or constants.
- Keep the types in `projects-data.ts`. `site/data/projects/types.ts` or `index.ts` would be unowned.

**F5. `height="500px"` and missing alt/caption.**
- The `height` attribute value is invalid HTML, and Tailwind preflight's `height: auto` overrides it, so the attribute is dead and misleading.
- The 3080x1560 diagram renders at about 896x454 inside `max-w-4xl` with no cropping.
- Only MOD-003 can remove the attribute and add alt/caption support. Until it does, neither AC-091 nor AC-089 can pass.

**F6. Smaller points.**
- A Source Path written as `site/app/projects/[slug]/page.tsx` would be read as an fnmatch character class. The folder form `site/app/projects/` is correct.
- pstack-guard checks only Edit and Write. A Bash `cp` is caught later, at handoff by `changed`.

## Open questions

1. Who creates the three existing record files: the owners first, with MOD-003 cutting over afterwards, or a `human:` commit? Which step adds `projectday` at index 1 after MOD-011?
2. Should PM change the `Project files:` line to `site/public/` or to full paths? Who owns and creates the missing `og-image.png`?
3. Do AC-089 and AC-091 also need alt text on section images? That would mean another `SectionItem` type change by MOD-003.
4. Optional, MOD-003's call: should `ProjectList` and `ProjectMobileNav` receive only `{slug, title, tech}`?
