// Collection Schema for Sanity

export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
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
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'playlists',
      title: 'Playlists',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'playlist' }],
        },
      ],
      description: 'Drag to reorder playlists in this collection',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],

  preview: {
    select: {
      title: 'title',
      playlistCount: 'playlists.length',
      featured: 'featured',
    },
    prepare(selection: any) {
      const { title, playlistCount = 0, featured } = selection;
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: `${playlistCount} playlist${playlistCount !== 1 ? 's' : ''}`,
      };
    },
  },

  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
