import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const ServiceRating = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Рейтинг сервиса</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>4.8/5</div>
        <p className='text-xs text-muted-foreground mt-1'>На основе 156 отзывов</p>
      </CardContent>
    </Card>
  )
}
