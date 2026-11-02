import { collectImageUrls } from "./deck";
import styles from "./slideshow.module.css";

export default function Preload() {
  return (
    <div className={styles.preload} aria-hidden="true">
      {collectImageUrls().map((src) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={src} src={src} alt="" loading="eager" />
      ))}
    </div>
  );
}
