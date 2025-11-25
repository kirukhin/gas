// pages/dcompressors.js

// ============================================================================
//  Страница дожимающих компрессоров (Booster / High-pressure)
//  - Использует общий компонент ProductCard
// ============================================================================

import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import DcompressorFilterPanel from '../components/DcompressorFilterPanel'
import ProductCard from '../components/ProductCard'

import { getProductsByCategory } from '../lib/equipmentHelpers'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''


// ============================================================================
//  STATIC GENERATION — Загружаем только товары категории "dcompressors"
// ============================================================================
export async function getStaticProps() {
  const products = getProductsByCategory('dcompressors')
  return { props: { products } }
}



// ============================================================================
//  ГЛАВНЫЙ КОМПОНЕНТ СТРАНИЦЫ
// ============================================================================
export default function DcompressorsPage({ products }) {

  // --------------------------------------------------------------------------
  // SEO JSON-LD
  // --------------------------------------------------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Дожимающие компрессоры для заправки баллонов",
    "description":
      "Каталог промышленных дожимающих компрессоров VWZT, WWZT, HWZT. Подбор по расходу, цене и давлению для систем заправки баллонов, азота и кислорода."
  }


  // --------------------------------------------------------------------------
  // ЛОГИКА ФИЛЬТРАЦИИ
  // --------------------------------------------------------------------------
  const [filtered, setFiltered] = useState(products)

  const applyFilter = ({ flow }) => {
    if (!flow) {
      setFiltered(products)
      return
    }

    const filteredList = products.filter((p) => p.flow >= flow)

    setFiltered(filteredList)
  }



  // ========================================================================
  //  ОТРИСОВКА СТРАНИЦЫ
  // ========================================================================
  return (
    <PageLayout
      title="Дожимающие компрессоры для заправки баллонов"
      description="Подбор дожимающих компрессоров по расходу (м³/ч), давлению и цене."
      canonical={`${SITE}/dcompressors`}
      heroImage="/assets/dcompressors-hero.png"
      jsonLd={jsonLd}
      breadcrumb={[
        { name: 'Главная', href: '/' },
        { name: 'Дожимающие компрессоры', href: '/dcompressors' }
      ]}
    >

      {/* ------------------------------- HEADER TEXT BLOCK ------------------- */}
      <section className="container mx-auto px-6 py-12 max-w-6xl text-gray-800">

        <h1 className="text-3xl font-bold mb-6">
          Дожимающие бустеры для поднятия давления перед заправочной рампой
        </h1>

        <div className="prose prose-gray max-w-none mb-10 leading-relaxed">
          <p>
            Дожимающие компрессоры (booster) применяются там, где необходимо повысить давление
            воздуха или газа до 150 бар для заправки баллонов или газовых рамп.
          </p>
          <p>
            Линейки VWZT, WWZT и HWZT обеспечивают расход от 3 до 33 м³/ч и подходят
            для промышленных комплексов, постов заправки и рамп высокого давления.
          </p>
        </div>


        {/* ------------------------------ INFO CARDS --------------------------- */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div className="p-6 border rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Для систем чистых газов</h3>
            <p className="text-sm text-gray-600">
              Подходит для азота (N₂), кислорода (O₂), воздуха и других газов при надлежащей фильтрации.
            </p>
          </div>

          <div className="p-6 border rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Для станций заправки баллонов</h3>
            <p className="text-sm text-gray-600">
              Дожим обеспечивает доводку давления до 150 бар перед заправочной рампой.
            </p>
          </div>

        </div>


        {/* ------------------------------ CTA BUTTON --------------------------- */}
        <div className="text-center my-10">
          <a
            href="#footer"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500
                       text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Запросить расчёт системы дожима
          </a>
        </div>



        {/* ===================================================================== */}
        {/*                           ФИЛЬТР + СПИСОК                            */}
        {/* ===================================================================== */}

        <section className="container mx-auto px-0 py-12 max-w-6xl">

          <DcompressorFilterPanel onFilterChange={applyFilter} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filtered.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>

        </section>



        {/* ------------------------------ FAQ -------------------------------- */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            FAQ — часто задаваемые вопросы
          </h2>

          <div className="space-y-4 text-gray-700">

            <div>
              <strong>Можно ли дожимать воздух прямо из сети компрессора?</strong>
              <p className="text-sm">Да, если расход и качество воздуха соответствуют требованиям.</p>
            </div>

            <div>
              <strong>Подходит ли дожим для кислорода?</strong>
              <p className="text-sm">
                Да — требуется маслобезопасная версия и фильтрация до O₂-готовности.
              </p>
            </div>

            <div>
              <strong>Можно ли подключить рампу напрямую?</strong>
              <p className="text-sm">
                Да — дожимающие компрессоры поддерживают подключение рамп высокого давления.
              </p>
            </div>

          </div>
        </section>

      </section>
    </PageLayout>
  )
}
