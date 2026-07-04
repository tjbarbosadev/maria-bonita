import type { ServiceItem } from '@/data/services';

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="flex items-start gap-4 rounded-2xl border border-gold bg-surface p-4 shadow-soft">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold bg-[color-mix(in_srgb,var(--accent-gold)_12%,transparent)]">
        <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-medium text-main">{service.name}</h3>
        <p className="mt-1 text-lg font-semibold text-gold">{service.price}</p>
      </div>
    </article>
  );
}
