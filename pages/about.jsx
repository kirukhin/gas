// pages/about.jsx
import Head from 'next/head'
import Breadcrumbs from '../components/Breadcrumbs'
import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";


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

      
      <PageHero
  variant="compact"
  title="О компании Блицгаз"
  breadcrumbs={
    <Breadcrumbs theme="light" />
  }
  image="/assets/about-hero.png"
  imageAlt="Производство и сервис Блицгаз"
/>


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


    </>
  )
}
