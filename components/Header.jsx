// components/Header.jsx
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [open, setOpen] = useState(false) // мобильное меню
  const [equipOpen, setEquipOpen] = useState(false) // выпадающее меню "Оборудование" (десктоп)
  const [techOpen, setTechOpen] = useState(false) // выпадающее меню "Технология"
  const router = useRouter()
  const isHome = router.pathname === '/'

  const equipRef = useRef(null)
  const techRef = useRef(null)

  // Закрываем мобильное меню при смене страницы
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false)
      setEquipOpen(false)
      setTechOpen(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [router.events])

  // Закрытие по ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setEquipOpen(false)
        setTechOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Закрытие выпадашки "Оборудование" при клике вне
  useEffect(() => {
    const onDocClick = (e) => {
      if (equipRef.current && !equipRef.current.contains(e.target)) {
        setEquipOpen(false)
      }
    }
    if (equipOpen) document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [equipOpen])

  // Закрытие выпадашки "Технология" при клике вне
  useEffect(() => {
    const onDocClick = (e) => {
      if (techRef.current && !techRef.current.contains(e.target)) {
        setTechOpen(false)
      }
    }
    if (techOpen) document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [techOpen])

  // статический список подкатегорий (каталога) — можно менять при необходимости
  const equipmentCategories = [
    { href: '/nitrogenerators', label: 'Генераторы азота' },
    { href: '/oxygenerators', label: 'Генераторы кислорода' },
    { href: '/compressors', label: 'Компрессоры' },
    { href: '/dryers', label: 'Осушители' },
    { href: '/filters', label: 'Фильтры' },
    { href: '/dcompressors', label: 'Дожимающие компрессоры' }
  ]

  const navLinks = [
    // здесь больше нет прямой ссылки на конфигуратор — вместо неё будет dropdown "Технология"
    { href: '/about', label: 'О компании' },
    { href: '#footer', label: 'Контакты' }, // теперь ведёт на футер (на всех страницах)
  ]

  // Генерация корректного href для якорей (как у тебя в предыдущем коде)
  const getHref = (href) => {
    if (href.startsWith('#')) {
      return isHome ? href : `/${href}`
    }
    return href
  }

  // helper: клик по ссылке закрывает оба меню
  const onNavigate = (closeMobile = true) => {
    setEquipOpen(false)
    setTechOpen(false)
    if (closeMobile) setOpen(false)
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

        {/* Контакты — центр */}
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

        {/* Десктоп-нав */}
        <nav className="hidden lg:flex items-center space-x-6">
          {/* Выпадающее меню "Оборудование" (оставляем как у тебя) */}
          <div
            ref={equipRef}
            onMouseEnter={() => {
              clearTimeout(equipRef.current?.closeTimer)
              setEquipOpen(true)
            }}
            onMouseLeave={() => {
              equipRef.current.closeTimer = setTimeout(() => {
                setEquipOpen(false)
              }, 250)
            }}
            className="relative"
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={equipOpen}
              onClick={() => setEquipOpen((v) => !v)}
              className="text-black text-lg font-medium hover:text-gray-800 transition h-16 flex items-center px-2"
            >
              Оборудование
              <svg className="ml-2 w-4 h-4 text-black/70" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute left-0 mt-2 w-56 rounded-lg shadow-lg ring-1 ring-black/5 bg-white transition transform origin-top ${equipOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                }`}
              role="menu"
              aria-label="Оборудование"
            >
              <div className="py-2">
                {equipmentCategories.map((ec) => (
                  <Link
                    key={ec.href}
                    href={ec.href}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50"
                    onClick={() => onNavigate(true)}
                  >
                    {ec.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Выпадающее мегаменю "Технология" (замена пункта Конфигуратор) */}
          <div
            ref={techRef}
            onMouseEnter={() => {
              clearTimeout(techRef.current?.closeTimer)
              setTechOpen(true)
            }}
            onMouseLeave={() => {
              techRef.current.closeTimer = setTimeout(() => {
                setTechOpen(false)
              }, 200)
            }}
            className="relative"
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={techOpen}
              onClick={() => setTechOpen((v) => !v)}
              className="text-black text-lg font-medium hover:text-gray-800 transition h-16 flex items-center px-2"
            >
              Технология
              <svg className="ml-2 w-4 h-4 text-black/70" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Тело мегаменю */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full mt-2
                w-[560px] max-w-[95vw] bg-white rounded-xl shadow-xl ring-1 ring-black/5
                transition-all duration-150 origin-top
                ${techOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
              `}
              role="menu"
              aria-label="Технология"
            >
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* Азот N2 */}
                  <Link
                    href="/nitrogen"
                    onClick={() => onNavigate(true)}
                    className="group block rounded-lg border border-gray-200 hover:shadow-md bg-white hover:bg-gray-50 p-4 flex flex-col items-center justify-center text-center transition"
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-md bg-gray-100 text-gray-900 border border-gray-300 mb-3 text-2xl font-bold">
                      N<sub className="text-sm">2</sub>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Азот</div>
                    <div className="text-xs text-gray-600">N₂</div>
                  </Link>

                  {/* Кислород O2 */}
                  <Link
                    href="/oxygen"
                    onClick={() => onNavigate(true)}
                    className="group block rounded-lg border border-gray-200 hover:shadow-md bg-white hover:bg-gray-50 p-4 flex flex-col items-center justify-center text-center transition"
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-md bg-gray-100 text-gray-900 border border-gray-300 mb-3 text-2xl font-bold">
                      O<sub className="text-sm">2</sub>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Кислород</div>
                    <div className="text-xs text-gray-600">O₂</div>
                  </Link>
                </div>

                {/* Конфигуратор — под двумя квадратами, широкая узкая кнопка */}
                <div className="mt-4">
                  <Link
                    href={getHref('#config')}
                    onClick={() => onNavigate(true)}
                    className="block w-full text-center rounded-md px-4 py-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-900"
                  >
                    Конфигуратор
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Остальные nav links */}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={getHref(l.href)}
              scroll={false}
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
        className={`lg:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden bg-white/95 ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {/* Делаем пункт "Оборудование" раскрывающимся в мобильном меню */}
          <details className="group bg-white rounded-md" open={false}>
            <summary className="flex items-center justify-between px-2 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 cursor-pointer">
              Оборудование
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="mt-1 space-y-1">
              {equipmentCategories.map((ec) => (
                <Link
                  key={ec.href}
                  href={ec.href}
                  onClick={() => onNavigate(true)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  {ec.label}
                </Link>
              ))}
            </div>
          </details>

          {/* Технология — мобильная версия */}
          <details className="group bg-white rounded-md">
            <summary className="flex items-center justify-between px-2 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 cursor-pointer">
              Технология
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>

            <div className="mt-2 px-2 space-y-2">
              <Link
                href="/nitrogen"
                onClick={() => onNavigate(true)}
                className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-100 hover:bg-gray-50"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-50 text-lg font-bold">
                  N<sub className="text-sm">2</sub>
                </div>
                <div>
                  <div className="text-sm font-medium">Азот</div>
                  <div className="text-xs text-gray-500">N₂</div>
                </div>
              </Link>

              <Link
                href="/oxygen"
                onClick={() => onNavigate(true)}
                className="flex items-center gap-3 px-3 py-2 rounded-md border border-gray-100 hover:bg-gray-50"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gray-50 text-lg font-bold">
                  O<sub className="text-sm">2</sub>
                </div>
                <div>
                  <div className="text-sm font-medium">Кислород</div>
                  <div className="text-xs text-gray-500">O₂</div>
                </div>
              </Link>

              <Link
                href={getHref('#config')}
                onClick={() => onNavigate(true)}
                className="block w-full text-center rounded-md px-4 py-2 text-sm font-semibold bg-gray-50 hover:bg-gray-100 border border-gray-100"
              >
                Конфигуратор
              </Link>
            </div>
          </details>

          {/* остальные navLinks */}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={getHref(l.href)}
              scroll={false}
              onClick={() => onNavigate(true)}
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
