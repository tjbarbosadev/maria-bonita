# Salão Maria Bonita — Landing Page

Landing page institucional do Salão Maria Bonita, especialista em cachos.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- Lucide React
- Vitest + React Testing Library
- ESLint + Prettier + Husky + Commitizen

## Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm run preview    # preview do build
npm run test       # testes
npm run lint       # ESLint
npm run format     # Prettier
npm run commit     # Commitizen
```

## Estrutura de dados (`src/data/`)

```
src/data/
├── index.ts              # reexporta tudo
├── site/                 # marca, contato, endereço, nav, SEO
├── services/             # tipos + categorias de preços
├── hero/                 # imagens do carrossel
├── instagram/            # tipos + postagens (posts.ts gerado)
└── about/                # benefícios e copy da seção
```

- `src/data/site/` — contatos, endereço, links
- `src/data/services/` — tabela de preços
- `src/data/instagram/posts.ts` — URLs de embed (gerado)

## Instagram

A seção busca os **últimos reels** do `@mariabonita_pg`:

- **Dev:** busca em tempo real via proxy (`npm run dev`)
- **Build:** `npm run fetch:instagram` atualiza `src/data/instagram/posts.ts`

Veja `scripts/update-instagram-urls.md` para detalhes.

## Tema claro/escuro

Toggle no header. Preferência salva em `localStorage` e respeita `prefers-color-scheme` na primeira visita.

## Deploy

Build estático em `dist/` — compatível com Vercel, Netlify, GitHub Pages etc.

## Favicon e meta tags sociais

Pacote gerado com [RealFaviconGenerator](https://realfavicongenerator.net/) em `public/`:

- `favicon.ico`, `favicon.svg`, `favicon-96x96.png`
- `apple-touch-icon.png`
- `web-app-manifest-192x192.png`, `web-app-manifest-512x512.png`
- `site.webmanifest`

Tags inseridas em `index.html` (Open Graph + Twitter Cards + SEO).

Ao publicar, confirme que `og:url` e `og:image` em `index.html` usam o domínio final (atualmente `https://mariabonita.com.br`). Valide em https://realfavicongenerator.net/favicon_checker

## Checklist de entrega

- [x] Favicon completo em `public/`
- [x] Meta tags OG/Twitter no `index.html`
- [x] `site.webmanifest` com nome e cor de tema do salão
