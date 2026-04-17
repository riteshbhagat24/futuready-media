import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'career',
  title: 'Careers',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Job Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (r) => r.required() }),
    defineField({
      name: 'department', title: 'Department', type: 'string',
      options: { list: ['Engineering', 'Design', 'Marketing', 'Content', 'Business Development', 'SEO'] },
    }),
    defineField({ name: 'type', title: 'Job Type', type: 'string', options: { list: ['Full-time', 'Internship', 'Contract'] } }),
    defineField({ name: 'location', title: 'Location', type: 'string', initialValue: 'Mumbai' }),
    defineField({ name: 'description', title: 'Job Description', type: 'text', rows: 4 }),
    defineField({ name: 'requirements', title: 'Requirements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'active', title: 'Currently Hiring', type: 'boolean', initialValue: true }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'department' },
  },
});
