import { useEffect, useRef } from 'react'
import 'intl-tel-input/build/css/intlTelInput.css'
import utilsUrl from 'intl-tel-input/build/js/utils.js?url'

/**
 * Phone input powered by intl-tel-input 17.0.8 - the exact widget the
 * reference sites use (flag + separate dial code, preferred countries,
 * validation utils). The library (with all country data) is loaded
 * dynamically during a true idle period, with a first-interaction
 * fallback - so it never extends the page's critical request chain.
 * Visitor country is geo-detected via ipwho.is, starting in parallel
 * with the page load. (The reference sites call ipapi.co, but that API
 * sends no CORS headers and rejects browser requests from every
 * non-allowlisted origin.)
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
    let loading = false
    let observer = null
    let removeInteractionFallback = null
    let geoCode = null

    const fixAria = () => {
      const flagButton = input.parentElement?.querySelector('.iti__selected-flag')
      if (flagButton) {
        // A11y conformance: iti v17 references list items that do not
        // exist until the dropdown is first opened.
        flagButton.removeAttribute('aria-activedescendant')
        flagButton.removeAttribute('aria-owns')
        flagButton.removeAttribute('aria-controls')
      }
    }

    // Geo lookup starts immediately, in parallel with the page load.
    fetch('https://ipwho.is/', { signal: AbortSignal.timeout(5000) })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const code = data?.country_code?.toLowerCase()
        if (!cancelled && code) {
          geoCode = code
          if (itiInstance) {
            itiInstance.setCountry(code)
            fixAria()
          }
        }
      })
      .catch(() => {
        /* keep the default country */
      })

    const loadIti = () => {
      if (loading || destroyed) return
      loading = true
      removeInteractionFallback?.()

      import('intl-tel-input').then((mod) => {
        if (destroyed) return

        const intlTelInput = mod.default || mod
        itiInstance = intlTelInput(input, {
          separateDialCode: true,
          preferredCountries: ['gb', 'us'],
          initialCountry: 'gb',
          // Placeholder follows the selected country's mobile format
          autoPlaceholder: 'aggressive',
          placeholderNumberType: 'MOBILE',
          utilsScript: utilsUrl,
        })
        if (apiRef) apiRef.current = itiInstance
        fixAria()

        if (geoCode) {
          itiInstance.setCountry(geoCode)
          fixAria()
        }
      })
    }

    const init = () => {
      if (started || destroyed) return
      started = true
      observer?.disconnect()

      // Wait for a genuinely idle main thread; if the user interacts
      // with the field first, load immediately.
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loadIti)
      } else {
        loadIti()
      }

      const interact = () => loadIti()
      input.addEventListener('focus', interact, { once: true })
      input.addEventListener('pointerdown', interact, { once: true })
      input.addEventListener('touchstart', interact, { once: true })
      removeInteractionFallback = () => {
        input.removeEventListener('focus', interact)
        input.removeEventListener('pointerdown', interact)
        input.removeEventListener('touchstart', interact)
      }
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
      removeInteractionFallback?.()
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
