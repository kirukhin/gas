// components/navigation/MegaMenu.jsx

import Link from 'next/link'

import {
  CubeIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  ChevronRightIcon,
  BeakerIcon,
  AdjustmentsHorizontalIcon,
  BoltIcon
} from '@heroicons/react/24/outline'


// ============================================================
// ИКОНКИ МЕГА-МЕНЮ
// ============================================================

const icons = {
  N2: <span className="text-red-600 font-bold text-5xl">N₂</span>,
  O2: <span className="text-red-600 font-bold text-5xl">O₂</span>,

  compressor: <Cog6ToothIcon className="w-10 h-10 text-red-600" />,
  dryer: <AdjustmentsHorizontalIcon className="w-10 h-10 text-red-600" />,
  filter: <BeakerIcon className="w-10 h-10 text-red-600" />,
  booster: <BoltIcon className="w-10 h-10 text-red-600" />,
  calculator: <CubeIcon className="w-10 h-10 text-red-600" />
}


// ============================================================
// MEGA MENU
// ============================================================

export default function MegaMenu({
  activeSection,
  onSectionChange,
  onNavigate,
  getHref
}) {

  return (
    <div className="absolute left-1/2 top-full -translate-x-1/2 w-[1180px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

      <div className="grid grid-cols-[250px_1fr] h-[520px]">

        {/* ================================================== */}
        {/* ЛЕВАЯ ПАНЕЛЬ — ОСНОВНЫЕ РАЗДЕЛЫ */}
        {/* ================================================== */}

        <div className="bg-gray-50 border-r border-gray-100 p-6">

          {/* Оборудование */}

          <button
            onMouseEnter={() => onSectionChange('equipment')}
            className={`w-full text-left p-5 rounded-2xl mb-4 transition-all duration-200 ${activeSection === 'equipment' ? 'bg-white shadow-md' : 'hover:bg-white'}`}
          >
            <div className="flex gap-4 items-center">
              <CubeIcon className="w-9 h-9 text-red-600" />

              <div>
                <div className="font-semibold text-black text-lg">
                  Оборудование
                </div>

                <div className="text-gray-500">
                  Каталог продукции
                </div>
              </div>
            </div>
          </button>


          {/* Технология */}

          <button
            onMouseEnter={() => onSectionChange('technology')}
            className={`w-full text-left p-5 rounded-2xl mb-4 transition-all duration-200 ${activeSection === 'technology' ? 'bg-white shadow-md' : 'hover:bg-white'}`}
          >
            <div className="flex gap-4 items-center">
              <Cog6ToothIcon className="w-9 h-9 text-red-600" />

              <div>
                <div className="font-semibold text-black text-lg">
                  Технология
                </div>

                <div className="text-gray-500">
                  PSA генераторы газов
                </div>
              </div>
            </div>
          </button>


          {/* Компания */}

          <button
            onMouseEnter={() => onSectionChange('contacts')}
            className={`w-full text-left p-5 rounded-2xl transition-all duration-200 ${activeSection === 'contacts' ? 'bg-white shadow-md' : 'hover:bg-white'}`}
          >
            <div className="flex gap-4 items-center">
              <InformationCircleIcon className="w-9 h-9 text-red-600" />

              <div>
                <div className="font-semibold text-black text-lg">
                  Компания
                </div>

                <div className="text-gray-500">
                  Контакты и информация
                </div>
              </div>
            </div>
          </button>

        </div>


        {/* ================================================== */}
        {/* ПРАВАЯ ПАНЕЛЬ — СОДЕРЖИМОЕ РАЗДЕЛА */}
        {/* ================================================== */}

        <div className="px-8 pt-5 pb-6">

          {/* ================================================== */}
          {/* ОБОРУДОВАНИЕ */}
          {/* ================================================== */}

          {activeSection === 'equipment' && (
            <div className="grid grid-cols-2 gap-6">

              {/* Генераторы */}

              <Link
                href="/nitrogenerators"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.N2}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Генераторы азота
                  </div>

                  <div className="text-gray-500 mt-1">
                    PSA азотные станции
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              <Link
                href="/oxygenerators"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.O2}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Генераторы кислорода
                  </div>

                  <div className="text-gray-500 mt-1">
                    PSA кислородные станции
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              {/* Подготовка сжатого воздуха */}

              <div className="col-span-2 py-2">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-200" />

                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 whitespace-nowrap">
                    Подготовка сжатого воздуха
                  </span>

                  <div className="h-px flex-1 bg-gray-200" />
                </div>
              </div>


              {/* Компрессоры */}

              <Link
                href="/compressors"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.compressor}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Компрессоры
                  </div>

                  <div className="text-gray-500 mt-1">
                    Винтовые компрессоры
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              {/* Осушители */}

              <Link
                href="/dryers"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.dryer}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Осушители
                  </div>

                  <div className="text-gray-500 mt-1">
                    Рефрижераторные и адсорбционные
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              {/* Фильтры */}

              <Link
                href="/filters"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.filter}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Фильтры
                  </div>

                  <div className="text-gray-500 mt-1">
                    Очистка сжатого воздуха
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              {/* Дожимающие компрессоры */}

              <Link
                href="/dcompressors"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.booster}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Дожимающие компрессоры
                  </div>

                  <div className="text-gray-500 mt-1">
                    До 350 бар
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>

            </div>
          )}


          {/* ================================================== */}
          {/* ТЕХНОЛОГИЯ */}
          {/* ================================================== */}

          {activeSection === 'technology' && (
            <div className="grid grid-cols-2 gap-6">

              {/* Азот */}

              <Link
                href="/nitrogen"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.N2}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Азот из воздуха
                  </div>

                  <div className="text-gray-500 mt-1">
                    PSA-технология производства азота
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              {/* Кислород */}

              <Link
                href="/oxygen"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                {icons.O2}

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Кислород из воздуха
                  </div>

                  <div className="text-gray-500 mt-1">
                    PSA-технология производства кислорода
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              {/* Тематические материалы */}

              <div className="col-span-2 space-y-3 py-2">

                <div className="h-px bg-gray-200" />


                {/* Азот для пищевой упаковки */}

                <Link
                  href="/nitrogen/food-packaging"
                  onClick={onNavigate}
                  className="group flex items-center justify-between rounded-lg px-2 py-2 text-gray-600 hover:text-red-600 hover:bg-gray-50 transition-all duration-200"
                >
                  <span className="font-medium">
                    Азот для пищевой упаковки
                  </span>

                  <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                </Link>


                {/* Кислород для аквакультуры — пока недоступно */}

                <div
                  className="flex items-center justify-between rounded-lg px-2 py-2 text-gray-500 cursor-not-allowed select-none"
                  title="Скоро"
                >
                  <span className="font-medium">
                    Кислород для аквакультуры
                  </span>

                  <span className="text-sm text-gray-400">
                    скоро
                  </span>
                </div>


                <div className="h-px bg-gray-200" />

              </div>


              {/* Конфигуратор */}

              <Link
                href={getHref('#config')}
                onClick={onNavigate}
                className="group col-span-2 flex items-center gap-5 rounded-xl border border-red-600 bg-red-600 text-white p-6 hover:bg-red-700 hover:border-red-700 transition-all duration-200"
              >
                {icons.calculator}

                <div className="flex-1">
                  <div className="text-xl font-semibold">
                    Онлайн-конфигуратор оборудования
                  </div>

                  <div className="text-red-100 mt-1">
                    Подбор станции и коммерческого предложения за несколько минут
                  </div>
                </div>

                <ChevronRightIcon className="w-6 h-6" />
              </Link>

            </div>
          )}


          {/* ================================================== */}
          {/* КОМПАНИЯ / КОНТАКТЫ */}
          {/* ================================================== */}

          {activeSection === 'contacts' && (
            <div className="space-y-5">

              {/* О компании */}

              <Link
                href="/about"
                onClick={onNavigate}
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                <InformationCircleIcon className="w-10 h-10 text-red-600" />

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    О компании
                  </div>

                  <div className="text-gray-500 mt-1">
                    Производство и поставка газоразделительного оборудования
                  </div>
                </div>

                <ChevronRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
              </Link>


              {/* E-mail */}

              <a
                href="mailto:info@blitzgas.ru"
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                <BeakerIcon className="w-10 h-10 text-red-600" />

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    E-mail
                  </div>

                  <div className="text-gray-500 mt-1">
                    info@blitzgas.ru
                  </div>
                </div>
              </a>


              {/* Телефон */}

              <a
                href="tel:+74950659276"
                className="group flex items-center gap-5 rounded-xl border border-gray-200 p-5 hover:border-red-500 hover:shadow-lg transition-all duration-200"
              >
                <BoltIcon className="w-10 h-10 text-red-600" />

                <div className="flex-1">
                  <div className="font-semibold text-black text-lg">
                    Телефон
                  </div>

                  <div className="text-gray-500 mt-1">
                    +7 (495) 065-92-76
                  </div>
                </div>
              </a>


              {/* Консультация */}

              <Link
                href={getHref('#footer')}
                onClick={onNavigate}
                className="group flex items-center justify-between rounded-xl bg-red-600 text-white p-6 hover:bg-red-700 transition-all duration-200"
              >
                <div>
                  <div className="text-xl font-semibold">
                    Получить консультацию инженера
                  </div>

                  <div className="text-red-100 mt-1">
                    Подбор оборудования и расчет проекта
                  </div>
                </div>

                <ChevronRightIcon className="w-6 h-6" />
              </Link>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}