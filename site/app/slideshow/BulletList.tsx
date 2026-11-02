import type { ReactNode } from "react";
import styles from "./slideshow.module.css";

function keepCompoundsWhole(text: string): ReactNode[] {
  return text.split(/(\S+-\S+)/).map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className={styles.noWrap}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item) => (
        <li key={item}>
          <span>{keepCompoundsWhole(item)}</span>
        </li>
      ))}
    </ul>
  );
}
