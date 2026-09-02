import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import GemLogo from './GemLogo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const navClass = ({ isActive }) =>
    `header__link${isActive ? ' header__link--active' : ''}`

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" aria-label="Gem Wealthholm — home">
          <GemLogo />
        </Link>

        <button
          className={`header__hamburger${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={navClass}>
            About us
          </NavLink>
          <NavLink to="/contact-us" className={navClass}>
            Contact us
          </NavLink>
          <NavLink to="/faqs" className={navClass}>
            FAQ
          </NavLink>
          <NavLink to="/login" className={`header__link header__cta btn btn--ink`}>
            Sign up
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
