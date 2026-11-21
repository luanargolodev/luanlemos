import type { SVGProps } from 'react'

export function FlagBR(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      <rect width="24" height="16" rx="2" fill="#009B3A" />
      <path d="M12 2.4 21.4 8 12 13.6 2.6 8Z" fill="#FFDF00" />
      <circle cx="12" cy="8" r="3.2" fill="#002776" />
      <path
        d="M9.3 7.2c1.7-.5 3.7-.2 5.3.7"
        stroke="#fff"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function FlagUS(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      <rect width="24" height="16" rx="2" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y * 1.15 + 0.2} width="24" height="1.15" fill="#B22234" />
      ))}
      <rect width="10" height="8.6" rx="1" fill="#3C3B6E" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={2 + col * 2}
            cy={2 + row * 2.2}
            r="0.45"
            fill="#fff"
          />
        )),
      )}
    </svg>
  )
}

export function Flag({ code, ...props }: { code: string } & SVGProps<SVGSVGElement>) {
  if (code === 'br') return <FlagBR {...props} />
  if (code === 'us') return <FlagUS {...props} />
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true" {...props}>
      <rect width="24" height="16" rx="2" fill="currentColor" opacity="0.2" />
    </svg>
  )
}
