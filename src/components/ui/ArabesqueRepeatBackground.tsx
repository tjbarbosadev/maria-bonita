import { useId } from 'react';

export function ArabesqueRepeatBackground() {
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
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0 C 30 0, 45 15, 45 45"
              stroke="var(--accent-gold)"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M0 0 C 0 30, 15 45, 45 45"
              stroke="var(--accent-gold)"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M75 0 C 90 0, 105 15, 120 0"
              stroke="var(--accent-gold)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M0 75 C 0 90, 15 105, 0 120"
              stroke="var(--accent-gold)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.55"
            />
            <path
              d="M60 0 C 72 8, 78 22, 72 36"
              stroke="var(--accent-gold)"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M0 60 C 8 72, 22 78, 36 72"
              stroke="var(--accent-gold)"
              strokeWidth="0.6"
              fill="none"
              strokeLinecap="round"
              opacity="0.45"
            />
            <path
              d="M84 36 C 96 42, 102 54, 96 66"
              stroke="var(--accent-gold)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.65"
            />
            <path
              d="M36 84 C 42 96, 54 102, 66 96"
              stroke="var(--accent-gold)"
              strokeWidth="0.7"
              fill="none"
              strokeLinecap="round"
              opacity="0.65"
            />
            <circle cx="45" cy="45" r="1.5" fill="var(--accent-gold)" opacity="0.85" />
            <circle cx="96" cy="96" r="1" fill="var(--accent-gold)" opacity="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
