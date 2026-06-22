# How to Edit Your Playlists

## Quick Start

All your playlists and site text are in one simple file: **`data/playlists.json`**

Just edit this file, save, and redeploy to Netlify (or refresh your local dev server).

---

## Editing the Hero Text

At the top of `playlists.json`:

```json
{
  "heroTitle": "Your Title Here",
  "heroSubtitle": "Your subtitle here",
  "playlists": [...]
}
```

**Example:**
```json
{
  "heroTitle": "Joe's Music Collection",
  "heroSubtitle": "Playlists I love and want to share",
  "playlists": [...]
}
```

---

## Adding/Editing Playlists

Each playlist is an object in the `playlists` array:

```json
{
  "id": "1",
  "title": "My Playlist Name",
  "subtitle": "A short description",
  "description": "A longer paragraph about this playlist...",
  "platform": "spotify",
  "embedUrl": "https://open.spotify.com/embed/playlist/...",
  "externalUrl": "https://open.spotify.com/playlist/...",
  "genres": ["electronic", "ambient"],
  "moods": ["relaxed", "focused"]
}
```

### Required Fields
- **id** - Unique number or text (e.g., "1", "2", "ambient-1")
- **title** - Playlist name (shown large on site)
- **description** - Text description
- **platform** - Must be one of: `"spotify"`, `"apple"`, `"soundcloud"`, `"youtube"`, `"disco"`
- **embedUrl** - The iframe embed URL (see below for how to get this)

### Optional Fields
- **subtitle** - Short text under title
- **externalUrl** - Link to open playlist on platform
- **genres** - Array of genre tags (e.g., `["house", "techno"]`)
- **moods** - Array of mood tags (e.g., `["energetic", "dark"]`)

---

## Getting Embed URLs

### Spotify
1. Open your playlist on Spotify Web
2. Click **⋯** (three dots) → **Share** → **Copy Embed Code**
3. You'll get something like:
   ```html
   <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8Kgdykz6OKj"></iframe>
   ```
4. Copy just the URL part: `https://open.spotify.com/embed/playlist/37i9dQZF1DX8Kgdykz6OKj`

### Apple Music
1. Open playlist on Apple Music
2. Click **⋯** → **Share** → **Copy Embed Code**
3. Extract the URL from the iframe

### SoundCloud
1. Open playlist on SoundCloud
2. Click **Share** → **Embed**
3. Copy the URL from the embed code

### YouTube
1. Open your YouTube playlist
2. Copy the regular URL: `https://www.youtube.com/playlist?list=...`
3. Change it to embed format: `https://www.youtube.com/embed/videoseries?list=...`

---

## Adding a New Playlist

Copy an existing playlist object and modify it:

```json
{
  "playlists": [
    {
      "id": "1",
      "title": "Existing Playlist",
      ...
    },
    {
      "id": "2",
      "title": "My New Playlist",
      "subtitle": "Description here",
      "description": "Longer description...",
      "platform": "spotify",
      "embedUrl": "https://open.spotify.com/embed/playlist/YOUR_ID",
      "externalUrl": "https://open.spotify.com/playlist/YOUR_ID",
      "genres": ["ambient"],
      "moods": ["relaxed"]
    }
  ]
}
```

**Important:** Don't forget the comma between playlists!

---

## Deleting a Playlist

Just remove the entire playlist object (including the curly braces `{...}`).

Make sure there are no trailing commas after the last playlist.

---

## Reordering Playlists

Playlists appear in the order they're listed in the file.

To reorder, just cut and paste playlist objects to rearrange them.

---

## Example JSON Structure

```json
{
  "heroTitle": "My Music",
  "heroSubtitle": "Curated playlists",
  "playlists": [
    {
      "id": "1",
      "title": "First Playlist",
      "description": "Description here",
      "platform": "spotify",
      "embedUrl": "https://...",
      "genres": ["electronic"],
      "moods": ["energetic"]
    },
    {
      "id": "2",
      "title": "Second Playlist",
      "description": "Another description",
      "platform": "spotify",
      "embedUrl": "https://...",
      "genres": ["jazz"],
      "moods": ["relaxed"]
    }
  ]
}
```

---

## Common Mistakes

❌ **Missing comma between playlists**
```json
{
  "id": "1",
  "title": "Playlist 1"
}  // ← Missing comma here!
{
  "id": "2",
```

✅ **Correct:**
```json
{
  "id": "1",
  "title": "Playlist 1"
},  // ← Comma here
{
  "id": "2",
```

❌ **Trailing comma after last item**
```json
{
  "id": "2",
  "title": "Last Playlist"
},  // ← Remove this comma!
]
```

✅ **Correct:**
```json
{
  "id": "2",
  "title": "Last Playlist"
}  // ← No comma
]
```

---

## After Editing

### Local Development
Just save the file - the dev server will auto-reload.

### Production (Netlify)
1. Save `data/playlists.json`
2. Commit to git: `git add . && git commit -m "Updated playlists"`
3. Push: `git push`
4. Netlify will automatically rebuild (2-3 minutes)

---

## Need Help?

- JSON must be valid (use a JSON validator if unsure)
- Each playlist needs a unique `id`
- Platform must match exactly: `"spotify"`, `"apple"`, `"soundcloud"`, `"youtube"`, or `"disco"`
- Quotes around all text values
- Check for missing/extra commas
