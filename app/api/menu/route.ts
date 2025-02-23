import { MenuItem } from '@/lib/utils'
import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

async function getMenuItems(): Promise<MenuItem[]> {
  const menuDirectory = path.join(process.cwd(), 'outstatic/content/menu')
  const fileNames = await fs.readdir(menuDirectory)
  
  const menuItemsPromises = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(async (fileName) => {
      const filePath = path.join(menuDirectory, fileName)
      const fileContent = await fs.readFile(filePath, 'utf8')
      
      // Parsování frontmatter pomocí jednoduchého regex
      const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
      if (!frontmatterMatch) return null

      const [, frontmatter, content] = frontmatterMatch
      const data: any = {}
      
      // Parsování jednotlivých polí z frontmatter
      frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':')
        if (key && valueParts.length > 0) {
          let value = valueParts.join(':').trim()
          // Zpracování polí typu array
          if (value.startsWith('- ')) {
            const arrayValue = value.split('\n')
              .filter(item => item.trim().startsWith('- '))
              .map(item => item.replace('- ', '').trim())
            data[key.trim()] = arrayValue
            return
          }
          // Odstranění uvozovek z hodnot
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1)
          }
          data[key.trim()] = value
        }
      })

      return {
        slug: fileName.replace('.md', ''),
        title: data.title || '',
        description: data.description || '',
        price: Number(data.price) || 0,
        category: data.category || '',
        image: data.image || '',
        allergens: Array.isArray(data.allergens) ? data.allergens : [],
        content: content.trim()
      }
    })

  const menuItems = await Promise.all(menuItemsPromises)
  return menuItems.filter((item): item is MenuItem => item !== null)
}

export async function GET() {
  try {
    const menuItems = await getMenuItems()
    return NextResponse.json(menuItems)
  } catch (error) {
    console.error('Chyba při načítání menu:', error)
    return NextResponse.json(
      { error: 'Nepodařilo se načíst menu' },
      { status: 500 }
    )
  }
}