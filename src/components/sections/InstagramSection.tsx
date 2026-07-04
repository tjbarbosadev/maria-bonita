import { ExternalLink, Instagram, Loader2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { LinkButton } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { InstagramEmbed } from '@/components/ui/InstagramEmbed';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { type InstagramPost, instagramPosts } from '@/data/instagram';
import { siteConfig } from '@/data/site';
import { loadInstagramEmbedScript } from '@/lib/instagram-embed';
import { fetchLatestInstagramPosts } from '@/services/instagram-feed';

export function InstagramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [posts, setPosts] = useState<InstagramPost[]>(instagramPosts);
  const [loading, setLoading] = useState(instagramPosts.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchLatestInstagramPosts()
      .then((latestPosts) => {
        if (!cancelled && latestPosts.length > 0) {
          setPosts(latestPosts);
        }
      })
      .catch(() => {
        if (!cancelled && instagramPosts.length === 0) {
          setError('Não foi possível carregar as postagens agora.');
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (posts.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadInstagramEmbedScript();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [posts.length]);

  return (
    <section id="instagram" ref={sectionRef} className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Instagram"
          title="Acompanha a gente no Instagram"
          subtitle="Últimos reels do perfil — direto do feed."
        />

        <div className="mt-8 flex justify-center">
          <LinkButton
            href={siteConfig.instagram.url}
            variant="outline"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="h-5 w-5" />@{siteConfig.instagram.handle}
            <ExternalLink className="h-4 w-4" />
          </LinkButton>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex items-center justify-center gap-2 py-16 text-muted">
              <Loader2 className="h-5 w-5 animate-spin" />
              Carregando reels...
            </div>
          ) : posts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <InstagramEmbed key={post.url} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-muted">
              {error ?? 'Nenhum reel encontrado.'}{' '}
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="text-gold underline"
              >
                Ver perfil no Instagram
              </a>
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
