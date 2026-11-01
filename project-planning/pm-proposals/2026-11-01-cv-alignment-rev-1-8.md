Status: pending

# PM proposal: align the site with the updated CV (PRD rev 1.8)

- Date: 2026-11-01
- Mode: change (proposal pass)
- Leon's rule, quoted exactly: "use the updated cv if information not align"
- Leon's answers already given (coordinator session, multiple-choice prompt, exact selected options):
  - Email: "Keep Gmail on site". The site keeps leon.wu.tsan.yu@gmail.com everywhere. wu.tsan@northeastern.edu is not added.
  - Phone/city: "Add both". The Contact page gains "+1 206-677-7544" and "Seattle, WA".
  - Skills: "CV + keep true extras". The CV's five groups, items and order, plus an extra group for the site's other skills.
  - Extras: "Keep non-conflicting". Only real contradictions with the CV change. The SitePlus+ name, the Exascend 22.3% engagement figure and extra tech tags (Python, Redux, Cloudflare) stay.
- Source copy: Leon's commit e479e22 ("human: source copy aligned with the updated CV") changed asset/content/skills.md, experience.md, site-copy.md, case-study-siteplus-detailed.md and interview-deck.md. These files are the word-for-word inputs below.
- Numbers: next AC IDs start at AC-120 (highest in the PRD is AC-119; no other proposal is pending). Revision becomes 1.8.
- Sequencing: rev 1.7 (9d6eb14) is applied but not yet reviewed by the Tech Lead or synced. This change becomes rev 1.8 on top of it, so one /pstack:how, one Tech Lead change review and one Doc-Sync cover both. Rev 1.7's order of runs stays (Tech Lead review, design team and Leon's slideshow design approval, then Doc-Sync).

## Contradictions found and what changes

| Where (module) | Site now | CV | Change |
|---|---|---|---|
| Sidebar subtitle (MOD-001), PRD 2 | "Full-Stack Engineer" | "Full-Stack Software Engineer" | "Full-Stack Software Engineer" (Q4) |
| Experience meta description (MOD-007) | "Growth Marketer at GoFreight", "MS in Computer Science" | "Marketing Project Manager", "Master of Science in Computer Science" | New description (AC-121). Rev 1.7 does not cover this: AC-118 is about what shows on the page, not the meta tags. |
| Experience Exascend bullet (MOD-007), PRD 4.7 | (rev 1.7 removed 22.3% and AC-118 forbids it) | CV has no 22.3% | Bullet keeps "and increasing average session engagement time by 22.3%" per experience.md at e479e22; "22.3%" leaves AC-118's forbidden list |
| Skills groups (MOD-009), PRD 4.9 | 6 old groups | 5 CV groups | CV groups + "Also" group per skills.md (AC-122) |
| Skills meta description (MOD-009) | lists "databases, cloud, DevOps, analytics, and design" | — | New description (AC-122). The visible intro line "Languages, frameworks, and tools I work with." is still true and stays. |
| Contact (MOD-010), PRD 4.10 | no phone, no city | Seattle, WA; +1 206-677-7544 | Phone and Location rows (AC-123) |
| SitePlus+ (MOD-004), PRD 4.3 | rate limit unquantified; failover sentence old; "Resilience on purpose" paragraph missing (coordinator's finding) | 50 req/min per IP; ALB fails over 100% of traffic | Paragraphs follow the source at e479e22 (AC-120). CONV-003 already requires every paragraph word for word, so the missing paragraph is a defect against CONV-003 today, and the fix adds it. |
| SitePlus+ tags (MOD-004) | no Spring Security / JWT | Spring Security/JWT | Add the tag "Spring Security / JWT" (Q5) |
| Slideshow copy (MOD-012), PRD 4.11 | deck at d8afeef | — | Deck reference moves to e479e22 (titles "Full-Stack Software Engineer", "MSCS Candidate, Northeastern University"; full degree names on the timeline; C3 stack adds "Spring Security / JWT"; C6 bullet "50 req/min per IP, shared in Redis"). AC-100 already reads the file word for word, so no new AC. |
| Full name order (MOD-001, MOD-008, page metadata) | "Tsan-Yu (Leon) Wu" | "Tsan-Yu Wu (Leon)" | Q3 |

Not contradictions, so they stay (Leon's "Keep non-conflicting"):
- Home bio "I'm a full-stack engineer and CS master's student at Northeastern" and About "pursuing my MS in Computer Science". Leon's e479e22 left this prose as it was in site-copy.md and changed only the formal degree names (education block, deck timeline). Shortened degree names in prose stay; formal credential labels use the CV's full names.
- Root title "Leon Wu — Software Engineer" (MOD-001). It is shorter than the CV's title, not different from it. The root description (layout.tsx) was not quoted to PM; see Q6.
- SitePlus+ name (CV: "Campaign & SEO Management Platform"), Python/Redux/Cloudflare tags, Gmail address, the multi-agent repo link (see note 1).

## Proposed PRD changes (verbatim)

### Header

`**Revision:** 1.7` becomes `**Revision:** 1.8`.

### Section 2, Layout, first bullet: replace with

```
- Profile section: LW initials circle (accent-colored), name "Leon Wu", subtitle "Full-Stack Software Engineer".
```

Then add directly after the Layout bullet list (before "Main content area ..."):

```
**Acceptance criteria (added in revision 1.8):**
- AC-124: The sidebar profile subtitle reads "Full-Stack Software Engineer" wherever the profile section shows (desktop sidebar, and the mobile drawer if it shows the profile), on one line, not truncated, at 1280px and at 375px wide.
```

### Section 4.3 SitePlus+

Replace the Source file line with:

```
**Source file:** `asset/content/case-study-siteplus-detailed.md` (as of commit e479e22). It was aligned with Leon's CV on 2026-11-01.
```

If Q5 = yes, replace the Tags row with:

```
| Tags | Full-Stack · Java/Spring Boot · Spring Security / JWT · React · TypeScript · Redux Toolkit · PostgreSQL · Redis · Docker · GitHub Actions · AWS |
```

If Q7 = (b), replace the Link 1 row with:

```
| Link 1 | "Demo: " followed by the linked label "interactive walkthrough" — https://app.supademo.com/demo/cmosxfpu96m3ew9doctdnhtah |
```

Add at the end of section 4.3 (after the Inline bold line):

```
**Acceptance criteria (added in revision 1.8):**
- AC-120: On /projects/siteplus, every section heading and paragraph matches the source file at commit e479e22 word for word, as CONV-003 requires. In particular, "Key engineering decisions" includes the paragraph that starts "**Resilience on purpose.**" and ends "fails over 100% of traffic to the survivor automatically.", and the paragraph that starts "**Securing an endpoint that has to be public.**" says "50 requests per minute per IP". The tag chips match the Tags row above, in that order.
```

### Section 4.7 Experience

Replace the Source file paragraph with:

```
**Source file:** `asset/content/experience.md` (as of commit e479e22). It was aligned with Leon's CV (`asset/Leon_cv.pdf`, replaced on 2026-11-01 with his newer CV) on 2026-11-01; the CV is the source of truth for titles, dates and bullets. One true detail that is not on the CV stays at Leon's choice: the 22.3% session-engagement figure on the Exascend bullet.
```

Replace Role 1's second bullet with:

```
  - Two customer-facing websites went from requirements to shipped product under my ownership (HTML, CSS, JavaScript), growing monthly active users 3.5x, from 12,000 to 41,350, and increasing average session engagement time by 22.3%.
```

Replace AC-118 with:

```
- AC-118: /experience shows Exascend first and GoFreight second. Each role's title, company, location, dates, every bullet and every tag chip match this section word for word, in the order listed. No other bullet or chip appears; in particular none of the earlier copy shows ("Growth Marketer", "0.38% to 2.55%", "Baidu Ads", "JCTrans", "350%", "670%"). (Changed in revision 1.8: the Exascend bullet keeps "22.3%", so it is no longer on this list.)
```

Add after AC-119:

```
- AC-121 (added in revision 1.8): The /experience meta description is exactly "Professional experience and education of Tsan-Yu Wu (Leon): Front-End Developer at Exascend, Marketing Project Manager at GoFreight, Master of Science in Computer Science at Northeastern University." The Open Graph and Twitter descriptions are exactly "Professional experience and education of Tsan-Yu Wu (Leon)." No meta tag on /experience contains "Growth Marketer" or "MS in Computer Science".
```

### Section 4.9 Skills

Replace from "**Skill groups:**" through the end of the table with:

```
**Source file:** `asset/content/skills.md` (as of commit e479e22). The first five groups are the CV's skills section, item for item and in the CV's order. The last group, "Also", keeps true skills from the site that the CV does not list (Leon's choice, 2026-11-01).

**Skill groups (in this order):**

| Category | Skills |
|---|---|
| Languages | Java, TypeScript, JavaScript, Python, SQL, C++ |
| Backend | Spring Boot, Spring Security, Spring Data JPA/Hibernate, JWT, PostgreSQL, Redis, REST APIs, JUnit/Mockito |
| Frontend | React, Redux Toolkit/Zustand, TanStack Query, Tailwind CSS |
| Infrastructure & DevOps | Git, Docker, CI/CD (GitHub Actions), AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront) |
| AI & Agentic Development | Claude Code (subagents, skills, hooks), agentic workflow orchestration, LLM API integration |
| Also | C, HTML, CSS, Vite, Axios, Recharts, Nginx, Maven, Quartz, AWS ECS Fargate, Claude API, Figma, GA4, SEO, WCAG |
```

Keep "Each category rendered as a labeled group with chip/badge elements per skill." and add after it:

```
**Acceptance criteria (added in revision 1.8):**
- AC-122: /skills shows exactly the six groups in the table above, in that order, with each category name and each skill chip word for word and in the order listed (one chip per comma-separated item; "AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)" and "Claude Code (subagents, skills, hooks)" are one chip each). No other group or chip appears. The intro line stays "Languages, frameworks, and tools I work with." The meta, Open Graph and Twitter descriptions are exactly "Technical skills of Tsan-Yu Wu (Leon): languages, backend, frontend, infrastructure and DevOps, and AI and agentic development."
```

### Section 4.10 Contact

Replace the Contact methods table with:

```
| Method | Display | Action |
|---|---|---|
| Email | leon.wu.tsan.yu@gmail.com | mailto: link |
| Phone | +1 206-677-7544 | tel:+12066777544 link |
| Location | Seattle, WA | Plain text, not a link |
| LinkedIn | linkedin.com/in/leon-wu-tsan-yu | https://www.linkedin.com/in/leon-wu-tsan-yu/ |
| GitHub | github.com/LeonWu813 | https://github.com/LeonWu813 |
```

Add after "A real email address (not only a contact form) is required. ...":

```
The phone number and city come from Leon's CV (2026-11-01). The email stays the Gmail address, not the CV's university address (Leon's choice). The phone appears only on the Contact page, not in the sidebar's Online block.

**Acceptance criteria (added in revision 1.8):**
- AC-123: /contact lists, in this order, Email, Phone, Location, LinkedIn, GitHub and Resume, each with the label and display text in the table above, in the same style as the existing items. Phone links to tel:+12066777544 and opens the dialer on a phone. Location is plain text. No other phone number or email address appears on the page, and the sidebar's Online block is unchanged.
```

### Section 4.11 Slideshow

In the Source file line, `(as of commit d8afeef)` becomes `(as of commit e479e22)`.

### Section 6, SEO and Open Graph (only if Q3 = CV order)

Add after the canonical URL bullet:

```
- Wherever a page shows or describes Leon by his full name (page text and meta descriptions), it is written "Tsan-Yu Wu (Leon)", as on his CV. The short name "Leon Wu" in the sidebar, the mobile wordmark and page titles stays.

**Acceptance criteria (added in revision 1.8):**
- AC-125: In the built HTML of every route, the text "Tsan-Yu (Leon) Wu" does not appear, and every full-name mention reads "Tsan-Yu Wu (Leon)".
```

If Q3 = keep, AC-125 is not used, and in AC-121 and AC-122 "Tsan-Yu Wu (Leon)" becomes "Tsan-Yu (Leon) Wu".

### Section 7, Confirmed assets: add rows after "Public email"

```
| Public phone (Contact page only) | +1 206-677-7544 |
| Location | Seattle, WA |
| Skills content | `asset/content/skills.md` |
```

## Proposed status.md changes

### PM Updates: append at the end

```
- 2026-11-01 [SUBSTANTIVE] Align the site with Leon's updated CV: sidebar title, SitePlus+ paragraphs and tags, Experience bullet and meta, Skills groups, Contact phone and city, deck source commit, full-name order; PRD rev 1.8
  Approved by Leon in the coordinator session: "<quote>"
  Leon's rule: "use the updated cv if information not align". Earlier answers (multiple-choice): Email "Keep Gmail on site"; Phone/city "Add both"; Skills "CV + keep true extras"; Extras "Keep non-conflicting".
  Proposal: project-planning/pm-proposals/2026-11-01-cv-alignment-rev-1-8.md
  Source commit: e479e22 replaces d8afeef for experience.md and interview-deck.md; skills.md and case-study-siteplus-detailed.md are cited at e479e22.
  Sections changed: header, 2 (subtitle, AC-124), 4.3 (source commit, tags, AC-120), 4.7 (source note, Exascend bullet, AC-118 changed, AC-121), 4.9 (source file, six groups, AC-122), 4.10 (Phone and Location, AC-123), 4.11 (source commit), 6 (full-name rule, AC-125), 7 (assets).
  Modules affected: MOD-001 (sidebar subtitle AC-124; full name in layout metadata AC-125), MOD-004 (record paragraphs, the missing "Resilience on purpose" paragraph, tags; AC-120), MOD-007 (Exascend bullet, meta description; AC-118, AC-121), MOD-008 (full name; AC-125), MOD-009 (groups and meta; AC-122), MOD-010 (phone and location; AC-123; full name in its meta), MOD-012 (deck copy at e479e22; AC-100 unchanged), and any other page whose metadata names Leon in full (AC-125; the Tech Lead confirms the list).
  No module added, removed or renamed. Current Phase unchanged (Phase 4 — Deploy).
  Order of runs: rev 1.7 and 1.8 share one /pstack:how, one Tech Lead change review and one Doc-Sync.
  Notes for Doc-Sync: rev 1.7 has not been synced; sync 1.7 and 1.8 together. The MOD-007, MOD-009 and MOD-010 specs were last synced at PRD 1.2: rebuild each against PRD 4.7, 4.9 and 4.10 as a whole. AC-118 changed in 1.8 (22.3% allowed). Deck copy is word for word from interview-deck.md at e479e22.
  Notes for Tech Lead (change review): AC-124 asks for "Full-Stack Software Engineer" on one line in a w-64 sidebar; say if it needs a smaller size or a layout change. Leon's open sign-offs AC-017 (mod-home) and AC-091 (mod-project-multi-agent, 375px) are unaffected by this change.
```

(Q7, Q3, Q5 and Q6 answers are recorded in this entry's "Answers applied" line on the apply pass.)

### Decisions: append

```
- 2026-11-01 (rev 1.8): the CV's multi-agent repo link github.com/LeonWu813/multi-agent-development-system returns 404 (coordinator check, PM re-check 2026-11-01). The site keeps https://github.com/LeonWu813/multi-agent-software-development-system (HTTP 200). Fixing the CV is Leon's, outside the framework.
```

### Last Action (apply pass)

```
agent: pm
mode: change
module: n/a
result: success
next: the coordinator runs /pstack:how on site/app/layout.tsx, site/components/Sidebar.tsx and site/app/projects/[slug]/page.tsx, saves the output to project-planning/pstack-findings/ and commits it, then claude --agent tech-lead "change review" (PRD rev 1.7 and 1.8 together). Then the design team on the MOD-012 slideshow, Leon's approval, and claude --agent pm "record slideshow design approval" with his exact words. Then claude --agent doc-sync.
```

## Notes for Leon (no decision needed)

1. Your CV's multi-agent GitHub link, github.com/LeonWu813/multi-agent-development-system, is broken (HTTP 404). The real repo is github.com/LeonWu813/multi-agent-software-development-system. The site keeps the working link. Fix the CV PDF yourself; the site then serves the corrected file.
2. A phone number on a public page gets scraped by spam callers. You chose "Add both", so it is in the proposal; a later change can drop it.
3. The "Also" group includes three items that the live site did not show before but your source file lists: Quartz, AWS ECS Fargate and Claude API (all used in TabVault).
4. Not CV conflicts, left alone: site-copy.md line 19 still says "Summer 2026 internship" while the site says 2026/2027 (the PRD and site are right; the source file is stale). The CV summary's "two self-built platforms (one adopted by a real company) and one AI-orchestrated system" has no site counterpart and needs none.
5. The MOD-007, MOD-009 and MOD-010 specs are still at PRD 1.2; Doc-Sync rebuilds them in this sync. Your sign-offs on AC-017 and AC-091 are still pending.

## Questions

1. Approve the PRD and status.md changes above as written, with your answers to Q3 to Q7 applied? Recommendation: yes.
2. Trivial or substantive? Recommendation: substantive. It adds ACs AC-120 to AC-125, changes AC-118, and three specs need a rebuild.
3. Full name: change "Tsan-Yu (Leon) Wu" to the CV's "Tsan-Yu Wu (Leon)" everywhere on the site (AC-125), or keep the site's form? It is the same name in a different order, so it is not a contradiction of fact, but it is "not aligned" in your words, and PRD section 1 already uses the CV form. Recommendation: CV form.
4. Sidebar subtitle: "Full-Stack Engineer" becomes "Full-Stack Software Engineer" (CV title, and your e479e22 site-copy.md)? Recommendation: yes. The Tech Lead checks it fits on one line (AC-124).
5. SitePlus+ tags: add "Spring Security / JWT" after "Java/Spring Boot" (on your CV and in the source file)? Recommendation: yes.
6. Root page description in site/app/layout.tsx (MOD-001): PM was not shown its text. Rule to apply: if it names a role, degree or employer differently from the CV, it changes the same way as the Experience description; otherwise it stays. The Tech Lead checks it in the change review and the engineer applies the rule. Recommendation: apply that rule.
7. SitePlus+ demo link: your source file and CV say "Demo"; the site shows "Demo Video: link" (approved in rev 1.5). Supademo is a click-through walkthrough rather than a video. (a) keep "Demo Video: link"; (b) "Demo: " followed by the linked label "interactive walkthrough". Recommendation: (b).
8. Architectural? Recommendation: no. Every change is copy or a data list; no module boundary, data model or stack change. The Tech Lead still reviews it, because rev 1.7's architectural review has not run and covers both.
9. Contact layout: Phone and Location go between Email and LinkedIn, Phone as a tel: link, Location as plain text, and the phone only on the Contact page (not in the sidebar's Online block)? Recommendation: yes.

Already answered (not asked again): keep Gmail, add phone and Seattle, skills = CV groups + "Also", keep non-conflicting extras (SitePlus+ name, 22.3%, extra tags), keep the site's multi-agent repo link, sequencing as rev 1.8 with one Tech Lead review and one Doc-Sync.
