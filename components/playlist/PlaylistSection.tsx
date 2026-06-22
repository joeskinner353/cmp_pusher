// Playlist Section Component

'use client';

import { Playlist } from '@/types/playlist';
import { PlaylistHeader } from './PlaylistHeader';
import { PlaylistMeta } from './PlaylistMeta';
import { PlaylistPlayer } from '@/components/players/PlaylistPlayer';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';

interface PlaylistSectionProps {
  playlist: Playlist;
  onOpenFocus?: () => void;
  className?: string;
}

export function PlaylistSection({
  playlist,
  onOpenFocus,
  className,
}: PlaylistSectionProps) {
  return (
    <ScrollReveal>
      <section
        id={playlist.slug.current}
        className={cn(
          'py-12 md:py-16 lg:py-20 border-b border-gray-800 last:border-b-0',
          className
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Content */}
            <div className="space-y-6">
              <PlaylistHeader
                title={playlist.title}
                subtitle={playlist.subtitle}
                description={playlist.description}
              />

              <PlaylistMeta
                genres={playlist.genres}
                moods={playlist.moods}
                tags={playlist.tags}
                externalUrl={playlist.externalUrl}
                platform={playlist.platform}
              />

              {/* Focus Mode button hidden - code kept for future use */}
              {/* {onOpenFocus && (
                <Button
                  onClick={onOpenFocus}
                  variant="outline"
                  size="md"
                  className="group"
                >
                  <span>Focus Mode</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </Button>
              )} */}
            </div>

            {/* Right Column: Player */}
            <div className="space-y-4">
              {playlist.artwork && (
                <div className="relative aspect-square w-full max-w-md mx-auto lg:hidden rounded-lg overflow-hidden">
                  <Image
                    src={urlFor(playlist.artwork).width(800).url()}
                    alt={playlist.artwork.alt || playlist.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              <PlaylistPlayer
                id={playlist._id}
                platform={playlist.platform}
                embedUrl={playlist.embedUrl}
                title={playlist.title}
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
