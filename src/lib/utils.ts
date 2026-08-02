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

function parseDateRange(dateStr: string): { start: Date; end: Date } {
  const [startStr, endStr] = dateStr.split(' - ')
  return {
    start: new Date(startStr),
    end: endStr === 'Present' ? new Date() : new Date(endStr),
  }
}

function calendarDiff(start: Date, end: Date): { months: number; days: number } {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  let days = end.getDate() - start.getDate()
  if (days < 0) {
    months--
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate()
  }
  return { months, days }
}

function formatYearsMonths(totalMonths: number, days: number): string {
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts: string[] = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`)
  if (months > 0) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`)
  if (parts.length === 0) parts.push(`${days} ${days === 1 ? 'day' : 'days'}`)

  return parts.join(' ')
}

export function calculateDuration(dateStr: string): string {
  const { start, end } = parseDateRange(dateStr)
  const { months, days } = calendarDiff(start, end)
  return formatYearsMonths(months, days)
}

export function calculateTotalExperience(
  experiences: { date: string }[]
): string {
  let totalMonths = 0
  let leftoverDays = 0
  let totalDays = 0

  for (const exp of experiences) {
    const { start, end } = parseDateRange(exp.date)
    const diff = calendarDiff(start, end)
    totalMonths += diff.months
    leftoverDays += diff.days
    totalDays += Math.round(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    )
  }

  totalMonths += Math.floor(leftoverDays / 30)
  leftoverDays %= 30

  return `${formatYearsMonths(totalMonths, leftoverDays)} (${totalDays} ${
    totalDays === 1 ? 'day' : 'days'
  })`
}
