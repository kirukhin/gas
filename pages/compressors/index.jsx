// pages/compressors/index.jsx

import { useState } from 'react'
import Link from 'next/link'
import PageLayout from '../../components/PageLayout'
import CompressorFilterPanel from '../../components/CompressorFilterPanel'
import ProductCard from '../../components/ProductCard'
import { getProductsByCategory } from '../../lib/equipmentHelpers'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''


// ===============================
// Генерация статических данных
// ===============================
export async function getStaticProps() {
  const products = getProductsByCategory('compressors') || []
  return { props: { products } }
}


// ===============================
// Главная страница компрессоров
// ===============================
export default function CompressorsPage({ products }) {

  // JSON-LD SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Винтовые компрессоры — подбор по расходу и давлению",
    "description": "Подбор промышленных компрессоров по производительности, рабочему давлению и мощности. Серии BGV: характеристики, цены, PDF-даташиты."
  }

  // состояние фильтра
  const [filtered, setFiltered] = useState(products)

  // ===============================
  //      ЛОГИКА ФИЛЬТРАЦИИ
  // ===============================
  const applyFilter = ({ flow, pressures, powers }) => {
    let list = products

    // — Фильтр по расходу —
if (flow) {
  list = list.filter((p) =>
    p.specs.some(
      s => s.maxFlow >= flow   // Главное условие: модель должна тянуть нужный расход
    )
  )
}


    // --- давление ---
    if (pressures.length > 0) {
      list = list.filter((p) =>
        p.specs?.some((s) => pressures.includes(s.pressure))
      )
    }

    // --- мощность ---
    if (powers.length > 0) {
      list = list.filter((p) =>
        p.specs?.some((s) => powers.includes(s.power))
      )
    }

    setFiltered(list)
  }



  return (
    <PageLayout
      title="Винтовые компрессоры — подбор по расходу и давлению"
      description="Подбор винтовых компрессоров по производительности (м³/ч), давлению (бар) и мощности (кВт)"
      canonical={`${SITE}/compressors`}
      heroImage="/assets/compressors-hero.png"
      jsonLd={jsonLd}
      breadcrumb={[
        { name: "Главная", href: "/" },
        { name: "Винтовые компрессоры", href: "/compressors" }
      ]}
    >


      {/* ======================= */}
      {/*  Описание страницы       */}
      {/* ======================= */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">

        <h2 className="text-3xl font-bold mb-6">
          Компрессоры — подбор по расходу и давлению
        </h2>

        <div className="prose prose-gray max-w-none mb-10 leading-relaxed">
          <p>
            Здесь вы можете подобрать промышленный винтовой компрессор по расходу, рабочему давлению и мощности.
          </p>
          <p>
            Алгоритм учитывает характеристики каждой модели, включая диапазоны производительности
            в зависимости от давления.
          </p>
          <p>
            Для всех моделей доступны PDF-даташиты, цены и технические характеристики.
          </p>
        </div>


        {/* ======================= */}
        {/*   панель фильтрации     */}
        {/* ======================= */}
        <CompressorFilterPanel products={products} onFilterChange={applyFilter} />



        {/* ======================= */}
        {/*  результаты фильтра     */}
        {/* ======================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>


        {/* ======================= */}
        {/* FAQ                     */}
        {/* ======================= */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>

          <div className="space-y-4 text-gray-700">

            <div>
              <strong>Какой запас по расходу брать?</strong>
              <p className="text-sm">Обычно 10–30% от среднего потребления.</p>
            </div>

            <div>
              <strong>Подберёте осушитель к компрессору?</strong>
              <p className="text-sm">Да, под расход, давление и точку росы.</p>
            </div>

            <div>
              <strong>Есть сервис и пуск-наладка?</strong>
              <p className="text-sm">Да, на всей территории РФ.</p>
            </div>

          </div>
        </section>

      </section>
    </PageLayout>
  )
}
