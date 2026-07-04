import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { AboutSection } from '@/components/sections/AboutSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { InstagramSection } from '@/components/sections/InstagramSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { siteConfig } from '@/data/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: `+${siteConfig.whatsapp.phone}`,
  url: siteConfig.seo.siteUrl,
  image: siteConfig.seo.ogImagePath,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: siteConfig.address.cep,
    addressCountry: 'BR',
  },
  sameAs: [siteConfig.instagram.url, siteConfig.facebook.url],
};

export function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <InstagramSection />
        <LocationSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
