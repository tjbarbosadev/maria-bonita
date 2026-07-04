import { Facebook, Instagram, MapPin, MessageCircle } from 'lucide-react';

import logo from '@/assets/logo.png';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site';
import { buildWhatsAppUrl } from '@/lib/utils';

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.message,
  );

  return (
    <footer className="border-t border-gold bg-surface-secondary py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt={siteConfig.name}
                className="h-16 w-16 object-contain drop-shadow-[0_4px_10px_rgba(201,168,76,0.25)] sm:h-[4.5rem] sm:w-[4.5rem]"
              />
              <div>
                <p className="font-display text-3xl text-gold">Maria Bonita</p>
                <p className="text-sm text-muted">Especialista em cachos</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-main">Contato</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
              <li className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.neighborhood} — {siteConfig.address.city}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-main">
              Redes sociais
            </h3>
            <div className="mt-3 flex gap-3">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold text-main hover:text-gold"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.facebook.url}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold text-main hover:text-gold"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold text-[#25D366] hover:brightness-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-gold pt-6 text-center text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
