import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AppProviders } from '@/components/layout/AppProviders';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { siteConfig } from '@/data/site';

describe('WhatsAppFloat', () => {
  it('renders link with correct wa.me URL', () => {
    render(
      <AppProviders>
        <WhatsAppFloat />
      </AppProviders>,
    );

    const link = screen.getByRole('link', { name: 'Agendar pelo WhatsApp' });
    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me/5511963268711'),
    );
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('includes prefilled message', () => {
    render(
      <AppProviders>
        <WhatsAppFloat />
      </AppProviders>,
    );

    const link = screen.getByRole('link', { name: 'Agendar pelo WhatsApp' });
    expect(link.getAttribute('href')).toContain(
      encodeURIComponent(siteConfig.whatsapp.message),
    );
  });
});
