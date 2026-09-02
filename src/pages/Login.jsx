import { Link } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm'
import { CheckIcon } from '../components/Icons'

const perks = [
  'Real-time market scanning around the clock',
  'Clear signals in plain language — no jargon',
  'Copy trading with proven strategies',
  'Secure, encrypted channels for every transaction',
]

export default function Login() {
  return (
    <div className="login-wrap">
      <div className="container">
        <div className="login-card">
          <p className="eyebrow">04 — Access</p>
          <h1 className="login-card__title">
            Join <mark>Gem Wealthholm</mark>
          </h1>
          <p className="login-card__sub">
            Membership is free to open — no hidden charges.
          </p>
          <RegistrationForm idPrefix="login" formId="login-join" />

          <ul className="login-perks">
            {perks.map((perk) => (
              <li key={perk}>
                <CheckIcon />
                {perk}
              </li>
            ))}
          </ul>
          <p className="login-perks__more">
            Want to know more first?{' '}
            <Link to="/guides">Read the Gem Wealthholm guides</Link> or{' '}
            <Link to="/faqs">visit the FAQ</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
