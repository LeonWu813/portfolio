import { ArrowIcon, BidirectionalIcon, CheckIcon, UpArrowIcon } from "./icons";
import styles from "./slideshow.module.css";

const ENGINEER_QA = "Engineer ⇄ QA";
const BOXES = [
  { label: "Requirements", width: 26 },
  { label: "PM", width: 11 },
  { label: "Doc-Sync", width: 18.5 },
  { label: ENGINEER_QA, width: 30 },
  { label: "Tech Lead", width: 20 },
  { label: "Shipped", width: 22.28 },
];
const ARROW_WIDTH = 6;
const APPROVED_ARROWS = [0, 1, 4];

function arrowCenters(): number[] {
  const centers: number[] = [];
  let x = 0;
  BOXES.forEach((box, index) => {
    x += box.width;
    if (index < BOXES.length - 1) {
      centers.push(x + ARROW_WIDTH / 2);
      x += ARROW_WIDTH;
    }
  });
  return centers;
}

function BoxContent({ label, isLast }: { label: string; isLast: boolean }) {
  if (label === ENGINEER_QA) {
    return (
      <>
        <span aria-hidden="true">Engineer</span>
        <BidirectionalIcon className={styles.boxBidi} />
        <span aria-hidden="true">QA</span>
        <span className={styles.srOnly}>{ENGINEER_QA}</span>
      </>
    );
  }
  return (
    <>
      {isLast && <CheckIcon />}
      {label}
    </>
  );
}

export default function Workflow() {
  const centers = arrowCenters();
  return (
    <div className={styles.workflow}>
      <ol className={styles.flowRow}>
        {BOXES.map((box, index) => {
          const isLast = index === BOXES.length - 1;
          return (
            <li key={box.label}>
              <span
                className={`${styles.box} ${isLast ? styles.boxEnd : ""}`}
                style={{ width: `${box.width}cqh` }}
              >
                <BoxContent label={box.label} isLast={isLast} />
              </span>
              {!isLast && <ArrowIcon className={styles.arrow} />}
            </li>
          );
        })}
      </ol>
      <div className={styles.system} aria-hidden="true" />
      <UpArrowIcon className={styles.upArrow} />
      <p className={styles.retro}>Retrospective feeds improvements back into the system</p>
      <div className={styles.drops} aria-hidden="true">
        {APPROVED_ARROWS.map((arrowIndex) => (
          <i key={arrowIndex} style={{ left: `${centers[arrowIndex]}cqh` }} />
        ))}
      </div>
      <div className={styles.approvalBar}>
        <CheckIcon />
        <span>I approve the key handoffs</span>
      </div>
    </div>
  );
}
