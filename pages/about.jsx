// pages/about.jsx
import Head from 'next/head'
import Breadcrumbs from '../components/Breadcrumbs'


const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://blitzgas.ru'

export default function About() {
  const canonical = `${SITE}/about`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Блицгаз",
    "url": SITE,
    "logo": `${SITE}/favicon.ico`,
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+7 (495) 065-92-76",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": ["Russian"]
    }],
    "sameAs": []
  }


  return (
    <>
      <Head>
        <title>О компании — Блицгаз</title>
        <meta name="description" content="Блицгаз — поставка и сервис газоразделительных установок. 30 лет опыта, монтаж, пусконаладка и обслуживание." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="О компании — Блицгаз" />
        <meta property="og:description" content="Блицгаз — поставка и сервис газоразделительных установок. 30 лет опыта." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        {/* add image if you have one */}
        <meta property="og:image" content={`${SITE}/assets/about-hero.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* HERO: уменьшенная по высоте, только заголовок + картинка справа */}
      <header className="leading-normal tracking-normal text-white">
        <section className="gradient pt-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              {/* Left: только заголовок */}
              <div className="w-full md:w-2/5">
                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  style={{ color: '#0f172a' }}
                >
                  О компании Блицгаз
                </h1>

                {/* Хлебные крошки */}
                <Breadcrumbs className="mt-6" />

              </div>

              {/* Right: картинка, подгоняемая по высоте блока */}
              <div className="hidden md:block md:w-3/5">
                <div className="flex justify-end items-center">
                  <img
                    src="/assets/about-hero.png"
                    alt="Производство и сервис Блицгаз"
                    className="max-h-40 md:max-h-56 lg:max-h-72 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

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

      {/* Content area (white background) */}
      <main className="bg-white text-gray-800">
        <section className="container max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Блицгаз: газоразделительные технологии для вашего бизнеса</h2>

          <div className="prose max-w-none text-gray-600">
            <p className="mb-6">
              Блицгаз — современная компания, специализирующаяся на поставке и обслуживании сложного инженерного
              оборудования для предприятий России и стран СНГ. Мы предлагаем решения, которые позволяют организовать
              производство технических газов прямо на площадке заказчика, оптимизировать процессы подготовки воздуха и
              снизить эксплуатационные затраты.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Технологии и продукты</h3>
            <p className="mb-6">
              Мы предлагаем гибкую модульную линейку газоразделительного оборудования по технологии короткоцикловой
              адсорбции (PSA/КБА). Такая архитектура позволяет конфигурировать установки под конкретные задачи — от
              генерации азота и кислорода для небольших производств до комплексных промышленных решений.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Комплектующие и интеграция</h3>
            <p className="mb-6">
              Блицгаз поставляет широкий спектр инженерного оборудования — винтовые компрессоры, осушители, адсорберы и
              системы подготовки воздуха. Благодаря этому клиенты получают полный комплект технологий «под ключ»: от источника
              сжатого воздуха до готового продукта, соответствующего требованиям конкретного производства.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Сервис и сопровождение</h3>
            <p className="mb-6">
              Особое внимание мы уделяем сервису и сопровождению. Монтаж, пусконаладка, гарантийное и постгарантийное
              обслуживание выполняются специалистами с уникальным отраслевым опытом, накопленным десятилетиями работы в
              сфере газоразделительных технологий.
            </p>

            <blockquote>
              <strong>Наша миссия:</strong> сделать передовые технологии получения и подготовки технических газов доступными для широкого круга предприятий.
            </blockquote>


          </div>
        </section>

        {/* Team / Gallery block */}
        <section className="border-t border-gray-100 mb-4">
          <div className="container mx-auto px-6 py-12 max-w-6xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Блицгаз для вашего бизнеса</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
             
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/assets/team-1.png" alt="Подбор оборудования" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Проектирование и подбор</h4>
                  <p className="text-gray-600 text-sm">Опытные инженеры рассчитают и подберут оптимальное оборудование для вашего бизнеса.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/assets/team-2.png" alt="Поставка оборудования" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Поставка</h4>
                  <p className="text-gray-600 text-sm">Логистика от завода-производителя до места монтажа по всей России и странам СНГ.</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src="/assets/team-3.png" alt="Сервисное обслуживание" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Сервисное обсуживание</h4>
                  <p className="text-gray-600 text-sm">Монтаж, ПНР и постгарантийное обслуживание по прозрачным сервисным контрактам.</p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Преимущества при работе с нами</h3>
            <ul className="list-disc list-inside">
              <li>Решения, адаптированные под ваши задачи и масштабы производства</li>
              <li>Профессиональный монтаж и ввод в эксплуатацию</li>
              <li>Прозрачные сервисные контракты без скрытых расходов</li>
              <li>Оперативное обслуживание и ремонт</li>
            </ul>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-12 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Хотите обсудить проект?</h4>
              <p className="text-gray-600">Оставьте заявку — мы подготовим предложение под ваши требования.</p>
            </div>
            <div>
              <a href="#footer" className="cursor-pointer bg-white text-red-600 font-semibold rounded-full py-3 px-8 shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 inline-block relative">Связаться с нами</a>
            </div>
          </div>
        </section>


      </main>

      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#FFFFFF">
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
