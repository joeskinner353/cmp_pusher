// DISCO Player Component

'use client';

import { useEffect } from 'react';
import { usePlaybackControl } from '@/lib/hooks/usePlaybackControl';
import { EmbedPlayerProps } from '@/types/player';
import { cn } from '@/lib/utils/cn';

export function DiscoPlayer({ id, embedUrl, title, className }: EmbedPlayerProps) {
  const { handlePlay } = usePlaybackControl(id, 'disco', false);

  useEffect(() => {
    // Note: DISCO embed capabilities need to be verified
    // This is a basic iframe implementation
  }, []);

  return (
    <div className={cn('relative w-full', className)}>
      <iframe
        src={embedUrl}
        width="100%"
        height="400"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        loading="lazy"
        title={`DISCO Playlist: ${title}`}
        className="rounded-lg bg-gray-900"
        onPlay={() => handlePlay()}
      />
      
      {/* Fallback message if DISCO doesn't support embeds */}
      <noscript>
        <div className="flex items-center justify-center h-full bg-gray-900 rounded-lg p-8">
          <p className="text-gray-400 text-center">
            Please enable JavaScript to view this DISCO playlist.
          </p>
        </div>
      </noscript>
    </div>
  );
}
