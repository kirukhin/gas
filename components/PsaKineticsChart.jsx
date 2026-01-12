import { useEffect, useRef } from "react"

export default function PsaKineticsChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    // ❗ Если Highcharts уже загружен — просто рисуем график
    if (window.Highcharts) {
      renderChart()
      return
    }

    // ❗ Загружаем Highcharts ОДИН раз
    const script = document.createElement("script")
    script.src = "https://code.highcharts.com/highcharts.js"
    script.async = true

    script.onload = () => {
      if (window.Highcharts) {
        renderChart()
      }
    }

    document.body.appendChild(script)

    // ❗ В Next.js НЕЛЬЗЯ удалять CDN-скрипт
  }, [])

  function renderChart() {
    if (!chartRef.current) return
    if (!window.Highcharts) return

    window.Highcharts.chart(chartRef.current, {
      chart: {
        type: "spline",
        height: 420,
        backgroundColor: "transparent"
      },

      title: {
        text: "Кинетическая адсорбция O₂ и N₂ на CMS при давлении PSA"
      },

      subtitle: {
        text: "Короткоцикловая адсорбция (5–8 бар), типичный цикл PSA ≈ 8 секунд"
      },

      xAxis: {
        title: { text: "Время, секунды" },
        min: 0,
        max: 12,
        tickInterval: 2,
        plotBands: [
          {
            from: 0,
            to: 8,
            color: "rgba(100, 149, 237, 0.08)",
            label: { text: "Рабочий цикл PSA" }
          }
        ]
      },

      yAxis: {
        title: { text: "Адсорбированное количество, ммоль/г CMS" },
        min: 0,
        max: 1.6
      },

      tooltip: {
        shared: true,
        valueSuffix: " ммоль/г"
      },

      series: [
        {
          name: "Кислород (O₂)",
          color: "#d9534f",
          lineWidth: 3,
          data: [
            [0, 0.0],
            [1, 0.45],
            [2, 0.85],
            [3, 1.15],
            [4, 1.32],
            [5, 1.42],
            [6, 1.48],
            [7, 1.52],
            [8, 1.55],
            [10, 1.56],
            [12, 1.56]
          ]
        },
        {
          name: "Азот (N₂)",
          color: "#0275d8",
          lineWidth: 3,
          data: [
            [0, 0.0],
            [1, 0.04],
            [2, 0.08],
            [3, 0.12],
            [4, 0.16],
            [5, 0.20],
            [6, 0.23],
            [7, 0.26],
            [8, 0.28],
            [10, 0.32],
            [12, 0.35]
          ]
        }
      ],

      credits: {
        enabled: false
      }
    })
  }

  return (
    <figure className="my-12">
      {/* ❗ ВАЖНО: ref + минимальная высота */}
      <div
        ref={chartRef}
        style={{ minHeight: 420 }}
      />

      <figcaption className="text-sm text-gray-500 mt-4">
        Кинетические кривые адсорбции кислорода и азота на углеродных
        молекулярных ситах (CMS). За время короткого цикла PSA кислород
        адсорбируется в десятки раз быстрее, тогда как азот практически
        не успевает проникнуть в микропоры.
      </figcaption>
    </figure>
  )
}
