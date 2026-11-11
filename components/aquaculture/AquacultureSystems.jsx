import React from "react";

const systems = [
  {
    id: "ras",
    number: "01",
    title: "УЗВ",
    subtitle: "Установки замкнутого водоснабжения",
    tag: "Высокая интенсивность",
    description:
      "Вода многократно проходит через систему механической и биологической очистки, дегазации и повторного насыщения кислородом. Благодаря контролируемым условиям УЗВ позволяют выращивать рыбу с высокой плотностью посадки и минимальным водообменом с внешней средой.",
    oxygenTitle: "Кислород — часть технологического контура",
    oxygenText:
      "В УЗВ технический кислород используют для компенсации интенсивного потребления рыбой и биологическими процессами. Его подают через кислородные конусы, инжекторы или другие устройства эффективного растворения.",
    equipment: [
      "Генератор кислорода PSA",
      "Кислородный ресивер",
      "Конус или инжектор растворения",
      "Система контроля растворённого O₂",
    ],
    imageLabel: "Схема установки замкнутого водоснабжения",
    imagePrompt:
      "Premium realistic industrial engineering visualization of a modern recirculating aquaculture system (RAS), large circular fish tanks, mechanical drum filters, biofilters, degassing columns, oxygenation cones, clearly visible water circulation pipelines connecting the equipment, clean organized industrial fish farm interior, technical accuracy, photorealistic B2B engineering photography, neutral light gray and steel blue palette, wide horizontal composition, no text, no logos",
    accent: true,
  },
  {
    id: "flow-through",
    number: "02",
    title: "Проточные системы",
    subtitle: "Постоянный водообмен",
    tag: "Зависимость от источника воды",
    description:
      "Вода поступает из природного или искусственного источника, проходит через рыбоводческие бассейны и отводится наружу. Ключевые параметры — расход воды, её температура, исходное содержание кислорода и качество водозабора.",
    oxygenTitle: "Поддержание кислорода в потоке",
    oxygenText:
      "Дополнительное насыщение кислородом может потребоваться при высокой плотности посадки, недостаточном содержании O₂ в поступающей воде или повышенной нагрузке на бассейны. Производительность системы рассчитывают с учётом расхода воды и разницы между входной и требуемой концентрацией кислорода.",
    equipment: [
      "Генератор кислорода или внешний источник",
      "Устройство растворения кислорода",
      "Распределительный трубопровод",
      "Датчики растворённого O₂",
    ],
    imageLabel: "Проточные рыбоводческие бассейны",
    imagePrompt:
      "Realistic premium industrial photography of a modern flow-through fish farming facility, long rows of rectangular fish tanks with clean flowing water, visible inlet and outlet channels, stainless steel water pipes and monitoring equipment, natural water movement, professional trout aquaculture farm, technically credible infrastructure, bright clean industrial environment, neutral gray and cool blue palette, wide horizontal composition, no text, no logos",
  },
  {
    id: "ponds",
    number: "03",
    title: "Прудовые хозяйства",
    subtitle: "Выращивание рыбы в открытых водоёмах",
    tag: "Переменные условия",
    description:
      "В прудовом рыбоводстве кислородный режим зависит от температуры, глубины, водообмена, фотосинтеза и разложения органических веществ. В течение суток содержание растворённого кислорода может заметно меняться, особенно в тёплый период.",
    oxygenTitle: "Аэрация и локальная кислородная поддержка",
    oxygenText:
      "Основной инструмент управления кислородным режимом прудов — механическая аэрация атмосферным воздухом. Подача технического кислорода может применяться в отдельных интенсивных технологических схемах, при локальной поддержке или в специальных системах выращивания.",
    equipment: [
      "Механические аэраторы",
      "Системы распределения воздуха",
      "При необходимости — источник O₂",
      "Приборы контроля растворённого кислорода",
    ],
    imageLabel: "Прудовое рыбоводческое хозяйство",
    imagePrompt:
      "High-end realistic aerial oblique photography of a professional commercial aquaculture pond farm, several large rectangular fish ponds with earthen embankments, water aerators creating visible circular water movement, green surrounding landscape, organized industrial fish farming infrastructure, natural daylight, realistic agricultural engineering photography, clean premium B2B aesthetic, wide horizontal composition, no text, no logos",
  },
  {
    id: "cages",
    number: "04",
    title: "Садковые хозяйства",
    subtitle: "Выращивание рыбы в естественных водоёмах",
    tag: "Зависимость от водоёма",
    description:
      "Рыбу выращивают в сетчатых садках, установленных в озёрах, водохранилищах или морских акваториях. Кислород поступает за счёт естественного водообмена, поэтому условия выращивания определяются гидрологией водоёма, течениями, температурой и плотностью посадки.",
    oxygenTitle: "Оценка природного кислородного режима",
    oxygenText:
      "В открытых садковых системах централизованная подача кислорода обычно не является стандартным решением. При проектировании важно оценить естественный водообмен, сезонные изменения и возможность применения локальных технических средств поддержки.",
    equipment: [
      "Системы мониторинга качества воды",
      "Оборудование контроля температуры и O₂",
      "При необходимости — локальные средства оксигенации",
      "Резервные технологические решения",
    ],
    imageLabel: "Садковое рыбоводческое хозяйство",
    imagePrompt:
      "Premium realistic aerial photography of a commercial open-water cage aquaculture farm, circular floating fish cages arranged in orderly rows on a large clean lake or coastal fjord, subtle floating walkways and technical service infrastructure, deep natural blue water, realistic professional salmon farming operation, natural daylight, high-end industrial aquaculture photography, wide horizontal composition, no text, no logos",
  },
];

function ImagePlaceholder({ label, prompt }) {
  return (
    <div className="relative flex min-h-[230px] md:min-h-[270px] overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/80">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6 text-gray-400"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="8.5" cy="9" r="1.5" />
            <path d="m21 15-5-5L5 20" />
          </svg>
        </div>

        <span className="text-sm font-semibold text-gray-500">
          {label}
        </span>

        <span className="mt-2 text-xs text-gray-400">
          Заглушка изображения
        </span>
      </div>

      <div className="absolute bottom-3 right-3 rounded-md border border-gray-200 bg-white/80 px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-400 backdrop-blur">
        Image placeholder
      </div>

      {/* Промпт можно скопировать из объекта systems */}
    </div>
  );
}

function EquipmentList({ items }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
          <span className="text-sm leading-relaxed text-gray-600">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SystemCard({ system }) {
  return (
    <article
      id={`system-${system.id}`}
      className={[
        "overflow-hidden rounded-2xl border",
        system.accent
          ? "border-gray-900 bg-gray-950 text-white"
          : "border-gray-200 bg-white text-gray-950",
      ].join(" ")}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Изображение */}
        <div className="lg:col-span-5 p-4 md:p-5">
          <ImagePlaceholder
            label={system.imageLabel}
            prompt={system.imagePrompt}
          />

          <div className="mt-4 flex items-center justify-between gap-3">
            <span
              className={[
                "text-xs font-semibold uppercase tracking-wider",
                system.accent ? "text-gray-400" : "text-gray-500",
              ].join(" ")}
            >
              {system.tag}
            </span>

            <span
              className={[
                "text-xs font-semibold tabular-nums",
                system.accent ? "text-red-400" : "text-gray-400",
              ].join(" ")}
            >
              {system.number}
            </span>
          </div>
        </div>

        {/* Текст */}
        <div className="lg:col-span-7 p-6 md:p-8 lg:pl-5">
          <div className="mb-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {system.title}
            </h3>

            <p
              className={[
                "mt-1 text-sm",
                system.accent ? "text-gray-400" : "text-gray-500",
              ].join(" ")}
            >
              {system.subtitle}
            </p>
          </div>

          <p
            className={[
              "text-sm md:text-base leading-relaxed",
              system.accent ? "text-gray-300" : "text-gray-600",
            ].join(" ")}
          >
            {system.description}
          </p>

          <div
            className={[
              "mt-6 rounded-xl p-5",
              system.accent ? "bg-white/5" : "bg-gray-50",
            ].join(" ")}
          >
            <h4
              className={[
                "text-sm font-semibold",
                system.accent ? "text-white" : "text-gray-950",
              ].join(" ")}
            >
              {system.oxygenTitle}
            </h4>

            <p
              className={[
                "mt-2 text-sm leading-relaxed",
                system.accent ? "text-gray-300" : "text-gray-600",
              ].join(" ")}
            >
              {system.oxygenText}
            </p>
          </div>

          <div className="mt-6">
            <h4
              className={[
                "text-xs font-semibold uppercase tracking-wider",
                system.accent ? "text-gray-400" : "text-gray-500",
              ].join(" ")}
            >
              Типовое оборудование
            </h4>

            <EquipmentList items={system.equipment} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AquacultureSystems() {
  return (
    <section id="systems" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Заголовок */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Типы рыбоводческих систем
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] leading-[1.12] font-semibold tracking-tight text-gray-950">
              Разные технологии выращивания — разные требования к кислороду
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Потребность в техническом кислороде зависит не только от
              количества рыбы. На неё влияют конструкция хозяйства, способ
              водообмена, интенсивность кормления и эффективность переноса
              кислорода в воду.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Поэтому подбор генератора начинается с анализа технологической
              схемы рыбоводческого предприятия, а не только с объёма бассейнов.
            </p>
          </div>
        </div>

        {/* Карточки систем */}
        <div className="space-y-6">
          {systems.map((system) => (
            <SystemCard key={system.id} system={system} />
          ))}
        </div>

        {/* Инженерный вывод */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 rounded-2xl bg-gray-100 p-7 md:p-9">
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-red-600">
              Важный принцип
            </span>

            <h3 className="mt-3 text-xl md:text-2xl font-semibold leading-tight text-gray-950">
              Генератор подбирают под технологию, а не наоборот
            </h3>
          </div>

          <div className="md:col-span-8 md:pl-8 md:border-l md:border-gray-300">
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              Для интенсивных УЗВ собственная генерация кислорода может стать
              основой автономного газоснабжения. В проточных системах решение
              зависит от расхода и исходных параметров воды. Для прудов и
              садковых хозяйств в первую очередь оценивают эффективность
              естественного водообмена и необходимость дополнительной
              оксигенации.
            </p>

            <a
              href="#oxygen-requirements"
              className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-gray-950 transition-colors hover:text-red-600"
            >
              Перейти к требованиям по кислороду
              <span className="text-red-600">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

// Промпты для последующей генерации изображений:
export const aquacultureSystemImagePrompts = systems.map(
  ({ id, title, imagePrompt }) => ({
    id,
    title,
    prompt: imagePrompt,
  })
);