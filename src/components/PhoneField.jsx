'use client'

import { useEffect, useRef } from 'react'

/**
 * Phone input powered by intl-tel-input 17.0.8 - the exact widget the
 * reference sites use (flag + separate dial code, preferred countries).
 * The library loads during a true idle period (with a first-interaction
 * fallback) so it never extends the critical request chain, and the
 * heavy validation utils.js is NOT loaded: the two helpers we need
 * (full number + basic validity) are computed from the country data
 * that ships inside the main library. Australia (+61) is the default
 * country for this Australia-focused platform.
 */
export default function PhoneField({ id, name, required, placeholder, autoComplete, apiRef, invalid = false, onInput }) {
  const inputRef = useRef(null)

  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    let destroyed = false
    let itiInstance = null
    let started = false
    let loading = false
    let observer = null
    let removeInteractionFallback = null
    let api = null

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

    const loadIti = () => {
      if (loading || destroyed) return
      loading = true
      removeInteractionFallback?.()

      import('intl-tel-input').then((mod) => {
        if (destroyed) return

        const intlTelInput = mod.default || mod
        itiInstance = intlTelInput(input, {
          separateDialCode: true,
          preferredCountries: ['au', 'gb', 'us'],
          initialCountry: 'au',
          // Placeholder follows the selected country's format
          autoPlaceholder: 'aggressive',
        })
        fixAria()

        if (apiRef) {
          // Lightweight facade instead of the 241 KB utils.js:
          // the country data inside the library is enough for us.
          api = {
            getNumber: () => {
              const country = itiInstance.getSelectedCountryData()
              const digits = input.value.replace(/\D/g, '')
              return country && digits ? `+${country.dialCode}${digits}` : input.value
            },
            isValidNumber: () => {
              const digits = input.value.replace(/\D/g, '').length
              return digits >= 7 && digits <= 15
            },
          }
          apiRef.current = api
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
      observer?.disconnect()
      removeInteractionFallback?.()
      if (apiRef?.current === api) apiRef.current = null
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
