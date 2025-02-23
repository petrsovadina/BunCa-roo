'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string
  image?: {
    src: string
    alt: string
  }
  title: string
  description?: string
  footer?: React.ReactNode
  children?: React.ReactNode
}

export function Card({
  className,
  href,
  image,
  title,
  description,
  footer,
  children,
  ...props
}: CardProps) {
  const CardContent = (
    <div
      className={cn(
        'group rounded-lg border border-primary/10 bg-cream shadow-sm transition-all hover:shadow-md',
        href && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-primary">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-primary/70">
            {description}
          </p>
        )}
        {children}
        {footer && (
          <div className="mt-4 pt-4 border-t border-primary/10">
            {footer}
          </div>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}