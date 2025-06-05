const compressors = [
    {
      id: 'BGV5',
      name: 'Масляный винтовой компрессор BGV5',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 140000, // 11471 CNY × 12 = 137652 ≈ 140000 RUB
      specs: [
        { pressure: 7, minFlow: 0.41, maxFlow: 0.92, power: 5.5 },
        { pressure: 8, minFlow: 0.40, maxFlow: 0.87, power: 5.5 },
        { pressure: 10, minFlow: 0.35, maxFlow: 0.70, power: 5.5 }
      ]
    },
    {
      id: 'BGV7',
      name: 'Масляный винтовой компрессор BGV7',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 140000, // 11619 CNY × 12 = 139428 ≈ 140000 RUB
      specs: [
        { pressure: 7, minFlow: 0.40, maxFlow: 1.29, power: 7.5 },
        { pressure: 8, minFlow: 0.38, maxFlow: 1.28, power: 7.5 },
        { pressure: 10, minFlow: 0.27, maxFlow: 0.92, power: 7.5 }
      ]
    },
    {
      id: 'BGV11',
      name: 'Масляный винтовой компрессор BGV11',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 180000, // 14310 CNY × 12 = 171720 ≈ 180000 RUB
      specs: [
        { pressure: 7, minFlow: 0.55, maxFlow: 1.99, power: 11 },
        { pressure: 8, minFlow: 0.82, maxFlow: 1.78, power: 11 },
        { pressure: 10, minFlow: 0.75, maxFlow: 1.54, power: 11 },
        { pressure: 12.5, minFlow: 0.40, maxFlow: 1.04, power: 11 }
      ]
    },
    {
      id: 'BGV15',
      name: 'Масляный винтовой компрессор BGV15',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 220000, // 17939 CNY × 12 = 215268 ≈ 220000 RUB
      specs: [
        { pressure: 7, minFlow: 0.74, maxFlow: 2.51, power: 15 },
        { pressure: 8, minFlow: 0.68, maxFlow: 2.28, power: 15 },
        { pressure: 10, minFlow: 0.97, maxFlow: 2.06, power: 15 },
        { pressure: 12.5, minFlow: 0.51, maxFlow: 1.66, power: 15 }
      ]
    },
    {
      id: 'BGV18',
      name: 'Масляный винтовой компрессор BGV18',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 270000, // 21977 CNY × 12 = 263724 ≈ 270000 RUB
      specs: [
        { pressure: 7, minFlow: 0.93, maxFlow: 3.11, power: 18.5 },
        { pressure: 8, minFlow: 0.90, maxFlow: 3.01, power: 18.5 },
        { pressure: 10, minFlow: 0.81, maxFlow: 2.71, power: 18.5 },
        { pressure: 12.5, minFlow: 0.68, maxFlow: 2.36, power: 18.5 }
      ]
    },
    {
      id: 'BGV22',
      name: 'Масляный винтовой компрессор BGV22',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 250000, // 20504 CNY × 12 = 246048 ≈ 250000 RUB
      specs: [
        { pressure: 7, minFlow: 1.67, maxFlow: 3.63, power: 22 },
        { pressure: 8, minFlow: 1.67, maxFlow: 3.53, power: 22 },
        { pressure: 10, minFlow: 1.54, maxFlow: 3.12, power: 22 },
        { pressure: 12.5, minFlow: 0.81, maxFlow: 2.76, power: 22 }
      ]
    },
    {
      id: 'BGV30',
      name: 'Масляный винтовой компрессор BGV30',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 320000, // 25936 CNY × 12 = 311232 ≈ 320000 RUB
      specs: [
        { pressure: 7, minFlow: 2.42, maxFlow: 5.07, power: 30 },
        { pressure: 8, minFlow: 1.44, maxFlow: 4.97, power: 30 },
        { pressure: 10, minFlow: 1.25, maxFlow: 4.88, power: 30 },
        { pressure: 12.5, minFlow: 1.92, maxFlow: 3.23, power: 30 }
      ]
    },
    {
      id: 'BGV37',
      name: 'Масляный винтовой компрессор BGV37',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 360000, // 29744 CNY × 12 = 356928 ≈ 360000 RUB
      specs: [
        { pressure: 7, minFlow: 1.90, maxFlow: 6.20, power: 37 },
        { pressure: 8, minFlow: 3.16, maxFlow: 5.93, power: 37 },
        { pressure: 10, minFlow: 2.71, maxFlow: 5.41, power: 37 },
        { pressure: 12.5, minFlow: 1.31, maxFlow: 4.40, power: 37 }
      ]
    },
    {
      id: 'BGV45',
      name: 'Масляный винтовой компрессор BGV45',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 400000, // 32789 CNY × 12 = 393468 ≈ 400000 RUB
      specs: [
        { pressure: 7, minFlow: 2.31, maxFlow: 7.51, power: 45 },
        { pressure: 8, minFlow: 2.19, maxFlow: 7.36, power: 45 },
        { pressure: 10, minFlow: 3.34, maxFlow: 5.87, power: 45 },
        { pressure: 12.5, minFlow: 1.49, maxFlow: 4.90, power: 45 }
      ]
    },
    {
      id: 'BGV55',
      name: 'Масляный винтовой компрессор BGV55',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 600000, // 49801 CNY × 12 = 597612 ≈ 600000 RUB
      specs: [
        { pressure: 7, minFlow: 4.08, maxFlow: 9.95, power: 55 },
        { pressure: 8, minFlow: 4.69, maxFlow: 9.48, power: 55 },
        { pressure: 10, minFlow: 4.44, maxFlow: 8.68, power: 55 },
        { pressure: 12.5, minFlow: 3.62, maxFlow: 7.06, power: 55 }
      ]
    },
    {
      id: 'BGV75',
      name: 'Масляный винтовой компрессор BGV75',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 700000, // 57510 CNY × 12 = 690120 ≈ 700000 RUB
      specs: [
        { pressure: 7, minFlow: 4.89, maxFlow: 12.19, power: 75 },
        { pressure: 8, minFlow: 5.92, maxFlow: 12.09, power: 75 },
        { pressure: 10, minFlow: 5.25, maxFlow: 10.66, power: 75 },
        { pressure: 12.5, minFlow: 3.39, maxFlow: 8.68, power: 75 }
      ]
    },
    {
      id: 'BGV90',
      name: 'Масляный винтовой компрессор BGV90',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 1200000, // 96720 CNY × 12 = 1160640 ≈ 1200000 RUB
      specs: [
        { pressure: 7, minFlow: 5.80, maxFlow: 16.68, power: 90 },
        { pressure: 8, minFlow: 6.35, maxFlow: 16.38, power: 90 },
        { pressure: 10, minFlow: 4.81, maxFlow: 12.36, power: 90 },
        { pressure: 12.5, minFlow: 4.77, maxFlow: 12.25, power: 90 }
      ]
    },
    {
      id: 'BGV110',
      name: 'Масляный винтовой компрессор BGV110',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 1300000, // 107886 CNY × 12 = 1294632 ≈ 1300000 RUB
      specs: [
        { pressure: 7, minFlow: 7.60, maxFlow: 19.32, power: 110 },
        { pressure: 8, minFlow: 7.43, maxFlow: 18.62, power: 110 },
        { pressure: 10, minFlow: 6.28, maxFlow: 15.78, power: 110 },
        { pressure: 12.5, minFlow: 5.01, maxFlow: 13.63, power: 110 }
      ]
    },
    {
      id: 'BGV132',
      name: 'Масляный винтовой компрессор BGV132',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 1300000, // 108313 CNY × 12 = 1299756 ≈ 1300000 RUB
      specs: [
        { pressure: 7, minFlow: 7.94, maxFlow: 22.68, power: 132 },
        { pressure: 8, minFlow: 7.92, maxFlow: 22.63, power: 132 },
        { pressure: 10, minFlow: 6.94, maxFlow: 19.82, power: 132 },
        { pressure: 12.5, minFlow: 5.61, maxFlow: 16.04, power: 132 }
      ]
    },
    {
      id: 'BGV160',
      name: 'Масляный винтовой компрессор BGV160',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 2000000, // 166257 CNY × 12 = 1995084 ≈ 2000000 RUB
      specs: [
        { pressure: 7, minFlow: 9.89, maxFlow: 28.24, power: 160 },
        { pressure: 8, minFlow: 9.63, maxFlow: 27.52, power: 160 },
        { pressure: 10, minFlow: 7.64, maxFlow: 21.82, power: 160 },
        { pressure: 12.5, minFlow: 6.61, maxFlow: 18.89, power: 160 }
      ]
    },
    {
      id: 'BGV185',
      name: 'Масляный винтовой компрессор BGV185',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 2100000, // 170477 CNY × 12 = 2045724 ≈ 2100000 RUB
      specs: [
        { pressure: 7, minFlow: 11.37, maxFlow: 32.49, power: 185 },
        { pressure: 8, minFlow: 11.21, maxFlow: 32.02, power: 185 },
        { pressure: 10, minFlow: 9.54, maxFlow: 27.25, power: 185 },
        { pressure: 12.5, minFlow: 7.78, maxFlow: 22.23, power: 185 }
      ]
    },
    {
      id: 'BGV200',
      name: 'Масляный винтовой компрессор BGV200',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 2300000, // 190326 CNY × 12 = 2283912 ≈ 2300000 RUB
      specs: [
        { pressure: 7, minFlow: 13.09, maxFlow: 37.40, power: 200 },
        { pressure: 8, minFlow: 12.56, maxFlow: 35.87, power: 200 },
        { pressure: 10, minFlow: 10.19, maxFlow: 29.13, power: 200 },
        { pressure: 12.5, minFlow: 9.43, maxFlow: 26.94, power: 200 }
      ]
    },
    {
      id: 'BGV220',
      name: 'Масляный винтовой компрессор BGV220',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 2500000, // 201855 CNY × 12 = 2422260 ≈ 2500000 RUB
      specs: [
        { pressure: 7, minFlow: 16.60, maxFlow: 42.74, power: 220 },
        { pressure: 8, minFlow: 15.24, maxFlow: 40.61, power: 220 },
        { pressure: 10, minFlow: 12.75, maxFlow: 32.83, power: 220 },
        { pressure: 12.5, minFlow: 11.28, maxFlow: 28.49, power: 220 }
      ]
    },
    {
      id: 'BGV250',
      name: 'Масляный винтовой компрессор BGV250',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 2600000, // 215616 CNY × 12 = 2587392 ≈ 2600000 RUB
      specs: [
        { pressure: 7, minFlow: 17.56, maxFlow: 45.22, power: 250 },
        { pressure: 8, minFlow: 17.52, maxFlow: 45.12, power: 250 },
        { pressure: 10, minFlow: 15.95, maxFlow: 41.08, power: 250 },
        { pressure: 12.5, minFlow: 11.73, maxFlow: 30.21, power: 250 }
      ]
    },
    {
      id: 'BGV280',
      name: 'Масляный винтовой компрессор BGV280',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 3200000, // 261484 CNY × 12 = 3137808 ≈ 3200000 RUB
      specs: [
        { pressure: 7, minFlow: 17.99, maxFlow: 51.41, power: 280 },
        { pressure: 8, minFlow: 17.57, maxFlow: 50.18, power: 280 },
        { pressure: 10, minFlow: 15.63, maxFlow: 44.66, power: 280 },
        { pressure: 12.5, minFlow: 11.59, maxFlow: 33.12, power: 280 }
      ]
    },
    {
      id: 'BGV315',
      name: 'Масляный винтовой компрессор BGV315',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 3600000, // 293834 CNY × 12 = 3526008 ≈ 3600000 RUB
      specs: [
        { pressure: 7, minFlow: 19.32, maxFlow: 55.21, power: 315 },
        { pressure: 8, minFlow: 18.87, maxFlow: 53.89, power: 315 },
        { pressure: 10, minFlow: 16.88, maxFlow: 48.24, power: 315 },
        { pressure: 12.5, minFlow: 15.02, maxFlow: 42.92, power: 315 }
      ]
    },
    {
      id: 'BGV355',
      name: 'Масляный винтовой компрессор BGV355',
      type: 'Частотно-регулируемый винтовой компрессор с ПМД',
      url: '/compressor.png',
      price: 3600000, // 298866 CNY × 12 = 3586392 ≈ 3600000 RUB
      specs: [
        { pressure: 7, minFlow: 21.39, maxFlow: 61.13, power: 355 },
        { pressure: 8, minFlow: 21.15, maxFlow: 60.41, power: 355 },
        { pressure: 10, minFlow: 18.37, maxFlow: 52.50, power: 355 },
        { pressure: 12.5, minFlow: 16.18, maxFlow: 45.57, power: 355 }
      ]
    }
  ];
  
  const dryers = [
    {
      id: 'BGD-1HTF',
      name: 'Осушитель BGD-1HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 5200 * 12,
      flow: 1.2,
      voltage: '220/50',
      power: 0.85
    },
    {
      id: 'BGD-2HTF',
      name: 'Осушитель BGD-2HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 7910 * 12,
      flow: 2.4,
      voltage: '220/50',
      power: 0.85
    },
    {
      id: 'BGD-3HTF',
      name: 'Осушитель BGD-3HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 8850 * 12,
      flow: 3.8,
      voltage: '220/50',
      power: 0.9
    },
    {
      id: 'BGD-6HTF',
      name: 'Осушитель BGD-6HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 11330 * 12,
      flow: 6.5,
      voltage: '220/50',
      power: 1.1
    },
    {
      id: 'BGD-8HTF',
      name: 'Осушитель BGD-8HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 12540 * 12,
      flow: 8.5,
      voltage: '220/50',
      power: 1.8
    },
    {
      id: 'BGD-10HTF',
      name: 'Осушитель BGD-10HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 16640 * 12,
      flow: 10.7,
      voltage: '380/50',
      power: 2.5
    },
    {
      id: 'BGD-13HTF',
      name: 'Осушитель BGD-13HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 17300 * 12,
      flow: 13.5,
      voltage: '380/50',
      power: 2.5
    },
    {
      id: 'BGD-15HTF',
      name: 'Осушитель BGD-15HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 24560 * 12,
      flow: 17,
      voltage: '380/50',
      power: 3
    },
    {
      id: 'BGD-20HTF',
      name: 'Осушитель BGD-20HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 29120 * 12,
      flow: 23,
      voltage: '380/50',
      power: 4
    },
    {
      id: 'BGD-25HTF',
      name: 'Осушитель BGD-25HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 39600 * 12,
      flow: 28,
      voltage: '380/50',
      power: 4.5
    },
    {
      id: 'BGD-30HTF',
      name: 'Осушитель BGD-30HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 45520 * 12,
      flow: 33,
      voltage: '380/50',
      power: 6.5
    },
    {
      id: 'BGD-40HTF',
      name: 'Осушитель BGD-40HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 58000 * 12,
      flow: 45,
      voltage: '380/50',
      power: 8.8
    },
    {
      id: 'BGD-50HTF',
      name: 'Осушитель BGD-50HTF',
      type: 'Рефрижираторный осушитель',
      url: '/osyshitel.png',
      price: 69540 * 12,
      flow: 55,
      voltage: '380/50',
      power: 10.2
    }
  ]
  
  export { compressors, dryers }