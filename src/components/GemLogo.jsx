import { useId } from 'react'

export default function GemLogo() {
  const gradientId = useId()

  return (
    <span className="logo">
      <svg className="logo__gem" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d6fa03" />
            <stop offset="100%" stopColor="#8df197" />
          </linearGradient>
        </defs>
        <path d="M16 3 L27 13 L16 29 L5 13 Z" fill={`url(#${gradientId})`} />
        <path d="M16 3 L27 13 L16 16 Z" fill="rgba(0,0,0,0.22)" />
        <path d="M5 13 L16 16 L16 29 Z" fill="rgba(0,73,56,0.35)" />
        <path d="M16 3 L5 13 L16 16 Z" fill="rgba(255,255,255,0.28)" />
      </svg>
      <span className="logo__name">
        Gem <em>Wealthholm</em>
      </span>
    </span>
  )
}
