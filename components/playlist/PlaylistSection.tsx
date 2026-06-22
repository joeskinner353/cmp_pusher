// Playlist Section Component

'use client';

import { useState, useEffect } from 'react';
import { Playlist } from '@/types/playlist';
import { PlaylistHeader } from './PlaylistHeader';
import { PlaylistMeta } from './PlaylistMeta';
import { PlaylistPlayer } from '@/components/players/PlaylistPlayer';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { cn } from '@/lib/utils/cn';
// import Image from 'next/image';
// import { urlFor } from '@/lib/sanity/client';

interface PlaylistSectionProps {
  playlist: Playlist;
  onOpenFocus?: () => void;
  className?: string;
  shouldMinimize?: boolean;
}

export function PlaylistSection({
  playlist,
  onOpenFocus,
  className,
  shouldMinimize,
}: PlaylistSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  // Minimize when shouldMinimize prop changes to true
  useEffect(() => {
    if (shouldMinimize) {
      setIsExpanded(false);
    }
  }, [shouldMinimize, playlist.title]);

  return (
    <ScrollReveal>
      <section
        id={playlist.slug.current}
        className={cn(
          isExpanded 
            ? 'py-12 md:py-16 lg:py-20' 
            : 'py-6 md:py-8',
          'border-b border-gray-800 last:border-b-0',
          className
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Header with Toggle Button */}
          <div className={cn(
            "flex items-start justify-between gap-4",
            isExpanded ? "mb-6" : "mb-0"
          )}>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                {playlist.title}
              </h2>
              {/* Subtitle hidden - code kept for future use */}
              {/* {playlist.subtitle && (
                <p className="mt-2 text-lg md:text-xl text-gray-400">
                  {playlist.subtitle}
                </p>
              )} */}
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="shrink-0 w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center text-gray-300 hover:text-white"
              aria-label={isExpanded ? 'Minimize playlist' : 'Expand playlist'}
            >
              <span className="text-2xl leading-none" aria-hidden="true">
                {isExpanded ? '−' : '+'}
              </span>
            </button>
          </div>

          {/* Collapsible Content */}
          {isExpanded && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column: Content */}
              <div className="space-y-6">
                <PlaylistHeader
                  title={playlist.title}
                  subtitle={playlist.subtitle}
                  description={playlist.description}
                  hideTitle={true}
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
              {/* Artwork hidden - requires Sanity CMS */}
              {/* {playlist.artwork && (
                <div className="relative aspect-square w-full max-w-md mx-auto lg:hidden rounded-lg overflow-hidden">
                  <Image
                    src={urlFor(playlist.artwork).width(800).url()}
                    alt={playlist.artwork.alt || playlist.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )} */}

              <PlaylistPlayer
                id={playlist._id}
                platform={playlist.platform}
                embedUrl={playlist.embedUrl}
                title={playlist.title}
              />
            </div>
          </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}
