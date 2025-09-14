import { Button } from '@/shared/Button'
import { Input } from '@/shared/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { recentClients } from '../../../mock'

export const AllClients = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Все клиенты</CardTitle>
        <CardDescription>Управление клиентской базой</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
          <div className='flex gap-4'>
            <Button variant='outline'>Фильтр</Button>
            <Button variant='outline'>Экспорт</Button>
          </div>
          <div>
            <Input
              type='search'
              placeholder='Поиск по клиентам...'
              className='w-full md:w-[300px]'
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Имя</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Телефон</TableHead>
              <TableHead>Заказов</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Последний заказ</TableHead>
              <TableHead>Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentClients.map(client => (
              <TableRow key={client.id}>
                <TableCell className='font-medium'>{client.id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.orders}</TableCell>
                <TableCell>{client.totalSpent}</TableCell>
                <TableCell>{client.lastOrder}</TableCell>
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
          <div className='text-sm text-muted-foreground'>Показано 4 из 18 клиентов</div>
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
              Следующая
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
