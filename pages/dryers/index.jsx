// pages/dryers/index.jsx
import { useState } from 'react'
import Link from 'next/link'
import ProductCard from '../../components/ProductCard'

import PageLayout from '../../components/PageLayout'
import { getProductsByCategory } from '../../lib/equipmentHelpers'
import DryerFilterPanel from '../../components/DryerFilterPanel'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''


// ===============================
// Статическая генерация
// ===============================
export async function getStaticProps() {
  const products = getProductsByCategory('dryers') || []
  return { props: { products } }
}


// ===============================
// JSON-LD
// ===============================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Осушители воздуха — рефрижераторные и адсорбционные",
  "description": "Осушители воздуха: подбор по расходу (м³/ч), точке росы и максимальному давлению. Рефрижераторные и адсорбционные осушители."
}


// ===============================
// Страница осушителей
// ===============================
export default function DryersPage({ products }) {

  const [filtered, setFiltered] = useState(products)

  // === Логика фильтрации ===
  const applyFilter = ({ flow, types, voltages }) => {
    let list = products

    // --- Фильтр по расходу ---
    if (flow) {
      list = list.filter((p) => p.flow >= flow)
    }

    // --- Фильтр по типу ---
    if (types.length > 0) {
      list = list.filter((p) => types.includes(p.type))
    }

    // --- Фильтр по напряжению ---
    if (voltages.length > 0) {
      list = list.filter((p) => voltages.includes(p.voltage))
    }

    setFiltered(list)
  }


  return (
    <PageLayout
      title="Рефрижераторные и адсорбционные осушители воздуха"
      description="Подбор осушителей по расходу (м³/ч), типу и рабочему давлению. Рефрижераторные и адсорбционные модели."
      canonical={`${SITE}/dryers`}
      heroImage="/assets/dryers-hero.png"
      jsonLd={jsonLd}
      breadcrumb={[
        { name: "Главная", href: "/" },
        { name: "Осушители воздуха", href: "/dryers" }
      ]}
    >


      {/* --------------------------------
          ОСНОВНОЙ КОНТЕНТ
      -------------------------------- */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">

        <h2 className="text-3xl font-bold mb-6">
          Осушители воздуха — подбор по производительности и типу
        </h2>

        <div className="prose prose-gray leading-relaxed mb-10">
          <p>
            Осушители воздуха удаляют влагу из сжатого воздуха и защищают сеть от
            коррозии, конденсата и повреждений оборудования.
          </p>

          <p>
            На этой странице вы можете подобрать оптимальный осушитель по расходу,
            типу работы (рефрижераторный или адсорбционный) и напряжению.
          </p>
        </div>


        {/* --- Преимущества --- */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
          <h3 className="text-xl font-semibold mb-3">Преимущества</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Подбор осушителей по расходу и давлению.</li>
            <li>Рекомендации наших инженеров по точке росы для вашего процесса.</li>
            <li>Совместимость с компрессорами Блицгаз</li>
            <li>Сервисное и гарантийное обслуживание от ведущих спнциалистов в отрасли.</li>
          </ul>
        </div>


        {/* --- CTA --- */}
        <div className="text-center my-10">
          <a
            href="#footer"
            className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Подобрать осушитель под ваши задачи
          </a>
        </div>


        {/* ====================================
            ФИЛЬТР + СПИСОК ПРОДУКТОВ
        ==================================== */}
        <section className="container mx-auto px-0 py-12 max-w-6xl">

          {/* Панель фильтрации */}
          <DryerFilterPanel onFilterChange={applyFilter} />

          {/* Список моделей */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>


        </section>


        {/* ==========================
            FAQ
        ========================== */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">FAQ — часто задаваемые вопросы</h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Какой осушитель подходит для мастерской?</strong>
              <p className="text-sm">Обычно достаточно рефрижераторного.</p>
            </div>

            <div>
              <strong>Когда нужен адсорбционный осушитель?</strong>
              <p className="text-sm">Когда требуется точка росы до −20…−40°C.</p>
            </div>
          </div>
        </section>

      </section>
    </PageLayout>
  )
}
