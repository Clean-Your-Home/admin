import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'

import {
  AllClients,
  AllOrders,
  CleaningTypes,
  CompletedOrders,
  LatestOrders,
  NewClients,
  OrderDynamics,
  RevenueByMonth,
  ServiceRating,
  TotalRevenue
} from '@/pages/Admin/widgets/sections'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Header } from '@/widgets/header'
import { ROUTES } from '@/api/routes'

export const AdminPage = () => {
  return (
    <div className='container py-12'>
      <Header
        title='Панель администратора'
        description='Управление заказами, клиентами и аналитика'
      >
        <Input
          type='search'
          placeholder='Поиск...'
          startIcon={<Search className='h-4 w-4' />}
          className='w-full md:w-[300px]'
        />
        <Button>Создать заказ</Button>
        <Button variant='outline'>
          <Link to={ROUTES.MODERATE}>Модерация контента</Link>
        </Button>
      </Header>

      <main>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8'>
          <TotalRevenue />
          <NewClients />
          <CompletedOrders />
          <ServiceRating />
        </div>

        <Tabs defaultValue='dashboard' className='w-full mb-8'>
          <TabsList className='grid w-full grid-cols-3 mb-6'>
            <TabsTrigger value='dashboard'>Дашборд</TabsTrigger>
            <TabsTrigger value='orders'>Заказы</TabsTrigger>
            <TabsTrigger value='clients'>Клиенты</TabsTrigger>
          </TabsList>

          <TabsContent value='dashboard' className='grid gap-6 md:grid-cols-2'>
            <OrderDynamics />
            <CleaningTypes />
            <LatestOrders />
            <RevenueByMonth />
          </TabsContent>

          <TabsContent value='orders'>
            <AllOrders />
          </TabsContent>

          <TabsContent value='clients'>
            <AllClients />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
