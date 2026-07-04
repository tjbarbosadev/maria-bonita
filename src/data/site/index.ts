import { address, schedule } from './address';
import { brand } from './brand';
import { contact } from './contact';
import { navigation } from './navigation';
import { seo } from './seo';

export const siteConfig = {
  ...brand,
  ...contact,
  address,
  schedule,
  nav: navigation,
  seo,
} as const;

export type SiteConfig = typeof siteConfig;

export { address, brand, contact, navigation, schedule, seo };
