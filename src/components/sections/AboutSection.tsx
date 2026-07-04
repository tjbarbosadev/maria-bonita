import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { aboutBenefits, aboutSection } from '@/data/about';

export function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={aboutSection.eyebrow}
          title={aboutSection.title}
          subtitle={aboutSection.subtitle}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {aboutBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-[color-mix(in_srgb,var(--accent-gold)_10%,transparent)]">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-main">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
