// components/Header.jsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="font-bold text-xl text-black">Блицгаз</a>
        </Link>

        <nav className="hidden md:block">
          <Link href="/" legacyBehavior><a className="mx-2 text-black">Главная</a></Link>
          <Link href="/config" legacyBehavior><a className="mx-2 text-black">Конфигуратор</a></Link>
          <Link href="/about" legacyBehavior><a className="mx-2 text-black">О компании</a></Link>
          <Link href="/contacts" legacyBehavior><a className="mx-2 text-black">Контакты</a></Link>
        </nav>
      </div>
    </header>
  )
}
