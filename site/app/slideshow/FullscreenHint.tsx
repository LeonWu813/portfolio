import styles from "./slideshow.module.css";

interface FullscreenHintProps {
  onActivate: () => void;
}

export default function FullscreenHint({ onActivate }: FullscreenHintProps) {
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-keyshortcuts="F"
      data-ss-fullscreen-hint
      className={styles.fullscreenHint}
      onMouseDown={(event) => event.preventDefault()}
      onClick={onActivate}
    >
      <span>Press</span>
      <kbd>F</kbd>
      <span>for full screen</span>
    </button>
  );
}
