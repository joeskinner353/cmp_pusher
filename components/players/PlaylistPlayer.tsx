// Playlist Player Component - Platform Router

'use client';

import { PlatformType } from '@/types/playlist';
import { SpotifyPlayer } from './SpotifyPlayer';
import { AppleMusicPlayer } from './AppleMusicPlayer';
import { SoundCloudPlayer } from './SoundCloudPlayer';
import { YouTubePlayer } from './YouTubePlayer';
import { DiscoPlayer } from './DiscoPlayer';

interface PlaylistPlayerProps {
  id: string;
  platform: PlatformType;
  embedUrl: string;
  title: string;
  className?: string;
}

export function PlaylistPlayer({
  id,
  platform,
  embedUrl,
  title,
  className,
}: PlaylistPlayerProps) {
  const playerProps = { id, embedUrl, title, platform, className };

  switch (platform) {
    case 'spotify':
      return <SpotifyPlayer {...playerProps} />;
    case 'apple':
      return <AppleMusicPlayer {...playerProps} />;
    case 'soundcloud':
      return <SoundCloudPlayer {...playerProps} />;
    case 'youtube':
      return <YouTubePlayer {...playerProps} />;
    case 'disco':
      return <DiscoPlayer {...playerProps} />;
    default:
      return (
        <div className="flex items-center justify-center h-64 bg-gray-900 rounded-lg">
          <p className="text-gray-500">Unsupported platform: {platform}</p>
        </div>
      );
  }
}
