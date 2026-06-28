# SitePlus+

**A full-stack analytics platform for tracking user behavior, managing campaigns, and auditing SEO across multiple websites. Built end to end on my own and adopted in production by a real company, where it cut recurring analytics work by roughly 60 percent.**

**At a glance:** Sole engineer · Full-stack + AWS infra · Live in production · Cut recurring analytics work ~60%

`Java 21 / Spring Boot` · `React / TypeScript` · `Redux Toolkit` · `PostgreSQL` · `Redis` · `Docker` · `GitHub Actions` · `AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)`
[Live demo](https://www.siteplusplus.space) · [GitHub: marketing-analytics](https://github.com/LeonWu813/marketing-analytics)

---

## The problem

A small company I worked with was spending hours every week pulling together the same marketing numbers by hand: page views, campaign performance, and the periodic SEO checkup. The data lived in several disconnected places, so every report meant repeating the same manual gathering. I set out to replace that routine with a single platform a site owner could install once and then rely on, covering behavior tracking, campaign management, and automated SEO auditing in one place.

I designed, built, and deployed the whole thing myself, from the database schema to the production AWS infrastructure.

## My role

Sole engineer across the entire stack. I built the Spring Boot backend, the React and TypeScript front end, the JavaScript tracking snippet that customers paste into their sites, and the full AWS deployment with a continuous-delivery pipeline. Every design decision below was mine to make and to own.

## Approach and key decisions

The platform ingests events from a lightweight tracking snippet, enriches and stores them, and surfaces everything through an analytics dashboard, alongside a campaign manager and an SEO auditor. Several decisions shaped how it holds up under real use.

**Securing an endpoint that has to be public.** The tracking snippet runs in a visitor's browser with no credentials, so the event-ingest endpoint cannot require authentication. Rather than weaken security, I moved the guarantee to the read side: anyone can write an event, but only the authenticated site owner can ever read events back. To keep the open write endpoint from being abused, I added per-IP rate limiting so an attacker can be throttled but never mine the data. This separation of a public write path from a strictly private read path is the heart of the design.

**Rate limiting that stays correct across multiple servers.** The platform runs on two EC2 instances behind a load balancer. An in-memory request counter on each instance would have effectively doubled the real limit, since an attacker could alternate between them. I kept the counter in Redis instead, giving all instances a single shared source of truth so the limit holds no matter which server answers a given request. Reasoning about state across a distributed deployment, rather than a single box, was what made this work.

**Stateless auth that made scaling free.** I chose JWTs over server-side sessions so any instance can validate a request on its own. The payoff was concrete: adding the second EC2 instance behind the load balancer required zero code changes, because there was no shared session store to coordinate. A design decision made early paid off directly when it was time to scale.

**Resilience and resourcefulness in the deployment.** The two instances sit in different availability zones, so if one zone fails the load balancer sends all traffic to the survivor automatically. The instances themselves only accept traffic from the load balancer's security group, so rate limiting and other protections cannot be bypassed by hitting a server directly. Running on small t3.micro instances also forced careful JVM memory tuning, constraining the heap and thread pools to fit comfortably alongside Docker, which taught me a lot about getting real work out of limited hardware.

**State that survives a restart.** The automated follow-up audits, which re-run an SEO check a week later and email the owner a comparison, store their pending work as fields in the database rather than in server memory. A scheduled job picks up whatever is due. Because the intent lives in PostgreSQL, a server restart never loses a follow-up.

## Impact

The platform was adopted in production by a real company and cut their recurring analytics work by roughly 60 percent, replacing hours of weekly manual reporting with a system that gathers, enriches, and visualizes the data on its own. It runs on a multi-AZ AWS deployment with a GitHub Actions pipeline that tests every change against a live PostgreSQL container, then builds and ships Docker images that redeploy automatically without any manual server access.

## What I learned

Building and operating this alone taught me that the interesting problems live where the textbook stops. The clean answer says authenticate every endpoint, but a tracking snippet cannot carry a credential, so I had to find a different place to put the security guarantee. The clean answer says rate-limit requests, but the moment there are two servers, a naive counter is wrong. Working through those gaps end to end, and then keeping the result running in front of a real customer, is where I learned the most about building software that has to survive contact with the real world.
