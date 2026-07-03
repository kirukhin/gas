// pages/dryers/index.jsx

import Link from 'next/link'
import PageLayout from '../../components/PageLayout'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Осушители сжатого воздуха',
  description:
    'Рефрижераторные и адсорбционные осушители сжатого воздуха. Подбор по производительности, давлению и требуемой точке росы.'
}

export default function DryersPage() {
  return (
    <PageLayout
      title="Осушители сжатого воздуха"
      description="Рефрижераторные и адсорбционные осушители сжатого воздуха. Подбор по расходу воздуха, рабочему давлению и точке росы."
      canonical={`${SITE}/dryers`}
      heroImage="/assets/dryers-hero.png"
      jsonLd={jsonLd}
      breadcrumb={[
        { name: 'Главная', href: '/' },
        { name: 'Осушители воздуха', href: '/dryers' }
      ]}
    >
      <section className="container mx-auto max-w-6xl px-6 py-12">

        {/* ВСТУПЛЕНИЕ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Осушители сжатого воздуха
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700">
            <p>
              Осушитель сжатого воздуха — ключевой элемент системы подготовки воздуха после
              компрессора. Его задача заключается в удалении влаги из воздушного потока,
              предотвращении образования конденсата и защите оборудования от коррозии,
              загрязнений и преждевременного износа.
            </p>

            <p>
              Правильно подобранный промышленный осушитель обеспечивает стабильную работу
              пневмосистем, повышает качество продукции и позволяет соблюдать требования
              технологических процессов к точке росы сжатого воздуха.
            </p>
          </div>
        </section>

   {/* =====================================
    ВЫБОР ТИПА ОСУШИТЕЛЯ
===================================== */}
<section className="mb-24">

<div className="max-w-4xl mb-12">
  <h2 className="text-3xl font-bold text-slate-900 mb-4">
    Подберите подходящий тип осушителя
  </h2>

  <p className="text-lg text-slate-600 leading-relaxed">
    Выбор осушителя зависит от требуемой точки росы, особенностей
    технологического процесса и условий эксплуатации. Для большинства
    производств достаточно рефрижераторной осушки с типовой точкой росы
    около +3°C. Для лазерной резки, генерации азота и кислорода,
    фармацевтических производств и других ответственных применений
    используются адсорбционные осушители с точкой росы от −20°C до −70°C.
  </p>
</div>

<div className="grid lg:grid-cols-3 gap-8">

  {/* =====================================
      РЕФРИЖЕРАТОРНЫЕ
  ===================================== */}
  <Link
    href="/dryers/refrigeration"
    className="
      group
      relative
      bg-slate-50
      border border-slate-200
      rounded-2xl
      p-8
      hover:bg-white
      hover:border-red-300
      hover:shadow-xl
      transition-all duration-300
    "
  >

    <div className="mb-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        Рефрижераторные
      </h3>

      <div className="inline-flex">
        <span className="
          bg-red-500
          text-white
          text-xs
          font-semibold
          px-4
          py-2
          rounded-full
          shadow-sm
        ">
          PDP ≈ +3°C
        </span>
      </div>
    </div>

    <p className="text-slate-600 mb-6">
      Самое распространённое решение для подготовки сжатого воздуха.
      Оптимально подходит для большинства компрессорных станций,
      производственных предприятий и пневматических систем.
    </p>

    <div className="space-y-3 text-sm text-slate-700">

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Низкие эксплуатационные расходы
      </div>

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Простая и надёжная конструкция
      </div>

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Минимальное обслуживание
      </div>

    </div>

    <div className="mt-6 pt-6 border-t border-slate-200">
      <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">
        Подходит для
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Пневмоинструмент
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Машиностроение
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Металлообработка
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Упаковка
        </span>
      </div>
    </div>

    <div className="mt-8 text-red-600 font-semibold group-hover:translate-x-1 transition-transform">
      Перейти в раздел →
    </div>

  </Link>


  {/* =====================================
      ХОЛОДНАЯ РЕГЕНЕРАЦИЯ
  ===================================== */}
  <Link
    href="/dryers/adsorption-cold"
    className="
      group
      relative
      bg-slate-50
      border border-slate-200
      rounded-2xl
      p-8
      hover:bg-white
      hover:border-red-300
      hover:shadow-xl
      transition-all duration-300
    "
  >

    <div className="mb-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        Адсорбционные
        <br />
        холодной регенерации
      </h3>

      <div className="inline-flex">
        <span className="
          bg-red-500
          text-white
          text-xs
          font-semibold
          px-4
          py-2
          rounded-full
          shadow-sm
        ">
          PDP −20...−70°C
        </span>
      </div>
    </div>

    <p className="text-slate-600 mb-6">
      Обеспечивают получение очень сухого воздуха для процессов
      с повышенными требованиями к качеству подготовки воздуха.
    </p>

    <div className="space-y-3 text-sm text-slate-700">

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Точка росы до −70°C
      </div>

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Компактное исполнение
      </div>

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Высокое качество воздуха
      </div>

    </div>

    <div className="mt-6 pt-6 border-t border-slate-200">
      <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">
        Подходит для
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Лазерная резка
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Фармацевтика
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Электроника
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          PSA-азот
        </span>
      </div>
    </div>

    <div className="mt-8 text-red-600 font-semibold group-hover:translate-x-1 transition-transform">
      Перейти в раздел →
    </div>

  </Link>


  {/* =====================================
      ГОРЯЧАЯ РЕГЕНЕРАЦИЯ
  ===================================== */}
  <Link
    href="/dryers/adsorption-hot"
    className="
      group
      relative
      bg-slate-50
      border border-slate-200
      rounded-2xl
      p-8
      hover:bg-white
      hover:border-red-300
      hover:shadow-xl
      transition-all duration-300
    "
  >

    <div className="mb-6">
      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        Адсорбционные
        <br />
        горячей регенерации
      </h3>

      <div className="inline-flex">
        <span className="
          bg-red-500
          text-white
          text-xs
          font-semibold
          px-4
          py-2
          rounded-full
          shadow-sm
        ">
          PDP −20...−70°C
        </span>
      </div>
    </div>

    <p className="text-slate-600 mb-6">
      Энергоэффективные системы для крупных расходов воздуха
      и централизованных компрессорных станций.
    </p>

    <div className="space-y-3 text-sm text-slate-700">

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Минимальные потери воздуха
      </div>

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Выгодны при больших расходах
      </div>

      <div className="flex items-start">
        <span className="mr-2 text-green-600">✓</span>
        Высокая энергоэффективность
      </div>

    </div>

    <div className="mt-6 pt-6 border-t border-slate-200">
      <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">
        Подходит для
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Крупные заводы
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Центральные компрессорные
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          PSA-кислород
        </span>

        <span className="px-2 py-1 bg-white border border-slate-200 rounded-md text-xs">
          Непрерывное производство
        </span>
      </div>
    </div>

    <div className="mt-8 text-red-600 font-semibold group-hover:translate-x-1 transition-transform">
      Перейти в раздел →
    </div>

  </Link>

</div>

</section>

        {/* ПРИНЦИП РАБОТЫ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Как работает осушитель сжатого воздуха
          </h2>

          <p className="text-slate-700 leading-relaxed">
            После компрессора воздух содержит влагу, масло и твердые частицы.
            Осушитель удаляет водяной пар и обеспечивает требуемое качество
            воздуха для оборудования и технологических процессов.
          </p>

          <div className="bg-slate-50 border rounded-xl p-6 mt-6 text-center font-medium">
            Компрессор → Ресивер → Фильтры → Осушитель →
            Фильтры тонкой очистки → Потребитель
          </div>
        </section>

        {/* ТОЧКА РОСЫ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Что такое точка росы
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6">
            Точка росы показывает температуру, при которой содержащаяся
            в воздухе влага начинает конденсироваться.
          </p>

          <div className="overflow-x-auto border rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 text-left">Тип осушителя</th>
                  <th className="p-4 text-left">Точка росы</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4">Рефрижераторный</td>
                  <td className="p-4">+3°C</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">Адсорбционный</td>
                  <td className="p-4">−20°C ... −70°C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Когда нужен адсорбционный осушитель
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Лазерная резка',
              'Пищевая промышленность',
              'ПЭТ-выдув',
              'Фармацевтика',
              'Работа на улице зимой',
              'Электроника'
            ].map(item => (
              <div
                key={item}
                className="border rounded-lg p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Когда достаточно рефрижераторного осушителя
          </h2>

          <div className="prose max-w-none">
            <p>
              Для большинства производственных предприятий достаточно точки росы +3°C.
              Именно поэтому рефрижераторные осушители являются наиболее распространенным
              решением на рынке.
            </p>
          </div>
        </section>

        {/* PSA */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Осушители для генераторов азота и кислорода
          </h2>

          <div className="prose prose-lg max-w-none">
            <p>
              В системах производства азота и кислорода качество подготовки
              воздуха напрямую влияет на эффективность работы молекулярных сит
              и срок службы адсорбента.
            </p>

            <p>
              Типовая схема подготовки воздуха включает компрессор,
              воздушный ресивер, фильтры, осушитель и систему тонкой очистки.
              Влага и масло являются основными причинами деградации
              углеродных молекулярных сит и цеолитов.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Частые ошибки при подборе осушителя
          </h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">
                Выбор только по производительности компрессора
              </h3>
              <p className="text-slate-600">
                Необходимо учитывать реальные условия эксплуатации и температуру воздуха.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">
                Игнорирование температуры окружающей среды
              </h3>
              <p className="text-slate-600">
                При высоких температурах характеристики осушителя снижаются.
              </p>
            </div>

            <div className="border rounded-lg p-5">
              <h3 className="font-semibold mb-2">
                Неправильно выбранная точка росы
              </h3>
              <p className="text-slate-600">
                Для многих процессов −40°C не требуется и приводит к лишним затратам.
              </p>
            </div>
          </div>
        </section>

        {/* ОТРАСЛИ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Осушители для различных отраслей
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              Осушители для лазерной резки
            </div>

            <div className="border rounded-lg p-4">
              Осушители для пищевой промышленности
            </div>

            <div className="border rounded-lg p-4">
              Осушители для упаковочных линий
            </div>

            <div className="border rounded-lg p-4">
              Осушители для генераторов азота
            </div>

            <div className="border rounded-lg p-4">
              Осушители для генераторов кислорода
            </div>

            <div className="border rounded-lg p-4">
              Осушители для покрасочных камер
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 border rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Нужна помощь с подбором?
          </h2>

          <p className="text-slate-600 mb-6">
            Наши инженеры помогут подобрать осушитель по расходу,
            давлению и требуемой точке росы.
          </p>

          <a
            href="#footer"
            className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Получить расчет
          </a>
        </section>

        {/* FAQ */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">
            Часто задаваемые вопросы
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold text-lg">
                Какой осушитель подходит для мастерской или небольшого производства?
              </h3>
              <p className="text-slate-600 mt-2">
                В большинстве случаев достаточно рефрижераторного осушителя с точкой росы около +3°C.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Когда необходим адсорбционный осушитель?
              </h3>
              <p className="text-slate-600 mt-2">
                Когда требуется точка росы от −20°C до −70°C либо существует риск
                замерзания влаги в трубопроводах и оборудовании.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Чем отличается адсорбционный осушитель от рефрижераторного?
              </h3>
              <p className="text-slate-600 mt-2">
                Рефрижераторный осушитель удаляет влагу путем охлаждения воздуха,
                а адсорбционный использует влагопоглощающий адсорбент и позволяет
                получать значительно более низкую точку росы.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Что такое точка росы сжатого воздуха?
              </h3>
              <p className="text-slate-600 mt-2">
                Это температура, при которой содержащаяся в воздухе влага начинает
                конденсироваться в жидкость.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Можно ли использовать рефрижераторный осушитель зимой?
              </h3>
              <p className="text-slate-600 mt-2">
                Если воздуховоды или потребители расположены в неотапливаемых
                помещениях либо на улице, чаще всего требуется адсорбционная осушка.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Нужны ли фильтры перед осушителем?
              </h3>
              <p className="text-slate-600 mt-2">
                Да. Предварительная фильтрация защищает теплообменники и адсорбент
                от масла, воды и твердых частиц.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Нужны ли фильтры после осушителя?
              </h3>
              <p className="text-slate-600 mt-2">
                Да. После осушителя обычно устанавливаются фильтры тонкой очистки,
                обеспечивающие требуемый класс качества воздуха.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Как подобрать осушитель по производительности компрессора?
              </h3>
              <p className="text-slate-600 mt-2">
                Подбор выполняется по фактическому расходу воздуха, рабочему давлению,
                температуре на входе и требуемой точке росы.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Почему нельзя выбирать осушитель только по расходу воздуха?
              </h3>
              <p className="text-slate-600 mt-2">
                На производительность влияют давление, температура окружающей среды,
                температура воздуха после компрессора и требуемая точка росы.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Какой осушитель нужен для лазерной резки?
              </h3>
              <p className="text-slate-600 mt-2">
                Обычно используются адсорбционные осушители с точкой росы −40°C и ниже.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Какой осушитель нужен для пищевой промышленности?
              </h3>
              <p className="text-slate-600 mt-2">
                Требования зависят от процесса. Для упаковки в модифицированной газовой
                среде и контакта воздуха с продуктом часто применяется адсорбционная осушка.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Зачем осушать воздух перед генератором азота?
              </h3>
              <p className="text-slate-600 mt-2">
                Влага снижает эффективность работы углеродного молекулярного сита,
                сокращает срок службы адсорбента и ухудшает стабильность чистоты азота.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Какая точка росы требуется для генераторов азота?
              </h3>
              <p className="text-slate-600 mt-2">
                Для большинства PSA-генераторов азота применяется осушенный воздух
                с точкой росы не выше +3°C. Для ответственных применений используются
                более низкие значения.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Нужен ли адсорбционный осушитель перед генератором азота?
              </h3>
              <p className="text-slate-600 mt-2">
                В большинстве случаев достаточно качественного рефрижераторного осушителя
                и системы фильтрации. Однако для высоких требований к чистоте и сложных
                условий эксплуатации может применяться адсорбционная осушка.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Зачем осушать воздух перед генератором кислорода?
              </h3>
              <p className="text-slate-600 mt-2">
                Влага ухудшает работу цеолитового адсорбента и снижает эффективность
                кислородной станции. Правильная подготовка воздуха напрямую влияет на
                чистоту и надежность производства кислорода.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Какой класс качества воздуха требуется для PSA-генераторов?
              </h3>
              <p className="text-slate-600 mt-2">
                Требования зависят от производителя оборудования, однако обычно
                предусматриваются низкое содержание влаги, масла и твердых частиц
                в соответствии с ISO 8573-1.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Что такое холодная регенерация?
              </h3>
              <p className="text-slate-600 mt-2">
                При холодной регенерации часть уже осушенного воздуха используется
                для восстановления свойств адсорбента.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Что такое горячая регенерация?
              </h3>
              <p className="text-slate-600 mt-2">
                Восстановление адсорбента происходит с помощью нагрева, что позволяет
                снизить потери сжатого воздуха и повысить энергоэффективность системы.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Какой срок службы адсорбента?
              </h3>
              <p className="text-slate-600 mt-2">
                При правильной фильтрации и эксплуатации адсорбент может работать
                несколько лет без замены.
              </p>
            </div>

          </div>
        </section>

      </section>
    </PageLayout>
  )
}