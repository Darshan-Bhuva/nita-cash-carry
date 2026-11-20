# Plan: Products pages, About page, mobile-first pass

Site: `d:\impeccible\nita-site` (React 19 + Vite 8, single page today in `src/App.jsx`, styles in `src/App.css` and `src/index.css`).

## Goals

1. **Products** section: one page listing the product categories, and a detail page for each category, so a visitor quickly sees what the shop sells. Use stock photos and short stock videos so it looks finished for the demo.
2. **About** page: who runs the shop, how long it has been on Ealing Road, retail and wholesale, what makes it worth the trip.
3. **Mobile first**: most visitors will be on a phone. Every page must work well at 360px wide before anything else.
4. **Remove** the "Open now · Daily 9:30am to 7:30pm" pill from the top of the home page hero.

## Open decisions (confirm before building)

- **Opening pill.** The request says "do add it anywhere". This plan assumes it means *don't* add it anywhere: the pill is removed and not moved. The full weekly hours list in the "Come to the shop" section stays. If you meant "put it somewhere else", the simplest place is a line under the address in the Visit section.
- **Phone number (confirmed).** +44 20 8903 1541 is correct, as already set in `STORE.phone`. Ignore the 020 8863 7770 number on Nextdoor and Bizseek.
- **Real stock.** Category and brand lists below are typical for an Indian cash & carry. Confirm with the owner what he actually stocks (especially fresh vegetables, frozen food, pooja items) and drop anything he doesn't carry.

---

## 1. Routing

There is no router yet. Add **React Router v7** in declarative mode (`npm install react-router`), so each page has its own shareable URL that people can send on WhatsApp.

| URL | Page |
|---|---|
| `/` | Home (current page, minus the pill) |
| `/products` | All categories |
| `/products/:slug` | One category, e.g. `/products/spices-masalas` |
| `/about` | About |
| `*` | Simple "page not found" with links back |

Implementation notes:
- Wrap the app in `<BrowserRouter>` in `src/main.jsx`. Move the current home sections into `src/pages/Home.jsx`. Add `src/pages/Products.jsx`, `src/pages/ProductCategory.jsx`, `src/pages/About.jsx`, `src/pages/NotFound.jsx`.
- Keep `Header` and `Footer` in a shared layout component with an `<Outlet />`.
- Load the three new pages with `React.lazy` + `<Suspense>` so the home page stays fast on mobile data.
- Scroll to the top on every route change (small `ScrollToTop` component using `useLocation`).
- Give every page its own `<title>` and `<meta name="description">`. React 19 renders these from inside components natively, so no extra library is needed.
- Home page anchor links (`#aisles`, `#visit`) must still work from other pages: use `/#visit` style links.
- **Hosting:** the host needs a fallback that serves `index.html` for unknown paths (Netlify `_redirects`, Vercel `rewrites`, or Cloudflare Pages default). Without it, refreshing `/about` gives a 404. Add the right file for whichever host is chosen.

## 2. Product data

All product content lives in one file, `src/data/products.js`, so pages stay simple and the owner's real list can replace it later.

Each category:

```js
{
  slug: 'spices-masalas',
  name: 'Spices & masalas',
  short: 'Whole and ground spices, ready blends, loose and boxed.',
  intro: '2–3 sentence description for the detail page.',
  image: spicesImg,          // imported from src/assets/products/
  video: spicesVideo,        // optional, only a few categories
  highlights: ['Garam masala', 'Turmeric', 'Whole cumin', 'Kashmiri chilli'],
  brands: ['TRS', 'East End', 'MDH', 'Everest'],   // confirm with owner
  packs: 'From 100g packs to 5kg catering tubs',
}
```

Proposed categories (confirm with owner):

1. Rice & flour (basmati, sona masoori, atta, besan, rice flour)
2. Dals & pulses (toor, moong, chana, urad, masoor, rajma)
3. Spices & masalas
4. Snacks & namkeen (farsan, chakri, chevda, biscuits)
5. Sweets & mithai (boxed sweets, festival boxes)
6. Pickles, chutneys & pastes
7. Oils & ghee
8. Fresh vegetables & herbs (only if sold)
9. Frozen (parathas, samosas, vegetables, only if sold)
10. Pooja & festival items (diyas, agarbatti, kumkum)
11. Kitchenware (steel, tawa, strainers, pressure cookers)
12. Drinks & tea (chai, Rooh Afza, juices)

Do **not** show prices. They change, and wrong prices on the site cause arguments in the shop.

## 3. Products page (`/products`)

Mobile layout, top to bottom:

1. Short heading and one line: "Over X products across 12 aisles, for home cooks and trade buyers."
2. **Ambient video banner**: one short muted loop (spices being poured, a busy market stall). Text over it is avoided; the heading sits above it so it stays readable.
3. **Search/filter field**: filters categories by name or highlight as the user types ("ghee", "toor"). Plain client-side filter over `products.js`; no backend.
4. **Category grid**: 2 columns on phones, 3 on tablets, 4 on desktop. Each card: photo (4:5), category name, one-line `short` text. The whole card is the link (large tap target).
5. **Trade buyers strip**: "Buying for a restaurant, temple or shop? Ask about bulk prices" with a Call button.
6. Footer.

## 4. Category detail page (`/products/:slug`)

1. Breadcrumb: Products / Spices & masalas.
2. Hero photo (or video for the few categories that have one), 16:10 on mobile.
3. Name, `intro` text, `packs` line.
4. "Popular here" chips from `highlights`.
5. "Brands we carry" as a simple list (text, not logos, to avoid trademark and image-quality problems).
6. Action row: **Call to check stock**, **Get directions**.
7. "More aisles" row: 3–4 other categories, horizontally scrollable on mobile.
8. Unknown slug shows the Not Found page.

## 5. About page (`/about`)

Use the shop's own photos already in `src/assets` (currently unused: `owner.webp`, `shop-floor.webp`, `storefront-night.webp`). Real photos matter most here; stock photos of "a shop owner" would look fake.

1. Heading: short and plain, e.g. "A family shop on Ealing Road."
2. Owner photo + 2–3 short paragraphs: when it opened, who runs it, what customers come for. **Placeholder text until the owner provides the real story**, clearly marked in the code with `TODO(owner)`.
3. Facts row (3 items, only if true): years on Ealing Road, number of products, retail and wholesale.
4. Retail vs wholesale: two small cards explaining each.
5. Shop floor photo and night storefront photo.
6. Visit block: address, phone, hours summary, Get directions button. Reuse the `STORE` constant; don't duplicate data.

## 6. Stock photos and videos

Sources (free for commercial use, no attribution required, but credit them in a comment in `products.js` anyway):
- Photos: [Unsplash](https://unsplash.com/license), [Pexels](https://www.pexels.com/license/)
- Videos: [Pexels Videos](https://www.pexels.com/videos/), [Pixabay](https://pixabay.com/service/license-summary/)

Rules:
- Use stock only for **close-ups of products and food** (spice heaps, dal in bowls, ghee jar). Use the shop's real photos for anything that claims to show *the shop*. Plan to swap stock for real shelf photos after the owner signs.
- Pick images with a consistent warm, natural-light look so the grid doesn't look like a random collage.
- Download originals into `assets-raw/products/`, then extend `optimize.mjs` to output WebP into `src/assets/products/`: 800px wide for cards, 1400px for detail heroes, quality ~75. Target under 120 KB per card image.
- Every image gets `width`/`height` attributes, `loading="lazy"` (except the first visible one), and real `alt` text.
- Videos: 3 or 4 at most across the whole site. Each 6–10 seconds, 720p, H.264 MP4, no audio track, under 2 MB. Convert with ffmpeg:
  `ffmpeg -i in.mp4 -t 8 -vf scale=-2:720 -an -c:v libx264 -crf 28 -preset slow -movflags +faststart out.mp4`
- Video element: `autoPlay muted loop playsInline preload="none"` plus a `poster` image (a frame from the video as WebP).
- Show only the poster image (no autoplay) when the user has `prefers-reduced-motion: reduce` or `navigator.connection.saveData` is on. Put this logic in one small `AmbientVideo` component.

## 7. Mobile-first pass (whole site)

Current problem: under 640px the nav is hidden entirely (`.site-nav { display: none }`), so on phones there would be no way to reach Products or About.

- **Header on phones:** wordmark + a "Menu" button that opens a full-width panel with Home, Products, About, Visit. Button uses `aria-expanded` and `aria-controls`; panel closes on link tap and on Escape. Keep the Call button visible in the header.
- **Sticky bottom action bar on phones only** (≤640px): Call · Directions. Add bottom padding to `<main>` so it never covers content. Respect `env(safe-area-inset-bottom)` for iPhones.
- Tap targets at least 44×44px. Body text at least 16px. No horizontal scrolling at 360px.
- Set `<meta name="viewport" content="width=device-width, initial-scale=1">` (check `index.html`) and `theme-color` to the brand green.
- Write CSS mobile-first: base styles for phones, then `min-width` media queries for larger screens. The new pages follow this; existing `max-width` rules in `App.css` can stay unless they conflict.
- Map iframe: fixed aspect ratio on phones so it doesn't take the full screen height.
- Test widths: 360, 390, 414, 768, 1280. Test on a real phone over 4G if possible (Chrome DevTools "Slow 4G" otherwise).

## 8. Remove the opening pill

In `src/App.jsx` → `Hero`: delete the `<p className="pill ...">` element and remove the `status` prop from `Hero`. Delete the now-unused `.pill` and `.dot` rules in `App.css`. Keep `useLondonStatus`: the Visit section still uses `status.today` to highlight today's row. The `isOpen` and `label` values become unused; remove them from the hook.

## 9. Using the React docs MCP server

The `react-docs` MCP server is configured in `d:\impeccible\.kiro\settings\mcp.json` (and in the user config). Whoever implements this plan (Kiro chat, Kiro CLI or a workflow agent) must use it:

- **Before writing React code that uses an API**, call `search_react_docs` and read the result. Only call `get_doc` when the search snippet isn't enough. Don't rely on memory for React 19 behaviour.
- Look these up specifically:
  - `lazy` and `Suspense` (code-splitting the new pages)
  - `<title>` and `<meta>` components (React 19 document metadata)
  - `useEffect` cleanup (ScrollToTop, menu Escape listener, reduced-motion listener)
  - "You Might Not Need an Effect" (the product search filter should be derived state, not an effect)
  - Rendering lists and keys (category grid, chips)
- If results look outdated, run `update_docs` once and search again.
- React Router is **not** covered by this server. For router APIs, use the official docs at reactrouter.com (declarative mode).
- Note in the final summary which docs were consulted for which decision.

These rules are also saved as the steering file `d:\impeccible\.kiro\steering\react-mcp.md`, so they apply in every session.

## 10. Build order

1. Remove the pill (section 8). Small, safe, visible.
2. Add router, layout, mobile menu, bottom action bar (sections 1 and 7).
3. Add `products.js` with placeholder images, then the Products and category pages (sections 2–4).
4. Source and optimise stock photos and videos (section 6).
5. About page (section 5).
6. Mobile test pass at all widths, then `npm run lint` and `npm run build`.

## Done when

- `/`, `/products`, every `/products/:slug`, `/about` and an unknown URL all render, both by clicking and by loading the URL directly in `npm run preview`.
- The opening pill is gone from the home page; the hours list in Visit still highlights today.
- At 360px wide: no horizontal scroll, menu opens and closes, bottom bar visible and not covering content, all buttons easy to tap.
- Product search filters categories as you type.
- Videos don't autoplay with reduced motion turned on; each video is under 2 MB; card images under ~120 KB.
- `npm run lint` and `npm run build` pass with no errors.
