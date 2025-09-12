export const recentOrders = [
  {
    id: 'ORD-004',
    date: '20.04.2023',
    service: 'Генеральная уборка',
    client: 'Петров А.С.',
    address: 'г. Москва, ул. Ленина, д. 15, кв. 89',
    status: 'Ожидает',
    amount: '5500 ₽'
  },
  {
    id: 'ORD-003',
    date: '19.04.2023',
    service: 'Мойка окон',
    client: 'Сидорова М.В.',
    address: 'г. Москва, пр. Мира, д. 100, кв. 42',
    status: 'В процессе',
    amount: '2000 ₽'
  },
  {
    id: 'ORD-002',
    date: '18.04.2023',
    service: 'Поддерживающая уборка',
    client: 'Иванов И.И.',
    address: 'г. Москва, ул. Садовая, д. 5, кв. 12',
    status: 'Выполнен',
    amount: '3000 ₽'
  },
  {
    id: 'ORD-001',
    date: '17.04.2023',
    service: 'Химчистка дивана',
    client: 'Козлова Е.А.',
    address: 'г. Москва, ул. Арбат, д. 44, кв. 15',
    status: 'Выполнен',
    amount: '4500 ₽'
  }
]

export const recentClients = [
  {
    id: 'CL-001',
    name: 'Иванов Иван',
    email: 'ivanov@example.com',
    phone: '+7 (999) 123-45-67',
    orders: 5,
    totalSpent: '22500 ₽',
    lastOrder: '17.04.2023'
  },
  {
    id: 'CL-002',
    name: 'Петрова Анна',
    email: 'petrova@example.com',
    phone: '+7 (999) 234-56-78',
    orders: 3,
    totalSpent: '15000 ₽',
    lastOrder: '15.04.2023'
  },
  {
    id: 'CL-003',
    name: 'Сидоров Максим',
    email: 'sidorov@example.com',
    phone: '+7 (999) 345-67-89',
    orders: 7,
    totalSpent: '35000 ₽',
    lastOrder: '18.04.2023'
  },
  {
    id: 'CL-004',
    name: 'Козлова Елена',
    email: 'kozlova@example.com',
    phone: '+7 (999) 456-78-90',
    orders: 2,
    totalSpent: '8000 ₽',
    lastOrder: '10.04.2023'
  }
]
