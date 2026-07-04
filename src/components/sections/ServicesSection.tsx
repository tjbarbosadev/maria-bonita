import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { priceDisclaimer, serviceCategories } from '@/data/services';
import { siteConfig } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/utils';

export function ServicesSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.message,
  );

  return (
    <section
      id="servicos"
      className="border-y border-gold bg-surface-secondary py-16 sm:py-20"
    >
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Tabela de preços"
          subtitle="Valores transparentes pra você se programar. Qualquer dúvida, chama no WhatsApp!"
        />

        <div className="mt-10 space-y-8">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 font-heading text-2xl font-semibold text-main">
                {category.title}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm italic text-muted">{priceDisclaimer}</p>

        <div className="mt-6 flex justify-center">
          <LinkButton
            href={whatsappUrl}
            variant="whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            Agendar horário
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
