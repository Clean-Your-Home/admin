import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH3, TypographyP } from '@/shared/Typography'

export const NewClients = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Новые клиенты</CardTitle>
      </CardHeader>
      <CardContent>
        <TypographyH3 className='text-2xl '>+127</TypographyH3>
        <TypographyP className='text-muted-foreground mt-1'>+5.2% с прошлого месяца</TypographyP>
      </CardContent>
    </Card>
  )
}
