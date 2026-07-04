import { describe, expect, it } from 'vitest';

import { buildWhatsAppUrl } from '@/lib/utils';

describe('buildWhatsAppUrl', () => {
  it('builds encoded wa.me link', () => {
    const url = buildWhatsAppUrl('5511999999999', 'Olá! Teste');
    expect(url).toBe('https://wa.me/5511999999999?text=Ol%C3%A1!%20Teste');
  });
});
