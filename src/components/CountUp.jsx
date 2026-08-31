import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `to` when it enters the viewport.
 * Eased with an ease-out curve over `duration` ms.
 */
export default function CountUp({ to, decimals = 0, duration = 1600 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setValue(to)
          return
        }

        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(to * eased)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return <span ref={ref}>{value.toFixed(decimals)}</span>
}
