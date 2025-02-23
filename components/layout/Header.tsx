'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Objednávka', href: '/objednavka' },
  { name: 'O nás', href: '/o-nas' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-cream border-b border-primary/10">
      <Container as="nav" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="font-serif text-2xl text-primary">
              Bún Cá
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/objednavka" variant="default" className="ml-4">
              Objednat online
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Otevřít menu</span>
              {!isMobileMenuOpen ? (
                <Menu className="h-6 w-6" />
              ) : (
                <X className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-primary hover:bg-primary/5 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  href="/objednavka"
                  variant="default"
                  className="w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Objednat online
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}