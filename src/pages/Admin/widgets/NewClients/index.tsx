import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const NewClients = () => {
  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-sm font-medium'>Новые клиенты</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>+127</div>
        <p className='text-xs text-muted-foreground mt-1'>+5.2% с прошлого месяца</p>
      </CardContent>
    </Card>
  )
}
