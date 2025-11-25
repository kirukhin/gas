// pages/products/[slug].jsx

// Импорт функции поиска товара и SEO-построителя
import { getProductBySlug, buildProductSeo } from '../../lib/equipmentHelpers';

// Общий макет страницы
import PageLayout from '../../components/PageLayout';

// Шаблон отображения самого товара
import ProductTemplate from '../../components/ProductTemplate';

// Импорт категорий — нужен для хлебных крошек
import categories from '../../components/categories';


// ========================
//   COMPONENT: ProductPage
// ========================

export default function ProductPage({ product, seo }) {
  // Если товар не найден — выводим fallback
  if (!product) return <div>Товар не найден</div>;

  /**
   * 1. Определяем, к какой категории относится продукт.
   * product.category содержит id категории (например: 'compressors', 'dryers').
   * Мы ищем объект категории в массиве categories по этому id.
   */
  const parentCategory = categories.find(c => c.id === product.category);

  return (
    <PageLayout
      title={seo.title}
      description={seo.desc}

      /**
       * 2. Формируем хлебные крошки:
       * - Главная
       * - Категория (если найдена)
       * - Сам продукт
       *
       * Используем spread-оператор, чтобы элегантно вставить категорию только при наличии.
       */
      breadcrumb={[
        { name: 'Главная', href: '/' },

        // Добавляем родительскую категорию, если она существует
        ...(parentCategory
          ? [
              {
                name: parentCategory.name,
                href: `/categories/${parentCategory.id}`
              }
            ]
          : []),

        // Текущий продукт
        { name: product.name, href: `/products/${product.slug}` }
      ]}

      // Канонический URL
      canonical={`/products/${product.slug}`}
    >
      {/* Основной шаблон товара */}
      <ProductTemplate product={product} />
    </PageLayout>
  );
}



// ========================
//   getStaticPaths
// ========================

export async function getStaticPaths() {
  // Динамический импорт — чтобы не тянуть всё лишнее при билде
  const { getAllProducts } = await import('../../lib/equipmentHelpers');

  // Получаем все товары для генерации путей
  const all = getAllProducts();

  return {
    paths: all.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  };
}



// ========================
//   getStaticProps
// ========================

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug);

  // Если товара нет — выводим 404
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      product,
      seo: buildProductSeo(product) // Генерация SEO-блока
    }
  };
}
