
import Head from "next/head";
import data from "../components/data.js";
import Breadcrumbs from "../components/Breadcrumbs";
import { useState } from "react";
import PageHero from "../components/PageHero";
import PageContent from "../components/PageContent";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://blitzgas.ru";

export default function Nitrogenerators() {
  const canonical = `${SITE}/nitrogenerators`;
  const generators = data.nitrogen;

  const breadcrumbs = [
    { name: "Главная", href: "/" },
    { name: "Азотные генераторы", href: "/nitrogenerators" },
  ];

  const models = Object.values(generators);
  const purities = ["95%", "99%", "99.9%", "99.99%"];

  const [activePurity, setActivePurity] = useState("99.9%");

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Азотные генераторы PSA",
    itemListElement: models.map((m, i) => ({
      "@type": "Product",
      position: i + 1,
      name: m.model,
      image: `${SITE}${m.url}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: m.price,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Азотные генераторы",
        item: canonical,
      },
    ],
  };

  const formatPrice = (price) => price.toLocaleString("ru-RU") + " ₽";

  return (
    <>
      <Head>
        <title>
          Азотные генераторы PSA — купить генератор азота для производства N₂
          | Блицгаз
        </title>

        <meta
          name="description"
          content="Промышленные азотные генераторы PSA. Производительность до 200 Nm³/ч. Таблицы чистоты азота, расход воздуха, цена и комплектация установок."
        />

        <link rel="canonical" href={canonical} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(listSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>

      <PageHero
        variant="catalog"
        title="Азотные генераторы PSA"
        breadcrumbs={
          <Breadcrumbs items={breadcrumbs} theme="light" />
        }
        image="/assets/nitrogen/hero.png"
        imageAlt="Промышленный азотный генератор PSA"
      />

      {/* Вводный текст */}
      <section className="bg-white text-slate-800">
        <PageContent width="narrow">
          <p className="text-lg leading-relaxed text-slate-700">
            Промышленные генераторы азота PSA используются для производства
            азота высокой чистоты непосредственно на предприятии. Такая
            технология позволяет отказаться от поставок баллонов или
            жидкого азота и значительно снизить стоимость газа.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            Производительность установок в стандартном исполнении варьируется
            от <strong>7 до 1930 Nm³/ч</strong>, что позволяет подобрать
            оборудование как для небольших производств, так и для крупных
            промышленных предприятий.
          </p>
        </PageContent>
      </section>

      {/* Каталог по чистоте */}
      <section className="bg-white !text-slate-800">
        <div className="container mx-auto max-w-[1360px] px-6 py-12">
          <h2 className="mb-6 text-2xl font-semibold !text-slate-900">
            Модельный ряд азотных генераторов
          </h2>

          {/* Переключатели чистоты */}
          <div className="mb-6 flex flex-wrap gap-2">
            {purities.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setActivePurity(p)}
                aria-pressed={activePurity === p}
                className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                  activePurity === p
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Таблица моделей */}
          <div className="overflow-x-auto rounded-lg bg-white shadow-md">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-slate-100 !text-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left">Модель</th>
                  <th className="px-4 py-3 text-left">Производительность</th>
                  <th className="px-4 py-3 text-left">Чистота</th>
                  <th className="px-4 py-3 text-left">Расход воздуха</th>
                  <th className="px-4 py-3 text-left">Цена</th>
                </tr>
              </thead>

              <tbody className="!text-slate-700">
                {models.map((m) => {
                  const point = m.equipment.productivity.find(
                    (p) => p.purity === activePurity
                  );

                  if (!point) return null;

                  return (
                    <tr
                      key={m.id}
                      className="border-t border-slate-200 transition hover:bg-slate-50"
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {m.model}
                      </td>
                      <td className="px-4 py-3">
                        {point.value} Nm³/ч
                      </td>
                      <td className="px-4 py-3">{point.purity}</td>
                      <td className="px-4 py-3">{m.airNeed} м³/мин</td>
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {formatPrice(m.price)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="bg-white !text-slate-700">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="mb-6 text-3xl font-bold !text-slate-900">
            Промышленные генераторы азота PSA
          </h2>

          <p className="mb-4">
            На данной странице представлен модельный ряд промышленных
            генераторов азота PSA с указанием производительности, чистоты
            азота, расхода воздуха и ориентировочной стоимости оборудования.
            Таблица позволяет сравнить основные модели генераторов и подобрать
            установку по требуемой производительности и чистоте азота.
          </p>

          <p className="mb-4">
            Следует учитывать, что генератор азота является только частью
            системы производства газа на предприятии. Для получения азота
            непосредственно на месте потребления требуется комплекс оборудования
            подготовки сжатого воздуха и системы накопления газа.
          </p>

          <h3 className="mb-4 mt-10 text-xl font-semibold !text-slate-900">
            Комплекс оборудования для производства азота
          </h3>

          <p className="mb-4">
            Полная станция производства азота обычно включает несколько
            основных компонентов. Источником сжатого воздуха служит
            промышленный{" "}
            <a href="/compressors" className="text-blue-600 hover:underline">
              компрессор
            </a>
            , который подает воздух в систему подготовки. Далее воздух
            проходит через{" "}
            <a href="/dryers" className="text-blue-600 hover:underline">
              осушитель сжатого воздуха
            </a>{" "}
            для удаления влаги и через систему{" "}
            <a href="/filters" className="text-blue-600 hover:underline">
              фильтрации
            </a>
            , которая удаляет масло, аэрозоли и твердые частицы.
          </p>

          <p className="mb-4">
            Подготовленный воздух поступает в генератор азота, где в
            адсорбционных колоннах происходит разделение газов методом PSA
            (Pressure Swing Adsorption). В результате получается азот
            требуемой чистоты, который может подаваться в технологический
            процесс или накапливаться в ресивере.
          </p>

          <p className="mb-4">
            В некоторых производственных процессах требуется повышенное
            давление азота. В этом случае после генератора устанавливаются{" "}
            <a href="/dcompressors" className="text-blue-600 hover:underline">
              дожимающие компрессоры
            </a>
            , которые увеличивают давление газа до требуемых параметров
            технологической линии.
          </p>

          <h3 className="mb-4 mt-10 text-xl font-semibold !text-slate-900">
            Конфигурация станции производства азота
          </h3>

          <p className="mb-4">
            Подбор оборудования зависит от требуемой производительности азота,
            чистоты газа, давления в линии и режима работы предприятия. Поэтому
            при проектировании станции азотоснабжения важно учитывать все
            параметры технологического процесса и правильно подобрать
            оборудование подготовки воздуха и генерации азота.
          </p>

          <p>
            Для самостоятельного подбора станции азотоснабжения можно
            воспользоваться онлайн-конфигуратором на главной странице сайта.
            Инструмент позволяет рассчитать параметры системы и подобрать
            необходимое оборудование для производства азота непосредственно
            на предприятии:{" "}
            <a
              href="https://blitzgas.ru/#config"
              className="text-blue-600 hover:underline"
            >
              конфигуратор станции производства азота
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
