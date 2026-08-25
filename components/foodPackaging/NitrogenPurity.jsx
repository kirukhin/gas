// components/foodPackaging/NitrogenPurity.jsx

const purityLevels = [
    {
      purity: "95%",
      oxygen: "до 5% O₂",
      usage: "Базовые процессы инертирования и отдельные технологические задачи",
      note:
        "Такой уровень чистоты не следует автоматически считать подходящим для любой MAP-упаковки. Требования определяются конечным содержанием кислорода в упаковке."
    },
    {
      purity: "99%",
      oxygen: "до 1% O₂",
      usage: "Процессы, где требуется существенно снизить содержание кислорода",
      note:
        "Может использоваться в задачах, где допустимый уровень остаточного кислорода определяется совместно качеством газа и эффективностью упаковочного процесса."
    },
    {
      purity: "99,5–99,9%",
      oxygen: "0,5–0,1% O₂",
      usage: "Большинство задач промышленного инертирования и MAP-процессов с повышенными требованиями",
      note:
        "На практике часто является инженерным компромиссом между требованиями процесса и энергозатратами на получение азота."
    },
    {
      purity: "99,99% и выше",
      oxygen: "0,01% O₂ и ниже",
      usage: "Процессы с повышенными требованиями к содержанию кислорода",
      note:
        "Высокая чистота генераторного азота не компенсирует ошибки в продувке упаковки, негерметичность или неправильную настройку упаковочной машины."
    }
  ];
  
  export default function NitrogenPurity() {
    return (
      <section id="purity" className="border-b border-gray-100 py-16">
        <div className="container max-w-6xl mx-auto px-6">
  
          {/* ============================================================
              HEADER
          ============================================================ */}
  
          <div className="max-w-4xl mb-12">
  
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Требования к газу
            </p>
  
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              Какая чистота азота требуется для пищевой упаковки
            </h2>
  
            <div className="gradient h-1 w-24 rounded mb-8 opacity-40"></div>
  
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Вопрос о требуемой чистоте азота часто формулируют слишком
              упрощённо: «какой процент чистоты нужен для упаковки продуктов?».
              На практике одной цифры для всех пищевых производств не существует.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              При проектировании системы необходимо разделять чистоту азота,
              который выходит из генератора, и фактическое содержание кислорода
              внутри уже запечатанной упаковки. Это связанные параметры, но они
              не являются одним и тем же показателем.
            </p>
  
          </div>
  
  
          {/* ============================================================
              KEY DISTINCTION
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
  
            {/* Чистота генератора */}
  
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
  
              <div className="text-red-600 text-sm font-bold tracking-widest mb-4">
                ПАРАМЕТР 01
              </div>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Чистота азота на выходе генератора
              </h3>
  
              <p className="text-gray-600 leading-relaxed mb-5">
                Этот параметр показывает состав газа, который производит
                генератор. В PSA-системах чистота азота обычно выражается
                в процентах содержания N₂ или косвенно определяется
                концентрацией кислорода.
              </p>
  
              <div className="bg-white rounded-xl border border-gray-200 p-5">
  
                <div className="text-sm text-gray-500 mb-2">
                  Упрощённый пример
                </div>
  
                <div className="text-2xl font-bold text-gray-800">
                  99,9% N₂ ≈ до 0,1% O₂
                </div>
  
              </div>
  
            </div>
  
  
            {/* Остаточный кислород */}
  
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
  
              <div className="text-red-600 text-sm font-bold tracking-widest mb-4">
                ПАРАМЕТР 02
              </div>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-5">
                Остаточный кислород внутри упаковки
              </h3>
  
              <p className="text-gray-600 leading-relaxed mb-5">
                Это уже результат работы всей упаковочной системы. На него
                влияет не только состав поступающего азота, но и эффективность
                удаления воздуха из упаковки, расход газа, конструкция
                оборудования и герметичность готовой упаковки.
              </p>
  
              <div className="bg-white rounded-xl border border-gray-200 p-5">
  
                <div className="text-sm text-gray-500 mb-2">
                  Это результат
                </div>
  
                <div className="text-2xl font-bold text-gray-800">
                  Генератор + упаковочная машина + упаковка
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              MAIN ENGINEERING STATEMENT
          ============================================================ */}
  
          <div className="rounded-2xl bg-gray-800 p-8 md:p-12 mb-16">
  
            <div className="max-w-4xl">
  
              <p className="uppercase tracking-widest text-red-400 text-sm font-semibold mb-4">
                Главный принцип
              </p>
  
              <h3 className="text-3xl font-bold text-white mb-6">
                Высокая чистота азота не гарантирует низкое содержание
                кислорода в готовой упаковке
              </h3>
  
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                Даже если генератор производит азот высокой чистоты, внутрь
                упаковки может попадать атмосферный воздух. Это может происходить
                из-за неполного удаления воздуха перед подачей газа, недостаточного
                расхода азота, неправильной настройки упаковочной машины или
                нарушения герметичности.
              </p>
  
              <p className="text-gray-300 text-lg leading-relaxed">
                Поэтому генератор азота должен подбираться не только по
                требуемой чистоте газа, но и по тому, какой результат должен быть
                достигнут внутри упаковки после завершения технологического цикла.
              </p>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              PURITY TABLE
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="mb-8">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Уровни чистоты
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                Чистота азота и инженерный контекст её применения
              </h3>
  
            </div>
  
  
            {/* Desktop table */}
  
            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
  
              <div className="grid grid-cols-[1fr_1fr_2fr_3fr] bg-gray-800 text-white">
  
                <div className="p-5 font-semibold">
                  Чистота N₂
                </div>
  
                <div className="p-5 font-semibold">
                  Остаточный O₂ в газе
                </div>
  
                <div className="p-5 font-semibold">
                  Возможный контекст
                </div>
  
                <div className="p-5 font-semibold">
                  Инженерное замечание
                </div>
  
              </div>
  
              {purityLevels.map((level) => (
  
                <div
                  key={level.purity}
                  className="grid grid-cols-[1fr_1fr_2fr_3fr] border-t border-gray-200"
                >
  
                  <div className="p-5 font-bold text-red-600">
                    {level.purity}
                  </div>
  
                  <div className="p-5 text-gray-700">
                    {level.oxygen}
                  </div>
  
                  <div className="p-5 text-gray-600">
                    {level.usage}
                  </div>
  
                  <div className="p-5 text-gray-600">
                    {level.note}
                  </div>
  
                </div>
  
              ))}
  
            </div>
  
  
            {/* Mobile cards */}
  
            <div className="md:hidden space-y-5">
  
              {purityLevels.map((level) => (
  
                <div
                  key={level.purity}
                  className="rounded-xl border border-gray-200 p-6"
                >
  
                  <div className="text-2xl font-bold text-red-600 mb-3">
                    {level.purity} N₂
                  </div>
  
                  <div className="text-gray-700 font-semibold mb-4">
                    {level.oxygen}
                  </div>
  
                  <p className="text-gray-600 mb-4">
                    {level.usage}
                  </p>
  
                  <p className="text-gray-500 text-sm">
                    {level.note}
                  </p>
  
                </div>
  
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              WHAT AFFECTS RESIDUAL OXYGEN
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  
            <div>
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Реальный технологический результат
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                От чего зависит остаточное содержание кислорода
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Концентрация кислорода внутри упаковки формируется всей
                технологической цепочкой. Даже при неизменной чистоте азота
                результат может существенно отличаться в зависимости от
                параметров упаковочного процесса.
              </p>
  
              <ul className="space-y-4">
  
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">
                    01
                  </span>
  
                  <div>
                    <strong className="text-gray-800">
                      Эффективность удаления воздуха
                    </strong>
  
                    <p className="text-gray-600 mt-1">
                      Чем больше воздуха остаётся в упаковке перед подачей газа,
                      тем выше потенциальная концентрация остаточного кислорода.
                    </p>
                  </div>
                </li>
  
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">
                    02
                  </span>
  
                  <div>
                    <strong className="text-gray-800">
                      Расход азота
                    </strong>
  
                    <p className="text-gray-600 mt-1">
                      Недостаточный расход газа может привести к неполному
                      вытеснению атмосферы упаковки.
                    </p>
                  </div>
                </li>
  
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">
                    03
                  </span>
  
                  <div>
                    <strong className="text-gray-800">
                      Конструкция упаковочной машины
                    </strong>
  
                    <p className="text-gray-600 mt-1">
                      Способ вакуумирования, газовой продувки и герметизации
                      напрямую влияет на результат.
                    </p>
                  </div>
                </li>
  
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">
                    04
                  </span>
  
                  <div>
                    <strong className="text-gray-800">
                      Герметичность упаковки
                    </strong>
  
                    <p className="text-gray-600 mt-1">
                      Даже правильно сформированная газовая среда может
                      изменяться при утечках или проникновении газов через
                      упаковочный материал.
                    </p>
                  </div>
                </li>
  
                <li className="flex gap-4">
                  <span className="text-red-600 font-bold">
                    05
                  </span>
  
                  <div>
                    <strong className="text-gray-800">
                      Сам продукт
                    </strong>
  
                    <p className="text-gray-600 mt-1">
                      Продукт может взаимодействовать с компонентами газовой
                      среды, а свежая растительная продукция дополнительно
                      изменяет её состав в процессе дыхания.
                    </p>
                  </div>
                </li>
  
              </ul>
  
            </div>
  
  
            {/* Image / scheme placeholder */}
  
            <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 min-h-[520px] flex flex-col items-center justify-center text-center p-10">
  
              <div className="text-sm font-semibold tracking-widest text-red-600 mb-4">
                TABLE-02 / O₂ FLOW
              </div>
  
              <div className="text-2xl font-bold text-gray-700 mb-4">
                Здесь будет схема формирования остаточного кислорода
              </div>
  
              <p className="text-gray-500 max-w-md">
                Схема должна показать путь от генератора азота к упаковочной
                машине и выделить точки, в которых кислород может остаться
                внутри упаковки или попасть в неё после подачи газа.
              </p>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              COMMON MISTAKE
          ============================================================ */}
  
          <div className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-8 mb-16">
  
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Типичная ошибка при выборе генератора
            </h3>
  
            <p className="text-gray-700 text-lg leading-relaxed">
              Выбирать максимальную доступную чистоту азота «с запасом», не
              определив реальные требования упаковочной линии. Чем выше чистота
              азота, тем более требовательным становится процесс его получения
              и тем меньше производительность генератора при сопоставимых
              параметрах оборудования.
            </p>
  
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Инженерная задача заключается в поиске минимально необходимой
              чистоты N₂, которая обеспечивает требуемые параметры
              технологического процесса и качество готовой продукции.
            </p>
  
          </div>
  
  
          {/* ============================================================
              ENGINEERING SEQUENCE
          ============================================================ */}
  
          <div>
  
            <div className="max-w-4xl mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Правильная последовательность
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Как определить требуемую чистоту азота
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Подбор начинается не с каталога генераторов, а с параметров
                упаковочного процесса.
              </p>
  
            </div>
  
  
            <div className="grid md:grid-cols-5 gap-5">
  
              <div className="rounded-xl border border-gray-200 p-6">
  
                <div className="text-red-600 font-bold text-2xl mb-4">
                  01
                </div>
  
                <h4 className="font-bold text-gray-800 mb-3">
                  Определить продукт
                </h4>
  
                <p className="text-sm text-gray-600">
                  Учитываются свойства продукта и требования к его хранению.
                </p>
  
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
  
                <div className="text-red-600 font-bold text-2xl mb-4">
                  02
                </div>
  
                <h4 className="font-bold text-gray-800 mb-3">
                  Задать MAP-среду
                </h4>
  
                <p className="text-sm text-gray-600">
                  Определяется требуемый состав газовой смеси.
                </p>
  
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
  
                <div className="text-red-600 font-bold text-2xl mb-4">
                  03
                </div>
  
                <h4 className="font-bold text-gray-800 mb-3">
                  Задать O₂ в упаковке
                </h4>
  
                <p className="text-sm text-gray-600">
                  Определяется допустимый технологический уровень остаточного
                  кислорода.
                </p>
  
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
  
                <div className="text-red-600 font-bold text-2xl mb-4">
                  04
                </div>
  
                <h4 className="font-bold text-gray-800 mb-3">
                  Учесть процесс
                </h4>
  
                <p className="text-sm text-gray-600">
                  Оценивается эффективность удаления воздуха и подачи газа.
                </p>
  
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
  
                <div className="text-red-600 font-bold text-2xl mb-4">
                  05
                </div>
  
                <h4 className="font-bold text-gray-800 mb-3">
                  Подобрать генератор
                </h4>
  
                <p className="text-sm text-gray-600">
                  После этого определяется необходимая чистота и
                  производительность N₂.
                </p>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              TRANSITION TO NEXT SECTION
          ============================================================ */}
  
          <div className="mt-16 max-w-4xl">
  
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Чистота — только один из параметров генератора
            </h3>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              После определения требований к составу и качеству газа следующей
              задачей становится расчёт его количества. Для упаковочной линии
              необходимо определить не только чистоту N₂, но и средний и
              пиковый расход, давление подачи, режим работы оборудования и
              необходимый запас производительности.
            </p>
  
          </div>
  
        </div>
      </section>
    );
  }