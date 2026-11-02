import { MENU_HINT_TEXT } from "./deck";
import type { MenuHintState } from "./navigation";
import styles from "./slideshow.module.css";

export default function MenuHint({ hint }: { hint: MenuHintState | null }) {
  return (
    <div className={styles.hintSlot}>
      {hint && (
        <div key={hint.nonce} className={styles.menuHint} data-phase={hint.phase}>
          {MENU_HINT_TEXT}
        </div>
      )}
    </div>
  );
}
