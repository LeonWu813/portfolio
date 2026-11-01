# Design brief: Interview Slideshow (MOD-012)

Written by: coordinator, 2026-11-01. This is the brief for the design team (ux-researcher, ux-designer, ui-designer, motion-designer, design-lead; role files in /Users/tsan/Desktop/MacBookPro/design-team/). Outputs go in `project-planning/design/ux-team/` only.

## What to design

The full-screen interview slideshow at `/slideshow` on Leon's portfolio site (www.leon-wu.com). Leon presents it in engineering intern and junior job interviews, in person or over a video call. Requirements are in `project-planning/prd.md` section 4.11 (Revision 1.8), with Controls, Slides, Look and AC-093 to AC-119. Read 4.11 in full, plus sections 2 (design system: IBM Carbon palette, Roboto) and 3 (sidebar navigation).

**Content source (word for word, do not change any text):** `asset/content/interview-deck.md` at commit e479e22. Speaker notes and editor's notes never show on screen.

**Structure:** 3 about-me slides (1 Hi I'm Leon, 2 Timeline with two clickable work cards that open hidden slides 2a Exascend and 2b GoFreight, 3 Life in Seattle with two photos), then a project menu (4 cards, keys 1-4, title changes to "Pick another project" after a project, contact footer), then one of four project tracks (Multi-Agent 8, ProjectDay 8, SitePlus+ 8, TabVault 5). After a track's last slide the menu returns. There is no Thank-you slide. Slide types to design: intro, timeline, hidden job slide (big numbers), photo slide, menu, project numbers cover (three big numbers), intro with screenshot, role and stack (chips), bullet slide, bullet slide with screenshot(s), role grid (A5), simple workflow diagram (A2), flow chips (B6).

## Leon's words about the design (quoted exactly)

- From his first request: "make a presentation for me to use in the interview that can make me impress by all of the interviwee when applying for engineering intern or junior jobs. Make a nother tab under the sidebar Contact "Sliswshow" when click on it the website would be come a fullscreen slideshow and user can click "space" or up down to control the slide, esc to go back to the website"
- "Concise the title and make the content more for slides, please look for the best practice of creating a slide content for this revise"
- On who designs it: "no, let the design team in @~/Desktop/MacBookPro/design-team/"
- On mouse control: "with the mouse, click always go to the next"
- On phones (Tech Lead T4, Leon took the recommendation): keep the 16:9 frame letterboxed on an upright phone (375x211 px on a 375x667 screen, small text).

The guide Leon pasted asks for: sentence titles, one idea per slide, about 6 elements and 50 words max, body text 24pt+ and titles 32-40pt equivalents, high contrast, one consistent look on every slide.

## Reference material (not the design)

`asset/content/interview-deck-preview.html` is a rough clickable preview the coordinator made for content review. Leon chose NOT to use it as the design reference. You may open it to see the content and flow; do not treat its layout as a starting point you must keep.

Site look today: `site/app/globals.css` (IBM Carbon White and Gray 100 tokens), `site/app/layout.tsx`, `site/components/Sidebar.tsx`, `site/app/projects/[slug]/page.tsx`. Render pages with headless Chrome if useful (`cd site && npm run build && npx next start`). Images available: see PRD 4.11 "Slide images" and limit 10 below.

## Technical limits from the Tech Lead (word for word, status.md Tech Lead Reviews, 2026-11-01 change review)

  1. One static route, /slideshow. There is no URL per slide; the only parameter is `?project=`. Slides change instantly with no transition. Motion is allowed only for the hints and focus, and it must respect `prefers-reduced-motion`.
  2. No site chrome appears: no sidebar, top bar, theme toggle, profile photo or corner decoration. The slideshow is its own full-viewport layer on an opaque `--bg` background.
  3. The slideshow follows the active theme through the existing CSS variables only. There are no theme-specific images, and all text meets AA in both themes.
  4. Full screen is optional, and the design must work the same in a browser window of any aspect ratio. iPhone Safari never goes full screen.
  5. While a browser enters full screen, it shows its own "Press Esc to exit full screen" banner at the top center, and Safari reveals its menu bar at the top edge. Keep the "Press F for full screen" hint and the close button away from the top center and the very top edge.
  6. Esc in full screen never reaches the page. Leaving is handled through the browser's full-screen exit, so the design must not depend on an Esc animation.
  7. Every size is in frame units: design on one 16:9 artboard that scales uniformly. AC-102's minimums are fractions of the frame height: titles 7%, bullets, Titles, Roles and Role 4.2%, everything else 2.4%. At 375x667 portrait, the frame is 375x211 px, so the minimums come out at about 14.8, 8.9 and 5.1 px (see T4).
  8. Place the close button relative to the screen, not the frame, so it does not shrink with the frame. It must be at least 24x24 CSS px; 44 px is preferred for touch. It needs a visible focus style. Cards also need visible focus styles.
  9. State explicitly whether a click or tap on the background around the frame counts as "on a slide". The PRD does not say.
  10. Images: only the files in PRD 4.11, each shown whole (`object-fit: contain`, no cropping). Aspect ratios: SitePlus+ home 1.92:1, SitePlus+ reports 1.93:1, TabVault home 1.65:1, both Seattle photos 0.75:1 (portrait), ProjectDay single screens 0.46:1, the three-screen image about 1.5:1. No new decorative images or icon files: draw icons and diagrams (A2, B6) with inline SVG or CSS. Any new image counts against the 3 MB.
  11. Use only Roboto 400, 500 and 700, with no italic. These are the only font files the site loads, and the deck must work offline after it loads.
  12. Screen readers announce the slide title on every change, and the position on project slides, through a visually hidden live region. Nothing visible is needed for this.
  13. The design files are inputs. Engineers implement them only in `site/app/slideshow/` (MOD-012). Reusing a site component such as the tag chip means rebuilding its look inside MOD-012, not importing another module's component.

Also from that review: CONV-006 (opened from the site: no full-screen hint, leaving returns to the page it came from; direct visit: the "Press F for full screen" hint shows, leaving goes to Home) and CONV-007 (no site chrome on /slideshow). Mouse: a click on a slide always goes next; keys: Space/Down/Right/PageDown/Enter next, Up/Left/PageUp back, 1-4 on the menu, 1-2 on the timeline, M menu, Home first slide, F full screen; touch: tap right half next, left half back, swipes; a close button.

## Deliverables (one folder, `project-planning/design/ux-team/`)

1. `slideshow-research.md` (ux-researcher)
2. `slideshow-ux.md` (ux-designer): flows, states, every control, focus order, the hint, close button, letterbox behaviour, answer to limit 9.
3. `slideshow-ui.md` plus rendered mock PNGs `slideshow-mock-<slide-type>-<light|dark>.png` and a single self-contained `slideshow-mock.html` (ui-designer): tokens in the site's existing CSS variable terms, a frame-unit type and spacing scale, every slide type in both themes.
4. `slideshow-motion.md` (motion-designer): hints and focus only, reduced-motion fallbacks.
5. `reviews/slideshow-review-<n>.md` (design-lead): PASS or REVISE.

Advisory only: never edit `site/`, `prd.md`, `status.md`, specs or `asset/`.
