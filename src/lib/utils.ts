import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateAge(birthDate: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--
  }
  return age
}

export function calculateDaysBetween(dateStr: string): number {
  const [startStr, endStr] = dateStr.split(' - ')
  const start = new Date(startStr)
  const end = endStr === 'Present' ? new Date() : new Date(endStr)
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
}

export function calculateTotalExperience(
  experiences: { date: string }[]
): string {
  let totalDays = 0

  for (const exp of experiences) {
    totalDays += calculateDaysBetween(exp.date)
  }

  const years = Math.floor(totalDays / 365)
  const remainingAfterYears = totalDays % 365
  const months = Math.floor(remainingAfterYears / 30)
  const days = remainingAfterYears % 30

  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)
  if (days > 0) parts.push(`${days} ${days === 1 ? 'day' : 'days'}`)

  return parts.join(' ') || '0 days'
}
