import Link from 'next/link'
import GemLogo from './GemLogo'
import { MailIcon, PinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <GemLogo />
            <p className="footer__blurb">
              Gem Wealthholm is an AI-driven platform that turns complex market
              data into clear, practical insights - helping you make more
              informed decisions with confidence.
            </p>
          </div>

          <div>
            <h3 className="footer__heading">Company</h3>
            <nav className="footer__links" aria-label="Footer company links">
              <Link href="/about-us">About us</Link>
              <Link href="/features">Features</Link>
              <Link href="/how-it-works">How it works</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/guides">Guides</Link>
              <Link href="/faqs">FAQ</Link>
              <Link href="/contact-us">Get in touch</Link>
            </nav>
          </div>

          <div>
            <h3 className="footer__heading">Legal</h3>
            <nav className="footer__links" aria-label="Footer legal links">
              <Link href="/terms-of-use">Terms of Use</Link>
              <Link href="/privacy-policy">Privacy Notice</Link>
              <Link href="/risk-disclosure">Risk Disclosure</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </nav>
          </div>

          <div>
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__contact">
              <li>
                <MailIcon />
                support@gemwealth-holm.com
              </li>
              <li>
                <PinIcon />
                Sydney, NSW, Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <span className="footer__copyright">
              © {new Date().getFullYear()} GEM WEALTHHOLM - ALL RIGHTS RESERVED
            </span>
            <nav className="footer__legal" aria-label="Footer legal">
              <Link href="/terms-of-use">Terms</Link>
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/risk-disclosure">Risk</Link>
              <Link href="/cookie-policy">Cookies</Link>
            </nav>
          </div>
          <p className="footer__disclaimer">
            Gem Wealthholm provides technology and information tools to support
            your own decision-making. It does not provide personalised financial
            advice, and nothing on this website is an offer or recommendation to
            buy or sell any asset. Market activity involves risk - never invest
            more than you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  )
}
