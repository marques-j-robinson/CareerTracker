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
  {
    id: '4',
    company: 'Tesla',
    jobTitle: 'Full-Stack Engineer',
    status: 'interviewing',
    dateApplied: '2026-10-18',
  },
]

function getApplicationsByStatus(
  applications: JobApplication[],
  status: JobApplication['status'],
): JobApplication[] | string {
  const res = applications.filter(
    (application) => application.status === status,
  )
  if (res.length === 0) {
    return `No Applications Found while searching status: ${status}`
  }
  return res
}

function countApplications(applications: JobApplication[]): number {
  return applications.length
}

function getApplicationsByCompany(
  applications: JobApplication[],
  company: JobApplication['company'],
): JobApplication[] | string {
  const res = applications.filter(
    (application) =>
      application.company.toLowerCase() === company.toLowerCase(),
  )
  if (!res.length) {
    return `No Applications Found while searching company: ${company}`
  }
  return res
}

console.log('Total:', countApplications(applications))
console.log(
  'Interviews:',
  getApplicationsByStatus(applications, 'phone-screening'),
)

console.log(
  'Summit Systems',
  getApplicationsByCompany(applications, 'summit Systems'),
)
