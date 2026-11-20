import { Link } from 'react-router'
import storefrontDay from '../assets/storefront-day.webp'
import aislePulses from '../assets/aisle-pulses.webp'
import aisleKitchenware from '../assets/aisle-kitchenware.webp'
import chaat from '../assets/chaat.webp'
import riceEntrance from '../assets/rice-entrance.webp'
import { STORE, DIRECTIONS } from '../data/store.js'
import VisitCard from '../components/VisitCard.jsx'

// Real shop photos, each linking to its product category.
const AISLES = [
  { slug: 'rice-flour', name: 'Rice & flour', img: riceEntrance, alt: 'Stacked 20kg sacks of basmati rice at the shop entrance' },
  { slug: 'dals-pulses', name: 'Dals & pulses', img: aislePulses, alt: 'An aisle of shelves packed with bags of dals and pulses' },
  { slug: 'kitchenware', name: 'Kitchenware', img: aisleKitchenware, alt: 'A wall of strainers and wooden kitchen tools' },
  { slug: 'snacks-namkeen', name: 'Snacks & chaat', img: chaat, alt: 'Dahi sev chaat in a white dish' },
]

const Scribble = ({ d, className }) => (
  <span className={`scribble ${className}`} aria-hidden="true">
    <svg viewBox="0 0 180 80" width="100%"><path d={d} /></svg>
  </span>
)

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <h1>
        Everything for the Indian kitchen,{' '}
        <span className="mark">
          under one roof
          <svg viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
            <path vectorEffect="non-scaling-stroke" d="M40 46 C 20 20, 120 6, 190 8 C 270 10, 296 34, 270 56 C 240 76, 110 78, 50 62 C 20 54, 14 40, 30 30" />
          </svg>
        </span>
      </h1>
      <div className="hero-actions">
        <a className="btn btn-primary" href={DIRECTIONS} target="_blank" rel="noreferrer">Get directions</a>
        <Link className="btn btn-light" to="/products">See the products</Link>
      </div>

      <div className="stage">
        <figure className="stage-photo">
          <img
            src={storefrontDay}
            alt="The Nita Cash & Carry shopfront on Ealing Road with shoppers outside"
            width="1800" height="1350" fetchPriority="high"
          />
        </figure>
        <aside className="float-card float-left">
          <h2>Shop for home or buy in bulk</h2>
          <p>Retail and wholesale, one store.</p>
        </aside>
        <aside className="float-card float-right">
          <span className="label">Find us</span>
          <h2>Ealing Road</h2>
          <p>{STORE.area} {STORE.postcode}</p>
        </aside>
        <Scribble className="scribble-a" d="M2 40 C 40 10, 110 6, 178 30" />
        <Scribble className="scribble-b" d="M2 10 C 60 70, 130 70, 178 36" />
      </div>
    </section>
  )
}

function Aisles() {
  return (
    <section className="section wrap" id="aisles" aria-labelledby="aisles-title">
      <h2 className="section-title" id="aisles-title">A big store, stocked deep.</h2>
      <ul className="aisles-grid">
        {AISLES.map((a) => (
          <li className="aisle" key={a.slug}>
            <Link to={`/products/${a.slug}`}>
              <img src={a.img} alt={a.alt} width="600" height="750" loading="lazy" />
              <h3>{a.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
      <p className="section-more">
        <Link className="btn btn-light" to="/products">All products</Link>
      </p>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <title>Nita Cash &amp; Carry | Indian grocery, retail and wholesale in Wembley</title>
      <meta
        name="description"
        content="Nita Cash & Carry at 137-139 Ealing Road, Wembley HA0 4BP. A large Indian grocery store for shoppers and trade buyers. Open daily 9:30am to 7:30pm."
      />
      <Hero />
      <Aisles />
      <section className="section wrap" id="visit" aria-labelledby="visit-title">
        <h2 className="section-title" id="visit-title">Come to the shop.</h2>
        <VisitCard />
      </section>
    </>
  )
}
