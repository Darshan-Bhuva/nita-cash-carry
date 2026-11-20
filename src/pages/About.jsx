import { Link } from 'react-router'
import owner from '../assets/owner.webp'
import shopFloor from '../assets/shop-floor.webp'
import storefrontNight from '../assets/storefront-night.webp'
import { PRODUCTS } from '../data/products.js'
import VisitCard from '../components/VisitCard.jsx'
import './pages.css'

export default function About() {
  return (
    <>
      <title>About | Nita Cash &amp; Carry, Ealing Road, Wembley</title>
      <meta
        name="description"
        content="Nita Cash & Carry is an Indian grocery shop and wholesaler on Ealing Road, Wembley, for families and trade buyers."
      />
      <section className="page wrap">
        <header className="page-head">
          <h1 className="page-title">A family shop on Ealing Road.</h1>
        </header>

        <div className="about-intro">
          <img className="about-owner" src={owner} alt="A member of the Nita team beside a tall stack of 20kg Tilda basmati rice sacks" width="1100" height="1957" fetchPriority="high" />
          <div className="about-text">
            {/* TODO(owner): replace with the real story: when the shop opened, who runs it, what customers come for. */}
            <p>Nita Cash &amp; Carry is a large Indian grocery store at 137-139 Ealing Road, Wembley.</p>
            <p>Families come in for the week’s rice, dal and spices. Restaurants, caterers and smaller shops come in for the same things by the sack and the case.</p>
            <p>The team on the floor knows where everything is. If you can’t find it, ask.</p>

            <ul className="facts">
              {/* TODO(owner): add "years on Ealing Road" once confirmed. */}
              <li><strong>{PRODUCTS.length}</strong> product aisles</li>
              <li><strong>7</strong> days a week, 9:30am to 7:30pm</li>
              <li><strong>Retail</strong> and wholesale</li>
            </ul>
          </div>
        </div>

        <div className="ways">
          <div className="way">
            <h2>Shopping for home</h2>
            <p>Walk the aisles and fill a basket. Everything for the week in one trip.</p>
          </div>
          <div className="way">
            <h2>Buying for business</h2>
            <p>Sacks, tins and cases for restaurants, temples and shops. Call ahead for large orders.</p>
          </div>
        </div>

        <div className="about-photos">
          <img src={shopFloor} alt="Inside the shop, looking down the main aisle toward the Nita Cash & Carry banner" width="1100" height="1467" loading="lazy" />
          <img src={storefrontNight} alt="The Nita Cash & Carry sign lit up at night" width="1100" height="1467" loading="lazy" />
        </div>

        <section className="about-visit" aria-labelledby="about-visit-title">
          <h2 className="section-title" id="about-visit-title">Come and see it.</h2>
          <VisitCard withMap={false} />
          <p className="section-more"><Link className="btn btn-light" to="/products">Browse the products</Link></p>
        </section>
      </section>
    </>
  )
}
