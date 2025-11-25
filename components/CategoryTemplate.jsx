// components/CategoryTemplate.jsx
import ProductCard from './ProductCard';

export default function CategoryTemplate({ title, products = [], categorySlug }) {
  return (
    <main className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-700 max-w-3xl">
          Подбор по m³/ч и давлению. Выберите модель для подробных характеристик, даташита и рекомендаций по сопутствующему оборудованию.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map(p => <ProductCard key={p.id} p={p} />)}
      </section>

      <div className="mt-8 p-6 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">Нужна помощь с подбором?</h2>
        <p className="text-gray-700">Отправьте требования (m³/ч, бар, режим работы) — мы подготовим расчёт и КП.</p>
        <a href="/quote" className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded">Запросить расчёт</a>
      </div>
    </main>
  );
}
