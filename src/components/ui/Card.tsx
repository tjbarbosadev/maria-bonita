import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-gold bg-surface-secondary p-5 shadow-soft transition-transform duration-200 hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </div>
  );
}
