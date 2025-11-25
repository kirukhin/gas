// pages/dryers/adsorption.jsx
import PageLayout from '../../components/PageLayout'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "name": "Адсорбционные осушители DryAir DA",
  "description": "Адсорбционные осушители DryAir DA — низкая точка росы для критичных процессов."
}

export default function AdsorptionDryersPage() {
  return (
    <PageLayout
      title="Адсорбционные осушители — низкая точка росы для критичных процессов"
      description="Адсорбционные осушители DryAir DA — производительность и цены по давлению (10/16 бар). Подбор для технологических процессов с жесткими требованиями к сухости."
      canonical={`${SITE}/dryers/adsorption`}
      heroImage="/assets/dryers-adsorption-hero.png"
      jsonLd={jsonLd}
    >
      <section className="container mx-auto px-6 py-12 max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">Адсорбционные осушители</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Адсорбционные осушители обеспечивают низкую точку росы и стабильную сухость воздуха в критичных технологических процессах.
          Серия DryAir DA включает модели с пропускной способностью от ~130 м³/ч до 10000 м³/ч и ценами в зависимости от максимального рабочего давления.
        </p>

        <div className="p-6 border rounded bg-gray-50 mb-6">
          <h3 className="font-semibold mb-2">Где применяются</h3>
          <p className="text-sm text-gray-600">Рекомендуются в фарме, электронике и при наполнении газовых баллонов, где требуется dew point до −40°C.</p>
        </div>

        <div className="text-center my-10">
          <a
            href="#footer"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            Получить коммерческое предложение на адсорбционный осушитель
          </a>
        </div>
      </section>
    </PageLayout>
  )
}
