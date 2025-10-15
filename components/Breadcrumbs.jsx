// components/Breadcrumbs.jsx
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Breadcrumbs({ className = '' }) {
  const router = useRouter()
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!router.asPath) return

    // Формируем массив сегментов без query и без завершающего слэша
    const asPath = router.asPath.split('?')[0].replace(/\/+$/, '')
    const segments = asPath.split('/').filter(Boolean)

    // Базовый элемент — Главная
    const built = [{ name: 'Главная', href: '/' }]
    let acc = ''
    segments.forEach(seg => {
      acc += `/${seg}`
      const title = decodeURIComponent(seg).replace(/-/g, ' ')
      built.push({ name: title.charAt(0).toUpperCase() + title.slice(1), href: acc })
    })

    // Если на клиенте есть <h1>, используем его текст для последнего элемента (чтобы убрать slug)
    if (typeof document !== 'undefined') {
      const h1 = document.querySelector('h1')
      if (h1 && built.length > 0) {
        const lastIndex = built.length - 1
        const h1Text = h1.innerText.trim()
        if (h1Text) built[lastIndex].name = h1Text
      }
    }

    setItems(built)
  }, [router.asPath])

  if (items.length === 0) return null

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": it.name,
      "item": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://blitzgas.ru'}${it.href}`
    }))
  }

  return (
    <>
      <nav
        aria-label="Хлебные крошки"
        className={`mt-6 select-none ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-2 text-lg">
          {items.map((it, idx) => {
            const isLast = idx === items.length - 1
            return (
              <li key={it.href} className="flex items-center">
                <Link
                  href={it.href}
                  aria-current={isLast ? 'page' : undefined}
                  className={
                    // жирный, чуть больше шрифт, белая подсветка (underline)
                    `font-bold text-lg transition-colors
                     ${isLast ? 'text-white' : 'text-white/90 hover:text-white'} 
                     underline underline-offset-4 decoration-white/90 decoration-1`
                  }
                >
                  {it.name}
                </Link>

                {/* Разделитель (жирный, белый) */}
                {idx < items.length - 1 && (
                  <svg
                    className="w-4 h-4 mx-1 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </li>
            )
          })}
        </ol>
      </nav>

      {/* JSON-LD для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  )
}
