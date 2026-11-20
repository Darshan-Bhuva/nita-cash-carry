/*
  Product categories for the Products pages.

  TODO(owner): confirm every category, highlight and brand with the owner and remove anything
  the shop doesn't stock. "Fresh vegetables" and "Frozen" from the plan are left out until the
  owner confirms he sells them. No prices on purpose: they change and cause arguments in the shop.

  Stock photos and videos: all from Pexels (https://www.pexels.com/license/), free for commercial
  use, no attribution required. Credited here anyway. Replace with real shelf photos when possible.
    rice-flour        Joaquin Reyes Ramos   https://www.pexels.com/photo/38781904/
    dals-pulses       Kamakshi              https://www.pexels.com/photo/34693984/
    spices-masalas    Kamakshi              https://www.pexels.com/photo/30296301/
    snacks-namkeen    Aditya Mara           https://www.pexels.com/photo/17480807/
    sweets-mithai     Jahra Tasfia Reza     https://www.pexels.com/photo/40000006/
    pickles-chutneys  Ambika                https://www.pexels.com/photo/7812134/
    oils-ghee         Towfiqu barbhuiya     https://www.pexels.com/photo/11809347/
    pooja-festival    Ravi Kant             https://www.pexels.com/photo/40897783/
    kitchenware       Milton Das            https://www.pexels.com/photo/35041664/
    drinks-tea        Sagar Mali            https://www.pexels.com/photo/36662612/
    video banner      Towfiqu barbhuiya     https://www.pexels.com/video/40071520/
    video spices      Sudheir Kumar         https://www.pexels.com/video/28283517/
    video chai        Hitesh Paldiya        https://www.pexels.com/video/37649378/
*/

import spicesVideo from '../assets/products/video-spices-masalas.mp4'
import spicesPoster from '../assets/products/poster-spices-masalas.webp'
import teaVideo from '../assets/products/video-drinks-tea.mp4'
import teaPoster from '../assets/products/poster-drinks-tea.webp'

const card = import.meta.glob('../assets/products/*-card.webp', { eager: true, import: 'default' })
const hero = import.meta.glob('../assets/products/*-hero.webp', { eager: true, import: 'default' })
const img = (set, slug, kind) => set[`../assets/products/${slug}-${kind}.webp`]

const CATEGORIES = [
  {
    slug: 'rice-flour',
    name: 'Rice & flour',
    short: 'Basmati and sona masoori by the bag or 20kg sack, atta and besan.',
    intro: 'Rice is the backbone of the shop. Sacks are stacked at the door, from everyday basmati to sona masoori, with chapati flours, besan and rice flour on the shelves inside.',
    alt: 'Raw white rice grains with a metal scoop',
    highlights: ['Basmati', 'Sona masoori', 'Chapati atta', 'Besan', 'Rice flour'],
    brands: ['Tilda', 'Daawat', 'Aashirvaad', 'Elephant Atta'],
    packs: 'From 1kg bags to 20kg sacks',
  },
  {
    slug: 'dals-pulses',
    name: 'Dals & pulses',
    short: 'Toor, moong, chana, urad, masoor and rajma, small bags to sacks.',
    intro: 'A full aisle of lentils, beans and grains. Split or whole, washed or unwashed, in the sizes a family or a kitchen needs.',
    alt: 'Red lentils heaped on wooden spoons',
    highlights: ['Toor dal', 'Moong', 'Chana dal', 'Urad', 'Masoor', 'Rajma'],
    brands: ['TRS', 'East End', 'Natco'],
    packs: 'From 500g packs to catering sacks',
  },
  {
    slug: 'spices-masalas',
    name: 'Spices & masalas',
    short: 'Whole and ground spices, ready blends, loose and boxed.',
    intro: 'Whole spices for tempering, ground spices for everyday cooking and ready masala blends for when there is no time. Small packs for the home, tubs for the trade.',
    alt: 'Bowls of colourful Indian spices on a wooden table',
    highlights: ['Garam masala', 'Turmeric', 'Whole cumin', 'Kashmiri chilli', 'Hing'],
    brands: ['TRS', 'East End', 'MDH', 'Everest'],
    packs: 'From 100g packs to 5kg catering tubs',
    video: spicesVideo,
    poster: spicesPoster,
  },
  {
    slug: 'snacks-namkeen',
    name: 'Snacks & namkeen',
    short: 'Farsan, chakri, chevda, bhujia and biscuits.',
    intro: 'Savoury snacks for tea time, guests and festivals. Single packs, family packs and cases.',
    alt: 'A close-up of crunchy fried Indian snacks',
    highlights: ['Bhujia', 'Chevda', 'Chakri', 'Mathri', 'Biscuits'],
    brands: ['Haldiram’s', 'Bikano', 'Parle'],
    packs: 'From single packs to full cases',
  },
  {
    slug: 'sweets-mithai',
    name: 'Sweets & mithai',
    short: 'Boxed sweets and festival gift boxes.',
    intro: 'Boxed mithai for visits, pujas and celebrations, with gift boxes around Diwali and other festivals.',
    alt: 'Round laddoos on a clay plate',
    highlights: ['Laddoo', 'Barfi', 'Soan papdi', 'Gulab jamun', 'Gift boxes'],
    brands: ['Haldiram’s', 'Bikano'],
    packs: 'Single boxes to festival trays',
  },
  {
    slug: 'pickles-chutneys',
    name: 'Pickles & chutneys',
    short: 'Achar, chutneys and cooking pastes.',
    intro: 'Mango, lime and mixed achar, sweet and hot chutneys, and the ginger, garlic and curry pastes that save time on a weeknight.',
    alt: 'Red mango pickle in a ceramic jar next to raw mangoes',
    highlights: ['Mango achar', 'Lime pickle', 'Mint chutney', 'Ginger garlic paste', 'Curry pastes'],
    brands: ['Patak’s', 'Mother’s Recipe', 'Ashoka'],
    packs: 'From small jars to catering tubs',
  },
  {
    slug: 'oils-ghee',
    name: 'Oils & ghee',
    short: 'Ghee, mustard, sunflower and rice bran oil.',
    intro: 'Pure ghee for the tadka and the roti, and the cooking oils an Indian kitchen goes through fast.',
    alt: 'A small bottle of golden oil beside a coconut shell',
    highlights: ['Ghee', 'Mustard oil', 'Sunflower oil', 'Rice bran oil', 'Coconut oil'],
    brands: ['KTC', 'Amul', 'Fortune'],
    packs: 'From 500ml bottles to 15 litre tins',
  },
  {
    slug: 'pooja-festival',
    name: 'Pooja & festival',
    short: 'Diyas, agarbatti, kumkum and festival goods.',
    intro: 'Everything for the home mandir and the festival calendar: lamps, wicks, incense, kumkum and seasonal decorations.',
    alt: 'A row of lit clay oil lamps',
    highlights: ['Diyas', 'Agarbatti', 'Kumkum', 'Cotton wicks', 'Garlands'],
    brands: ['Cycle', 'Hem'],
    packs: 'Single items to boxed sets',
  },
  {
    slug: 'kitchenware',
    name: 'Kitchenware',
    short: 'Steel pots, tawas, strainers and pressure cookers.',
    intro: 'The tools of an Indian kitchen hang along a full wall: steel pots and thalis, tawas, strainers, graters, rolling pins and pressure cookers.',
    alt: 'A stainless steel pot of curry with curry leaves',
    highlights: ['Pressure cookers', 'Tawa', 'Steel thali', 'Strainers', 'Belan'],
    brands: ['Prestige', 'Hawkins'],
    packs: 'Home sizes and catering sizes',
  },
  {
    slug: 'drinks-tea',
    name: 'Drinks & tea',
    short: 'Chai, Rooh Afza, juices and soft drinks.',
    intro: 'Loose and bagged tea for proper chai, sherbets and syrups, and drinks by the bottle or the case.',
    alt: 'Masala chai in clay cups',
    highlights: ['Chai', 'Rooh Afza', 'Mango juice', 'Coffee', 'Soft drinks'],
    brands: ['Brooke Bond Taj Mahal', 'Wagh Bakri', 'Hamdard'],
    packs: 'Single bottles to full cases',
    video: teaVideo,
    poster: teaPoster,
  },
]

export const PRODUCTS = CATEGORIES.map((c) => ({
  ...c,
  image: img(card, c.slug, 'card'),
  heroImage: img(hero, c.slug, 'hero'),
}))

export const findCategory = (slug) => PRODUCTS.find((c) => c.slug === slug)
