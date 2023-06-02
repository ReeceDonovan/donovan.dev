import { defineField, defineType } from 'sanity';

/* 
title: string;
progress: number;
image: image;
*/

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of skill',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      description: 'Progress of skill (0-100)',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
