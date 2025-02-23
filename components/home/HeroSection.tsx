'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/placeholder-hero.svg"
            alt="Vietnamské jídlo"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* Gradient overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-[1]" />

      {/* Content */}
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-cream">
              Bún Cá Brno
            </h1>
            <p className="mt-8 text-xl md:text-2xl leading-relaxed text-cream/90 font-light">
              Autentická vietnamská kuchyně v srdci Brna. Ochutnejte tradiční speciality připravované s láskou a podle originálních receptur.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                href="/objednavka"
                variant="default"
                size="lg"
                className="w-full sm:w-auto text-lg px-8"
              >
                Objednat online
              </Button>
              <Button
                href="/menu"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg px-8 text-cream border-cream hover:bg-cream hover:text-primary"
              >
                Prohlédnout menu
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}