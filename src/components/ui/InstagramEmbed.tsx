import { useEffect } from 'react';

import type { InstagramPost } from '@/data/instagram';
import { loadInstagramEmbedScript } from '@/lib/instagram-embed';

type InstagramEmbedProps = {
  post: InstagramPost;
};

export function InstagramEmbed({ post }: InstagramEmbedProps) {
  useEffect(() => {
    loadInstagramEmbedScript();
  }, [post.url]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`${post.url}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: 0,
        maxWidth: '100%',
        minWidth: 0,
        padding: 0,
        width: '100%',
      }}
    >
      <a href={post.url} target="_blank" rel="noreferrer">
        Ver no Instagram
      </a>
    </blockquote>
  );
}
