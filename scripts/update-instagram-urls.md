# Como atualizar reels do Instagram

O site busca automaticamente os **últimos reels** do perfil `@mariabonita_pg`.

## Atualização automática

```bash
npm run fetch:instagram
```

Isso grava as URLs em `src/data/instagram/posts.ts`. O comando também roda antes do `npm run build`.

## No navegador (dev)

Com `npm run dev`, a seção Instagram tenta buscar reels em tempo real via proxy (`/api/instagram/...`).

## Requisitos

- Perfil público
- URLs no formato `https://www.instagram.com/reel/SHORTCODE/`
