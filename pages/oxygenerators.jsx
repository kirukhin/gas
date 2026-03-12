import Head from "next/head"
import data from "../components/data.js";
import Breadcrumbs from "../components/Breadcrumbs"
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

<header className="leading-normal tracking-normal text-white">
<section className="gradient pt-24">

<div className="container mx-auto px-4">
<div className="flex items-center">

<div className="w-full md:w-2/5">

<h1
className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
style={{ color: "#0f172a" }}
>
Кислородные генераторы PSA
</h1>

<div className="mt-6 relative z-20">
<Breadcrumbs items={breadcrumbs} />
</div>

</div>

<div className="hidden md:block md:w-3/5">
<div className="flex justify-end items-center">

<img
src="/assets/oxygen/hero.png"
alt="Кислородный генератор PSA"
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
<path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
<path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
<path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
</g>
<g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fillRule="nonzero">
<path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
</g>
</g>
</svg>
</div>

</section>
</header>

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

<section className="bg-gray-50 py-16">

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