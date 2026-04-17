import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'pageId', title: 'Page Identifier', type: 'string',
      options: { list: ['home', 'about', 'contact', 'work', 'ideas', 'careers'] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 3 }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
    defineField({
      name: 'sections', title: 'Content Sections', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Section Label', type: 'string' },
          { name: 'heading', title: 'Section Heading', type: 'string' },
          { name: 'body', title: 'Section Body', type: 'array', of: [{ type: 'block' }] },
        ],
      }],
    }),
    defineField({ name: 'testimonialQuote', title: 'Testimonial Quote', type: 'text' }),
    defineField({ name: 'testimonialName', title: 'Testimonial Author', type: 'string' }),
    defineField({ name: 'testimonialRole', title: 'Testimonial Role', type: 'string' }),
  ],
  preview: { select: { title: 'title', subtitle: 'pageId' } },
});
