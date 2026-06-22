// Header Component

'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              'text-xl md:text-2xl font-bold text-gray-100',
              'hover:text-white transition-colors duration-200'
            )}
          >
            Pusher
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#playlists"
              className="text-sm text-gray-400 hover:text-gray-100 transition-colors duration-200"
            >
              Playlists
            </Link>
            <Link
              href="#about"
              className="text-sm text-gray-400 hover:text-gray-100 transition-colors duration-200"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
