import { AlertTriangle, MessageSquare, Star } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import type { Comment, Report, Review } from '@/@types'

interface ModerationStatsProps {
  reviews: Review[]
  comments: Comment[]
  reports: Report[]
}

export const ModerationStatsSection = ({ reviews, comments, reports }: ModerationStatsProps) => {
  return (
    <Card>
      <CardHeader className='pb-3'>
        <CardTitle>Статистика модерации</CardTitle>
        <CardDescription>Обзор контента, требующего модерации</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary'>
              <Star className='h-6 w-6' />
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Отзывы на модерации</p>
              <p className='text-2xl font-bold'>
                {reviews.filter(r => r.status === 'pending').length}
              </p>
              +
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary'>
              <MessageSquare className='h-6 w-6' />
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Комментарии на модерации</p>
              <p className='text-2xl font-bold'>
                {comments.filter(c => c.status === 'pending').length}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary'>
              <AlertTriangle className='h-6 w-6' />
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Жалобы на рассмотрении</p>
              <p className='text-2xl font-bold'>
                {reports.filter(r => r.status === 'pending').length}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
