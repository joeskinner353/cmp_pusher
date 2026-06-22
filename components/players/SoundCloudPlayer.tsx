// SoundCloud Player Component

'use client';

import { useEffect, useRef } from 'react';
import { usePlaybackControl } from '@/lib/hooks/usePlaybackControl';
import { EmbedPlayerProps } from '@/types/player';
import { cn } from '@/lib/utils/cn';

export function SoundCloudPlayer({ id, embedUrl, title, className }: EmbedPlayerProps) {
  const { handlePlay, handlePause } = usePlaybackControl(id, 'soundcloud', true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // SoundCloud Widget API allows playback control
    // Load the SoundCloud Widget API
    const script = document.createElement('script');
    script.src = 'https://w.soundcloud.com/player/api.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Convert regular SoundCloud URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('w.soundcloud.com')) return url;
    
    // Create embed URL
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23404040&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
  };

  return (
    <div className={cn('relative w-full', className)}>
      <iframe
        ref={iframeRef}
        src={getEmbedUrl(embedUrl)}
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        allow="autoplay"
        loading="lazy"
        title={`SoundCloud Playlist: ${title}`}
        className="rounded-lg"
      />
    </div>
  );
}
