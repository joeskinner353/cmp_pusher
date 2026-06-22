// Playlist Types

export type PlatformType = 
  | 'disco'
  | 'spotify'
  | 'apple'
  | 'soundcloud'
  | 'youtube';

export type EmbedStatus = 'active' | 'broken' | 'unverified';

export interface SyncMetadata {
  cleared?: boolean;
  tempo?: string;
  instrumentalAvailable?: boolean;
  stems?: boolean;
}

export interface Playlist {
  _id: string;
  _type: 'playlist';
  title: string;
  slug: {
    current: string;
  };
  subtitle?: string;
  description?: any[]; // Portable Text
  platform: PlatformType;
  embedUrl: string;
  externalUrl?: string;
  artwork?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  backgroundArtwork?: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
  };
  genres?: string[];
  moods?: string[];
  tags?: string[];
  featured?: boolean;
  order?: number;
  publishedAt?: string;
  syncMetadata?: SyncMetadata;
  lastVerified?: string;
  embedStatus?: EmbedStatus;
}

export interface Collection {
  _id: string;
  _type: 'collection';
  title: string;
  slug: {
    current: string;
  };
  description?: any[]; // Portable Text
  playlists?: Playlist[];
  featured?: boolean;
  order?: number;
}

export interface SiteConfig {
  _id: string;
  _type: 'siteConfig';
  title: string;
  description?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  socialLinks?: {
    platform: string;
    url: string;
  }[];
}
