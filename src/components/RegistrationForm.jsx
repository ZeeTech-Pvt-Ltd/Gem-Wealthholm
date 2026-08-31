import { useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneField from './PhoneField'

/**
 * Lead-capture form. `idPrefix` keeps input IDs unique when the form
 * is rendered more than once on a page (hero + CTA banner).
 */
export default function RegistrationForm({ idPrefix = 'reg', formId = 'join' }) {
  const [sent, setSent] = useState(false)

  const f = (name) => `${idPrefix}-${name}`

  // Demo-only submit: swap for a real API call before launch.
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="form-card form-card--titled" id={formId}>
      <div className="form-card__title">Join now</div>
      <div className="form-card__sub">Membership — free to open</div>

      {sent ? (
        <div className="form-note form-note--success" role="status">
          Thank you! Your request has been received. Our team will be in touch shortly.
        </div>
      ) : (
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
            />
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

          <button className="btn btn--lime btn--block" type="submit">
            Open an account
          </button>
        </form>
      )}
    </div>
  )
}
