
import React from "react";

export const oxygenDeliveryImagePrompts = {
  sidestream: `
Premium realistic industrial engineering photograph of a sidestream
oxygenation system for a recirculating aquaculture facility.
A stainless steel pressurized oxygenation vessel installed beside
large blue water circulation pipes, with visible water inlet and outlet,
oxygen gas connection, valves, pressure gauges and flow meters.
Technically plausible industrial installation, clean fish farm utility room,
soft neutral lighting, blue-gray palette with subtle red accents.
Three-quarter view, no people, no logos, no readable text.
Wide horizontal 16:9 composition.
`,

  venturi: `
Premium realistic engineering photograph of an industrial Venturi oxygen
injection assembly in an aquaculture water treatment pipeline.
Show a stainless steel Venturi injector installed inline in a large
blue water pipe, with a smaller oxygen supply tube, control valve,
pressure gauge and realistic pipe fittings.
Make the gas injection connection visually clear.
Clean industrial RAS technical room, realistic proportions and materials,
soft daylight, restrained blue-gray palette, subtle red accents.
No people, no logos, no readable text. Wide horizontal 16:9.
`,

  diffusers: `
Realistic premium photograph inside an industrial aquaculture tank.
Show fine-bubble diffusers installed near the bottom, producing
a visible but technically plausible stream of small bubbles.
Clear water, subtle silhouettes of farmed fish, circular tank walls,
industrial water pipes along the edge.
Clean professional fish farming facility, natural neutral lighting,
realistic underwater appearance, no decorative aquarium aesthetic.
No people, no logos, no text. Wide horizontal 16:9.
`,

  uTube: `
Technical realistic photograph of an industrial U-tube oxygenation
system in a fish farm water treatment facility.
Show a tall vertical water contact pipe with a deep downward and upward
water flow path, oxygen gas injection connection, industrial valves,
pressure gauges and large water pipes.
Clearly communicate an extended water-gas contact path.
Clean modern RAS utility area, stainless steel and blue-gray equipment,
subtle red details, realistic engineering proportions.
No people, no logos, no text. Wide horizontal 16:9.
`,

  scheme: `
Clean premium B2B engineering infographic, horizontal 16:9.
Show four distinct methods of oxygen transfer into aquaculture water:
1) pressurized sidestream oxygenation vessel,
2) Venturi injector in a water pipe,
3) fine-bubble diffusers at the bottom of a fish tank,
4) U-tube contactor.
Use simplified realistic technical illustrations, consistent scale,
blue water pipes, oxygen gas lines in a restrained red accent,
light neutral background, clean technical diagram style.
No decorative icons, no unnecessary labels, no logos.
Leave sufficient clear space around each diagram for labels to be
added in the website layout.
`,
};

const deliveryMethods = [
  {
    id: "sidestream",
    number: "01",
    title: "Напорный оксигенатор",
    subtitle: "Растворение кислорода в отдельном потоке воды",
    description:
      "Часть циркуляционного потока направляется через специальный контактный аппарат. Внутри создаются условия для интенсивного контакта воды с кислородом под давлением. После насыщения вода возвращается в систему.",
    advantages: [
      "Высокая эффективность передачи кислорода при корректном подборе аппарата",
      "Возможность интеграции в контур циркуляции УЗВ",
      "Управление отдельной линией насыщения",
    ],
    limitations:
      "Необходимо учитывать рабочее давление, расход воды, гидравлическое сопротивление и характеристики самого оксигенатора.",
    image: "/assets/aquaculture/oxygen-delivery-sidestream.png",
    imagePrompt: oxygenDeliveryImagePrompts.sidestream,
  },
  {
    id: "venturi",
    number: "02",
    title: "Инжектор Вентури",
    subtitle: "Введение кислорода непосредственно в поток воды",
    description:
      "При прохождении воды через сужение инжектора изменяются скорость потока и давление. За счёт этого создаются условия для подсоса газа через отдельный патрубок и его смешивания с водой.",
    advantages: [
      "Компактная конструкция",
      "Возможность установки в трубопровод",
      "Отсутствие необходимости в отдельной ёмкости для контакта газа и воды",
    ],
    limitations:
      "Результат зависит от перепада давления, расхода воды, конструкции инжектора и времени контакта. Необходимость насосной мощности и фактическую эффективность следует проверять расчётом или испытаниями.",
    image: "/assets/aquaculture/oxygen-delivery-venturi.png",
    imagePrompt: oxygenDeliveryImagePrompts.venturi,
  },
  {
    id: "diffusers",
    number: "03",
    title: "Распределённые диффузоры",
    subtitle: "Подача кислорода через систему мелкопузырчатых элементов",
    description:
      "Кислород подаётся через диффузоры, расположенные в воде. Образующиеся пузырьки контактируют с водой по мере подъёма. На результат влияют размер пузырьков, глубина установки, распределение газа и время контакта.",
    advantages: [
      "Простая схема подачи газа",
      "Возможность распределить точки подачи по ёмкости",
      "Подходит для отдельных задач локального насыщения",
    ],
    limitations:
      "Часть кислорода может выходить из воды нерастворённой. Эффективность зависит от глубины, размера пузырьков, гидродинамики и конструкции диффузоров.",
    image: "/assets/aquaculture/oxygen-delivery-diffusers.png",
    imagePrompt: oxygenDeliveryImagePrompts.diffusers,
  },
  {
    id: "utube",
    number: "04",
    title: "U-образный контактный аппарат",
    subtitle: "Увеличение времени контакта газа с водой",
    description:
      "Вода проходит по вертикальному участку трубопровода с изменением направления движения. Кислород вводится в поток, а увеличенная длина пути и давление создают условия для его растворения.",
    advantages: [
      "Продолжительный контакт воды и газа",
      "Возможность работы с большими потоками воды",
      "Интеграция в технологическую линию водообмена",
    ],
    limitations:
      "Требуются место для монтажа, расчёт гидравлического режима и согласование с насосной системой. Эффективность зависит от геометрии и рабочих параметров аппарата.",
    image: "/assets/aquaculture/oxygen-delivery-utube.png",
    imagePrompt: oxygenDeliveryImagePrompts.uTube,
  },
];

function DeliveryMethodCard({ method }) {
  return (
    <article className="oxygen-delivery__method" id={`delivery-${method.id}`}>
      <div className="oxygen-delivery__method-image">
        {/* PLACEHOLDER IMAGE: replace with method.image */}
        <div className="oxygen-delivery__image-placeholder">
          <span>{method.title}</span>
          <small>Иллюстрация технологии</small>
        </div>
      </div>

      <div className="oxygen-delivery__method-content">
        <span className="oxygen-delivery__method-number">
          {method.number}
        </span>

        <h3>{method.title}</h3>
        <p className="oxygen-delivery__subtitle">{method.subtitle}</p>
        <p>{method.description}</p>

        <h4>Особенности применения</h4>
        <ul>
          {method.advantages.map((advantage) => (
            <li key={advantage}>{advantage}</li>
          ))}
        </ul>

        <div className="oxygen-delivery__limitation">
          <strong>Что важно учесть</strong>
          <p>{method.limitations}</p>
        </div>
      </div>
    </article>
  );
}

export default function OxygenDelivery() {
  return (
    <section
      className="aquaculture-section oxygen-delivery"
      id="oxygen-delivery"
    >
      <div className="oxygen-delivery__container">
        <div className="oxygen-delivery__header">
          <span className="oxygen-delivery__eyebrow">
            Передача кислорода воде
          </span>

          <h2>
            Как доставить кислород из генератора в рыбоводную систему
          </h2>

          <p className="oxygen-delivery__lead">
            Кислород, произведённый генератором, ещё необходимо эффективно
            растворить в воде. Для этого применяются оксигенаторы,
            инжекторы, диффузоры и контактные аппараты. Выбор технологии
            зависит от расхода воды, требуемого прироста растворённого
            кислорода и схемы водооборота.
          </p>
        </div>

        <div className="oxygen-delivery__principle">
          <div className="oxygen-delivery__principle-copy">
            <h3>Производство газа и насыщение воды — разные процессы</h3>

            <p>
              Генератор обеспечивает поток кислородсодержащего газа с
              заданной концентрацией. Система подачи должна передать
              кислород воде с учётом гидравлических условий и требуемого
              уровня растворённого кислорода.
            </p>

            <p>
              Поэтому при проектировании важно отдельно определить
              производительность генератора и способность оборудования
              насыщения передать необходимое количество кислорода
              циркуляционному потоку.
            </p>
          </div>

          <div className="oxygen-delivery__principle-diagram">
            <div className="oxygen-delivery__flow">
              <div className="oxygen-delivery__flow-node">
                <strong>Генератор</strong>
                <span>м³/ч газа</span>
              </div>

              <span className="oxygen-delivery__flow-arrow">→</span>

              <div className="oxygen-delivery__flow-node">
                <strong>Подача</strong>
                <span>давление и расход</span>
              </div>

              <span className="oxygen-delivery__flow-arrow">→</span>

              <div className="oxygen-delivery__flow-node oxygen-delivery__flow-node--accent">
                <strong>Оксигенатор</strong>
                <span>массообмен</span>
              </div>

              <span className="oxygen-delivery__flow-arrow">→</span>

              <div className="oxygen-delivery__flow-node">
                <strong>Вода</strong>
                <span>растворённый O₂</span>
              </div>
            </div>
          </div>
        </div>

        <div className="oxygen-delivery__methods-heading">
          <h3>Основные способы насыщения воды кислородом</h3>
          <p>
            Каждый способ решает свою технологическую задачу. Универсального
            решения для всех рыбоводческих хозяйств нет.
          </p>
        </div>

        <div className="oxygen-delivery__methods">
          {deliveryMethods.map((method) => (
            <DeliveryMethodCard key={method.id} method={method} />
          ))}
        </div>

        <div className="oxygen-delivery__selection">
          <div className="oxygen-delivery__selection-copy">
            <span className="oxygen-delivery__eyebrow">
              Выбор технологии
            </span>

            <h3>Что определяет эффективность кислородоснабжения</h3>

            <p>
              Одинаковый расход кислорода на входе не гарантирует одинакового
              результата в разных системах. Эффективность передачи газа
              зависит от совокупности параметров оборудования и водного
              контура.
            </p>
          </div>

          <div className="oxygen-delivery__factor-grid">
            <div className="oxygen-delivery__factor">
              <strong>Давление</strong>
              <span>
                Рабочее давление газа и воды, а также условия контакта
                влияют на растворение кислорода.
              </span>
            </div>

            <div className="oxygen-delivery__factor">
              <strong>Расход воды</strong>
              <span>
                Необходимо учитывать фактическую производительность
                циркуляционного контура и распределение потоков.
              </span>
            </div>

            <div className="oxygen-delivery__factor">
              <strong>Время контакта</strong>
              <span>
                Чем эффективнее организован контакт газа с водой, тем
                больше возможностей для передачи кислорода.
              </span>
            </div>

            <div className="oxygen-delivery__factor">
              <strong>Температура и состав воды</strong>
              <span>
                Температура, солёность и исходная концентрация растворённого
                кислорода влияют на условия насыщения.
              </span>
            </div>

            <div className="oxygen-delivery__factor">
              <strong>Гидравлика</strong>
              <span>
                Геометрия трубопроводов, перепады давления и режим насосов
                влияют на работу системы.
              </span>
            </div>

            <div className="oxygen-delivery__factor">
              <strong>Контроль и регулирование</strong>
              <span>
                Датчики растворённого кислорода и регулирующая арматура
                помогают поддерживать заданный режим подачи.
              </span>
            </div>
          </div>
        </div>

        <div className="oxygen-delivery__monitoring">
          <div className="oxygen-delivery__monitoring-copy">
            <h3>Контролировать нужно результат в воде</h3>

            <p>
              Давление в кислородной магистрали и расход газа показывают,
              как работает оборудование, но не подтверждают, что рыба
              получает необходимое количество растворённого кислорода.
            </p>

            <p>
              Для контроля процесса используют датчики растворённого
              кислорода. Точки измерения определяют по технологической
              схеме: перед насыщением, после оксигенатора, в рыбоводных
              ёмкостях и на выходе из системы.
            </p>
          </div>

          <div className="oxygen-delivery__monitoring-visual">
            {/* PLACEHOLDER IMAGE:
                /assets/aquaculture/dissolved-oxygen-monitoring.png */}
            <div className="oxygen-delivery__image-placeholder">
              <span>Контроль растворённого кислорода</span>
              <small>
                Датчик DO в контуре циркуляции воды и измерение
                концентрации кислорода
              </small>
            </div>
          </div>
        </div>

        <div className="oxygen-delivery__scheme">
          <div className="oxygen-delivery__scheme-heading">
            <h3>Технология подачи кислорода в составе УЗВ</h3>
            <p>
              Пример интеграции генератора и системы насыщения в контур
              рециркуляции воды.
            </p>
          </div>

          <div className="oxygen-delivery__scheme-placeholder">
            {/* PLACEHOLDER IMAGE:
                /assets/aquaculture/oxygen-delivery-scheme.png */}
            <span>Схема интеграции кислородной станции в УЗВ</span>
            <small>
              Генератор → ресивер → кислородная магистраль →
              оксигенатор → подача насыщенной воды в рыбоводные ёмкости
            </small>
          </div>
        </div>

        <div className="oxygen-delivery__warning">
          <strong>Важно для проектирования</strong>
          <p>
            Нельзя считать, что весь кислород, поданный в воду, обязательно
            растворится и останется в системе. Необходимо учитывать
            эффективность массообмена, возможный выход нерастворённого
            газа, гидравлические потери и требования к безопасному
            содержанию растворённых газов.
          </p>
        </div>

        <div className="oxygen-delivery__cta">
          <div>
            <h3>Рассчитайте систему кислородоснабжения</h3>
            <p>
              Учитывайте не только потребность рыбы в кислороде, но и
              способ его передачи воде — это влияет на выбор генератора
              и вспомогательного оборудования.
            </p>
          </div>

          <a
            href="#aquaculture-calculator"
            className="oxygen-delivery__button"
          >
            Перейти к расчёту
          </a>
        </div>
      </div>

      <style jsx>{`
        .oxygen-delivery {
          padding: 88px 0;
        }

        .oxygen-delivery__container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .oxygen-delivery__eyebrow {
          display: block;
          margin-bottom: 14px;
          color: #527b8b;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .oxygen-delivery h2 {
          max-width: 900px;
          margin: 0 0 22px;
          color: #172b36;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.12;
          letter-spacing: -0.035em;
        }

        .oxygen-delivery h3 {
          margin: 0 0 16px;
          color: #172b36;
          font-size: clamp(22px, 2.5vw, 29px);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .oxygen-delivery h4 {
          margin: 22px 0 10px;
          color: #203944;
          font-size: 15px;
        }

        .oxygen-delivery p {
          margin: 0 0 14px;
          color: #52636c;
          font-size: 15px;
          line-height: 1.7;
        }

        .oxygen-delivery__header {
          max-width: 850px;
          margin-bottom: 48px;
        }

        .oxygen-delivery__lead {
          font-size: 18px !important;
        }

        .oxygen-delivery__principle {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 76px;
          padding: 34px;
          border-radius: 18px;
          background: #f2f6f7;
        }

        .oxygen-delivery__principle-copy p:last-child {
          margin-bottom: 0;
        }

        .oxygen-delivery__principle-diagram {
          min-width: 0;
        }

        .oxygen-delivery__flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .oxygen-delivery__flow-node {
          display: flex;
          min-width: 105px;
          min-height: 100px;
          padding: 14px 10px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid #dce6e9;
          border-radius: 12px;
          background: #fff;
          text-align: center;
        }

        .oxygen-delivery__flow-node strong {
          color: #244554;
          font-size: 14px;
        }

        .oxygen-delivery__flow-node span {
          color: #71838b;
          font-size: 11px;
          line-height: 1.4;
        }

        .oxygen-delivery__flow-node--accent {
          border-color: #b7d0d9;
          background: #e5f0f3;
        }

        .oxygen-delivery__flow-arrow {
          color: #7996a2;
          font-size: 20px;
        }

        .oxygen-delivery__methods-heading {
          max-width: 760px;
          margin-bottom: 28px;
        }

        .oxygen-delivery__methods {
          display: grid;
          gap: 24px;
          margin-bottom: 76px;
        }

        .oxygen-delivery__method {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 34px;
          align-items: center;
          padding: 26px;
          border: 1px solid #e1e8eb;
          border-radius: 16px;
          background: #fff;
        }

        .oxygen-delivery__method:nth-child(even) {
          grid-template-columns: 1.15fr 0.85fr;
        }

        .oxygen-delivery__method:nth-child(even)
          .oxygen-delivery__method-image {
          order: 2;
        }

        .oxygen-delivery__image-placeholder {
          display: flex;
          min-height: 290px;
          padding: 24px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px dashed #aebdc4;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            rgba(228, 237, 240, 0.7),
            rgba(244, 247, 248, 0.9)
          );
          color: #52717e;
          text-align: center;
        }

        .oxygen-delivery__image-placeholder span {
          font-size: 16px;
          font-weight: 700;
        }

        .oxygen-delivery__image-placeholder small {
          max-width: 330px;
          color: #71838b;
          font-size: 12px;
          line-height: 1.5;
        }

        .oxygen-delivery__method-number {
          display: block;
          margin-bottom: 12px;
          color: #7895a1;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .oxygen-delivery__method-content h3 {
          margin-bottom: 7px;
          font-size: 25px;
        }

        .oxygen-delivery__subtitle {
          margin-bottom: 16px !important;
          color: #78909a !important;
          font-size: 14px !important;
          font-weight: 600;
        }

        .oxygen-delivery__method-content ul {
          display: grid;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .oxygen-delivery__method-content li {
          position: relative;
          padding-left: 20px;
          color: #52636c;
          font-size: 14px;
          line-height: 1.55;
        }

        .oxygen-delivery__method-content li::before {
          position: absolute;
          top: 8px;
          left: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #7899a6;
          content: "";
        }

        .oxygen-delivery__limitation {
          margin-top: 20px;
          padding: 16px;
          border-radius: 10px;
          background: #f3f6f7;
        }

        .oxygen-delivery__limitation strong {
          display: block;
          margin-bottom: 7px;
          color: #304e5b;
          font-size: 13px;
        }

        .oxygen-delivery__limitation p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
        }

        .oxygen-delivery__selection {
          display: grid;
          grid-template-columns: 0.75fr 1.25fr;
          gap: 40px;
          margin-bottom: 76px;
        }

        .oxygen-delivery__selection-copy p {
          max-width: 440px;
        }

        .oxygen-delivery__factor-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .oxygen-delivery__factor {
          display: flex;
          min-height: 130px;
          padding: 20px;
          flex-direction: column;
          gap: 9px;
          border: 1px solid #e1e8eb;
          border-radius: 12px;
        }

        .oxygen-delivery__factor strong {
          color: #244554;
          font-size: 15px;
        }

        .oxygen-delivery__factor span {
          color: #64767e;
          font-size: 13px;
          line-height: 1.55;
        }

        .oxygen-delivery__monitoring {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 42px;
          align-items: center;
          margin-bottom: 76px;
        }

        .oxygen-delivery__monitoring-visual .oxygen-delivery__image-placeholder {
          min-height: 270px;
        }

        .oxygen-delivery__scheme {
          margin-bottom: 36px;
        }

        .oxygen-delivery__scheme-heading {
          max-width: 760px;
          margin-bottom: 22px;
        }

        .oxygen-delivery__scheme-placeholder {
          display: flex;
          min-height: 300px;
          padding: 30px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px dashed #aebdc4;
          border-radius: 16px;
          background: #f4f7f8;
          color: #52717e;
          text-align: center;
        }

        .oxygen-delivery__scheme-placeholder span {
          font-size: 18px;
          font-weight: 700;
        }

        .oxygen-delivery__scheme-placeholder small {
          max-width: 600px;
          color: #71838b;
          font-size: 13px;
          line-height: 1.6;
        }

        .oxygen-delivery__warning {
          margin-bottom: 48px;
          padding: 24px 28px;
          border: 1px solid #eadfc8;
          border-radius: 14px;
          background: #fbf8f1;
        }

        .oxygen-delivery__warning strong {
          display: block;
          margin-bottom: 9px;
          color: #654c20;
          font-size: 16px;
        }

        .oxygen-delivery__warning p {
          margin: 0;
          color: #6e6250;
          font-size: 14px;
        }

        .oxygen-delivery__cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 34px;
          border-radius: 16px;
          background: #183b4b;
        }

        .oxygen-delivery__cta h3 {
          margin-bottom: 10px;
          color: #fff;
          font-size: 24px;
        }

        .oxygen-delivery__cta p {
          max-width: 650px;
          margin: 0;
          color: #d0dce1;
          font-size: 14px;
        }

        .oxygen-delivery__button {
          display: inline-flex;
          min-width: max-content;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border-radius: 8px;
          background: #e33b3b;
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .oxygen-delivery__button:hover {
          background: #c92e2e;
        }

        @media (max-width: 900px) {
          .oxygen-delivery__principle,
          .oxygen-delivery__selection,
          .oxygen-delivery__monitoring {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .oxygen-delivery__method,
          .oxygen-delivery__method:nth-child(even) {
            grid-template-columns: 1fr;
          }

          .oxygen-delivery__method:nth-child(even)
            .oxygen-delivery__method-image {
            order: 0;
          }
        }

        @media (max-width: 650px) {
          .oxygen-delivery {
            padding: 56px 0;
          }

          .oxygen-delivery__container {
            width: min(100% - 32px, 1200px);
          }

          .oxygen-delivery__principle {
            padding: 24px 18px;
          }

          .oxygen-delivery__flow {
            flex-wrap: wrap;
            gap: 8px;
          }

          .oxygen-delivery__flow-node {
            min-width: 40%;
            flex: 1 1 40%;
          }

          .oxygen-delivery__flow-arrow {
            display: none;
          }

          .oxygen-delivery__method {
            padding: 18px;
          }

          .oxygen-delivery__image-placeholder {
            min-height: 220px;
          }

          .oxygen-delivery__factor-grid {
            grid-template-columns: 1fr;
          }

          .oxygen-delivery__factor {
            min-height: auto;
          }

          .oxygen-delivery__scheme-placeholder {
            min-height: 220px;
            padding: 22px 16px;
          }

          .oxygen-delivery__cta {
            align-items: stretch;
            flex-direction: column;
            padding: 26px 20px;
          }

          .oxygen-delivery__button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
