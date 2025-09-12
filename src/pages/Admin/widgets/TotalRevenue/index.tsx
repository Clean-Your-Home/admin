import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const TotalRevenue = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Общая выручка</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>₽ 356,589</div>
        <p className='text-xs text-muted-foreground mt-1'>+12.5% с прошлого месяца</p>
      </CardContent>
    </Card>
  )
}
