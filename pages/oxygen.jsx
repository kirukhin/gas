// pages/oxygen.jsx
import Head from 'next/head'
import Breadcrumbs from '../components/Breadcrumbs'
import PsaKineticsChart from "../components/PsaKineticsChart"

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://blitzgas.ru'

export default function Oxygen() {
  const canonical = `${SITE}/oxygen`

  // --------------------------------
  // JSON-LD: Article
  // --------------------------------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Технология КЦА (PSA) генерации кислорода — принцип работы, адсорбенты и эффективность",
    "author": {
      "@type": "Organization",
      "name": "Блицгаз"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Блицгаз",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE}/favicon.ico`
      }
    },
    "mainEntityOfPage": canonical,
    "url": canonical,
    "inLanguage": "ru",
    "image": [`${SITE}/assets/oxygen/hero.png`],
    "description":
      "Глубокий технический разбор технологии короткоцикловой адсорбции (КЦА/PSA) для генерации кислорода. Принцип работы, цеолитовые адсорбенты LiX и LiLSX, циклы адсорбции и десорбции, подготовка воздуха и области применения.",
    "articleSection": [
      "Физико-химический принцип PSA",
      "Адсорбенты для генерации кислорода (цеолиты LiX / LiLSX)",
      "Циклы адсорбции и десорбции",
      "Зависимость чистоты и производительности",
      "Требования к подготовке воздуха",
      "Применение PSA-кислорода"
    ]
  }

  // --------------------------------
  // Breadcrumbs (UI)
  // --------------------------------
  const breadcrumbs = [
    { name: 'Главная', href: '/' },
    { name: 'Генерация кислорода (КЦА/PSA)', href: '/oxygen' }
  ]

  // --------------------------------
  // JSON-LD: Breadcrumbs
  // --------------------------------
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
        <title>
          Генерация кислорода КЦА/PSA — принцип работы и адсорбенты | Блицгаз
        </title>

        <meta
          name="description"
          content="Подробный технический разбор технологии короткоцикловой адсорбции (КЦА/PSA) для генерации кислорода. Цеолитовые адсорбенты LiX и LiLSX, циклы, чистота, производительность и требования к подготовке воздуха."
        />

        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Генерация кислорода КЦА/PSA — принцип работы и адсорбенты | Блицгаз"
        />
        <meta
          property="og:description"
          content="Технология PSA / КЦА генерации кислорода: принцип работы, цеолитовые адсорбенты, циклы, эффективность и схемы применения."
        />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content={`${SITE}/assets/oxygen/hero.png`}
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
        />
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
                  <Breadcrumbs items={breadcrumbs} />
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
            <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fillRule="nonzero">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    id="Path-4"
                    opacity="0.200000003"
                  ></path>
                </g>
                <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
                  <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </section>
      </header>


{/* ===========================
    ARTICLE CONTENT
============================ */}
<main className="bg-white text-gray-800">
  <section className="container max-w-5xl mx-auto px-6 py-12">

    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
      Технология короткоцикловой адсорбции (КЦА/PSA) для получения кислорода
    </h2>

    <div className="prose max-w-none text-gray-700 prose-img:rounded-xl prose-img:shadow-md">

      {/* ======================================================
          1. PRINCIPLE – kinetics chart (вместо molecular.png)
      ======================================================= */}
      <p>
        Короткоцикловая адсорбция (<strong>КЦА, PSA — Pressure Swing Adsorption</strong>)
        — промышленная технология получения кислорода из атмосферного воздуха,
        основанная на <strong>избирательной адсорбции азота</strong> в кристаллической
        структуре цеолитов при переменном давлении.
        В отличие от азотных PSA-систем, где используется кинетическая селективность,
        генерация кислорода опирается преимущественно на
        <strong>термодинамическую селективность адсорбции</strong>.
      </p>

      <p>
        Ключевую роль играет различие в <strong>поляризуемости молекул</strong>:
        молекулы азота (N₂) обладают более высоким квадрупольным моментом,
        чем кислород (O₂). Благодаря этому N₂ значительно сильнее взаимодействует
        с активными центрами цеолита, тогда как кислород проходит через колонну
        и отбирается в качестве продукта.
      </p>

      <p>
        Изотермы адсорбции азота на цеолитах LiX и LiLSX имеют выраженную
        нелинейную форму уже при давлениях <strong>3–6 бар</strong>,
        что делает PSA-процесс высокоэффективным при умеренном сжатии воздуха.
        Это позволяет получать кислород концентрацией <strong>90–95%</strong>
        при низком удельном энергопотреблении и компактных размерах колонн.
      </p>

      <PsaKineticsChart />

      {/* ======================================================
          2. ZEOLITE STRUCTURE – zeolite-structure.png
      ======================================================= */}
      <h3>Цеолитовые адсорбенты для генерации кислорода</h3>

      <figure className="my-10">
        <img src="/assets/oxygen/zeolite-structure.png" alt="Структура цеолита LiX" />
        <figcaption className="text-sm text-gray-500 mt-2">
          Кристаллическая структура цеолита LiX/LiLSX с равномерной системой пор
          и ионными центрами лития, обеспечивающими высокую адсорбцию азота.
        </figcaption>
      </figure>

      <p>
        В PSA-генераторах кислорода применяются цеолиты
        <strong> LiX и LiLSX (Low Silica X)</strong>,
        модифицированные ионами лития.
        Литиевые катионы создают сильные локальные электростатические поля,
        которые эффективно удерживают молекулы N₂.
      </p>

      <p>
        Основные преимущества Li-содержащих цеолитов:
      </p>

      <ul>
        <li>высокая рабочая ёмкость по азоту</li>
        <li>быстрое достижение равновесия адсорбции</li>
        <li>устойчивость к многомиллионным циклам давления</li>
        <li>возможность работы при низких перепадах давления</li>
      </ul>

      <p>
        За счёт этого кислородные PSA-установки отличаются
        высокой стабильностью чистоты и длительным сроком службы адсорбента.
      </p>

      {/* ======================================================
          3. PSA CYCLE – psa-cycle.png
      ======================================================= */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Циклы адсорбции и десорбции в PSA-генераторе кислорода
      </h3>

      <figure className="my-10 text-center">
        <img src="/assets/oxygen/psa-cycle.png" alt="Цикл PSA генерации кислорода" className="mx-auto" />
        <figcaption className="text-sm text-gray-500 mt-2">
          Типовой PSA-цикл генерации кислорода: адсорбция, уравнивание давления,
          десорбция азота и восстановление.
        </figcaption>
      </figure>

      <p className="mb-6">
        Генераторы кислорода используют двухколоночную схему,
        в которой колонны работают в противофазе.
        Пока одна колонна находится под давлением и адсорбирует азот,
        вторая — регенерируется при пониженном давлении.
      </p>

      <ol className="mb-6">
        <li><strong>Адсорбция.</strong> Сжатый и осушенный воздух проходит через цеолит;
          азот адсорбируется, кислород поступает в буфер.</li>
        <li><strong>Выравнивание давления.</strong> Часть газа перераспределяется
          между колоннами для снижения энергопотерь.</li>
        <li><strong>Десорбция.</strong> Давление снижается, азот удаляется в атмосферу.</li>
        <li><strong>Репрессуризация.</strong> Колонна подготавливается к новому циклу.</li>
      </ol>

      <p className="mb-6">
        Длительность полного цикла составляет <strong>30–120 секунд</strong>,
        что обеспечивает стабильный непрерывный поток кислорода
        без заметных колебаний чистоты.
      </p>

      {/* ======================================================
          4. PSA PRINCIPLE – psa-principle.png
      ======================================================= */}
      <figure className="my-10">
        <img src="/assets/oxygen/psa-principle.png" alt="Принцип работы генератора кислорода PSA" />
        <figcaption className="text-sm text-gray-500 mt-2">
          Общая схема PSA-генератора кислорода: компрессия, подготовка воздуха,
          адсорбционные колонны и кислородный ресивер.
        </figcaption>
      </figure>

      {/* ======================================================
          5. AIR PREPARATION – airflow.png
      ======================================================= */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Подготовка воздуха и требования к входным параметрам
      </h3>

      <figure className="my-10 text-center">
        <img src="/assets/oxygen/airflow.png" alt="Подготовка воздуха для PSA кислорода" className="mx-auto" />
        <figcaption className="text-sm text-gray-500 mt-2">
          Компрессор → охладитель → фильтры → осушитель → PSA-генератор кислорода.
        </figcaption>
      </figure>

      <p className="mb-6">
        Цеолитовые адсорбенты крайне чувствительны к загрязнениям.
        Качество подготовки воздуха напрямую определяет ресурс PSA-системы.
      </p>

      <ul className="mb-6">
        <li><strong>Точка росы:</strong> не выше −40 °C (для LiLSX)</li>
        <li><strong>Масло:</strong> ≤ 0,003 мг/м³</li>
        <li><strong>Пыль:</strong> фильтрация до 0,01 мкм</li>
      </ul>

      <p className="mb-6">
        Несоблюдение этих требований приводит к деградации цеолита,
        падению чистоты кислорода и сокращению срока службы установки.
      </p>

      {/* ======================================================
          6. PURITY CURVE – purity-curve.png
      ======================================================= */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Зависимость производительности от чистоты кислорода
      </h3>

      <figure className="my-10 text-center">
        <img src="/assets/oxygen/purity-curve.png" alt="Кривая чистоты кислорода PSA" className="mx-auto" />
        <figcaption className="text-sm text-gray-500 mt-2">
          Повышение чистоты кислорода сопровождается снижением производительности
          и ростом расхода воздуха.
        </figcaption>
      </figure>

      <p className="mb-6">
        Типовые PSA-системы оптимизированы для диапазона <strong>90–95% O₂</strong>.
        Повышение чистоты требует более глубоких циклов адсорбции,
        что снижает объёмный выход.
      </p>

      <ul className="mb-6">
        <li>снижение производительности на 20–40%</li>
        <li>рост энергопотребления компрессора</li>
        <li>увеличение нагрузки на клапанную группу</li>
      </ul>

      {/* ======================================================
          7. APPLICATIONS – applications.png
      ======================================================= */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Применение PSA-генераторов кислорода
      </h3>

      <figure className="my-10 text-center">
        <img src="/assets/oxygen/applications.png" alt="Применение генераторов кислорода" className="mx-auto" />
        <figcaption className="text-sm text-gray-500 mt-2">
          Медицина, металлургия, аквакультура, озонаторы, процессы окисления.
        </figcaption>
      </figure>

      <p className="mb-10">
        PSA-генераторы кислорода обеспечивают автономное, безопасное
        и экономически эффективное производство O₂ непосредственно на объекте,
        исключая зависимость от баллонов и жидкого кислорода.
      </p>

    </div>
  </section>
</main>
     {/* Wave SVG (bottom) */}
     <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#ffffff">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>

            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>

    </>
  )
}