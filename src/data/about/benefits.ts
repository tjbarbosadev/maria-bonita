import { Heart, type LucideIcon, Sparkles, Users } from 'lucide-react';

export type AboutBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const aboutBenefits: AboutBenefit[] = [
  {
    icon: Sparkles,
    title: 'Especialização em cachos',
    description:
      'A gente entende o seu fio cacheado e monta um cuidado feito sob medida pra você.',
  },
  {
    icon: Heart,
    title: 'Tratamentos personalizados',
    description:
      'Cronograma capilar, hidratação, nutrição e reconstrução com carinho e técnica.',
  },
  {
    icon: Users,
    title: 'Ambiente acolhedor',
    description: 'Aqui você se sente em casa — descontraída, ouvida e bem cuidada.',
  },
];
