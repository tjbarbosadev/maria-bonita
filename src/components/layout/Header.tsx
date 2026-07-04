import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

import logo from '@/assets/logo.png';
import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { useTheme } from '@/hooks/useTheme';
import { buildWhatsAppUrl, cn } from '@/lib/utils';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold text-main transition hover:bg-[color-mix(in_srgb,var(--accent-gold)_12%,transparent)]"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.message,
  );

  return (
    <header className="sticky top-0 z-40 border-b border-gold bg-[color-mix(in_srgb,var(--bg-primary)_92%,transparent)] backdrop-blur-md">
      <Container className="flex min-h-20 items-center justify-between py-3 sm:min-h-24 sm:py-4">
        <a
          href="#inicio"
          className="group flex shrink-0 items-center gap-3 sm:gap-4"
          aria-label={siteConfig.name}
        >
          <img
            src={logo}
            alt={siteConfig.name}
            className="h-16 w-16 object-contain drop-shadow-[0_4px_12px_rgba(201,168,76,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
          />
          <span className="hidden font-heading text-xl font-semibold text-main sm:inline lg:text-2xl">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <LinkButton
            href={whatsappUrl}
            variant="whatsapp"
            className="hidden sm:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Agendar
          </LinkButton>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div className={cn('border-t border-gold lg:hidden', open ? 'block' : 'hidden')}>
        <Container className="flex flex-col gap-3 py-4">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-main hover:bg-[color-mix(in_srgb,var(--accent-gold)_10%,transparent)]"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <LinkButton
            href={whatsappUrl}
            variant="whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            Agendar no WhatsApp
          </LinkButton>
        </Container>
      </div>
    </header>
  );
}
