
// lib/equipmentHelpers.js

import categories from '../components/categories'
import { compressors, dryers, filters, dCompressors } from '../components/equipment'
import { equipmentInfo } from '../components/equipmentDetails'
import { slugify } from './slugify'

// === Универсальная нормализация ID ===
function normalizeId(id = '') {
  return String(id).trim().toLowerCase()
}

// ищем info нечувствительно к регистру
function findInfoById(id) {
  if (!id) return null
  const needle = String(id).trim().toLowerCase()
  // быстрые попытки
  if (equipmentInfo[id]) return equipmentInfo[id]
  if (equipmentInfo[id.toUpperCase()]) return equipmentInfo[id.toUpperCase()]
  if (equipmentInfo[id.toLowerCase()]) return equipmentInfo[id.toLowerCase()]

  // перебор ключей — безопасно, т.к. equipmentInfo обычно небольшой
  const foundKey = Object.keys(equipmentInfo).find(k => String(k).toLowerCase() === needle)
  return foundKey ? equipmentInfo[foundKey] : null
}

export function getAllProducts() {
  const tagged = [
    ...compressors.map(p => ({ ...p, category: 'compressors' })),
    ...dryers.map(p => ({ ...p, category: 'dryers' })),
    ...filters.map(p => ({ ...p, category: 'filters' })),
    ...dCompressors.map(p => ({ ...p, category: 'dcompressors' })),
  ];

  return tagged.map(pOrig => {
    const normalizedId = normalizeId(pOrig.id);
    const slug = slugify(normalizedId);

    // используем исходный объект pOrig при поиске info (но понижая регистр внутри findInfoById)
    const info = findInfoById(pOrig.id) || findInfoById(normalizedId) || null

    return {
      ...pOrig,
      id: normalizedId,        // теперь строчный id
      slug,                    // строчный slug
      url: `/products/${slug}`,
      info
    };
  });
}

export function getCategories() {
  return categories.map(cat => ({
    ...cat,
    slug: slugify(cat.id.toLowerCase()) // 🔥 на всякий случай
  }));
}

export function getProductsByCategory(catSlug) {
  const all = getAllProducts();
  return all.filter(
    p => slugify(p.category.toLowerCase()) === catSlug
  );
}

export function getProductBySlug(slug) {
  const all = getAllProducts();
  return all.find(p => p.slug === slug.toLowerCase()) || null;
}

export function buildCategorySeo(slug) {
  const normalizedSlug = slug.toLowerCase();
  const c = categories.find(
    c => slugify(c.id.toLowerCase()) === normalizedSlug
  );
  if (!c) return { title: "Категория", desc: "" };
  return { title: c.name, desc: c.description };
}

export function buildProductSeo(product) {
  return {
    title: `${product.name} — купить`,
    desc: product.info?.description || product.type
  };
}
