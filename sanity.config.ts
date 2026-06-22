// Sanity Studio Configuration

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemaTypes from './lib/sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Pusher Music Platform',

  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Configuration (singleton)
            S.listItem()
              .title('Site Configuration')
              .id('siteConfig')
              .child(
                S.document()
                  .schemaType('siteConfig')
                  .documentId('siteConfig')
              ),

            S.divider(),

            // Playlists
            S.listItem()
              .title('Playlists')
              .schemaType('playlist')
              .child(S.documentTypeList('playlist').title('Playlists')),

            // Collections
            S.listItem()
              .title('Collections')
              .schemaType('collection')
              .child(S.documentTypeList('collection').title('Collections')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
