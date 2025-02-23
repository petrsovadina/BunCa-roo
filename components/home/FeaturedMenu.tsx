'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MenuItem } from '@/lib/utils'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function FeaturedMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('/api/menu')
        const data = await res.json()
        if (Array.isArray(data)) {
          setMenuItems(data)
        }
      } catch (error) {
        console.error('Chyba při načítání menu:', error)
      }
    }

    fetchMenu()
  }, [])

  return (
    <section className="py-24 bg-primary/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-serif font-bold tracking-tight text-primary sm:text-4xl">
            Naše speciality
          </h2>
          <p className="mt-4 text-lg text-primary/80">
            Objevte výběr z našeho menu, který si naši hosté oblíbili nejvíce
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {menuItems.map((menuItem) => (
            <motion.div
              key={menuItem.slug}
              variants={itemAnimation}
              transition={{ duration: 0.5 }}
            >
              <div className="group rounded-lg border border-primary/10 bg-cream shadow-sm transition-all hover:shadow-md overflow-hidden">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={menuItem.image}
                    alt={menuItem.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {menuItem.title}
                  </h3>
                  <p className="mt-2 text-primary/70">
                    {menuItem.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-primary/10 flex justify-between items-center">
                    <span className="text-lg font-medium text-primary">
                      {menuItem.price.toLocaleString()} Kč
                    </span>
                    <Button variant="secondary" size="sm">
                      Objednat
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            href="/menu"
            variant="secondary"
            size="lg"
            className="text-lg px-8"
          >
            Prohlédnout celé menu
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}