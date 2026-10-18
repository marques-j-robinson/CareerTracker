import type { JobApplication } from './types'

const applications: JobApplication[] = [
  {
    id: '1',
    company: 'Acme Software',
    jobTitle: 'Full-Stack Engineer',
    status: 'applied',
    dateApplied: '2026-10-17',
  },
  {
    id: '2',
    company: 'Northstar Tech',
    jobTitle: 'Frontend Engineer',
    status: 'interviewing',
    dateApplied: '2026-10-15',
    notes: 'Technical interview scheduled',
  },
  {
    id: '3',
    company: 'Summit Systems',
    jobTitle: 'Software Engineer',
    status: 'interested',
  },
]

function getApplicationsByStatus(
  applications: JobApplication[],
  status: JobApplication['status'],
): JobApplication[] {
  return applications.filter((application) => application.status === status)
}

function countApplications(applications: JobApplication[]): number {
  return applications.length
}

function getApplicationsByCompany(
  applications: JobApplication[],
  company: JobApplication['company'],
): JobApplication[] {
  return applications.filter((application) => application.company === company)
}

console.log('Total:', countApplications(applications))
console.log(
  'Interviews:',
  getApplicationsByStatus(applications, 'interviewing'),
)

console.log(
  'Summit Systems',
  getApplicationsByCompany(applications, 'Summit Systems'),
)
