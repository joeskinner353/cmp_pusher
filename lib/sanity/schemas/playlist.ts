// Playlist Schema for Sanity

export default {
  name: 'playlist',
  title: 'Playlist',
  type: 'document',
  fields: [
    // Core Content
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Short descriptive subtitle',
      validation: (Rule: any) => Rule.max(200),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
    },

    // Platform Integration
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'DISCO', value: 'disco' },
          { title: 'Spotify', value: 'spotify' },
          { title: 'Apple Music', value: 'apple' },
          { title: 'SoundCloud', value: 'soundcloud' },
          { title: 'YouTube Music', value: 'youtube' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'embedUrl',
      title: 'Embed URL',
      type: 'url',
      description: 'Full embed URL from the platform',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'externalUrl',
      title: 'External Link',
      type: 'url',
      description: 'Direct link to playlist on platform (optional)',
    },

    // Visual Assets
    {
      name: 'artwork',
      title: 'Artwork',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility',
        },
      ],
    },
    {
      name: 'backgroundArtwork',
      title: 'Background Artwork',
      type: 'image',
      description: 'Used in focus mode (optional, falls back to main artwork)',
      options: {
        hotspot: true,
      },
    },

    // Taxonomy
    {
      name: 'genres',
      title: 'Genres',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Electronic', value: 'electronic' },
          { title: 'Ambient', value: 'ambient' },
          { title: 'Experimental', value: 'experimental' },
          { title: 'House', value: 'house' },
          { title: 'Techno', value: 'techno' },
          { title: 'Drum & Bass', value: 'dnb' },
          { title: 'IDM', value: 'idm' },
          { title: 'Jazz', value: 'jazz' },
          { title: 'Classical', value: 'classical' },
          { title: 'Hip Hop', value: 'hiphop' },
          { title: 'R&B', value: 'rnb' },
          { title: 'Pop', value: 'pop' },
          { title: 'Rock', value: 'rock' },
          { title: 'Alternative', value: 'alternative' },
        ],
      },
    },
    {
      name: 'moods',
      title: 'Moods',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Energetic', value: 'energetic' },
          { title: 'Relaxed', value: 'relaxed' },
          { title: 'Melancholic', value: 'melancholic' },
          { title: 'Uplifting', value: 'uplifting' },
          { title: 'Dark', value: 'dark' },
          { title: 'Ethereal', value: 'ethereal' },
          { title: 'Introspective', value: 'introspective' },
          { title: 'Euphoric', value: 'euphoric' },
          { title: 'Atmospheric', value: 'atmospheric' },
          { title: 'Intense', value: 'intense' },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Custom tags for search and discovery',
      options: {
        layout: 'tags',
      },
    },

    // Features & Metadata
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show in featured sections',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (optional)',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },

    // Sync/A&R Metadata (Future)
    {
      name: 'syncMetadata',
      title: 'Sync Metadata',
      type: 'object',
      description: 'For sync licensing use cases',
      fields: [
        {
          name: 'cleared',
          title: 'Cleared for Sync',
          type: 'boolean',
        },
        {
          name: 'tempo',
          title: 'BPM Range',
          type: 'string',
          description: 'e.g., "120-130 BPM"',
        },
        {
          name: 'instrumentalAvailable',
          title: 'Instrumentals Available',
          type: 'boolean',
        },
        {
          name: 'stems',
          title: 'Stems Available',
          type: 'boolean',
        },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    },

    // Health Monitoring
    {
      name: 'lastVerified',
      title: 'Last Verified',
      type: 'datetime',
      description: 'Last time embed was verified as working',
      readOnly: true,
    },
    {
      name: 'embedStatus',
      title: 'Embed Status',
      type: 'string',
      options: {
        list: [
          { title: '✓ Active', value: 'active' },
          { title: '✗ Broken', value: 'broken' },
          { title: '? Unverified', value: 'unverified' },
        ],
        layout: 'radio',
      },
      initialValue: 'unverified',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'platform',
      media: 'artwork',
      status: 'embedStatus',
    },
    prepare(selection: any) {
      const { title, subtitle, media, status } = selection;
      const statusEmoji = status === 'active' ? '✓' : status === 'broken' ? '✗' : '?';
      return {
        title,
        subtitle: `${statusEmoji} ${subtitle?.toUpperCase() || 'Unknown'}`,
        media,
      };
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        { field: 'order', direction: 'asc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
    {
      title: 'Recently Published',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
};
