import { cn } from '@/lib/utils'
import { Star, CheckCircle, XCircle, MessageSquare } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog'
import type { Comment, Report, Review, ModalItem, ModerationItem } from '@/@types'

interface ViewItemProps {
  isViewModalOpen: boolean
  setIsViewModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedItem: ModalItem | null
  activeTab: string
  handleReplyToReview: (review: Review) => void
  handleApproveItem: (id: number, type: ModerationItem) => void
  handleRejectItem: (id: number, type: ModerationItem) => void
}

const isReview = (item: Review | Comment | Report): item is Review => {
  return 'rating' in item && 'service' in item
}

const isComment = (item: Review | Comment | Report): item is Comment => {
  return 'reviewId' in item && 'author' in item
}

const isReport = (item: Review | Comment | Report): item is Report => {
  return 'reportedBy' in item && 'reason' in item && 'type' in item
}

export const ViewItemModal = ({
  isViewModalOpen,
  setIsViewModalOpen,
  selectedItem,
  activeTab,
  handleReplyToReview,
  handleApproveItem,
  handleRejectItem
}: ViewItemProps) => {
  if (!selectedItem) return

  return (
    <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
      <DialogContent className='sm:max-w-[600px] max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>
            {activeTab === 'reviews' && 'Просмотр отзыва'}
            {activeTab === 'comments' && 'Просмотр комментария'}
            {activeTab === 'reports' && 'Просмотр жалобы'}
          </DialogTitle>
          <DialogDescription>
            {activeTab === 'reviews' &&
              isReview(selectedItem) &&
              `Отзыв от ${selectedItem.name}, ${selectedItem.date}`}
            {activeTab === 'comments' &&
              isComment(selectedItem) &&
              `Комментарий от ${selectedItem.author}, ${selectedItem.date}`}
            {activeTab === 'reports' &&
              isReport(selectedItem) &&
              `Жалоба на ${selectedItem.type === 'review' ? 'отзыв' : 'комментарий'} от ${selectedItem.author}`}
          </DialogDescription>
        </DialogHeader>

        <div className='py-4'>
          {activeTab === 'reviews' && isReview(selectedItem) && (
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Услуга:</span>
                <span>{selectedItem.service}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Рейтинг:</span>
                <div className='flex'>
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className={cn(
                        'h-4 w-4',
                        star <= selectedItem.rating
                          ? 'fill-primary text-primary'
                          : 'fill-muted text-muted-foreground'
                      )}
                    />
                  ))}
                </div>
              </div>
              <div>
                <span className='font-medium'>Текст отзыва:</span>
                <p className='mt-2 p-4 bg-muted rounded-lg'>{selectedItem.text}</p>
              </div>
            </div>
          )}

          {activeTab === 'comments' && isComment(selectedItem) && (
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>ID отзыва:</span>
                <span>{selectedItem.reviewId}</span>
              </div>
              <div>
                <span className='font-medium'>Текст комментария:</span>
                <p className='mt-2 p-4 bg-muted rounded-lg'>{selectedItem.text}</p>
              </div>
            </div>
          )}

          {activeTab === 'reports' && isReport(selectedItem) && (
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Тип контента:</span>
                <span>{selectedItem.type === 'review' ? 'Отзыв' : 'Комментарий'}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Причина жалобы:</span>
                <span>{selectedItem.reason}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>Кем подана:</span>
                <span>{selectedItem.reportedBy}</span>
              </div>
              <div>
                <span className='font-medium'>Содержание:</span>
                <p className='mt-2 p-4 bg-muted rounded-lg'>{selectedItem.content}</p>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className='flex justify-between'>
          <Button variant='outline' onClick={() => setIsViewModalOpen(false)}>
            Закрыть
          </Button>

          {'status' in selectedItem && selectedItem.status === 'pending' && (
            <div className='flex gap-2'>
              {activeTab === 'reviews' && isReview(selectedItem) && (
                <Button
                  variant='outline'
                  onClick={() => {
                    setIsViewModalOpen(false)
                    handleReplyToReview(selectedItem)
                  }}
                >
                  <MessageSquare className='mr-1 h-4 w-4' />
                  Ответить
                </Button>
              )}

              <Button
                variant='default'
                onClick={() => {
                  handleApproveItem(
                    selectedItem.id,
                    activeTab === 'reviews'
                      ? 'review'
                      : activeTab === 'comments'
                        ? 'comment'
                        : 'report'
                  )
                  setIsViewModalOpen(false)
                }}
              >
                <CheckCircle className='mr-1 h-4 w-4' />
                {activeTab === 'reports' ? 'Принять' : 'Одобрить'}
              </Button>

              <Button
                variant='destructive'
                onClick={() => {
                  handleRejectItem(
                    selectedItem.id,
                    activeTab === 'reviews'
                      ? 'review'
                      : activeTab === 'comments'
                        ? 'comment'
                        : 'report'
                  )
                  setIsViewModalOpen(false)
                }}
              >
                <XCircle className='mr-1 h-4 w-4' />
                Отклонить
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
