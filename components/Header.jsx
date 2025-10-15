// components/Header.jsx
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const isHome = router.pathname === '/'

  // Закрываем мобильное меню при смене страницы
  useEffect(() => {
    const handleRouteChange = () => setOpen(false)
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router.events])

  // Закрытие по ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const navLinks = [
    { href: '#about', label: 'Технология' },
    { href: '#config', label: 'Конфигуратор' },
    { href: '/about', label: 'О компании' },
    { href: '#footer', label: 'Контакты' }, // теперь ведёт на футер (на всех страницах)
  ]

  // Генерация корректного href:
  // - если текущая страница — главная, оставляем просто "#anchor"
  // - если не на главной, делаем "/#anchor" чтобы сначала перейти на главную, а затем скроллить (см. _app.jsx)
  const getHref = (href) => {
    if (href.startsWith('#')) {
      return isHome ? href : `/${href}`
    }
    return href
  }

  return (
    <header
      id="header"
      className="fixed w-full top-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-6 relative flex items-center justify-between h-16">
        {/* Логотип */}
        <div className="flex items-center">
          <Link href="/" aria-label="На главную" className="flex items-center">
            <Image
              src="/assets/bg-logo.svg"
              alt="Блицгаз"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Контакты — центр (pointer-events-none чтобы не блокировать навигацию;
            внутренним ссылкам даём pointer-events-auto) */}
        <div className="hidden xl:flex xl:items-center xl:gap-8 absolute inset-x-0 justify-center pointer-events-none">
          <a
            href="mailto:info@blitzgas.ru"
            className="text-black text-sm font-medium hover:text-gray-800 pointer-events-auto"
          >
            info@blitzgas.ru
          </a>
          <a
            href="tel:+74950659276"
            className="text-black text-sm font-medium hover:text-gray-800 pointer-events-auto"
          >
            +7 (495) 065-92-76
          </a>
        </div>

        {/* Десктоп-нав — ссылки растянуты на высоту панели (h-16) */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={getHref(l.href)}
              scroll={false} // прокрутку обрабатываем централизованно в _app.jsx
              className="text-black text-lg font-medium hover:text-gray-800 transition h-16 flex items-center px-2"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Мобильная часть: иконки + бургер */}
        <div className="flex items-center gap-3 lg:hidden text-black">
          <a
            href="mailto:info@blitzgas.ru"
            className="p-2 rounded-md hover:bg-black/5"
            aria-label="Написать e-mail"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M2.94 4.5A2 2 0 0 1 4.9 3h10.2a2 2 0 0 1 1.96 1.5L10 9.13 2.94 4.5z" />
              <path d="M18 6.35 11 10.9a2 2 0 0 1-2 0L2 6.35V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6.35z" />
            </svg>
          </a>

          <a href="tel:+74950659276" className="p-2 rounded-md hover:bg-black/5" aria-label="Позвонить">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path d="M2.003 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-.8a11.4 11.4 0 0 0 8.3 8.3v-.8A1.5 1.5 0 0 1 14.5 13h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.497 1.5C7.82 18 2 12.18 2 5.497A1.5 1.5 0 0 1 2.003 3.5z" />
            </svg>
          </a>

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
              <g className={`${open ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'} transition-transform duration-200`}>
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </g>
              <g className={`${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden bg-white/95 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={getHref(l.href)}
              scroll={false}
              onClick={() => setOpen(false)}
              className="block w-full text-left px-2 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition"
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-2 border-t border-gray-100 mt-2">
            <a href="mailto:info@blitzgas.ru" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
              info@blitzgas.ru
            </a>
            <a href="tel:+74950659276" className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
              +7 (495) 065-92-76
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
