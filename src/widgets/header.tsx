import type React from 'react'

import { TypographyH2, TypographyP } from '@/shared/Typography'

interface HeaderProps {
  title: string
  description: string
  children?: React.ReactNode
}

export const Header = ({ title, description, children }: HeaderProps) => {
  return (
    <header className='flex flex-col lg:flex-row justify-between items-start md:items-center mb-8 gap-4'>
      <div>
        <TypographyH2 className='text-3xl font-bold'>{title}</TypographyH2>
        <TypographyP className='text-muted-foreground'>{description}</TypographyP>
      </div>

      <div className='flex gap-4'>{children}</div>
    </header>
  )
}
