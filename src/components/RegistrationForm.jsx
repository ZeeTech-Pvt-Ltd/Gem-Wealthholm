import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneField from './PhoneField'

const ENDPOINT = 'https://quantryxtech.com/homeMailAction.php'

/**
 * Lead-capture form. Posts JSON to the affiliate endpoint
 * (offerName: GemWealthholm-Site), validates the phone number with
 * intl-tel-input utils, and redirects to /thank-you on success.
 * `idPrefix` keeps input IDs unique across multiple instances.
 */
export default function RegistrationForm({ idPrefix = 'reg', formId = 'join', submitLabel = 'Open an account' }) {
  const [error, setError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [sending, setSending] = useState(false)
  const phoneApiRef = useRef(null)
  const navigate = useNavigate()

  const f = (name) => `${idPrefix}-${name}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget

    // Honeypot filled — silently pretend success for the bot
    if (form.website.value) {
      navigate('/thank-you')
      return
    }

    // Phone validation via intl-tel-input utils
    const iti = phoneApiRef.current
    if (iti && !iti.isValidNumber()) {
      setPhoneError('Please enter a valid phone number for the selected country.')
      return
    }
    setPhoneError(null)

    const phone = iti?.getNumber() || form.phone.value

    setSending(true)
    setError(null)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.first_name.value.trim(),
          lastName: form.last_name.value.trim(),
          email: form.email.value.trim(),
          phone: phone.replace(/[^\d+]/g, ''),
          offerName: 'GemWealthholm-Site',
        }),
      })
      const data = await res.json().catch(() => null)
      if (data?.status === 'success') {
        navigate('/thank-you', { state: { name: form.first_name.value.trim() } })
      } else {
        setError(data?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="form-card form-card--titled" id={formId}>
      <div className="form-card__title">Join now</div>
      <div className="form-card__sub">Membership — free to open</div>

      <form onSubmit={handleSubmit}>
        {/* honeypot — hidden from humans, catches bots */}
        <input
          type="text"
          name="website"
          className="hp-field"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="field-row">
          <div className="field">
            <label className="field__label" htmlFor={f('first-name')}>
              First name *
            </label>
            <input
              className="field__input"
              id={f('first-name')}
              name="first_name"
              type="text"
              required
              autoComplete="given-name"
              placeholder="John"
            />
          </div>
          <div className="field">
            <label className="field__label" htmlFor={f('last-name')}>
              Last name *
            </label>
            <input
              className="field__input"
              id={f('last-name')}
              name="last_name"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="field">
          <label className="field__label" htmlFor={f('email')}>
            Email *
          </label>
          <input
            className="field__input"
            id={f('email')}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="field">
          <label className="field__label" htmlFor={f('phone')}>
            Phone number *
          </label>
          <PhoneField
            id={f('phone')}
            name="phone"
            required
            autoComplete="tel"
            placeholder="301 2345678"
            apiRef={phoneApiRef}
            invalid={!!phoneError}
            onInput={() => phoneError && setPhoneError(null)}
          />
          {phoneError && (
            <div className="field__error" role="alert">
              {phoneError}
            </div>
          )}
        </div>

        <div className="field field--consent">
          <input
            className="field__checkbox"
            id={f('consent')}
            type="checkbox"
            required
            defaultChecked
          />
          <label className="field__consent-label" htmlFor={f('consent')}>
            I have read and agree to the <Link to="/privacy-policy">Privacy Policy</Link>{' '}
            and <Link to="/terms-of-use">Terms &amp; Conditions</Link>.
          </label>
        </div>

        {error && (
          <div className="form-note form-note--error" role="alert">
            {error}
          </div>
        )}

        <button className="btn btn--lime btn--block" type="submit" disabled={sending}>
          {sending ? 'Sending…' : submitLabel}
        </button>
      </form>
    </div>
  )
}
