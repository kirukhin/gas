//components/equipment.js

const compressors = [
  {
    id: 'DBG5',
    name: 'Масляный винтовой компрессор DBG5',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 151000,
    specs: [
      { pressure: 7, minFlow: 24.6, maxFlow: 55.2, power: 5.5 },
      { pressure: 8, minFlow: 24, maxFlow: 52.2, power: 5.5 },
      { pressure: 10, minFlow: 21, maxFlow: 42.0, power: 5.5 }
    ]
  },
  {
    id: 'DBG7',
    name: 'Масляный винтовой компрессор DBG7',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 151000,
    specs: [
      { pressure: 7, minFlow: 24.0, maxFlow: 77.4, power: 7.5 },
      { pressure: 8, minFlow: 22.8, maxFlow: 76.8, power: 7.5 },
      { pressure: 10, minFlow: 16.2, maxFlow: 55.2, power: 7.5 }
    ]
  },
  {
    id: 'DBG11',
    name: 'Масляный винтовой компрессор DBG11',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 259000,
    specs: [
      { pressure: 7, minFlow: 33.0, maxFlow: 119.4, power: 11 },
      { pressure: 8, minFlow: 49.2, maxFlow: 106.8, power: 11 },
      { pressure: 10, minFlow: 45.0, maxFlow: 92.4, power: 11 },
      { pressure: 12.5, minFlow: 24.0, maxFlow: 62.4, power: 11 }
    ]
  },
  {
    id: 'DBG15',
    name: 'Масляный винтовой компрессор DBG15',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 259000,
    specs: [
      { pressure: 7, minFlow: 44.4, maxFlow: 150.6, power: 15 },
      { pressure: 8, minFlow: 40.8, maxFlow: 136.8, power: 15 },
      { pressure: 10, minFlow: 58.2, maxFlow: 123.6, power: 15 },
      { pressure: 12.5, minFlow: 30.6, maxFlow: 99.6, power: 15 }
    ]
  },
  {
    id: 'DBG18',
    name: 'Масляный винтовой компрессор DBG18',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 317000,
    specs: [
      { pressure: 7, minFlow: 55.8, maxFlow: 186.6, power: 18.5 },
      { pressure: 8, minFlow: 54.0, maxFlow: 180.6, power: 18.5 },
      { pressure: 10, minFlow: 48.6, maxFlow: 162.6, power: 18.5 },
      { pressure: 12.5, minFlow: 40.8, maxFlow: 141.6, power: 18.5 }
    ]
  },
  {
    id: 'DBG22',
    name: 'Масляный винтовой компрессор DBG22',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 317000,
    specs: [
      { pressure: 7, minFlow: 100.2, maxFlow: 217.8, power: 22 },
      { pressure: 8, minFlow: 100.2, maxFlow: 211.8, power: 22 },
      { pressure: 10, minFlow: 92.4, maxFlow: 187.2, power: 22 },
      { pressure: 12.5, minFlow: 48.6, maxFlow: 165.6, power: 22 }
    ]
  },
  {
    id: 'DBG30',
    name: 'Масляный винтовой компрессор DBG30',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 491000,
    specs: [
      { pressure: 7, minFlow: 145.2, maxFlow: 304.2, power: 30 },
      { pressure: 8, minFlow: 86.4, maxFlow: 298.2, power: 30 },
      { pressure: 10, minFlow: 75.0, maxFlow: 292.8, power: 30 },
      { pressure: 12.5, minFlow: 115.2, maxFlow: 193.8, power: 30 }
    ]
  },
  {
    id: 'DBG37',
    name: 'Масляный винтовой компрессор DBG37',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 491000,
    specs: [
      { pressure: 7, minFlow: 114.0, maxFlow: 372.0, power: 37 },
      { pressure: 8, minFlow: 189.6, maxFlow: 355.8, power: 37 },
      { pressure: 10, minFlow: 162.6, maxFlow: 324.6, power: 37 },
      { pressure: 12.5, minFlow: 78.6, maxFlow: 264.0, power: 37 }
    ]
  },
  {
    id: 'DBG45',
    name: 'Масляный винтовой компрессор DBG45',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 994000,
    specs: [
      { pressure: 7, minFlow: 138.6, maxFlow: 450.6, power: 45 },
      { pressure: 8, minFlow: 131.4, maxFlow: 441.6, power: 45 },
      { pressure: 10, minFlow: 200.4, maxFlow: 352.2, power: 45 },
      { pressure: 12.5, minFlow: 89.4, maxFlow: 294.0, power: 45 }
    ]
  },
  {
    id: 'DBG55',
    name: 'Масляный винтовой компрессор DBG55',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 994000,
    specs: [
      { pressure: 7, minFlow: 244.8, maxFlow: 597.0, power: 55 },
      { pressure: 8, minFlow: 281.4, maxFlow: 568.8, power: 55 },
      { pressure: 10, minFlow: 266.4, maxFlow: 520.8, power: 55 },
      { pressure: 12.5, minFlow: 217.2, maxFlow: 423.6, power: 55 }
    ]
  },
  {
    id: 'DBG75',
    name: 'Масляный винтовой компрессор DBG75',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 1145000,
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
    url: '/assets/compressor.png',
    price: 2872600,
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
    url: '/assets/compressor.png',
    price: 3204200,
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
    url: '/assets/compressor.png',
    price: 3216900,
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
    url: '/assets/compressor.png',
    price: 4937800,
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
    url: '/assets/compressor.png',
    price: 5063200,
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
    url: '/assets/compressor.png',
    price: 5652700,
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
    url: '/assets/compressor.png',
    price: 5995100,
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
    url: '/assets/compressor.png',
    price: 6403800,
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
    url: '/assets/compressor.png',
    price: 7766100,
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
    url: '/assets/compressor.png',
    price: 8726900,
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
    url: '/assets/compressor.png',
    price: 8876300,
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
    url: '/assets/osyshitel.png',
    price: 154400,
    flow: 72,
    voltage: '220/50',
    power: 0.85
  },
  {
    id: 'BGD2HTF',
    name: 'Осушитель BGD-2HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 234900,
    flow: 144,
    voltage: '220/50',
    power: 0.85
  },
  {
    id: 'BGD3HTF',
    name: 'Осушитель BGD-3HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 262800,
    flow: 228,
    voltage: '220/50',
    power: 0.9
  },
  {
    id: 'BGD6HTF',
    name: 'Осушитель BGD-6HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 336500,
    flow: 390,
    voltage: '220/50',
    power: 1.1
  },
  {
    id: 'BGD8HTF',
    name: 'Осушитель BGD-8HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 372400,
    flow: 510,
    voltage: '220/50',
    power: 1.8
  },
  {
    id: 'BGD10HTF',
    name: 'Осушитель BGD-10HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 494200,
    flow: 642,
    voltage: '380/50',
    power: 2.5
  },
  {
    id: 'BGD13HTF',
    name: 'Осушитель BGD-13HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 513800,
    flow: 810,
    voltage: '380/50',
    power: 2.5
  },
  {
    id: 'BGD15HTF',
    name: 'Осушитель BGD-15HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 729400,
    flow: 1020,
    voltage: '380/50',
    power: 3
  },
  {
    id: 'BGD20HTF',
    name: 'Осушитель BGD-20HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 864900,
    flow: 1380,
    voltage: '380/50',
    power: 4
  },
  {
    id: 'BGD25HTF',
    name: 'Осушитель BGD-25HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 1176100,
    flow: 1680,
    voltage: '380/50',
    power: 4.5
  },
  {
    id: 'BGD30HTF',
    name: 'Осушитель BGD-30HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 1351900,
    flow: 1980,
    voltage: '380/50',
    power: 6.5
  },
  {
    id: 'BGD40HTF',
    name: 'Осушитель BGD-40HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 1722600,
    flow: 2700,
    voltage: '380/50',
    power: 8.8
  },
  {
    id: 'BGD50HTF',
    name: 'Осушитель BGD-50HTF',
    type: 'Рефрижираторный осушитель',
    url: '/assets/osyshitel.png',
    price: 2065300,
    flow: 3300,
    voltage: '380/50',
    power: 10.2
  },
  {
    id: 'BGC 038',
    name: 'Осушитель BGC 038',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 228,
    specs: [
      { maxPressure: 10, price: 289600 },
      { maxPressure: 16, price: 289600 }
    ]
  },
  {
    id: 'BGC 065',
    name: 'Осушитель BGC 065',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 390,
    specs: [
      { maxPressure: 10, price: 346800 },
      { maxPressure: 16, price: 346800 }
    ]
  },
  {
    id: 'BGC 085',
    name: 'Осушитель BGC 085',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 510,
    specs: [
      { maxPressure: 10, price: 404000 },
      { maxPressure: 16, price: 404000 }
    ]
  },
  {
    id: 'BGC 115',
    name: 'Осушитель BGC 115',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 690,
    specs: [
      { maxPressure: 10, price: 482600 },
      { maxPressure: 16, price: 482600 }
    ]
  },
  {
    id: 'BGC 135',
    name: 'Осушитель BGC 135',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 810,
    specs: [
      { maxPressure: 10, price: 624500 },
      { maxPressure: 16, price: 624500 }
    ]
  },
  {
    id: 'BGC 180',
    name: 'Осушитель BGC 180',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1080,
    specs: [
      { maxPressure: 10, price: 738000 },
      { maxPressure: 16, price: 738000 }
    ]
  },
  {
    id: 'BGC 220',
    name: 'Осушитель BGC 220',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1320,
    specs: [
      { maxPressure: 10, price: 794800 },
      { maxPressure: 16, price: 794800 }
    ]
  },
  {
    id: 'BGC 250',
    name: 'Осушитель BGC 250',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1500,
    specs: [
      { maxPressure: 10, price: 880000 },
      { maxPressure: 16, price: 880000 }
    ]
  },
  {
    id: 'BGC 320',
    name: 'Осушитель BGC 320',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1920,
    specs: [
      { maxPressure: 10, price: 1078700 },
      { maxPressure: 16, price: 1078700 }
    ]
  },
  {
    id: 'BGC 450',
    name: 'Осушитель BGC 450',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 2700,
    specs: [
      { maxPressure: 10, price: 1192200 },
      { maxPressure: 16, price: 1192200 }
    ]
  },
  {
    id: 'BGC 650',
    name: 'Осушитель BGC 650',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 3900,
    specs: [
      { maxPressure: 10, price: 1703100 },
      { maxPressure: 16, price: 1703100 }
    ]
  },
  {
    id: 'BGC 850',
    name: 'Осушитель BGC 850',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 5100,
    specs: [
      { maxPressure: 10, price: 2157300 },
      { maxPressure: 16, price: 2157300 }
    ]
  },
  {
    id: 'BGC 1000',
    name: 'Осушитель BGC 1000',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 6000,
    specs: [
      { maxPressure: 10, price: 2724900 },
      { maxPressure: 16, price: 2724900 }
    ]
  }
];

const filters = [
  {
    id: 'AAF0056',
    name: 'Фильтр AAF 0056',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 16900 * 3,
    flow: 60
  },
  {
    id: 'AAF0076',
    name: 'Фильтр AAF 0076',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 18400 * 3,
    flow: 78
  },
  {
    id: 'AAF0106',
    name: 'Фильтр AAF 0106',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 21000 * 3,
    flow: 120
  },
  {
    id: 'AAF0186',
    name: 'Фильтр AAF 0186',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 26800 * 3,
    flow: 198
  },
  {
    id: 'AAF0306',
    name: 'Фильтр AAF 0306',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 40400 * 3,
    flow: 335
  },
  {
    id: 'AAF0476',
    name: 'Фильтр AAF 0476',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 46700 * 3,
    flow: 510
  },
  {
    id: 'AAF0706',
    name: 'Фильтр AAF 0706',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 56100 * 3,
    flow: 780
  },
  {
    id: 'AAF0946',
    name: 'Фильтр AAF 0946',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 63900 * 3,
    flow: 1000
  },
  {
    id: 'AAF1506',
    name: 'Фильтр AAF 1506',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 96000 * 3,
    flow: 1500
  },
  {
    id: 'AAF1756',
    name: 'Фильтр AAF 1756',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 98100 * 3,
    flow: 1680
  },
  {
    id: 'AAF2006',
    name: 'Фильтр AAF 2006',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 127300 * 3,
    flow: 2160
  },
  {
    id: 'AAF2406',
    name: 'Фильтр AAF 2406',
    type: 'Трехступенчатый блок фильтров',
    url: '/assets/filtr.png',
    price: 156500 * 3,
    flow: 2760
  }
];

const dCompressors = [
  {
    id: 'VWZT-3/5-150',
    name: 'Дожимающий компрессор VWZT-3/5-150',
    type: 'Дожимающий компрессор для заправки баллонов',
    url: '/assets/dcompressor.png',
    price: 1520500,
    flow: 3
  },
  {
    id: 'VWZT-6/5-150',
    name: 'Дожимающий компрессор VWZT-6/5-150',
    type: 'Дожимающий компрессор для заправки баллонов',
    url: '/assets/dcompressor.png',
    price: 1596700,
    flow: 6
  },
  {
    id: 'WWZT-12/5-150',
    name: 'Дожимающий компрессор WWZT-12/5-150',
    type: 'Дожимающий компрессор для заправки баллонов',
    url: '/assets/dcompressor.png',
    price: 1898300,
    flow: 12
  },
  {
    id: 'WWZT-15/5-150',
    name: 'Дожимающий компрессор WWZT-15/5-150',
    type: 'Дожимающий компрессор для заправки баллонов',
    url: '/assets/dcompressor.png',
    price: 1920500,
    flow: 15
  },
  {
    id: 'WWZT-18/5-150',
    name: 'Дожимающий компрессор WWZT-18/5-150',
    type: 'Дожимающий компрессор для заправки баллонов',
    url: '/assets/dcompressor.png',
    price: 2171200,
    flow: 18
  },
  {
    id: 'WWZT-24/5-150',
    name: 'Дожимающий компрессор WWZT-24/5-150',
    type: 'Дожимающий компрессор для заправки баллонов',
    url: '/assets/dcompressor.png',
    price: 2278700,
    flow: 24
  },
  {
    id: 'HWZT-33/5-150',
    name: 'Дожимающий компрессор HWZT-33/5-150',
    type: 'Дожимающий компрессор для заправки баллонов',
    url: '/assets/dcompressor.png',
    price: 2537900,
    flow: 33
  }
];

export { compressors, dryers, filters, dCompressors }