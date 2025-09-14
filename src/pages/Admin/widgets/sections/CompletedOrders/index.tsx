import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const CompletedOrders = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Выполнено заказов</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>238</div>
        <p className='text-xs text-muted-foreground mt-1'>+18.7% с прошлого месяца</p>
      </CardContent>
    </Card>
  )
}
