"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useReducer, useRef } from "react";
import { CloseIcon } from "./icons";
import {
  FULLSCREEN_HINT_TEXT,
  MENU_HINT_TEXT,
  SLIDES,
  parseProjectKey,
  projectOfSlide,
  type SlideId,
} from "./deck";
import FullscreenHint from "./FullscreenHint";
import { INITIAL_NAV_STATE, isPreselectionPending, navReducer } from "./navigation";
import SlideView from "./SlideView";
import styles from "./slideshow.module.css";
import { useFullscreenSession } from "./useFullscreenSession";
import { useSlideInput } from "./useSlideInput";

const MENU_HINT_HOLD_MS = 2000;
const MENU_HINT_EXIT_MS = 150;
const FIRST_ANNOUNCEMENT_DELAY_MS = 500;
const REANNOUNCE_GAP_MS = 100;
const FULLSCREEN_HINT_ANNOUNCE_DELAY_MS = 600;

function announcementFor(slideId: SlideId): string {
  const { title } = SLIDES[slideId];
  const project = projectOfSlide(slideId);
  if (!project) return title;
  const position = project.slideIds.indexOf(slideId) + 1;
  return `${title}. ${project.name}, ${position} of ${project.slideIds.length}.`;
}

export default function Slideshow() {
  const searchParams = useSearchParams();
  const preselected = parseProjectKey(searchParams.get("project"));
  const [nav, dispatch] = useReducer(navReducer, INITIAL_NAV_STATE);
  const layerRef = useRef<HTMLDivElement>(null);
  const liveRef = useRef<HTMLDivElement>(null);
  const announcedOnceRef = useRef(false);

  const session = useFullscreenSession();
  const { leave, enterFullscreen, dismissFullscreenHint, isFullscreen } = session;
  const pointerHandlers = useSlideInput({
    dispatch,
    preselected,
    leave,
    enterFullscreen,
    isFullscreen,
    layerRef,
  });

  const focusLayer = useCallback(() => {
    const layer = layerRef.current;
    if (layer && document.activeElement !== layer) layer.focus({ preventScroll: true });
  }, []);

  const handleOpen = useCallback((slideId: SlideId) => dispatch({ type: "open", slideId }), []);

  const handleHintActivate = useCallback(() => {
    enterFullscreen();
    dismissFullscreenHint();
    focusLayer();
  }, [enterFullscreen, dismissFullscreenHint, focusLayer]);

  const announce = useCallback((text: string) => {
    if (liveRef.current) liveRef.current.textContent = text;
  }, []);

  const { current, hint } = nav;
  const hintNonce = hint?.nonce;
  const fullscreenHintShowing = session.fullscreenHintVisible && current === "1";

  useEffect(() => {
    focusLayer();
  }, [current, focusLayer]);

  useEffect(() => {
    const delay = announcedOnceRef.current ? 0 : FIRST_ANNOUNCEMENT_DELAY_MS;
    announcedOnceRef.current = true;
    const timer = window.setTimeout(() => announce(announcementFor(current)), delay);
    return () => window.clearTimeout(timer);
  }, [current, announce]);

  useEffect(() => {
    if (hintNonce === undefined) return;
    announce("");
    const timer = window.setTimeout(() => announce(MENU_HINT_TEXT), REANNOUNCE_GAP_MS);
    return () => window.clearTimeout(timer);
  }, [hintNonce, announce]);

  useEffect(() => {
    if (hintNonce === undefined) return;
    const outTimer = window.setTimeout(() => dispatch({ type: "hint-out" }), MENU_HINT_HOLD_MS);
    const goneTimer = window.setTimeout(
      () => dispatch({ type: "hint-gone" }),
      MENU_HINT_HOLD_MS + MENU_HINT_EXIT_MS,
    );
    return () => {
      window.clearTimeout(outTimer);
      window.clearTimeout(goneTimer);
    };
  }, [hintNonce]);

  useEffect(() => {
    if (!fullscreenHintShowing) return;
    const timer = window.setTimeout(
      () => announce(`${announcementFor("1")}. ${FULLSCREEN_HINT_TEXT}`),
      FULLSCREEN_HINT_ANNOUNCE_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [fullscreenHintShowing, announce]);

  const highlighted = isPreselectionPending(nav, preselected) ? preselected : null;

  return (
    <div
      ref={layerRef}
      className={styles.layer}
      role="region"
      aria-label="Slideshow"
      tabIndex={-1}
      {...pointerHandlers}
    >
      <div className={styles.frame}>
        <SlideView
          slideId={current}
          slide={SLIDES[current]}
          highlighted={highlighted}
          menuHint={hint}
          onOpen={handleOpen}
        />
      </div>
      {fullscreenHintShowing && <FullscreenHint onActivate={handleHintActivate} />}
      <button
        type="button"
        className={styles.close}
        aria-label="Close slideshow"
        aria-keyshortcuts="Escape"
        onClick={leave}
      >
        <CloseIcon />
      </button>
      <div ref={liveRef} className={styles.srOnly} aria-live="polite" aria-atomic="true" />
    </div>
  );
}
