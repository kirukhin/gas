// ProductTemplate.jsx
import { fixImagePath } from '../lib/fixImagePath';
import Head from 'next/head';
import { equipmentInfo } from '../components/equipmentDetails';

export default function ProductTemplate({ product }) {
  if (!product) return null;

  const info = equipmentInfo[product.id?.toUpperCase()] || null;

  const rawImage =
    info?.image ||
    product.info?.image ||
    product.image ||
    product.photo ||
    null;

  const imageUrl = rawImage ? fixImagePath(rawImage) : null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
  const productUrl = `${siteUrl}/products/${product.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: imageUrl ? [imageUrl] : undefined,
    description: info?.description || product.info?.description || product.type,
    sku: product.id,
    brand: product.brand || undefined,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'RUB',
      url: productUrl,
      availability: 'https://schema.org/InStock'
    },
    additionalProperty: []
  };

  if (product.specs && Array.isArray(product.specs)) {
    jsonLd.additionalProperty = product.specs.map(s => ({
      '@type': 'PropertyValue',
      name: `${s.pressure ? s.pressure + ' бар' : 'spec'}`,
      value: `min ${s.minFlow ?? s.flow ?? '-'} м³/ч — max ${
        s.maxFlow ?? '-'
      } м³/ч${s.power ? `, ${s.power} кВт` : ''}`
    }));
  } else if (product.flow) {
    jsonLd.additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'flow',
      value: `${product.flow} м³/ч`
    });
  }

  return (
    <main className="container mx-auto px-4 py-10 max-w-6xl">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {/* === HERO SECTION === */}
      <section className="bg-white border rounded-2xl shadow-sm p-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* --- PHOTO --- */}
          <div className="w-full flex justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={product.name}
                className="max-h-[380px] object-contain rounded-lg"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                <span className="text-gray-500 text-sm">Нет изображения</span>
              </div>
            )}
          </div>

          {/* --- INFO BLOCK --- */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">{product.type}</p>

            <div className="text-3xl font-semibold mb-6">
              <span className="text-red-500">Цена: </span>
              <span className="text-red-500">
                {product.price?.toLocaleString?.('ru-RU') || 'по запросу'} ₽
              </span>
            </div>

            <a
              href="#footer"
              className="text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-lg transition p-15"
            >
              Заказать
            </a>
          </div>
        </div>
      </section>

      {/* === CHARACTERISTICS === */}
      {(product.specs || product.flow) && (
        <section className="bg-white border rounded-2xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Характеристики</h2>

          {product.specs && (
            <div className="overflow-x-auto rounded-lg border">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="p-3 border text-center">Давление, бар</th>
                    <th className="p-3 border text-center">min, м³/ч</th>
                    <th className="p-3 border text-center">max, м³/ч</th>
                    <th className="p-3 border text-center">Мощность, кВт</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((s, idx) => (
                    <tr key={idx} className="odd:bg-white even:bg-gray-50">
                      <td className="p-3 border text-center">{s.pressure ?? '-'}</td>
                      <td className="p-3 border text-center">{s.minFlow ?? s.flow ?? '-'}</td>
                      <td className="p-3 border text-center">{s.maxFlow ?? '-'}</td>
                      <td className="p-3 border text-center">{s.power ?? '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {product.flow && (
            <p className="mt-4 text-lg">
              <span className="font-semibold">Производительность:</span> {product.flow} м³/ч
            </p>
          )}
        </section>
      )}
    </main>
  );
}
