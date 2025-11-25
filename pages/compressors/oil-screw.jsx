// pages/compressors/oil-screw.jsx
import PageLayout from '../../components/PageLayout'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "name": "Масляные винтовые компрессоры BGV",
  "description": "Серия масляных винтовых компрессоров для промышленности"
}

export default function OilScrewPage() {
  return (
    <PageLayout
      title="Масляные винтовые компрессоры — надежность и эффективность | BGV серия"
      description="Масляные винтовые компрессоры BGV — выбор для цехов и заводов. Характеристики по давлению и расходу, таблицы, цены и даташиты."
      canonical={`${SITE}/compressors/oil-screw`}
      heroImage="/assets/compressors-oil-screw-hero.png"
      jsonLd={jsonLd}
    >
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">Масляные винтовые компрессоры</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Масляные винтовые компрессоры — оптимальный выбор для большинства промышленных применений: стабильная подача воздуха,
          высокая надёжность и простота обслуживания. Серия BGV покрывает диапазон от малых 24 м³/ч до крупных 3300+ м³/ч и
          предлагает частотно-регулируемые решения для экономии энергии при переменной нагрузке.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 border rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Технические таблицы</h3>
            <p className="text-sm text-gray-600">min/max расход при 7/8/10/12.5 бар, мощность двигателя (кВт) и применимость модели.</p>
          </div>

          <div className="p-6 border rounded bg-gray-50">
            <h3 className="font-semibold mb-2">Инженерные рекомендации</h3>
            <p className="text-sm text-gray-600">Примеры расчётов, требования по вентиляции, фундаментам и шумозащите.</p>
          </div>
        </div>

        <h4 className="text-xl font-semibold mb-2">Рекомендуемые модели</h4>
        <p className="text-gray-700 mb-6">BGV5, BGV11, BGV45, BGV200 — ссылки на карточки моделей вы найдёте в каталоге.</p>

        <div className="text-center my-10">
          <a
            href="#footer"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Запросить коммерческое предложение на масляный винтовой компрессор
          </a>
        </div>

        <section>
          <h4 className="text-2xl font-semibold mb-3">FAQ</h4>
          <div className="space-y-4 text-gray-700">
            <div>
              <strong>Чем отличаются масляные винтовые от безмасляных?</strong>
              <p className="text-sm">Масляные дают лучшую смазку и долговечность, безмасляные — подходят для медицины и пищевой промышленности.</p>
            </div>

            <div>
              <strong>Как часто менять масло?</strong>
              <p className="text-sm">По регламенту производителя, обычно каждые 1000–2000 моточасов; уточняйте в даташите.</p>
            </div>
          </div>
        </section>
      </section>
    </PageLayout>
  )
}
