
import React from "react";

const generatorModels = [
  { model: "O-3", p90: "3", p93: "—" },
  { model: "O-5", p90: "5", p93: "4,45" },
  { model: "O-7", p90: "7", p93: "—" },
  { model: "O-10", p90: "10", p93: "8,9" },
  { model: "O-12", p90: "12", p93: "—" },
  { model: "O-15", p90: "15", p93: "13,35" },
  { model: "O-20", p90: "20", p93: "17,8" },
  { model: "O-25", p90: "25", p93: "—" },
  { model: "O-30", p90: "30", p93: "26,7" },
  { model: "O-40", p90: "40", p93: "35,6" },
  { model: "O-50", p90: "50", p93: "44,5" },
  { model: "O-60", p90: "60", p93: "53,4" },
  { model: "O-75", p90: "75", p93: "—" },
];

export const oxygenGenerationImagePrompt = `
Premium realistic industrial engineering photograph for a B2B website.
A modular industrial PSA oxygen generation station in a clean technical
room: two vertical adsorption columns with blue-gray metal bodies,
pneumatic valves and stainless steel piping, air preparation equipment,
oxygen buffer receiver, compact control cabinet with a small display.
Show a technically plausible arrangement of equipment connected by pipes.
Neutral light industrial interior, soft daylight, restrained blue-gray
palette with subtle red accents, high-end corporate product photography.
Three-quarter view, no people, no logos, no readable text, no labels.
Wide horizontal 16:9 composition, realistic scale and engineering details.
`;

export default function OxygenGeneration() {
  return (
    <section
      className="aquaculture-section oxygen-generation"
      id="oxygen-generation"
    >
      <div className="oxygen-generation__container">
        <div className="oxygen-generation__header">
          <span className="oxygen-generation__eyebrow">
            Технология производства кислорода
          </span>

          <h2>
            Кислород из атмосферного воздуха — непосредственно на
            рыбоводческом предприятии
          </h2>

          <p className="oxygen-generation__lead">
            Кислородный генератор позволяет производить газ на месте
            потребления, без регулярной доставки баллонов или жидкого
            кислорода. Производительность установки подбирается под
            расчётную нагрузку хозяйства и характеристики системы
            насыщения воды.
          </p>
        </div>

        <div className="oxygen-generation__intro">
          <div className="oxygen-generation__text">
            <h3>Как работает кислородный генератор</h3>

            <p>
              Для получения кислорода используется технология короткоцикловой
              безнагревной адсорбции — КЦА (PSA). В качестве исходного сырья
              применяется атмосферный воздух, предварительно сжатый и
              подготовленный компрессорным оборудованием.
            </p>

            <p>
              Воздух проходит через адсорбционные колонны с молекулярным
              ситом. Материал преимущественно удерживает азот, а обогащённый
              кислородом газ поступает в систему накопления и дальнейшей
              подачи потребителю.
            </p>

            <p>
              Работа колонн чередуется: пока одна находится в режиме
              разделения воздуха, другая проходит регенерацию. Такой цикл
              обеспечивает непрерывное производство кислорода.
            </p>
          </div>

          <div className="oxygen-generation__visual">
            {/* PLACEHOLDER IMAGE:
                /assets/aquaculture/oxygen-generation-station.png */}
            <div className="oxygen-generation__image-placeholder">
              <span>Изображение кислородной станции КЦА</span>
              <small>
                Здесь разместить визуал генератора, ресивера и
                компрессорно-фильтровального оборудования
              </small>
            </div>
          </div>
        </div>

        <div className="oxygen-generation__stages">
          <h3>Из чего состоит процесс производства</h3>

          <div className="oxygen-generation__stage-grid">
            <article className="oxygen-generation__stage">
              <span className="oxygen-generation__stage-number">01</span>
              <h4>Подготовка воздуха</h4>
              <p>
                Компрессор сжимает атмосферный воздух. Осушители и фильтры
                удаляют влагу, масло и механические загрязнения, защищая
                адсорбент и обеспечивая стабильную работу установки.
              </p>
            </article>

            <article className="oxygen-generation__stage">
              <span className="oxygen-generation__stage-number">02</span>
              <h4>Разделение газов</h4>
              <p>
                В адсорбционных колоннах молекулярное сито преимущественно
                удерживает азот. На выходе получается кислородная смесь
                заданной концентрации.
              </p>
            </article>

            <article className="oxygen-generation__stage">
              <span className="oxygen-generation__stage-number">03</span>
              <h4>Накопление и контроль</h4>
              <p>
                Кислород поступает в буферный ресивер. Контрольно-измерительная
                аппаратура позволяет контролировать параметры газа и
                работу станции.
              </p>
            </article>

            <article className="oxygen-generation__stage">
              <span className="oxygen-generation__stage-number">04</span>
              <h4>Подача в воду</h4>
              <p>
                Газ направляется к оксигенатору, инжектору или другому
                устройству насыщения. Именно на этом этапе кислород
                передаётся воде и становится доступен рыбе.
              </p>
            </article>
          </div>
        </div>

        <div className="oxygen-generation__purity">
          <div>
            <h3>Концентрация кислорода: 90% или 93%</h3>
            <p>
              Кислородные генераторы КЦА выпускают газ с концентрацией,
              отличающейся от чистого медицинского или лабораторного
              кислорода. Для промышленного рыбоводства выбор концентрации
              определяется требованиями системы подачи, расчётным расходом
              и экономикой проекта.
            </p>
            <p>
              При увеличении концентрации кислорода производительность
              конкретной модели может снижаться. Поэтому при подборе
              оборудования важно учитывать не только обозначение модели,
              но и её фактическую производительность при выбранной
              концентрации.
            </p>
          </div>

          <div className="oxygen-generation__purity-facts">
            <div className="oxygen-generation__purity-fact">
              <strong>90%</strong>
              <span>Базовая концентрация в линейке генераторов</span>
            </div>
            <div className="oxygen-generation__purity-fact">
              <strong>93%</strong>
              <span>
                Альтернативный режим для ряда моделей с соответствующим
                снижением производительности
              </span>
            </div>
          </div>
        </div>

        <div className="oxygen-generation__catalog">
          <div className="oxygen-generation__catalog-heading">
            <div>
              <span className="oxygen-generation__eyebrow">
                Линейка оборудования
              </span>
              <h3>Модельный ряд кислородных генераторов</h3>
            </div>

            <p>
              В линейке представлены установки производительностью от 3
              до 75 м³/ч. Значения ниже приведены по каталожным данным
              для соответствующей концентрации кислорода.
            </p>
          </div>

          <div className="oxygen-generation__table-wrap">
            <table className="oxygen-generation__table">
              <thead>
                <tr>
                  <th>Модель</th>
                  <th>90% O₂, м³/ч</th>
                  <th>93% O₂, м³/ч</th>
                </tr>
              </thead>

              <tbody>
                {generatorModels.map((item) => (
                  <tr key={item.model}>
                    <td>
                      <strong>{item.model}</strong>
                    </td>
                    <td>{item.p90}</td>
                    <td>{item.p93}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="oxygen-generation__table-note">
            Прочерк означает, что значение производительности для данной
            концентрации не указано в каталожных данных. Фактические
            параметры установки и комплектацию необходимо уточнять
            при конфигурировании проекта.
          </p>
        </div>

        <div className="oxygen-generation__system">
          <div className="oxygen-generation__system-copy">
            <h3>Генератор — только часть системы кислородоснабжения</h3>

            <p>
              Для работы рыбоводческого хозяйства недостаточно выбрать
              генератор с подходящей производительностью. Необходимо
              спроектировать весь тракт: от подготовки воздуха до
              эффективной передачи кислорода воде.
            </p>

            <p>
              В состав станции могут входить компрессор, осушитель,
              блок фильтрации, кислородный генератор, ресивер,
              трубопроводы, регулирующая арматура и система контроля.
              Состав определяется параметрами конкретного объекта.
            </p>

            <p>
              Отдельно проектируется оборудование насыщения воды:
              оксигенатор, инжектор или другое устройство. Его
              производительность и эффективность массообмена влияют
              на фактическое количество кислорода, которое получает
              рыбоводная система.
            </p>
          </div>

          <div className="oxygen-generation__system-visual">
            {/* PLACEHOLDER IMAGE:
                /assets/aquaculture/oxygen-supply-scheme.png */}
            <div className="oxygen-generation__image-placeholder">
              <span>Схема кислородоснабжения</span>
              <small>
                Компрессор → подготовка воздуха → генератор →
                ресивер → система подачи → оксигенатор → вода
              </small>
            </div>
          </div>
        </div>

        <div className="oxygen-generation__warning">
          <div className="oxygen-generation__warning-icon">!</div>
          <div>
            <h3>Почему нельзя выбирать генератор только по объёму бассейна</h3>
            <p>
              Потребность в кислороде зависит от биомассы рыбы, интенсивности
              кормления, работы биофильтра, температуры воды, водообмена
              и эффективности устройства насыщения. Два хозяйства с
              одинаковым объёмом бассейнов могут иметь совершенно разную
              кислородную нагрузку.
            </p>
            <p>
              Расчёт генератора следует выполнять по максимальной
              расчётной потребности в кислороде и условиям его передачи
              воде, предусматривая резервный источник кислорода на случай
              остановки основного оборудования.
            </p>
          </div>
        </div>

        <div className="oxygen-generation__cta">
          <div>
            <h3>Подберите генератор под параметры рыбоводческого хозяйства</h3>
            <p>
              Рассчитайте потребность в кислороде и получите предварительную
              конфигурацию станции с учётом производительности и
              концентрации газа.
            </p>
          </div>

          <a href="#aquaculture-calculator" className="oxygen-generation__button">
            Рассчитать потребность в кислороде
          </a>
        </div>
      </div>

      <style jsx>{`
        .oxygen-generation {
          padding: 88px 0;
        }

        .oxygen-generation__container {
          width: min(1200px, calc(100% - 40px));
          margin: 0 auto;
        }

        .oxygen-generation__header {
          max-width: 850px;
          margin-bottom: 48px;
        }

        .oxygen-generation__eyebrow {
          display: block;
          margin-bottom: 14px;
          color: #527b8b;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .oxygen-generation h2 {
          margin: 0 0 22px;
          color: #172b36;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.12;
          letter-spacing: -0.035em;
        }

        .oxygen-generation h3 {
          margin: 0 0 18px;
          color: #172b36;
          font-size: clamp(22px, 2.5vw, 29px);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .oxygen-generation h4 {
          margin: 0 0 10px;
          color: #172b36;
          font-size: 18px;
          line-height: 1.3;
        }

        .oxygen-generation p {
          margin: 0 0 14px;
          color: #52636c;
          font-size: 16px;
          line-height: 1.7;
        }

        .oxygen-generation__lead {
          max-width: 780px;
          font-size: 18px !important;
        }

        .oxygen-generation__intro,
        .oxygen-generation__system {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          margin-bottom: 76px;
        }

        .oxygen-generation__image-placeholder {
          display: flex;
          min-height: 340px;
          padding: 30px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px dashed #aebdc4;
          border-radius: 16px;
          background:
            linear-gradient(135deg, rgba(228, 237, 240, 0.7), rgba(244, 247, 248, 0.9));
          color: #52717e;
          text-align: center;
        }

        .oxygen-generation__image-placeholder span {
          font-size: 17px;
          font-weight: 700;
        }

        .oxygen-generation__image-placeholder small {
          max-width: 360px;
          color: #71838b;
          font-size: 13px;
          line-height: 1.5;
        }

        .oxygen-generation__stages {
          margin-bottom: 76px;
        }

        .oxygen-generation__stage-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .oxygen-generation__stage {
          min-height: 235px;
          padding: 24px;
          border: 1px solid #e1e8eb;
          border-radius: 14px;
          background: #fff;
        }

        .oxygen-generation__stage-number {
          display: inline-flex;
          margin-bottom: 24px;
          color: #7895a1;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .oxygen-generation__stage p {
          margin: 0;
          font-size: 14px;
          line-height: 1.65;
        }

        .oxygen-generation__purity {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 44px;
          align-items: center;
          margin-bottom: 76px;
          padding: 36px;
          border-radius: 18px;
          background: #f2f6f7;
        }

        .oxygen-generation__purity-facts {
          display: grid;
          gap: 14px;
        }

        .oxygen-generation__purity-fact {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 20px;
          border-radius: 12px;
          background: #fff;
        }

        .oxygen-generation__purity-fact strong {
          min-width: 82px;
          color: #28566a;
          font-size: 34px;
          letter-spacing: -0.04em;
        }

        .oxygen-generation__purity-fact span {
          color: #52636c;
          font-size: 14px;
          line-height: 1.5;
        }

        .oxygen-generation__catalog {
          margin-bottom: 76px;
        }

        .oxygen-generation__catalog-heading {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 36px;
          align-items: end;
          margin-bottom: 24px;
        }

        .oxygen-generation__catalog-heading h3 {
          margin-bottom: 0;
        }

        .oxygen-generation__catalog-heading p {
          margin-bottom: 3px;
          font-size: 14px;
        }

        .oxygen-generation__table-wrap {
          overflow-x: auto;
          border: 1px solid #e1e8eb;
          border-radius: 12px;
        }

        .oxygen-generation__table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .oxygen-generation__table th,
        .oxygen-generation__table td {
          padding: 14px 20px;
          border-bottom: 1px solid #e8edef;
          color: #52636c;
          font-size: 15px;
        }

        .oxygen-generation__table th {
          background: #f2f6f7;
          color: #314c59;
          font-size: 13px;
          font-weight: 700;
        }

        .oxygen-generation__table td strong {
          color: #203944;
        }

        .oxygen-generation__table tbody tr:last-child td {
          border-bottom: 0;
        }

        .oxygen-generation__table tbody tr:hover {
          background: #f8fafb;
        }

        .oxygen-generation__table-note {
          margin-top: 14px !important;
          color: #7b898f !important;
          font-size: 13px !important;
        }

        .oxygen-generation__system {
          margin-bottom: 48px;
        }

        .oxygen-generation__warning {
          display: flex;
          gap: 20px;
          margin-bottom: 48px;
          padding: 28px;
          border: 1px solid #eadfc8;
          border-radius: 14px;
          background: #fbf8f1;
        }

        .oxygen-generation__warning-icon {
          display: flex;
          width: 34px;
          height: 34px;
          min-width: 34px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e9d7ad;
          color: #654c20;
          font-size: 20px;
          font-weight: 700;
        }

        .oxygen-generation__warning h3 {
          font-size: 21px;
        }

        .oxygen-generation__warning p:last-child {
          margin-bottom: 0;
        }

        .oxygen-generation__cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 34px;
          border-radius: 16px;
          background: #183b4b;
        }

        .oxygen-generation__cta h3 {
          margin-bottom: 10px;
          color: #fff;
          font-size: 24px;
        }

        .oxygen-generation__cta p {
          max-width: 650px;
          margin-bottom: 0;
          color: #d0dce1;
          font-size: 14px;
        }

        .oxygen-generation__button {
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

        .oxygen-generation__button:hover {
          background: #c92e2e;
        }

        @media (max-width: 900px) {
          .oxygen-generation__stage-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .oxygen-generation__intro,
          .oxygen-generation__system,
          .oxygen-generation__purity,
          .oxygen-generation__catalog-heading {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .oxygen-generation__catalog-heading {
            align-items: start;
          }
        }

        @media (max-width: 600px) {
          .oxygen-generation {
            padding: 56px 0;
          }

          .oxygen-generation__container {
            width: min(100% - 32px, 1200px);
          }

          .oxygen-generation__stage-grid {
            grid-template-columns: 1fr;
          }

          .oxygen-generation__stage {
            min-height: auto;
          }

          .oxygen-generation__purity {
            padding: 24px 18px;
          }

          .oxygen-generation__purity-fact {
            gap: 12px;
            padding: 16px;
          }

          .oxygen-generation__purity-fact strong {
            min-width: 68px;
            font-size: 29px;
          }

          .oxygen-generation__warning {
            padding: 22px 18px;
          }

          .oxygen-generation__cta {
            align-items: stretch;
            flex-direction: column;
            padding: 26px 20px;
          }

          .oxygen-generation__button {
            width: 100%;
          }

          .oxygen-generation__table th,
          .oxygen-generation__table td {
            padding: 12px 14px;
            white-space: nowrap;
          }
        }
      `}</style>
    </section>
  );
}
