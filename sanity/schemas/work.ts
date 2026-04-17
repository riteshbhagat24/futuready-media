import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'work',
  title: 'Work / Portfolio',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'client', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: {
        list: [
          'Stockbroking', 'Private Equity', 'Entertainment', 'Power Utility',
          'Pharma', 'BFSI', 'Logistics', 'Philanthropy', 'Consumer Durables',
          'Conglomerate', 'Insurance', 'Beauty', 'Novelty', 'Payments',
          'QSR', 'Manufacturing', 'Oil & Gas', 'Agribusiness', 'Interior Design',
        ],
      },
    }),
    defineField({ name: 'image', title: 'Thumbnail Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({
      name: 'services', title: 'Services Provided', type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'results', title: 'Results / Metrics', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'val', title: 'Value', type: 'string' },
          { name: 'key', title: 'Label', type: 'string' },
        ],
      }],
    }),
    defineField({ name: 'featured', title: 'Featured on Homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'client', subtitle: 'category', media: 'image' },
  },
});
