export const STORE = {
  name: 'Nita Cash & Carry',
  street: '137-139 Ealing Road',
  area: 'Wembley',
  postcode: 'HA0 4BP',
  phone: '+44 20 8903 1541',
  phoneHref: 'tel:+442089031541',
  domain: 'nitacashandcarry.com',
  hours: '9:30am to 7:30pm',
}

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const ADDRESS_QUERY = encodeURIComponent('137-139 Ealing Rd, Wembley HA0 4BP, United Kingdom')
export const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_QUERY}`
export const MAP_EMBED = `https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`

/* Today's weekday in London, whatever the visitor's timezone.
   Calculated during render: it is derived data, so no Effect or state is needed. */
export function londonToday() {
  return new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', weekday: 'long' }).format(new Date())
}
