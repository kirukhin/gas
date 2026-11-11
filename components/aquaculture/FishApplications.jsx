import React from "react";

const applications = [
  {
    id: "trout",
    number: "01",
    title: "Выращивание форели",
    subtitle: "Холодноводное интенсивное рыбоводство",
    description:
      "Форелевые хозяйства часто используют проточные бассейны и установки замкнутого водоснабжения. При высокой плотности посадки и интенсивном кормлении необходимо поддерживать стабильный кислородный режим, учитывая температуру и расход воды.",
    engineering:
      "При проектировании кислородоснабжения важно учитывать параметры поступающей воды, максимальную биомассу и пиковую нагрузку после кормления. Для интенсивных хозяйств может применяться подача технического кислорода через специальные устройства растворения.",
    parameters: [
      "Температура и сезонные изменения воды",
      "Расход воды через бассейны",
      "Максимальная биомасса и интенсивность кормления",
      "Концентрация O₂ на входе и выходе",
    ],
    equipment: "Проточные системы · УЗВ · Оксигенация",
    prompt:
      "Premium realistic industrial photography of a modern commercial rainbow trout farming facility, large clean rectangular and circular fish tanks with clear flowing water, visible trout swimming beneath the surface, stainless steel water distribution pipes and oxygenation equipment, cold clean water atmosphere, technically accurate aquaculture infrastructure, bright natural industrial lighting, sophisticated B2B engineering aesthetic, wide horizontal composition, no text, no logos",
  },
  {
    id: "sturgeon",
    number: "02",
    title: "Выращивание осетровых",
    subtitle: "Интенсивное выращивание и товарная аквакультура",
    description:
      "Осетровых выращивают в бассейнах и УЗВ, где параметры среды можно контролировать на протяжении всего производственного цикла. По мере увеличения биомассы и интенсивности кормления возрастает нагрузка на систему водоподготовки и кислородоснабжения.",
    engineering:
      "Расчёт следует выполнять по максимальной плановой биомассе и кормовой нагрузке, а не только по объёму бассейнов. Отдельно оценивают работу биофильтра, удаление углекислого газа и эффективность передачи кислорода воде.",
    parameters: [
      "Плановая биомасса и размерная структура стада",
      "Суточный рацион и пиковое кормление",
      "Производительность биофильтра",
      "Надёжность непрерывной подачи кислорода",
    ],
    equipment: "УЗВ · Генераторы PSA · Кислородные конусы",
    prompt:
      "High-end photorealistic industrial aquaculture photography of a modern sturgeon farming facility, large circular indoor fish tanks with several visible sturgeon swimming underwater, clean water treatment pipelines, stainless steel equipment, professional recirculating aquaculture system, realistic engineering details, neutral gray and steel blue palette, premium B2B industrial photography, wide horizontal composition, no text, no logos",
  },
  {
    id: "salmon",
    number: "03",
    title: "Выращивание лосося",
    subtitle: "Наземные и морские технологии",
    description:
      "Лососёвые хозяйства используют различные технологические схемы: от морских садков до наземных установок замкнутого водоснабжения. Требования к кислородному режиму определяются стадией выращивания, температурой, плотностью посадки и гидрологическими условиями.",
    engineering:
      "Для наземных интенсивных систем важны расчёт нагрузки по кормлению, эффективность оксигенации и резервирование. В морских садках первостепенное значение имеют естественный водообмен и мониторинг параметров окружающей воды.",
    parameters: [
      "Технология выращивания и стадия жизненного цикла",
      "Температура и солёность воды",
      "Плотность посадки и кормовая нагрузка",
      "Водообмен и доступность резервного источника O₂",
    ],
    equipment: "УЗВ · Садковые системы · Мониторинг O₂",
    prompt:
      "Premium realistic industrial aquaculture photography of a modern salmon farming operation, large clean circular land-based fish tanks with visible salmon swimming, sophisticated water circulation pipes and oxygenation equipment, professional recirculating aquaculture facility, bright spacious industrial interior, highly realistic fish and engineering infrastructure, cool natural light, wide horizontal composition, no text, no logos",
  },
  {
    id: "carp",
    number: "04",
    title: "Выращивание карпа",
    subtitle: "Прудовые и интенсивные технологии",
    description:
      "Карпа выращивают в прудах, бассейнах и интенсивных установках. В традиционном прудовом хозяйстве кислородный режим во многом определяется естественными процессами в водоёме, а в интенсивных системах возрастает роль управляемой аэрации и дополнительной оксигенации.",
    engineering:
      "При проектировании важно различать потребность в аэрации всего водоёма и необходимость подачи технического кислорода в отдельный технологический контур. Выбор решения зависит от плотности посадки, водообмена и сезонных условий.",
    parameters: [
      "Тип хозяйства: пруд, бассейн или УЗВ",
      "Плотность посадки",
      "Температура и суточные колебания O₂",
      "Органическая нагрузка и состояние водоёма",
    ],
    equipment: "Аэраторы · Системы мониторинга · Оксигенация",
    prompt:
      "Realistic premium photography of a commercial carp aquaculture farm, clean large fish farming pond with visible water aerators creating gentle surface circulation, green embankments, organized pond infrastructure, subtle fish visible near water surface, professional agricultural aquaculture operation, natural daylight, sophisticated B2B visual style, wide horizontal composition, no text, no logos",
  },
  {
    id: "tilapia",
    number: "05",
    title: "Выращивание тилапии",
    subtitle: "Тепловодное интенсивное рыбоводство",
    description:
      "Тилапию выращивают в бассейнах, прудах и УЗВ. В интенсивных тепловодных системах высокая плотность посадки и регулярное кормление создают значительную нагрузку на водоподготовку. При этом повышение температуры воды влияет на доступность растворённого кислорода.",
    engineering:
      "При расчёте системы необходимо учитывать температуру выращивания, максимальный суточный рацион и нагрузку на биофильтр. Для УЗВ важно обеспечить не только подачу кислорода, но и удаление углекислого газа и продуктов азотного обмена.",
    parameters: [
      "Рабочая температура воды",
      "Биомасса и суточный рацион",
      "Нагрузка на биофильтр",
      "Эффективность растворения и перемешивания воды",
    ],
    equipment: "УЗВ · Генераторы PSA · Инжекторы кислорода",
    prompt:
      "Photorealistic premium industrial photography of a modern warm-water tilapia farming facility, clean circular indoor aquaculture tanks filled with clear water, visible tilapia fish, organized pipes, water treatment equipment and oxygenation system, professional recirculating aquaculture infrastructure, bright neutral industrial lighting, realistic engineering photography, wide horizontal composition, no text, no logos",
  },
  {
    id: "catfish",
    number: "06",
    title: "Выращивание клариевого сома",
    subtitle: "Высокая плотность посадки в УЗВ",
    description:
      "Клариевого сома часто выращивают в интенсивных бассейновых системах и УЗВ. Способность рыбы использовать атмосферный воздух не отменяет необходимости контролировать качество воды и обеспечивать кислородом остальные элементы технологической системы.",
    engineering:
      "При проектировании нельзя ориентироваться только на физиологические особенности рыбы. Необходимо учитывать потребление кислорода биофильтром, органическую нагрузку, режим кормления и параметры воды в конкретной системе.",
    parameters: [
      "Максимальная биомасса в бассейнах",
      "Суточное потребление корма",
      "Потребность биофильтра в кислороде",
      "Режим циркуляции и очистки воды",
    ],
    equipment: "УЗВ · Биофильтры · Генераторы кислорода",
    prompt:
      "Premium realistic industrial photography of a commercial African catfish farming facility, large clean indoor rectangular aquaculture tanks with visible African catfish, professional recirculating aquaculture system, water treatment filters, circulation pipelines and oxygen supply equipment, technically credible modern fish farm, neutral gray and blue palette, wide horizontal composition, no text, no logos",
  },
];

function ImagePlaceholder({ title }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white/80">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5 text-gray-400"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9" r="1.5" />
            <path d="m21 15-5-5L5 20" />
          </svg>
        </div>

        <span className="text-sm font-semibold text-gray-500">
          {title}
        </span>

        <span className="mt-1 text-xs text-gray-400">
          Заглушка изображения 16:10
        </span>
      </div>

      <span className="absolute bottom-3 right-3 rounded-md border border-gray-200 bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-400 backdrop-blur">
        Image placeholder
      </span>
    </div>
  );
}

function ApplicationCard({ item }) {
  return (
    <article
      id={`fish-${item.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
    >
      <div className="p-4 pb-0">
        <ImagePlaceholder title={item.title} />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            {item.subtitle}
          </span>

          <span className="shrink-0 text-xs font-semibold tabular-nums text-red-600">
            {item.number}
          </span>
        </div>

        <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-gray-950">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          {item.description}
        </p>

        <div className="mt-5 rounded-xl bg-gray-50 p-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-700">
              Что учитывать при подборе
            </h4>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            {item.engineering}
          </p>
        </div>

        <div className="mt-5">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Ключевые параметры
          </h4>

          <ul className="mt-3 space-y-2">
            {item.parameters.map((parameter) => (
              <li
                key={parameter}
                className="flex items-start gap-2 text-sm leading-relaxed text-gray-600"
              >
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                {parameter}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <div className="border-t border-gray-100 pt-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
              Типовые технологические решения
            </span>

            <p className="mt-2 text-xs font-medium leading-relaxed text-gray-700">
              {item.equipment}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function FishApplications() {
  return (
    <section id="fish-applications" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Заголовок */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Применение в рыбоводстве
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-gray-950 md:text-4xl lg:text-[42px]">
              Кислородоснабжение для разных видов аквакультуры
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Особенности выращивания определяют требования к водной среде,
              интенсивность кормления и нагрузку на систему водоподготовки.
              Поэтому универсального решения по производительности
              кислородной станции для всех рыбоводческих хозяйств не существует.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Ниже — основные направления аквакультуры и параметры,
              которые необходимо учитывать при проектировании кислородоснабжения.
            </p>
          </div>
        </div>

        {/* Карточки */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item) => (
            <ApplicationCard key={item.id} item={item} />
          ))}
        </div>

        {/* Нижний инженерный блок */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-gray-950 p-7 text-white md:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400">
                От биомассы к производительности
              </span>

              <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight md:text-3xl">
                Вид рыбы — только один из факторов расчёта кислородной станции
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 md:text-base">
                Для определения нагрузки важнее знать максимальную биомассу,
                суточный рацион, температуру воды и особенности технологической
                системы. На основании этих данных можно оценить потребность
                в кислороде и подобрать оборудование с учётом способа его подачи.
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-8">
              <div className="text-sm font-semibold text-white">
                Следующий шаг — расчёт потребности
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Разберём растворённый кислород, рабочие концентрации и факторы,
                влияющие на его доступность в воде.
              </p>

              <a
                href="#oxygen-requirements"
                className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-red-400"
              >
                Перейти к требованиям по кислороду
                <span className="text-red-400">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Промпты для отдельной генерации изображений.
export const fishApplicationImagePrompts = applications.map(
  ({ id, title, prompt }) => ({
    id,
    title,
    prompt,
  })
);