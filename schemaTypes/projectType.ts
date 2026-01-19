import {defineField, defineType} from 'sanity'

// https://www.sanity.io/docs/schema-types

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlight',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
    }),

    defineField({
      name: 'websiteURL',
      type: 'string',
    }),
    defineField({
      name: 'sourceURL',
      type: 'string',
    }),
    defineField({
      name: 'projectDetail',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'videos',
      type: 'array',
      of: [{type: 'file'}],
    }),
  ],
})
