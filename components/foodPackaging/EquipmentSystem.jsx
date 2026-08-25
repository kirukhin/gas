// components/foodPackaging/EquipmentSystem.jsx

const equipmentStages = [
    {
      number: "01",
      title: "Забор атмосферного воздуха",
      description:
        "Исходным сырьём для производства азота является окружающий атмосферный воздух. Он содержит около 78 % азота и поступает в систему подготовки сжатого воздуха.",
      result: "Атмосферный воздух"
    },
    {
      number: "02",
      title: "Сжатие воздуха",
      description:
        "Компрессор создаёт необходимый расход и давление сжатого воздуха для работы всей газогенераторной системы. Его производительность определяется потреблением генератора азота и параметрами выбранной технологии.",
      result: "Сжатый воздух"
    },
    {
      number: "03",
      title: "Подготовка воздуха",
      description:
        "Перед подачей в генератор воздух очищается от влаги, масла и твёрдых частиц. Качество подготовки воздуха напрямую влияет на стабильность работы адсорбционной системы.",
      result: "Сухой и очищенный воздух"
    },
    {
      number: "04",
      title: "Генерация азота",
      description:
        "В PSA-генераторе компоненты атмосферного воздуха разделяются методом адсорбции. На выходе получается поток азота с параметрами, соответствующими выбранному режиму работы.",
      result: "Азот заданной чистоты"
    },
    {
      number: "05",
      title: "Накопление азота",
      description:
        "Ресивер создаёт буферный запас газа, сглаживает колебания потребления и помогает покрывать кратковременные пики нагрузки упаковочной линии.",
      result: "Буферный запас газа"
    },
    {
      number: "06",
      title: "Подача на упаковочную линию",
      description:
        "Азот поступает к упаковочному оборудованию через систему трубопроводов, запорной и регулирующей арматуры. На этом этапе важны давление, расход и стабильность подачи.",
      result: "Газоснабжение упаковочных машин"
    }
  ];
  
  const systemComponents = [
    {
      title: "Компрессор",
      role: "Создаёт поток сжатого воздуха для работы системы.",
      depends:
        "Производительность генератора, рабочее давление, качество исходного воздуха и одновременная работа других потребителей сжатого воздуха."
    },
    {
      title: "Ресивер сжатого воздуха",
      role:
        "Создаёт запас воздуха и снижает влияние кратковременных колебаний потребления.",
      depends:
        "Производительности компрессора, характера нагрузки и режима работы генератора."
    },
    {
      title: "Осушитель",
      role:
        "Удаляет влагу из сжатого воздуха до параметров, необходимых для стабильной работы системы.",
      depends:
        "Климатических условий, характеристик компрессора и требований к качеству подготовленного воздуха."
    },
    {
      title: "Система фильтрации",
      role:
        "Удаляет частицы, масло и другие загрязнения из потока сжатого воздуха.",
      depends:
        "Типа компрессора, требуемого класса очистки и условий эксплуатации оборудования."
    },
    {
      title: "PSA-генератор азота",
      role:
        "Разделяет компоненты воздуха и производит азот необходимой чистоты.",
      depends:
        "Требуемого расхода азота, чистоты и параметров подачи."
    },
    {
      title: "Ресивер азота",
      role:
        "Накапливает произведённый газ и обеспечивает буфер между генератором и потребителями.",
      depends:
        "Разницы между постоянной производительностью генератора и переменным потреблением упаковочной линии."
    },
    {
      title: "Система контроля",
      role:
        "Позволяет контролировать давление и другие параметры газоснабжения.",
      depends:
        "Требований технологического процесса и степени автоматизации системы."
    },
    {
      title: "Система распределения",
      role:
        "Доставляет азот от станции к одной или нескольким упаковочным машинам.",
      depends:
        "Количество потребителей, расстояние, требуемый расход и допустимые потери давления."
    }
  ];
  
  const designQuestions = [
    {
      number: "01",
      title: "Какой расход азота необходим?",
      text:
        "Определяется по параметрам упаковки, способу газозамещения, производительности линии и одновременной работе оборудования."
    },
    {
      number: "02",
      title: "Какая чистота требуется?",
      text:
        "Требуемая чистота влияет на режим работы генератора и его производительность. Поэтому этот параметр определяется вместе с требованиями конкретного продукта и технологии."
    },
    {
      number: "03",
      title: "Какой характер потребления?",
      text:
        "Важно определить не только средний расход, но и максимальную нагрузку, продолжительность пиков и возможные изменения производительности линии."
    },
    {
      number: "04",
      title: "Сколько потребителей подключается?",
      text:
        "Одна газогенераторная станция может снабжать несколько упаковочных машин. В этом случае необходимо учитывать суммарную и одновременную нагрузку."
    },
    {
      number: "05",
      title: "Как далеко находится станция?",
      text:
        "Расстояние между генератором и упаковочным оборудованием влияет на проектирование трубопроводной системы и расчёт потерь давления."
    },
    {
      number: "06",
      title: "Как будет развиваться производство?",
      text:
        "При проектировании системы необходимо учитывать возможное увеличение количества упаковочных машин или производительности существующих линий."
    }
  ];
  
  const commonSystemMistakes = [
    {
      title: "Подбор только генератора",
      text:
        "Генератор азота является частью системы. Его работа зависит от компрессора, подготовки воздуха и параметров подачи газа."
    },
    {
      title: "Игнорирование подготовки воздуха",
      text:
        "Недостаточная очистка и осушка воздуха могут привести к ухудшению стабильности работы всей адсорбционной системы."
    },
    {
      title: "Расчёт только по среднему расходу",
      text:
        "Среднее потребление не показывает кратковременные пики, которые могут возникать при максимальной скорости работы упаковочного оборудования."
    },
    {
      title: "Отсутствие буферного объёма",
      text:
        "Без правильно подобранного ресивера генератору приходится напрямую реагировать на динамику потребления упаковочной линии."
    },
    {
      title: "Не учитывать несколько линий",
      text:
        "При подключении нескольких упаковочных машин необходимо анализировать вероятность и продолжительность их одновременной максимальной нагрузки."
    },
    {
      title: "Не учитывать развитие производства",
      text:
        "Система, рассчитанная только под текущую нагрузку, может потребовать полной реконструкции при добавлении новых потребителей."
    }
  ];
  
  export default function EquipmentSystem() {
    return (
      <section id="equipment" className="border-b border-gray-100 py-16">
        <div className="container max-w-6xl mx-auto px-6">
  
          {/* ============================================================
              HEADER
          ============================================================ */}
  
          <div className="max-w-4xl mb-12">
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Состав оборудования
            </p>
  
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              Из чего состоит система производства азота для упаковочной линии
            </h2>
  
            <div className="gradient h-1 w-24 rounded mb-8 opacity-40"></div>
  
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Генератор азота не является самостоятельным источником газа,
              который можно рассматривать отдельно от остального оборудования.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              Система газоснабжения упаковочной линии представляет собой
              последовательную инженерную цепочку: атмосферный воздух проходит
              сжатие и подготовку, после чего поступает в генератор азота.
              Полученный газ накапливается, контролируется и подаётся к
              упаковочному оборудованию с требуемыми параметрами.
            </p>
          </div>
  
  
          {/* ============================================================
              SYSTEM CHAIN
          ============================================================ */}
  
          <div className="rounded-2xl bg-gray-800 p-8 md:p-12 mb-16">
  
            <div className="mb-10">
              <p className="uppercase tracking-widest text-red-400 text-sm font-semibold mb-3">
                Технологическая цепочка
              </p>
  
              <h3 className="text-3xl font-bold text-white">
                От атмосферного воздуха до упаковочной машины
              </h3>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
  
              {equipmentStages.map((stage) => (
                <div
                  key={stage.number}
                  className="rounded-xl bg-white/5 border border-white/10 p-6"
                >
                  <div className="text-red-400 font-bold text-2xl mb-5">
                    {stage.number}
                  </div>
  
                  <h4 className="text-xl font-bold text-white mb-4">
                    {stage.title}
                  </h4>
  
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {stage.description}
                  </p>
  
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-xs uppercase tracking-wider text-red-400 mb-2">
                      Результат этапа
                    </div>
  
                    <div className="text-sm text-white font-medium">
                      {stage.result}
                    </div>
                  </div>
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              MAIN SCHEME PLACEHOLDER
          ============================================================ */}
  
          <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 min-h-[550px] flex flex-col items-center justify-center text-center p-10 mb-16">
  
            <div className="text-sm font-semibold tracking-widest text-red-600 mb-4">
              SCHEME-05
            </div>
  
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Схема системы производства и подачи азота
            </h3>
  
            <p className="text-gray-500 max-w-3xl leading-relaxed">
              Здесь будет размещена инженерная схема всей газогенераторной
              системы:
            </p>
  
            <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-4xl">
              {[
                "Атмосферный воздух",
                "Компрессор",
                "Осушитель",
                "Фильтрация",
                "PSA-генератор",
                "Ресивер азота",
                "Контроль параметров",
                "Упаковочная линия"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-white border border-gray-200 px-4 py-3 text-sm text-gray-700 font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
  
          </div>
  
  
          {/* ============================================================
              WHY THE WHOLE SYSTEM MATTERS
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  
            <div>
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Системный подход
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Производительность генератора зависит от всей инженерной системы
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Требуемый расход азота определяет только одну часть задачи.
                После этого необходимо обеспечить генератор достаточным
                количеством подготовленного сжатого воздуха.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Компрессор должен обеспечить необходимый поток воздуха,
                осушитель — требуемое качество подготовки, а система фильтрации
                должна защитить оборудование от загрязнений.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                После генератора возникает вторая часть задачи — обеспечить
                стабильную подачу газа к упаковочному оборудованию независимо от
                кратковременных изменений его потребления.
              </p>
            </div>
  
  
            <div className="space-y-5">
  
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-red-600 font-bold mb-2">
                  Сжатый воздух
                </div>
  
                <p className="text-sm text-gray-600 leading-relaxed">
                  Определяет, каким ресурсом будет обеспечен процесс генерации
                  азота.
                </p>
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-red-600 font-bold mb-2">
                  Подготовка воздуха
                </div>
  
                <p className="text-sm text-gray-600 leading-relaxed">
                  Определяет стабильность условий, в которых работает
                  адсорбционная система.
                </p>
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-red-600 font-bold mb-2">
                  Генератор
                </div>
  
                <p className="text-sm text-gray-600 leading-relaxed">
                  Производит необходимое количество азота при заданных
                  параметрах чистоты.
                </p>
              </div>
  
              <div className="rounded-xl border border-gray-200 p-6">
                <div className="text-red-600 font-bold mb-2">
                  Буфер и распределение
                </div>
  
                <p className="text-sm text-gray-600 leading-relaxed">
                  Обеспечивают соответствие между постоянным производством газа и
                  переменным потреблением упаковочной линии.
                </p>
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              COMPONENTS
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="max-w-4xl mb-10">
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Основные узлы
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Оборудование и его роль в системе
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Каждый элемент системы выполняет собственную функцию, но
                параметры одного узла влияют на требования к следующему.
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 gap-6">
  
              {systemComponents.map((component, index) => (
                <div
                  key={component.title}
                  className="rounded-xl border border-gray-200 p-7"
                >
                  <div className="text-red-600 font-bold text-2xl mb-5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
  
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {component.title}
                  </h4>
  
                  <div className="mb-5">
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-2">
                      Функция
                    </div>
  
                    <p className="text-gray-600 leading-relaxed">
                      {component.role}
                    </p>
                  </div>
  
                  <div className="border-t border-gray-100 pt-5">
                    <div className="text-xs uppercase tracking-wider text-red-600 mb-2">
                      Зависит от
                    </div>
  
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {component.depends}
                    </p>
                  </div>
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              AIR PREPARATION
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
  
            <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 min-h-[400px] flex flex-col items-center justify-center text-center p-10">
  
              <div className="text-sm font-semibold tracking-widest text-red-600 mb-4">
                IMAGE-06
              </div>
  
              <h3 className="text-xl font-bold text-gray-700 mb-3">
                Подготовка сжатого воздуха
              </h3>
  
              <p className="text-sm text-gray-500 max-w-md">
                Место для визуальной схемы: компрессор → ресивер → осушитель →
                фильтры → генератор азота.
              </p>
  
            </div>
  
  
            <div>
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Исходный ресурс
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Качество азота начинается с подготовки воздуха
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Генератор азота использует сжатый атмосферный воздух как исходный
                поток. Поэтому условия работы генератора определяются не только
                его собственной конструкцией, но и качеством воздуха,
                поступающего на вход.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                В сжатом воздухе могут присутствовать влага, аэрозоли масла и
                твёрдые частицы. Подготовка воздуха необходима для удаления этих
                загрязнений и формирования стабильного входного потока.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                При проектировании станции компрессор, осушитель, фильтры и
                генератор должны рассматриваться как единая технологическая
                система.
              </p>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              BUFFER SYSTEM
          ============================================================ */}
  
          <div className="rounded-2xl bg-gray-800 p-8 md:p-12 mb-16">
  
            <div className="grid lg:grid-cols-2 gap-12 items-center">
  
              <div>
  
                <p className="uppercase tracking-widest text-red-400 text-sm font-semibold mb-4">
                  Буферизация
                </p>
  
                <h3 className="text-3xl font-bold text-white mb-6">
                  Зачем системе ресивер азота
                </h3>
  
                <p className="text-gray-300 text-lg leading-relaxed mb-5">
                  Генератор азота обычно работает с определённой расчётной
                  производительностью, в то время как упаковочная линия может
                  потреблять газ неравномерно.
                </p>
  
                <p className="text-gray-300 text-lg leading-relaxed mb-5">
                  Ресивер создаёт запас произведённого азота и позволяет
                  сглаживать различие между постоянной генерацией и переменным
                  потреблением.
                </p>
  
                <p className="text-gray-300 text-lg leading-relaxed">
                  Это особенно важно при кратковременных пиках расхода, когда
                  увеличение производительности генератора только ради короткого
                  периода максимальной нагрузки может быть нерациональным.
                </p>
  
              </div>
  
  
              <div className="space-y-4">
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 text-sm font-bold mb-2">
                    ПОСТОЯННАЯ ЧАСТЬ
                  </div>
  
                  <div className="text-white font-bold text-lg">
                    Генератор производит азот
                  </div>
                </div>
  
                <div className="text-center text-red-400 text-2xl">
                  ↓
                </div>
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 text-sm font-bold mb-2">
                    БУФЕР
                  </div>
  
                  <div className="text-white font-bold text-lg">
                    Ресивер накапливает запас газа
                  </div>
                </div>
  
                <div className="text-center text-red-400 text-2xl">
                  ↓
                </div>
  
                <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                  <div className="text-red-400 text-sm font-bold mb-2">
                    ПЕРЕМЕННАЯ ЧАСТЬ
                  </div>
  
                  <div className="text-white font-bold text-lg">
                    Упаковочная линия потребляет азот
                  </div>
                </div>
  
              </div>
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              DESIGN QUESTIONS
          ============================================================ */}
  
          <div className="mb-16">
  
            <div className="mb-10">
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Исходные данные
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                Какие вопросы необходимо решить при проектировании системы
              </h3>
  
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
              {designQuestions.map((question) => (
                <div
                  key={question.number}
                  className="rounded-xl border border-gray-200 p-7"
                >
                  <div className="text-red-600 font-bold text-2xl mb-5">
                    {question.number}
                  </div>
  
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    {question.title}
                  </h4>
  
                  <p className="text-gray-600 leading-relaxed">
                    {question.text}
                  </p>
                </div>
              ))}
  
            </div>
  
          </div>
  
  
          {/* ============================================================
              SYSTEM SCALING
          ============================================================ */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
  
            <div>
  
              <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
                Масштабирование
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Система должна учитывать развитие упаковочного производства
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Упаковочная линия редко остаётся неизменной на протяжении всего
                срока эксплуатации газогенераторной станции.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Производительность может увеличиваться, предприятие может
                добавлять новые упаковочные машины, а одна станция азотного
                снабжения может постепенно превратиться в централизованный
                источник газа для нескольких участков производства.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Поэтому уже на этапе первоначального расчёта важно понимать,
                какие элементы системы могут быть расширены или дополнены без
                полной замены существующего оборудования.
              </p>
  
            </div>
  
  
            <div className="rounded-2xl border border-gray-200 p-8">
  
              <div className="space-y-6">
  
                <div className="border-l-2 border-red-500 pl-5">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Увеличение производительности линии
                  </h4>
  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Может увеличить постоянное потребление азота.
                  </p>
                </div>
  
                <div className="border-l-2 border-red-500 pl-5">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Новая упаковочная машина
                  </h4>
  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Добавляет нового потребителя и изменяет суммарную нагрузку.
                  </p>
                </div>
  
                <div className="border-l-2 border-red-500 pl-5">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Несколько потребителей
                  </h4>
  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Требуют анализа одновременной работы и максимального
                    суммарного расхода.
                  </p>
                </div>
  
                <div className="border-l-2 border-red-500 pl-5">
                  <h4 className="font-bold text-gray-800 mb-2">
                    Модульное расширение
                  </h4>
  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Позволяет увеличивать производительность системы по мере
                    роста потребления.
                  </p>
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
                Типовые ошибки
              </p>
  
              <h3 className="text-3xl font-bold text-gray-800">
                Ошибки при проектировании системы газоснабжения
              </h3>
  
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
              {commonSystemMistakes.map((mistake, index) => (
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
              Итог инженерного подбора
            </p>
  
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Генератор азота — центральный, но не единственный элемент системы
            </h3>
  
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Для стабильного газоснабжения упаковочной линии необходимо
              одновременно определить параметры производства азота, подготовки
              сжатого воздуха, накопления газа и его распределения между
              потребителями.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              После определения расхода азота и требований к его параметрам
              система может быть сформирована как единый комплекс оборудования,
              где производительность каждого узла соответствует задаче всей
              упаковочной линии.
            </p>
  
          </div>
  
        </div>
      </section>
    );
  }