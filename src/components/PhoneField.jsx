import { useEffect, useRef } from 'react'
import 'intl-tel-input/build/css/intlTelInput.css'
import utilsUrl from 'intl-tel-input/build/js/utils.js?url'

/**
 * Phone input powered by intl-tel-input 17.0.8 — the exact widget the
 * reference sites use (flag + separate dial code, preferred countries,
 * validation utils). The library (with all country data) is loaded
 * dynamically so it stays out of the initial bundle. Visitor country
 * is geo-detected via ipwho.is and the dial code pre-selected. (The
 * reference sites call ipapi.co, but that API sends no CORS headers
 * and rejects browser requests from every non-allowlisted origin.)
 */
export default function PhoneField({ id, name, required, placeholder, autoComplete, apiRef, invalid = false, onInput }) {
  const inputRef = useRef(null)

  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    let destroyed = false
    let cancelled = false
    let itiInstance = null
    let started = false
    let observer = null

    const init = () => {
      if (started || destroyed) return
      started = true
      observer?.disconnect()

      import('intl-tel-input').then((mod) => {
        if (destroyed) return

        const intlTelInput = mod.default || mod
        itiInstance = intlTelInput(input, {
          separateDialCode: true,
          preferredCountries: ['gb', 'us'],
          initialCountry: 'gb',
          autoPlaceholder: 'off',
          utilsScript: utilsUrl,
        })
        if (apiRef) apiRef.current = itiInstance

        // Geolocate the visitor and pre-select their dial code
        fetch('https://ipwho.is/', { signal: AbortSignal.timeout(5000) })
          .then((r) => (r.ok ? r.json() : null))
          .then((data) => {
            const code = data?.country_code?.toLowerCase()
            if (!cancelled && code) itiInstance?.setCountry(code)
          })
          .catch(() => {
            /* keep the default country */
          })
      })
    }

    // Initialize right away when the input is in/near the viewport;
    // otherwise wait until the user scrolls close (saves work for
    // below-the-fold forms, e.g. the CTA banner).
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) init()
        },
        { rootMargin: '600px 0px' },
      )
      observer.observe(input)
    } else {
      init()
    }

    return () => {
      destroyed = true
      cancelled = true
      observer?.disconnect()
      if (apiRef?.current === itiInstance) apiRef.current = null
      itiInstance?.destroy()
    }
  }, [])

  return (
    <input
      ref={inputRef}
      className={`field__input${invalid ? ' field__input--error' : ''}`}
      id={id}
      name={name}
      type="tel"
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
      onInput={onInput}
    />
  )
}
