import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

import type { Review } from '@/@types'

interface ReplyModalProps {
  isReplyModalOpen: boolean
  setIsReplyModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedItem: Review
  handleSubmitReply: (e: React.FormEvent) => void
  replyText: string
  setReplyText: React.Dispatch<React.SetStateAction<string>>
}

export const ReplyModal = ({
  isReplyModalOpen,
  setIsReplyModalOpen,
  selectedItem,
  handleSubmitReply,
  replyText,
  setReplyText
}: ReplyModalProps) => {
  return (
    <Dialog open={isReplyModalOpen} onOpenChange={setIsReplyModalOpen}>
      {selectedItem && (
        <DialogContent className='sm:max-w-[500px] max-h-[90vh] overflow-y-auto'>
          <DialogHeader>
            <DialogTitle>Ответить на отзыв</DialogTitle>
            <DialogDescription>
              Ваш ответ будет опубликован от имени администратора
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmitReply} className='grid gap-4 py-4'>
            <div className='p-4 bg-muted rounded-lg'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='font-medium'>{selectedItem.name}</span>
                <span className='text-xs text-muted-foreground'>{selectedItem.date}</span>
              </div>
              <p className='text-sm text-muted-foreground'>{selectedItem.text}</p>
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='reply'>Ваш ответ</Label>
              <Textarea
                id='reply'
                placeholder='Напишите ваш ответ от имени компании...'
                rows={4}
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
              />
            </div>

            <Button type='submit' className='w-full'>
              Отправить ответ
            </Button>
          </form>
        </DialogContent>
      )}
    </Dialog>
  )
}
