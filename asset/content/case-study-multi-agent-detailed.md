# Multi-Agent Software Development System

**A team of six AI agents, run by a coordinator session, that plan, build, and QA software through a human-approved workflow. It has shipped two products: TabVault, a live full-stack web app, and ProjectDay, an iOS app submitted to the App Store.**

**At a glance:** Sole architect · 6 specialized agents + coordinator · Human-approved at every handoff · Shipped TabVault (live) · ProjectDay submitted to the App Store

`Claude Code (subagents, skills, hooks)` · `Bash` · `Python` · `Git`
[Built by the system: tab-vault.com](https://tab-vault.com) · [System repo](https://github.com/LeonWu813/multi-agent-software-development-system) · [TabVault repo](https://github.com/LeonWu813/tab-management)

---

## Architecture

Feature image: `asset/diagrams/multi-agent-horizontal.png` (replaces `site/public/multi-agent.png`). The editable source is `asset/diagrams/multi-agent-horizontal.html`.

*Human approval sits on every arrow. The coordinator runs the next step only after the human says yes.*

## The problem

After shipping a full-stack analytics platform end to end on my own, I kept running into the same limitation: a single AI coding agent tends to lose the plot on a real project. Context drifts over a long session, earlier decisions get quietly overwritten, and there is no clean way to review or undo a bad step. I wanted to find out whether the answer was a better prompt or a better system.

I decided it was the system. So I built one: a development team of specialized agents, each with a single job, coordinating the way real engineers do through documents, reviews, and version control, with a human in control at every step.

## My role

I was the sole architect and builder. I designed the agent roles, the information boundaries between them, the skill layer, the hooks, and the git-backed handoff mechanism. I drafted the full architecture up front in a single design document. Then I hardened it by running five end-to-end simulations and two real products through the system, and fixing whatever broke along the way.

## How it works, end to end

A project moves through the team the way work moves through a real one. The PM agent gathers requirements and writes a product requirements document, which becomes the single source of truth. A Tech Lead agent reviews it for feasibility and risk and writes a setup runbook. After the human completes setup and approves, the PM finalizes the document. Doc-Sync then translates it into a separate, self-contained spec for each module, and generates a dedicated Engineer and QA agent for each module.

An Engineer agent implements one module against its spec, and a QA agent verifies that module against the same spec in the running app. A bug goes back to the Engineer. A third failure on the same requirement goes to the Tech Lead for a diagnosis instead, because the cause is probably not where the Engineer has been looking. A problem with the spec itself goes to the PM, because fixing it means changing the requirements. At the end of each phase the Tech Lead runs an integration review across all modules. The human decides on every proposed fix and checks it personally, and then the PM reviews the phase with the human before the next one starts.

All of this happens in one Claude Code conversation. The main session acts as a coordinator: it runs each agent as a subagent, reads the exact next step that agent recorded, and relays every question and answer between the agent and the human word for word. It never answers for the human and never edits a file that an agent owns.

## Design principles

I started from the idea of an agent harness: the belief that the engineering around the model matters more than any single prompt. Four ideas do most of the work.

**Single responsibility.** Rather than one agent that does everything, there are six, each with one input, one output, and one handoff rule. Small, scoped agents are easier to constrain and to reason about, so a mistake stays contained instead of spreading.

**Least-privilege information boundaries.** Each agent can read and write only the files its role requires. I encoded this as an explicit write-access matrix and enforce it in code. The Engineer, for example, never sees the requirements document; it sees only its own module spec. A scope check compares every Engineer change against the files that module owns, and runs three times: before a tool call, in the Engineer's self-check, and again when the Engineer stops. The trade-off is that context has to be carried forward deliberately through Doc-Sync, rather than every agent reading whatever it wants. That adds a moving part, but it keeps each agent small enough to trust.

**A human in the loop at every handoff.** The system proposes the next action and the human approves it before it runs. Even the PM works in two passes: it first saves a proposal and its questions to a file and changes nothing else, and it applies the change only with the human's approval quoted word for word.

**Git as a rollback safety net.** Every handoff is an atomic commit plus a machine-readable record of what just happened and what runs next. Any step is a clean point to revert to, and the flow picks up where it left off even after the conversation is cleared.

## The six agents

The team is PM, Doc-Sync, Tech Lead, Engineer, QA, and Retrospective. Each writes only to its own narrow set of files. The PM owns the requirements document and all communication with the human. Doc-Sync owns translation and the generated per-module agents. The Tech Lead is advisory: it writes reviews, the setup runbook, and the integration review. Engineers write source code, QA writes verification results, and Retrospective writes only improvement proposals.

The Engineer and QA roles are base templates. Doc-Sync generates a thin wrapper of each for every module, hard-coding which spec and dependencies that instance may read. When the templates change, Doc-Sync regenerates every per-module agent without touching any spec. In effect the system writes part of itself, with least-privilege access built in from the start.

## Decisions worth calling out

**The coordinator is a relay, not a decision-maker.** Subagents cannot ask the human anything directly, so when an agent needs a decision it stops and puts the question in its final message. The coordinator passes it on unchanged and returns the human's answer as a quote. It never drops or softens a condition an agent stated. Running the whole flow in one conversation removed the copy-and-paste between terminals without removing a single approval.

**Doc-Sync is a translator, not an interpreter.** It may restructure and distribute the requirements document's content, but never add or infer anything. If the requirements are ambiguous, it leaves an explicit marker and logs the question for the PM. This keeps the single source of truth genuinely single. Later syncs apply only the delta from a change, and a script checks the result so drift between requirements and specs is caught mechanically.

**Independent reviews are delivered, never applied.** At set points the coordinator runs outside review tools: a code walkthrough before an architectural change, a two-sided security and code-quality audit at the end of each phase, and a "what else could this break" check after fixing a module others depend on. The findings are saved to a file and handed to the Tech Lead, who accepts or rejects each one on the record. No review tool changes code on its own.

**QA is honest about what it can and cannot verify.** Backend modules do not pass on code inspection alone: QA starts a real server, calls real endpoints, and checks the actual database. A UI cannot be fully verified from the command line, so the QA agent writes a test script for the human and waits for their results instead of reporting a pass. QA never marks a requirement as passed if nobody exercised it in the running app.

**The system improves itself, but only through a human.** At each phase checkpoint the PM offers to run a Retrospective. It reads the project history and proposes changes to the agents and skills, each traced back to a specific incident. It never edits them directly; the human reviews the proposals and applies the ones worth keeping.

## Impact

The system has shipped two products. TabVault is a full-stack tab and notes manager with three clients, live in production on AWS. ProjectDay is an iOS bouldering app with 12 modules, a Supabase backend and an AWS video pipeline, submitted to the App Store in October 2026. In both, the agents wrote the code while I reviewed and approved each handoff.

The second project tested the system at a much larger scale: over 1,500 commits, 217 acceptance criteria, and 88 integration-review items, each decided by a human. Failures stayed contained to one module instead of cascading, and every step can be reviewed and rolled back through git.

Both builds also exercised the self-improvement loop. TabVault's deployment surfaced a series of cloud-only failures that became stronger engineering and QA checklists. ProjectDay's first retrospective produced 18 proposals, including a rule that the database migration chain must replay from zero, a path for bringing in code written outside the framework, and a rule that device failures go back through QA. Those changes are now part of the framework.

## What I learned, and what I would improve

The hard part of a multi-agent system is not the code the agents write. It is the system that makes them produce correct software reliably. Most of my iterations went into tightening information boundaries and handoff rules, not into prompting. I also learned to design for the limits of automated verification rather than around them. The most trustworthy part of the system turned out to be the place where it admits a machine cannot check something and asks a person instead.

I considered running modules in parallel and deliberately did not build it: it adds a merge step to every module and saves little time. If I extend the project, I would add automated metrics on handoff success rates and time to ship across projects, so that improvements to the harness could be measured rather than judged by feel.
