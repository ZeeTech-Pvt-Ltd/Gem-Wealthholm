import Link from 'next/link'
import RegistrationForm from '../../components/RegistrationForm'
import Main from '../../components/Main'
import SeoScripts from '../../components/SeoScripts'
import { buildMetadata } from '../../lib/seo'
import { CheckIcon } from '../../components/Icons'

const perks = [
  'Real-time market scanning around the clock',
  'Clear signals in plain language - no jargon',
  'Copy trading with proven strategies',
  'Secure, encrypted channels for every transaction',
]

export const metadata = buildMetadata('/login')

export default function Login() {
  return (
    <Main>
      <SeoScripts route="/login" />
      <div className="login-wrap">
      <div className="container">
        <div className="login-card">
          <p className="eyebrow">04 - Access</p>
          <h1 className="login-card__title">
            Join <mark>Gem Wealthholm</mark>
          </h1>
          <p className="login-card__sub">
            Membership is free to open - no hidden charges.
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
            <Link href="/guides">Read the Gem Wealthholm guides</Link> or{' '}
            <Link href="/faqs">visit the FAQ</Link>.
          </p>
        </div>
      </div>
      </div>
    </Main>
  )
}
