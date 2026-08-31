import { useEffect, useRef } from 'react'

/**
 * Fades content up when it scrolls into view (or is already past it).
 * All instances share ONE scroll listener + rAF loop so scrolling
 * stays cheap on mobile. Respects prefers-reduced-motion via CSS.
 */

const pending = new Set()
let raf = 0
let listening = false

function stop() {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  listening = false
}

function flush() {
  raf = 0
  for (const el of pending) {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.94) {
      pending.delete(el)
      el.classList.add('is-visible')
    }
  }
  if (pending.size === 0) stop()
}

function onScroll() {
  if (!raf) raf = requestAnimationFrame(flush)
}

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    pending.add(el)
    if (!listening) {
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll)
      listening = true
    }
    flush() // immediate check for elements already in view

    return () => {
      pending.delete(el)
      if (pending.size === 0 && listening) stop()
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
