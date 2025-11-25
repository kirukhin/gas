// pages/category.jsx
import PageLayout from '../components/PageLayout'

export default function CategoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Компрессоры — Блицгаз",
    "url": "https://blitzgas.ru/compressors"
  }

  return (
    <PageLayout
      title="Компрессоры"
      description="Промышленные компрессоры и системы подготовки воздуха — каталог Блицгаз."
      heroImage="/assets/compressors-hero.png"
      jsonLd={jsonLd}
    >
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <h2 className="text-2xl font-bold mb-6">Популярные модели</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <img
                src={`/assets/compressor-${i}.png`}
                alt={`Компрессор ${i}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">Модель {i}</h4>
                <p className="text-sm text-gray-600">Описание модели {i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
