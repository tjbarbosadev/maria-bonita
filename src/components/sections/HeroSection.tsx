import { Instagram, MessageCircle, Sparkles } from 'lucide-react';

import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { HeroCarousel } from '@/components/ui/HeroCarousel';
import { HeroRoseRepeatBackground } from '@/components/ui/HeroRoseRepeatBackground';
import { siteConfig } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/utils';

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.message,
  );

  return (
    <section
      id="inicio"
      className="hero-bg relative overflow-hidden border-b border-gold py-16 sm:py-24"
    >
      <HeroRoseRepeatBackground />
      <div className="pointer-events-none absolute -top-20 right-0 z-[1] h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--accent-rose)_12%,transparent)] blur-3xl" />
      <Container className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold px-4 py-1 text-sm text-muted">
            <Sparkles className="h-4 w-4 text-gold" />
            Especialista em cachos
          </p>
          <h1 className="font-heading text-4xl leading-tight font-semibold text-main sm:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={whatsappUrl}
              variant="whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar no WhatsApp
            </LinkButton>
            <LinkButton
              href={siteConfig.instagram.url}
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-5 w-5" />@{siteConfig.instagram.handle}
            </LinkButton>
          </div>
        </div>

        <HeroCarousel />
      </Container>
    </section>
  );
}
