import RegistrationForm from '../components/RegistrationForm'

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
        </div>
      </div>
    </div>
  )
}
