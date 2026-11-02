**Last Synced from PRD Revision**: 1.10 | **Last Updated**: 2026-11-01

---

## Module ID & Name

MOD-003: Projects Split Panel

## Purpose

Provide the /projects route and its persistent split-panel layout. The /projects route immediately redirects to /projects/multi-agent-system. The projects layout renders a persistent left aside (w-64, xl:w-72) showing a scrollable project list alongside a right panel that renders the active project detail page. The aside shows each project's title and tech string; the active item is highlighted. Both panels scroll independently. It also owns the image overlay on every project image and the Images-section rules (PRD section 4.2).

## Context

**Business problem:** From PRD Goal 2: "Showcase four strong projects as full case studies, each reachable in one click from the projects sidebar." From PRD Success Criteria: "All four projects are visible in the projects sidebar without scrolling on a standard laptop viewport." The split-panel layout gives recruiters a persistent project list on the left while the selected project case study fills the right panel, enabling fast switching between projects without losing context.

**User stories:** The PRD does not define US-IDs for this project. The following page-level requirements from PRD section 4.2 govern this module:

- Route: /projects
- Behavior: immediately redirects to /projects/multi-agent-system (the first project).
- Layout: persistent split panel — left aside (w-64, xl:w-72) + right panel (flex-1 overflow-y-auto).
- Aside: scrollable project list with "Projects" header and count. Shows each project's title and tech string. Active item: `bg-[var(--text)] text-[var(--bg)]`.
- Right panel: renders the project detail page as {children}.
- Scroll isolation: body is `h-screen overflow-hidden`; projects layout is `flex flex-1 min-h-0 overflow-hidden`; each panel scrolls independently.
- Aside is hidden on screens smaller than lg.
- Implementation: `app/projects/layout.tsx` renders ProjectList component + {children}; `app/projects/page.tsx` redirects to first project.
- Project order: ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.
- **Image overlay (every project page):** On every /projects/<slug> page, the feature image and every image in an Images section open in an overlay when clicked, tapped, or activated from the keyboard. The image grows from its place on the page to the center of the screen over a dimmed page, shown as large as fits in about 90% of the screen without cropping, and shrinks back to its place when the overlay closes. A click or tap anywhere, Esc, or the phone's Back closes it. The behaviour follows Notion's image zoom, which Leon recorded as the sample on 2026-11-01. Leon asked for it on the multi-agent diagram; it applies to every project image so that all of them behave the same way.
- **Images sections (every project page):** Each image in an Images section shows whole, with no cropping or distortion. At 1280x800 none is taller than 640px; at 375px wide each fits the column width. This is the ProjectDay rule (AC-111) applied to every project page, so the portrait TabVault phone screenshot shows smaller than before.
- **Alt text (every project page):** The feature image and every image in an Images section have the alt text given for them in their project's section (4.3 to 4.6) and record (section 5). The image overlay names its dialog by that alt text (AC-109).

**Non-goals (from PRD section 8 — Out of Scope):**
- No blog or blog infrastructure.
- No "Projects" page heading or intro line on the /projects route (redirect replaces the page).

## Related User Stories

- No formal US-IDs defined in PRD revision 1.10. Requirements are drawn directly from PRD section 4.2.

## Requirements

- Page route: `/projects` — immediately redirects to `/projects/multi-agent-system`.
- `app/projects/page.tsx` implements the redirect to `/projects/multi-agent-system`.
- `app/projects/layout.tsx` renders the split-panel layout wrapping all project detail pages.
- Left aside: `w-64 xl:w-72`, scrollable (`overflow-y-auto`), contains a ProjectList component.
- ProjectList shows a "Projects" header and count, then each project's title and tech string.
- Active project item in the aside is highlighted: `bg-[var(--text)] text-[var(--bg)]`.
- Right panel: `flex-1 overflow-y-auto` — renders `{children}` (the active project detail page).
- Scroll isolation: the projects layout uses `flex flex-1 min-h-0 overflow-hidden`; body is `h-screen overflow-hidden`.
- Each panel (aside and right panel) scrolls independently; the window never scrolls.
- Aside is hidden on screens smaller than lg (`hidden lg:block` or equivalent).
- Project data is read from `site/data/projects-data.ts` using the `ProjectEntry` TypeScript interface.
- The shared project frame belongs to MOD-003: `site/app/projects/`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered `projects` array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (CONV-001)
- A project record's position in `projects` is its display order everywhere: the side panel, the mobile switcher and the Home list. `projects[0]` is the `/projects` redirect target. (CONV-002)
- A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (CONV-005)
- Each link in a project's header shows its plain-text prefix (`ProjectLink.name`) followed by the linked label (`ProjectLink.label`); only the label is a link. No links row appears when `links` is empty.
- A section's `items` are rendered in order: a string is a paragraph (may contain `**bold**`), an `{ image }` item is an image.
- `featureImage` is the image shown after the pull-quote and before the sections. `featureImageAlt` is its alt text. `featureImageCaption` is the caption shown directly below the feature image. The feature image renders with no cropping on desktop (1280px wide) and mobile (375px wide). When a record has no `featureImage`, the page renders without an empty image slot or a broken image.
- The ProjectList component iterates the projects array from the data file — no hard-coded titles or slugs.
- All project routes are statically generated at build time via `generateStaticParams` in the `[slug]` page.
- ProjectDay appears directly after Multi-Agent Software Development System in the project list. The order of the other projects does not change, and `/projects` still redirects to `/projects/multi-agent-system`.

- Image overlay: On every /projects/<slug> page, the feature image and every image in an Images section open in an overlay when clicked, tapped, or activated from the keyboard. The image grows from its place on the page to the center of the screen over a dimmed page, shown as large as fits in about 90% of the screen without cropping, and shrinks back to its place when the overlay closes. A click or tap anywhere, Esc, or the phone's Back closes it. The behaviour follows Notion's image zoom, which Leon recorded as the sample on 2026-11-01. Leon asked for it on the multi-agent diagram; it applies to every project image so that all of them behave the same way.
- Images sections: Each image in an Images section shows whole, with no cropping or distortion. At 1280x800 none is taller than 640px; at 375px wide each fits the column width. This is the ProjectDay rule (AC-111) applied to every project page, so the portrait TabVault phone screenshot shows smaller than before.
- Alt text: The feature image and every image in an Images section have the alt text given for them in their project's section (4.3 to 4.6) and record (section 5). The image overlay names its dialog by that alt text (AC-109).
- `alt` is optional in the type only so that the shared template can gain it before the records fill it in; every image item on the site carries its alt text (AC-127).
- Adopted convention CONV-007 (PRD section 9, the part that binds this module): "Sidebar's number-key handler also does nothing while a `dialog[open]` exists, and in-page overlays are native `<dialog>` elements opened with `showModal()`."
- While the image overlay is open, pressing any of `1`–`7` does nothing: the overlay stays open and the page does not change (AC-129; PRD section 6, Keyboard Shortcuts: "An image overlay is open on a project page (section 4.2): the keys do nothing until it closes").
- The site names Leon "Leon Wu"; the full-name forms "Tsan-Yu (Leon) Wu" and "Tsan-Yu Wu (Leon)" do not appear on the site (AC-125).

**Engineering rules (Tech Lead change review rev 1.7 + 1.8, 0051840, and rev 1.9, b8395f1):**
- `ProjectDetailPage` (`site/app/projects/[slug]/page.tsx`) stays a Server Component and passes plain `src`/`alt` props to a small Client Component (the overlay, `site/app/projects/[slug]/ImageZoom.tsx`).
- The overlay is a native `<dialog>` opened with `showModal()`. The image sits in a `<button>` with `cursor: zoom-in`; the button carries no extra name: the `<img alt>` names it. The overlay names its dialog by the image's alt.
- The original stays in place at `opacity: 0` while a copy animates the move from its measured rectangle, so nothing shifts (AC-110). The `<img>` element itself must carry the displayed size, with no `object-fit` letterboxing inside a bigger box, so that the measured rectangle is the visible image.
- On open: `history.pushState({ imageOverlay: true }, "")`, with no URL. `popstate` closes the overlay.
- The overlay never closes the dialog synchronously from a `keydown`. It closes only via the `cancel` event (Esc: `preventDefault`, then `history.back()`) or a click (`history.back()`), and `dialog.close()` runs from `popstate` after the closing animation. Digits do nothing in the overlay.
- Reset the UA dialog styles (max-width/height, padding, border) and make the dialog cover the whole viewport, with `overscroll-behavior: contain`.
- `SectionItem` gains `alt?: string` (optional in the TypeScript type so that MOD-003 can land it before the record modules fill it in). The template renders `alt={item.alt ?? ""}`; `groupItems` (`[slug]/page.tsx`) carries `{ src, alt }`; both render sites use `alt={item.alt ?? ""}`.
- Images cap (AC-128): `max-h-[640px]` with `w-auto max-w-full h-auto` on the `<img>`, with the border and rounding on the img (the cap is on the `<img>` box itself, not `w-full` + `object-contain` letterboxing). One cap for every project page. AC-128 belongs to MOD-003 only; MOD-006 has no image-file change for it.
- QA check for AC-127 on the build: `grep -c 'alt=""'` in `site/.next/server/app/projects/*.html` is 0. `SectionItem.alt` stays optional (making it required is logged by the Tech Lead as a Phase 4 integration-review candidate).
- QA: Chrome, Safari and an iPhone for AC-109 (the panel behind a modal `<dialog>` should not scroll: its scroll chain goes to the document, which is `overflow: hidden`). MOD-003's overlay wraps the multi-agent feature image in a button, so QA re-checks AC-091 under AC-110 after the MOD-003 overlay is in.

**ProjectEntry TypeScript interface (from PRD section 5):**
```typescript
interface ProjectLink {
  name: string;    // plain-text prefix shown before the link, e.g. "GitHub: "
  label: string;   // the linked text
  href: string;
}

type SectionItem = string | { image: string; alt?: string };   // a paragraph (may contain **bold**) or an image with its alt text

interface ProjectSection {
  heading: string;
  items: SectionItem[];
}

interface ProjectEntry {
  slug: string;           // URL slug, e.g. "siteplus"
  year: string;
  date: string;           // "MM/DD" format
  title: string;
  tech: string;           // single string shown in sidebar and home list
  tags: string[];         // chip labels shown on detail page header
  atAGlance: string;      // one-line summary shown under title
  description: string;    // pull-quote shown above sections
  links: ProjectLink[];   // external links shown in detail header; no links row when empty
  featureImage?: string;        // image shown after the pull-quote, before the sections
  featureImageAlt?: string;     // alt text for the feature image
  featureImageCaption?: string; // caption shown directly below the feature image
  sections: ProjectSection[];
}
```

**Project records order in aside (from PRD section 5):**
1. Multi-Agent Software Development System (slug: multi-agent-system)
2. ProjectDay (slug: projectday)
3. SitePlus+ (slug: siteplus)
4. TabVault (slug: tabvault)

## Input / Output Contract

**Input:**
- Project data array from `site/data/projects-data.ts`, typed against the `ProjectEntry` interface. The array holds the records exported by the record files `site/data/projects/<slug>.ts` (CONV-005).
- Current URL path — used to determine the active project in the aside.

**Output:**
- On `/projects`: a redirect to `/projects/multi-agent-system`.
- On `/projects/[slug]`: the split-panel layout shell rendered inside the Site Shell layout (MOD-001), with the aside showing the project list and the right panel rendering the active project detail page via `{children}`.

## Dependencies

- MOD-001 (Site Shell) — the projects split panel is rendered inside the layout shell.

## Acceptance Criteria

- AC-019: The system shall redirect `/projects` immediately to `/projects/multi-agent-system` without rendering a grid or page heading.
- AC-020: The system shall render a persistent left aside (`w-64 xl:w-72`) on all `/projects/[slug]` routes showing the project list.
- AC-021: The system shall show each project's title and tech string in the aside list.
- AC-022: The system shall highlight the active project item in the aside using `bg-[var(--text)] text-[var(--bg)]`.
- AC-023: The system shall render the project detail as `{children}` in the right panel (`flex-1 overflow-y-auto`) alongside the aside.
- AC-024: The system shall use `flex flex-1 min-h-0 overflow-hidden` on the projects layout so that both panels scroll independently and the window never scrolls.
- AC-025: The system shall hide the aside on screens smaller than `lg`.
- AC-026: The system shall populate the aside list by iterating the projects data array — no hard-coded titles or slugs in the layout component.
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-108: On every /projects/<slug> page, the feature image and each image in an Images section show a zoom-in pointer on hover, can be reached with Tab, and open with Enter or Space as well as with a click or tap. Opening dims the whole page, including the sidebar, and shows the image centered, scaled to fit within 90% of the viewport's width and height, without cropping or distortion, with a zoom-out pointer over the overlay. On /projects/multi-agent-system at 1280x800, the diagram in the overlay is wider than it is in the page.
- AC-109: The overlay closes on a click or tap anywhere in it, including on the image, and on Esc. On a phone, the browser's Back button or Back gesture closes the overlay and the visitor stays on the same page. While the overlay is open, keyboard focus is inside it, Tab does not reach the page behind it, the page behind it does not scroll, and screen readers announce a dialog named by the image's alt text. When it closes, focus returns to the image that opened it.
- AC-110: Opening, the image grows from its position in the page to the center, and closing, it shrinks back, each in at most 300ms. When the visitor's system is set to reduce motion, the overlay only fades in and out instead. Opening and closing the overlay shifts no other element on the page and does not change the image's size or position in the page, and AC-089 and AC-091 still pass at 1280px and 375px wide.
- AC-127: On every /projects/<slug> page, the feature image and every image in an Images section have exactly the alt text given for them in sections 4.3 to 4.6 and 5, and no project image has an empty alt. The overlay dialog each one opens is named by that alt text.
- AC-128: On every /projects/<slug> page, each image in an Images section shows whole, with no cropping or distortion. At 1280x800 no image in an Images section is taller than 640px; at 375px wide each fits the column width.
- AC-125 (changed in revision 1.9): In the built HTML of every route, neither "Tsan-Yu (Leon) Wu", "Tsan-Yu Wu (Leon)" nor "Tsan-Yu Wu" appears. Every meta description, Open Graph description and Twitter description that named Leon by his full name names him "Leon Wu" instead, with the rest of its text unchanged unless AC-121 or AC-122 gives the full text. For example, the root description reads "Portfolio of Leon Wu — full-stack engineer and CS master's student at Northeastern University." The LinkedIn URL and the email address, which contain "tsan-yu" and "tsan.yu", are unchanged.
- AC-126: In the built HTML of every route, including /slideshow, no phone number appears: no `tel:` link, and neither "206-677-7544" nor "2066777544" nor any other phone number in text, links or meta tags. AC-126 does not cover the contents of the CV PDF served at /Leon_cv.pdf, which lists Leon's phone number (see section 6, Resume Hosting). (For MOD-003, the /projects routes.)
- AC-129: While the image overlay (section 4.2) is open, pressing any of `1`–`7` does nothing: the overlay stays open and the page does not change.

## Integration Points

### Integration with MOD-011 (Project Detail: ProjectDay)
- AC-086: ProjectDay appears in the projects side panel at the position set in section 4.2, showing its title and tech line. It is highlighted as active while /projects/projectday is open.
- AC-089: The feature image is the three-screen image described in the header table (Home, Gyms, Route, left to right), with Record 4's `featureImageAlt` as alt text. It shows whole, with no cropping, across the content column on desktop (1280px wide) and mobile (375px wide), and Record 4's `featureImageCaption` appears directly below it. (The header table, the screenshots table and the alt texts are in MOD-011's record; MOD-003's template renders them.)
- AC-111: The Images section shows the screenshots listed in the table above, in that order, each whole with no cropping and with its alt text from the table. At 1280x800 no screenshot is taller than 640px; at 375px wide each fits the column width. (The header table, the screenshots table and the alt texts are in MOD-011's record; MOD-003's template renders them.)
- AC-127: see Acceptance Criteria (the feature image and each Images-section image carry the alt text given for them in section 4.6 and Record 4).

### Integration with MOD-005 (Project Detail: Multi-Agent System)
- AC-091: On /projects/multi-agent-system, the feature image is the landscape diagram from `asset/diagrams/multi-agent-horizontal.png`, not the earlier portrait diagram. It fills the width of the content column with no cropping on desktop (1280px wide) and mobile (375px wide). It has alt text describing the workflow (proposed: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."), and the caption above appears directly below it.
- AC-092: The At-a-glance line, tags, two links, description pull-quote, and every section paragraph on /projects/multi-agent-system match this section and the source file word for word. Each link shows its plain-text prefix followed by the linked label, as in the header table, and only the label is a link. No link to tab-vault.com appears on the page. The editor's line "Feature image: ..." from the source file does not appear on the page. (Changed in revision 1.7: TabVault is offline, so the "Built by the system: tab-vault.com" link is removed.)

### Integration with MOD-004 (Project Detail: SitePlus+) and MOD-006 (Project Detail: TabVault)
- AC-127: On every /projects/<slug> page, the feature image and every image in an Images section have exactly the alt text given for them in sections 4.3 to 4.6 and 5, and no project image has an empty alt. The overlay dialog each one opens is named by that alt text. (MOD-003 adds the `alt` field and renders it first; MOD-004, MOD-006 and MOD-011 fill it.)
