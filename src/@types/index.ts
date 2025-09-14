export type Comment = {
  id: number
  reviewId: number
  author: string
  text: string
  date: string
  status: string
}

export type Report = {
  id: number
  type: string
  content: string
  author: string
  date: string
  reportedBy: string
  reason: string
  status: string
}

export type Review = {
  id: number
  name: string
  rating: number
  date: string
  text: string
  service: string
  status: string
}

export type ModalItem = Comment | Report | Review

export type ModerationItem = 'review' | 'report' | 'comment'
