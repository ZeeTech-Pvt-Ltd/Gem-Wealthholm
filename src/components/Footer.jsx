import { Link } from 'react-router-dom'
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
              data into clear, practical insights — helping you make more
              informed decisions with confidence.
            </p>
          </div>

          <div>
            <h3 className="footer__heading">Company</h3>
            <nav className="footer__links" aria-label="Footer company links">
              <Link to="/about-us">About us</Link>
              <Link to="/guides">Guides</Link>
              <Link to="/faqs">FAQ</Link>
              <Link to="/contact-us">Get in touch</Link>
            </nav>
          </div>

          <div>
            <h3 className="footer__heading">Legal</h3>
            <nav className="footer__links" aria-label="Footer legal links">
              <Link to="/terms-of-use">Terms of Use</Link>
              <Link to="/privacy-policy">Privacy Notice</Link>
              <Link to="/risk-disclosure">Risk Disclosure</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
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
              © {new Date().getFullYear()} GEM WEALTHHOLM — ALL RIGHTS RESERVED
            </span>
            <nav className="footer__legal" aria-label="Footer legal">
              <Link to="/terms-of-use">Terms</Link>
              <Link to="/privacy-policy">Privacy</Link>
              <Link to="/risk-disclosure">Risk</Link>
              <Link to="/cookie-policy">Cookies</Link>
            </nav>
          </div>
          <p className="footer__disclaimer">
            Gem Wealthholm provides technology and information tools to support
            your own decision-making. It does not provide personalised financial
            advice, and nothing on this website is an offer or recommendation to
            buy or sell any asset. Market activity involves risk — never invest
            more than you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  )
}
