import { profile } from '@/data/profile'

const MONTHS = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
]

function parseMonth(value: string) {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

export function formatMonth(value: string) {
  const { year, month } = parseMonth(value)
  return `${MONTHS[month - 1]}/${year}`
}

export function formatPeriod(start: string, end?: string) {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'atual'}`
}

export function formatNumericMonth(value: string) {
  const { year, month } = parseMonth(value)
  return `${String(month).padStart(2, '0')}/${year}`
}

export function formatNumericPeriod(start: string, end?: string) {
  return `${formatNumericMonth(start)} — ${end ? formatNumericMonth(end) : 'atual'}`
}

export function getExperienceMonths(start = profile.startDate, now = new Date()) {
  const { year, month } = parseMonth(start)
  return Math.max(
    0,
    (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month),
  )
}

export function getExperienceDuration(
  start = profile.startDate,
  now = new Date(),
) {
  const total = getExperienceMonths(start, now)
  const years = Math.floor(total / 12)
  const months = total % 12

  const yearsLabel = `${years} ${years === 1 ? 'ano' : 'anos'}`
  if (months === 0) return yearsLabel

  const monthsLabel = `${months} ${months === 1 ? 'mês' : 'meses'}`
  return `${yearsLabel} e ${monthsLabel}`
}

export function getExperienceYears(start = profile.startDate, now = new Date()) {
  return Math.floor(getExperienceMonths(start, now) / 12)
}
