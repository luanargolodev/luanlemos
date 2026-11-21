function parseMonth(value: string) {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

function monthShort(value: string, dateLocale: string) {
  const { year, month } = parseMonth(value)
  const label = new Intl.DateTimeFormat(dateLocale, {
    month: 'short',
    timeZone: 'UTC',
  })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace(/\.$/, '')
  return { label, year }
}

export function formatMonth(value: string, dateLocale: string) {
  const { label, year } = monthShort(value, dateLocale)
  return dateLocale.startsWith('pt') ? `${label}/${year}` : `${label} ${year}`
}

export function formatPeriod(
  start: string,
  end: string | undefined,
  dateLocale: string,
  present: string,
) {
  return `${formatMonth(start, dateLocale)} — ${end ? formatMonth(end, dateLocale) : present}`
}

export function formatNumericMonth(value: string, dateLocale = 'pt-BR') {
  const { year, month } = parseMonth(value)
  return new Intl.DateTimeFormat(dateLocale, {
    month: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)))
}

export function formatNumericPeriod(
  start: string,
  end: string | undefined,
  present: string,
  dateLocale = 'pt-BR',
) {
  return `${formatNumericMonth(start, dateLocale)} — ${
    end ? formatNumericMonth(end, dateLocale) : present
  }`
}

export function formatLongMonth(date: Date, dateLocale: string) {
  return new Intl.DateTimeFormat(dateLocale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date)
}

export function getExperienceMonths(start: string, now = new Date()) {
  const { year, month } = parseMonth(start)
  return Math.max(
    0,
    (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month),
  )
}

export function getExperienceYears(start: string, now = new Date()) {
  return Math.floor(getExperienceMonths(start, now) / 12)
}

export interface DurationUnits {
  year: string
  years: string
  month: string
  months: string
}

export function formatDuration(
  months: number,
  units: DurationUnits,
  conjunction = 'e',
) {
  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  const yearsLabel = `${years} ${years === 1 ? units.year : units.years}`
  if (remainingMonths === 0) return yearsLabel

  const monthsLabel = `${remainingMonths} ${
    remainingMonths === 1 ? units.month : units.months
  }`
  return `${yearsLabel} ${conjunction} ${monthsLabel}`
}
