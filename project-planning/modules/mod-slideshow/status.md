# Interview Slideshow Status

## Engineering Progress

- Mode: implement (spec rev 1.11, PRD 1.11). Dependencies read: MOD-001, MOD-004, MOD-006 passed QA; MOD-011 passed QA Run 1 (feature image post-screenshot clause pending, its four webp files exist in site/public).
- Built in site/app/slideshow/ only: page.tsx (metadata, Suspense, eager Preload), Slideshow.tsx, deck.ts (all text word for word from interview-deck.md at ac1a07d), navigation.ts (pure reducer), useFullscreenSession.ts (CONV-006 read into a useRef, useSyncExternalStore full-screen state, leave guard, unmount exit, F hint timing), useSlideInput.ts (keys, pointerType handling, idle pointer, overscroll), SlideView/Menu/Timeline/Workflow/FlowChips/BulletList/MenuHint/FullscreenHint/icons, slideshow.module.css (all --ss-* tokens on the root `.layer`, z-index 100, 100dvh).
- Design choices: A2 box widths use UI 7.12 Revision 1 widths (Shipped needs 22.28 fh); `//x` and backslash return paths are treated as direct visits (hardening of CONV-006's "starts with /"); F hint shows once a timer arms it (0 ms direct, 1.5 s when opened from the site with fs true), so no setState runs inside an effect body.
- Known interim: until MOD-001 lands, the shell Sidebar still renders under the layer and its number-key handler still fires on 1-4 and navigates the site (verified: key "2" went to /projects). My digit handling also accepts `code` Digit1-4, which is how I tested it (key "&"). The shell also still requests /head.png and /Subject.png.
- Verified on `next build` + `next start` in headless Chrome over CDP (scratchpad scripts, nothing shipped): /slideshow static; navigation order and menu/hint/start-link/job-slide rules; Space once after hint click; Esc leaves to path or "/" (stale key = direct); leaving full screen leaves; idle cursor in full screen only; drag is not a click; touch tap halves, swipes, two-finger no-op; announcements; hint timing direct 358 ms, refused request 1828 ms (includes page load); 9 slide images load at mount, 2,064,231 bytes total; screenshots of intro, timeline, A2, menu, B2, B5, C3 (light and dark) and 375x667 look right. Not checked by me: real Safari/Firefox, iPhone, offline reload, full QA of AC-102 text minimums, human sign-off items.
- Build: pass. Lint: 0 errors (6 warnings, all `no-img-element`, accepted). `tsc --noEmit`: pass. self-check.sh at repo root: git scope PASS; build, lint and tests FAIL only because it runs at the repo root (no package.json, test command is a placeholder), the known limitation.

**Self-check results:**
- Build/compile (run in site/): pass
- Lint (run in site/): pass (0 errors)
- Existing tests: n/a, no test suite in production.md
- Git scope: pass
- Every spec requirement and AC addressed: pass (see list above; sign-off items left to QA and Leon)
- No new dependencies: pass
- No hardcoded env values: pass (timers and thresholds are named constants)
- Conventions, readability: pass



## QA Results

