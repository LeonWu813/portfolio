const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function ArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" aria-hidden="true">
      <path d="M4 15H52M42 6l11 9-11 9" strokeWidth="3" {...STROKE} />
    </svg>
  );
}

export function BidirectionalIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 50 32" aria-hidden="true">
      <path d="M4 10H44M34 2l10 8M46 22H6M16 30L6 22" strokeWidth="3.2" {...STROKE} />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" strokeWidth="3" {...STROKE} />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <path d="M3 3l12 12M15 3L3 15" strokeWidth="2" {...STROKE} />
    </svg>
  );
}

export function UpArrowIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 50" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M12 48V4M4 12l8-8 8 8"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
        {...STROKE}
      />
    </svg>
  );
}
