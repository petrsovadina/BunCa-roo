'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/placeholder-square.svg"
              alt="Restaurace Bún Cá"
              width={800}
              height={800}
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl">
              Vítejte v Bún Cá
            </h2>
            <div className="space-y-6 text-lg text-primary/80">
              <p>
                Naše rodinná restaurace přináší do Brna autentické chutě Vietnamu. Každé jídlo připravujeme s péčí podle tradičních receptů, které se v naší rodině dědí z generace na generaci.
              </p>
              <p>
                Specializujeme se na polévky Bún a další tradiční vietnamské pokrmy, které vám přinesou jedinečný gurmánský zážitek. Používáme pouze čerstvé suroviny a autentické koření přímo z Vietnamu.
              </p>
            </div>
            <div className="pt-4">
              <Button
                href="/o-nas"
                variant="secondary"
                size="lg"
                className="text-lg px-8"
              >
                Více o nás
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}