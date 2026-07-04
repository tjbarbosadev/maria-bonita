import { MessageCircle } from 'lucide-react';

import { siteConfig } from '@/data/site';
import { buildWhatsAppUrl, cn } from '@/lib/utils';

type WhatsAppFloatProps = {
  className?: string;
};

export function WhatsAppFloat({ className }: WhatsAppFloatProps) {
  const whatsappUrl = buildWhatsAppUrl(
    siteConfig.whatsapp.phone,
    siteConfig.whatsapp.message,
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className={cn(
        'fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:bg-[#1fb855] sm:right-6 sm:bottom-6 sm:h-16 sm:w-16',
        'animate-pulse hover:animate-none',
        className,
      )}
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
