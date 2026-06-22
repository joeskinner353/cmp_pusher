// YouTube Player Component

'use client';

import { useEffect, useRef } from 'react';
import { usePlaybackControl } from '@/lib/hooks/usePlaybackControl';
import { EmbedPlayerProps } from '@/types/player';
import { cn } from '@/lib/utils/cn';

export function YouTubePlayer({ id, embedUrl, title, className }: EmbedPlayerProps) {
  const { handlePlay } = usePlaybackControl(id, 'youtube', true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // YouTube IFrame API can be integrated for advanced playback control
    // Current implementation uses basic iframe embed
  }, []);

  // Convert regular YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('/embed/')) return url;
    
    try {
      const urlObj = new URL(url);
      const listId = urlObj.searchParams.get('list');
      
      if (listId) {
        return `https://www.youtube.com/embed/videoseries?list=${listId}&theme=dark&color=white`;
      }
      
      return url;
    } catch {
      return url;
    }
  };

  return (
    <div className={cn('relative w-full aspect-video', className)}>
      <iframe
        ref={iframeRef}
        src={getEmbedUrl(embedUrl)}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        title={`YouTube Playlist: ${title}`}
        className="rounded-lg"
      />
    </div>
  );
}
