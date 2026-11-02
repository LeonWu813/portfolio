import { ArrowIcon } from "./icons";
import styles from "./slideshow.module.css";

export default function FlowChips({ chips }: { chips: string[] }) {
  return (
    <ol className={styles.flowChips}>
      {chips.map((chip, index) => (
        <li key={chip}>
          <span className={styles.chip}>{chip}</span>
          {index < chips.length - 1 && <ArrowIcon className={styles.arrow} />}
        </li>
      ))}
    </ol>
  );
}
