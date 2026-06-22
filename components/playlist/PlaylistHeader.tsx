// Playlist Header Component

'use client';

import { PortableText } from '@portabletext/react';
import { cn } from '@/lib/utils/cn';

interface PlaylistHeaderProps {
  title: string;
  subtitle?: string;
  description?: any[];
  className?: string;
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-gray-300 leading-relaxed mb-4 last:mb-0">{children}</p>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-semibold text-gray-100 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-medium text-gray-200 mt-4 mb-2">{children}</h4>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-gray-100">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-100 underline underline-offset-4 hover:text-white transition-colors"
      >
        {children}
      </a>
    ),
  },
};

export function PlaylistHeader({
  title,
  subtitle,
  description,
  className,
}: PlaylistHeaderProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-2 text-balance">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-400 text-balance">{subtitle}</p>
        )}
      </div>

      {description && description.length > 0 && (
        <div className="prose prose-invert max-w-none">
          <PortableText value={description} components={portableTextComponents} />
        </div>
      )}
    </div>
  );
}
