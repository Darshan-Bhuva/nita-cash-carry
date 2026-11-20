import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'

// Shop photos (the owner's own), assets-raw/raw-*.jpg -> src/assets/*.webp
const jobs = [
 ['raw-8','storefront-day',1800],['raw-7','storefront-night',1100],['raw-1','aisle-pulses',987],
 ['raw-5','aisle-kitchenware',829],['raw-4','shop-floor',1100],['raw-3','chaat',1400],
 ['raw-2','rice-entrance',1100],['raw-6','owner',1100]]
for (const [i,o,w] of jobs){
  const meta=await sharp(`assets-raw/${i}.jpg`).metadata(); const t=(i==='raw-1'||i==='raw-5')?4:0
  await sharp(`assets-raw/${i}.jpg`).rotate().extract({left:t,top:t,width:meta.width-2*t,height:meta.height-2*t}).resize({width:w,withoutEnlargement:true}).webp({quality:78}).toFile(`src/assets/${o}.webp`)
}

// Stock product photos (Pexels), assets-raw/products/<slug>.jpg
// -> src/assets/products/<slug>-card.webp (800x1000, 4:5) and <slug>-hero.webp (1400x875, 16:10)
// Encode at quality 75, stepping down until the file is under maxKB (busy textures compress badly).
async function fit(src, w, h, maxKB, out) {
  for (let q = 75; ; q -= 7) {
    let img = sharp(src).rotate().resize(w, h, { fit: 'cover', position: 'attention' })
    if (q < 55) img = img.blur(0.6) // soften grain so very busy photos fit the budget
    const buf = await img.webp({ quality: q, effort: 6 }).toBuffer()
    if (buf.length <= maxKB * 1024 || q <= 33) return writeFile(out, buf) // write as-is; piping back through sharp would re-encode
  }
}

const slugs = ['rice-flour','dals-pulses','spices-masalas','snacks-namkeen','sweets-mithai',
  'pickles-chutneys','oils-ghee','pooja-festival','kitchenware','drinks-tea']
for (const s of slugs) {
  const src = `assets-raw/products/${s}.jpg`
  await fit(src, 800, 1000, 120, `src/assets/products/${s}-card.webp`)
  await fit(src, 1400, 875, 200, `src/assets/products/${s}-hero.webp`)
}

// Video poster frames -> src/assets/products/poster-<name>.webp (1400x875)
for (const v of ['banner','spices-masalas','drinks-tea']) {
  await sharp(`assets-raw/products/poster-${v}.jpg`).resize(1400, 875, { fit: 'cover' }).webp({ quality: 72 }).toFile(`src/assets/products/poster-${v}.webp`)
}
