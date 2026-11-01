Status: pending

# PM proposal: fix the Module Map `Project files:` line (E2) and record E1 = A2

- Date: 2026-11-01
- Mode: change (proposal pass)
- Answers: Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.5: Source Paths, record-file split, engineering sequence)", commit db8a1ba. This is step 0 of the Tech Lead's engineering sequence.
- Leon's answers already given (coordinator session, multiple-choice prompt):
  - E1: "A2 (Recommended)"
  - E2: "site/public/ (Recommended)"
  - E3: not answered. Leon asked which images he needs to provide. It stays an open, non-blocking item (see "Images Leon still has to provide" below).
- Numbers: no new AC IDs (highest stays AC-092). If Q4 is "no", prd.md is not touched and the Revision stays 1.5. If Q4 is "yes", the Revision becomes 1.6. No other proposal is pending, so no numbers are reserved elsewhere.

## What this change does

1. It replaces the descriptive part of the `Project files:` line in the `status.md` Module Map with the folder `site/public/` (E2). Every `site/public/` file that no module pattern claims, including `og-image.png`, then belongs to mod-site-shell. The longer project patterns (`site/public/siteplus*`, `multi-agent*`, `tabvault-*`, `projectday-*`) still win, so the project images stay with their modules. The line no longer has parentheses or words inside the comma list, so the scope check can read it.
2. It records E1 = A2 in `status.md` Decisions. E1 is an engineering order, not PRD content, so the PRD does not change for it.
3. It leaves the OG image open and non-blocking. PRD section 7 already lists it that way, so no PRD text changes for E3.
4. Only if Leon answers yes to Q4: PRD section 9 gains CONV-005, the record-file contract the Tech Lead proposed in the same review.

No module is added, removed or renamed. No Source Path in the table changes. Current Phase is unchanged (Phase 4 — Deploy).

## Proposed status.md changes

### Module Map: replace the `Project files:` line with exactly this

```
Project files: mod-site-shell | .gitignore, site/package.json, site/package-lock.json, site/next.config.ts, site/tsconfig.json, site/eslint.config.mjs, site/postcss.config.mjs, site/.gitignore, site/AGENTS.md, site/CLAUDE.md, site/README.md, site/public/
```

### Decisions: append these two lines

```
- 2026-11-01 E1 (rev 1.5 change review): record files are created by option A2. MOD-003 adds featureImageAlt and featureImageCaption first; MOD-005, MOD-004, MOD-006 and MOD-011 each write their own record file once, with updated content; then one MOD-003 cutover imports all four, with ProjectDay second. 7 engineer runs. Leon: "A2 (Recommended)".
- 2026-11-01 E3 (rev 1.5 change review): og-image.png not answered yet; it stays an open, non-blocking item (PRD 7). Owner when supplied: mod-site-shell (by E2). Until then every page's og:image returns 404.
```

### PM Updates: append this entry at the end

If Q4 is "no" (recommended classification: trivial):

```
- 2026-11-01 [TRIVIAL] Module Map Project files line: the descriptive site/public/ list is replaced by the folder site/public/ (E2)
  Approved by Leon in the coordinator session: "<quote>"
  Proposal: project-planning/pm-proposals/2026-11-01-project-files-line.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.5: Source Paths, record-file split, engineering sequence)" (db8a1ba): E2 "site/public/ (Recommended)"; E1 "A2 (Recommended)", recorded in Decisions; E3 not answered, the OG image stays open and non-blocking.
  PRD unchanged; Revision stays 1.5. No module added, removed or renamed; no Source Path in the table changed. Current Phase unchanged (Phase 4 — Deploy).
  Modules affected: MOD-001 (mod-site-shell now owns every unclaimed site/public/ file, including the favicons, favicon_io/, site.webmanifest, Leon_cv.pdf, the About photos, head.png, Subject.png and og-image.png).
  Notes for Doc-Sync: rev 1.5 has not been synced yet. Sync rev 1.5 and this Project files line together, as Tech Lead step 0 says. The engineering sequence that follows is E1 = A2 in the Tech Lead review above.
```

If Q4 is "yes" (classification must be substantive, because Doc-Sync has to copy CONV-005 into production.md):

```
- 2026-11-01 [SUBSTANTIVE] Module Map Project files line becomes the folder site/public/ (E2), and PRD 9 adopts CONV-005, the project record-file contract; PRD rev 1.6
  Approved by Leon in the coordinator session: "<quote>"
  Proposal: project-planning/pm-proposals/2026-11-01-project-files-line.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.5: Source Paths, record-file split, engineering sequence)" (db8a1ba): E2 "site/public/ (Recommended)"; E1 "A2 (Recommended)", recorded in Decisions; E3 not answered, the OG image stays open and non-blocking; Proposed Convention (record-file contract) adopted as CONV-005.
  Sections changed: header (Revision 1.6), 9 (CONV-005 added).
  No module added, removed or renamed; no Source Path in the table changed. Current Phase unchanged (Phase 4 — Deploy).
  Modules affected: MOD-001 (mod-site-shell now owns every unclaimed site/public/ file, including og-image.png); MOD-003, MOD-004, MOD-005, MOD-006, MOD-011 (CONV-005 governs the record files and projects-data.ts).
  Notes for Doc-Sync: rev 1.5 has not been synced yet. Sync rev 1.5 and 1.6 together with this Project files line. Copy CONV-005 into production.md.
```

### Last Action (after apply)

```
agent: pm
mode: change
module: n/a
result: success
next: claude --agent doc-sync; then claude --agent engineer-mod-projects-grid "spec-update" (MOD-003 step 1 of 2 in the E1 = A2 sequence)
```

## Proposed PRD text (only if Q4 is "yes")

Header:

```
**Revision:** 1.6
**Date:** 2026-11-01
```

Section 9, appended after CONV-004:

```
- CONV-005: A project record file `site/data/projects/<slug>.ts` exports exactly one named constant annotated `ProjectEntry` and imports only types from `@/data/projects-data`. `site/data/projects-data.ts` holds only the interfaces and the ordered `projects` array. (Tech Lead Reviews, 2026-11-01 change review, rev 1.5)
```

## Images Leon still has to provide (information for E3, not a decision)

PRD section 7, "Still needed — non-blocking", lists everything still missing. None of it blocks the build or this sequence.

1. Social preview image (OG image): one 1200×630 px image used for link previews on every page. When it is supplied in `asset/`, `engineer-mod-site-shell` copies it to `site/public/og-image.png`.
2. ProjectDay feature image or screenshots: the iPhone screenshots from the App Store Connect submission. Leon chooses which ones and their order. The ProjectDay page renders without them.
3. Not an image, listed for completeness: the ProjectDay App Store link, once the listing is live.

The SitePlus+ and TabVault screenshots and the multi-agent diagram are already in place.

## Checklist and anti-patterns

- Full quality checklist run on the PRD at rev 1.5: passes. With Q4 "yes", CONV-005 carries a CONV-ID and its Tech Lead review source, which section 9 allows; the Revision is incremented.
- Post-sync items: the change summary goes to PM Updates with one tag; Module Map is updated; no module added, so no directory is created.
- Anti-patterns: no implementation detail added to PRD sections 1–8; no unrelated section touched; no `[DECISION NEEDED]` markers.

## Questions for Leon

1. Approve the `Project files:` line and the two Decisions lines exactly as written above? (Recommended: approve as written.)
2. Is this change trivial or substantive? Recommended: trivial if Q4 is "no", because only the Module Map line changes and the PRD does not. If Q4 is "yes" it has to be substantive.
3. Is it architectural, that is, does it change how the system is built? Recommended: no. The Tech Lead already reviewed and recommended this exact line, so it does not need another `/pstack:how` and change review.
4. The Tech Lead's review also proposed a convention: each project record file exports one constant annotated `ProjectEntry` and imports only types from `projects-data.ts`, which keeps only the interfaces and the ordered array. Adopt it now as CONV-005 in PRD section 9 (PRD rev 1.6, change becomes substantive)? Recommended: yes. The four record-file runs in E1 = A2 depend on this contract, and adopting it puts it in `production.md`, where those engineers read it. If no, the contract lives only in the Tech Lead review.
