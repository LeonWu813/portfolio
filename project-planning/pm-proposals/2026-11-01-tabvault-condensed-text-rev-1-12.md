Status: applied 2026-11-01

# PM proposal: TabVault keeps its shorter case-study text (exception to CONV-003), SitePlus+ diagram note (PRD rev 1.12)

Mode: change, proposal pass. Nothing in prd.md or in any other status.md section has changed yet. Reserved numbers: Revision 1.12, AC-133. No other proposal is pending (all eight earlier files are `applied`); the highest AC in the PRD is AC-132.

Sources:
- MOD-006 QA Run 4 (f6c603f), `project-planning/modules/mod-project-tabvault/status.md`, "Requirement check: CONV-003 word for word": FAIL, classified as an implementation bug, with the caveat that the condensed text was accepted in earlier runs and that keeping it is a PM decision.
- Leon's answer in the coordinator session, to "(a) Full text, matching your case study exactly ... (b) Keep the shorter version: PM records the condensed text as intended": "TabVault go with (b)".
- MOD-004 QA (dd390a9), `project-planning/modules/mod-project-marketing/status.md`: the SitePlus+ mermaid architecture diagram and data-model tree are not on the page; not a failure; "a PM decision if wanted".
- `git log` only (no source read): `site/data/projects/tabvault.ts` was last changed in c612306, the spec-update QA Run 4 verified. That commit's paragraphs are the text Leon chose to keep.

---

## 1. PRD changes (verbatim text to write)

### 1.1 Header

`**Revision:** 1.11` becomes `**Revision:** 1.12`. Date stays 2026-11-01.

### 1.2 Section 4.5, TabVault: Body copy (new)

Insert after the TabVault screenshot table (the `/tabvault-plugin.png` row), before the `---` that closes section 4.5:

> **Body copy (added in revision 1.12):** The page keeps the shorter text Leon chose, not the full source file. This is an exception to CONV-003, chosen by Leon on 2026-11-01. The reference for every paragraph outside "The problem" and "Impact" is the paragraph text in `site/data/projects/tabvault.ts` at commit c612306, the text MOD-006 QA Run 4 checked. Compared with the source file, that text has three paragraphs in "Architecture" (the source has five), leaves out the intro and three challenges in "Challenges and how I resolved them" (missing dependency, wrong status code on bad credentials, ISP blocking the new domain), the "lesson" sentences and a sentence of the secrets paragraph, and in "What I learned, and what I would improve" drops one sentence, puts 'done' in single quotes and uses two em dashes where the source has commas. The paragraphs of "The problem" and "Impact" still match the source file word for word (AC-116). The section headings are the list above. A later edit to the source file changes the page only through a PRD change.

### 1.3 Section 4.5, new acceptance criterion

Add under the existing "Acceptance criteria (added in revision 1.7)" list, as its own block:

> **Acceptance criteria (added in revision 1.12):**
> - AC-133: On /projects/tabvault, the paragraphs of every section other than "Images", "The problem" and "Impact" match the paragraph text in `site/data/projects/tabvault.ts` at commit c612306 word for word, including its punctuation ('done' in single quotes, the em dashes in "What I learned, and what I would improve"). In those sections the page does not have to match `asset/content/case-study-tabvault-detailed.md`.

AC-116 is unchanged.

### 1.4 Section 9, CONV-003 (one sentence appended)

Current:

> - CONV-003: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render. (Tech Lead Reviews, 2026-11-01 change review)

New:

> - CONV-003: Section headings and paragraphs match the project's own source file in `asset/content/` word for word. Editor's notes in a source file never render. Exception: on /projects/tabvault, paragraphs outside "The problem" and "Impact" follow section 4.5 Body copy and AC-133 (Leon, 2026-11-01, revision 1.12). (Tech Lead Reviews, 2026-11-01 change review)

Reason: Doc-Sync copies CONV-003 into production.md, which every engineer and QA reads. Without the pointer, production.md still states the rule with no exception, and the next MOD-006 QA could raise the same bug again.

Record 3 is unchanged: it holds the header fields, not section paragraphs.

---

## 2. status.md entries (verbatim, written on the apply pass)

### 2.1 PM Updates (appended at the end of the section)

```
- 2026-11-01 [SUBSTANTIVE] TabVault keeps its shorter case-study text: exception to CONV-003 for /projects/tabvault, AC-133 pins the text at c612306; PRD rev 1.12
  Approved by Leon in the coordinator session: "TabVault go with (b)" <plus the quote approving this proposal's questions>
  Proposal: project-planning/pm-proposals/2026-11-01-tabvault-condensed-text-rev-1-12.md
  Answers: MOD-006 QA Run 4 (f6c603f), "Requirement check: CONV-003 word for word" (bugs-found). Not a bug: the condensed paragraphs are intended.
  Sections changed: header; 4.5 (Body copy, AC-133); 9 (CONV-003 exception sentence).
  Modules affected: MOD-006 only (spec: Body copy exception and AC-133; AC-116 unchanged). No code change expected: the page at c612306 is the reference. No module added, removed or renamed. Module Map unchanged. Current Phase unchanged (Phase 4 — Deploy).
  Notes for Doc-Sync:
    MOD-006 spec: replace the word-for-word requirement for paragraphs outside "The problem" and "Impact" with PRD 4.5 Body copy; add AC-133. QA closes Run 4's open item "CONV-003 bugs-found" as "not a bug (PRD rev 1.12)" on its next MOD-006 run, after checking AC-133.
    production.md: copy CONV-003 with its new exception sentence.
```

### 2.2 Decisions (appended)

```
- 2026-11-01 TabVault case-study text (rev 1.12): the TabVault page keeps the shorter text from Leon's own June edits instead of the full asset/content/case-study-tabvault-detailed.md. The reference is the page text at c612306 (AC-133); "The problem" and "Impact" still match the source (AC-116). Leon: "TabVault go with (b)".
- 2026-11-01 SitePlus+ diagram and data-model tree: <per question 6>
```

Question 6 text, recommended answer: "not on the page for now. The record format holds only paragraphs and images (MOD-004 QA, dd390a9). Raised at the Phase 4 integration review as a candidate (Tech Lead decides how, if Leon wants it shown). Leon: "<quote>"."

### 2.3 Last Action (apply pass)

```
agent: pm
mode: change
module: n/a
result: success
next: claude --agent doc-sync (delta sync of rev 1.12: MOD-006 spec and production.md CONV-003); then follow its Sync Report — if it routes MOD-006 to QA only, claude --agent qa-mod-project-tabvault "verify" to check AC-133 and close the Run 4 open item
timestamp: <ISO 8601>
```

---

## 3. Classification

- Trivial or substantive: **substantive**. It adds an AC and changes what MOD-006 QA checks, so Doc-Sync must change the MOD-006 spec and production.md's CONV-003, not just pass text through.
- Architectural: **no**. No data model, module boundary, integration or stack change; the page's code and text stay as they are.

---

## 4. Already answered

- Keep the shorter TabVault text, all of it, including the merged Architecture paragraphs, "I insisted on", the left-out challenges and sentences, 'done' in single quotes and the two em dashes; QA's CONV-003 bug is "not a bug". Leon: "TabVault go with (b)".

---

## 5. Questions for Leon (one recommendation each)

1. Which text is the reference for the TabVault page from now on? (a) The page text as it is now (`site/data/projects/tabvault.ts` at c612306), with an exception to CONV-003, as written in 1.2 to 1.4. Your case study file stays as it is and is no longer copied to the page except "The problem" and "Impact". (b) You edit `asset/content/case-study-tabvault-detailed.md` yourself to the shorter text, so CONV-003 needs no exception and no AC-133. **Recommendation: (a)** — you chose to keep the shorter page, not to shorten your case study, and (a) needs nothing from you.
2. Add AC-133 (1.3) so QA checks the shorter text and catches any later drift? **Recommendation: yes.**
3. Append the exception sentence to CONV-003 (1.4), so production.md does not state a rule the TabVault page breaks? **Recommendation: yes.**
4. Keep AC-116 as it is ("The problem" and "Impact" word for word with the source file)? QA Run 4 found both sections already match. **Recommendation: yes, keep it.**
5. Classify this change as substantive and not architectural (section 3)? **Recommendation: substantive, not architectural.**
6. SitePlus+: your case study's mermaid architecture diagram and data-model tree are not on /projects/siteplus, because a project record only holds paragraphs and images (MOD-004 QA, dd390a9; not a failure under AC-120). The Architecture section still has the paragraph "The data model is deliberately simple ...", which in your file leads into the tree. Do you want something done about this now (a PRD change, and a record-format change in MOD-003 that Tech Lead would design), or raised at the Phase 4 integration review, or left as it is? **Recommendation: raise it at the Phase 4 integration review** — it would change the shared project template, which the integration review is for, and it does not block Phase 4.
