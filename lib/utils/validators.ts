// Validation Utilities

import { PlatformType } from '@/types/playlist';

/**
 * Validate if a URL is a valid embed URL for a given platform
 */
export function isValidEmbedUrl(url: string, platform: PlatformType): boolean {
  try {
    const urlObj = new URL(url);
    
    switch (platform) {
      case 'spotify':
        return urlObj.hostname.includes('spotify.com') && 
               (urlObj.pathname.includes('/embed/') || urlObj.pathname.includes('/playlist/'));
      
      case 'apple':
        return urlObj.hostname.includes('apple.com') || 
               urlObj.hostname.includes('music.apple.com');
      
      case 'soundcloud':
        return urlObj.hostname.includes('soundcloud.com');
      
      case 'youtube':
        return urlObj.hostname.includes('youtube.com') || 
               urlObj.hostname.includes('youtu.be');
      
      case 'disco':
        return urlObj.hostname.includes('disco.ac');
      
      default:
        return false;
    }
  } catch {
    return false;
  }
}

/**
 * Extract playlist ID from embed URL
 */
export function extractPlaylistId(url: string, platform: PlatformType): string | null {
  try {
    const urlObj = new URL(url);
    
    switch (platform) {
      case 'spotify': {
        const match = urlObj.pathname.match(/playlist\/([a-zA-Z0-9]+)/);
        return match ? match[1] : null;
      }
      
      case 'youtube': {
        const listParam = urlObj.searchParams.get('list');
        return listParam;
      }
      
      case 'soundcloud': {
        // SoundCloud uses full URL paths
        return urlObj.pathname;
      }
      
      default:
        return null;
    }
  } catch {
    return null;
  }
}

/**
 * Check if string is a valid slug
 */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}
