'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

/**
 * GA4 page_view tracking (replaces the old Seo component's gtag call).
 * The stub + lazy library load live in the root layout; automatic
 * initial page_view is disabled in the config snippet, so send
 * exactly one page_view per navigation.
 */
export default function Analytics() {
  const pathname = usePathname()
  const lastPathRef = useRef(null)

  useEffect(() => {
    if (lastPathRef.current === pathname) return
    lastPathRef.current = pathname
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: pathname,
        page_title: document.title,
      })
    }
  }, [pathname])

  return null
}
