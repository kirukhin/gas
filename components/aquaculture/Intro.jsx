import React from "react";

export default function Intro() {
  return (
    <section id="intro" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Заголовочная зона */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-14">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-red-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Кислород в аквакультуре
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[42px] leading-[1.12] font-semibold tracking-tight text-gray-950">
              Кислород — основа стабильного рыбоводческого производства
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              В интенсивном рыбоводстве содержание растворённого кислорода
              напрямую связано с условиями выращивания рыбы, эффективностью
              кормления и устойчивостью всей системы.
            </p>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-500">
              Когда плотность посадки и интенсивность кормления растут,
              естественного насыщения воды кислородом может быть недостаточно.
              Поэтому рыбоводческие хозяйства используют системы принудительной
              аэрации и подачи технического кислорода — с расчётом на фактическую
              нагрузку и особенности водообмена.
            </p>
          </div>
        </div>

        {/* Основной визуальный блок */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Заглушка изображения */}
          <div className="lg:col-span-7">
            <div className="relative flex min-h-[320px] md:min-h-[440px] h-full overflow-hidden rounded-2xl bg-gray-100 border border-gray-200">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-gray-200">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7 text-gray-400"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  >
                    <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" />
                    <circle cx="12" cy="12" r="2.5" />
                    <path d="M2 4h4M18 20h4" />
                  </svg>
                </div>

                <span className="text-sm font-semibold text-gray-500">
                  Место для главной иллюстрации
                </span>

                <span className="mt-2 max-w-sm text-xs leading-relaxed text-gray-400">
                  Интенсивное рыбоводческое хозяйство с бассейнами,
                  технологическими трубопроводами и системой подачи кислорода
                </span>
              </div>

              <div className="absolute bottom-5 left-5 rounded-lg bg-white/80 px-3 py-2 text-[11px] font-medium tracking-wide text-gray-500 backdrop-blur">
                AQUACULTURE · OXYGEN SUPPLY
              </div>
            </div>
          </div>

          {/* Информационная зона */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">

            <div className="rounded-2xl bg-gray-950 p-7 md:p-9 text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Контроль среды
              </span>

              <h3 className="mt-5 text-2xl md:text-3xl font-semibold leading-tight">
                Растворённый кислород — важнейший параметр качества воды
              </h3>

              <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-300">
                Его концентрацию необходимо контролировать с учётом вида рыбы,
                температуры воды, биомассы, режима кормления и конструкции
                рыбоводческой системы.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 md:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Инженерная задача
              </span>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold leading-tight text-gray-950">
                Не просто произвести кислород, а эффективно передать его воде
              </h3>

              <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">
                Производительность генератора подбирают вместе с системой
                растворения, распределением газа, контролем концентрации
                и резервированием подачи.
              </p>
            </div>

          </div>
        </div>

        {/* Нижний акцент */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-5 border-t border-gray-200 pt-7">
          <p className="max-w-3xl text-sm leading-relaxed text-gray-500">
            Блицгаз помогает подобрать оборудование для производства
            технического кислорода непосредственно на рыбоводческом
            предприятии — с учётом требуемой производительности и параметров
            системы газоснабжения.
          </p>

          <a
            href="#aquaculture-calculator"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-gray-950 transition-colors hover:text-red-600"
          >
            Рассчитать потребность
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition-transform group-hover:translate-x-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}