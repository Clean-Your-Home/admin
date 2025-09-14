import { CheckCircle, XCircle } from 'lucide-react'

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

import type { Comment, ModerationItem } from '@/@types'

interface CommentsSectionProps {
  filteredComments: Comment[]
  handleViewItem: (item: Comment) => void
  handleApproveItem: (id: number, type: ModerationItem) => void
  handleRejectItem: (id: number, type: ModerationItem) => void
}

export const CommentsSection = ({
  filteredComments,
  handleViewItem,
  handleApproveItem,
  handleRejectItem
}: CommentsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Комментарии на модерации</CardTitle>
        <CardDescription>
          Проверьте и одобрите или отклоните комментарии пользователей
        </CardDescription>
      </CardHeader>
      <CardContent>
        {filteredComments.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Автор</TableHead>
                <TableHead>Комментарий</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredComments.map(comment => (
                <TableRow key={comment.id}>
                  <TableCell className='font-medium'>{comment.author}</TableCell>
                  <TableCell className='max-w-xs truncate'>{comment.text}</TableCell>
                  <TableCell>{comment.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        comment.status === 'approved'
                          ? 'default'
                          : comment.status === 'rejected'
                            ? 'destructive'
                            : 'outline'
                      }
                    >
                      {comment.status === 'approved' && 'Одобрен'}
                      {comment.status === 'rejected' && 'Отклонен'}
                      {comment.status === 'pending' && 'На модерации'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-2'>
                      <Button variant='outline' size='sm' onClick={() => handleViewItem(comment)}>
                        Просмотр
                      </Button>
                      {comment.status === 'pending' && (
                        <>
                          <Button
                            variant='default'
                            size='sm'
                            onClick={() => handleApproveItem(comment.id, 'comment')}
                          >
                            <CheckCircle className='mr-1 h-4 w-4' />
                            Одобрить
                          </Button>
                          <Button
                            variant='destructive'
                            size='sm'
                            onClick={() => handleRejectItem(comment.id, 'comment')}
                          >
                            <XCircle className='mr-1 h-4 w-4' />
                            Отклонить
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
            <p className='text-muted-foreground'>Нет комментариев для модерации</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
