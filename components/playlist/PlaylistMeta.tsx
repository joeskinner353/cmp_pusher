// Playlist Meta Component - Genres, Moods, Tags

'use client';

import { Tag } from '@/components/ui/Tag';
import { cn } from '@/lib/utils/cn';

interface PlaylistMetaProps {
  genres?: string[];
  moods?: string[];
  tags?: string[];
  externalUrl?: string;
  platform: string;
  className?: string;
}

export function PlaylistMeta({
  genres,
  moods,
  tags,
  externalUrl,
  platform,
  className,
}: PlaylistMetaProps) {
  const hasMetadata = genres?.length || moods?.length || tags?.length;

  return (
    <div className={cn('space-y-4', className)}>
      {hasMetadata && (
        <div className="flex flex-wrap gap-2">
          {genres?.map((genre) => (
            <Tag key={genre} variant="default">
              {genre}
            </Tag>
          ))}
          {moods?.map((mood) => (
            <Tag key={mood} variant="outline">
              {mood}
            </Tag>
          ))}
          {tags?.map((tag) => (
            <Tag key={tag} variant="outline">
              #{tag}
            </Tag>
          ))}
        </div>
      )}

      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-100',
            'transition-colors duration-200 group'
          )}
        >
          <span>Open on {platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}
    </div>
  );
}
