import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({ name: 'client', title: 'Client Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'client', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'description', title: 'Overview', type: 'text', rows: 4 }),
    defineField({
      name: 'metrics', title: 'Key Metrics', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'val', title: 'Value', type: 'string' },
          { name: 'unit', title: 'Unit', type: 'string' },
          { name: 'key', title: 'Label', type: 'string' },
        ],
      }],
    }),
    defineField({
      name: 'steps', title: 'Strategy / Process Steps', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Step Title', type: 'string' },
          { name: 'desc', title: 'Step Description', type: 'text' },
        ],
      }],
    }),
    defineField({ name: 'body', title: 'Full Content', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'testimonialQuote', title: 'Client Testimonial', type: 'text' }),
    defineField({ name: 'testimonialName', title: 'Testimonial Author', type: 'string' }),
    defineField({ name: 'testimonialRole', title: 'Testimonial Role', type: 'string' }),
  ],
  preview: {
    select: { title: 'client', subtitle: 'industry', media: 'image' },
  },
});
