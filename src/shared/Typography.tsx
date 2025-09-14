import type React from 'react'

import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

const TypographyH1 = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={cn(
        'text-5xl md:text-6xl font-playfair font-light text-stone-800 leading-tight',
        className
      )}
    >
      {children}
    </h1>
  )
}

const TypographyH2 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn('text-3xl font-bold tracking-tight sm:text-4xl', className)}>{children}</h2>
  )
}

const TypographyH3 = ({ children, className }: TypographyProps) => {
  return <h3 className={cn('text-xl font-bold', className)}>{children}</h3>
}

const TypographyP = ({ children, className }: TypographyProps) => {
  return <p className={cn('text-xs font-medium', className)}>{children}</p>
}

export { TypographyH1, TypographyH2, TypographyH3, TypographyP }
