import React from "react";

const saturationData = [
  { temperature: "20 °C", oxygen: "9,02", width: "100%" },
  { temperature: "25 °C", oxygen: "8,18", width: "91%" },
  { temperature: "30 °C", oxygen: "7,44", width: "82%" },
];

const factors = [
  {
    number: "01",
    title: "Температура воды",
    description:
      "Чем выше температура, тем меньше кислорода может удерживать вода при равновесии с атмосферой. При этом метаболическая активность рыбы и потребность системы в кислороде также могут меняться.",
  },
  {
    number: "02",
    title: "Солёность",
    description:
      "Растворимость кислорода в солёной воде ниже, чем в пресной при сопоставимых температуре и давлении. Для морской аквакультуры расчёт должен учитывать фактическую солёность.",
  },
  {
    number: "03",
    title: "Атмосферное давление",
    description:
      "Высота над уровнем моря и барометрическое давление влияют на равновесную концентрацию кислорода. Табличные значения для стандартных условий нельзя автоматически переносить на любой объект.",
  },
  {
    number: "04",
    title: "Водообмен и перемешивание",
    description:
      "Даже при достаточной подаче кислорода важны его распределение по объёму, циркуляция воды и отсутствие зон с недостаточной концентрацией.",
  },
];

const measurementPoints = [
  {
    title: "Входящая вода",
    description:
      "Исходная концентрация растворённого кислорода до поступления воды в рыбоводческий бассейн.",
  },
  {
    title: "Зона выращивания",
    description:
      "Фактическое содержание кислорода в зоне нахождения рыбы, включая возможные локальные отклонения.",
  },
  {
    title: "Выходящая вода",
    description:
      "Концентрация после прохождения бассейна. Разница с входным значением помогает оценить потребление кислорода в потоке.",
  },
  {
    title: "После оксигенации",
    description:
      "Контроль эффективности передачи кислорода воде и выявление возможного перенасыщения.",
  },
];

function ImagePlaceholder() {
  return (
    <div className="relative flex min-h-[260px] md:min-h-[340px] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white/80">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-gray-400"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M12 3v3M12 18v3M3 12h3m12 0h3" />
            <circle cx="12" cy="12" r="7" />
            <path d="M12 8v4l3 2" />
          </svg>
        </div>

        <span className="text-sm font-semibold text-gray-500">
          Растворение кислорода в воде
        </span>

        <span className="mt-2 max-w-sm text-xs leading-relaxed text-gray-400">
          Заглушка для инженерной иллюстрации: подача кислорода,
          образование пузырьков и распределение газа в водной среде
        </span>
      </div>

      <span className="absolute bottom-4 right-4 rounded-md border border-gray-200 bg-white/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-400 backdrop-blur">
        Oxygen dissolution
      </span>
    </div>
  );
}

function SaturationTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-5 py-5 md:px-7">
        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          Справочные значения
        </div>

        <h3 className="mt-2 text-xl font-semibold text-gray-950">
          Насыщение пресной воды кислородом
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          Равновесная концентрация при атмосферном давлении около уровня моря.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[360px] text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-7">
                Температура
              </th>
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 md:px-7">
                O₂ при 100% насыщении
              </th>
            </tr>
          </thead>

          <tbody>
            {saturationData.map((item) => (
              <tr
                key={item.temperature}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="px-5 py-4 text-sm font-semibold text-gray-800 md:px-7">
                  {item.temperature}
                </td>

                <td className="px-5 py-4 md:px-7">
                  <div className="flex items-center gap-4">
                    <span className="w-16 text-lg font-semibold tabular-nums text-gray-950">
                      {item.oxygen}
                    </span>

                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: item.width }}
                      />
                    </div>

                    <span className="text-xs text-gray-400">мг/л</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 px-5 py-4 md:px-7">
        <p className="text-xs leading-relaxed text-gray-500">
          Значения ориентировочные. Фактическая растворимость зависит также
          от солёности, давления и высоты над уровнем моря.
        </p>
      </div>
    </div>
  );
}

function FactorCard({ item }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tabular-nums text-red-600">
          {item.number}
        </span>

        <span className="h-px w-10 bg-gray-200" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-gray-950">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {item.description}
      </p>
    </div>
  );
}

export default function OxygenRequirements() {
  return (
    <section
      id="oxygen-requirements"
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Заголовок */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Кислородный режим воды
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-gray-950 md:text-4xl lg:text-[42px]">
              Сколько растворённого кислорода необходимо рыбе?
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Для рыбоводческого хозяйства важна не только производительность
              кислородного генератора, но и концентрация растворённого
              кислорода непосредственно в воде.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Её измеряют в миллиграммах на литр (мг/л) или выражают
              в процентах насыщения. Эти показатели связаны между собой,
              но не взаимозаменяемы без учёта температуры и условий среды.
            </p>
          </div>
        </div>

        {/* Пояснение двух показателей */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-950 p-7 text-white md:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Показатель № 1
            </span>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-5xl font-semibold tracking-tight">
                мг/л
              </span>

              <span className="pb-1 text-sm text-gray-400">
                миллиграмм на литр
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Абсолютная концентрация
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Показывает, сколько миллиграммов кислорода фактически содержится
              в одном литре воды. Это один из основных параметров контроля
              кислородного режима в рыбоводческих бассейнах.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-7 md:p-9">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Показатель № 2
            </span>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-5xl font-semibold tracking-tight text-gray-950">
                %
              </span>

              <span className="pb-1 text-sm text-gray-400">
                процент насыщения
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-gray-950">
              Относительная насыщенность
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Показывает, насколько фактическая концентрация близка
              к равновесной концентрации кислорода при заданных условиях
              температуры, солёности и давления.
            </p>
          </div>
        </div>

        {/* Формула */}
        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 md:p-8">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-700">
                Связь показателей
              </span>

              <h3 className="mt-2 text-xl font-semibold text-gray-950">
                Как рассчитывается насыщение?
              </h3>
            </div>

            <div className="md:col-span-8 md:border-l md:border-blue-200 md:pl-8">
              <div className="rounded-xl bg-white px-5 py-5 text-center">
                <div className="text-xl font-semibold tracking-tight text-gray-950 md:text-2xl">
                  Насыщение, % = (фактический O₂ / равновесный O₂) × 100
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Для определения процента насыщения необходимо знать
                равновесную концентрацию кислорода именно при текущих
                параметрах воды.
              </p>
            </div>
          </div>
        </div>

        {/* Таблица */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SaturationTable />
          </div>

          <div className="lg:col-span-5">
            <div className="mb-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Почему это важно
              </span>

              <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-950">
                Температура меняет доступность кислорода
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-gray-600">
              При нагревании воды равновесная концентрация кислорода
              снижается. Поэтому одинаковое значение в мг/л при разных
              температурах может соответствовать разной степени насыщения.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4 border-l-2 border-blue-200 pl-4">
                <div>
                  <div className="text-sm font-semibold text-gray-950">
                    20 °C
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Около 9,02 мг/л при 100% насыщении.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-blue-300 pl-4">
                <div>
                  <div className="text-sm font-semibold text-gray-950">
                    25 °C
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Около 8,18 мг/л при 100% насыщении.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-l-2 border-blue-500 pl-4">
                <div>
                  <div className="text-sm font-semibold text-gray-950">
                    30 °C
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Около 7,44 мг/л при 100% насыщении.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-gray-400">
              Справочные значения для пресной воды при стандартном
              атмосферном давлении.
            </p>
          </div>
        </div>

        {/* Факторы */}
        <div className="mt-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Условия эксплуатации
            </span>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-950 md:text-3xl">
              Что влияет на содержание кислорода в воде
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              При проектировании системы необходимо учитывать не только
              параметры рыбы, но и физические свойства воды и условия
              эксплуатации рыбоводческого объекта.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {factors.map((item) => (
              <FactorCard key={item.number} item={item} />
            ))}
          </div>
        </div>

        {/* Измерение и контроль */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ImagePlaceholder />

            <p className="mt-3 text-xs leading-relaxed text-gray-400">
              Иллюстрация: контроль растворённого кислорода датчиками
              в различных точках рыбоводческой системы.
            </p>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
              Контроль кислородного режима
            </span>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-950 md:text-3xl">
              Измерять нужно не только подачу, но и результат
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Производительность генератора показывает, сколько газообразного
              кислорода производит оборудование. Но она сама по себе не
              подтверждает, что необходимая концентрация достигнута во всём
              объёме воды.
            </p>

            <div className="mt-7 space-y-5">
              {measurementPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="flex gap-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold tabular-nums text-gray-600">
                    0{index + 1}
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-950">
                      {point.title}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Инженерное предупреждение */}
        <div className="mt-12 grid grid-cols-1 gap-6 rounded-2xl border border-amber-200 bg-amber-50 p-7 md:grid-cols-12 md:p-9">
          <div className="md:col-span-1">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-amber-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M12 3 2.8 20h18.4L12 3Z" />
                <path d="M12 9v5m0 3h.01" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-11">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
              Важно для проектирования
            </span>

            <h3 className="mt-2 text-xl font-semibold text-gray-950">
              Нельзя назначить одну концентрацию кислорода для всех рыбоводческих систем
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              Рабочие и минимально допустимые значения определяются с учётом
              вида и размера рыбы, температуры, солёности, интенсивности
              кормления, конструкции системы и требований биофильтра.
              Избыточное насыщение также требует контроля: перенасыщение
              газами и неправильное распределение воды могут создавать
              дополнительные риски для рыбы.
            </p>

            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              Конкретные уставки и аварийные пороги должны быть заданы
              технологом для конкретного объекта.
            </p>
          </div>
        </div>

        {/* Переход к следующему разделу */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-sm leading-relaxed text-gray-500">
            Концентрация кислорода в воде — только часть расчёта. Следующий
            вопрос: сколько кислорода потребляет рыба и вся технологическая
            система в течение суток?
          </p>

          <a
            href="#oxygen-consumption"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-gray-950 transition-colors hover:text-red-600"
          >
            Перейти к расчёту потребления
            <span className="text-red-600">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// Промпт для генерации главной иллюстрации раздела.
export const oxygenRequirementsImagePrompt =
  "Premium realistic technical engineering visualization of oxygen dissolving into water in an industrial aquaculture facility, transparent cutaway section of a fish farming tank with water, fine oxygen bubbles rising from a submerged diffuser or oxygenation cone, clear visible water circulation, fish swimming naturally in the background, scientifically plausible gas transfer process, clean modern RAS facility, subtle stainless steel pipes and sensors, neutral light gray and cool blue palette, sophisticated B2B industrial aesthetic, photorealistic, wide horizontal composition, no text, no logos";