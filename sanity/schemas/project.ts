import { defineField, defineType } from 'sanity';

/* 
title: string;
image: image;
summary: text;
technologies: array;
linkToProject: url;
*/

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
    }),
    defineField({
      name: 'linkToProject',
      title: 'LinkToProject',
      type: 'url',
    }),
  ],
});
