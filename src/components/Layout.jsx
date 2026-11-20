import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import { STORE, DIRECTIONS } from '../data/store.js'

const YEAR = new Date().getFullYear()

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
]

/* On every route change: jump to the #hash target if there is one, otherwise to the top. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Close the menu on Escape while it is open; the cleanup removes the listener.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const links = (
    <>
      {NAV.map((n) => (
        <NavLink key={n.to} to={n.to} end={n.end} onClick={close}>{n.label}</NavLink>
      ))}
      <Link to="/#visit" onClick={close}>Visit</Link>
    </>
  )

  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Nita Cash and Carry, home" onClick={close}>
        <span className="wordmark-nita">NITA</span>
        <span className="wordmark-sub">CASH &amp; CARRY</span>
      </Link>
      <nav className="site-nav" aria-label="Main">{links}</nav>
      <div className="header-actions">
        <a className="btn btn-primary" href={STORE.phoneHref}>Call us</a>
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Menu" hidden={!open}>
        {links}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>&copy; {YEAR} {STORE.name}</span>
      <span>{STORE.street}, {STORE.area} {STORE.postcode}</span>
      <a href={STORE.phoneHref}>{STORE.phone}</a>
    </footer>
  )
}

/* Phones only: Call and Directions always within thumb reach. */
function ActionBar() {
  return (
    <div className="action-bar">
      <a className="btn btn-primary" href={STORE.phoneHref}>Call</a>
      <a className="btn btn-light" href={DIRECTIONS} target="_blank" rel="noreferrer">Directions</a>
    </div>
  )
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ActionBar />
    </>
  )
}
