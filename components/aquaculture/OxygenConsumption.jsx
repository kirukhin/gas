import React from "react";

const oxygenSources = [
  {
    number: "01",
    title: "Рыба",
    description:
      "Основная биологическая нагрузка. Потребление кислорода зависит от вида и массы рыбы, температуры воды, активности и интенсивности кормления.",
  },
  {
    number: "02",
    title: "Биофильтр",
    description:
      "Нитрифицирующие бактерии используют кислород при преобразовании аммонийного азота в нитриты и нитраты. Чем выше кормовая нагрузка, тем больше может быть нагрузка на биофильтр.",
  },
  {
    number: "03",
    title: "Органические остатки",
    description:
      "Несъеденный корм, продукты жизнедеятельности и взвешенная органика создают дополнительную биологическую потребность в кислороде при разложении.",
  },
  {
    number: "04",
    title: "Технологические процессы",
    description:
      "В зависимости от схемы водоподготовки кислород может расходоваться в отдельных технологических узлах. Их нагрузку важно учитывать при проектировании всей системы.",
  },
];

const calculationSteps = [
  {
    number: "01",
    title: "Определить максимальную биомассу",
    description:
      "Учитывать плановое количество рыбы в системе на наиболее интенсивном этапе выращивания, а не только текущую загрузку.",
  },
  {
    number: "02",
    title: "Рассчитать суточный рацион",
    description:
      "Определить максимальное количество корма в сутки. Если рацион задан в процентах от биомассы, его можно вычислить через массу рыбы.",
  },
  {
    number: "03",
    title: "Оценить потребность в кислороде",
    description:
      "Применить предварительный коэффициент кислородной нагрузки на килограмм корма с учётом особенностей технологической системы.",
  },
  {
    number: "04",
    title: "Перейти к подбору генератора",
    description:
      "Учесть пиковую нагрузку, эффективность растворения кислорода и требуемый резерв. Только после этого определять производительность газовой станции.",
  },
];

function ImagePlaceholder({ label, description }) {
  return (
    <div className="relative flex min-h-[250px] overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 md:min-h-[320px]">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white/80">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-gray-400"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M3 12h3l2-6 4 12 2-6h7" />
            <path d="M4 4h16v16H4z" opacity=".25" />
          </svg>
        </div>

        <span className="text-sm font-semibold text-gray-500">
          {label}
        </span>

        <span className="mt-2 max-w-sm text-xs leading-relaxed text-gray-400">
          {description}
        </span>
      </div>

      <span className="absolute bottom-4 right-4 rounded-md border border-gray-200 bg-white/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-gray-400 backdrop-blur">
        Image placeholder
      </span>
    </div>
  );
}

function SourceCard({ item }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
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
    </article>
  );
}

function CalculationStep({ item }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold tabular-nums text-gray-600">
        {item.number}
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-950">
          {item.title}
        </h4>

        <p className="mt-1 text-sm leading-relaxed text-gray-500">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function ExampleCalculation() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-6 py-5 md:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
          Пример предварительной оценки
        </span>

        <h3 className="mt-2 text-xl font-semibold text-gray-950">
          Рыбоводческое хозяйство с биомассой 10 тонн
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          Условный пример для демонстрации методики. Значения рациона
          и коэффициента не являются рекомендацией для конкретного вида рыбы.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
        <div className="border-b border-gray-100 p-6 md:border-b-0 md:border-r md:p-7">
          <span className="text-xs font-medium text-gray-400">
            Биомасса
          </span>

          <div className="mt-3 text-3xl font-semibold tabular-nums text-gray-950">
            10 000
          </div>

          <div className="mt-1 text-sm text-gray-500">
            кг рыбы
          </div>
        </div>

        <div className="border-b border-gray-100 p-6 md:border-b-0 md:border-r md:p-7">
          <span className="text-xs font-medium text-gray-400">
            Условный рацион
          </span>

          <div className="mt-3 text-3xl font-semibold tabular-nums text-gray-950">
            1,5%
          </div>

          <div className="mt-1 text-sm text-gray-500">
            от биомассы в сутки
          </div>
        </div>

        <div className="p-6 md:p-7">
          <span className="text-xs font-medium text-gray-400">
            Суточное количество корма
          </span>

          <div className="mt-3 text-3xl font-semibold tabular-nums text-gray-950">
            150
          </div>

          <div className="mt-1 text-sm text-gray-500">
            кг корма в сутки
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 bg-gray-50 p-6 md:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Предварительная кислородная нагрузка
            </span>

            <div className="mt-3 text-lg font-semibold text-gray-950">
              150 кг корма × 0,5 кг O₂/кг корма
            </div>

            <div className="mt-2 text-sm text-gray-500">
              Условный коэффициент для примера — 0,5 кг O₂ на 1 кг корма.
            </div>
          </div>

          <div className="rounded-xl bg-gray-950 p-6 text-white lg:col-span-5">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Полученная оценка
            </span>

            <div className="mt-3 text-4xl font-semibold tabular-nums">
              75 <span className="text-lg font-medium text-gray-400">кг</span>
            </div>

            <div className="mt-1 text-sm text-gray-300">
              кислорода в сутки
            </div>

            <div className="mt-5 border-t border-white/15 pt-4">
              <div className="text-2xl font-semibold tabular-nums">
                3,125 кг/ч
              </div>

              <div className="mt-1 text-xs text-gray-400">
                Средняя нагрузка при равномерном распределении на 24 часа
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex gap-3">
            <span className="mt-0.5 text-amber-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M12 3 2.8 20h18.4L12 3Z" />
                <path d="M12 9v5m0 3h.01" />
              </svg>
            </span>

            <div>
              <h4 className="text-sm font-semibold text-gray-950">
                Это ещё не производительность генератора
              </h4>

              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Полученная величина — предварительная оценка кислородной
                нагрузки. При выборе генератора дополнительно учитывают
                пиковое потребление, эффективность передачи кислорода воде,
                режим работы оборудования и резервирование подачи.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OxygenConsumption() {
  return (
    <section id="oxygen-consumption" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Заголовок */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-red-600" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Расчёт потребности
              </span>
            </div>

            <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-gray-950 md:text-4xl lg:text-[42px]">
              Сколько кислорода потребляет рыбоводческое хозяйство?
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Производительность кислородной станции определяется
              совокупной нагрузкой на систему. Чем выше биомасса
              и интенсивность кормления, тем больше кислорода требуется
              для поддержания технологического процесса.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Для предварительной оценки удобно использовать суточное
              количество корма. Этот показатель позволяет учесть не только
              дыхание рыбы, но и связанные с кормлением процессы
              в системе водоподготовки.
            </p>
          </div>
        </div>

        {/* Источники потребления */}
        <div className="mt-12">
          <div className="mb-7 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Из чего складывается нагрузка
            </span>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-950 md:text-3xl">
              Кислород нужен не только рыбе
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
              В интенсивной системе кислород расходуется на несколько
              взаимосвязанных биологических и технологических процессов.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {oxygenSources.map((item) => (
              <SourceCard key={item.number} item={item} />
            ))}
          </div>
        </div>

        {/* Кормовая нагрузка */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-5">
            <ImagePlaceholder
              label="Кормление и биологическая нагрузка"
              description="Заглушка для изображения: кормление рыбы в бассейне УЗВ, технологическая среда и оборудование водоподготовки"
            />

            <p className="mt-3 text-xs leading-relaxed text-gray-400">
              Визуал: кормление рыбы в интенсивной системе выращивания.
            </p>
          </div>

          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Ключевой расчётный параметр
            </span>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-950 md:text-3xl">
              Суточный рацион помогает оценить нагрузку на всю систему
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Кормление связано с интенсивностью обмена веществ у рыбы
              и работой биологической очистки. Поэтому при предварительном
              проектировании УЗВ количество корма часто используют
              как основу для оценки кислородной потребности.
            </p>

            <div className="mt-7 rounded-xl bg-gray-100 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Если известна биомасса и рацион
              </div>

              <div className="mt-4 text-xl font-semibold text-gray-950 md:text-2xl">
                Корм, кг/сутки = Биомасса, кг × Рацион, %
              </div>

              <p className="mt-3 text-xs leading-relaxed text-gray-500">
                В формуле рацион используется как доля единицы.
                Например, 1,5% = 0,015.
              </p>
            </div>
          </div>
        </div>

        {/* Формула кислородной нагрузки */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-gray-950 p-7 text-white md:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400">
                Упрощённая модель
              </span>

              <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                Оценка кислородной нагрузки по корму
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                Для предварительного расчёта суточную массу корма умножают
                на удельный коэффициент кислородной нагрузки.
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-10">
              <div className="rounded-xl bg-white/5 p-6 md:p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Формула
                </div>

                <div className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
                  O₂, кг/сутки = Корм, кг/сутки × k
                </div>

                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Корм
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-gray-400">
                      Максимальное количество корма в сутки.
                    </p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white">
                      k
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-gray-400">
                      Удельный коэффициент кислородной нагрузки,
                      кг O₂ на кг корма.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-gray-400">
                Коэффициент зависит от конструкции УЗВ, удаления твёрдых
                отходов, работы биофильтра и других особенностей системы.
              </p>
            </div>
          </div>
        </div>

        {/* Коэффициент */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              Ориентиры для оценки
            </span>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-950 md:text-3xl">
              Почему коэффициент нельзя считать постоянным
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              В технической литературе встречаются разные оценки
              кислородной нагрузки на единицу корма. Разброс связан
              с тем, как устроена система, насколько быстро удаляются
              органические остатки и какая нагрузка приходится на биофильтр.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Примерный диапазон в оценках RAS
                  </span>

                  <div className="mt-3 text-4xl font-semibold tabular-nums text-gray-950">
                    0,3–1,0
                  </div>

                  <div className="mt-1 text-sm text-gray-500">
                    кг O₂ на 1 кг корма
                  </div>
                </div>

                <div className="rounded-xl bg-blue-50 px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                    Пример для оценки
                  </div>

                  <div className="mt-2 text-2xl font-semibold tabular-nums text-gray-950">
                    0,5
                  </div>

                  <div className="text-xs text-gray-500">
                    кг O₂/кг корма
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <div className="relative h-3 overflow-hidden rounded-full bg-gray-100">
                  <div className="absolute inset-0 w-full rounded-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700" />

                  <div className="absolute left-[22.2%] top-0 h-full w-1 bg-gray-950" />
                </div>

                <div className="mt-3 flex justify-between text-xs text-gray-400">
                  <span>0,3</span>
                  <span>0,5 — пример</span>
                  <span>1,0</span>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-gray-600">
                Для проектирования коэффициент необходимо уточнять
                по технологической схеме и исходным данным хозяйства.
                Приведённый диапазон — ориентир для предварительной оценки,
                а не норматив для любого вида рыбы.
              </p>
            </div>
          </div>
        </div>

        {/* Пример */}
        <div className="mt-16">
          <ExampleCalculation />
        </div>

        {/* Этапы расчёта */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
              От исходных данных к оборудованию
            </span>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-gray-950 md:text-3xl">
              Как перейти от кормовой нагрузки к генератору кислорода
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Оценка суточного потребления — только первый этап.
              Для выбора модели необходимо пересчитать нагрузку
              в требуемую производительность газовой станции.
            </p>
          </div>

          <div className="space-y-7 lg:col-span-7">
            {calculationSteps.map((item) => (
              <CalculationStep key={item.number} item={item} />
            ))}
          </div>
        </div>

        {/* Что влияет на точность */}
        <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-7 md:p-9">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-red-600">
                Для точного расчёта
              </span>

              <h3 className="mt-3 text-xl font-semibold leading-tight text-gray-950 md:text-2xl">
                Какие данные понадобятся инженеру
              </h3>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  "Вид рыбы и средняя масса особей",
                  "Максимальная биомасса",
                  "Максимальный суточный рацион",
                  "Температура воды",
                  "Тип рыбоводческой системы",
                  "Производительность биофильтра",
                  "Способ подачи и растворения O₂",
                  "Требования к резервированию",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-red-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-3.5 w-3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="text-sm leading-relaxed text-gray-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Переход */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-sm leading-relaxed text-gray-500">
            Когда потребность в кислороде рассчитана, следующий этап —
            определить способ его получения на предприятии и подобрать
            генератор с необходимой производительностью.
          </p>

          <a
            href="#oxygen-generation"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-gray-950 transition-colors hover:text-red-600"
          >
            Перейти к генерации кислорода
            <span className="text-red-600">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

// Промпт для отдельной генерации главной иллюстрации раздела.
export const oxygenConsumptionImagePrompt =
  "Premium photorealistic industrial aquaculture photography, close-up view of automated fish feeding in a modern recirculating aquaculture system, fish actively feeding at the water surface inside a large clean circular tank, subtle visible water movement, professional stainless steel feeding equipment and water treatment infrastructure in the background, technically credible commercial fish farm, natural cool lighting, sophisticated B2B engineering aesthetic, neutral gray and steel blue palette, wide horizontal composition, no text, no logos";