import React, { useEffect } from 'react';
import '/public/components/chart.css';

export default function Main() {

  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
          type: 'bubble',
          plotBorderWidth: 1,
          zooming: {
              type: 'xy'
          }
      },
  
      title: { text: 'Адсорбционное газоразделение' },
  
      xAxis: {
          gridLineWidth: 1,
          title: { text: '' },
          labels: { enabled: false }
      },
  
      yAxis: {
          gridLineWidth: 1,
          title: { text: '' },
          labels: { enabled: false }
      },
  
      legend: { enabled: false },
      credits: { enabled: false },
  
      tooltip: {
          formatter: function () {
              return this.series.index === 0
                  ? 'Кислород чистотой до 99,9%'
                  : 'Азот чистотой до 99,5%';
          }
      },
  
      series: [
          {
              name: 'Кислород',
              data: generateBubbleData(100, 50, 100, 20, 40), // 60% верхний слой
              marker: {
                  fillColor: {
                      radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                      stops: [
                          [0, 'rgba(255,255,255,0.5)'],
                          [
                              1,
                              Highcharts.color(Highcharts.getOptions().colors[0])
                                  .setOpacity(0.5).get('rgba')
                          ]
                      ]
                  }
              }
          },
          {
              name: 'Азот',
              data: generateBubbleData(70, 0, 50, 10, 30), // 40% нижний слой
              marker: {
                  fillColor: {
                      radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                      stops: [
                          [0, 'rgba(255,255,255,0.5)'],
                          [
                              1,
                              Highcharts.color(Highcharts.getOptions().colors[1])
                                  .setOpacity(0.5).get('rgba')
                          ]
                      ]
                  }
              }
          }
      ]
  });
  
  // Функция генерации пузырьков в указанных границах
  function generateBubbleData(count, yMin, yMax, sizeMin, sizeMax) {
      let data = [];
      for (let i = 0; i < count; i++) {
          let x = Math.random() * 100; // Равномерное распределение по ширине
          let y = yMin + Math.random() * (yMax - yMin); // Задаём слой по высоте
          let size = sizeMin + Math.random() * (sizeMax - sizeMin); // Разброс размеров
          data.push([x, y, size]);
      }
      return data;
  }
  
  }, []);

  return (
    <main>

      <br /><br />
      <h3 className="text-center">Технологический процесс</h3>

      <section className="container-fluid my-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h3 className="mb-4">Разделение газов методом короткоцикловой безнагревной адсорбции (КЦА)</h3>
            <p className="mb-3">Мы предлагаем производство, поставку и интеграцию газоразделительного оборудования для энергоэффективного производства газообразного кислорода и азота из атмосферного воздуха. Оборудование может быть поставлено в виде станции генерации газа или станции перезарядки газовых баллонов.</p>
            <br /><br />
            <h4 className="mb-4">Подготовка воздуха:</h4>
            <ol>
              <li>Сжатие атмосферного воздуха с помощью компрессора</li>
              <li>Осушение сжатого воздуха</li>
              <li>Фильтрация осушенного сжатого воздуха для удаления пыли, грязи и паров масла</li>
              <li>Накопление в ресивере для равномерной подачи  в адсорберы</li>
            </ol>
            <br /><br />

            <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
              <li className="text-sm-center nav-item" role="presentation">
                <button className="square nav-link active" id="pills-O2-tab" data-bs-toggle="pill" data-bs-target="#pills-O2" type="button" role="tab" aria-controls="pills-O2" aria-selected="true">
                  Кислород
                </button>
              </li>
              <li className="text-sm-center nav-item" role="presentation">
                <button className="square nav-link" id="pills-n2-tab" data-bs-toggle="pill" data-bs-target="#pills-n2" type="button" role="tab" aria-controls="pills-n2" aria-selected="false">
                  Азот
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-O2" role="tabpanel" aria-labelledby="pills-O2-tab" tabIndex="0">

                <br /><br />

                <h4 className="mb-4">Принцип генерации</h4>
                <p className="mb-3">Для генерации кислорода в адсорберах используется специальный адсорбент - цеолит, который избирательно захватывает молекулы азота, пропуская молекулы кислорода. Азот удерживается в порах цеолита, а кислород выходит из адсорбера как основной продукт. Кислородный поток собирается в ресивере для дальнейшего направления в системы потребления или баллоны.</p>
                <br /><br />

                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="text-center">
                      <h2 className="display-5 fw-bold">1,05 кВт/час</h2>
                      <p className="fw-semibold">Энергоэффективность на 1 м³ газа</p>
                      <p>Наше оборудование гарантирует рекордную энергоэффективность на 1 м³ производимого газа, что позволяет значительно снизить расходы на электроэнергию.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <h2 className="display-5 fw-bold">99,5%</h2>
                      <p className="fw-semibold">Максимальная чистота производимого кислорода</p>
                      <p>Передовые технологии фильтрации и адсорбции гарантируют исключительную чистоту получаемого азота для любого назначения.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <h2 className="display-5 fw-bold">24/7</h2>
                      <p className="fw-semibold">Непрерывная работа оборудования</p>
                      <p>Оборудование спроектировано для бесперебойной работы круглосуточно, что обеспечивает надежность и стабильность производства.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <h2 className="display-5 fw-bold">10 лет</h2>
                      <p className="fw-semibold">Срок службы компонентов</p>
                      <p>Долговечные и качественные материалы гарантируют длительный срок эксплуатации оборудования без снижения производительности.</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="tab-pane fade" id="pills-n2" role="tabpanel" aria-labelledby="pills-n2-tab" tabIndex="0">

                <br /><br />

                <h4 className="mb-4">Принцип генерации</h4>
                <p className="mb-3">Для генерации азота в адсорберах используются гранулированные молекулярные сита, которые избирательно захватывает молекулы кислорода, пропуская молекулы азота, выходящего из адсорбера как основной продукт. Чистый азот собирается в ресивере для дальнейшего направления в системы потребления или баллоны.</p>
                <br /><br />

                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div className="text-center">
                      <h2 className="display-5 fw-bold">0,95 кВт/час</h2>
                      <p className="fw-semibold">Энергоэффективность на 1 м³ газа</p>
                      <p>Наше оборудование гарантирует минимальные затраты электроэнергии на 1 м³ производимого азота.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="text-center">
                      <h2 className="display-5 fw-bold">99,9%</h2>
                      <p className="fw-semibold">Максимальная чистота производимого азота</p>
                      <p>Передовые технологии фильтрации гарантируют чистоту азота для самых высоких требований.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-5 text-center">
            <div id="container" style={{ height: '400px', width: '100%' }}></div>
          </div>

        </div>
      </section>

    </main>
  );
}
