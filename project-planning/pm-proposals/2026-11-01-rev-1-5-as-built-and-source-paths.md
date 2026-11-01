Status: applied 2026-11-01

# PM proposal: PRD rev 1.5, Source Paths for the shared project files and PRD records of the as-built site

- Date: 2026-11-01
- Mode: change (proposal pass)
- Answers: Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.4 cross-module: shared project files, out-of-framework drift)", commit f7de263
- Leon's answers already given (coordinator session, multiple-choice prompt):
  - D1: "A: split files (Recommended)"
  - D2: "Keep as-built (Recommended)". The option text also said: "Also confirms the SitePlus+ Demo Video link, the Images sections, and www.leon-wu.com."
  - D3: "Keep mine (Recommended)"
  - D4: "Per source file (Recommended)"
- Numbers: Revision 1.5. No new AC IDs. The highest existing AC ID stays AC-092. The only other proposal file is applied, so it reserves no numbers.

## What this change does

1. It adds a Source Path column and a `Project files:` line to the `status.md` Module Map (D1 = A). Ownership becomes file-level, so the hook and the self-check can enforce it.
2. PRD sections 4.1, 4.3, 4.4, 4.5, 5, 6 and 7 now describe the site as Leon built it (D2, D3): the content model, link layout, Images sections, the SitePlus+ Demo Video link, the www.leon-wu.com domain, and the Home copy.
3. D4 needs no PRD text change. PRD 4.3 to 4.5 already have the commas and 4.6 has none. The PM Updates entry tells Doc-Sync to fix the MOD-004 and MOD-006 spec drift.
4. If Leon answers yes to Q4, a new section 9 Adopted Conventions holds the four conventions the Tech Lead proposed.

Values PM cannot see: PM does not read source code. Some as-built values appear only in `site/`, so this proposal marks them «P1» to «P6». Q2 asks the coordinator to paste each one verbatim from the code at f7de263 into the approval message. The apply pass writes them exactly as pasted.

- «P1» Home bio paragraph, exact text from `site/app/page.tsx`
- «P2» Home current status line, exact text from `site/app/page.tsx`
- «P3» Home secondary and tertiary CTA labels, and their targets (the review flags only the primary CTA as changed)
- «P4» SitePlus+ links: `name`, `label` and `href` of each link, in order, from `site/data/projects-data.ts` (includes the Demo Video URL)
- «P5» TabVault links: `name`, `label` and `href` of each link, in order
- «P6» For SitePlus+ and TabVault: the position of the "Images" section among the sections, and the image paths it lists, in order. Also the `featureImage` value if either record has one.

## Proposed PRD text (project-planning/prd.md)

### Header

```
**Revision:** 1.5
**Date:** 2026-11-01
```

### Table of Contents

Add after "8. Out of Scope" (only if Q4 = yes):

```
9. Adopted Conventions
```

### 4.1 Home: replace the Content table, Bio and Current status line

```
| Element | Copy |
|---|---|
| Greeting headline (H1) | Hey, I'm Leon 👋 |
| Primary CTA | Connect on LinkedIn |
| Secondary CTA | «P3» |
| Tertiary CTA | «P3» |

No title/role subtitle appears under the H1.

**Bio (body text):**

> «P1»

**Current status line:**

> «P2»
```

The rest of 4.1 does not change (projects list, layout notes, LinkedIn target, no headshot). Doc-Sync aligns AC-011 to AC-015 in the MOD-002 spec with this text.

### 4.3 SitePlus+: replace Link 1 and Link 2 rows, add the Images section

Header table rows (replacing "Link 1 | Live demo ..." and "Link 2 | GitHub ..."):

```
| Link 1 | «P4, link 1: plain-text prefix, then the linked label, then the URL» |
| Link 2 | «P4, link 2» |
```

Add one line under the header table:

```
Each link shows its plain-text prefix followed by the linked label; only the label is a link.
```

Case study sections: insert `Images` at «P6 position» and renumber the list (9 sections). Add one line under the list:

```
The Images section shows the SitePlus+ screenshots («P6 image paths, in order») and has no paragraphs.
```

### 4.4 Multi-Agent System: replace the three Link rows and AC-092

```
| Link 1 | "Built by the system: " followed by the linked label "tab-vault.com" — https://tab-vault.com |
| Link 2 | "GitHub: " followed by the linked label "System repo" — https://github.com/LeonWu813/multi-agent-software-development-system |
| Link 3 | "GitHub: " followed by the linked label "TabVault repo" — https://github.com/LeonWu813/tab-management |
```

(The `—` in these rows is PRD table notation, as in the rows it replaces. It is not page copy.)

AC-092 becomes:

```
- AC-092: The At-a-glance line, tags, three links, description pull-quote, and every section paragraph on /projects/multi-agent-system match this section and the source file word for word. Each link shows its plain-text prefix followed by the linked label, as in the header table, and only the label is a link. The editor's line "Feature image: ..." from the source file does not appear on the page.
```

AC-091 does not change.

### 4.5 TabVault: replace Link 1 and Link 2 rows, add the Images section

```
| Link 1 | «P5, link 1» |
| Link 2 | «P5, link 2» |
```

Add the same "Each link shows its plain-text prefix ..." line. Insert `Images` at «P6 position» and renumber (9 sections). Add:

```
The Images section shows the TabVault screenshots («P6 image paths, in order») and has no paragraphs.
```

### 5. Content Model: replace ProjectLink, ProjectSection and ProjectEntry

```typescript
interface ProjectLink {
  name: string;    // plain-text prefix shown before the link, e.g. "GitHub: "
  label: string;   // the linked text
  href: string;
}
```

```typescript
type SectionItem = string | { image: string };   // a paragraph (may contain **bold**) or an image

interface ProjectSection {
  heading: string;
  items: SectionItem[];
}
```

```typescript
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

Records:

- Record 1 SitePlus+, `links:` replaced with «P4» as `{ name, label, href }` entries. Add `featureImage` only if «P6» shows one.
- Record 2 Multi-Agent, `links:` becomes:
  ```
  links:
    - { name: "Built by the system: ", label: "tab-vault.com", href: "https://tab-vault.com" }
    - { name: "GitHub: ", label: "System repo", href: "https://github.com/LeonWu813/multi-agent-software-development-system" }
    - { name: "GitHub: ", label: "TabVault repo", href: "https://github.com/LeonWu813/tab-management" }
  featureImage: the landscape diagram in section 4.4 (a copy of asset/diagrams/multi-agent-horizontal.png; file name and location are the Tech Lead's call)
  featureImageAlt: "Workflow diagram of the multi-agent system. A planning row runs from user requirements through PM, Tech Lead, human setup and approval, PM finalize, and Doc-Sync. A build row runs through Engineer, QA, Tech Lead integration review, PM checkpoint, and project complete, with loops for bugs, repeat failures, spec issues and retrospectives, all run by a coordinator session."
  featureImageCaption: "Human approval sits on every arrow. The coordinator runs the next step only after the human says yes."
  ```
- Record 3 TabVault, `links:` replaced with «P5». Add `featureImage` only if «P6» shows one.
- Record 4 ProjectDay does not change (`links: []`).

### 6. Functional and Technical Requirements

SEO and Open Graph: add a line after "Canonical URL tag":

```
- Canonical URL and og:url use the domain https://www.leon-wu.com followed by the page path.
```

Deployment, replace the Domain bullet:

```
- **Domain:** www.leon-wu.com. Configure via Vercel domain settings.
```

### 7. Assets Needed

Confirmed table, add these rows:

```
| Domain | https://www.leon-wu.com |
| SitePlus+ screenshots | Shown in the SitePlus+ Images section (section 4.3) |
| TabVault screenshots | Shown in the TabVault Images section (section 4.5) |
```

"Still needed — blocking": replace the domain row with the line `None.` (keep the heading).

"Still needed — non-blocking": remove the rows "Screenshot(s) of SitePlus+ dashboard" and "Screenshot(s) of TabVault PWA / Chrome extension".

### 1. Overview and 4.10 Contact (only if Q3 picks an option that changes them)

- Section 1 Purpose: "seeking a Summer 2026 software engineering internship" becomes the same wording as «P2» ("2026/2027").
- 4.10 Contact intro line: "Looking for a Summer 2026 internship ..." becomes "Looking for a 2026/2027 internship in full-stack, frontend, or backend engineering. If you're working on something interesting, I'd love to hear about it."

### 9. Adopted Conventions (new section, only if Q4 = yes)

```
## 9. Adopted Conventions

Conventions proposed by the Tech Lead and approved by Leon. Doc-Sync copies them into production.md.

- CONV-001: The shared project frame belongs to MOD-003: `site/app/projects/`, `site/components/ProjectList.tsx`, `site/components/ProjectMobileNav.tsx`, and the interfaces and ordered `projects` array in `site/data/projects-data.ts`. Each project-detail module owns only its record file `site/data/projects/<slug>.ts` and its `site/public/<prefix>*` assets. A detail module that needs a template change logs `blocked-technical` for MOD-003 and does not edit the template itself. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-002: A project record's position in `projects` is its display order everywhere: the side panel, the mobile switcher and the Home list. `projects[0]` is the `/projects` redirect target. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-003: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render. (Tech Lead Reviews, 2026-11-01 change review)
- CONV-004: A `spec-update` changes only the ACs named in the triggering Sync Report. Code that differs from the spec in other ACs is reported in Engineering Progress and is not changed. (Tech Lead Reviews, 2026-11-01 change review)
```

## Proposed status.md changes

### Module Map (replaces the current table)

```
| MOD-ID  | Directory                  | Module Name                          | Source Path |
|---------|----------------------------|--------------------------------------|-------------|
| MOD-001 | mod-site-shell             | Site Shell (Layout, Sidebar, Nav, Footer, Dark Mode) | site/app/layout.tsx, site/app/globals.css, site/app/favicon.ico, site/app/apple-touch-icon.png, site/components/Sidebar.tsx, site/components/ThemeToggle.tsx, site/components/TopNav.tsx |
| MOD-002 | mod-home                   | Home Page                            | site/app/page.tsx |
| MOD-003 | mod-projects-grid          | Projects Grid Page                   | site/app/projects/, site/components/ProjectList.tsx, site/components/ProjectMobileNav.tsx, site/data/projects-data.ts |
| MOD-004 | mod-project-marketing      | Project Detail: SitePlus+            | site/data/projects/siteplus.ts, site/public/siteplus* |
| MOD-005 | mod-project-multi-agent    | Project Detail: Multi-Agent System   | site/data/projects/multi-agent-system.ts, site/public/multi-agent* |
| MOD-006 | mod-project-tabvault       | Project Detail: TabVault             | site/data/projects/tabvault.ts, site/public/tabvault-* |
| MOD-007 | mod-experience             | Experience Page                      | site/app/experience/, site/data/experience-data.ts |
| MOD-008 | mod-about                  | About Page                           | site/app/about/ |
| MOD-009 | mod-skills                 | Skills Page                          | site/app/skills/, site/data/skills-data.ts |
| MOD-010 | mod-contact                | Contact Page                         | site/app/contact/ |
| MOD-011 | mod-project-projectday     | Project Detail: ProjectDay           | site/data/projects/projectday.ts, site/public/projectday-* |

Project files: mod-site-shell | .gitignore, site/package.json, site/package-lock.json, site/next.config.ts, site/tsconfig.json, site/eslint.config.mjs, site/postcss.config.mjs, site/.gitignore, site/AGENTS.md, site/CLAUDE.md, site/README.md, site/public/ files no module pattern matches (favicons, favicon_io/, android-chrome-*, apple-touch-icon.png, site.webmanifest, Leon_cv.pdf, *.svg, and the files in Q5)
```

Notes on the map:
- No two paths overlap or nest. No module owns `site/app/` as a whole, so `site/app/page.tsx` (MOD-002) and `site/app/projects/` (MOD-003) do not nest.
- `site/public/siteplus*` also matches Leon's existing `siteplusplus-*` files, as the Tech Lead noted.
- `asset/`, `DESIGN.md` and `portfolio-plan.md` are Leon's own content and planning files. They stay outside every Source Path.
- MOD-004, MOD-005 and MOD-006 record files do not exist yet. MOD-003 creates them when it splits `projects-data.ts`. See Note A.

### PM Updates (appended at the end of the section)

```
- 2026-11-01 [SUBSTANTIVE] [ARCHITECTURAL] Source Paths for every module with the shared project files split per D1=A, and the PRD records the as-built site (content model, links, Images sections, Demo Video, domain, Home copy); PRD rev 1.5
  Approved by Leon in the coordinator session: "<quote>"
  Proposal: project-planning/pm-proposals/2026-11-01-rev-1-5-as-built-and-source-paths.md
  Answers Tech Lead Reviews "Review — 2026-11-01 — change (rev 1.4 cross-module ...)" (f7de263): D1 "A: split files (Recommended)"; D2 "Keep as-built (Recommended)" (also confirms the SitePlus+ Demo Video link, the Images sections, and www.leon-wu.com); D3 "Keep mine (Recommended)"; D4 "Per source file (Recommended)".
  Sections changed: header, 4.1 (Home copy), 4.3 and 4.5 (links, Images section), 4.4 (links, AC-092), 5 (ProjectLink, ProjectSection, ProjectEntry, Records 1-3), 6 (domain), 7 (assets) <+ 1 and 4.10 per Q3> <+ new 9 Adopted Conventions CONV-001 to CONV-004 per Q4>.
  Module Map: Source Path column and Project files line added (owner mod-site-shell). No module added, removed or renamed. Current Phase unchanged (Phase 4 — Deploy).
  Markers resolved: the domain/og:url AMBIGUITY marker in every page spec ("PRD lists domain name as a still-needed blocking asset ...") is resolved by PRD 6 and 7: https://www.leon-wu.com.
  Modules affected: MOD-002 (AC-011 to AC-015 follow the live Home copy, so the spec changes and the code does not), MOD-003 (owns the shared frame; splits projects-data.ts into one record file per project; adds feature-image alt and caption to the template), MOD-004 and MOD-006 (links, Images section, comma headings, "four projects"), MOD-005 (links form for AC-044 and AC-092), MOD-011 (record file and content model), every page spec (domain) <+ MOD-010 per Q3>.
  Notes for Doc-Sync: also fix the drift your 2026-11-01 Sync Report listed, which this entry triggers: the MOD-004 and MOD-006 specs drop commas the PRD has (D4: each page matches its own source file), and still say "three strong projects" and "all three project slugs"; production.md still has rev 1.2 text for the design palette, layout, data-file/markdown statements, and the Module Index descriptions for MOD-003 and MOD-004.
  Notes for Tech Lead (change review): engineering order and the preservation list are in your 2026-11-01 review (option A order). See Note A in the proposal on who creates the per-project record files.
```

### Decisions

Only if Leon gives answers in Q3 or Q5 that are not PRD content, for example "Q5: IMG_* files are ...". Otherwise none.

### Last Action

```
agent: pm
mode: change
module: n/a
result: success
next: the coordinator runs /pstack:how on site/app/projects/, site/data/projects-data.ts and site/components/Project*.tsx and saves the output to project-planning/pstack-findings/, then claude --agent tech-lead "change review" (rev 1.5 Source Paths and as-built records), then claude --agent doc-sync
timestamp: <apply time>
```

(If Q7 = not architectural, `next:` is `claude --agent doc-sync`.)

## Note A for the Tech Lead (not a PRD question)

With these Source Paths, `site/data/projects/siteplus.ts` belongs to MOD-004, `multi-agent-system.ts` to MOD-005 and `tabvault.ts` to MOD-006. The review's option A order has MOD-003 split the data file first, so MOD-003 would create files that other modules own, and the scope hook may block it. The Tech Lead's change review should settle how this works. One way: the split runs as a one-time exception. Another: each detail module moves its own record when it runs. PM makes no call on this.

## Questions for Leon (numbered)

1. **Approval.** Do you approve this change as written, including the Module Map above with `mod-site-shell` as the project files owner? Please quote your answer.
2. **As-built values (for the coordinator).** PM does not read code. Please paste «P1» to «P6» verbatim from the code at f7de263 into the approval, and the apply pass writes them exactly. Recommended: paste. If you'd rather not, the PRD would say "as in `site/data/projects-data.ts` / `site/app/page.tsx` at commit f7de263" instead. That works, but then the PRD stops being self-contained for those values.
3. **"Summer 2026" elsewhere.** Your Home page now says 2026/2027. Section 1 Purpose and the Contact page intro (4.10) still say "Summer 2026". Options: (a) update both, which adds a MOD-010 spec-update for the Contact page copy; (b) update section 1 only, so no page changes; (c) leave both. Recommended: (a), so a recruiter sees one consistent date on every page.
4. **Conventions.** Should the Tech Lead's four proposed conventions go into a new PRD section 9 as CONV-001 to CONV-004, worded as above? Recommended: yes. Your D1 and D4 answers already follow CONV-001 and CONV-003.
5. **Unmatched images in `site/public/`.** `IMG_6353.jpg`, `IMG_6591.jpg`, `IMG_6605.jpg`, `IMG_6875.JPG`, `4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG`, `Subject.png` and `head.png` match no project's file pattern. What are they? If they are ProjectDay screenshots, they belong to MOD-011 and PRD 4.6 and 7 would change in a later change. Otherwise they stay with `mod-site-shell` as project files. No recommendation: only you know what they are.
6. **Trivial or substantive?** Recommended: substantive. Module ownership changes and six modules' specs change.
7. **Architectural?** Does this change how the system is built? Recommended: yes. It changes module boundaries (Source Paths) and splits the shared data file. The coordinator then runs `/pstack:how`, and the Tech Lead reviews it before Doc-Sync.
