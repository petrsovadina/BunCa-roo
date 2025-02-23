import type { Metadata } from 'next'
import { Open_Sans, Playfair_Display } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-open-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bunca.cz'),
  title: 'Bún Cá Brno - Autentická vietnamská kuchyně',
  description: 'Autentická vietnamská restaurace v srdci Brna. Ochutnejte tradiční vietnamské speciality a zažijte jedinečnou atmosféru Vietnamu.',
  icons: {
    icon: '/favicon.svg',
  },
  keywords: [
    'vietnamská restaurace',
    'Brno',
    'Bún Cá',
    'vietnamská kuchyně',
    'asijská restaurace',
    'polévky',
    'vietnamské speciality',
  ],
  authors: [{ name: 'Bún Cá Brno' }],
  openGraph: {
    title: 'Bún Cá Brno - Autentická vietnamská kuchyně',
    description: 'Autentická vietnamská restaurace v srdci Brna. Ochutnejte tradiční vietnamské speciality a zažijte jedinečnou atmosféru Vietnamu.',
    url: 'https://bunca.cz',
    siteName: 'Bún Cá Brno',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${openSans.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream font-sans flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}