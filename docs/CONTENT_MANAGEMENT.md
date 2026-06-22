# Content Management Guide

## Getting Started with Sanity Studio

### Initial Setup

1. **Create a Sanity Project**
   - Visit [sanity.io](https://www.sanity.io)
   - Create a new project
   - Choose the free plan
   - Note your Project ID

2. **Configure Environment Variables**
   
   Update `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Access Sanity Studio**
   
   Your studio will be available at:
   - Local: `http://localhost:3000/studio` (when running `npm run dev`)
   - Production: `https://your-site.netlify.app/studio`

## Managing Playlists

### Creating a New Playlist

1. **Open Sanity Studio**
2. Click **"Playlists"** → **"Create new Playlist"**
3. Fill in the required fields

#### Required Fields

**Title**
- The main playlist name
- Max 100 characters
- Example: "Ambient Horizons"

**Slug**
- Auto-generated from title
- Used in URL (`/playlists/ambient-horizons`)
- Edit manually if needed

**Platform**
- Select the streaming platform
- Options: DISCO, Spotify, Apple Music, SoundCloud, YouTube Music

**Embed URL**
- The iframe embed URL from the platform
- See [Getting Embed URLs](#getting-embed-urls) below

#### Optional Fields

**Subtitle**
- Short descriptive text
- Max 200 characters
- Displayed under the title

**Description**
- Rich text editor
- Supports:
  - Bold and italic text
  - Headings (H3, H4)
  - Hyperlinks
  - Lists (bulleted, numbered)

**Artwork**
- Main playlist image
- Recommended: 1000x1000px square
- Formats: JPG, PNG, WebP
- Auto-optimized by Sanity

**Background Artwork**
- Used in Focus Mode
- Falls back to main artwork if not provided
- Same specs as Artwork

**Genres**
- Select from predefined list
- Multiple selections allowed
- Used for filtering and discovery

**Moods**
- Select from predefined list
- Multiple selections allowed
- Examples: Energetic, Relaxed, Melancholic

**Tags**
- Custom freeform tags
- Used for advanced filtering
- Examples: "night listening", "work", "study"

**Featured**
- Toggle to feature this playlist
- Featured playlists can be highlighted on homepage

**Display Order**
- Number field
- Lower numbers appear first
- Leave blank for automatic ordering by publish date

**Published At**
- Auto-set to current date/time
- Edit to backdate or schedule

**External Link**
- Direct link to playlist on platform
- Displays "Open on [Platform]" button

**Sync Metadata** (Advanced)
- For sync licensing use cases
- Fields: BPM, cleared for sync, stems available

**Embed Status**
- Active: Playlist is working
- Broken: Embed not loading
- Unverified: Not tested yet

### Getting Embed URLs

#### Spotify

1. Open your playlist on Spotify
2. Click the **⋯** menu
3. Select **Share** → **Copy Embed Code**
4. Extract the URL from the `<iframe src="...">` tag
5. Example: `https://open.spotify.com/embed/playlist/37i9dQZF1DX8Kgdykz6OKj`

#### Apple Music

1. Open playlist on Apple Music
2. Click **⋯** → **Share Playlist**
3. Select **Copy Embed Code**
4. Use the iframe src URL
5. Example: `https://embed.music.apple.com/us/playlist/...`

#### SoundCloud

1. Open your playlist on SoundCloud
2. Click **Share**
3. Click **Embed**
4. Copy the URL from the embed code
5. Example: `https://w.soundcloud.com/player/?url=...`

#### YouTube Music

1. Open playlist on YouTube
2. Copy the playlist URL
3. The system will auto-convert to embed format
4. Example: `https://www.youtube.com/playlist?list=...`

#### DISCO

1. Get embed code from DISCO platform
2. Extract iframe URL
3. (Note: DISCO embed capabilities should be verified)

### Editing Playlists

1. Go to **Playlists**
2. Click the playlist to edit
3. Make your changes
4. Click **Publish** to save

Changes appear on the website within 1 hour (or immediately if using on-demand revalidation).

### Deleting Playlists

1. Open the playlist
2. Click **⋯** menu (top right)
3. Select **Delete**
4. Confirm deletion

**Warning**: This removes the playlist from your site immediately (after cache refresh).

### Reordering Playlists

Set the **Display Order** field:
- Lower numbers = higher in the list
- Example: 1, 2, 3, 4...

Or leave blank to order by **Published At** date.

## Managing Collections

### What Are Collections?

Collections group related playlists together. Examples:
- "New Music"
- "Electronic Essentials"
- "Focus & Study"
- "Night Listening"

### Creating a Collection

1. Click **"Collections"** → **"Create new Collection"**
2. Fill in details:
   - **Title**: Collection name
   - **Slug**: Auto-generated
   - **Description**: Rich text description
   - **Playlists**: Drag playlists to add
3. Reorder playlists by dragging
4. Publish

## Site Configuration

### Global Settings

Access **Site Configuration** for site-wide settings:

**Site Title**
- Appears in browser tab and SEO

**Site Description**
- Used for SEO meta tags
- Displayed in search results

**Hero Title**
- Main heading on homepage
- Example: "Discover Music"

**Hero Subtitle**
- Subheading on homepage
- Example: "Curated playlists for every mood"

**Social Links**
- Add links to social profiles
- Displays in footer
- Supported: Instagram, Twitter, Facebook, YouTube, etc.

## Content Workflow

### Recommended Workflow

1. **Draft in Sanity Studio**
   - Create content
   - Review before publishing

2. **Publish**
   - Click **Publish** button
   - Content syncs to website

3. **Preview** (Future feature)
   - Use Sanity's preview mode
   - See changes before publishing

4. **Update as Needed**
   - Edit published content anytime
   - Changes reflect on site after cache refresh

## Best Practices

### Writing Guidelines

**Playlist Titles**
- Clear and descriptive
- Avoid all-caps
- Keep under 60 characters

**Descriptions**
- Write for your audience
- Use paragraphs for readability
- Add links to artist profiles or similar content

**Tags & Metadata**
- Be consistent with tag names
- Use lowercase for tags
- Think about how users might search

### Image Guidelines

**Artwork**
- Square format (1:1 ratio)
- Minimum 800x800px
- Recommended 1000x1000px or 1500x1500px
- High quality, not pixelated
- File size: Under 5MB

**File Formats**
- JPG for photos
- PNG for graphics with transparency
- WebP for best compression (if your tool supports it)

### SEO Best Practices

- Write descriptive titles
- Add alt text to images
- Use keywords naturally in descriptions
- Keep slugs clean and readable

## Troubleshooting

### Playlist Not Showing on Website

**Checklist**:
- [ ] Playlist is Published (not draft)
- [ ] Embed Status is "Active"
- [ ] Embed URL is correct
- [ ] Website cache has refreshed (wait 1 hour or trigger manual revalidation)

### Embed Not Loading

**Check**:
1. URL is complete and correct
2. Platform hasn't removed the playlist
3. No network/firewall blocking embeds
4. Browser console for error messages

### Changes Not Appearing

- Allow up to 1 hour for cache to refresh
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- Check that you clicked **Publish** (not just Save)

### Images Not Displaying

- Ensure image is uploaded (not just selected from library)
- Check file size (under 10MB)
- Try re-uploading
- Check browser console for errors

## User Permissions

### Managing Team Members

1. Go to Sanity project dashboard
2. Navigate to **Settings** → **Members**
3. Invite team members by email
4. Assign roles:
   - **Administrator**: Full access
   - **Editor**: Can create and publish
   - **Contributor**: Can create drafts only

## Data Export/Import

### Exporting Content

For backups or migrations:

```bash
sanity dataset export production backup.tar.gz
```

### Importing Content

```bash
sanity dataset import backup.tar.gz production
```

## Support

### Sanity Documentation
- [Sanity Docs](https://www.sanity.io/docs)
- [Portable Text Guide](https://www.sanity.io/docs/presenting-block-text)

### Getting Help

- Check Sanity documentation
- Contact site administrator
- Sanity Community Slack
