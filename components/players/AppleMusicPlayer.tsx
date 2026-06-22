// Apple Music Player Component

'use client';

import { useEffect } from 'react';
import { usePlaybackControl } from '@/lib/hooks/usePlaybackControl';
import { EmbedPlayerProps } from '@/types/player';
import { cn } from '@/lib/utils/cn';

export function AppleMusicPlayer({ id, embedUrl, title, className }: EmbedPlayerProps) {
  const { handlePlay } = usePlaybackControl(id, 'apple', false);

  useEffect(() => {
    // Note: Apple Music embeds use MusicKit JS for advanced control
    // Current implementation uses basic iframe embed
  }, []);

  return (
    <div className={cn('relative w-full', className)}>
      <iframe
        src={embedUrl}
        width="100%"
        height="450"
        frameBorder="0"
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        loading="lazy"
        title={`Apple Music Playlist: ${title}`}
        className="rounded-lg"
        onPlay={() => handlePlay()}
      />
    </div>
  );
}
