// pages/categories/[...slug].js
import { getCategories, getProductsByCategory, buildCategorySeo } from '../../lib/equipmentHelpers'
import CategoryTemplate from '../../components/CategoryTemplate'
import PageLayout from '../../components/PageLayout'

export async function getStaticPaths() {
  const cats = getCategories()
  const paths = cats.map(c => ({ params: { slug: [c.slug] } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const slugParts = params.slug || []
  const catSlug = slugParts[0]
  const products = getProductsByCategory(catSlug) || []
  const seo = buildCategorySeo(catSlug)
  return { props: { catSlug, products, seo } }
}

export default function CategoryPage({ catSlug, products, seo }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blitzgas.ru'
  const canonical = `${siteUrl}/${catSlug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${seo.title} — Блицгаз`,
    "url": canonical
  }

  return (
    <PageLayout
      title={seo.title}
      description={seo.desc}
      canonical={canonical}
      heroImage={`/assets/${catSlug}-hero.png`}
      jsonLd={jsonLd}
    >
      <CategoryTemplate title={seo.title} products={products} categorySlug={catSlug} />
    </PageLayout>
  )
}
