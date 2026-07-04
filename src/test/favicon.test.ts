import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const publicDir = resolve(__dirname, '../../public');
const indexHtml = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');

const faviconFiles = [
  'favicon.ico',
  'favicon.svg',
  'favicon-96x96.png',
  'apple-touch-icon.png',
  'web-app-manifest-192x192.png',
  'web-app-manifest-512x512.png',
  'site.webmanifest',
];

describe('favicon and social meta', () => {
  it.each(faviconFiles)('includes %s in public/', (file) => {
    expect(() => readFileSync(resolve(publicDir, file))).not.toThrow();
  });

  it('includes RealFaviconGenerator link tags in index.html', () => {
    expect(indexHtml).toContain('href="/favicon-96x96.png"');
    expect(indexHtml).toContain('href="/favicon.svg"');
    expect(indexHtml).toContain('href="/favicon.ico"');
    expect(indexHtml).toContain('href="/apple-touch-icon.png"');
    expect(indexHtml).toContain('href="/site.webmanifest"');
  });

  it('includes Open Graph and Twitter meta tags', () => {
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('property="og:description"');
    expect(indexHtml).toContain('property="og:image"');
    expect(indexHtml).toContain('property="og:url"');
    expect(indexHtml).toContain('property="og:site_name"');
    expect(indexHtml).toContain('property="og:locale" content="pt_BR"');
    expect(indexHtml).toContain('name="twitter:card" content="summary_large_image"');
    expect(indexHtml).toContain('name="twitter:image"');
  });

  it('configures web manifest with salon name', () => {
    const manifest = JSON.parse(
      readFileSync(resolve(publicDir, 'site.webmanifest'), 'utf-8'),
    ) as { name: string; theme_color: string };

    expect(manifest.name).toBe('Salão Maria Bonita');
    expect(manifest.theme_color).toBe('#C9A84C');
  });
});
