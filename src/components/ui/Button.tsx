import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'whatsapp';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--accent-gold)] text-[#1a1a1a] hover:brightness-110 shadow-soft border border-[var(--border-gold)]',
  outline:
    'border border-[var(--border-gold)] text-main hover:bg-[color-mix(in_srgb,var(--accent-gold)_12%,transparent)]',
  ghost: 'text-main hover:bg-[color-mix(in_srgb,var(--accent-gold)_10%,transparent)]',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#1fb855] shadow-soft',
};

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export function LinkButton({
  href,
  variant = 'primary',
  children,
  className,
  target,
  rel,
  ariaLabel,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200',
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
