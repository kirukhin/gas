//pages/filters.js


// ===============================
// ИМПОРТЫ
// ===============================
import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import { filters } from '../components/equipment'
import { equipmentInfo } from '../components/equipmentDetails'
import FilterFilterPanel from '../components/FilterFilterPanel'
import ProductCard from '../components/ProductCard'


// ===============================
// SITE URL
// ===============================
const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''


// ===============================
// JSON-LD
// ===============================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Фильтры AAF — трёхступенчатые блоки фильтрации",
  "description":
    "Подбор фильтров AAF по производительности (м³/ч). Используются после компрессоров и осушителей для очистки воздуха перед генераторами кислорода и азота."
}


// ===============================
// ОСНОВНОЙ КОМПОНЕНТ
// ===============================
export default function FiltersPage() {

  const [filtered, setFiltered] = useState(filters)


  // ===============================
  // ФИЛЬТРАЦИЯ
  // ===============================
  const handleFilter = ({ flow }) => {
    let f = [...filters]

    if (flow && !isNaN(flow)) {
      f = f.filter((item) => item.flow >= flow)
    }

    setFiltered(f)
  }


  return (
    <PageLayout
      title="Фильтры AAF — трёхступенчатые блоки очистки сжатого воздуха"
      description="Фильтры AAF для комплексной очистки сжатого воздуха. Подбор по производительности, цене, ступеням фильтрации."
      canonical={`${SITE}/filters`}
      heroImage="/assets/filters-hero.png"
      jsonLd={jsonLd}
      breadcrumb={[
        { name: "Главная", href: "/" },
        { name: 'Фильтры', href: '/filters' }
      ]}
    >

      <section className="container mx-auto px-6 py-12 max-w-6xl text-gray-800">


        {/* ===============================
          SEO блок
        =============================== */}
        <h2 className="text-3xl font-bold mb-4">
          Фильтры и фильтровальные блоки AAF
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Трёхступенчатые фильтровальные блоки <strong>AAF</strong> используются
          для очистки сжатого и осушенного воздуха перед генераторами кислорода
          (PSA O₂) и азота (PSA N₂). Они удаляют влагу, масло и мелкодисперсные
          частицы, защищая осушители и адсорбент.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Основной параметр выбора — <strong>производительность (м³/ч)</strong>.
          Рекомендуется выбирать модель с запасом 10–20% от рабочего расхода.
        </p>


        {/* ===============================
          Инфо-блок
        =============================== */}
        <div className="p-6 border rounded bg-gray-50 mb-10">
          <h3 className="font-semibold mb-2">Где используются?</h3>
          <ul className="text-sm text-gray-700 list-disc pl-6 mt-2 space-y-1">
            <li>после компрессора — грубая и тонкая очистка;</li>
            <li>после осушителя — окончательная очистка;</li>
            <li>перед генераторами O₂/N₂ — защита адсорбента.</li>
          </ul>
        </div>


        {/* ===============================
          Панель фильтрации
        =============================== */}
        <FilterFilterPanel onFilterChange={handleFilter} />


        {/* --- ВЫВОД СПИСКА ПОСЛЕ ФИЛЬТРА --- */}
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                   {filtered.map((p) => (
                     <ProductCard key={p.id} p={p} />
                   ))}
                 </div>

      </section>
    </PageLayout>
  )
}
