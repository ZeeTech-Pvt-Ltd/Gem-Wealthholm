import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '../components/Icons'

export default function NotFound() {
  return (
    <section className="page-hero notfound">
      <span className="page-hero__ghost" aria-hidden="true">
        404
      </span>
      <div className="container">
        <p className="eyebrow">Error — 404</p>
        <h1 className="page-hero__title">
          Page not <mark>found</mark>
        </h1>
        <p className="page-hero__text">
          The page you're looking for doesn't exist or has moved. Let's get
          you back on track.
        </p>
        <div className="notfound__actions">
          <Link className="btn btn--ink" to="/">
            Back to homepage
          </Link>
          <Link className="btn btn--ghost" to="/contact-us">
            Contact us
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}
