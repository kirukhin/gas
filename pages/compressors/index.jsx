// pages/compressors/index.jsx
import { useState, useMemo } from 'react'
import PageLayout from '../../components/PageLayout'
import CompressorFilterPanel from '../../components/CompressorFilterPanel'
import CompressorCatalogFilter from '../../components/CompressorCatalogFilter'
import ProductCard from '../../components/ProductCard'

import equipment from '../../components/equipment.json'
import { getProductsByCategory } from '../../lib/equipmentHelpers'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''

export async function getStaticProps() {
  const products = getProductsByCategory('compressors') || []
  return { props: { products, equipment } }
}

export default function CompressorsPage({ products, equipment }) {

  const [tab, setTab] = useState('psa')
  const [filteredPSA, setFilteredPSA] = useState(products)

  const [filter, setFilter] = useState({
    flow: null,
    pressure: null,
    powerRange: [null, null],
    inverter: null,
    oil_free: null,
    dryer: null,
    mobile: null,
    drive: [],
    brand: [],
    line: []
  })

  // ===============================
  // Каталожная фильтрация
  // ===============================
  const filteredCatalog = useMemo(() => {
    return equipment.filter(c => {

      if (filter.flow !== null) {
        if (c.flow_m3_min > filter.flow || c.flow_m3_max < filter.flow) return false
      }

      if (filter.pressure !== null) {
        if (c.pressure_atm.min > filter.pressure || c.pressure_atm.max < filter.pressure) return false
      }

      const [pMin, pMax] = filter.powerRange
      if (pMin !== null && c.power_kw < pMin) return false
      if (pMax !== null && c.power_kw > pMax) return false

      if (filter.inverter !== null && c.inverter !== filter.inverter) return false
      if (filter.oil_free !== null && c.oil_free !== filter.oil_free) return false
      if (filter.dryer !== null && c.dryer !== filter.dryer) return false
      if (filter.mobile !== null && c.mobile !== filter.mobile) return false

      if (filter.drive.length && !filter.drive.includes(c.drive)) return false
      if (filter.brand.length && !filter.brand.includes(c.brand)) return false
      if (filter.line.length && !filter.line.includes(c.line)) return false

      return true
    })
  }, [equipment, filter])

  return (
    <PageLayout
      title="Винтовые компрессоры — подбор и каталог"
      description="Подбор винтовых компрессоров и параметрический каталог оборудования."
      canonical={`${SITE}/compressors`}
      heroImage="/assets/compressors-hero.png"
      breadcrumb={[
        { name: "Главная", href: "/" },
        { name: "Винтовые компрессоры", href: "/compressors" }
      ]}
    >

      <section className="container mx-auto px-6 py-12 max-w-6xl">

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-10">
          {[
            ['psa', 'Подбор для ГРУ / PSA'],
            ['catalog', 'Параметрический каталог']
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`pb-3 font-medium ${
                tab === key
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'psa' && (
          <>
            <CompressorFilterPanel
              products={products}
              onFilterChange={({ flow, pressures, powers }) => {
                let list = products
                if (flow) list = list.filter(p => p.specs?.some(s => s.maxFlow >= flow))
                if (pressures.length) list = list.filter(p => p.specs?.some(s => pressures.includes(s.pressure)))
                if (powers.length) list = list.filter(p => p.specs?.some(s => powers.includes(s.power)))
                setFilteredPSA(list)
              }}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPSA.map(p => (
                <ProductCard key={p.id} p={p} />
              ))}
            </div>
          </>
        )}

        {tab === 'catalog' && (
          <>
            <CompressorCatalogFilter
              equipment={equipment}
              value={filter}
              onChange={setFilter}
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCatalog.map(item => (
                <div key={item.id} className="border rounded-lg p-5 bg-white shadow-sm">
                  <h3 className="font-semibold mb-2">{item.model}</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Серия:</strong> {item.line}</li>
                    <li><strong>Давление:</strong> {item.pressure_atm.min}–{item.pressure_atm.max} бар</li>
                    <li><strong>Производительность:</strong> {item.flow_m3_min}–{item.flow_m3_max} м³/мин</li>
                    <li><strong>Мощность:</strong> {item.power_kw} кВт</li>
                    <li><strong>ЧРП:</strong> {item.inverter ? 'есть' : 'нет'}</li>
                    <li><strong>Привод:</strong> {item.drive}</li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}

      </section>
    </PageLayout>
  )
}
