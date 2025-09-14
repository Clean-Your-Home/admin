import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH3, TypographyP } from '@/shared/Typography'

export const ServiceRating = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Рейтинг сервиса</CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyH3 className='text-2xl'>4.8/5</TypographyH3>
        <TypographyP className='text-muted-foreground mt-1'>На основе 156 отзывов</TypographyP>
      </CardContent>
    </Card>
  )
}
