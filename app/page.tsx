// Homepage

'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/layout/Hero';
import { PlaylistSection } from '@/components/playlist/PlaylistSection';
import { FocusMode } from '@/components/focus-mode/FocusMode';
import { Playlist } from '@/types/playlist';

// Example playlists data (will be replaced with Sanity CMS data)
const examplePlaylists: Playlist[] = [
  {
    _id: '1',
    _type: 'playlist',
    title: 'Ambient Horizons',
    slug: { current: 'ambient-horizons' },
    subtitle: 'Ethereal soundscapes for deep focus and reflection',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'A carefully curated selection of ambient and atmospheric music designed to create the perfect environment for concentration, meditation, or simply letting your mind wander. Featuring artists who push the boundaries of sonic exploration.',
          },
        ],
      },
    ],
    platform: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX8Kgdykz6OKj',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX8Kgdykz6OKj',
    genres: ['ambient', 'experimental'],
    moods: ['relaxed', 'atmospheric', 'introspective'],
    tags: ['focus', 'meditation', 'instrumental'],
    featured: true,
    order: 1,
    publishedAt: new Date().toISOString(),
    embedStatus: 'active',
  },
  {
    _id: '2',
    _type: 'playlist',
    title: 'Electronic Essentials',
    slug: { current: 'electronic-essentials' },
    subtitle: 'Timeless tracks from electronic music pioneers',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'From early synth explorations to contemporary productions, this playlist charts the evolution of electronic music. Essential listening for anyone interested in the genre\'s rich history and ongoing innovation.',
          },
        ],
      },
    ],
    platform: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4dyzvuaRJ0n',
    genres: ['electronic', 'idm', 'techno'],
    moods: ['energetic', 'uplifting'],
    tags: ['classic', 'essential'],
    featured: true,
    order: 2,
    publishedAt: new Date().toISOString(),
    embedStatus: 'active',
  },
  {
    _id: '3',
    _type: 'playlist',
    title: 'Late Night Jazz',
    slug: { current: 'late-night-jazz' },
    subtitle: 'Sophisticated sounds for nocturnal listening',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Smooth jazz, soul, and neo-soul selections perfect for late-night listening sessions. Features both classic recordings and contemporary artists keeping the tradition alive.',
          },
        ],
      },
    ],
    platform: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT',
    genres: ['jazz', 'rnb'],
    moods: ['relaxed', 'melancholic'],
    tags: ['night', 'smooth', 'sophisticated'],
    order: 3,
    publishedAt: new Date().toISOString(),
    embedStatus: 'active',
  },
  {
    _id: '4',
    _type: 'playlist',
    title: 'Experimental Edge',
    slug: { current: 'experimental-edge' },
    subtitle: 'Pushing boundaries and challenging expectations',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'For the adventurous listener. This collection features artists who refuse to be confined by genre conventions, creating bold, unconventional sonic experiences.',
          },
        ],
      },
    ],
    platform: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWqNV5cS50j6',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DWWqNV5cS50j6',
    genres: ['experimental', 'electronic'],
    moods: ['intense', 'dark'],
    tags: ['avant-garde', 'challenging'],
    order: 4,
    publishedAt: new Date().toISOString(),
    embedStatus: 'active',
  },
  {
    _id: '5',
    _type: 'playlist',
    title: 'House Foundations',
    slug: { current: 'house-foundations' },
    subtitle: 'Essential house music from past to present',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'A journey through house music\'s evolution, from Chicago origins to global phenomenon. Includes deep house, tech house, and everything in between.',
          },
        ],
      },
    ],
    platform: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX70RN3TfWWJh',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh',
    genres: ['house', 'electronic'],
    moods: ['energetic', 'euphoric'],
    tags: ['dance', 'club'],
    order: 5,
    publishedAt: new Date().toISOString(),
    embedStatus: 'active',
  },
  {
    _id: '6',
    _type: 'playlist',
    title: 'Ethereal Voices',
    slug: { current: 'ethereal-voices' },
    subtitle: 'Otherworldly vocals and atmospheric soundscapes',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Featuring artists who use the human voice as an instrument, creating haunting, beautiful, and transcendent musical experiences.',
          },
        ],
      },
    ],
    platform: 'spotify',
    embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DWWrJa4hDHZDq',
    externalUrl: 'https://open.spotify.com/playlist/37i9dQZF1DWWrJa4hDHZDq',
    genres: ['ambient', 'electronic', 'alternative'],
    moods: ['ethereal', 'atmospheric', 'introspective'],
    tags: ['vocal', 'dreamy'],
    featured: true,
    order: 6,
    publishedAt: new Date().toISOString(),
    embedStatus: 'active',
  },
];

export default function Home() {
  const [focusPlaylist, setFocusPlaylist] = useState<Playlist | null>(null);
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  const openFocusMode = (playlist: Playlist) => {
    setFocusPlaylist(playlist);
    setIsFocusOpen(true);
  };

  const closeFocusMode = () => {
    setIsFocusOpen(false);
    setTimeout(() => setFocusPlaylist(null), 300);
  };

  return (
    <>
      <Header />
      
      <main className="flex-1">
        <Hero
          title="Discover Music"
          subtitle="Curated playlists for every mood and moment"
        />

        <div id="playlists" className="scroll-mt-20">
          {examplePlaylists.map((playlist) => (
            <PlaylistSection
              key={playlist._id}
              playlist={playlist}
              onOpenFocus={() => openFocusMode(playlist)}
            />
          ))}
        </div>
      </main>

      <Footer
        socialLinks={[
          { platform: 'spotify', url: 'https://spotify.com' },
          { platform: 'instagram', url: 'https://instagram.com' },
          { platform: 'twitter', url: 'https://twitter.com' },
        ]}
      />

      <FocusMode
        playlist={focusPlaylist}
        isOpen={isFocusOpen}
        onClose={closeFocusMode}
      />
    </>
  );
}

