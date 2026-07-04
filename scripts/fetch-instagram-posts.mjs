#!/usr/bin/env node

/**
 * Busca os últimos reels do @mariabonita_pg (product_type === 'clips').
 *
 * Uso: npm run fetch:instagram
 */

const USERNAME = 'mariabonita_pg';
const TARGET_COUNT = 6;
const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'X-IG-App-ID': '936619743392459',
  Referer: 'https://www.instagram.com/',
  Accept: '*/*',
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url) {
  const response = await fetch(url, { headers: HEADERS });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.json();
}

function collectReel(item, reels) {
  if (item.product_type !== 'clips') {
    return;
  }

  const code = item.code ?? item.shortcode;
  if (code && !reels.includes(code)) {
    reels.push(code);
  }
}

async function fetchLatestReels() {
  const profile = await fetchJson(
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${USERNAME}`,
  );

  const userId = profile.data.user.id;
  const reels = [];

  for (const edge of profile.data.user.edge_owner_to_timeline_media?.edges ?? []) {
    collectReel(edge.node, reels);
    if (reels.length >= TARGET_COUNT) {
      break;
    }
  }

  let maxId;

  for (let page = 0; page < 6 && reels.length < TARGET_COUNT; page += 1) {
    const url = new URL(`https://www.instagram.com/api/v1/feed/user/${userId}/`);
    url.searchParams.set('count', '12');
    if (maxId) {
      url.searchParams.set('max_id', maxId);
    }

    const feed = await fetchJson(url.toString());

    for (const item of feed.items ?? []) {
      collectReel(item, reels);
    }

    maxId = feed.next_max_id;
    if (!maxId) {
      break;
    }

    await sleep(2500);
  }

  return reels.slice(0, TARGET_COUNT).map((code) => ({
    url: `https://www.instagram.com/reel/${code}/`,
    type: 'reel',
  }));
}

async function main() {
  try {
    const posts = await fetchLatestReels();
    const content = `/** Gerado automaticamente por scripts/fetch-instagram-posts.mjs */\nimport type { InstagramPost } from './types';\n\nexport const instagramPosts: InstagramPost[] = ${JSON.stringify(posts, null, 2)};\n`;
    await import('node:fs/promises').then((fs) =>
      fs.writeFile(new URL('../src/data/instagram/posts.ts', import.meta.url), content),
    );
    console.log(`Salvo ${posts.length} reel(s) em src/data/instagram/posts.ts`);
  } catch (error) {
    console.warn(
      'Falha ao buscar Instagram — mantendo src/data/instagram/posts.ts atual:',
      error.message,
    );
  }
}

main();
