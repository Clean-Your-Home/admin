import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Chart } from './chart'
export const OrderDynamics = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Динамика заказов</CardTitle>
        <CardDescription>Количество заказов по дням за последние 7 дней</CardDescription>
      </CardHeader>
      <CardContent>
        <Chart type='bar' data={[15, 23, 18, 25, 30, 28, 32]} />
        <div className='flex justify-between text-xs text-muted-foreground mt-2'>
          <span>14 апр</span>
          <span>15 апр</span>
          <span>16 апр</span>
          <span>17 апр</span>
          <span>18 апр</span>
          <span>19 апр</span>
          <span>20 апр</span>
        </div>
      </CardContent>
    </Card>
  )
}
