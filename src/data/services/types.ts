import type { LucideIcon } from 'lucide-react';

export type ServiceItem = {
  name: string;
  price: string;
  icon: LucideIcon;
};

export type ServiceCategory = {
  title: string;
  items: ServiceItem[];
};
