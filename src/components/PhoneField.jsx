import { useEffect, useRef } from 'react'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'
import utilsUrl from 'intl-tel-input/build/js/utils.js?url'

/**
 * Phone input powered by intl-tel-input 17.0.8 — the exact widget the
 * reference sites use (flag + separate dial code, preferred countries,
 * validation utils). Visitor country is geo-detected via ipwho.is and
 * the dial code pre-selected. (The reference sites call ipapi.co, but
 * that API sends no CORS headers and rejects browser requests from
 * every non-allowlisted origin — ipwho.is does the same job with
 * CORS enabled.)
 */
export default function PhoneField({ id, name, required, placeholder, autoComplete }) {
  const inputRef = useRef(null)

  useEffect(() => {
    const input = inputRef.current
    if (!input) return

    const iti = intlTelInput(input, {
      separateDialCode: true,
      preferredCountries: ['gb', 'us'],
      initialCountry: 'gb',
      autoPlaceholder: 'off',
      utilsScript: utilsUrl,
    })

    // Geolocate the visitor and pre-select their dial code
    let cancelled = false
    fetch('https://ipwho.is/', { signal: AbortSignal.timeout(5000) })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const code = data?.country_code?.toLowerCase()
        if (!cancelled && code) iti.setCountry(code)
      })
      .catch(() => {
        /* keep the default country */
      })

    return () => {
      cancelled = true
      iti.destroy()
    }
  }, [])

  return (
    <input
      ref={inputRef}
      className="field__input"
      id={id}
      name={name}
      type="tel"
      required={required}
      autoComplete={autoComplete}
      placeholder={placeholder}
    />
  )
}
