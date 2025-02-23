import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface MenuItem {
  slug: string
  title: string
  description: string
  price: number
  category: string
  image: string
  allergens: string[]
  content: string
}