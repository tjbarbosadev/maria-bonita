import { Droplets, Flame, Leaf, Scissors, Sparkles, Waves } from 'lucide-react';

import type { ServiceCategory } from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Tratamentos especializados em cachos',
    items: [
      { name: 'Pacote Cronograma Capilar', price: 'R$ 240,00', icon: Sparkles },
      { name: 'Hidratação', price: 'R$ 80,00', icon: Droplets },
      { name: 'Nutrição', price: 'R$ 80,00', icon: Leaf },
      { name: 'Reconstrução', price: 'R$ 100,00', icon: Flame },
      { name: 'Limpeza Detox', price: 'R$ 90,00', icon: Waves },
      { name: 'Cauterização', price: 'R$ 100,00', icon: Flame },
      { name: 'Corte com tratamento', price: 'R$ 100,00', icon: Scissors },
      { name: 'Corte sem tratamento', price: 'R$ 60,00', icon: Scissors },
      { name: 'Tratamento com acidificante', price: 'R$ 100,00', icon: Droplets },
    ],
  },
  {
    title: 'Outros serviços',
    items: [
      { name: 'Sobrancelhas', price: 'R$ 30,00', icon: Sparkles },
      { name: 'Sobrancelhas + Henna', price: 'R$ 50,00', icon: Sparkles },
    ],
  },
];

export const priceDisclaimer =
  'Valores a partir de. Podem variar conforme tamanho, volume e avaliação.';
