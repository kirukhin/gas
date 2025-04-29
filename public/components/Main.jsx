import React, { useEffect } from 'react';
import '/public/components/chart.css';

export default function Main({ generator, purity, pressure, power }) {
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zooming: { type: 'xy' }
      },
      title: { text: 'Адсорбционное газоразделение' },
      xAxis: {
        gridLineWidth: 1,
        labels: { enabled: false }
      },
      yAxis: {
        gridLineWidth: 1,
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
          data: generateBubbleData(100, 50, 100, 20, 40),
          marker: {
            fillColor: {
              radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
              stops: [
                [0, 'rgba(255,255,255,0.5)'],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get('rgba')]
              ]
            }
          }
        },
        {
          name: 'Азот',
          data: generateBubbleData(70, 0, 50, 10, 30),
          marker: {
            fillColor: {
              radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
              stops: [
                [0, 'rgba(255,255,255,0.5)'],
                [1, Highcharts.color(Highcharts.getOptions().colors[1]).setOpacity(0.5).get('rgba')]
              ]
            }
          }
        }
      ]
    });

    function generateBubbleData(count, yMin, yMax, sizeMin, sizeMax) {
      let data = [];
      for (let i = 0; i < count; i++) {
        let x = Math.random() * 100;
        let y = yMin + Math.random() * (yMax - yMin);
        let size = sizeMin + Math.random() * (sizeMax - sizeMin);
        data.push([x, y, size]);
      }
      return data;
    }
  }, []);

  const isOxygen = generator === 'oxygen';

  return (
    <main>
      <br /><br />
      <h3 className="text-center">Технологический процесс</h3>

      <section className="container-fluid my-5">
  <div className="row align-items-center">
    <div className="col-lg-7">
      <h3 className="mb-4">Разделение воздуха методом короткоцикловой безнагревной адсорбции (КЦА)</h3>
      <p className="mb-3">
        Мы проектируем и поставляем современные адсорбционные установки для автономного производства кислорода и азота из атмосферного воздуха.
        Наши системы рассчитаны на круглосуточную работу, обладают высокой энергоэффективностью и адаптируются под любые задачи — от генерации до заправки баллонов.
      </p>
      <p className="mb-3">
        Установка подбирается и настраивается в онлайн-конфигураторе — всего за несколько секунд.
        Доступна точная настройка по требуемой чистоте, производительности и условиям эксплуатации.
      </p>
      <br />
      <h4 className="mb-4">Типовая схема подготовки воздуха:</h4>
      <ol>
        <li>Сжатие атмосферного воздуха с помощью винтового компрессора</li>
        <li>Удаление влаги в рефрижераторном или адсорбционном осушителе</li>
        <li>Фильтрация воздуха от пыли, масла и примесей</li>
        <li>Накопление воздуха в буферном ресивере и подача в адсорберы</li>
      </ol>
      <br />

      <ul className="nav nav-pills justify-content-center" role="tablist">
        <li className="nav-item">
          <button className="square nav-link active" data-bs-toggle="pill" data-bs-target="#pills-O2">
            Кислород
          </button>
        </li>
        <li className="nav-item">
          <button className="square nav-link" data-bs-toggle="pill" data-bs-target="#pills-n2">
            Азот
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-O2">
          <br /><br />
          <h4>Генерация кислорода</h4>
          <p>
            В установке используется цеолитовый адсорбент, способный избирательно задерживать молекулы азота.
            Таким образом, на выходе получается поток чистого кислорода. Стандартное рабочее давление — 5 бар,
            чистота — до 95%. Под заказ доступны модели с повышенной чистотой или нестандартным давлением.
          </p>

          <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
            <div className="col text-center">
              <h2 className="display-5 fw-bold">до 95%</h2>
              <p className="fw-semibold">Чистота кислорода</p>
              <p>Обеспечивает стабильную и безопасную подачу кислорода в медицинских и промышленных системах.</p>
            </div>
            <div className="col text-center">
              <h2 className="display-5 fw-bold">1,05 кВт/м³</h2>
              <p className="fw-semibold">Энергоэффективность</p>
              <p>Минимальные затраты на производство одного кубометра кислорода при круглосуточной работе.</p>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="pills-n2">
          <br /><br />
          <h4>Генерация азота</h4>
          <p>
            Для получения азота используются молекулярные сита, селективно поглощающие кислород.
            Получаемый азот накапливается в выходном ресивере. Возможна регулировка чистоты от 95% до 99.9995%,
            давления от 6 до 13 бар и точки росы до -70 °C.
          </p>

          <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
            <div className="col text-center">
              <h2 className="display-5 fw-bold">до 99.9995%</h2>
              <p className="fw-semibold">Чистота азота</p>
              <p>Подходит для электроники, пищевой отрасли, металлургии и нефтегазового сектора.</p>
            </div>
            <div className="col text-center">
              <h2 className="display-5 fw-bold">до -70 °C</h2>
              <p className="fw-semibold">Точка росы</p>
              <p>Обеспечивает сухой азот для критических технологических процессов и хранения.</p>
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
