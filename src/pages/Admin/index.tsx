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
} from '@/pages/Admin/widgets'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GlassSvg } from './assets/glass'

export const AdminPage = () => {
  return (
    <div className='container py-12'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4'>
        <div>
          <h1 className='text-3xl font-bold'>Панель администратора</h1>
          <p className='text-muted-foreground'>Управление заказами, клиентами и аналитика</p>
        </div>
        <div className='flex gap-4'>
          <div className='relative'>
            <GlassSvg />
            <Input type='search' placeholder='Поиск...' className='w-full md:w-[300px] pl-10' />
          </div>
          <Button>Создать заказ</Button>
          <Button variant='outline'>Модерация контента</Button>
        </div>
      </div>

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
    </div>
  )
}
