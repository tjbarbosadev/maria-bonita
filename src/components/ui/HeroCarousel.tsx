import { useEffect, useState } from 'react';

import { heroCarouselImages } from '@/data/hero';
import { cn } from '@/lib/utils';

const INTERVAL_MS = 5000;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroCarouselImages.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-3 rounded-[2rem] border border-gold opacity-60" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-gold shadow-soft">
        <div className="relative aspect-[4/5] w-full bg-neutral-900">
          {heroCarouselImages.map((image, index) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={cn(
                'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out',
                index === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-0',
              )}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {heroCarouselImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Ir para foto ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-500',
              index === activeIndex
                ? 'w-7 bg-[var(--accent-gold)]'
                : 'w-2 bg-[color-mix(in_srgb,var(--accent-gold)_35%,transparent)]',
            )}
          />
        ))}
      </div>
    </div>
  );
}
