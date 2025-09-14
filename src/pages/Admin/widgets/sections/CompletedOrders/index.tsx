import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { TypographyH3, TypographyP } from '@/shared/Typography'

export const CompletedOrders = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Выполнено заказов</CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyH3 className='text-2xl'>238</TypographyH3>
        <TypographyP className='text-muted-foreground mt-1'>+18.7% с прошлого месяца</TypographyP>
      </CardContent>
    </Card>
  )
}
