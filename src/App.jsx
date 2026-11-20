import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

// Declared at module level (not inside a component) so each page's code is loaded once and cached.
const Products = lazy(() => import('./pages/Products.jsx'))
const ProductCategory = lazy(() => import('./pages/ProductCategory.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

const Loading = () => <div className="page-loading" aria-busy="true" />

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Suspense fallback={<Loading />}><Products /></Suspense>} />
        <Route path="products/:slug" element={<Suspense fallback={<Loading />}><ProductCategory /></Suspense>} />
        <Route path="about" element={<Suspense fallback={<Loading />}><About /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  )
}
