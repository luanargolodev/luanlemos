export function LogoMark({
  className = 'size-6',
}: {
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className={className}
      fill="none"
    >
      <rect width="64" height="64" rx="16" fill="#4F46E5" />
      <rect
        x="0.75"
        y="0.75"
        width="62.5"
        height="62.5"
        rx="15.25"
        stroke="#FFFFFF"
        strokeOpacity="0.16"
        strokeWidth="1.5"
      />
      <path
        d="M17 14v31h28"
        stroke="#F6F3EC"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 21l13 9-13 9"
        stroke="#C7D2FE"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
