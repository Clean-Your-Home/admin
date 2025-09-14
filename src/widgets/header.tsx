import type React from 'react'

interface HeaderProps {
  title: string
  description: string
  children?: React.ReactNode
}

export const Header = ({ title, description, children }: HeaderProps) => {
  return (
    <header className='flex flex-col lg:flex-row justify-between items-start md:items-center mb-8 gap-4'>
      <div>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-muted-foreground'>{description}</p>
      </div>

      <div className='flex gap-4'>{children}</div>
    </header>
  )
}
