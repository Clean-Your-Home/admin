import type React from 'react'
import { useState } from 'react'

import { Search, Filter } from 'lucide-react'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Header } from '@/widgets/header'

import {
  CommentsSection,
  ModerationStatsSection,
  ReportsSection,
  ReviewsSection,
  ReplyModal,
  ViewItemModal
} from './widgets'

import { pendingComments, pendingReviews, reportedContent } from './mock'

import type { ModalItem, ModerationItem, Review } from '@/@types'

export const ModerationPage = () => {
  const [reviews, setReviews] = useState(pendingReviews)
  const [reports, setReports] = useState(reportedContent)
  const [comments, setComments] = useState(pendingComments)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<ModalItem | null>()
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [isReplyModalOpen, setIsReplyModalOpen] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [activeTab, setActiveTab] = useState('reviews')
  const [filterStatus, setFilterStatus] = useState('pending')

  const filteredReviews = reviews.filter(review => {
    const matchesSearch =
      review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const filteredReports = reports.filter(report => {
    const matchesSearch =
      report.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const filteredComments = comments.filter(comment => {
    const matchesSearch =
      comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comment.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || comment.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleViewItem = (item: ModalItem) => {
    setSelectedItem(item)
    setIsViewModalOpen(true)
  }

  const handleApproveItem = (id: number, type: ModerationItem) => {
    if (type === 'review') {
      setReviews(
        reviews.map(review => (review.id === id ? { ...review, status: 'approved' } : review))
      )
      toast.success('Отзыв одобрен', {
        description: 'Отзыв успешно опубликован'
      })
    } else if (type === 'report') {
      setReports(
        reports.map(report => (report.id === id ? { ...report, status: 'resolved' } : report))
      )
      toast.success('Жалоба обработана', {
        description: 'Жалоба помечена как разрешенная'
      })
    } else if (type === 'comment') {
      setComments(
        comments.map(comment => (comment.id === id ? { ...comment, status: 'approved' } : comment))
      )
      toast.success('Комментарий одобрен', {
        description: 'Комментарий успешно опубликован'
      })
    }
  }

  const handleRejectItem = (id: number, type: ModerationItem) => {
    if (type === 'review') {
      setReviews(
        reviews.map(review => (review.id === id ? { ...review, status: 'rejected' } : review))
      )
      toast.warning('Отзыв отклонен', {
        description: 'Отзыв не будет опубликован'
      })
    } else if (type === 'report') {
      setReports(
        reports.map(report => (report.id === id ? { ...report, status: 'dismissed' } : report))
      )
      toast.warning('Жалоба отклонена', {
        description: 'Жалоба помечена как необоснованная'
      })
    } else if (type === 'comment') {
      setComments(
        comments.map(comment => (comment.id === id ? { ...comment, status: 'rejected' } : comment))
      )
      toast.warning('Комментарий отклонен', {
        description: 'Комментарий не будет опубликован'
      })
    }
  }

  const handleReplyToReview = (review: Review) => {
    setSelectedItem(review)
    setReplyText('')
    setIsReplyModalOpen(true)
  }

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()

    if (!replyText.trim()) {
      toast.warning('Введите текст ответа', {
        description: 'Пожалуйста, напишите ваш ответ'
      })
      return
    }

    setReplyText('')

    setIsReplyModalOpen(false)

    toast.success('Ответ отправлен', {
      description: 'Ваш ответ успешно добавлен к отзыву'
    })
  }

  return (
    <div className='container py-12'>
      <Header title='Статистика модерации' description='Обзор контента, требующего модерации'>
        <div className='flex gap-4'>
          <div className='relative'>
            <Input
              type='search'
              placeholder='Поиск...'
              className='w-full md:w-[300px] pl-10'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <Search className='absolute left-3 top-2.5 h-5 w-5 text-muted-foreground' />
          </div>
          <Button
            variant='outline'
            onClick={() => setFilterStatus(filterStatus === 'all' ? 'pending' : 'all')}
          >
            <Filter className='mr-2 h-4 w-4' />
            {filterStatus === 'all' ? 'Только ожидающие' : 'Все статусы'}
          </Button>
        </div>
      </Header>
      <div className='grid gap-6'>
        <ModerationStatsSection reviews={reviews} comments={comments} reports={reports} />

        <Tabs defaultValue='reviews' onValueChange={setActiveTab}>
          <TabsList className='grid w-full grid-cols-3 mb-6'>
            <TabsTrigger value='reviews'>Отзывы</TabsTrigger>
            <TabsTrigger value='comments'>Комментарии</TabsTrigger>
            <TabsTrigger value='reports'>Жалобы</TabsTrigger>
          </TabsList>

          <TabsContent value='reviews'>
            <ReviewsSection
              filteredReviews={filteredReviews}
              handleViewItem={handleViewItem}
              handleApproveItem={handleApproveItem}
              handleRejectItem={handleRejectItem}
              handleReplyToReview={handleReplyToReview}
            />
          </TabsContent>

          <TabsContent value='comments'>
            <CommentsSection
              filteredComments={filteredComments}
              handleViewItem={handleViewItem}
              handleApproveItem={handleApproveItem}
              handleRejectItem={handleRejectItem}
            />
          </TabsContent>

          <TabsContent value='reports'>
            <ReportsSection
              filteredReports={filteredReports}
              handleViewItem={handleViewItem}
              handleApproveItem={handleApproveItem}
              handleRejectItem={handleRejectItem}
            />
          </TabsContent>
        </Tabs>
      </div>

      <ViewItemModal
        isViewModalOpen={isViewModalOpen}
        setIsViewModalOpen={setIsViewModalOpen}
        selectedItem={selectedItem as ModalItem}
        activeTab={activeTab}
        handleReplyToReview={handleReplyToReview}
        handleApproveItem={handleApproveItem}
        handleRejectItem={handleRejectItem}
      />

      <ReplyModal
        isReplyModalOpen={isReplyModalOpen}
        setIsReplyModalOpen={setIsReplyModalOpen}
        selectedItem={selectedItem as Review}
        handleSubmitReply={handleSubmitReply}
        replyText={replyText}
        setReplyText={setReplyText}
      />
    </div>
  )
}
