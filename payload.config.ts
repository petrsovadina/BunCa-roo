import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from 'path'
import express from 'express'
import { Users } from './app/(payload)/collections/Users'
import { Pages } from './app/(payload)/collections/Pages'
import type { CollectionConfig } from 'payload/types'

const app = express()

const Menu: CollectionConfig = {
  slug: 'menu',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Název',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Popis',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Cena',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Kategorie',
      options: [
        { label: 'Předkrmy', value: 'Předkrmy' },
        { label: 'Polévky', value: 'Polévky' },
        { label: 'Hlavní jídla', value: 'Hlavní jídla' },
        { label: 'Vegetariánské', value: 'Vegetariánské' },
        { label: 'Dezerty', value: 'Dezerty' },
        { label: 'Nápoje', value: 'Nápoje' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Obrázek',
    },
    {
      name: 'allergens',
      type: 'select',
      hasMany: true,
      label: 'Alergeny',
      options: [
        { label: '1 - Lepek', value: '1 - Lepek' },
        { label: '2 - Korýši', value: '2 - Korýši' },
        { label: '3 - Vejce', value: '3 - Vejce' },
        { label: '4 - Ryby', value: '4 - Ryby' },
        { label: '5 - Arašídy', value: '5 - Arašídy' },
        { label: '6 - Sója', value: '6 - Sója' },
        { label: '7 - Mléko', value: '7 - Mléko' },
        { label: '8 - Skořápkové plody', value: '8 - Skořápkové plody' },
        { label: '9 - Celer', value: '9 - Celer' },
        { label: '10 - Hořčice', value: '10 - Hořčice' },
        { label: '11 - Sezam', value: '11 - Sezam' },
        { label: '12 - Oxid siřičitý', value: '12 - Oxid siřičitý' },
        { label: '13 - Vlčí bob', value: '13 - Vlčí bob' },
        { label: '14 - Měkkýši', value: '14 - Měkkýši' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'published',
      options: [
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Draft',
          value: 'draft',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Obsah',
    },
  ],
}

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
      },
      {
        name: 'card',
        width: 768,
        height: 768,
      },
    ],
  },
  fields: [],
}

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key',
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- BunCá-roo Admin',
      favicon: '/favicon.svg',
    },
  },
  express: app,
  editor: lexicalEditor({}),
  collections: [Users, Pages, Menu, Media],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || 'mongodb://localhost/buncaroo',
  }),
  cors: ['http://localhost:3000'],
  csrf: ['http://localhost:3000'],
})