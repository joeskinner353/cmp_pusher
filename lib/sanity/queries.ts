// Sanity GROQ Queries

import { groq } from 'next-sanity';

/**
 * Query to fetch all published playlists, ordered by order field
 */
export const playlistsQuery = groq`
  *[_type == "playlist" && embedStatus == "active"] | order(order asc, publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    subtitle,
    description,
    platform,
    embedUrl,
    externalUrl,
    artwork {
      asset->,
      alt
    },
    backgroundArtwork {
      asset->
    },
    genres,
    moods,
    tags,
    featured,
    order,
    publishedAt,
    syncMetadata,
    lastVerified,
    embedStatus
  }
`;

/**
 * Query to fetch a single playlist by slug
 */
export const playlistBySlugQuery = groq`
  *[_type == "playlist" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    subtitle,
    description,
    platform,
    embedUrl,
    externalUrl,
    artwork {
      asset->,
      alt
    },
    backgroundArtwork {
      asset->
    },
    genres,
    moods,
    tags,
    featured,
    order,
    publishedAt,
    syncMetadata,
    lastVerified,
    embedStatus
  }
`;

/**
 * Query to fetch all collections with their playlists
 */
export const collectionsQuery = groq`
  *[_type == "collection"] | order(order asc) {
    _id,
    _type,
    title,
    slug,
    description,
    playlists[]->{
      _id,
      title,
      slug,
      subtitle,
      platform,
      embedUrl,
      artwork {
        asset->,
        alt
      },
      genres,
      moods,
      tags
    },
    featured,
    order
  }
`;

/**
 * Query to fetch site configuration
 */
export const siteConfigQuery = groq`
  *[_type == "siteConfig"][0] {
    _id,
    title,
    description,
    heroTitle,
    heroSubtitle,
    socialLinks
  }
`;

/**
 * Query to fetch featured playlists
 */
export const featuredPlaylistsQuery = groq`
  *[_type == "playlist" && featured == true && embedStatus == "active"] | order(order asc) [0...6] {
    _id,
    title,
    slug,
    subtitle,
    platform,
    embedUrl,
    artwork {
      asset->,
      alt
    },
    genres,
    moods
  }
`;

/**
 * Query to fetch related playlists based on tags/genres
 */
export const relatedPlaylistsQuery = groq`
  *[_type == "playlist" && 
    _id != $currentId && 
    embedStatus == "active" &&
    (
      count((genres[])[@ in $genres]) > 0 ||
      count((tags[])[@ in $tags]) > 0 ||
      count((moods[])[@ in $moods]) > 0
    )
  ] | order(order asc) [0...3] {
    _id,
    title,
    slug,
    subtitle,
    platform,
    artwork {
      asset->,
      alt
    },
    genres,
    moods,
    tags
  }
`;
