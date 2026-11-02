"use client";

import { useCallback, useEffect, useRef, type Dispatch, type PointerEvent as ReactPointerEvent } from "react";
import type { ProjectKey } from "./deck";
import type { NavAction } from "./navigation";

const DRAG_TOLERANCE_PX = 10;
const SWIPE_MIN_PX = 40;
const SWIPE_AXIS_RATIO = 1.5;
const SWIPE_MAX_MS = 700;
const TAP_MAX_MS = 500;
const CURSOR_IDLE_MS = 3000;

interface SlideInputOptions {
  dispatch: Dispatch<NavAction>;
  preselected: ProjectKey | null;
  leave: () => void;
  enterFullscreen: () => void;
  isFullscreen: boolean;
  layerRef: React.RefObject<HTMLDivElement | null>;
}

interface PointerGesture {
  startX: number;
  startY: number;
  startTime: number;
  startedOnButton: boolean;
  invalid: boolean;
}

export interface SlidePointerHandlers {
  onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerCancel: (event: ReactPointerEvent<HTMLDivElement>) => void;
}

function digitFromEvent(event: KeyboardEvent): number | null {
  if (/^[1-4]$/.test(event.key)) return Number(event.key);
  if (event.shiftKey) return null;
  const match = /^(?:Digit|Numpad)([1-4])$/.exec(event.code);
  return match ? Number(match[1]) : null;
}

function isInsideButton(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest("button") !== null;
}

export function useSlideInput({
  dispatch,
  preselected,
  leave,
  enterFullscreen,
  isFullscreen,
  layerRef,
}: SlideInputOptions): SlidePointerHandlers {
  const gestures = useRef(new Map<number, PointerGesture>());

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.isComposing || event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.repeat) return;

      const onButton = isInsideButton(event.target);
      const { key } = event;

      if ((key === " " || key === "Enter") && onButton) return;

      if (key === " " && event.shiftKey) {
        event.preventDefault();
        dispatch({ type: "prev" });
      } else if (key === " " || key === "Enter" || key === "ArrowRight" || key === "ArrowDown" || key === "PageDown") {
        event.preventDefault();
        dispatch({ type: "next", preselected });
      } else if (key === "ArrowLeft" || key === "ArrowUp" || key === "PageUp") {
        event.preventDefault();
        dispatch({ type: "prev" });
      } else if (key === "Home") {
        event.preventDefault();
        dispatch({ type: "home" });
      } else if (key === "Escape") {
        leave();
      } else if (key.toLowerCase() === "m") {
        dispatch({ type: "menu" });
      } else if (key.toLowerCase() === "f") {
        enterFullscreen();
      } else {
        const digit = digitFromEvent(event);
        if (digit !== null) dispatch({ type: "digit", digit });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [dispatch, preselected, leave, enterFullscreen]);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    let timer: number | undefined;
    let lastX = Number.NaN;
    let lastY = Number.NaN;

    const setIdle = (idle: boolean) => layer.toggleAttribute("data-idle", idle);
    const startTimer = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setIdle(true), CURSOR_IDLE_MS);
    };
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      if (event.clientX === lastX && event.clientY === lastY) return;
      lastX = event.clientX;
      lastY = event.clientY;
      setIdle(false);
      startTimer();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setIdle(false);
      startTimer();
    };

    if (!isFullscreen) {
      setIdle(false);
      return;
    }
    startTimer();
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      setIdle(false);
    };
  }, [isFullscreen, layerRef]);

  useEffect(() => {
    const previous = document.documentElement.style.overscrollBehavior;
    document.documentElement.style.overscrollBehavior = "none";
    return () => {
      document.documentElement.style.overscrollBehavior = previous;
    };
  }, []);

  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const map = gestures.current;
    const invalid = event.pointerType !== "mouse" && map.size > 0;
    if (invalid) for (const gesture of map.values()) gesture.invalid = true;
    map.set(event.pointerId, {
      startX: event.clientX,
      startY: event.clientY,
      startTime: event.timeStamp,
      startedOnButton: isInsideButton(event.target),
      invalid,
    });
  }, []);

  const onPointerCancel = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    gestures.current.delete(event.pointerId);
  }, []);

  const onPointerUp = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const map = gestures.current;
      const gesture = map.get(event.pointerId);
      map.delete(event.pointerId);
      if (!gesture || gesture.invalid) return;

      const dx = event.clientX - gesture.startX;
      const dy = event.clientY - gesture.startY;
      const distance = Math.hypot(dx, dy);
      const duration = event.timeStamp - gesture.startTime;

      if (event.pointerType === "mouse") {
        if (event.button !== 0 || gesture.startedOnButton || isInsideButton(event.target)) return;
        if (distance > DRAG_TOLERANCE_PX) return;
        dispatch({ type: "next", preselected });
        return;
      }

      const zoomed = (window.visualViewport?.scale ?? 1) > 1;
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);
      const dominant = Math.max(absX, absY);
      const other = Math.min(absX, absY);
      if (dominant >= SWIPE_MIN_PX && dominant >= other * SWIPE_AXIS_RATIO && duration <= SWIPE_MAX_MS) {
        if (zoomed) return;
        const forward = absX >= absY ? dx < 0 : dy < 0;
        dispatch(forward ? { type: "next", preselected } : { type: "prev" });
        return;
      }
      if (distance > DRAG_TOLERANCE_PX || duration > TAP_MAX_MS) return;
      if (gesture.startedOnButton || isInsideButton(event.target)) return;
      dispatch(
        event.clientX < window.innerWidth / 2 ? { type: "prev" } : { type: "next", preselected },
      );
    },
    [dispatch, preselected],
  );

  return { onPointerDown, onPointerUp, onPointerCancel };
}
