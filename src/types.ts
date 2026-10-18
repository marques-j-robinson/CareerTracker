export type ApplicationStatus =
  | 'interested'
  | 'applied'
  | 'interviewing'
  | 'offer'
  | 'rejected'

export interface JobApplication {
  id: string
  company: string
  jobTitle: string
  status: ApplicationStatus
  dateApplied?: string
  jobUrl?: string
  notes?: string
}
