// components/ProductCard.jsx
import Link from 'next/link'
import { equipmentInfo } from './equipmentDetails'
import { fixImagePath } from '../lib/fixImagePath'

export default function ProductCard({ p }) {
  // --- INFO LOOKUP (как в ProductTemplate) ---
  const info =
    equipmentInfo[p.id?.toUpperCase?.()] ||
    equipmentInfo[p.id] ||
    equipmentInfo[p.id?.toLowerCase?.()] ||
    {};

  // --- IMAGE ---
  const rawImage =
    info.image ||
    p.info?.image ||
    p.image ||
    p.photo ||
    null;

  const image = rawImage ? fixImagePath(rawImage) : '/assets/no-image.png';

  // --- CHARACTERISTICS ---
  const firstSpec = p.specs?.[0] || {};

  const characteristics = [];

  if (firstSpec.minFlow && firstSpec.maxFlow) {
    characteristics.push({
      label: 'Производительность',
      value: `${firstSpec.minFlow}–${firstSpec.maxFlow} м³/ч`
    });
  }

  if (firstSpec.pressure) {
    characteristics.push({
      label: 'Давление',
      value: `${firstSpec.pressure} бар`
    });
  }

  if (firstSpec.power) {
    characteristics.push({
      label: 'Мощность',
      value: `${firstSpec.power} кВт`
    });
  }

  return (
    <article className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl hover:border-red-400 border border-transparent transition-all duration-300 flex flex-col">

      {/* IMAGE BLOCK */}
      <div className="bg-white flex items-center justify-center h-40 p-4">
        <img
          src={image}
          alt={p.name}
          className="h-full object-contain transform group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
          <Link href={`/products/${p.slug || p.id}`} className="hover:text-red-600">
            {p.name}
          </Link>
        </h3>

        {info.description && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-3">
            {info.description}
          </p>
        )}

        <ul className="text-sm text-gray-700 mb-4 space-y-1">
          {characteristics.map((c, i) => (
            <li key={i}>
              <span className="font-medium">{c.label}: </span>
              {c.value}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="text-base font-semibold text-gray-800 mb-3">
            {p.price
              ? `${Number(p.price).toLocaleString('ru-RU')} ₽`
              : 'Цена по запросу'}
          </div>

          <Link
            href={`/products/${p.slug || p.id}`}
            className="w-full block text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-lg transition"
          >
            Подробнее
          </Link>
        </div>

      </div>
    </article>
  );
}
