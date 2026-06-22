// Load playlist data from JSON

import playlistData from '@/data/playlists.json';
import { Playlist } from '@/types/playlist';

interface PlaylistJson {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  platform: 'spotify' | 'apple' | 'soundcloud' | 'youtube' | 'disco';
  embedUrl: string;
  externalUrl?: string;
  genres?: string[];
  moods?: string[];
}

interface PlaylistDataJson {
  heroTitle: string;
  heroSubtitle: string;
  playlists: PlaylistJson[];
}

/**
 * Convert JSON playlist data to Playlist type
 */
function convertToPlaylist(item: PlaylistJson): Playlist {
  return {
    _id: item.id,
    _type: 'playlist',
    title: item.title,
    slug: { current: item.title.toLowerCase().replace(/\s+/g, '-') },
    subtitle: item.subtitle,
    description: item.description
      ? [
          {
            _type: 'block',
            children: [
              {
                _type: 'span',
                text: item.description,
              },
            ],
          },
        ]
      : undefined,
    platform: item.platform,
    embedUrl: item.embedUrl,
    externalUrl: item.externalUrl,
    genres: item.genres,
    moods: item.moods,
    publishedAt: new Date().toISOString(),
    embedStatus: 'active',
  };
}

/**
 * Get all playlists from JSON file
 */
export function getPlaylists(): Playlist[] {
  const data = playlistData as PlaylistDataJson;
  return data.playlists.map(convertToPlaylist);
}

/**
 * Get hero text from JSON file
 */
export function getHeroText(): { title: string; subtitle: string } {
  const data = playlistData as PlaylistDataJson;
  return {
    title: data.heroTitle,
    subtitle: data.heroSubtitle,
  };
}
