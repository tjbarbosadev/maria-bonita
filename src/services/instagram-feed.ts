import type { InstagramPost } from '@/data/instagram';

const USERNAME = 'mariabonita_pg';
const TARGET_COUNT = 6;

type FeedItem = {
  code?: string;
  shortcode?: string;
  product_type?: string;
};

type FeedResponse = {
  items?: FeedItem[];
  next_max_id?: string;
};

type ProfileResponse = {
  data: {
    user: {
      id: string;
      edge_owner_to_timeline_media?: {
        edges: Array<{ node: FeedItem & { shortcode?: string } }>;
      };
    };
  };
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Instagram request failed: ${response.status}`);
  }
  return response.json() as Promise<T>;
}

function toReels(codes: string[]): InstagramPost[] {
  return codes.slice(0, TARGET_COUNT).map((code) => ({
    url: `https://www.instagram.com/reel/${code}/`,
    type: 'reel' as const,
  }));
}

function collectReelCode(item: FeedItem, codes: string[]) {
  if (item.product_type !== 'clips') {
    return;
  }

  const code = item.code ?? item.shortcode;
  if (code && !codes.includes(code)) {
    codes.push(code);
  }
}

export async function fetchLatestInstagramPosts(): Promise<InstagramPost[]> {
  const profile = await fetchJson<ProfileResponse>(
    `/api/instagram/users/web_profile_info/?username=${USERNAME}`,
  );

  const codes: string[] = [];

  for (const edge of profile.data.user.edge_owner_to_timeline_media?.edges ?? []) {
    collectReelCode(edge.node, codes);
    if (codes.length >= TARGET_COUNT) {
      return toReels(codes);
    }
  }

  const userId = profile.data.user.id;
  let maxId: string | undefined;

  for (let page = 0; page < 4 && codes.length < TARGET_COUNT; page += 1) {
    const params = new URLSearchParams({ count: '12' });
    if (maxId) {
      params.set('max_id', maxId);
    }

    const feed = await fetchJson<FeedResponse>(
      `/api/instagram/feed/user/${userId}/?${params.toString()}`,
    );

    for (const item of feed.items ?? []) {
      collectReelCode(item, codes);
    }

    maxId = feed.next_max_id;
    if (!maxId) {
      break;
    }

    await sleep(400);
  }

  return toReels(codes);
}
