import { useEffect, useRef } from 'react'

/**
 * Fades content up when it scrolls into view (or is already past it).
 * Uses a throttled scroll check so fast scrolls and anchor jumps are
 * handled deterministically. Respects prefers-reduced-motion via CSS.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const revealIfVisible = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.94) {
        el.classList.add('is-visible')
        cleanup()
      }
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(revealIfVisible)
    }

    const cleanup = () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }

    revealIfVisible()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return cleanup
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
