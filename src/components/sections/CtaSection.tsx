import { MessageCircle } from 'lucide-react';

import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/utils';

export function CtaSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.message,
  );

  return (
    <section id="contato" className="py-16 sm:py-20">
      <Container>
        <div className="rounded-[2rem] border border-gold bg-[color-mix(in_srgb,var(--accent-gold)_8%,var(--bg-secondary))] px-6 py-12 text-center shadow-soft sm:px-10">
          <p className="font-display text-5xl text-gold sm:text-6xl">Maria Bonita</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-main sm:text-4xl">
            Pronta pra cuidar dos seus cachos?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Manda um oi no WhatsApp e a gente combina o melhor horário e tratamento pra
            você.
          </p>
          <LinkButton
            href={whatsappUrl}
            variant="whatsapp"
            className="mt-8 px-8 py-4 text-base"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
