// Focus Mode Component

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Playlist } from '@/types/playlist';
import { PlaylistPlayer } from '@/components/players/PlaylistPlayer';
import { PlaylistHeader } from '@/components/playlist/PlaylistHeader';
import { PlaylistMeta } from '@/components/playlist/PlaylistMeta';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity/client';
import { useEffect } from 'react';

interface FocusModeProps {
  playlist: Playlist | null;
  isOpen: boolean;
  onClose: () => void;
}

export function FocusMode({ playlist, isOpen, onClose }: FocusModeProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  if (!playlist) return null;

  const backgroundImage = playlist.backgroundArtwork || playlist.artwork;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Background Overlay with Artwork */}
          {backgroundImage && (
            <div className="absolute inset-0">
              <Image
                src={urlFor(backgroundImage).width(1920).blur(200).url()}
                alt=""
                fill
                className="object-cover opacity-20"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/90 to-black" />
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className={cn(
              'absolute top-4 right-4 md:top-8 md:right-8 z-10',
              'p-2 rounded-full bg-gray-900/80 hover:bg-gray-800',
              'text-gray-400 hover:text-gray-100',
              'transition-all duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary'
            )}
            aria-label="Close focus mode"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* ESC Key Hint */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 text-gray-500 text-sm hidden md:block">
            Press <kbd className="px-2 py-1 bg-gray-800 rounded text-gray-400">ESC</kbd> to
            close
          </div>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className={cn(
              'relative w-full h-full overflow-y-auto',
              'px-4 py-20 md:px-8 md:py-24'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left: Artwork & Info */}
                <div className="space-y-6">
                  {playlist.artwork && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="relative aspect-square w-full rounded-lg overflow-hidden shadow-2xl"
                    >
                      <Image
                        src={urlFor(playlist.artwork).width(800).url()}
                        alt={playlist.artwork.alt || playlist.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <PlaylistHeader
                      title={playlist.title}
                      subtitle={playlist.subtitle}
                      description={playlist.description}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <PlaylistMeta
                      genres={playlist.genres}
                      moods={playlist.moods}
                      tags={playlist.tags}
                      externalUrl={playlist.externalUrl}
                      platform={playlist.platform}
                    />
                  </motion.div>
                </div>

                {/* Right: Player */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="lg:sticky lg:top-24 h-fit"
                >
                  <PlaylistPlayer
                    id={`focus-${playlist._id}`}
                    platform={playlist.platform}
                    embedUrl={playlist.embedUrl}
                    title={playlist.title}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
