import { Link, useParams } from 'react-router'
import { PRODUCTS, findCategory } from '../data/products.js'
import { STORE, DIRECTIONS } from '../data/store.js'
import AmbientVideo from '../components/AmbientVideo.jsx'
import NotFound from './NotFound.jsx'
import './pages.css'

export default function ProductCategory() {
  const { slug } = useParams()
  const c = findCategory(slug)
  if (!c) return <NotFound />

  const more = PRODUCTS.filter((p) => p.slug !== c.slug).slice(0, 4)

  return (
    <>
      <title>{`${c.name} | Nita Cash & Carry, Wembley`}</title>
      <meta name="description" content={`${c.short} At Nita Cash & Carry, 137-139 Ealing Road, Wembley.`} />
      <article className="page wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/products">Products</Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{c.name}</span>
        </nav>

        {c.video ? (
          <AmbientVideo className="detail-media" src={c.video} poster={c.poster} alt={c.alt} />
        ) : (
          <img className="detail-media" src={c.heroImage} alt={c.alt} width="1400" height="875" fetchPriority="high" />
        )}

        <div className="detail-body">
          <div>
            <h1 className="page-title">{c.name}</h1>
            <p className="detail-intro">{c.intro}</p>
            <p className="detail-packs">{c.packs}</p>
          </div>

          <div className="detail-side">
            <h2>Popular here</h2>
            <ul className="chips">
              {c.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>

            <h2>Brands we carry</h2>
            <ul className="brand-list">
              {c.brands.map((b) => <li key={b}>{b}</li>)}
            </ul>

            <div className="detail-actions">
              <a className="btn btn-primary" href={STORE.phoneHref}>Call to check stock</a>
              <a className="btn btn-light" href={DIRECTIONS} target="_blank" rel="noreferrer">Get directions</a>
            </div>
          </div>
        </div>

        <section className="more" aria-labelledby="more-title">
          <h2 id="more-title" className="more-title">More aisles</h2>
          <ul className="more-row">
            {more.map((p) => (
              <li key={p.slug}>
                <Link className="product-card" to={`/products/${p.slug}`}>
                  <img src={p.image} alt={p.alt} width="800" height="1000" loading="lazy" />
                  <h3>{p.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  )
}
