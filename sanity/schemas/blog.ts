import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog / Ideas',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 200 }, validation: (r) => r.required() }),
    defineField({ name: 'date', title: 'Publish Date', type: 'date' }),
    defineField({
      name: 'category', title: 'Category', type: 'string',
      options: {
        list: [
          'Web Design', 'Web Development', 'Website Development', 'Digital Marketing',
          'Branding', 'SEO', 'Content', 'Lead Generation', 'Digital Strategy',
        ],
      },
    }),
    defineField({ name: 'image', title: 'Featured Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Excerpt / Meta Description', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Article Body', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'author', title: 'Author', type: 'string', initialValue: 'Futuready Media' }),
  ],
  orderings: [{ title: 'Date Desc', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
});
