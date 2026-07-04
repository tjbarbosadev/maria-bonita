import { useId } from 'react';

function MapPinMotif({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0 -10 C -5 -10, -8 -6, -8 -2 C -8 4, 0 12, 0 12 C 0 12, 8 4, 8 -2 C 8 -6, 5 -10, 0 -10"
        stroke="var(--accent-gold)"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <circle cx="0" cy="-3" r="2.5" fill="var(--accent-rose)" opacity="0.55" />
    </g>
  );
}

function CompassMotif({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle
        cx="0"
        cy="0"
        r="10"
        stroke="var(--accent-gold)"
        strokeWidth="0.55"
        fill="none"
        opacity="0.45"
      />
      <path
        d="M0 -8 L 2 0 L 0 8 L -2 0 Z"
        stroke="var(--accent-gold)"
        strokeWidth="0.5"
        fill="none"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M-8 0 L 0 -2 L 8 0 L 0 2 Z"
        stroke="var(--accent-gold)"
        strokeWidth="0.45"
        fill="none"
        strokeLinejoin="round"
        opacity="0.35"
      />
      <circle cx="0" cy="0" r="1.2" fill="var(--accent-rose)" opacity="0.5" />
    </g>
  );
}

export function LocationArabesqueRepeatBackground() {
  const patternId = useId();

  return (
    <div
      className="arabesque-layer pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="130"
            height="130"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 65 C 20 55, 40 75, 65 65"
              stroke="var(--accent-gold)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.75"
            />
            <path
              d="M65 0 C 75 20, 55 40, 65 65"
              stroke="var(--accent-gold)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.75"
            />
            <path
              d="M130 65 C 110 75, 90 55, 65 65"
              stroke="var(--accent-gold)"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M65 130 C 55 110, 75 90, 65 65"
              stroke="var(--accent-gold)"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M0 0 C 18 8, 28 24, 24 42"
              stroke="var(--accent-gold)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M130 0 C 112 8, 102 24, 106 42"
              stroke="var(--accent-gold)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M0 130 C 8 112, 24 102, 42 106"
              stroke="var(--accent-gold)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M130 130 C 122 112, 106 102, 88 106"
              stroke="var(--accent-gold)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <CompassMotif x={65} y={65} />
            <MapPinMotif x={18} y={22} scale={0.7} />
            <MapPinMotif x={112} y={108} scale={0.65} />
            <circle cx="98" cy="32" r="1.1" fill="var(--accent-rose)" opacity="0.65" />
            <circle cx="32" cy="98" r="1.1" fill="var(--accent-rose)" opacity="0.65" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
