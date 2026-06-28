# Product Requirements Document: Leon's Portfolio Website

## 1. Overview

A personal portfolio website for Tsan-Yu Wu (Leon), a full-stack engineer and CS master's student at Northeastern, currently seeking a software engineering internship (full-stack, frontend, or backend). The site presents Leon's projects, experience, and skills in a clean, minimal, recruiter-friendly format.

The design and structure are modeled on https://amankumar.ai: a simple, content-first layout with a slim left sidebar for navigation, a light minimal theme with generous whitespace, and short, scannable pages.

### Goals
- Give recruiters and hiring managers a fast, credible picture of Leon's engineering ability within their first few seconds on the page.
- Showcase three strong projects as full case studies, each reachable in one click from a projects grid.
- Make contact and resume access effortless.
- Have the site itself act as proof of Leon's frontend, accessibility, and deployment skills by being fast, responsive, and WCAG-conscious.

### Target audience
Primary: technical recruiters and engineering hiring managers reviewing internship candidates. Secondary: engineers who may review the linked GitHub repos.

### Success criteria
- Top three projects, with role and stack, are visible without scrolling on the projects page.
- Every project links to a working live demo and a GitHub repo.
- The site loads quickly, works well on mobile, and passes basic accessibility checks.
- A visitor can find Leon's email, LinkedIn, GitHub, and resume from any page.

## 2. Design direction

- **Reference**: amankumar.ai. Match its simplicity, not its exact content.
- **Layout**: persistent slim left sidebar (logo or initials, primary nav, a "Connect" social block). Main content area to the right, single column, comfortable line length.
- **Theme**: light, minimal, lots of whitespace, restrained use of one accent color. Clean typography with a clear type scale.
- **Tone of all written content**: humanized and professional. Do not use em dashes anywhere in site copy.
- **Responsiveness**: mobile-first. On small screens the sidebar should collapse into a top bar or hamburger menu.
- **Accessibility**: semantic HTML, sufficient color contrast, keyboard navigability, alt text on images, visible focus states. This doubles as evidence for the accessibility skills listed on the resume.
- **Performance**: fast initial load, optimized images, minimal blocking scripts.

## 3. Information architecture

### Sidebar navigation (final)
1. Home
2. Projects
3. Experience
4. About
5. Skills
6. Contact

(Modeled on the reference nav of Home, Projects, Experience, Blogs, About, Tools, Contact, with **Blogs removed** and **Tools renamed to Skills**.)

### Connect block (sidebar)
Social and contact links, shown on every page:
- LinkedIn (primary)
- GitHub
- Email

(The reference site leads with X. Per the requested changes, LinkedIn is the primary connect channel here. X/Twitter and others can be added later if Leon wants them.)

### Footer
Simple line such as "Made by Leon" with the current year.

## 4. Changes from the reference site

These are the explicit deltas from amankumar.ai requested for this build:

1. **Name**: use "Leon" in place of "Aman" throughout (hero greeting, logo/initials, footer).
2. **Primary CTA**: change "Connect me on X" to "Connect me on LinkedIn", linking to Leon's LinkedIn.
3. **Home page**: remove the featured blog card that appears on the reference home page.
4. **Sidebar, remove Blog**: no Blogs nav item and no blog section anywhere.
5. **Sidebar, Tools to Skills**: rename the "Tools" nav item to "Skills"; this page lists Leon's technical skills rather than software tools.

## 5. Page requirements

### 5.1 Home
A single, short hero screen. No featured blog.
- Greeting headline: "Hey, I'm Leon".
- Subtitle / role: a one-line professional title (recommended: "Full-Stack Engineer"). This both describes and filters, so recruiters immediately know if Leon fits.
- Primary CTA button: "Connect me on LinkedIn" linking to Leon's LinkedIn profile.
- Short bio: two or three sentences in Leon's voice. Should convey that he builds production full-stack systems by hand and designs multi-agent systems that ship software end to end.
- Current status line: that he is a CS master's student at Northeastern and is seeking a Summer 2026 software engineering internship.
- Secondary CTA at the bottom: "Reach out" linking to the Contact page.

### 5.2 Projects
- Page heading and a one-line intro (for example, "Things I have designed, built, and shipped").
- A responsive grid of project cards. Each card contains:
  - Project name.
  - A one-line tagline that leads with the strongest fact or metric (mirrors the reference style such as "14k+ monthly users").
  - A short one or two sentence description.
  - Action links (Live demo, GitHub, and others as relevant).
  - Tags (for example: Full-Stack, AI, AWS, Java).
  - A status indicator (Active).
- Recommended order and taglines for the three current projects:
  1. **Marketing Analytics Platform**, tagline: "Adopted in production, cut recurring analytics work by ~60%". Tags: Full-Stack, Java/Spring Boot, React, AWS.
  2. **Multi-Agent Software Development System**, tagline: "Six AI agents that plan, build, and ship full-stack software". Tags: AI Agents, Systems Design, Claude Code.
  3. **TabVault**, tagline: "A live full-stack PWA, built by my multi-agent system". Tags: Full-Stack, PWA, AI, AWS.
- Each card links to a project detail page.

### 5.3 Project detail pages
- One page per project, rendering the full case study content already written (problem, role, approach and key decisions, impact, what I learned).
- Header area: project name, tagline, tech stack chips, and prominent Live demo and GitHub links.
- Body: the case study, formatted for easy reading with clear section headings.
- Optional: one or two screenshots or a short demo clip per project.

### 5.4 Experience
- A simple reverse-chronological list of roles.
- Each entry: title, company, location, dates, and two or three bullet points framed around engineering substance with outcomes as supporting evidence.
- Current entries: Front-End Developer at Exascend, and Marketing Project Manager at GoFreight. Education (Northeastern MSCS, National Chengchi University) can appear here or in About.

### 5.5 About
- A short, human paragraph plus a photo.
- Tells Leon's pivot story (International Business degree to CS master's) and frames it as a strength: he has shipped products that real companies and users depend on, with measurable outcomes, which most early-career engineers cannot show.
- Optionally lists education and a line about what he likes to work on.

### 5.6 Skills (renamed from Tools)
- Page heading and a short intro line.
- Skills grouped into clear categories, scannable at a glance. Suggested groups from the resume:
  - Languages: Java, JavaScript, TypeScript, Python, SQL, C++, C, HTML, CSS.
  - Backend: Spring Boot, Spring Security, Spring Data JPA, Hibernate, JWT, REST APIs, JUnit, Mockito.
  - Frontend: React, Redux Toolkit, Vite, Axios, Recharts.
  - Databases and Cloud: PostgreSQL, Redis, AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront).
  - DevOps and Tools: Docker, GitHub Actions, Nginx, Git, Maven.
  - Analytics and Design: Figma, GA4, SEO, WCAG.
- Keep it honest and uncluttered. Avoid padding with things touched only once.

### 5.7 Contact
- Make contact effortless. Show a real email address (not only a form, which can break), plus LinkedIn and GitHub.
- A one-click resume download (PDF).
- Optional short line inviting recruiters to reach out about internship opportunities.

## 6. Functional and technical requirements

- **Suggested stack**: Next.js with Tailwind CSS, optionally a component library such as shadcn/ui, mirroring the clean reference build. Leon is free to use his own preferred stack; the requirement is the look, feel, and structure, not a specific framework.
- **Content model**: project data should be structured (for example, a typed list or simple content files) so new projects can be added without touching layout code. Each project record: name, tagline, description, tags, status, live URL, repo URL, detail content, optional images.
- **Resume**: hosted PDF, downloadable from Contact and linkable from the sidebar or home.
- **SEO and sharing**: per-page title and meta description, Open Graph and Twitter card tags, a social preview image, and sensible canonical URLs.
- **Analytics**: optional lightweight analytics (Leon already knows GA4).
- **Deployment**: deploy to a custom domain. Since Leon lists AWS and Docker, self-hosting on AWS would reinforce those skills; a simpler host such as Vercel or Netlify is also fine. Whichever is chosen, keep all live demo links working at all times, since a broken link reads as abandoned work.
- **Maintenance**: clean up repo READMEs that are linked from the site so visiting recruiters see polished documentation (remove placeholder comments and fill in any empty sections such as License).

## 7. Out of scope
- A blog or any blog infrastructure.
- An X/Twitter-first connect flow.
- Comments, newsletters, or accounts.
- A dark mode toggle (can be a later enhancement).

## 8. Content Leon needs to provide

The case study copy for all three projects is already written. The remaining content needed to build the site:

**Identity and visuals**
- A professional photo or headshot for the About page (and optionally the home hero).
- Preferred initials or logo mark for the sidebar (for example "L" or "LW").
- Any color or accent preference, or confirmation to keep a neutral minimal palette.
- A favicon (can be derived from the initials).

**Copy decisions**
- Confirm the home subtitle/title. Recommended: "Full-Stack Engineer". Alternatives: "Software Engineer" or "Full-Stack Software Engineer".
- Confirm the two or three sentence home bio (can be drafted from the resume for approval).
- Confirm the About paragraph and whether to include the pivot story.

**Links and assets**
- LinkedIn profile URL (for the primary CTA and connect block).
- GitHub profile URL.
- Public email address to display.
- Whether to include any other social links (X, Medium, Instagram). Default is none.
- The final resume PDF to host for download.
- Live demo URLs and repo URLs for each project (current known values: marketing analytics live demo, TabVault at tab-vault.com, and the three GitHub repos). Confirm these are the canonical links to display.

**Project metadata**
- Confirm or adjust each project's tagline, tags, and ordering as proposed in section 5.2.
- Optional screenshots or short demo clips for each project detail page.
- Any concrete numbers Leon can add to strengthen impact sections, for example the name of the company that adopted the analytics platform, or usage figures, if shareable.

**Deployment**
- Preferred domain name.
- Preferred host (AWS, Vercel, or Netlify).
