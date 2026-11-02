import type { ProjectEntry } from "@/data/projects-data";

export const projectday: ProjectEntry = {
  slug: "projectday",
  year: "2026",
  date: "09/19",
  title: "ProjectDay",
  tech: "Mobile · React Native · Supabase · AWS",
  tags: [
    "TypeScript",
    "React Native / Expo",
    "Supabase (Postgres, Auth, Edge Functions)",
    "AWS (S3, MediaConvert, CloudFront, CDK)",
    "EAS",
    "i18next",
    "GitHub Actions",
  ],
  atAGlance:
    "Product owner + orchestrator · 12 modules, built by my multi-agent system · Supabase + AWS video pipeline · Submitted to the App Store (Oct 2026)",
  description:
    "An iOS app for indoor bouldering climbers in Taiwan: log a send in a few taps, watch beta videos tied to a specific route, and browse gym route lists. Built with my multi-agent development system and submitted to the App Store.",
  links: [],
  featureImage: "/projectday-screens.webp",
  featureImageAlt:
    "Three ProjectDay screens in Traditional Chinese. Home shows saved gyms, a target route and new beta videos. Gyms lists climbing gyms with search and city filters. A route screen shows a V0 route at CORNER gym with its photo, send and attempt counts, and a Log climb button.",
  featureImageCaption:
    "ProjectDay's interface is in Traditional Chinese, for climbers in Taiwan.",
  sections: [
    {
      heading: "The problem",
      items: [
        "Indoor bouldering in Taiwan is growing fast, but there is no app built for it. The international apps (Kaya, Vertical-Life, 27 Crags) focus on outdoor crags and are not localized for Taiwan. The local option only logs sends. Climbers share \"beta\" (how to climb a problem) through PTT and Instagram, where it is impossible to find again for a specific route.",
        "ProjectDay brings logging, beta video, gym route lists and a social layer together in one Taiwan-first iOS app. The goals I set were concrete: under 3 minutes from signup to first logged send, under 30 seconds to log a send, and a beta video playable within 60 seconds of upload.",
      ],
    },
    {
      heading: "My role",
      items: [
        "I was the product owner and decision-maker, and I built the app by running my own multi-agent development system. The agents wrote the code, specs and tests; I approved every requirements change, decided every integration-review item, and checked the UI on a real device. Every one of those decisions is recorded in the project's status log with my exact words. A designer collaborator built the design system and Storybook setup.",
      ],
    },
    {
      heading: "How it works end to end",
      items: [
        "**Client.** An Expo / React Native app (iOS only for now) with a three-tab shell: Home, Gyms, and Profile. Tabs stay mounted when you switch, so scrolling and state survive. Climbers log a send (route, flash / top / attempt, number of attempts, a note) in four taps or fewer. The app is in English and Traditional Chinese, follows the device language, and supports light and dark themes.",
        "**Gyms and routes.** An admin-curated directory of 13 gyms in Taipei and New Taipei, each with route lists filtered by grade and hold color. Route data comes from climbers, not gym partners, so submission is filter-first with a two-step duplicate guard. Duplicates are still allowed on purpose, because gyms often set several routes with the same grade and color.",
        "**Backend.** Supabase provides Postgres, auth (email, Apple and Google), and Edge Functions on Deno. Row-level security is on every table, and reads that join several tables go through database functions that run with the caller's permissions. Scheduled jobs (pg_cron) clean up old notifications, finish account deletions, and send a moderation digest.",
        "**Video.** Uploads go straight to S3 through a presigned URL. AWS MediaConvert converts each clip to a single H.264 MP4, maps HDR footage to SDR, and grabs a poster frame. A per-minute job marks finished videos as ready, and the app plays them through CloudFront with short-lived signed URLs. The database stores only a storage key, never a URL. The AWS side is defined in CDK.",
        "**Social and safety.** Follows, likes and a notification inbox, with push notifications through Expo and APNs. Reporting, blocking and in-app account deletion meet App Store requirements, and a single database rule hides blocked, reported or private videos everywhere, including inside notifications.",
        "**Shipping.** Separate dev and prod Supabase projects, a separate \"Dev\" app variant, and four EAS build profiles. CI type-checks the Edge Functions, runs their tests and the CDK tests, replays the database migrations against a local Supabase, and checks that every English string has a Chinese translation.",
      ],
    },
    {
      heading: "Images",
      items: [
        {
          image: "/projectday-route-beta.webp",
          alt: "ProjectDay route screen scrolled to the Beta videos section, showing the thumbnail of a climber's beta video for a V0 route.",
        },
        {
          image: "/projectday-profile.webp",
          alt: "ProjectDay profile screen with climbing stats: top grade V10, 10 sends, 9 climbing days, and a bar chart of sends per grade.",
        },
      ],
    },
    {
      heading: "Notable technical decisions",
      items: [
        "**Moving video from Supabase Storage to AWS.** The first version uploaded original files to Supabase Storage. HDR clips from iPhones looked overexposed and there was no CDN. Upgrading the Supabase plan fixed neither problem, so I planned the move from the start and switched to S3 + MediaConvert + CloudFront in Phase 2.",
        "**Handling clips with no audio.** MediaConvert rejected videos without an audio track. Instead of failing the upload, the background job classifies the error and resubmits the clip once as a video-only job. The classifier has its own unit tests.",
        "**A security audit before go-live.** Before release I ran an independent security and code-quality audit. It found that the video backfill would copy any storage path a user supplied, which could have let one user copy another user's private video into their own folder. An owner-prefix check closed it. The same audit flagged a permissions check that had been copied into five places and started to drift.",
        "**Proving the database rebuilds from zero.** The migration chain failed to replay from a clean database four times during Phase 1. One error sat unnoticed for four weeks. Replaying every migration from zero is now a CI step and a framework rule.",
      ],
    },
    {
      heading: "Impact and status",
      items: [
        "Phase 1, the iOS MVP with 11 modules, is complete. Phase 2 has added the AWS video pipeline, account deletion and a second version of notifications. Version 1.0.0 went through TestFlight and was submitted to the App Store in October 2026, and 1.0.1 is ready to follow.",
        "As the second product built by my multi-agent system, it was also the system's largest test: over 1,500 commits, 217 acceptance criteria, 73 database migrations, and 88 integration-review items, each decided by me.",
      ],
    },
    {
      heading: "What I learned and what I'd improve",
      items: [
        "Mocked tests can lie about native code. A native module passed every Jest test and still broke the iOS build, so every module now gets a real native build before QA. Code written outside the agent flow also needs a way in: when a large design branch was merged directly, it broke tests and forced spec updates on nine modules. The framework now has a defined intake path for outside code.",
        "Still to come: Android, an offline queue for logging sends, product analytics, and the shared-code cleanup the audit recommended.",
      ],
    },
  ],
};
