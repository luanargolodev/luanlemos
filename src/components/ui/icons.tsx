import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowUpRight({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function ArrowRight({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowDown({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  )
}

export function Mail({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function Download({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="M12 3v12M7 10l5 5 5-5M4 19.5h16" />
    </svg>
  )
}

export function FileText({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="M7 3h7l4 4v14H7V3Z" />
      <path d="M14 3v5h4M10 12h5M10 16h5" />
    </svg>
  )
}

export function MapPin({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function Sparkle({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="M12 3.5c.6 4.4 3.6 7.4 8 8-4.4.6-7.4 3.6-8 8-.6-4.4-3.6-7.4-8-8 4.4-.6 7.4-3.6 8-8Z" />
    </svg>
  )
}

export function Award({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.7 7L12 17.7l5.2 2.8-1.7-7" />
    </svg>
  )
}

export function Code({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />
    </svg>
  )
}

export function Copy({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5.5A1.5 1.5 0 0 1 6.5 4H15" />
    </svg>
  )
}

export function Check({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  )
}

export function GitHub({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function LinkedIn({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function WhatsApp({ className = 'size-4', ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
