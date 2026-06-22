# Deployment Guide

## Netlify Deployment

### Prerequisites

- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account (free tier works great)
- Sanity project set up

### Step-by-Step Deployment

#### 1. Prepare Your Repository

```bash
# Ensure all files are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### 2. Connect to Netlify

1. Log into [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider
4. Select the `pusher_site` repository
5. Configure build settings:
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

#### 3. Configure Environment Variables

Go to **Site settings** → **Environment variables** and add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
```

**Important**: Replace `your-site.netlify.app` with your actual Netlify domain.

#### 4. Install Next.js Plugin

The `netlify.toml` file automatically configures the `@netlify/plugin-nextjs` plugin. No manual installation needed.

#### 5. Deploy

Click **"Deploy site"**

Your site will be live in 2-3 minutes!

### Custom Domain Setup

#### Add Your Domain

1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `pusher.music`)
4. Follow DNS configuration instructions

#### SSL Certificate

Netlify automatically provisions SSL certificates. Your site will be HTTPS within minutes.

### Continuous Deployment

Every push to your `main` branch automatically triggers a new deployment.

#### Deploy Previews

Pull requests automatically get preview URLs for testing.

### Build Configuration

The `netlify.toml` file handles:
- Build commands
- Publish directory
- Redirects and rewrites
- Security headers
- Cache headers

## Environment-Specific Configuration

### Production

Use environment variables in Netlify for production values.

### Staging

Create a separate Netlify site pointing to a `staging` branch:
1. Different Sanity dataset: `staging`
2. Different environment variables
3. Test changes before production

## Performance Optimization

### Automatic Optimizations

Netlify provides:
- Global CDN
- Automatic asset compression (Brotli, gzip)
- HTTP/2 & HTTP/3
- Smart CDN routing

### Next.js Optimizations

Already configured:
- Image optimization
- Code splitting
- Tree shaking
- Static generation with ISR

### Additional Recommendations

1. **Enable Asset Optimization**
   - Go to **Build & deploy** → **Post processing**
   - Enable **Bundle & minify**

2. **Configure Caching**
   - Already set in `netlify.toml`
   - Static assets cached for 1 year

## Monitoring

### Netlify Analytics

Enable in **Site settings** → **Analytics** (paid feature)

### Deploy Notifications

Set up notifications for:
- Deploy started
- Deploy succeeded
- Deploy failed

Configure in **Site settings** → **Build & deploy** → **Deploy notifications**

### Recommended Third-Party Tools

- **Google Analytics** or **Plausible**: User analytics
- **Sentry**: Error tracking
- **Lighthouse CI**: Performance monitoring

## Rollbacks

### Quick Rollback

1. Go to **Deploys**
2. Find the previous working deploy
3. Click **"Publish deploy"**

Instant rollback with zero downtime!

## Troubleshooting

### Build Failures

**Check build logs**: Deploys → Failed deploy → View logs

Common issues:
- Missing environment variables
- TypeScript errors
- Missing dependencies

**Solution**: Fix locally, test with `npm run build`, then push.

### Environment Variables Not Working

- Ensure all `NEXT_PUBLIC_*` variables are set
- Redeploy after adding variables
- Clear cache: **Site settings** → **Build & deploy** → **Clear cache**

### 404 Errors

The `netlify.toml` includes a catch-all redirect. If you see 404s:
1. Check `netlify.toml` is committed
2. Verify publish directory is `.next`
3. Clear cache and redeploy

### Slow Builds

Next.js builds can take 2-5 minutes. To speed up:
1. Enable build caching (automatic)
2. Reduce unused dependencies
3. Optimize images before upload

## Sanity Studio Deployment

### Option 1: Embedded Studio (Recommended)

Already configured! Your studio is accessible at:
```
https://your-site.netlify.app/studio
```

### Option 2: Separate Studio Deployment

Deploy Sanity Studio to a subdomain:

1. Create a new Netlify site
2. Configure build:
   ```
   Build command: npm run build-studio
   Publish directory: studio/dist
   ```
3. Deploy to `studio.your-site.com`

## Security Checklist

- [ ] Environment variables set in Netlify (not in code)
- [ ] HTTPS enabled
- [ ] Security headers configured (in `netlify.toml`)
- [ ] Dependencies up to date
- [ ] Sanity CORS configured for your domain

## Cost Optimization

### Netlify Free Tier Includes:
- 100GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Deploy previews

### Monitoring Usage:
- **Team overview** → **Usage**
- Set up alerts for approaching limits

### If You Exceed Free Tier:
- Upgrade to Pro ($19/month)
- Optimize images (reduce bandwidth)
- Enable asset optimization

## Backup & Recovery

### Content Backup

Sanity automatically backs up your content. Export data:

```bash
sanity dataset export production backup.tar.gz
```

### Code Backup

Your Git repository is your backup. Ensure:
- Regular commits
- GitHub/GitLab backup enabled

## Post-Deployment Checklist

- [ ] Site loads successfully
- [ ] All playlists display correctly
- [ ] Focus mode works
- [ ] Navigation functions
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)
- [ ] Analytics tracking (if configured)
- [ ] SEO meta tags correct
- [ ] Sanity Studio accessible

## Support

- **Netlify Docs**: https://docs.netlify.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Netlify Support**: https://support.netlify.com
