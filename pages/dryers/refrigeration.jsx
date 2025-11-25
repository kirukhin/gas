// pages/dryers/refrigeration.jsx
import PageLayout from '../../components/PageLayout'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "name": "Рефрижераторные осушители",
  "description": "Рефрижераторные осушители BGD — экономичное решение для мастерских."
}

export default function RefrigerationDryersPage() {
  return (
    <PageLayout
      title="Рефрижераторные осушители — экономичное решение для мастерских"
      description="Рефрижераторные осушители BGD — производительность от 72 до 3300 м³/ч, подходящие для компрессорных станций и промышленных линий."
      canonical={`${SITE}/dryers/refrigeration`}
      heroImage="/assets/dryers-refrigeration-hero.png"
      jsonLd={jsonLd}
    >
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">Рефрижераторные осушители</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Рефрижераторные осушители (refrigerated dryers) — стандартное решение для большинства промышленных систем подготовки воздуха.
          Они удаляют влагу путём охлаждения и конденсации, обеспечивая устойчивый уровень влажности в сети.
        </p>

        <div className="p-6 border rounded bg-gray-50 mb-6">
          <h3 className="font-semibold mb-2">Рекомендации по монтажу</h3>
          <p className="text-sm text-gray-600">Ориентируйтесь на номинальный расход и давление — мы рекомендуем запас 10–20% для надёжной работы.</p>
        </div>

        <div className="text-center my-10">
          <a
            href="#footer"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Скачать DATASHEET рефрижераторных осушителей
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
