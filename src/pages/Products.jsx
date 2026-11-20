import { useState } from 'react'
import { Link } from 'react-router'
import { PRODUCTS } from '../data/products.js'
import { STORE } from '../data/store.js'
import AmbientVideo from '../components/AmbientVideo.jsx'
import bannerVideo from '../assets/products/video-banner.mp4'
import bannerPoster from '../assets/products/poster-banner.webp'
import './pages.css'

const matches = (c, q) =>
  c.name.toLowerCase().includes(q) || c.short.toLowerCase().includes(q) || c.highlights.some((h) => h.toLowerCase().includes(q))

export default function Products() {
  const [query, setQuery] = useState('')
  // Derived from state during render, so there is no Effect and no second copy of the list.
  const q = query.trim().toLowerCase()
  const shown = q ? PRODUCTS.filter((c) => matches(c, q)) : PRODUCTS

  return (
    <>
      <title>Products | Nita Cash &amp; Carry, Wembley</title>
      <meta
        name="description"
        content="Rice, dals, spices, snacks, sweets, oils, ghee, pooja items and kitchenware at Nita Cash & Carry, Ealing Road, Wembley. Retail and wholesale."
      />
      <section className="page wrap">
        <header className="page-head">
          <h1 className="page-title">Products</h1>
          <p className="page-lede">{PRODUCTS.length} aisles of Indian groceries, for home cooks and trade buyers.</p>
        </header>

        <AmbientVideo className="banner-media" src={bannerVideo} poster={bannerPoster} />

        <div className="search">
          <label htmlFor="product-search">Search the aisles</label>
          <input
            id="product-search"
            type="search"
            placeholder="Try ghee, toor or diyas"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </div>

        <p className="visually-hidden" aria-live="polite">
          {shown.length} {shown.length === 1 ? 'category' : 'categories'} shown
        </p>

        {shown.length > 0 ? (
          <ul className="product-grid">
            {shown.map((c, i) => (
              <li key={c.slug}>
                <Link className="product-card" to={`/products/${c.slug}`}>
                  <img src={c.image} alt={c.alt} width="800" height="1000" loading={i < 2 ? 'eager' : 'lazy'} />
                  <h2>{c.name}</h2>
                  <p>{c.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty">
            Nothing matches “{query.trim()}”. The shelves hold far more than this list, so{' '}
            <a href={STORE.phoneHref}>call and ask</a>.
          </p>
        )}

        <aside className="trade-strip">
          <p>Buying for a restaurant, temple or shop? Ask about bulk prices.</p>
          <a className="btn btn-light" href={STORE.phoneHref}>Call {STORE.phone}</a>
        </aside>
      </section>
    </>
  )
}
