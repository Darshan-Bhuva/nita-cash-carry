import { STORE, DAYS, DIRECTIONS, MAP_EMBED, londonToday } from '../data/store.js'

export default function VisitCard({ withMap = true }) {
  const today = londonToday()
  return (
    <div className={`visit-card${withMap ? '' : ' no-map'}`}>
      <div className="visit-info">
        <address>
          {STORE.street}<br />{STORE.area}, {STORE.postcode}
        </address>
        <a className="phone" href={STORE.phoneHref}>{STORE.phone}</a>
        <dl className="hours">
          {DAYS.map((d) => (
            <div key={d} className={d === today ? 'is-today' : undefined}>
              <dt>{d}</dt>
              <dd>{STORE.hours}</dd>
            </div>
          ))}
        </dl>
        <a className="btn btn-primary" href={DIRECTIONS} target="_blank" rel="noreferrer">Get directions</a>
      </div>
      {withMap && (
        <div className="visit-map">
          <iframe
            title="Map showing Nita Cash & Carry, 137-139 Ealing Road, Wembley"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}
