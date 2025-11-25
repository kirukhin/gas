//components/equipment.js

const compressors = [
  {
    id: 'BGV5',
    name: 'Масляный винтовой компрессор BGV5',
    type: 'Частотно-регулируемый винтовой компрессор с ПМД',
    url: '/assets/compressor.png',
    price: 340700,
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
    url: '/assets/compressor.png',
    price: 345100,
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
    url: '/assets/compressor.png',
    price: 425000,
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
    url: '/assets/compressor.png',
    price: 532800,
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
    url: '/assets/compressor.png',
    price: 652700,
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
    url: '/assets/compressor.png',
    price: 609000,
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
    url: '/assets/compressor.png',
    price: 770300,
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
    url: '/assets/compressor.png',
    price: 883400,
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
    url: '/assets/compressor.png',
    price: 973800,
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
    url: '/assets/compressor.png',
    price: 1479100,
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
    url: '/assets/compressor.png',
    price: 1708000,
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
    id: 'DA 130',
    name: 'Осушитель DryAir DA 130',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 130.2,
    specs: [
      { maxPressure: 10, price: 798600 },
      { maxPressure: 16, price: 971731 }
    ]
  },
  {
    id: 'DA 185',
    name: 'Осушитель DryAir DA 185',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 184.8,
    specs: [
      { maxPressure: 10, price: 871200 },
      { maxPressure: 16, price: 1098847 }
    ]
  },
  {
    id: 'DA 250',
    name: 'Осушитель DryAir DA 250',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 250.2,
    specs: [
      { maxPressure: 10, price: 945120 },
      { maxPressure: 16, price: 1220314 }
    ]
  },
  {
    id: 'DA 300',
    name: 'Осушитель DryAir DA 300',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 300.0,
    specs: [
      { maxPressure: 10, price: 1019040 },
      { maxPressure: 16, price: 1302233 }
    ]
  },
  {
    id: 'DA 360',
    name: 'Осушитель DryAir DA 360',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 360.0,
    specs: [
      { maxPressure: 10, price: 1141800 },
      { maxPressure: 16, price: 1502794 }
    ]
  },
  {
    id: 'DA 440',
    name: 'Осушитель DryAir DA 440',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 439.8,
    specs: [
      { maxPressure: 10, price: 1475100 },
      { maxPressure: 16, price: 1954762 }
    ]
  },
  {
    id: 'DA 575',
    name: 'Осушитель DryAir DA 575',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 574.8,
    specs: [
      { maxPressure: 10, price: 1782000 },
      { maxPressure: 16, price: 2331872 }
    ]
  },
  {
    id: 'DA 680',
    name: 'Осушитель DryAir DA 680',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 679.8,
    specs: [
      { maxPressure: 10, price: 1900800 },
      { maxPressure: 16, price: 2556444 }
    ]
  },
  {
    id: 'DA 850',
    name: 'Осушитель DryAir DA 850',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 850.2,
    specs: [
      { maxPressure: 10, price: 2081640 },
      { maxPressure: 16, price: 2781016 }
    ]
  },
  {
    id: 'DA 1000',
    name: 'Осушитель DryAir DA 1000',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1000.2,
    specs: [
      { maxPressure: 10, price: 2415600 },
      { maxPressure: 16, price: 3084682 }
    ]
  },
  {
    id: 'DA 1250',
    name: 'Осушитель DryAir DA 1250',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1249.8,
    specs: [
      { maxPressure: 10, price: 2653200 },
      { maxPressure: 16, price: 3268294 }
    ]
  },
  {
    id: 'DA 1500',
    name: 'Осушитель DryAir DA 1500',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1500.0,
    specs: [
      { maxPressure: 10, price: 2805000 },
      { maxPressure: 16, price: 3560660 }
    ]
  },
  {
    id: 'DA 1800',
    name: 'Осушитель DryAir DA 1800',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 1800.0,
    specs: [
      { maxPressure: 10, price: 3465000 },
      { maxPressure: 16, price: 4396801 }
    ]
  },
  {
    id: 'DA 2200',
    name: 'Осушитель DryAir DA 2200',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 2200.2,
    specs: [
      { maxPressure: 10, price: 3920400 },
      { maxPressure: 16, price: 4771087 }
    ]
  },
  {
    id: 'DA 2700',
    name: 'Осушитель DryAir DA 2700',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 2700.0,
    specs: [
      { maxPressure: 10, price: 4323000 },
      { maxPressure: 16, price: 5259778 }
    ]
  },
  {
    id: 'DA 3200',
    name: 'Осушитель DryAir DA 3200',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 3199.8,
    specs: [
      { maxPressure: 10, price: 5306400 },
      { maxPressure: 16, price: 6576134 }
    ]
  },
  {
    id: 'DA 3600',
    name: 'Осушитель DryAir DA 3600',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 3600.0,
    specs: [
      { maxPressure: 10, price: 6072000 },
      { maxPressure: 16, price: 7511143 }
    ]
  },
  {
    id: 'DA 4400',
    name: 'Осушитель DryAir DA 4400',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 4399.8,
    specs: [
      { maxPressure: 10, price: 6811200 },
      { maxPressure: 16, price: 8487112 }
    ]
  },
  {
    id: 'DA 5000',
    name: 'Осушитель DryAir DA 5000',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 4999.8,
    specs: [
      { maxPressure: 10, price: 7220400 },
      { maxPressure: 16, price: 9088794 }
    ]
  },
  {
    id: 'DA 6300',
    name: 'Осушитель DryAir DA 6300',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 6300.0,
    specs: [
      { maxPressure: 10, price: 8131200 },
      { maxPressure: 16, price: 10214477 }
    ]
  },
  {
    id: 'DA 7200',
    name: 'Осушитель DryAir DA 7200',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 7200.0,
    specs: [
      { maxPressure: 10, price: 8896800 },
      { maxPressure: 16, price: 11340160 }
    ]
  },
  {
    id: 'DA 8800',
    name: 'Осушитель DryAir DA 8800',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 8800.2,
    specs: [
      { maxPressure: 10, price: 10408200 },
      { maxPressure: 16, price: 13217239 }
    ]
  },
  {
    id: 'DA 10800',
    name: 'Осушитель DryAir DA 10800',
    type: 'Адсорбционный осушитель',
    url: '/assets/osyshitel.png',
    flow: 10800.0,
    specs: [
      { maxPressure: 10, price: 12084600 },
      { maxPressure: 16, price: 15321715 }
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