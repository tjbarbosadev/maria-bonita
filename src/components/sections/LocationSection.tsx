import { Clock, ExternalLink, MapPin, MessageCircle } from 'lucide-react';

import { LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { LocationArabesqueRepeatBackground } from '@/components/ui/LocationArabesqueRepeatBackground';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/utils';

export function LocationSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.message,
  );

  return (
    <section
      id="localizacao"
      className="relative overflow-hidden border-t border-gold bg-surface-secondary py-16 sm:py-20"
    >
      <LocationArabesqueRepeatBackground />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Localização"
          title="Vem nos visitar"
          subtitle="Estamos no Parque das Cerejeiras, dentro do Studio Kinder Tatto."
        />

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <Card>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-main">
                    Endereço
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.neighborhood}
                    <br />
                    {siteConfig.address.city} — CEP {siteConfig.address.cep}
                    <br />
                    <span className="text-main">{siteConfig.address.complement}</span>
                  </p>
                  <a
                    href={siteConfig.address.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold hover:underline"
                  >
                    Abrir no Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <h3 className="font-heading text-xl font-semibold text-main">
                    Horário
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {siteConfig.schedule.message}
                  </p>
                  <LinkButton
                    href={whatsappUrl}
                    variant="whatsapp"
                    className="mt-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Combinar horário
                  </LinkButton>
                </div>
              </div>
            </Card>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gold shadow-soft">
            <div className="relative aspect-video w-full overflow-hidden">
              <iframe
                src={siteConfig.address.mapsEmbedUrl}
                className="absolute inset-0 block h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="Localização Salão Maria Bonita"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
