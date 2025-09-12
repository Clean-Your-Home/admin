import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Chart } from '@/shared/Chart'

export const RevenueByMonth = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Выручка по месяцам</CardTitle>
        <CardDescription>Динамика выручки за последние 6 месяцев</CardDescription>
      </CardHeader>
      <CardContent>
        <Chart type='bar' data={[240000, 260000, 280000, 310000, 340000, 350000]} />
        <div className='flex justify-between text-xs text-muted-foreground mt-2'>
          <span>Ноябрь</span>
          <span>Декабрь</span>
          <span>Январь</span>
          <span>Февраль</span>
          <span>Март</span>
          <span>Апрель</span>
        </div>
      </CardContent>
    </Card>
  )
}
