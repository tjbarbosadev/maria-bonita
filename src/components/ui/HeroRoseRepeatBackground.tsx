import { useId } from 'react';

function RoseMotif({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path
        d="M0 0 C -6 -8, 6 -10, 8 0 C 12 -4, 14 6, 6 8 C 10 14, 0 12, -2 4 C -10 6, -12 -4, -6 -2 C -14 -6, -8 -12, 0 -6"
        stroke="var(--accent-rose)"
        strokeWidth="0.75"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M0 0 C 4 6, 10 4, 8 -2 C 12 2, 10 10, 2 8"
        stroke="var(--accent-rose)"
        strokeWidth="0.55"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M0 0 C -4 6, -10 4, -8 -2 C -12 2, -10 10, -2 8"
        stroke="var(--accent-rose)"
        strokeWidth="0.55"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="0" cy="0" r="1.8" fill="var(--accent-rose)" opacity="0.7" />
      <path
        d="M0 10 C 2 14, 6 16, 10 14"
        stroke="var(--accent-rose)"
        strokeWidth="0.45"
        fill="none"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M-8 12 C -4 16, 0 18, 4 16"
        stroke="var(--accent-rose)"
        strokeWidth="0.4"
        fill="none"
        strokeLinecap="round"
        opacity="0.35"
      />
    </g>
  );
}

export function HeroRoseRepeatBackground() {
  const patternId = useId();

  return (
    <div
      className="arabesque-layer-hero pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="140"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0 C 35 0, 52 17, 52 52"
              stroke="var(--accent-rose)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M0 0 C 0 35, 17 52, 52 52"
              stroke="var(--accent-rose)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M88 0 C 105 0, 122 17, 140 0"
              stroke="var(--accent-rose)"
              strokeWidth="0.85"
              fill="none"
              strokeLinecap="round"
              opacity="0.65"
            />
            <path
              d="M0 88 C 0 105, 17 122, 0 140"
              stroke="var(--accent-rose)"
              strokeWidth="0.85"
              fill="none"
              strokeLinecap="round"
              opacity="0.65"
            />
            <path
              d="M70 0 C 82 10, 88 26, 82 42"
              stroke="var(--accent-rose)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M0 70 C 10 82, 26 88, 42 82"
              stroke="var(--accent-rose)"
              strokeWidth="0.75"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <RoseMotif x={52} y={52} scale={1.15} />
            <RoseMotif x={112} y={28} scale={0.75} />
            <RoseMotif x={28} y={112} scale={0.75} />
            <circle cx="98" cy="98" r="1.2" fill="var(--accent-rose)" opacity="0.7" />
            <circle cx="14" cy="14" r="0.9" fill="var(--accent-gold)" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
