import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { CircleChart } from './chart'

export const CleaningTypes = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Типы уборок</CardTitle>
        <CardDescription>Распределение заказов по типам услуг</CardDescription>
      </CardHeader>
      <CardContent className='grid grid-cols-2 gap-4'>
        <CircleChart percentage={45} />
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2'>
            <div className='h-4 w-4 rounded-full bg-primary/90'></div>
            <span className='text-sm'>Генеральная уборка (45%)</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-4 w-4 rounded-full bg-primary/70'></div>
            <span className='text-sm'>Поддерживающая уборка (25%)</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-4 w-4 rounded-full bg-primary/50'></div>
            <span className='text-sm'>Мойка окон (15%)</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-4 w-4 rounded-full bg-primary/30'></div>
            <span className='text-sm'>Химчистка (10%)</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='h-4 w-4 rounded-full bg-primary/20'></div>
            <span className='text-sm'>Другое (5%)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
