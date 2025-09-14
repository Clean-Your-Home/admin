import { Badge } from '@/shared/Badge'
import { Button } from '@/shared/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { recentOrders } from '../../../mock'

export const LatestOrders = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние заказы</CardTitle>
        <CardDescription>Информация о последних заказах</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Сумма</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell className='font-medium'>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === 'Выполнен'
                        ? 'default'
                        : order.status === 'В процессе'
                          ? 'secondary'
                          : 'outline'
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className='mt-4 text-center'>
          <Button variant='outline'>Смотреть все заказы</Button>
        </div>
      </CardContent>
    </Card>
  )
}
