import type { SlideId, TimelineEntry } from "./deck";
import styles from "./slideshow.module.css";

interface TimelineProps {
  entries: TimelineEntry[];
  onOpen: (slideId: SlideId) => void;
}

function TimelineColumn({ entry, index, onOpen }: { entry: TimelineEntry; index: number; onOpen: TimelineProps["onOpen"] }) {
  const dateId = `ss-tl-date-${index}`;
  const roleId = `ss-tl-role-${index}`;
  const orgId = `ss-tl-org-${index}`;
  const { opens } = entry;
  const text = (
    <>
      <div id={roleId} className={styles.entryRole}>
        {entry.role}
      </div>
      <div id={orgId} className={styles.entryOrg}>
        {entry.org}
      </div>
    </>
  );
  return (
    <div>
      <div id={dateId} className={styles.date}>
        {entry.date}
      </div>
      <div className={`${styles.dot} ${opens ? styles.dotWork : ""}`} />
      {opens ? (
        <button
          type="button"
          className={`${styles.card} ${styles.workCard}`}
          aria-keyshortcuts={opens.key}
          aria-labelledby={`${dateId} ${roleId} ${orgId}`}
          aria-describedby={`ss-tl-opens-${index}`}
          onClick={() => onOpen(opens.slideId)}
        >
          {text}
          <span id={`ss-tl-opens-${index}`} className={styles.srOnly}>
            Opens details.
          </span>
        </button>
      ) : (
        <div className={styles.entry}>{text}</div>
      )}
    </div>
  );
}

export default function Timeline({ entries, onOpen }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      {entries.map((entry, index) => (
        <TimelineColumn key={entry.date} entry={entry} index={index} onOpen={onOpen} />
      ))}
    </div>
  );
}
