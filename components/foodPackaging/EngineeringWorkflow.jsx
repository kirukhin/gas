// components/foodPackaging/EngineeringWorkflow.jsx

const workflowSteps = [
    {
      number: "01",
      title: "Определить технологическую задачу",
      text:
        "Сначала определяется не генератор, а задача упаковочной линии: какой продукт упаковывается, какую функцию должна выполнять газовая среда и какие параметры необходимо обеспечить внутри готовой упаковки."
    },
    {
      number: "02",
      title: "Собрать данные по упаковочной линии",
      text:
        "Необходимо определить производительность линии, количество упаковочных машин, объём упаковки, режим работы и возможные изменения производительности в течение смены."
    },
    {
      number: "03",
      title: "Определить параметры MAP",
      text:
        "Для конкретного продукта задаётся состав модифицированной газовой среды, включая роль азота, углекислого газа и кислорода."
    },
    {
      number: "04",
      title: "Определить требования к азоту",
      text:
        "На основании требований технологического процесса определяются необходимая чистота азота, допустимое содержание кислорода и требования к стабильности подачи газа."
    },
    {
      number: "05",
      title: "Рассчитать расход",
      text:
        "Рассчитывается среднее и пиковое потребление азота с учётом объёма упаковки, способа замещения воздуха и количества упаковочных циклов."
    },
    {
      number: "06",
      title: "Определить параметры подачи",
      text:
        "Формируются требования к давлению, производительности и режиму работы системы газоснабжения."
    },
    {
      number: "07",
      title: "Рассчитать буферизацию",
      text:
        "Если упаковочная линия создаёт кратковременные пики потребления, определяется необходимый объём ресиверов и допустимая амплитуда изменения давления."
    },
    {
      number: "08",
      title: "Подобрать оборудование",
      text:
        "После определения параметров процесса выбираются компрессор, система подготовки воздуха, генератор азота, ресиверы и оборудование контроля."
    }
  ];
  
  const inputGroups = [
    {
      title: "Продукт",
      items: [
        "Тип продукции",
        "Требуемый срок хранения",
        "Чувствительность к кислороду",
        "Требуемая газовая среда",
        "Допустимое содержание O₂"
      ]
    },
    {
      title: "Упаковка",
      items: [
        "Тип упаковки",
        "Внутренний объём",
        "Свободный объём над продуктом",
        "Материал упаковки",
        "Требования к герметичности"
      ]
    },
    {
      title: "Оборудование",
      items: [
        "Тип упаковочной машины",
        "Количество машин",
        "Количество циклов в минуту",
        "Способ удаления воздуха",
        "Рабочее давление газа"
      ]
    },
    {
      title: "Режим производства",
      items: [
        "Часы работы в сутки",
        "Количество смен",
        "Постоянный или переменный расход",
        "Пиковая производительность",
        "Планируемое расширение линии"
      ]
    }
  ];
  
  const engineeringBlocks = [
    {
      number: "01",
      title: "Средний расход азота",
      text:
        "Средний расход показывает, какое количество газа система должна производить в течение установленного периода работы. Он необходим для выбора базовой производительности генератора."
    },
    {
      number: "02",
      title: "Пиковый расход",
      text:
        "Пиковое потребление возникает при максимальной производительности линии, одновременной работе нескольких машин или особенностях конкретного упаковочного цикла."
    },
    {
      number: "03",
      title: "Давление подачи",
      text:
        "Требуемое давление определяется упаковочным оборудованием и потерями давления в трубопроводах, ресиверах, арматуре и системе распределения газа."
    },
    {
      number: "04",
      title: "Стабильность подачи",
      text:
        "Для стабильной работы упаковочной линии важна не только номинальная производительность генератора, но и способность системы поддерживать заданный расход и давление во время изменения нагрузки."
    }
  ];
  
  const systemEquipment = [
    {
      number: "01",
      title: "Воздушный компрессор",
      text:
        "Обеспечивает генератор азота необходимым количеством сжатого воздуха."
    },
    {
      number: "02",
      title: "Подготовка воздуха",
      text:
        "Удаляет влагу, масло и механические частицы перед подачей воздуха в адсорбционную систему."
    },
    {
      number: "03",
      title: "Воздушный ресивер",
      text:
        "Снижает колебания давления и создаёт буфер между компрессором и генератором."
    },
    {
      number: "04",
      title: "Генератор азота",
      text:
        "Производит азот с заданной чистотой и расчётной производительностью."
    },
    {
      number: "05",
      title: "Ресивер азота",
      text:
        "Компенсирует кратковременные пики расхода и повышает стабильность подачи газа к упаковочному оборудованию."
    },
    {
      number: "06",
      title: "Система распределения",
      text:
        "Подаёт азот к одной или нескольким упаковочным машинам с учётом требуемого давления и расхода."
    }
  ];
  
  export default function EngineeringWorkflow() {
    return (
      <section id="workflow" className="border-b border-gray-100 py-16">
        <div className="container max-w-6xl mx-auto px-6">
  
          {/* ============================================================
              HEADER
          ============================================================ */}
  
          <div className="max-w-4xl mb-12">
  
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Инженерный workflow
            </p>
  
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              Проектирование системы газоснабжения упаковочной линии
            </h2>
  
            <div className="gradient h-1 w-24 rounded mb-8 opacity-40"></div>
  
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Система производства азота для пищевой упаковки должна
              проектироваться от параметров технологического процесса, а не
              от номинальной производительности генератора.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              Инженерная задача заключается в том, чтобы определить, какое
              количество азота необходимо упаковочной линии, с какой чистотой,
              при каком давлении и насколько равномерно это потребление
              распределено во времени.
            </p>
  
          </div>
  
  
          {/* ============================================================
              MAIN WORKFLOW
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Последовательность проектирования
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                От продукта до готовой системы газоснабжения
              </h3>
  
            </div>
  
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
  
              {workflowSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-xl border border-gray-200 bg-white p-6"
                >
  
                  <div className="text-red-600 font-bold text-2xl mb-5">
                    {step.number}
                  </div>
  
                  <h4 className="text-lg font-bold text-gray-800 mb-4">
                    {step.title}
                  </h4>
  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.text}
                  </p>
  
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              SCHEME PLACEHOLDER
          ============================================================ */}
  
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 min-h-[480px] flex flex-col items-center justify-center text-center p-10 mb-16">
  
            <div className="text-sm font-semibold tracking-widest text-red-600 mb-4">
              SCHEME-03
            </div>
  
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Схема проектирования системы азотного газоснабжения
            </h3>
  
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Здесь будет размещена инженерная схема, показывающая путь от
              исходных параметров продукта и упаковочной линии к определению
              расхода азота, параметров генератора и состава готовой
              газогенераторной системы.
            </p>
  
          </div>
  
  
          {/* ============================================================
              INPUT DATA
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="max-w-4xl mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Исходные данные
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Что необходимо знать до начала подбора оборудования
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Чем точнее определены параметры упаковочного процесса, тем
                точнее можно рассчитать производительность системы и избежать
                как недостатка газа, так и необоснованного запаса оборудования.
              </p>
  
            </div>
  
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  
              {inputGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border border-gray-200 p-6"
                >
  
                  <h4 className="text-xl font-bold text-gray-800 mb-5">
                    {group.title}
                  </h4>
  
                  <ul className="space-y-3">
  
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
  
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
  
                        <span>{item}</span>
  
                      </li>
                    ))}
  
                  </ul>
  
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              LINE CONSUMPTION
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  
            <div>
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Потребление газа
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Средний расход и пиковая нагрузка
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Упаковочная линия практически никогда не потребляет азот
                абсолютно равномерно. Даже при постоянной скорости производства
                расход газа может изменяться в зависимости от конкретного
                упаковочного цикла.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Поэтому при подборе оборудования необходимо отдельно учитывать
                производительность, необходимую в среднем режиме, и
                кратковременные максимальные нагрузки.
              </p>
  
            </div>
  
  
            <div className="space-y-5">
  
              {engineeringBlocks.map((block) => (
                <div
                  key={block.number}
                  className="rounded-xl border border-gray-200 p-6"
                >
  
                  <div className="flex gap-5">
  
                    <div className="text-red-600 font-bold text-xl">
                      {block.number}
                    </div>
  
                    <div>
  
                      <h4 className="font-bold text-gray-800 mb-2">
                        {block.title}
                      </h4>
  
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {block.text}
                      </p>
  
                    </div>
  
                  </div>
  
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              BUFFERING
          ============================================================ */}
  
          <div className="rounded-2xl bg-gray-800 p-8 md:p-12 mb-16">
  
            <div className="grid lg:grid-cols-2 gap-10 items-center">
  
              <div>
  
                <p className="uppercase tracking-widest text-red-400 text-sm font-semibold mb-4">
                  Буферизация
                </p>
  
                <h3 className="text-3xl font-bold text-white mb-6">
                  Генератор не всегда должен покрывать каждый мгновенный пик
                  потребления
                </h3>
  
                <p className="text-gray-300 text-lg leading-relaxed mb-5">
                  Если упаковочная линия периодически потребляет большое
                  количество азота за короткий промежуток времени, систему
                  можно проектировать с использованием ресивера азота.
                </p>
  
                <p className="text-gray-300 text-lg leading-relaxed">
                  В этом случае генератор обеспечивает среднее потребление, а
                  накопленный запас газа компенсирует кратковременные пики.
                  Это позволяет разделить задачу производства азота и задачу
                  покрытия динамической нагрузки упаковочной линии.
                </p>
  
              </div>
  
  
              <div className="rounded-xl bg-white/5 border border-white/10 p-8">
  
                <div className="space-y-6">
  
                  <div>
                    <div className="text-red-400 text-sm font-bold mb-2">
                      ГЕНЕРАТОР
                    </div>
  
                    <div className="text-white text-xl font-bold">
                      Средняя производительность
                    </div>
                  </div>
  
                  <div className="text-center text-red-400 text-2xl">
                    ↓
                  </div>
  
                  <div>
                    <div className="text-red-400 text-sm font-bold mb-2">
                      РЕСИВЕР
                    </div>
  
                    <div className="text-white text-xl font-bold">
                      Запас азота
                    </div>
                  </div>
  
                  <div className="text-center text-red-400 text-2xl">
                    ↓
                  </div>
  
                  <div>
                    <div className="text-red-400 text-sm font-bold mb-2">
                      УПАКОВОЧНАЯ ЛИНИЯ
                    </div>
  
                    <div className="text-white text-xl font-bold">
                      Переменное потребление
                    </div>
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              MULTIPLE MACHINES
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  
            <div className="rounded-2xl border border-gray-200 p-8">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-4">
                Несколько потребителей
              </p>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Одна система для нескольких упаковочных машин
              </h3>
  
              <p className="text-gray-600 leading-relaxed mb-5">
                На производстве азот может использоваться сразу несколькими
                упаковочными линиями. При этом номинальная производительность
                системы не всегда должна определяться простым сложением
                паспортных расходов всех машин.
              </p>
  
              <p className="text-gray-600 leading-relaxed">
                Необходимо учитывать фактическую вероятность одновременной
                работы, режимы загрузки, последовательность упаковочных циклов
                и возможные периоды максимального потребления.
              </p>
  
            </div>
  
  
            <div className="rounded-2xl border border-gray-200 p-8">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-4">
                Развитие производства
              </p>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Производительность с учётом будущего расширения
              </h3>
  
              <p className="text-gray-600 leading-relaxed mb-5">
                При проектировании новой упаковочной линии необходимо учитывать
                не только текущий расход газа, но и вероятность подключения
                дополнительных потребителей.
              </p>
  
              <p className="text-gray-600 leading-relaxed">
                В некоторых случаях рациональнее предусмотреть модульное
                расширение системы, чем сразу устанавливать генератор с
                максимально возможным запасом производительности.
              </p>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              AIR PREPARATION
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="max-w-4xl mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Подготовка воздуха
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Качество исходного сжатого воздуха влияет на всю систему
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Генератор азота является частью более крупной системы. Его
                стабильная работа зависит от количества и качества подаваемого
                сжатого воздуха.
              </p>
  
            </div>
  
  
            <div className="grid md:grid-cols-3 gap-6">
  
              <div className="rounded-xl border border-gray-200 p-7">
  
                <div className="text-red-600 font-bold text-xl mb-4">
                  Влага
                </div>
  
                <p className="text-gray-600 leading-relaxed">
                  Вода в сжатом воздухе может негативно влиять на работу
                  адсорбционной системы и должна удаляться соответствующей
                  системой осушки.
                </p>
  
              </div>
  
  
              <div className="rounded-xl border border-gray-200 p-7">
  
                <div className="text-red-600 font-bold text-xl mb-4">
                  Масло
                </div>
  
                <p className="text-gray-600 leading-relaxed">
                  Остаточные масла и аэрозоли требуют соответствующей фильтрации
                  перед подачей воздуха в генератор.
                </p>
  
              </div>
  
  
              <div className="rounded-xl border border-gray-200 p-7">
  
                <div className="text-red-600 font-bold text-xl mb-4">
                  Механические частицы
                </div>
  
                <p className="text-gray-600 leading-relaxed">
                  Фильтрация необходима для защиты оборудования и сохранения
                  стабильных параметров работы всей газогенераторной системы.
                </p>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              SYSTEM COMPOSITION
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Архитектура системы
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                Типовая структура системы производства и подачи азота
              </h3>
  
            </div>
  
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
              {systemEquipment.map((equipment) => (
                <div
                  key={equipment.number}
                  className="rounded-xl border border-gray-200 p-7"
                >
  
                  <div className="text-red-600 font-bold text-2xl mb-4">
                    {equipment.number}
                  </div>
  
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {equipment.title}
                  </h4>
  
                  <p className="text-gray-600 leading-relaxed">
                    {equipment.text}
                  </p>
  
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              COMMON DESIGN ERROR
          ============================================================ */}
  
          <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-8 mb-16">
  
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Типичная ошибка: подбирать систему только по паспортному расходу
              упаковочной машины
            </h3>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Паспортный расход газа может не отражать реальную картину
              потребления. На фактическую нагрузку влияют настройки
              оборудования, размер упаковки, скорость работы линии, состав
              газовой среды и режимы производства.
            </p>
  
            <p className="text-gray-700 text-lg leading-relaxed">
              Поэтому корректный подбор начинается со сбора исходных данных и
              анализа реального технологического процесса. Только после этого
              можно определить расчётную производительность генератора и объём
              необходимого резерва.
            </p>
  
          </div>
  
  
          {/* ============================================================
              FINAL ENGINEERING LOGIC
          ============================================================ */}
  
          <div className="max-w-4xl">
  
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Результат проектирования
            </p>
  
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Какие параметры должны быть определены до выбора генератора
            </h3>
  
            <div className="grid sm:grid-cols-2 gap-4">
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Требуемая чистота азота
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Средний расход N₂
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Пиковый расход N₂
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Требуемое давление подачи
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Режим работы производства
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Требуемый запас газа
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Необходимость резервирования
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Возможность расширения системы
              </div>
  
            </div>
  
            <p className="text-gray-600 text-lg leading-relaxed mt-8">
              Следующим этапом становится непосредственный расчёт расхода азота
              для упаковочной линии. Именно этот расчёт станет основой для
              специализированного калькулятора, который позволит перейти от
              параметров упаковки и производительности линии к подбору
              конкретной конфигурации оборудования.
            </p>
  
          </div>
  
        </div>
      </section>
    );
  }