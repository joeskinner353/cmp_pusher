# Pusher - Premium Music Discovery Platform

A production-ready, scalable music discovery and playlist showcase website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎵 Features

- **Multi-Platform Playlist Support**: Spotify, Apple Music, SoundCloud, YouTube Music, and DISCO
- **Premium Design**: Dark-mode optimized with sophisticated animations
- **Fully Responsive**: Beautiful experience on all devices
- **Simple JSON Editing**: No CMS required - just edit a JSON file
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ✏️ Editing Content

**All your playlists and site text are in one file:** `data/playlists.json`

See [HOW_TO_EDIT.md](HOW_TO_EDIT.md) for detailed instructions on:
- Changing the hero title and subtitle
- Adding/editing/deleting playlists
- Getting embed URLs from Spotify, Apple Music, etc.
- Common mistakes and troubleshooting

### Quick Example

```json
{
  "heroTitle": "Your Site Title",
  "heroSubtitle": "Your tagline",
  "playlists": [
    {
      "id": "1",
      "title": "My Playlist",
      "description": "Description here...",
      "platform": "spotify",
      "embedUrl": "https://open.spotify.com/embed/playlist/...",
      "genres": ["electronic"],
      "moods": ["energetic"]
    }
  ]
}
```

## 📁 Project Structure

```
pusher_site/
├── app/                      # Next.js App Router
├── components/               # React components
├── data/
│   └── playlists.json       # ← EDIT THIS FILE for content
├── lib/                      # Utilities and helpers
├── styles/                   # Design tokens & animations
├── types/                    # TypeScript definitions
└── docs/                     # Documentation
```

## 🚀 Deployment to Netlify

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify**
   - Log into [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your repository

3. **Deploy**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 🛠️ Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📚 Documentation

- [HOW_TO_EDIT.md](HOW_TO_EDIT.md) - **Content editing guide** ← Start here!
- [SETUP.md](SETUP.md) - Complete setup instructions
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - System architecture
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deployment guide
- [docs/ROADMAP.md](docs/ROADMAP.md) - Feature roadmap

## 🎨 Features Hidden (But Available)

The following features are built-in but currently hidden:
- **Tags** - Hashtag-style playlist tags (code in `components/playlist/PlaylistMeta.tsx`)
- **Focus Mode** - Fullscreen playlist view (code in `components/focus-mode/FocusMode.tsx`)

To re-enable, uncomment the code in those files.

## 📄 License

Proprietary - All rights reserved
