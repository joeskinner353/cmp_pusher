# Architecture Overview

## System Architecture

Pusher is built as a modern JAMstack application with the following architecture:

```
┌─────────────────────────────────────────────────────────────┐
│                         NETLIFY CDN                          │
│                   (Edge Network Delivery)                    │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                    Next.js Application                       │
│                  (Incremental Static Regeneration)           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │     React Server Components + Client Components      │   │
│  └──────────────────────────────────────────────────────┘   │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│                    Sanity CMS (Headless)                     │
│         Content API + Image Optimization Pipeline            │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│               External Playlist Platforms                    │
│     Spotify | Apple Music | SoundCloud | YouTube | DISCO    │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **React**: UI library

### Content Management
- **Sanity v3**: Headless CMS
- **Portable Text**: Rich text content
- **Sanity Image Pipeline**: Optimized image delivery

### Deployment
- **Netlify**: Hosting and CDN
- **Next.js Plugin**: Automatic optimization

## Core Features

### 1. Playlist Management System

Playlists are the central content type, with support for:
- Multiple streaming platforms
- Rich text descriptions
- Artwork and backgrounds
- Taxonomy (genres, moods, tags)
- Metadata for future features

### 2. Playback Controller

A centralized playback management system that:
- Registers all active players
- Coordinates playback across platforms
- Handles platform-specific limitations gracefully
- Provides hooks for components to control playback

**Implementation**: `lib/playback/PlaybackController.ts`

### 3. Focus Mode

An immersive fullscreen experience:
- Triggered per-playlist
- Keyboard accessible (ESC to close)
- Animated transitions
- Responsive layout
- Background artwork effects

**Implementation**: `components/focus-mode/FocusMode.tsx`

### 4. Design System

Custom design system optimized for music listening:
- Fluid typography using clamp()
- Responsive spacing scale
- Dark mode only
- Premium easing curves
- Accessible color contrast

**Implementation**: `styles/design-tokens.css`

## Data Flow

### Content Fetching (Future Sanity Integration)

```
1. User requests page
2. Next.js checks if static page exists
3. If stale, fetches fresh data from Sanity
4. Renders page with Server Components
5. Hydrates interactive components client-side
6. Caches static page for future requests
```

### Playlist Playback

```
1. User clicks play or playlist loads in viewport
2. PlaylistPlayer component registers with PlaybackController
3. Platform-specific player component loads iframe
4. When playback starts, controller pauses other players
5. Components receive state updates via hooks
```

## Component Architecture

### Atomic Design Principles

**Atoms** (`components/ui/`):
- Button
- Tag  
- Card

**Molecules** (`components/playlist/`, `components/players/`):
- PlaylistHeader
- PlaylistMeta
- SpotifyPlayer, AppleMusicPlayer, etc.

**Organisms** (`components/layout/`, `components/playlist/`):
- Header
- Footer
- Hero
- PlaylistSection

**Templates/Pages** (`app/`):
- Homepage layout
- Future: Collection pages, Editorial pages

## State Management

### Client State
- Focus mode state: React useState
- Playback state: Custom PlaybackController singleton
- Media queries: Custom hooks

### Server State (Future)
- Sanity content: Server Components with ISR
- No additional state management library needed

## Performance Optimizations

1. **Code Splitting**: Automatic route-based splitting
2. **Lazy Loading**: Intersection Observer for playlist embeds
3. **Image Optimization**: Next.js Image + Sanity Image Pipeline
4. **ISR**: Incremental Static Regeneration (1 hour default)
5. **Prefetching**: Automatic link prefetching
6. **Tree Shaking**: Dead code elimination

## Scalability Considerations

### Handling 50+ Playlists

1. **Virtual Scrolling**: Considered for future if needed
2. **Pagination**: Can be added without architecture changes
3. **Lazy Loading**: Already implemented for embeds
4. **Collections**: Group playlists for better organization

### Future Expansion

The architecture supports:
- Multiple pages (collections, editorial)
- User accounts and personalization
- Advanced search and filtering
- Visual effects layer
- Analytics integration
- A&R and sync features

## Security

- Environment variables for sensitive data
- CORS headers configured
- XSS protection via React
- Content Security Policy headers (Netlify)
- HTTPS enforced

## Monitoring & Analytics (Future)

Recommended integrations:
- Plausible or Google Analytics
- Sentry for error tracking
- Sanity webhooks for content updates
- Netlify analytics for performance

## Browser Support

- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Android)
- Graceful degradation for older browsers

## Accessibility

- WCAG 2.1 Level AA compliance
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus management
- Screen reader tested
- Reduced motion support
