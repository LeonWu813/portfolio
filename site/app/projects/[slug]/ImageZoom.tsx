"use client";

import { useRef } from "react";

const DURATION_MS = 250;
const FIT = 0.9;

interface ImageZoomProps {
  src: string;
  alt: string;
  imgClassName: string;
  buttonClassName?: string;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function ImageZoom({ src, alt, imgClassName, buttonClassName = "" }: ImageZoomProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const originalRef = useRef<HTMLImageElement>(null);
  const copyRef = useRef<HTMLImageElement>(null);
  const openRef = useRef(false);
  const rectRef = useRef<DOMRect | null>(null);

  const targetRect = (from: DOMRect) => {
    const ratio = from.width / from.height;
    const maxW = window.innerWidth * FIT;
    const maxH = window.innerHeight * FIT;
    const width = Math.min(maxW, maxH * ratio);
    const height = width / ratio;
    return {
      left: (window.innerWidth - width) / 2,
      top: (window.innerHeight - height) / 2,
      width,
      height,
    };
  };

  const moveFrame = (from: DOMRect, to: ReturnType<typeof targetRect>, reverse: boolean) => {
    const copy = copyRef.current;
    const dialog = dialogRef.current;
    if (!copy || !dialog) return Promise.resolve();
    const dim = "rgba(0, 0, 0, 0.6)";
    const dialogFrames = [{ backgroundColor: "rgba(0, 0, 0, 0)" }, { backgroundColor: dim }];
    const reduced = prefersReducedMotion();
    const imgFrames = reduced
      ? [{ opacity: 0 }, { opacity: 1 }]
      : [
          {
            transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`,
          },
          { transform: "none" },
        ];
    const options: KeyframeAnimationOptions = {
      duration: DURATION_MS,
      easing: "ease",
      fill: "both",
      direction: reverse ? "reverse" : "normal",
    };
    const a = dialog.animate(dialogFrames, options);
    const b = copy.animate(imgFrames, options);
    return Promise.all([a.finished, b.finished]).then(() => undefined);
  };

  const finishClose = () => {
    const dialog = dialogRef.current;
    const original = originalRef.current;
    const from = rectRef.current;
    if (!dialog || !original || !from) return;
    const to = targetRect(from);
    void moveFrame(from, to, true).then(() => {
      original.style.opacity = "1";
      dialog.close();
      openRef.current = false;
    });
  };

  const open = () => {
    const dialog = dialogRef.current;
    const original = originalRef.current;
    const copy = copyRef.current;
    if (!dialog || !original || !copy || openRef.current) return;
    const from = original.getBoundingClientRect();
    if (from.width === 0 || from.height === 0) return;
    rectRef.current = from;
    openRef.current = true;
    const to = targetRect(from);
    Object.assign(copy.style, {
      left: `${to.left}px`,
      top: `${to.top}px`,
      width: `${to.width}px`,
      height: `${to.height}px`,
    });
    history.pushState({ imageOverlay: true }, "");
    const onPop = () => {
      window.removeEventListener("popstate", onPop);
      finishClose();
    };
    window.addEventListener("popstate", onPop);
    dialog.showModal();
    original.style.opacity = "0";
    void moveFrame(from, to, false);
  };

  const requestClose = () => {
    if (openRef.current) history.back();
  };

  return (
    <>
      <button type="button" onClick={open} className={`cursor-zoom-in ${buttonClassName}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={originalRef} src={src} alt={alt} className={imgClassName} />
      </button>
      <dialog
        ref={dialogRef}
        aria-label={alt}
        onCancel={(e) => {
          e.preventDefault();
          requestClose();
        }}
        className="fixed inset-0 m-0 h-screen w-screen max-h-none max-w-none border-0 bg-transparent p-0 overflow-hidden overscroll-contain backdrop:bg-transparent"
      >
        <button
          type="button"
          onClick={requestClose}
          aria-label="Close image"
          className="absolute inset-0 h-full w-full cursor-zoom-out"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={copyRef}
            src={src}
            alt=""
            className="fixed max-w-none rounded-lg"
            style={{ transformOrigin: "top left" }}
          />
        </button>
      </dialog>
    </>
  );
}
