/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { sanityApiVersion, sanityDataset, sanityProjectId } from './sanity/env';
import { schema } from './sanity/schema';

export default defineConfig({
  basePath: '/studio',
  projectId: sanityProjectId,
  dataset: sanityDataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: sanityApiVersion }),
  ],
});
