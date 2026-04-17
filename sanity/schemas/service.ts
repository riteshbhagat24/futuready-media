import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'titleBlue', title: 'Title Blue Part (with period)', type: 'string' }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDesc', title: 'Meta Description', type: 'text', rows: 2 }),
    defineField({ name: 'heroDesc', title: 'Hero Description', type: 'text', rows: 3 }),
    defineField({
      name: 'stats', title: 'Hero Stats', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'val', title: 'Value', type: 'string' }, { name: 'key', title: 'Label', type: 'string' }] }],
    }),
    defineField({ name: 'badges', title: 'Platform Badges', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } }),
    defineField({ name: 'approachTitle', title: 'Approach Section Title', type: 'string' }),
    defineField({ name: 'approachDesc', title: 'Approach Paragraphs', type: 'array', of: [{ type: 'text' }] }),
    defineField({ name: 'industries', title: 'Industries Served', type: 'string' }),
    defineField({ name: 'engagement', title: 'Engagement Model', type: 'string' }),
    defineField({
      name: 'steps', title: 'Process Steps', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'num', title: 'Step Number', type: 'string' },
          { name: 'title', title: 'Title', type: 'string' },
          { name: 'desc', title: 'Description', type: 'text' },
        ],
      }],
    }),
    defineField({
      name: 'faqs', title: 'FAQs', type: 'array',
      of: [{ type: 'object', fields: [{ name: 'q', title: 'Question', type: 'string' }, { name: 'a', title: 'Answer', type: 'text' }] }],
    }),
    defineField({ name: 'ctaHeadline', title: 'CTA Headline', type: 'string' }),
    defineField({ name: 'ctaEm', title: 'CTA Emphasis Word', type: 'string' }),
    defineField({ name: 'order', title: 'Sort Order', type: 'number' }),
  ],
  orderings: [{ title: 'Sort Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'industries' } },
});
