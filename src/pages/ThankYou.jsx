import { Link, useLocation } from 'react-router-dom'
import { ArrowRightIcon, CheckIcon } from '../components/Icons'

export default function ThankYou() {
  const { state } = useLocation()
  const name = state?.name

  return (
    <section className="page-hero notfound thankyou">
      <span className="page-hero__ghost" aria-hidden="true">
        TY
      </span>
      <div className="container">
        <span className="thankyou__check" aria-hidden="true">
          <CheckIcon />
        </span>
        <p className="eyebrow">Success</p>
        <h1 className="page-hero__title">
          Thank <mark>you</mark>
          {name ? `, ${name}` : ''}!
        </h1>
        <p className="page-hero__text">
          Your request has been received. Our team will be in touch with you
          shortly.
        </p>
        <div className="notfound__actions">
          <Link className="btn btn--ink" to="/">
            Back to homepage
          </Link>
          <Link className="btn btn--ghost" to="/faqs">
            Read the FAQ
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
