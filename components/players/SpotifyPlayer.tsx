// Spotify Player Component

'use client';

import { useEffect } from 'react';
import { usePlaybackControl } from '@/lib/hooks/usePlaybackControl';
import { EmbedPlayerProps } from '@/types/player';
import { cn } from '@/lib/utils/cn';

export function SpotifyPlayer({ id, embedUrl, title, className }: EmbedPlayerProps) {
  const { handlePlay } = usePlaybackControl(id, 'spotify', false);

  useEffect(() => {
    // Note: Spotify iframe embeds have limited playback control
    // Future enhancement: Integrate Spotify Web Playback SDK
  }, []);

  // Convert regular Spotify URL to embed URL if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('/embed/')) return url;
    
    // Extract playlist ID and convert to embed URL
    const playlistMatch = url.match(/playlist\/([a-zA-Z0-9]+)/);
    if (playlistMatch) {
      return `https://open.spotify.com/embed/playlist/${playlistMatch[1]}`;
    }
    
    return url;
  };

  return (
    <div className={cn('relative w-full', className)}>
      <iframe
        src={getEmbedUrl(embedUrl)}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={`Spotify Playlist: ${title}`}
        className="rounded-lg"
        onPlay={() => handlePlay()}
      />
    </div>
  );
}
