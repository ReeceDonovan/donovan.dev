import { defineField, defineType } from 'sanity';

/* 
title: string;
url: url;
*/

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of social media platform',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Url',
      description: 'Url to social media account',
      type: 'url',
    }),
  ],
});
