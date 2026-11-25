const makeNitrogenGenerator = ({
  size,
  price,
  airReceiverL,
  airReceiverPrice,
  nitrogenReceiverL,
  nitrogenReceiverPrice,
  performance
}) => ({
  id: `N${size}`,
  model: `Генератор азота N-${size}`,
  url: "/assets/adsorber.png",
  price,

  equipment: {
    vResiver: {
      model: `Ресивер воздушный ${airReceiverL} литров`,
      url: "/assets/reciver.png",
      inputReceiverVolumeL: airReceiverL,
      price: airReceiverPrice
    },
    nResiver: {
      model: `Ресивер азотный ${nitrogenReceiverL} литров`,
      url: "/assets/reciver.png",
      outputReceiverVolumeL: nitrogenReceiverL,
      price: nitrogenReceiverPrice
    }
  },

  performance: performance.map(([purity, airConsumptionNm3min]) => ({
    purity: `${purity}%`,
    productFlowNm3h: size,
    airConsumptionNm3min
  }))
});


const data = {
  
  nitrogen: {
    "N-10": makeNitrogenGenerator({
      size: 10,
      price: 982000,
      airReceiverL: 200,
      airReceiverPrice: 60300,
      nitrogenReceiverL: 400,
      nitrogenReceiverPrice: 80600,
      performance: [
        [99, 0.5],
        [99.5, 0.58],
        [99.9, 0.75],
        [99.99, 0.85],
        [99.999, 2.17]
      ]
    }),

    "N-20": makeNitrogenGenerator({
      size: 20,
      price: 1133000,
      airReceiverL: 400,
      airReceiverPrice: 80600,
      nitrogenReceiverL: 800,
      nitrogenReceiverPrice: 137300,
      performance: [
        [99, 1.0],
        [99.5, 1.17],
        [99.9, 1.5],
        [99.99, 1.7],
        [99.999, 4.33]
      ]
    }),

    "N-30": makeNitrogenGenerator({
      size: 30,
      price: 1133000,
      airReceiverL: 400,
      airReceiverPrice: 80600,
      nitrogenReceiverL: 800,
      nitrogenReceiverPrice: 137300,
      performance: [
        [99, 1.5],
        [99.5, 1.75],
        [99.9, 2.25],
        [99.99, 3.0],
        [99.999, 4.5]
      ]
    }),

    "N-40": makeNitrogenGenerator({
      size: 40,
      price: 1360000,
      airReceiverL: 500,
      airReceiverPrice: 80600,
      nitrogenReceiverL: 1000,
      nitrogenReceiverPrice: 137300 + 51800,
      performance: [
        [99, 2.0],
        [99.5, 2.3],
        [99.9, 3.0],
        [99.99, 4.0],
        [99.999, 8.7]
      ]
    }),

    "N-50": makeNitrogenGenerator({
      size: 50,
      price: 1586000,
      airReceiverL: 500,
      airReceiverPrice: 80600,
      nitrogenReceiverL: 1000,
      nitrogenReceiverPrice: 137300 + 51800,
      performance: [
        [99, 2.5],
        [99.5, 2.9],
        [99.9, 3.75],
        [99.99, 5.0],
        [99.999, 10.8]
      ]
    }),

    "N-60": makeNitrogenGenerator({
      size: 60,
      price: 1586000,
      airReceiverL: 500,
      airReceiverPrice: 80600,
      nitrogenReceiverL: 1000,
      nitrogenReceiverPrice: 137300 + 51800,
      performance: [
        [99, 3.0],
        [99.5, 3.5],
        [99.9, 4.5],
        [99.99, 6.0],
        [99.999, 13.0]
      ]
    }),

    "N-70": makeNitrogenGenerator({
      size: 70,
      price: 1964000,
      airReceiverL: 750,
      airReceiverPrice: 80600 + 60300,
      nitrogenReceiverL: 1500,
      nitrogenReceiverPrice: 137300 + 137300,
      performance: [
        [99, 3.5],
        [99.5, 4.1],
        [99.9, 5.25],
        [99.99, 7.0]
      ]
    }),

    "N-80": makeNitrogenGenerator({
      size: 80,
      price: 2266000,
      airReceiverL: 750,
      airReceiverPrice: 80600 + 60300,
      nitrogenReceiverL: 1500,
      nitrogenReceiverPrice: 137300 + 137300,
      performance: [
        [99, 4.0],
        [99.5, 4.7],
        [99.9, 6.0],
        [99.99, 8.0]
      ]
    }),

    "N-100": makeNitrogenGenerator({
      size: 100,
      price: 2454000,
      airReceiverL: 1000,
      airReceiverPrice: 137300 + 51800,
      nitrogenReceiverL: 2000,
      nitrogenReceiverPrice: 137300 + 137300 + 60300,
      performance: [
        [99, 5.0],
        [99.5, 5.8],
        [99.9, 7.5],
        [99.99, 10.0]
      ]
    }),

    "N-150": makeNitrogenGenerator({
      size: 150,
      price: 2870000,
      airReceiverL: 1500,
      airReceiverPrice: 137300 + 137300,
      nitrogenReceiverL: 3000,
      nitrogenReceiverPrice: 137300 + 137300 + 137300 + 80600,
      performance: [
        [99, 7.5],
        [99.5, 8.75],
        [99.9, 11.3],
        [99.99, 15.0]
      ]
    }),

    "N-200": makeNitrogenGenerator({
      size: 200,
      price: 3096000,
      airReceiverL: 2000,
      airReceiverPrice: 137300 + 137300 + 60300,
      nitrogenReceiverL: 4000,
      nitrogenReceiverPrice: 137300 * 4 + 80600,
      performance: [
        [99, 10.0],
        [99.5, 11.7],
        [99.9, 15.0],
        [99.99, 20.0]
      ]
    }),

    "N-250": makeNitrogenGenerator({
      size: 250,
      price: 4078000,
      airReceiverL: 3000,
      airReceiverPrice: 137300 + 137300 + 137300 + 80600,
      nitrogenReceiverL: 6000,
      nitrogenReceiverPrice: 137300 * 7,
      performance: [
        [99, 12.5],
        [99.5, 14.6],
        [99.9, 18.8]
      ]
    }),

    "N-300": makeNitrogenGenerator({
      size: 300,
      price: 4078000,
      airReceiverL: 3000,
      airReceiverPrice: 137300 + 137300 + 137300 + 80600,
      nitrogenReceiverL: 6000,
      nitrogenReceiverPrice: 137300 * 7,
      performance: [
        [99, 15.0],
        [99.5, 17.5],
        [99.9, 22.5]
      ]
    }),

    "N-350": makeNitrogenGenerator({
      size: 350,
      price: 4833000,
      airReceiverL: 4000,
      airReceiverPrice: 137300 * 4 + 80600,
      nitrogenReceiverL: 8000,
      nitrogenReceiverPrice: 137300 * 9,
      performance: [
        [99, 17.5],
        [99.5, 20.4],
        [99.9, 26.3]
      ]
    }),

    "N-400": makeNitrogenGenerator({
      size: 400,
      price: 4833000,
      airReceiverL: 4000,
      airReceiverPrice: 137300 * 4 + 80600,
      nitrogenReceiverL: 8000,
      nitrogenReceiverPrice: 137300 * 9,
      performance: [
        [99, 20.0],
        [99.5, 23.3],
        [99.9, 30.0]
      ]
    }),

    "N-500": makeNitrogenGenerator({
      size: 500,
      price: 5965000,
      airReceiverL: 5000,
      airReceiverPrice: 137300 * 5 + 80600,
      nitrogenReceiverL: 10000,
      nitrogenReceiverPrice: 137300 * 11 + 51800,
      performance: [
        [99, 25.0],
        [99.5, 29.2],
        [99.9, 37.5]
      ]
    }),

    "N-600": makeNitrogenGenerator({
      size: 600,
      price: 7098000,
      airReceiverL: 6000,
      airReceiverPrice: 137300 * 7,
      nitrogenReceiverL: 12000,
      nitrogenReceiverPrice: 137300 * 13 + 80600,
      performance: [
        [99, 30.0],
        [99.5, 35.0],
        [99.9, 45.0]
      ]
    }),

    "N-800": makeNitrogenGenerator({
      size: 800,
      price: 10495000,
      airReceiverL: 8000,
      airReceiverPrice: 137300 * 9,
      nitrogenReceiverL: 16000,
      nitrogenReceiverPrice: 137300 * 18,
      performance: [
        [99, 40.0],
        [99.5, 46.7],
        [99.9, 60.0]
      ]
    }),

    "N-1000": makeNitrogenGenerator({
      size: 1000,
      price: 11930000,
      airReceiverL: 9000,
      airReceiverPrice: 137300 * 10,
      nitrogenReceiverL: 18000,
      nitrogenReceiverPrice: 137300 * 20,
      performance: [
        [99, 50.0],
        [99.5, 58.3],
        [99.9, 75.0]
      ]
    })
  },

  oxygen: {
    "O-3": {
      "id": "O3",
      "model": "Генератор кислорода O-3",
      "url": "/assets/adsorber.png",
      "price": 635000,
      "airNeed": 0.92,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 500 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 0.5 * 1000,
          "price": 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 500 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 0.5 * 1000,
          "price": 117000
        },
        "productivity": [
          { "purity": "90%", "value": 3 }
        ]
      }
    },
    "O-5": {
      "id": "O5",
      "model": "Генератор кислорода O-5",
      "url": "/assets/adsorber.png",
      "price": 888000,
      "airNeed": 1.29,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 500 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 0.5 * 1000,
          "price": 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 500 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 0.5 * 1000,
          "price": 117000
        },
        "productivity": [
          { "purity": "90%", "value": 5 },
          { "purity": "93%", "value": 4.45 }
        ]
      }
    },
    "O-7": {
      "id": "O7",
      "model": "Генератор кислорода O-7",
      "url": "/assets/adsorber.png",
      "price": 1001000,
      "airNeed": 1.99,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 750 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 0.75 * 1000,
          "price": 80600 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 750 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 0.75 * 1000,
          "price": 117000 + 102900

        },
        "productivity": [
          { "purity": "90%", "value": 7 }
        ]
      }
    },
    "O-10": {
      "id": "O10",
      "model": "Генератор кислорода O-10",
      "url": "/assets/adsorber.png",
      "price": 1133000,
      "airNeed": 2.51,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 750 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 0.75 * 1000,
          "price": 80600 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 750 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 0.75 * 1000,
          "price": 117000 + 102900
        },
        "productivity": [
          { "purity": "90%", "value": 10 },
          { "purity": "93%", "value": 8.9 }
        ]
      }
    },
    "O-12": {
      "id": "O12",
      "model": "Генератор кислорода O-12",
      "url": "/assets/adsorber.png",
      "price": 1209000,
      "airNeed": 3.11,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 1.0 * 1000,
          "price": 137300 + 51800
        },
        "oResiver": {
          "model": "Ресивер кислородный 1000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 1.0 * 1000,
          "price": 189000 + 71250
        },
        "productivity": [
          { "purity": "90%", "value": 12 }
        ]
      }
    },
    "O-15": {
      "id": "O15",
      "model": "Генератор кислорода O-15",
      "url": "/assets/adsorber.png",
      "price": 1360000,
      "airNeed": 3.63,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 1.0 * 1000,
          "price": 137300 + 51800
        },
        "oResiver": {
          "model": "Ресивер кислородный 1000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 1.0 * 1000,
          "price": 189000 + 71250
        },
        "productivity": [
          { "purity": "90%", "value": 15 },
          { "purity": "93%", "value": 13.35 }
        ]
      }
    },
    "O-20": {
      "id": "O20",
      "model": "Генератор кислорода O-20",
      "url": "/assets/adsorber.png",
      "price": 1586000,
      "airNeed": 5.07,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1500 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 1.5 * 1000,
          "price": 137300 * 2
        },
        "oResiver": {
          "model": "Ресивер кислородный 1500 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 1.5 * 1000,
          "price": 189000 + 117000 + 71250
        },
        "productivity": [
          { "purity": "90%", "value": 20 },
          { "purity": "93%", "value": 17.8 }
        ]
      }
    },
    "O-25": {
      "id": "O25",
      "model": "Генератор кислорода O-25",
      "url": "/assets/adsorber.png",
      "price": 1964000,
      "airNeed": 6.2,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 2000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 2.0 * 1000,
          "price": 137300 * 2 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 2000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 2.0 * 1000,
          "price": 189000 + 189000 + 102900
        },
        "productivity": [
          { "purity": "90%", "value": 25 }
        ]
      }
    },
    "O-30": {
      "id": "O30",
      "model": "Генератор кислорода O-30",
      "url": "/assets/adsorber.png",
      "price": 2190000,
      "airNeed": 7.51,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 2000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 2.0 * 1000,
          "price": 137300 * 2 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 2000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 2.0 * 1000,
          "price": 189000 + 189000 + 102900
        },
        "productivity": [
          { "purity": "90%", "value": 30 },
          { "purity": "93%", "value": 26.7 }
        ]
      }
    },
    "O-40": {
      "id": "O40",
      "model": "Генератор кислорода O-40",
      "url": "/assets/adsorber.png",
      "price": 2454000,
      "airNeed": 9.95,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 3000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 3.0 * 1000,
          "price": 137300 * 3 + 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 3000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 3.0 * 1000,
          "price": 189000 + 189000 + 189000 + 117000
        },
        "productivity": [
          { "purity": "90%", "value": 40 },
          { "purity": "93%", "value": 35.6 }
        ]
      }
    },
    "O-50": {
      "id": "O50",
      "model": "Генератор кислорода O-50",
      "url": "/assets/adsorber.png",
      "price": 2832000,
      "airNeed": 12.19,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 4000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 4.0 * 1000,
          "price": 137300 * 4 + 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 4000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 4.0 * 1000,
          "price": 189000 + 189000 + 189000 + 189000 + 117000
        },
        "productivity": [
          { "purity": "90%", "value": 50 },
          { "purity": "93%", "value": 44.5 }
        ]
      }
    },
    "O-60": {
      "id": "O60",
      "model": "Генератор кислорода O-60",
      "url": "/assets/adsorber.png",
      "price": 3096000,
      "airNeed": 16.68,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 5000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 5.0 * 1000,
          "price": 137300 * 5 + 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 5000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 5.0 * 1000,
          "price": 189000 + 189000 + 189000 + 189000 + 189000 + 117000
        },
        "productivity": [
          { "purity": "90%", "value": 60 },
          { "purity": "93%", "value": 53.4 }
        ]
      }
    },
    "O-75": {
      "id": "O75",
      "model": "Генератор кислорода O-75",
      "url": "/assets/adsorber.png",
      "price": 3587000,
      "airNeed": 19.32,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 6000 литров",
          "url": "/assets/reciver.png",
          "inputReceiverVolumeL": 6.0 * 1000,
          "price": 137300 * 7
        },
        "oResiver": {
          "model": "Ресивер кислородный 6000 литров",
          "url": "/assets/reciver.png",
          "outputReceiverVolumeL": 6.0 * 1000,
          "price": 189000 * 7
        },
        "productivity": [
          { "purity": "90%", "value": 75 }
        ]
      }
    }
  },
 
  dKompressor: {
    "dcomp": {
      "model": "Дожимной компрессор",
      "url": "/assets/dcompressor.png",
      "price": 0,
      "pressure": 10
    }
  },
  rampa: {
    "ramp-20": {
      "model": "Заправочная рампа 2*3 баллона",
      "url": "/assets/rampa.png",
      "price": 248000,
      "capacity": 6
    },
    "ramp-45": {
      "model": "Заправочная рампа 5 баллонов",
      "url": "/assets/rampa.png",
      "price": 0,
      "capacity": 5
    },
    "ramp-65": {
      "model": "Заправочная рампа 10 баллонов",
      "url": "/assets/rampa.png",
      "price": 0,
      "capacity": 10
    },
  },
  filtr: {
    "filtr": {
      "id": "FILTR",
      model: "Трехступенчатый блок фильтров",
      url: "/filtr.png",
      price: 0,
      capacity: 1
    }
  }
}


export default data;