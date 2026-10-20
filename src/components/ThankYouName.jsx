'use client'

import { useSearchParams } from 'next/navigation'

/**
 * Renders the first name from the ?name= query param set by
 * RegistrationForm (replaces the router state hand-off).
 */
export default function ThankYouName() {
  const name = useSearchParams().get('name')?.trim()
  return name ? `, ${name}` : ''
}
