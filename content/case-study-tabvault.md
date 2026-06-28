# TabVault

**A production full-stack tab manager spanning a Chrome extension, a React PWA, and a Spring Boot backend, with an AI content-analysis pipeline. I produced it by running my own multi-agent development system, reviewing and approving every step.**

`Java 21 / Spring Boot` · `React / TypeScript PWA` · `Chrome Extension (MV3)` · `PostgreSQL` · `Redis` · `Quartz` · `Claude API` · `AWS ECS Fargate`
[Live: tab-vault.com](https://tab-vault.com) · [GitHub: tab-management](https://github.com/LeonWu813/tab-management)

---

## The problem

I needed a real, non-trivial product to prove that my multi-agent development system could do more than scaffold a toy app. A throwaway CRUD demo would not have tested anything. So I set the bar high: a genuine full-stack product with three separate clients, asynchronous background jobs, an external AI integration, push notifications, and a real cloud deployment. If the system could ship that, with me reviewing each handoff rather than writing the code myself, it would be a credible result.

TabVault is that product. It lets people save, organize, and revisit browser tabs across devices, and it is live in production.

## My role

I was the orchestrator and the technical reviewer. The implementation came from my multi-agent system, but I directed the work and approved every design decision and handoff before it moved forward. That meant reading and signing off on the architecture, catching problems at each gate, and making the judgment calls that the design records below. I understand every one of these decisions because approving them was my job. Building the product this way was also the real test of the system that produced it.

## Approach and key decisions

The product is split into three clients that share one Spring Boot backend: a Chrome extension built on Manifest V3 for one-click saving, a React PWA dashboard for managing saved items, and a backend that handles auth, storage, scheduling, and AI analysis. A handful of decisions stand out.

**Scheduled jobs that survive ephemeral infrastructure.** Reminders and auto-cleanup run on Quartz, but Quartz defaults to an in-memory job store that loses every scheduled job when a container restarts. Since the app runs on ECS Fargate, where tasks are ephemeral by design, that default would have quietly dropped reminders on every redeploy. The fix was to back Quartz with a JDBC job store in PostgreSQL so triggers persist across restarts. This is the kind of decision that only shows up once you take deployment seriously.

**Refresh-token rotation for sessions that are both safe and long-lived.** Access tokens expire after fifteen minutes, and every refresh call issues a brand-new refresh token on a sliding seven-day window. Because each refresh token is single-use, a stolen one becomes useless almost immediately, while genuine active users stay logged in indefinitely. The trade-off is that the client has to store and send the new token on every cycle, which adds a little complexity on the front end in exchange for a meaningfully stronger security posture.

**An asynchronous AI pipeline that never blocks the user.** When someone saves an item, a background job fetches the page content, using the right tool for each source, then calls the Claude API to write a plain-English summary, suggest a category, and detect any time-sensitive deadlines. All of this happens asynchronously and writes back to the item when it is ready, so the save feels instant and the analysis simply appears on the dashboard a moment later.

**A deployment gotcha worth remembering.** Apple Silicon Macs build ARM images by default, but ECS Fargate runs on x86. A normal Docker build passed every local check and then failed silently at runtime on ECS. Pinning every build to `linux/amd64` solved it. I am including this because the most useful engineering lessons are often the ones that only surface in a real deployment, not in a tutorial.

## Impact

TabVault is deployed and running in production on AWS, served through CloudFront and an Application Load Balancer in front of containers on ECS Fargate, backed by RDS PostgreSQL and ElastiCache Redis. It is a complete product: save tabs from the extension or share sheet, get AI-generated summaries and categories, receive push reminders for detected deadlines, and browse everything offline through the PWA.

Just as importantly, it is the proof that my multi-agent system works. A real, multi-client, cloud-deployed application came out the other end of that workflow, with a human reviewing every handoff, which is exactly what the system was designed to make possible.

## What I learned

Operating the system to build something this size taught me where the real difficulty in production software lives, and it is rarely in the happy path. It is in the restart that drops your scheduled jobs, the token that should expire faster, and the image that builds fine and runs nowhere. Reviewing each of those decisions sharpened my judgment about what "done" actually means for a deployed system. It also gave me a clear, honest answer to the question every reviewer asks about an AI-built project: yes, I understand all of it, because understanding it was the part I owned.
