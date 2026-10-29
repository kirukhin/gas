// pages/oxygen.jsx

import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import Breadcrumbs from '../components/Breadcrumbs'
import PsaKineticsChart from '../components/PsaKineticsChart'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://blitzgas.ru'

export default function Oxygen() {
  const canonical = `${SITE}/oxygen`

  // --------------------------------
  // Breadcrumbs (UI)
  // --------------------------------
  const breadcrumbs = [
    { name: 'Главная', href: '/' },
    { name: 'Генерация кислорода (КЦА/PSA)', href: '/oxygen' },
  ]

  // --------------------------------
  // JSON-LD: Article
  // --------------------------------
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Технология КЦА (PSA) генерации кислорода — принцип работы, адсорбенты и эффективность',
    author: {
      '@type': 'Organization',
      name: 'Блицгаз',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Блицгаз',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/favicon.ico`,
      },
    },
    mainEntityOfPage: canonical,
    url: canonical,
    inLanguage: 'ru',
    image: [`${SITE}/assets/oxygen/hero.png`],
    description:
      'Глубокий технический разбор технологии короткоцикловой адсорбции (КЦА/PSA) для генерации кислорода. Принцип работы, цеолитовые адсорбенты LiX и LiLSX, циклы адсорбции и десорбции, подготовка воздуха и области применения.',
    articleSection: [
      'Физико-химический принцип PSA',
      'Адсорбенты для генерации кислорода (цеолиты LiX / LiLSX)',
      'Циклы адсорбции и десорбции',
      'Зависимость чистоты и производительности',
      'Требования к подготовке воздуха',
      'Применение PSA-кислорода',
    ],
  }

  // --------------------------------
  // JSON-LD: BreadcrumbList
  // --------------------------------
  const jsonLdBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: SITE,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Генерация кислорода (КЦА/PSA)',
        item: canonical,
      },
    ],
  }

  const structuredData = [jsonLd, jsonLdBreadcrumbs]

  return (
    <PageLayout
      title="Генерация кислорода КЦА/PSA — принцип работы и адсорбенты | Блицгаз"
      description="Подробный технический разбор технологии короткоцикловой адсорбции (КЦА/PSA) для генерации кислорода. Цеолитовые адсорбенты LiX и LiLSX, циклы, чистота, производительность и требования к подготовке воздуха."
      canonical={canonical}
      heroImage="/assets/oxygen/hero.png"
      jsonLd={structuredData}
      breadcrumb={breadcrumbs}
      hero={
        <PageHero
          title="Генерация кислорода по технологии КЦА (PSA)"
          breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
          image="/assets/oxygen/hero.png"
          imageAlt="КЦА-генерация кислорода по технологии PSA"
          variant="compact"
        />
      }
    >
      <section className="container max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Технология короткоцикловой адсорбции (КЦА/PSA) для получения кислорода
        </h2>

        <div className="prose max-w-none text-gray-700 prose-img:rounded-xl prose-img:shadow-md">
          {/* 1. PRINCIPLE — kinetics chart */}

          <p>
            Короткоцикловая адсорбция (
            <strong>КЦА, PSA — Pressure Swing Adsorption</strong>) —
            промышленная технология получения кислорода из атмосферного воздуха,
            основанная на <strong>избирательной адсорбции азота</strong> в
            кристаллической структуре цеолитов при переменном давлении. В отличие
            от азотных PSA-систем, где используется кинетическая селективность,
            генерация кислорода опирается преимущественно на
            <strong> термодинамическую селективность адсорбции</strong>.
          </p>

          <p>
            Ключевую роль играет различие в{' '}
            <strong>поляризуемости молекул</strong>: молекулы азота (N₂) обладают
            более высоким квадрупольным моментом, чем кислород (O₂). Благодаря
            этому N₂ значительно сильнее взаимодействует с активными центрами
            цеолита, тогда как кислород проходит через колонну и отбирается в
            качестве продукта.
          </p>

          <p>
            Изотермы адсорбции азота на цеолитах LiX и LiLSX имеют выраженную
            нелинейную форму уже при давлениях <strong>3–6 бар</strong>, что
            делает PSA-процесс высокоэффективным при умеренном сжатии воздуха.
            Это позволяет получать кислород концентрацией{' '}
            <strong>90–95%</strong> при низком удельном энергопотреблении и
            компактных размерах колонн.
          </p>

          <PsaKineticsChart />

          {/* 2. ZEOLITE STRUCTURE */}

          <h3>Цеолитовые адсорбенты для генерации кислорода</h3>

          <figure className="my-10">
            <img
              src="/assets/oxygen/zeolite-structure.png"
              alt="Структура цеолита LiX"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Кристаллическая структура цеолита LiX/LiLSX с равномерной системой
              пор и ионными центрами лития, обеспечивающими высокую адсорбцию
              азота.
            </figcaption>
          </figure>

          <p>
            В PSA-генераторах кислорода применяются цеолиты{' '}
            <strong>LiX и LiLSX (Low Silica X)</strong>, модифицированные ионами
            лития. Литиевые катионы создают сильные локальные электростатические
            поля, которые эффективно удерживают молекулы N₂.
          </p>

          <p>Основные преимущества Li-содержащих цеолитов:</p>

          <ul>
            <li>высокая рабочая ёмкость по азоту;</li>
            <li>быстрое достижение равновесия адсорбции;</li>
            <li>устойчивость к многомиллионным циклам давления;</li>
            <li>возможность работы при низких перепадах давления.</li>
          </ul>

          <p>
            За счёт этого кислородные PSA-установки отличаются высокой
            стабильностью чистоты и длительным сроком службы адсорбента.
          </p>

          {/* 3. PSA CYCLE */}

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Циклы адсорбции и десорбции в PSA-генераторе кислорода
          </h3>

          <figure className="my-10 text-center">
            <img
              src="/assets/oxygen/psa-cycle.png"
              alt="Цикл PSA-генерации кислорода"
              className="mx-auto"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Типовой PSA-цикл генерации кислорода: адсорбция, уравнивание
              давления, десорбция азота и восстановление.
            </figcaption>
          </figure>

          <p className="mb-6">
            Генераторы кислорода используют двухколоночную схему, в которой
            колонны работают в противофазе. Пока одна колонна находится под
            давлением и адсорбирует азот, вторая регенерируется при пониженном
            давлении.
          </p>

          <ol className="mb-6">
            <li>
              <strong>Адсорбция.</strong> Сжатый и осушенный воздух проходит
              через цеолит; азот адсорбируется, кислород поступает в буфер.
            </li>
            <li>
              <strong>Выравнивание давления.</strong> Часть газа
              перераспределяется между колоннами для снижения энергопотерь.
            </li>
            <li>
              <strong>Десорбция.</strong> Давление снижается, азот удаляется в
              атмосферу.
            </li>
            <li>
              <strong>Репрессуризация.</strong> Колонна подготавливается к новому
              циклу.
            </li>
          </ol>

          <p className="mb-6">
            Длительность полного цикла составляет <strong>30–120 секунд</strong>,
            что обеспечивает стабильный непрерывный поток кислорода без заметных
            колебаний чистоты.
          </p>

          {/* 4. PSA PRINCIPLE */}

          <figure className="my-10">
            <img
              src="/assets/oxygen/psa-principle.png"
              alt="Принцип работы генератора кислорода PSA"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Общая схема PSA-генератора кислорода: компрессия, подготовка
              воздуха, адсорбционные колонны и кислородный ресивер.
            </figcaption>
          </figure>

          {/* 5. AIR PREPARATION */}

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Подготовка воздуха и требования к входным параметрам
          </h3>

          <figure className="my-10 text-center">
            <img
              src="/assets/oxygen/airflow.png"
              alt="Подготовка воздуха для PSA-генерации кислорода"
              className="mx-auto"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Компрессор → охладитель → фильтры → осушитель → PSA-генератор
              кислорода.
            </figcaption>
          </figure>

          <p className="mb-6">
            Цеолитовые адсорбенты крайне чувствительны к загрязнениям. Качество
            подготовки воздуха напрямую определяет ресурс PSA-системы.
          </p>

          <ul className="mb-6">
            <li>
              <strong>Точка росы:</strong> не выше −40 °C (для LiLSX).
            </li>
            <li>
              <strong>Масло:</strong> ≤ 0,003 мг/м³.
            </li>
            <li>
              <strong>Пыль:</strong> фильтрация до 0,01 мкм.
            </li>
          </ul>

          <p className="mb-6">
            Несоблюдение этих требований приводит к деградации цеолита, падению
            чистоты кислорода и сокращению срока службы установки.
          </p>

          {/* 6. PURITY CURVE */}

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Зависимость производительности от чистоты кислорода
          </h3>

          <figure className="my-10 text-center">
            <img
              src="/assets/oxygen/purity-curve.png"
              alt="Зависимость производительности PSA-генератора от чистоты кислорода"
              className="mx-auto"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Повышение чистоты кислорода сопровождается снижением
              производительности и ростом расхода воздуха.
            </figcaption>
          </figure>

          <p className="mb-6">
            Типовые PSA-системы оптимизированы для диапазона{' '}
            <strong>90–95% O₂</strong>. Повышение чистоты требует более глубоких
            циклов адсорбции, что снижает объёмный выход.
          </p>

          <ul className="mb-6">
            <li>снижение производительности на 20–40%;</li>
            <li>рост энергопотребления компрессора;</li>
            <li>увеличение нагрузки на клапанную группу.</li>
          </ul>

          {/* 7. APPLICATIONS */}

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Применение PSA-генераторов кислорода
          </h3>

          <figure className="my-10 text-center">
            <img
              src="/assets/oxygen/applications.png"
              alt="Области применения генераторов кислорода"
              className="mx-auto"
              loading="lazy"
            />
            <figcaption className="text-sm text-gray-500 mt-2">
              Медицина, металлургия, аквакультура, озонаторы, процессы окисления.
            </figcaption>
          </figure>

          <p className="mb-10">
            PSA-генераторы кислорода обеспечивают автономное, безопасное и
            экономически эффективное производство O₂ непосредственно на
            объекте, исключая зависимость от баллонов и жидкого кислорода.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}