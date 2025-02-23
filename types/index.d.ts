declare module 'payload/types' {
  export interface CollectionConfig {
    slug: string
    admin?: {
      useAsTitle?: string
      defaultColumns?: string[]
      description?: string
    }
    access?: {
      read?: () => boolean
      create?: () => boolean
      update?: () => boolean
      delete?: () => boolean
    }
    fields: Array<{
      name: string
      type: string
      required?: boolean
      label?: string
      hasMany?: boolean
      options?: Array<{
        label: string
        value: string
      }>
      admin?: {
        description?: string
      }
      relationTo?: string
      defaultValue?: string | string[]
      editor?: any
    }>
    timestamps?: boolean
    upload?: {
      adminThumbnail?: string
      imageSizes?: Array<{
        name: string
        width: number
        height: number
      }>
    }
  }

  export interface Config {
    collections: {
      users: any
      pages: any
      menu: any
      media: any
    }
  }
}

declare module 'payload/config' {
  export interface InitOptions {
    local?: boolean
    secret?: string
    mongoURL?: string
    express?: any
  }

  export function buildConfig(config: any): any
}

declare module 'payload/generated-types' {
  export interface User {
    id: string
    email: string
    roles?: string[]
    createdAt: string
    updatedAt: string
  }
}

declare module '@payloadcms/richtext-lexical' {
  export function lexicalEditor(config: any): any
}

declare module '@payloadcms/bundler-webpack' {
  export function webpackBundler(config?: any): any
}

declare module '@payloadcms/db-mongodb' {
  export function mongooseAdapter(config: { url: string }): any
}