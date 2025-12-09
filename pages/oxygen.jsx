// pages/oxygen.jsx
import Head from 'next/head'
import Breadcrumbs from '../components/Breadcrumbs'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://blitzgas.ru'

export default function Oxygen() {
  const canonical = `${SITE}/oxygen`

  // -------------------------------
  // JSON-LD: Article + Breadcrumbs
  // -------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Технология КЦА (PSA) генерации кислорода — принцип работы, адсорбенты, подготовка воздуха",
    "author": { "@type": "Organization", "name": "Блицгаз" },
    "publisher": {
      "@type": "Organization",
      "name": "Блицгаз",
      "logo": { "@type": "ImageObject", "url": `${SITE}/favicon.ico` }
    },
    "mainEntityOfPage": canonical,
    "url": canonical,
    "inLanguage": "ru",
    "image": [`${SITE}/assets/oxygen/hero.png`],
    "description": "Подробное техническое объяснение технологии PSA / КЦА для генерации кислорода: принцип работы, цеолитовые адсорбенты, циклы адсорбции–десорбции, требования к подготовке воздуха и схемы применения.",
    "articleSection": [
      "Физико-химический принцип PSA",
      "Адсорбенты для генерации кислорода (цеолиты LiX / LiLSX)",
      "Циклы адсорбции и десорбции",
      "Подготовка воздуха",
      "Кривые чистоты и производительности",
      "Типовые области применения"
    ]
  }

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Главная",
        "item": SITE
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Технологии",
        "item": `${SITE}/technologies`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Генерация кислорода (КЦА/PSA)",
        "item": canonical
      }
    ]
  }

  return (
    <>
      {/* ===========================
          HEAD
      ============================ */}
      <Head>
        <title>Генерация кислорода КЦА/PSA — принцип работы, адсорбенты и требования | Блицгаз</title>
        <meta
          name="description"
          content="Технология короткоцикловой адсорбции (КЦА/PSA) для генерации кислорода. Принцип работы, цеолиты LiX/LiLSX, циклы адсорбции, подготовка воздуха, чистота и эффективность."
        />
        <link rel="canonical" href={canonical} />

        {/* OG */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Генерация кислорода КЦА/PSA — принцип работы, схемы, адсорбенты" />
        <meta property="og:description" content="Технический разбор технологии PSA генерации кислорода: цеолиты, циклы, подготовка воздуха, требования и преимущества." />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}/assets/oxygen/hero.png`} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }} />
      </Head>

      {/* ===========================
          HERO BLOCK
      ============================ */}
      <header className="leading-normal tracking-normal text-white">
        <section className="gradient pt-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              
              {/* LEFT: Title + breadcrumbs */}
              <div className="w-full md:w-2/5">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ color: '#0f172a' }}
                >
                  Генерация кислорода по технологии КЦА (PSA)
                </h1>

                <div className="mt-6 relative z-20">
                  <Breadcrumbs />
                </div>
              </div>

              {/* RIGHT: hero image */}
              <div className="hidden md:block md:w-3/5">
                <div className="flex justify-end items-center">
                  <img
                    src="/assets/oxygen/hero.png"
                    alt="КЦА генерация кислорода PSA"
                    className="max-h-40 md:max-h-56 lg:max-h-72 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="relative -mt-12 lg:-mt-24">
            {/* ... SVG wave unchanged ... */}
          </div>
        </section>
      </header>

      {/* ===========================
          ARTICLE CONTENT
      ============================ */}
      <main className="bg-white text-gray-800">
        <section className="container max-w-5xl mx-auto px-6 py-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Принцип работы генераторов кислорода по технологии короткоцикловой адсорбции (КЦА/PSA)
          </h2>

          <div className="prose max-w-none text-gray-700 prose-img:rounded-xl prose-img:shadow-md">

            {/* =====================================================
                1. PRINCIPLE – molecular.png
            ===================================================== */}
            <p>
              Технология PSA основана на явлении избирательной адсорбции.
              В генераторах кислорода используется обратный принцип по отношению
              к азотным установкам: адсорбент задерживает <strong>азот</strong>,
              пропуская <strong>кислород</strong> в качестве продукта.
            </p>

            <figure className="my-10">
              <img src="/assets/oxygen/molecular.png" alt="Молекулярные различия O₂ и N₂" />
              <figcaption className="text-sm text-gray-500 mt-2">
                В технологии PSA-O₂ используется преимущественная адсорбция азота цеолитами.
                Молекулы N₂ имеют более высокую поляризуемость и лучше захватываются кристаллической решёткой LiX/LiLSX.
              </figcaption>
            </figure>

            <p>
              Наиболее распространённые адсорбенты для генерации кислорода — это
              <strong>цеолиты типа X, модифицированные литием (LiX, LiLSX)</strong>,
              обладающие высокой избирательностью по азоту.
            </p>

            {/* =====================================================
                2. ZEOLITE STRUCTURE – zeolite-structure.png
            ===================================================== */}
            <figure className="my-10">
              <img src="/assets/oxygen/zeolite-structure.png" alt="Структура цеолита LiX" />
              <figcaption className="text-sm text-gray-500 mt-2">
                Структура цеолита LiX: регулярная поровая решётка с сильными катионными центрами,
                обеспечивающими высокую адсорбцию молекул азота.
              </figcaption>
            </figure>

            <p>
              Благодаря высокой ёмкости по азоту и малому диффузионному сопротивлению,
              цеолиты позволяют получать кислород чистотой <strong>90–95%</strong>
              в компактных колоннах при низком энергопотреблении.
            </p>

            {/* =====================================================
                3. PSA CYCLE – psa-cycle.png
            ===================================================== */}
            <h3 id="psa-cycle">Циклы адсорбции–десорбции</h3>

            <p>
              Генератор кислорода включает две адсорбционные колонны,
              которые работают попеременно:
            </p>

            <ul>
              <li><strong>Адсорбция:</strong> азот задерживается в цеолите, кислород проходит в линию продукта.</li>
              <li><strong>Депрессия:</strong> давление снижается, адсорбированный азот удаляется в атмосферу.</li>
              <li><strong>Регенерация:</strong> колонна возвращается к исходному состоянию.</li>
              <li><strong>Уравнивание давления:</strong> минимизирует потери энергии и увеличивает ресурс адсорбента.</li>
            </ul>

            <figure className="my-10">
              <img src="/assets/oxygen/psa-cycle.png" alt="Цикл PSA генерации кислорода" />
              <figcaption className="text-sm text-gray-500 mt-2">
                Типичный двухколонный PSA-цикл: адсорбция, уравнивание, десорбция, продувка и восстановление давления.
              </figcaption>
            </figure>

            {/* =====================================================
                4. PSA PRINCIPLE – psa-principle.png
            ===================================================== */}
            <figure className="my-10">
              <img src="/assets/oxygen/psa-principle.png" alt="Принцип работы генератора кислорода PSA" />
              <figcaption className="text-sm text-gray-500 mt-2">
                Схема прохождения воздуха через генератор кислорода: предварительная фильтрация,
                сжатие, осушка, адсорбционные колонны и буфер кислорода.
              </figcaption>
            </figure>

            {/* =====================================================
                5. PREPARATION – airflow.png
            ===================================================== */}
            <h3 id="air-preparation">Требования к подготовке воздуха</h3>

            <p>
              Для стабильной работы генератора кислорода требуется тщательно подготовленный
              сжатый воздух. Наиболее критичны:
            </p>

            <ul>
              <li><strong>Влага:</strong> допускается точка росы не выше −40 °C для LiLSX.</li>
              <li><strong>Масло:</strong> содержание не более 0,003 мг/м³.</li>
              <li><strong>Пыль и аэрозоли:</strong> трёхступенчатая фильтрация.</li>
            </ul>

            <figure className="my-10">
              <img src="/assets/oxygen/airflow.png" alt="Подготовка воздуха" />
              <figcaption className="text-sm text-gray-500 mt-2">
                Стандартная схема подготовки воздуха: компрессор → охладитель → фильтры → осушитель → генератор О₂.
              </figcaption>
            </figure>

            {/* =====================================================
                6. PURITY CURVE – purity-curve.png
            ===================================================== */}
            <h3 id="purity">Чистота и производительность</h3>

            <p>
              Кривые чистоты PSA показывают зависимость производительности генератора
              от требуемой концентрации кислорода. Чем выше чистота — тем ниже
              выход по объёму, так как система работает на более глубоких этапах адсорбции.
            </p>

            <figure className="my-10">
              <img src="/assets/oxygen/purity-curve.png" alt="Кривая чистоты кислорода" />
              <figcaption className="text-sm text-gray-500 mt-2">
                Типовая зависимость: при увеличении чистоты с 90% до 95% производительность падает на 20–35%.
              </figcaption>
            </figure>

            {/* =====================================================
                7. APPLICATIONS – applications.png
            ===================================================== */}
            <h3 id="applications">Области применения генераторов кислорода</h3>

            <figure className="my-10">
              <img src="/assets/oxygen/applications.png" alt="Применение генераторов кислорода" />
              <figcaption className="text-sm text-gray-500 mt-2">
                Генераторы кислорода используются в медицине, пищевой промышленности, металлургии,
                аквакультуре, озонаторах, резке металлов и экологических системах.
              </figcaption>
            </figure>

            <p>
              Наиболее распространённые сегменты:
            </p>
            <ul>
              <li>медицинские централизованные системы О₂</li>
              <li>поддержание горения и обогащение смесей</li>
              <li>рыбные хозяйства и аквакультура</li>
              <li>переработка металлов</li>
              <li>озонаторы и процессы окисления</li>
            </ul>

          </div>
        </section>
      </main>
    </>
  )
}
