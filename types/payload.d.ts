declare module 'payload/types' {
  export interface CollectionConfig {
    slug: string
    admin?: {
      useAsTitle?: string
      defaultColumns?: string[]
      description?: string
      group?: string
    }
    access?: {
      read?: () => boolean | Promise<boolean>
      create?: () => boolean | Promise<boolean>
      update?: () => boolean | Promise<boolean>
      delete?: () => boolean | Promise<boolean>
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
        position?: string
      }
      relationTo?: string | string[]
      defaultValue?: any
      editor?: any
      validate?: (value: any) => boolean | string | Promise<boolean | string>
    }>
    timestamps?: boolean
    upload?: {
      adminThumbnail?: string
      imageSizes?: Array<{
        name: string
        width: number
        height: number
      }>
      mimeTypes?: string[]
      staticURL?: string
      staticDir?: string
    }
  }
}

declare module 'payload/config' {
  export interface PayloadConfig {
    serverURL: string
    secret: string
    admin: {
      user: string
      bundler: any
      meta?: {
        titleSuffix?: string
        favicon?: string
      }
    }
    collections: any[]
    editor: any
    typescript: {
      outputFile: string
    }
    db: any
    cors?: string[]
    csrf?: string[]
  }

  export interface InitOptions {
    config?: {
      local?: boolean
      express?: any
    }
  }

  export function buildConfig(config: PayloadConfig): any
}

declare module 'payload' {
  import { InitOptions } from 'payload/config'
  
  interface Payload {
    init(options?: InitOptions): Promise<any>
    find(args: {
      collection: string
      where?: any
      depth?: number
    }): Promise<{
      docs: any[]
      totalDocs: number
      totalPages: number
      page: number
      hasNextPage: boolean
      hasPrevPage: boolean
    }>
    create(args: {
      collection: string
      data: any
    }): Promise<any>
    update(args: {
      collection: string
      id: string
      data: any
    }): Promise<any>
    delete(args: {
      collection: string
      id: string
    }): Promise<any>
  }

  const payload: Payload
  export default payload
}

declare module '@payloadcms/richtext-lexical' {
  export function lexicalEditor(config?: any): any
}

declare module '@payloadcms/bundler-webpack' {
  export function webpackBundler(config?: any): any
}

declare module '@payloadcms/db-mongodb' {
  export function mongooseAdapter(config: { url: string }): any
}