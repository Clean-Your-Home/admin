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

import type { ModerationItem, Report } from '@/@types'

interface ReportsSectionProps {
  filteredReports: Report[]
  handleViewItem: (item: Report) => void
  handleApproveItem: (id: number, type: ModerationItem) => void
  handleRejectItem: (id: number, type: ModerationItem) => void
}

export const ReportsSection = ({
  filteredReports,
  handleViewItem,
  handleApproveItem,
  handleRejectItem
}: ReportsSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Жалобы на контент</CardTitle>
        <CardDescription>Рассмотрите жалобы пользователей на отзывы и комментарии</CardDescription>
      </CardHeader>
      <CardContent>
        {filteredReports.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Тип</TableHead>
                <TableHead>Содержание</TableHead>
                <TableHead>Автор</TableHead>
                <TableHead>Причина</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReports.map(report => (
                <TableRow key={report.id}>
                  <TableCell>
                    <Badge variant='outline'>
                      {report.type === 'review' ? 'Отзыв' : 'Комментарий'}
                    </Badge>
                  </TableCell>
                  <TableCell className='max-w-xs truncate'>{report.content}</TableCell>
                  <TableCell>{report.author}</TableCell>
                  <TableCell>{report.reason}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        report.status === 'resolved'
                          ? 'default'
                          : report.status === 'dismissed'
                            ? 'destructive'
                            : 'outline'
                      }
                    >
                      {report.status === 'resolved' && 'Разрешена'}
                      {report.status === 'dismissed' && 'Отклонена'}
                      {report.status === 'pending' && 'На рассмотрении'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-2'>
                      <Button variant='outline' size='sm' onClick={() => handleViewItem(report)}>
                        Просмотр
                      </Button>
                      {report.status === 'pending' && (
                        <>
                          <Button
                            variant='default'
                            size='sm'
                            onClick={() => handleApproveItem(report.id, 'report')}
                          >
                            <CheckCircle className='mr-1 h-4 w-4' />
                            Принять
                          </Button>
                          <Button
                            variant='destructive'
                            size='sm'
                            onClick={() => handleRejectItem(report.id, 'report')}
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
            <p className='text-muted-foreground'>Нет жалоб для рассмотрения</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
