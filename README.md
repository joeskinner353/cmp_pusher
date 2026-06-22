# Pusher - Premium Music Discovery Platform

A production-ready, scalable music discovery and playlist showcase website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Sanity CMS.

## 🎵 Features

- **Multi-Platform Playlist Support**: Spotify, Apple Music, SoundCloud, YouTube Music, and DISCO
- **Focus Mode**: Immersive fullscreen experience for each playlist
- **Playback Management**: Intelligent cross-platform playback control
- **Premium Design**: Dark-mode optimized with sophisticated animations
- **Fully Responsive**: Beautiful experience on all devices
- **CMS-Powered**: Non-technical content management via Sanity
- **Performance Optimized**: Lazy loading, code splitting, and optimized images
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A Sanity account (free at [sanity.io](https://www.sanity.io))

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up Sanity CMS**
   
   a. Create a new Sanity project at [sanity.io](https://www.sanity.io)
   
   b. Copy `.env.local.example` to `.env.local`
   ```bash
   cp .env.local.example .env.local
   ```
   
   c. Update `.env.local` with your Sanity credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
pusher_site/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── layout/              # Header, Footer, Hero
│   ├── playlist/            # Playlist components
│   ├── players/             # Platform-specific players
│   ├── focus-mode/          # Focus mode experience
│   ├── ui/                  # Reusable UI components
│   └── animations/          # Framer Motion components
├── lib/
│   ├── sanity/              # Sanity client & schemas
│   ├── playback/            # Playback controller
│   ├── hooks/               # Custom React hooks
│   └── utils/               # Utility functions
├── styles/                  # Design tokens & animations
├── types/                   # TypeScript definitions
├── public/                  # Static assets
└── docs/                    # Documentation
```

## 🚀 Deployment

### Deploy to Netlify

1. **Connect Repository**
   - Log into [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add your Sanity credentials

4. **Deploy**
   - Click "Deploy site"

## 📝 Content Management

### Adding Playlists

1. Set up Sanity Studio (see docs/CONTENT_MANAGEMENT.md)
2. Create playlists via the CMS
3. Content automatically syncs to your site

## 📚 Documentation

- [Architecture Overview](docs/ARCHITECTURE.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Content Management Guide](docs/CONTENT_MANAGEMENT.md)
- [Development Roadmap](docs/ROADMAP.md)

## 🛠️ Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📄 License

Proprietary - All rights reserved
