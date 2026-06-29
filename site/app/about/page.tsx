import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Leon Wu",
  description:
    "About Tsan-Yu (Leon) Wu — a full-stack engineer who learned to code by building products that real companies depend on.",
  openGraph: {
    title: "About — Leon Wu",
    description:
      "About Tsan-Yu (Leon) Wu — a full-stack engineer who learned to code by building products that real companies depend on.",
    type: "website",
    url: "https://your-domain.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://your-domain.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Leon Wu",
    description:
      "About Tsan-Yu (Leon) Wu — a full-stack engineer who learned to code by building products that real companies depend on.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <div className="px-8 py-16 max-w-2xl mx-auto w-full flex flex-col gap-8">
      <h1 className="text-3xl font-medium tracking-tight text-[var(--text)]">
        About
      </h1>

      <div className="flex flex-col gap-9 max-w-prose">
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">Meeee</h2>
          <p className="text-base leading-relaxed text-[var(--text)]">
            Born and lived in Taipei Taiwan 🇹🇼 <br></br>
            Moved to Seattle for Master degree 🇺🇸 <br></br>
            Have a 3-year-old cat called 方勇吉 🐱
          </p>
          <div className="flex gap-3 h-80 w-full overflow-hidden">
            <img className="rounded-sm" src="/IMG_6605.jpg" alt="" />
            <img className="rounded-sm" src="/IMG_6591.jpg" alt="" />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">Hobbies</h2>
          <p className="text-base leading-relaxed text-[var(--text)]">
            Ski ⛷️ Snowboard 🏂
          </p>
          <div className="flex gap-3 h-80 w-full overflow-hidden">
            <img className="rounded-sm" src="/IMG_6353.jpg" alt="" />
            <img className="rounded-sm" src="/IMG_6875.JPG" alt="" />
          </div>
          <p className="text-base leading-relaxed text-[var(--text)]">
            Bouldering 🧗
          </p>
          <div className="flex gap-3 h-80 w-full overflow-hidden">
            <img className="rounded-sm" src="/4D0BDA8A-B273-40DC-BD3D-3098AF6BBB73.JPG" alt="" />
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)]">Background</h2>
          <p className="text-base leading-relaxed text-[var(--text)]">
            My path into engineering did not start in a computer science
            classroom. I studied International Business in Taipei and spent the
            early part of my career on the product and marketing side, where I
            taught myself to code so I could build the things I was responsible
            for shipping. That habit grew into building full-stack products that
            real companies and real users came to depend on. I am now pursuing my
            MS in Computer Science at Northeastern to strengthen the fundamentals
            beneath the work I had already been doing.
          </p>
          <p className="text-base leading-relaxed text-[var(--text)]">
            The pivot is the point. I learned to engineer by shipping software
            that people actually use, and I bring that same bias toward real,
            working results to everything I build, whether that is a production
            analytics platform or a system of AI agents that ships software on
            its own.
          </p>
        </section>
      </div>

    </div>
  );
}
