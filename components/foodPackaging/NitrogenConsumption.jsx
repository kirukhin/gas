// components/foodPackaging/NitrogenConsumption.jsx

const calculationSteps = [
    {
      number: "01",
      title: "Определить свободный объём упаковки",
      text:
        "Для расчёта расхода газа важен не общий внешний размер упаковки, а объём свободного пространства внутри неё после размещения продукта."
    },
    {
      number: "02",
      title: "Определить объём газозамещения",
      text:
        "При формировании модифицированной газовой среды упаковка обычно продувается газом. Поэтому фактический расход азота может превышать свободный объём готовой упаковки."
    },
    {
      number: "03",
      title: "Рассчитать расход на одну упаковку",
      text:
        "Свободный объём умножается на коэффициент газозамещения. Полученное значение показывает расчётное количество газа, необходимое для одного упаковочного цикла."
    },
    {
      number: "04",
      title: "Учесть производительность линии",
      text:
        "Расход на одну упаковку умножается на фактическое количество упаковок, производимых за минуту или час."
    },
    {
      number: "05",
      title: "Определить максимальную нагрузку",
      text:
        "Отдельно анализируется максимальная скорость работы линии и возможное одновременное потребление газа несколькими упаковочными машинами."
    },
    {
      number: "06",
      title: "Определить производительность системы",
      text:
        "После анализа среднего и пикового расхода определяется производительность генератора и необходимый объём буферного запаса азота."
    }
  ];
  
  const factors = [
    {
      title: "Свободный объём",
      text:
        "Чем больше свободного пространства между продуктом и упаковкой, тем больше газа необходимо для формирования газовой среды."
    },
    {
      title: "Способ газозамещения",
      text:
        "Разные упаковочные машины и технологические режимы используют разное количество газа для вытеснения атмосферного воздуха."
    },
    {
      title: "Остаточный кислород",
      text:
        "Требования к содержанию остаточного кислорода могут влиять на необходимый объём продувки и количество циклов замещения."
    },
    {
      title: "Скорость линии",
      text:
        "При увеличении количества упаковок в минуту расход газа растёт пропорционально, если параметры одной упаковки остаются неизменными."
    },
    {
      title: "Количество машин",
      text:
        "При централизованном газоснабжении необходимо учитывать суммарную и одновременную нагрузку нескольких потребителей."
    },
    {
      title: "Потери и утечки",
      text:
        "Реальная система включает потери в трубопроводах, арматуре и соединениях, а также технологические потери во время упаковочного процесса."
    }
  ];
  
  const commonMistakes = [
    {
      title: "Использовать полный объём упаковки",
      text:
        "Общий геометрический объём упаковки не равен объёму газа. Значительную часть внутреннего пространства может занимать сам продукт."
    },
    {
      title: "Считать одну упаковку = один объём газа",
      text:
        "Для вытеснения воздуха и получения требуемой газовой среды может потребоваться объём газа, превышающий свободный объём готовой упаковки."
    },
    {
      title: "Подбирать генератор по среднему расходу",
      text:
        "Если не учитывать максимальную нагрузку и динамику потребления, производительности системы может не хватать в периоды интенсивной работы линии."
    },
    {
      title: "Компенсировать всё запасом генератора",
      text:
        "Не каждый кратковременный пик требует увеличения производительности генератора. В ряде случаев рациональнее использовать ресивер азота."
    }
  ];
  
  const variables = [
    {
      symbol: "Vуп",
      title: "Внутренний объём упаковки",
      text:
        "Объём внутреннего пространства упаковки до размещения продукта."
    },
    {
      symbol: "Vпр",
      title: "Объём продукта",
      text:
        "Объём, занимаемый продуктом внутри упаковки."
    },
    {
      symbol: "Vсв",
      title: "Свободный объём",
      text:
        "Пространство внутри упаковки, которое может быть заполнено газовой средой."
    },
    {
      symbol: "Kг",
      title: "Коэффициент газозамещения",
      text:
        "Коэффициент, учитывающий количество газа, необходимое для формирования требуемой среды."
    },
    {
      symbol: "Qуп",
      title: "Расход на упаковку",
      text:
        "Расчётный объём азота, используемый для одного упаковочного цикла."
    },
    {
      symbol: "N",
      title: "Производительность линии",
      text:
        "Количество упаковок, производимых за единицу времени."
    },
    {
      symbol: "Q",
      title: "Расход азота",
      text:
        "Суммарное количество азота, необходимое упаковочной линии за единицу времени."
    }
  ];
  
  export default function NitrogenConsumption() {
    return (
      <section id="calculation" className="border-b border-gray-100 py-16">
        <div className="container max-w-6xl mx-auto px-6">
  
          {/* ============================================================
              HEADER
          ============================================================ */}
  
          <div className="max-w-4xl mb-12">
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Инженерный расчёт
            </p>
  
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              Как рассчитывается расход азота для пищевой упаковки
            </h2>
  
            <div className="gradient h-1 w-24 rounded mb-8 opacity-40"></div>
  
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Производительность генератора азота нельзя определить только по
              названию продукта или типу упаковочной машины.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              Расчёт начинается с определения объёма газовой среды в одной
              упаковке и заканчивается анализом фактического потребления всей
              упаковочной линии. Между этими двумя точками находятся параметры
              продукта, упаковки, технологии газозамещения и режима работы
              оборудования.
            </p>
          </div>
  
  
          {/* ============================================================
              BASIC PRINCIPLE
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  
            <div>
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Базовый принцип
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Расход начинается со свободного объёма внутри упаковки
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Внутри упаковки находится не только газ. Значительную часть
                пространства занимает продукт, поэтому для инженерного расчёта
                необходимо отделить общий внутренний объём упаковки от
                свободного объёма, который формирует газовую среду.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Именно этот свободный объём становится исходной точкой для
                определения количества азота, необходимого для одного
                упаковочного цикла.
              </p>
            </div>
  
  
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
  
              <div className="text-sm font-semibold tracking-widest text-red-600 mb-5">
                БАЗОВАЯ ЛОГИКА
              </div>
  
              <div className="space-y-4">
  
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <div className="font-bold text-gray-800 mb-1">
                    Внутренний объём упаковки
                  </div>
  
                  <div className="text-sm text-gray-600">
                    Всё доступное внутреннее пространство.
                  </div>
                </div>
  
                <div className="text-center text-red-600 text-xl">
                  −
                </div>
  
                <div className="rounded-lg bg-white border border-gray-200 p-5">
                  <div className="font-bold text-gray-800 mb-1">
                    Объём продукта
                  </div>
  
                  <div className="text-sm text-gray-600">
                    Пространство, физически занятое продуктом.
                  </div>
                </div>
  
                <div className="text-center text-red-600 text-xl">
                  =
                </div>
  
                <div className="rounded-lg border border-red-200 bg-red-50 p-5">
                  <div className="font-bold text-gray-800 mb-1">
                    Свободный объём упаковки
                  </div>
  
                  <div className="text-sm text-gray-600">
                    Объём, в котором формируется модифицированная газовая среда.
                  </div>
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              FORMULA
          ============================================================ */}
  
          <div className="rounded-2xl bg-gray-800 p-8 md:p-12 mb-16">
  
            <div className="max-w-4xl">
  
              <p className="uppercase tracking-widest text-red-400 text-sm font-semibold mb-4">
                Базовая расчётная модель
              </p>
  
              <h3 className="text-3xl font-bold text-white mb-8">
                От объёма упаковки к расходу азота
              </h3>
  
              <div className="grid md:grid-cols-3 gap-5">
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 font-bold text-lg mb-3">
                    Шаг 1
                  </div>
  
                  <div className="text-white text-xl font-bold mb-3">
                    Vсв = Vуп − Vпр
                  </div>
  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Определяется свободный объём внутри упаковки.
                  </p>
                </div>
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 font-bold text-lg mb-3">
                    Шаг 2
                  </div>
  
                  <div className="text-white text-xl font-bold mb-3">
                    Qуп = Vсв × Kг
                  </div>
  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Определяется расчётный расход газа на одну упаковку.
                  </p>
                </div>
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 font-bold text-lg mb-3">
                    Шаг 3
                  </div>
  
                  <div className="text-white text-xl font-bold mb-3">
                    Q = Qуп × N
                  </div>
  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Определяется расход азота для заданной производительности.
                  </p>
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              VARIABLES
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="mb-10">
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Переменные расчёта
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                Какие параметры участвуют в определении расхода
              </h3>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
  
              {variables.map((variable) => (
                <div
                  key={variable.symbol}
                  className="rounded-xl border border-gray-200 bg-white p-6"
                >
                  <div className="text-red-600 text-2xl font-bold mb-4">
                    {variable.symbol}
                  </div>
  
                  <h4 className="font-bold text-gray-800 mb-3">
                    {variable.title}
                  </h4>
  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {variable.text}
                  </p>
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              WHY PACKAGE VOLUME IS NOT ENOUGH
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  
            <div>
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Важный момент
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Объём упаковки не равен расходу азота
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Было бы ошибкой считать, что для упаковки объёмом один литр
                всегда требуется ровно один литр азота.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Во-первых, часть объёма занимает продукт. Во-вторых, для
                вытеснения воздуха может использоваться объём газа, превышающий
                свободное пространство готовой упаковки.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Фактический расход зависит от технологии формирования
                модифицированной газовой среды и параметров конкретного
                упаковочного оборудования.
              </p>
  
            </div>
  
  
            <div className="space-y-5">
  
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-red-600 font-bold mb-2">
                  01. Продукт занимает объём
                </div>
  
                <p className="text-gray-600 text-sm leading-relaxed">
                  Газ заполняет только свободное пространство внутри упаковки.
                </p>
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-red-600 font-bold mb-2">
                  02. Воздух необходимо вытеснить
                </div>
  
                <p className="text-gray-600 text-sm leading-relaxed">
                  Для формирования заданной газовой среды используется
                  технологический процесс замещения исходного атмосферного
                  воздуха.
                </p>
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-red-600 font-bold mb-2">
                  03. Возможны технологические потери
                </div>
  
                <p className="text-gray-600 text-sm leading-relaxed">
                  Часть газа может расходоваться вне готовой упаковки в процессе
                  формирования и подачи газовой среды.
                </p>
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              CALCULATION FACTORS
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="max-w-4xl mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Факторы расхода
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Что влияет на фактическое потребление азота
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Одинаковые по внешнему размеру упаковки могут иметь совершенно
                разный расход газа в зависимости от продукта, технологии и
                производительности линии.
              </p>
  
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
              {factors.map((factor, index) => (
                <div
                  key={factor.title}
                  className="rounded-xl border border-gray-200 p-7"
                >
                  <div className="text-red-600 font-bold text-2xl mb-5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
  
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {factor.title}
                  </h4>
  
                  <p className="text-gray-600 leading-relaxed">
                    {factor.text}
                  </p>
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              CALCULATION SEQUENCE
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Последовательность расчёта
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                Как инженер переходит от упаковки к генератору
              </h3>
  
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
  
              {calculationSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-xl border border-gray-200 p-6"
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
  
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 min-h-[500px] flex flex-col items-center justify-center text-center p-10 mb-16">
  
            <div className="text-sm font-semibold tracking-widest text-red-600 mb-4">
              SCHEME-04
            </div>
  
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Схема расчёта расхода азота упаковочной линии
            </h3>
  
            <p className="text-gray-500 max-w-2xl leading-relaxed">
              Здесь будет размещена инженерная схема: упаковка → свободный объём
              → газозамещение → расход на упаковку → упаковок в минуту → средний
              и пиковый расход → ресивер → производительность генератора.
            </p>
  
          </div>
  
  
          {/* ============================================================
              AVERAGE VS PEAK
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
  
            <div className="rounded-2xl border border-gray-200 p-8">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-4">
                Средний расход
              </p>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Производительность в обычном режиме
              </h3>
  
              <p className="text-gray-600 leading-relaxed mb-4">
                Средний расход определяется фактической производительностью
                упаковочной линии в течение рабочего периода.
              </p>
  
              <p className="text-gray-600 leading-relaxed">
                Этот параметр необходим для определения количества азота,
                которое система должна стабильно производить при нормальной
                эксплуатации.
              </p>
  
            </div>
  
  
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-4">
                Пиковый расход
              </p>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Максимальная кратковременная нагрузка
              </h3>
  
              <p className="text-gray-700 leading-relaxed mb-4">
                Пиковое потребление возникает при максимальной скорости линии,
                одновременной работе нескольких потребителей или особенностях
                конкретного технологического цикла.
              </p>
  
              <p className="text-gray-700 leading-relaxed">
                Для покрытия таких нагрузок система может использовать сочетание
                производительности генератора и накопленного запаса азота.
              </p>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              RESERVOIR LOGIC
          ============================================================ */}
  
          <div className="rounded-2xl bg-gray-800 p-8 md:p-12 mb-16">
  
            <div className="grid lg:grid-cols-2 gap-10 items-center">
  
              <div>
  
                <p className="uppercase tracking-widest text-red-400 text-sm font-semibold mb-4">
                  Производительность и буфер
                </p>
  
                <h3 className="text-3xl font-bold text-white mb-6">
                  Пиковый расход не всегда требует более крупного генератора
                </h3>
  
                <p className="text-gray-300 text-lg leading-relaxed mb-5">
                  Если максимальное потребление происходит кратковременно,
                  необходимый дополнительный объём азота может быть накоплен в
                  ресивере заранее.
                </p>
  
                <p className="text-gray-300 text-lg leading-relaxed">
                  Поэтому инженерная задача заключается в определении правильного
                  соотношения между постоянной производительностью генератора и
                  объёмом буферного запаса газа.
                </p>
  
              </div>
  
  
              <div className="space-y-4">
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 text-sm font-bold mb-2">
                    01
                  </div>
  
                  <div className="text-white font-bold text-lg">
                    Генератор производит азот
                  </div>
                </div>
  
                <div className="text-center text-red-400 text-xl">
                  ↓
                </div>
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 text-sm font-bold mb-2">
                    02
                  </div>
  
                  <div className="text-white font-bold text-lg">
                    Ресивер создаёт запас
                  </div>
                </div>
  
                <div className="text-center text-red-400 text-xl">
                  ↓
                </div>
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 text-sm font-bold mb-2">
                    03
                  </div>
  
                  <div className="text-white font-bold text-lg">
                    Линия получает газ в соответствии с нагрузкой
                  </div>
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              COMMON MISTAKES
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Ошибки расчёта
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                Что приводит к неправильному подбору производительности
              </h3>
  
            </div>
  
            <div className="grid md:grid-cols-2 gap-6">
  
              {commonMistakes.map((mistake, index) => (
                <div
                  key={mistake.title}
                  className="rounded-xl border border-gray-200 p-7"
                >
                  <div className="text-red-600 font-bold text-2xl mb-5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
  
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {mistake.title}
                  </h4>
  
                  <p className="text-gray-600 leading-relaxed">
                    {mistake.text}
                  </p>
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              RESULT
          ============================================================ */}
  
          <div className="max-w-4xl">
  
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Результат расчёта
            </p>
  
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Какие параметры становятся основой для подбора оборудования
            </h3>
  
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              После выполнения расчёта появляется набор исходных данных,
              достаточный для предварительного определения конфигурации
              газогенераторной системы.
            </p>
  
            <div className="grid sm:grid-cols-2 gap-4">
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Расход азота на одну упаковку
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Средний расход азота
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Максимальный расход
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Характер изменения нагрузки
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Требуемый объём буферизации
              </div>
  
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-5 text-gray-700">
                Расчётная производительность генератора
              </div>
  
            </div>
  
            <p className="text-gray-600 text-lg leading-relaxed mt-8">
              Эти параметры станут основой специализированного калькулятора
              упаковочной линии. Пользователь сможет последовательно указать
              характеристики продукта и упаковки, параметры оборудования и
              производительность линии, после чего система определит расчётную
              потребность в азоте и передаст её в алгоритм подбора оборудования.
            </p>
  
          </div>
  
        </div>
      </section>
    );
  }