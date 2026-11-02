import { FOOTER, PROJECTS, type ProjectKey, type SlideId } from "./deck";
import MenuHint from "./MenuHint";
import type { MenuHintState } from "./navigation";
import styles from "./slideshow.module.css";

interface MenuProps {
  title: string;
  highlighted: ProjectKey | null;
  hint: MenuHintState | null;
  onOpen: (slideId: SlideId) => void;
}

export default function Menu({ title, highlighted, hint, onOpen }: MenuProps) {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.tick} />
        <h1 id="ss-slide-title" className={styles.title}>
          {title}
        </h1>
        <div className={styles.menuCards}>
          {PROJECTS.map((project, index) => {
            const isHighlighted = project.key === highlighted;
            return (
              <button
                key={project.key}
                type="button"
                className={`${styles.card} ${isHighlighted ? styles.cardHighlight : ""}`}
                aria-keyshortcuts={String(index + 1)}
                aria-describedby={isHighlighted ? "ss-menu-next-hint" : undefined}
                onClick={() => onOpen(project.slideIds[0])}
              >
                <span className={styles.key}>{index + 1}</span>
                <span className={styles.cardName}>{project.name}</span>
                <span className={styles.cardOneLiner}>{project.tagline}</span>
              </button>
            );
          })}
        </div>
        <MenuHint hint={hint} />
      </div>
      {highlighted && (
        <span id="ss-menu-next-hint" className={styles.srOnly}>
          Next starts this project.
        </span>
      )}
      <div className={styles.footer}>{FOOTER}</div>
    </>
  );
}
