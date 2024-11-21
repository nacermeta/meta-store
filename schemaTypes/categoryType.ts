import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'object',
      title: 'Category Name',
      fields: [
        {
          name: 'en',
          type: 'string',
          title: 'English Name',
        },
        {
          name: 'ar',
          type: 'string',
          title: 'Arabic Name',
        },
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Category Slug',
      options: {
        source: 'name.en',
        maxLength: 96,
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/--+/g, '-')
            .trim(),
      },
    }),
  ],
});
