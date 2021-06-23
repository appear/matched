import { Area } from './region'
import { Job } from './job'
import { Domain } from './domain'

export interface User {
  id: string
  socialId: string
  thumbnail: string
  email: string
  name: string
  about: string
  provider: 'KAKAO' | 'GOOGLE'
  isCompleted: boolean
  isVisible: boolean
  links: string[]
  interestedJobs: Job[]
  interestedDomains: Domain[]
  area: Area | null
  createdAt: string
  updatedAt: string
}
