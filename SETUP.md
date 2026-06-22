# Pusher Music Platform - Setup Guide

This guide will walk you through setting up the Pusher music discovery platform from scratch to deployment.

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- A Sanity account (free at [sanity.io](https://www.sanity.io))
- A Netlify account (free at [netlify.com](https://www.netlify.com))

## Step 1: Install Dependencies

```bash
cd pusher_site
npm install
```

## Step 2: Set Up Sanity CMS

### Create a Sanity Project

1. Visit [sanity.io](https://www.sanity.io) and sign in/create an account
2. Click "Create project"
3. Choose "Start from scratch"
4. Name your project (e.g., "Pusher Music Platform")
5. Choose a dataset name (default: "production")
6. Note your **Project ID** (you'll need this)

### Configure Environment Variables

1. Copy the environment template:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Sanity credentials:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

### Initialize Sanity Studio

The Sanity Studio is already configured in this project. To set up CORS permissions:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API**
4. Under **CORS Origins**, add:
   - `http://localhost:3000` (for local development)
   - Your production domain (e.g., `https://pusher.netlify.app`)

## Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will show example playlists with hardcoded data until you add content through Sanity.

### Access Sanity Studio

While the dev server is running, access the CMS at:

```
http://localhost:3000/studio
```

Login with your Sanity credentials to start adding content.

## Step 4: Add Your First Playlist

1. Open the Studio at `http://localhost:3000/studio`
2. Click **Playlists** → **Create new Playlist**
3. Fill in the required fields:
   - **Title**: Your playlist name
   - **Platform**: Select streaming platform
   - **Embed URL**: Get this from your streaming platform (see below)
4. Add optional fields (description, artwork, genres, moods)
5. Click **Publish**

### Getting Embed URLs

**Spotify:**
1. Open your playlist on Spotify Web
2. Click **⋯** → **Share** → **Copy Embed Code**
3. Extract the URL from the `<iframe src="...">` tag
4. Example: `https://open.spotify.com/embed/playlist/[PLAYLIST_ID]`

**Apple Music:**
1. Open playlist on Apple Music
2. Click **⋯** → **Share Playlist** → **Copy Embed Code**
3. Extract URL from iframe
4. Example: `https://embed.music.apple.com/us/playlist/[PLAYLIST_ID]`

**SoundCloud:**
1. Open playlist on SoundCloud
2. Click **Share** → **Embed**
3. Copy the iframe URL
4. Example: `https://w.soundcloud.com/player/?url=...`

**YouTube:**
1. Open playlist on YouTube
2. Copy the playlist URL
3. Example: `https://www.youtube.com/playlist?list=...`

## Step 5: Configure Homepage to Use Sanity Data

Currently, the homepage uses example data. To switch to Sanity:

1. Open `app/page.tsx`
2. Uncomment the Sanity data fetching code (future implementation)
3. Or replace the `examplePlaylists` array with a call to `getPlaylists()` from Sanity queries

## Step 6: Build for Production

Test the production build locally:

```bash
npm run build
npm start
```

This ensures everything compiles correctly before deployment.

## Step 7: Deploy to Netlify

### Option A: Deploy via GitHub (Recommended)

1. **Create a Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub
   - Follow the instructions to push your local repository

3. **Connect to Netlify**
   - Log into [Netlify](https://app.netlify.com)
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect your GitHub account
   - Select the `pusher_site` repository

4. **Configure Build Settings**
   
   Netlify should auto-detect Next.js settings, but verify:
   - **Branch**: `main` (or your default branch)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

5. **Set Environment Variables**
   
   Go to **Site settings** → **Environment variables** → **Add variables**:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = your_project_id
   NEXT_PUBLIC_SANITY_DATASET = production
   NEXT_PUBLIC_SANITY_API_VERSION = 2024-01-01
   NEXT_PUBLIC_SITE_URL = https://your-site.netlify.app
   ```

6. **Deploy**
   - Click **"Deploy site"**
   - Wait 2-3 minutes for the build to complete

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

## Step 8: Configure Custom Domain (Optional)

1. In Netlify, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain
4. Follow DNS configuration instructions
5. SSL certificate auto-provisions in a few minutes

## Step 9: Update CORS in Sanity

After deployment:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. **Settings** → **API** → **CORS Origins**
4. Add your production URL: `https://your-site.netlify.app`

## Continuous Deployment

Every push to your `main` branch will automatically trigger a new deployment on Netlify.

## Development Workflow

1. **Local Development**: Make changes locally
2. **Test**: Run `npm run dev` and test in browser
3. **Build Test**: Run `npm run build` to ensure no errors
4. **Commit**: `git commit -m "Your changes"`
5. **Push**: `git push origin main`
6. **Auto-Deploy**: Netlify automatically deploys changes

## Troubleshooting

### Build Fails on Netlify

**Check:**
- Environment variables are set correctly
- All dependencies in `package.json`
- Build works locally with `npm run build`
- Check Netlify deploy logs for specific errors

### Playlists Not Showing

**Check:**
- Sanity project ID is correct in `.env.local` / Netlify env vars
- CORS is configured in Sanity for your domain
- Playlists are published (not drafts) in Sanity
- Cache has refreshed (wait 1 hour or trigger revalidation)

### Embeds Not Loading

**Check:**
- Embed URLs are correct and complete
- Platform hasn't removed the playlist
- Browser console for errors
- Try the embed URL in an isolated HTML file

### Images Not Displaying

**Check:**
- Images are uploaded to Sanity
- Sanity CDN domain (`cdn.sanity.io`) is in Next.js image config
- File sizes are reasonable (<10MB)

## Next Steps

- **Content**: Add more playlists through Sanity Studio
- **Customization**: Adjust colors, fonts in design tokens
- **Features**: Implement search, filtering, collections
- **Analytics**: Add Google Analytics or Plausible
- **SEO**: Optimize meta tags, add sitemap

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Netlify Documentation](https://docs.netlify.com)

## Support

For issues or questions:
- Check the documentation in the `docs/` folder
- Review the architecture documentation
- Consult the roadmap for planned features

## License

Proprietary - All rights reserved
