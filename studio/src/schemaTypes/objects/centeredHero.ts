import { defineField, defineType } from 'sanity'
import {PresentationIcon} from '@sanity/icons'


/**
 * Page builder block that exposes the existing CenteredHero UI component
 * through Sanity, allowing editors to manage its content without code changes.
 */


export const centeredHero = defineType({
  name: 'centeredHero',
  title: 'Hero section',
  type: 'object',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'theme',
    }),
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eyebrow',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled Hero Section',
        subtitle: subtitle || 'Hero Section',
      }
    },
  },
})
