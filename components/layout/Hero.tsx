// Hero Section Component

'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { cn } from '@/lib/utils/cn';

interface HeroProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Hero({
  title = 'Discover Music',
  subtitle = 'Curated playlists for every mood and moment',
  className,
}: HeroProps) {
  return (
    <section className={cn('relative py-20 md:py-32 lg:py-40', className)}>
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-900/50 to-gray-950 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-100 tracking-tight text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 text-balance max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
              <span>Scroll to explore</span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
