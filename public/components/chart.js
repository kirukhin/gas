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
        min: 0,
        max: 100,
        title: { text: '' },
        labels: { enabled: false }
    },

    yAxis: {
        gridLineWidth: 1,
        min: 0,
        max: 100,
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
            data: [
                [10, 80, 30], [20, 80, 25], [30, 80, 20], [40, 80, 35], [50, 80, 30], [60, 80, 25], [70, 80, 20], [80, 80, 35], [90, 80, 30], 
                [10, 70, 25], [20, 70, 20], [30, 70, 35], [40, 70, 30], [50, 70, 25], [60, 70, 20], [70, 70, 35], [80, 70, 30], [90, 70, 25], 
                [10, 60, 20], [20, 60, 35], [30, 60, 30], [40, 60, 25], [50, 60, 20], [60, 60, 35], [70, 60, 30], [80, 60, 25], [90, 60, 20]
            ],
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
            data: [
                [10, 40, 30], [20, 40, 25], [30, 40, 20], [40, 40, 35], [50, 40, 30], [60, 40, 25], [70, 40, 20], [80, 40, 35], [90, 40, 30], 
                [10, 30, 25], [20, 30, 20], [30, 30, 35], [40, 30, 30], [50, 30, 25], [60, 30, 20], [70, 30, 35], [80, 30, 30], [90, 30, 25], 
                [10, 20, 20], [20, 20, 35], [30, 20, 30], [40, 20, 25], [50, 20, 20], [60, 20, 35], [70, 20, 30], [80, 20, 25], [90, 20, 20]
            ],
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
