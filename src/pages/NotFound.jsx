import { Link } from 'react-router'
import './pages.css'

export default function NotFound() {
  return (
    <>
      <title>Page not found | Nita Cash &amp; Carry</title>
      <meta name="robots" content="noindex" />
      <section className="page wrap not-found">
        <h1 className="page-title">This aisle doesn’t exist.</h1>
        <p className="page-lede">The page may have moved. Try one of these instead.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/">Home</Link>
          <Link className="btn btn-light" to="/products">Products</Link>
          <Link className="btn btn-light" to="/about">About</Link>
        </div>
      </section>
    </>
  )
}
