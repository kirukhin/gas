import Head from "next/head"
import data from "../components/data.js";
import Breadcrumbs from "../components/Breadcrumbs"
import PageHero from "../components/PageHero";
import { useState } from "react"

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://blitzgas.ru"

export default function Oxygenerators() {

  const canonical = `${SITE}/oxygenerators`
  const generators = data.oxygen

  const breadcrumbs = [
    { name: "Главная", href: "/" },
    { name: "Кислородные генераторы", href: "/oxygenerators" }
  ]

  const models = Object.values(generators)
  const purities = ["90%", "93%"]

  const [activePurity, setActivePurity] = useState("93%")

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Кислородные генераторы PSA",
    "itemListElement": models.map((m, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": m.model,
      "image": `${SITE}${m.url}`,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "RUB",
        "price": m.price
      }
    }))
  }

  const breadcrumbSchema = {
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
        "name": "Кислородные генераторы",
        "item": canonical
      }
    ]
  }

  const formatPrice = (price) =>
    price.toLocaleString("ru-RU") + " ₽"

  return (
    <>
      <Head>

        <title>
          Кислородные генераторы PSA — купить генератор кислорода O₂ | Блицгаз
        </title>

        <meta
          name="description"
          content="Промышленные генераторы кислорода PSA. Производство кислорода на предприятии. Производительность, чистота O₂, расход воздуха и стоимость оборудования."
        />

        <link rel="canonical" href={canonical} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

      </Head>

      <PageHero
  title="Кислородные генераторы PSA"
          breadcrumbs={
            <Breadcrumbs items={breadcrumbs} theme="light" />
          }
  image="/assets/oxygen/hero.png"
  imageAlt="Кислородный генератор PSA"
  variant="compact"
/>

<main className="bg-white text-gray-800">

<div className="container mx-auto px-6 max-w-4xl pt-25">

<p className="text-lg leading-relaxed text-gray-700">
Промышленные генераторы кислорода PSA позволяют получать кислород
непосредственно на предприятии из атмосферного воздуха. Такая
технология обеспечивает стабильное снабжение газом без
использования баллонов или жидкого кислорода.
</p>

<p className="mt-4 text-lg leading-relaxed text-gray-700">
Производительность установок может варьироваться в широком
диапазоне и подбирается в зависимости от требований
технологического процесса, необходимой чистоты кислорода
и режима работы предприятия.
</p>

</div>

<section className="container mx-auto px-6 py-12">

<h2 className="text-2xl font-semibold mb-6">
Модельный ряд кислородных генераторов
</h2>

<div className="flex flex-wrap gap-2 mb-6">

{purities.map((p) => (

<button
key={p}
onClick={() => setActivePurity(p)}
className={`px-4 py-2 rounded-md text-sm font-medium transition
${activePurity === p
? "bg-blue-600 text-white"
: "bg-slate-100 text-gray-700 hover:bg-slate-200"
}`}
>
{p}
</button>

))}

</div>

<div className="bg-white shadow-md rounded-lg overflow-hidden">

<table className="w-full text-sm">

<thead className="bg-slate-100 text-gray-700">

<tr>
<th className="py-3 px-4 text-left">Модель</th>
<th className="py-3 px-4 text-left">Производительность</th>
<th className="py-3 px-4 text-left">Чистота</th>
<th className="py-3 px-4 text-left">Расход воздуха</th>
<th className="py-3 px-4 text-left">Цена</th>
</tr>

</thead>

<tbody>

{models.map((m) => {

const point = m.equipment.productivity.find(
(p) => p.purity === activePurity
)

if (!point) return null

return (

<tr
key={m.id}
className="border-t hover:bg-slate-50 transition"
>

<td className="py-2 px-4 font-semibold">
{m.model}
</td>

<td className="py-2 px-4">
{point.value} Nm³/ч
</td>

<td className="py-2 px-4">
{point.purity}
</td>

<td className="py-2 px-4">
{m.airNeed} м³/мин
</td>

<td className="py-2 px-4">
{formatPrice(m.price)}
</td>

</tr>

)

})}

</tbody>

</table>

</div>

</section>

<section className="bg-white py-16">

<div className="container mx-auto px-6 max-w-4xl">

<h2 className="text-3xl font-bold mb-6">
Промышленные генераторы кислорода
</h2>

<p className="mb-4">
На странице представлен каталог кислородных генераторов PSA
с указанием основных характеристик оборудования — производительности,
чистоты кислорода, расхода воздуха и ориентировочной стоимости.
Таблица моделей позволяет сравнить различные установки
и подобрать генератор для конкретных производственных задач.
</p>

<p className="mb-4">
Важно учитывать, что генератор кислорода является частью
комплексной системы производства газа на предприятии.
Для стабильной и эффективной работы станции требуется
дополнительное оборудование подготовки воздуха и
распределения газа.
</p>

<h3 className="text-xl font-semibold mt-10 mb-4">
Оборудование станции производства кислорода
</h3>

<p className="mb-4">
Основным источником сжатого воздуха для установки служит
промышленный <a href="/compressors" className="text-blue-600 hover:underline">компрессор</a>.
Перед подачей в генератор воздух проходит подготовку
в системе очистки, включающей <a href="/dryers" className="text-blue-600 hover:underline">осушители</a>
и <a href="/filters" className="text-blue-600 hover:underline">фильтры</a>,
которые удаляют влагу, масло и твердые примеси.
</p>

<p className="mb-4">
После подготовки воздуха в генераторе PSA происходит
разделение газов и получение кислорода требуемой чистоты.
Полученный кислород может подаваться непосредственно
в технологический процесс либо накапливаться в системе
газовых ресиверов.
</p>

<p className="mb-4">
Если в производственном процессе требуется повышенное
давление кислорода, используются
<a href="/dcompressors" className="text-blue-600 hover:underline"> дожимающие компрессоры</a>,
которые увеличивают давление газа после генератора
до параметров технологической линии.
</p>

<h3 className="text-xl font-semibold mt-10 mb-4">
Подбор оборудования
</h3>

<p>
Для проектирования станции производства кислорода
необходимо учитывать требуемую производительность,
чистоту газа, давление в системе и режим эксплуатации.
Для предварительного подбора оборудования можно
воспользоваться онлайн-инструментом на главной странице —
<a href="https://blitzgas.ru/#config" className="text-blue-600 hover:underline">
 конфигуратором станции производства газа
</a>.
</p>

</div>

</section>

</main>

</>
)
}