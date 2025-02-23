'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Facebook, Instagram } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Domů', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Objednávka', href: '/objednavka' },
    { name: 'O nás', href: '/o-nas' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Ochrana osobních údajů', href: '/ochrana-osobnich-udaju' },
    { name: 'Obchodní podmínky', href: '/obchodni-podminky' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-12 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-serif text-cream">
              Bún Cá
            </Link>
            <p className="text-sm text-cream/70">
              Autentická vietnamská restaurace v srdci Brna. Ochutnejte tradiční vietnamské speciality a zažijte jedinečnou atmosféru Vietnamu.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cream/70 hover:text-cream"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-cream">Menu</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-cream/70 hover:text-cream"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-cream">Právní informace</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-cream/70 hover:text-cream"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/10 pt-8">
          <p className="text-sm text-cream/70 text-center">
            &copy; {new Date().getFullYear()} Bún Cá. Všechna práva vyhrazena.
          </p>
        </div>
      </Container>
    </footer>
  )
}