import type { Metadata } from "next";
import { Suspense } from "react";
import Preload from "./Preload";
import Slideshow from "./Slideshow";
import styles from "./slideshow.module.css";

const TITLE = "Slideshow — Leon Wu";
const DESCRIPTION =
  "Leon Wu's interview slideshow: who he is, and four projects in depth, from a multi-agent development system to ProjectDay, SitePlus+ and TabVault.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "https://www.leon-wu.com/slideshow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.leon-wu.com/slideshow",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function SlideshowPage() {
  return (
    <>
      <Preload />
      <Suspense fallback={<div className={styles.layer} />}>
        <Slideshow />
      </Suspense>
    </>
  );
}
