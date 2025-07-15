const compressors = [
  {
    id: 'BGV5',
    name: 'Масляный винтовой компрессор BGV5',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 140000, // 11471 CNY × 12 = 137652 ≈ 140000 RUB
    specs: [
      { pressure: 7, minFlow: 24.6, maxFlow: 55.2, power: 5.5 },
      { pressure: 8, minFlow: 24, maxFlow: 52.2, power: 5.5 },
      { pressure: 10, minFlow: 21, maxFlow: 42.0, power: 5.5 }
    ]
  },
  {
    id: 'BGV7',
    name: 'Масляный винтовой компрессор BGV7',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 140000, // 
    specs: [
      { pressure: 7, minFlow: 24.0, maxFlow: 77.4, power: 7.5 },
      { pressure: 8, minFlow: 22.8, maxFlow: 76.8, power: 7.5 },
      { pressure: 10, minFlow: 16.2, maxFlow: 55.2, power: 7.5 }
    ]
  },
  {
    id: 'BGV11',
    name: 'Масляный винтовой компрессор BGV11',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 180000, // 14310 CNY × 12 = 171720 ≈ 180000 RUB
    specs: [
      { pressure: 7, minFlow: 33.0, maxFlow: 119.4, power: 11 },
      { pressure: 8, minFlow: 49.2, maxFlow: 106.8, power: 11 },
      { pressure: 10, minFlow: 45.0, maxFlow: 92.4, power: 11 },
      { pressure: 12.5, minFlow: 24.0, maxFlow: 62.4, power: 11 }
    ]
  },
  {
    id: 'BGV15',
    name: 'Масляный винтовой компрессор BGV15',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 220000, // 17939 CNY × 12 = 215268 ≈ 220000 RUB
    specs: [
      { pressure: 7, minFlow: 44.4, maxFlow: 150.6, power: 15 },
      { pressure: 8, minFlow: 40.8, maxFlow: 136.8, power: 15 },
      { pressure: 10, minFlow: 58.2, maxFlow: 123.6, power: 15 },
      { pressure: 12.5, minFlow: 30.6, maxFlow: 99.6, power: 15 }
    ]
  },
  {
    id: 'BGV18',
    name: 'Масляный винтовой компрессор BGV18',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 270000, // 21977 CNY × 12 = 263724 ≈ 270000 RUB
    specs: [
      { pressure: 7, minFlow: 55.8, maxFlow: 186.6, power: 18.5 },
      { pressure: 8, minFlow: 54.0, maxFlow: 180.6, power: 18.5 },
      { pressure: 10, minFlow: 48.6, maxFlow: 162.6, power: 18.5 },
      { pressure: 12.5, minFlow: 40.8, maxFlow: 141.6, power: 18.5 }
    ]
  },
  {
    id: 'BGV22',
    name: 'Масляный винтовой компрессор BGV22',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 250000, // 20504 CNY × 12 = 246048 ≈ 250000 RUB
    specs: [
      { pressure: 7, minFlow: 100.2, maxFlow: 217.8, power: 22 },
      { pressure: 8, minFlow: 100.2, maxFlow: 211.8, power: 22 },
      { pressure: 10, minFlow: 92.4, maxFlow: 187.2, power: 22 },
      { pressure: 12.5, minFlow: 48.6, maxFlow: 165.6, power: 22 }
    ]
  },
  {
    id: 'BGV30',
    name: 'Масляный винтовой компрессор BGV30',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 320000, // 25936 CNY × 12 = 311232 ≈ 320000 RUB
    specs: [
      { pressure: 7, minFlow: 145.2, maxFlow: 304.2, power: 30 },
      { pressure: 8, minFlow: 86.4, maxFlow: 298.2, power: 30 },
      { pressure: 10, minFlow: 75.0, maxFlow: 292.8, power: 30 },
      { pressure: 12.5, minFlow: 115.2, maxFlow: 193.8, power: 30 }
    ]
  },
  {
    id: 'BGV37',
    name: 'Масляный винтовой компрессор BGV37',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 360000, // 29744 CNY × 12 = 356928 ≈ 360000 RUB
    specs: [
      { pressure: 7, minFlow: 114.0, maxFlow: 372.0, power: 37 },
      { pressure: 8, minFlow: 189.6, maxFlow: 355.8, power: 37 },
      { pressure: 10, minFlow: 162.6, maxFlow: 324.6, power: 37 },
      { pressure: 12.5, minFlow: 78.6, maxFlow: 264.0, power: 37 }
    ]
  },
  {
    id: 'BGV45',
    name: 'Масляный винтовой компрессор BGV45',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 400000, // 32789 CNY × 12 = 393468 ≈ 400000 RUB
    specs: [
      { pressure: 7, minFlow: 138.6, maxFlow: 450.6, power: 45 },
      { pressure: 8, minFlow: 131.4, maxFlow: 441.6, power: 45 },
      { pressure: 10, minFlow: 200.4, maxFlow: 352.2, power: 45 },
      { pressure: 12.5, minFlow: 89.4, maxFlow: 294.0, power: 45 }
    ]
  },
  {
    id: 'BGV55',
    name: 'Масляный винтовой компрессор BGV55',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 600000, // 49801 CNY × 12 = 597612 ≈ 600000 RUB
    specs: [
      { pressure: 7, minFlow: 244.8, maxFlow: 597.0, power: 55 },
      { pressure: 8, minFlow: 281.4, maxFlow: 568.8, power: 55 },
      { pressure: 10, minFlow: 266.4, maxFlow: 520.8, power: 55 },
      { pressure: 12.5, minFlow: 217.2, maxFlow: 423.6, power: 55 }
    ]
  },
  {
    id: 'BGV75',
    name: 'Масляный винтовой компрессор BGV75',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 700000, // 57510 CNY × 12 = 690120 ≈ 700000 RUB
    specs: [
      { pressure: 7, minFlow: 293.4, maxFlow: 731.4, power: 75 },
      { pressure: 8, minFlow: 355.2, maxFlow: 725.4, power: 75 },
      { pressure: 10, minFlow: 315.0, maxFlow: 639.6, power: 75 },
      { pressure: 12.5, minFlow: 203.4, maxFlow: 520.8, power: 75 }
    ]
  },
  {
    id: 'BGV90',
    name: 'Масляный винтовой компрессор BGV90',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 1200000, // 96720 CNY × 12 = 1160640 ≈ 1200000 RUB
    specs: [
      { pressure: 7, minFlow: 348.0, maxFlow: 1000.8, power: 90 },
      { pressure: 8, minFlow: 381.0, maxFlow: 982.8, power: 90 },
      { pressure: 10, minFlow: 288.6, maxFlow: 741.6, power: 90 },
      { pressure: 12.5, minFlow: 286.2, maxFlow: 735.0, power: 90 }
    ]
  },
  {
    id: 'BGV110',
    name: 'Масляный винтовой компрессор BGV110',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 1300000, // 107886 CNY × 12 = 1294632 ≈ 1300000 RUB
    specs: [
      { pressure: 7, minFlow: 456.0, maxFlow: 1159.2, power: 110 },
      { pressure: 8, minFlow: 445.8, maxFlow: 1117.2, power: 110 },
      { pressure: 10, minFlow: 376.8, maxFlow: 946.8, power: 110 },
      { pressure: 12.5, minFlow: 300.6, maxFlow: 817.8, power: 110 }
    ]
  },
  {
    id: 'BGV132',
    name: 'Масляный винтовой компрессор BGV132',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 1300000, // 108313 CNY × 12 = 1299756 ≈ 1300000 RUB
    specs: [
      { pressure: 7, minFlow: 476.4, maxFlow: 1360.8, power: 132 },
      { pressure: 8, minFlow: 475.2, maxFlow: 1357.8, power: 132 },
      { pressure: 10, minFlow: 416.4, maxFlow: 1189.2, power: 132 },
      { pressure: 12.5, minFlow: 336.6, maxFlow: 962.4, power: 132 }
    ]
  },
  {
    id: 'BGV160',
    name: 'Масляный винтовой компрессор BGV160',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 2000000, // 166257 CNY × 12 = 1995084 ≈ 2000000 RUB
    specs: [
      { pressure: 7, minFlow: 593.4, maxFlow: 1694.4, power: 160 },
      { pressure: 8, minFlow: 577.8, maxFlow: 1651.2, power: 160 },
      { pressure: 10, minFlow: 458.4, maxFlow: 1309.2, power: 160 },
      { pressure: 12.5, minFlow: 396.6, maxFlow: 1133.4, power: 160 }
    ]
  },
  {
    id: 'BGV185',
    name: 'Масляный винтовой компрессор BGV185',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 2100000, // 170477 CNY × 12 = 2045724 ≈ 2100000 RUB
    specs: [
      { pressure: 7, minFlow: 682.2, maxFlow: 1949.4, power: 185 },
      { pressure: 8, minFlow: 672.6, maxFlow: 1921.2, power: 185 },
      { pressure: 10, minFlow: 572.4, maxFlow: 1635.0, power: 185 },
      { pressure: 12.5, minFlow: 466.8, maxFlow: 1333.8, power: 185 }
    ]
  },
  {
    id: 'BGV200',
    name: 'Масляный винтовой компрессор BGV200',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 2300000, // 190326 CNY × 12 = 2283912 ≈ 2300000 RUB
    specs: [
      { pressure: 7, minFlow: 785.4, maxFlow: 2244.0, power: 200 },
      { pressure: 8, minFlow: 753.6, maxFlow: 2152.2, power: 200 },
      { pressure: 10, minFlow: 611.4, maxFlow: 1747.8, power: 200 },
      { pressure: 12.5, minFlow: 565.8, maxFlow: 1616.4, power: 200 }
    ]
  },
  {
    id: 'BGV220',
    name: 'Масляный винтовой компрессор BGV220',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 2500000, // 201855 CNY × 12 = 2422260 ≈ 2500000 RUB
    specs: [
      { pressure: 7, minFlow: 996.0, maxFlow: 2564.4, power: 220 },
      { pressure: 8, minFlow: 914.4, maxFlow: 2436.6, power: 220 },
      { pressure: 10, minFlow: 765.0, maxFlow: 1969.8, power: 220 },
      { pressure: 12.5, minFlow: 676.8, maxFlow: 1709.4, power: 220 }
    ]
  },
  {
    id: 'BGV250',
    name: 'Масляный винтовой компрессор BGV250',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 2600000, // 215616 CNY × 12 = 2587392 ≈ 2600000 RUB
    specs: [
      { pressure: 7, minFlow: 1053.6, maxFlow: 2713.2, power: 250 },
      { pressure: 8, minFlow: 1051.2, maxFlow: 2707.2, power: 250 },
      { pressure: 10, minFlow: 957.0, maxFlow: 2464.8, power: 250 },
      { pressure: 12.5, minFlow: 703.8, maxFlow: 1812.6, power: 250 }
    ]
  },
  {
    id: 'BGV280',
    name: 'Масляный винтовой компрессор BGV280',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 3200000, // 261484 CNY × 12 = 3137808 ≈ 3200000 RUB
    specs: [
      { pressure: 7, minFlow: 1079.4, maxFlow: 3084.6, power: 280 },
      { pressure: 8, minFlow: 1054.2, maxFlow: 3010.8, power: 280 },
      { pressure: 10, minFlow: 937.8, maxFlow: 2679.6, power: 280 },
      { pressure: 12.5, minFlow: 695.4, maxFlow: 1987.2, power: 280 }
    ]
  },
  {
    id: 'BGV315',
    name: 'Масляный винтовой компрессор BGV315',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 3600000, // 293834 CNY × 12 = 3526008 ≈ 3600000 RUB
    specs: [
      { pressure: 7, minFlow: 1159.2, maxFlow: 3312.6, power: 315 },
      { pressure: 8, minFlow: 1132.2, maxFlow: 3233.4, power: 315 },
      { pressure: 10, minFlow: 1012.8, maxFlow: 2894.4, power: 315 },
      { pressure: 12.5, minFlow: 901.2, maxFlow: 2575.2, power: 315 }
    ]
  },
  {
    id: 'BGV355',
    name: 'Масляный винтовой компрессор BGV355',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/compressor.png',
    price: 3600000, // 298866 CNY × 12 = 3586392 ≈ 3600000 RUB
    specs: [
      { pressure: 7, minFlow: 1283.4, maxFlow: 3667.8, power: 355 },
      { pressure: 8, minFlow: 1269.0, maxFlow: 3624.6, power: 355 },
      { pressure: 10, minFlow: 1102.2, maxFlow: 3150.0, power: 355 },
      { pressure: 12.5, minFlow: 970.8, maxFlow: 2734.2, power: 355 }
    ]
  }
];

const dryers = [
  {
    id: 'BGD1HTF',
    name: 'Осушитель BGD-1HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 5200 * 12,
    flow: 72,
    voltage: '220/50',
    power: 0.85
  },
  {
    id: 'BGD2HTF',
    name: 'Осушитель BGD-2HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 7910 * 12,
    flow: 144,
    voltage: '220/50',
    power: 0.85
  },
  {
    id: 'BGD3HTF',
    name: 'Осушитель BGD-3HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 8850 * 12,
    flow: 228,
    voltage: '220/50',
    power: 0.9
  },
  {
    id: 'BGD6HTF',
    name: 'Осушитель BGD-6HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 11330 * 12,
    flow: 390,
    voltage: '220/50',
    power: 1.1
  },
  {
    id: 'BGD8HTF',
    name: 'Осушитель BGD-8HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 12540 * 12,
    flow: 510,
    voltage: '220/50',
    power: 1.8
  },
  {
    id: 'BGD10HTF',
    name: 'Осушитель BGD-10HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 16640 * 12,
    flow: 642,
    voltage: '380/50',
    power: 2.5
  },
  {
    id: 'BGD13HTF',
    name: 'Осушитель BGD-13HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 17300 * 12,
    flow: 810,
    voltage: '380/50',
    power: 2.5
  },
  {
    id: 'BGD15HTF',
    name: 'Осушитель BGD-15HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 24560 * 12,
    flow: 1020,
    voltage: '380/50',
    power: 3
  },
  {
    id: 'BGD20HTF',
    name: 'Осушитель BGD-20HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 29120 * 12,
    flow: 1380,
    voltage: '380/50',
    power: 4
  },
  {
    id: 'BGD25HTF',
    name: 'Осушитель BGD-25HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 39600 * 12,
    flow: 1680,
    voltage: '380/50',
    power: 4.5
  },
  {
    id: 'BGD30HTF',
    name: 'Осушитель BGD-30HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 45520 * 12,
    flow: 1980,
    voltage: '380/50',
    power: 6.5
  },
  {
    id: 'BGD40HTF',
    name: 'Осушитель BGD-40HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 58000 * 12,
    flow: 2700,
    voltage: '380/50',
    power: 8.8
  },
  {
    id: 'BGD50HTF',
    name: 'Осушитель BGD-50HTF',
    type: 'Рефрижираторный осушитель',
    url: '/osyshitel.png',
    price: 69540 * 12,
    flow: 3300,
    voltage: '380/50',
    power: 10.2
  }
]

export { compressors, dryers }