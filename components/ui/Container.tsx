import { cn } from '@/lib/utils'

type ContainerElement = 'div' | 'section' | 'article' | 'main' | 'footer' | 'header' | 'nav'

interface ContainerProps {
  className?: string
  as?: ContainerElement
  children: React.ReactNode
}

export function Container({
  className,
  as: Component = 'div',
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}