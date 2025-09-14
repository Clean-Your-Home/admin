import { cn } from '@/lib/utils'
import { CheckCircle, MessageSquare, Star, XCircle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import type { Review, ModerationItem } from '@/@types'

interface ReviewProps {
  filteredReviews: Review[]
  handleViewItem: (item: Review) => void
  handleApproveItem: (id: number, type: ModerationItem) => void
  handleRejectItem: (id: number, type: ModerationItem) => void
  handleReplyToReview: (review: Review) => void
}

export const ReviewsSection = ({
  filteredReviews,
  handleViewItem,
  handleApproveItem,
  handleRejectItem,
  handleReplyToReview
}: ReviewProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Отзывы на модерации</CardTitle>
        <CardDescription>Проверьте и одобрите или отклоните отзывы пользователей</CardDescription>
      </CardHeader>
      <CardContent>
        {filteredReviews.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Автор</TableHead>
                <TableHead>Рейтинг</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Услуга</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.map(review => (
                <TableRow key={review.id}>
                  <TableCell className='font-medium'>{review.name}</TableCell>
                  <TableCell>
                    <div className='flex'>
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          className={cn(
                            'h-4 w-4',
                            star <= review.rating
                              ? 'fill-primary text-primary'
                              : 'fill-muted text-muted-foreground'
                          )}
                        />
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{review.date}</TableCell>
                  <TableCell>{review.service}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        review.status === 'approved'
                          ? 'default'
                          : review.status === 'rejected'
                            ? 'destructive'
                            : 'outline'
                      }
                    >
                      {review.status === 'approved' && 'Одобрен'}
                      {review.status === 'rejected' && 'Отклонен'}
                      {review.status === 'pending' && 'На модерации'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-2'>
                      <Button variant='outline' size='sm' onClick={() => handleViewItem(review)}>
                        Просмотр
                      </Button>
                      {review.status === 'pending' && (
                        <>
                          <Button
                            variant='default'
                            size='sm'
                            onClick={() => handleApproveItem(review.id, 'review')}
                          >
                            <CheckCircle className='mr-1 h-4 w-4' />
                            Одобрить
                          </Button>
                          <Button
                            variant='destructive'
                            size='sm'
                            onClick={() => handleRejectItem(review.id, 'review')}
                          >
                            <XCircle className='mr-1 h-4 w-4' />
                            Отклонить
                          </Button>
                          <Button
                            variant='outline'
                            size='sm'
                            onClick={() => handleReplyToReview(review)}
                          >
                            <MessageSquare className='mr-1 h-4 w-4' />
                            Ответить
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className='text-center py-12'>
            <p className='text-muted-foreground'>Нет отзывов для модерации</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
