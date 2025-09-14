import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH3, TypographyP } from '@/shared/Typography'

export const TotalRevenue = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Общая выручка</CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyH3 className='text-2xl '>₽ 356,589</TypographyH3>
        <TypographyP className='text-muted-foreground mt-1'>+12.5% с прошлого месяца</TypographyP>
      </CardContent>
    </Card>
  )
}
