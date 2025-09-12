import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/shared/Button'
import { Input } from '@/shared/Input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/shared/Badge'
import { recentOrders } from '../mock'

export const AllOrders = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Все заказы</CardTitle>
        <CardDescription>Управление и мониторинг всех заказов</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
          <div className='flex gap-4'>
            <Button variant='outline'>Фильтр</Button>
            <Button variant='outline'>Экспорт</Button>
            <Button variant='outline'>Печать</Button>
          </div>
          <div>
            <Input
              type='search'
              placeholder='Поиск по заказам...'
              className='w-full md:w-[300px]'
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Дата</TableHead>
              <TableHead>Услуга</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Адрес</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell className='font-medium'>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.service}</TableCell>
                <TableCell>{order.client}</TableCell>
                <TableCell>{order.address}</TableCell>
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
                <TableCell>
                  <div className='flex gap-2'>
                    <Button variant='outline' size='sm'>
                      Просмотр
                    </Button>
                    <Button variant='outline' size='sm'>
                      Изменить
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className='flex items-center justify-between mt-6'>
          <div className='text-sm text-muted-foreground'>Показано 4 из 25 заказов</div>
          <div className='flex gap-2'>
            <Button variant='outline' size='sm' disabled>
              Предыдущая
            </Button>
            <Button variant='outline' size='sm'>
              1
            </Button>
            <Button variant='outline' size='sm'>
              2
            </Button>
            <Button variant='outline' size='sm'>
              3
            </Button>
            <Button variant='outline' size='sm'>
              Следующая
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
