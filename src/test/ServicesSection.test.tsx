import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AppProviders } from '@/components/layout/AppProviders';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { priceDisclaimer } from '@/data/services';

describe('ServicesSection', () => {
  it('renders service items and disclaimer', () => {
    render(
      <AppProviders>
        <ServicesSection />
      </AppProviders>,
    );

    expect(screen.getByText('Pacote Cronograma Capilar')).toBeInTheDocument();
    expect(screen.getByText('Sobrancelhas + Henna')).toBeInTheDocument();
    expect(screen.getByText(priceDisclaimer)).toBeInTheDocument();
  });
});
