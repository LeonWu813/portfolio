"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const RETURN_KEY = "slideshow-return";
const SLIDESHOW_PATH = "/slideshow";
const ENTRY_MAX_AGE_MS = 10_000;
const FULLSCREEN_SETTLE_MS = 1_500;

interface SlideshowEntry {
  returnPath: string;
  fromSite: boolean;
  fullscreenRequested: boolean;
}

const DIRECT_VISIT: SlideshowEntry = { returnPath: "/", fromSite: false, fullscreenRequested: false };

function isReturnPath(path: unknown): path is string {
  return (
    typeof path === "string" &&
    path.startsWith("/") &&
    !path.startsWith("//") &&
    !path.includes("\\") &&
    path !== SLIDESHOW_PATH
  );
}

function readEntry(): SlideshowEntry {
  let raw: string | null = null;
  try {
    raw = window.sessionStorage.getItem(RETURN_KEY);
    window.sessionStorage.removeItem(RETURN_KEY);
  } catch {
    return DIRECT_VISIT;
  }
  if (raw === null) return DIRECT_VISIT;
  let value: unknown;
  try {
    value = JSON.parse(raw);
  } catch {
    return DIRECT_VISIT;
  }
  if (typeof value !== "object" || value === null) return DIRECT_VISIT;
  const { path, t, fs } = value as { path?: unknown; t?: unknown; fs?: unknown };
  if (!isReturnPath(path) || typeof t !== "number" || Date.now() - t > ENTRY_MAX_AGE_MS) {
    return DIRECT_VISIT;
  }
  return { returnPath: path, fromSite: true, fullscreenRequested: fs === true };
}

function getFullscreenSnapshot(): boolean {
  return document.fullscreenElement !== null;
}

function getServerFullscreenSnapshot(): boolean {
  return false;
}

function requestFullscreen(): void {
  if (!document.fullscreenEnabled || document.fullscreenElement) return;
  document.documentElement.requestFullscreen().catch(() => undefined);
}

export interface FullscreenSession {
  isFullscreen: boolean;
  fullscreenHintVisible: boolean;
  enterFullscreen: () => void;
  dismissFullscreenHint: () => void;
  leave: () => void;
}

export function useFullscreenSession(): FullscreenSession {
  const router = useRouter();
  const entryRef = useRef<SlideshowEntry | null>(null);
  const leavingRef = useRef(false);
  const wasFullscreenRef = useRef(false);
  const mountedRef = useRef(false);
  const [hintArmed, setHintArmed] = useState(false);
  const [hintDismissed, setHintDismissed] = useState(false);

  const subscribe = useCallback((onChange: () => void) => {
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  const isFullscreen = useSyncExternalStore(
    subscribe,
    getFullscreenSnapshot,
    getServerFullscreenSnapshot,
  );

  const leave = useCallback(() => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    entryRef.current ??= readEntry();
    const target = entryRef.current.returnPath;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => undefined);
    router.replace(target);
  }, [router]);

  useEffect(() => {
    if (isFullscreen) wasFullscreenRef.current = true;
    else if (wasFullscreenRef.current) leave();
  }, [isFullscreen, leave]);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      window.setTimeout(() => {
        if (!mountedRef.current && document.fullscreenElement) {
          document.exitFullscreen().catch(() => undefined);
        }
      }, 0);
    };
  }, []);

  useEffect(() => {
    entryRef.current ??= readEntry();
    const entry = entryRef.current;
    if (!document.fullscreenEnabled) return;
    const waitForFullscreen = entry.fromSite && entry.fullscreenRequested;
    const timer = window.setTimeout(
      () => {
        if (!waitForFullscreen || !document.fullscreenElement) setHintArmed(true);
      },
      waitForFullscreen ? FULLSCREEN_SETTLE_MS : 0,
    );
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dismiss = () => setHintDismissed(true);
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest("[data-ss-fullscreen-hint]")) return;
      dismiss();
    };
    const onFullscreenChange = () => {
      if (document.fullscreenElement) dismiss();
    };
    window.addEventListener("keydown", dismiss, true);
    window.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      window.removeEventListener("keydown", dismiss, true);
      window.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const dismissFullscreenHint = useCallback(() => setHintDismissed(true), []);

  return {
    isFullscreen,
    fullscreenHintVisible: hintArmed && !hintDismissed && !isFullscreen,
    enterFullscreen: requestFullscreen,
    dismissFullscreenHint,
    leave,
  };
}
