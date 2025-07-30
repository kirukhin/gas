const data = {
  nitrogen: {
    "N-15": {
      "id": "N15",
      "model": "Генератор азота N-15",
      "url": "/adsorber.png",
      "price": 2661100,
      "airNeed": 0.75,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 200 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.2 * 1000,
          "price": 60300
        },
        "nResiver": {
          "model": "Ресивер азотный 400 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 0.4 * 1000,
          "price": 80600
        },
        "productivity": [
          { "purity": "99.9995%", "value": 3.5 },
          { "purity": "99.999%", "value": 4.5 },
          { "purity": "99.995%", "value": 6 },
          { "purity": "99.99%", "value": 7 },
          { "purity": "99.95%", "value": 10 },
          { "purity": "99.9%", "value": 11 },
          { "purity": "99.5%", "value": 15 },
          { "purity": "99%", "value": 18 },
          { "purity": "98%", "value": 22 },
          { "purity": "97%", "value": 25 },
          { "purity": "95%", "value": 28 }
        ]
      }
    },
    "N-30": {
      "id": "N30",
      "model": "Генератор азота N-30",
      "url": "/adsorber.png",
      "price": 2895800,
      "airNeed": 1.5,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 400 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.4 * 1000,
          "price": 80600
        },
        "nResiver": {
          "model": "Ресивер азотный 800 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 0.8 * 1000,
          "price": 137300
        },
        "productivity": [
          { "purity": "99.9995%", "value": 7 },
          { "purity": "99.999%", "value": 9 },
          { "purity": "99.995%", "value": 12 },
          { "purity": "99.99%", "value": 14 },
          { "purity": "99.95%", "value": 19 },
          { "purity": "99.9%", "value": 22 },
          { "purity": "99.5%", "value": 30 },
          { "purity": "99%", "value": 36 },
          { "purity": "98%", "value": 43 },
          { "purity": "97%", "value": 49 },
          { "purity": "95%", "value": 56 }
        ]
      }
    },
    "N-45": {
      "id": "N45",
      "model": "Генератор азота N-45",
      "url": "/adsorber.png",
      "price": 3112600,
      "airNeed": 2.25,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 500 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.5 * 1000,
          "price": 80600
        },
        "nResiver": {
          "model": "Ресивер азотный 1000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 1.0 * 1000,
          "price": 137300 + 51800
        },
        "productivity": [
          { "purity": "99.9995%", "value": 10 },
          { "purity": "99.999%", "value": 12 },
          { "purity": "99.995%", "value": 18 },
          { "purity": "99.99%", "value": 21 },
          { "purity": "99.95%", "value": 28 },
          { "purity": "99.9%", "value": 33 },
          { "purity": "99.5%", "value": 45 },
          { "purity": "99%", "value": 52 },
          { "purity": "98%", "value": 63 },
          { "purity": "97%", "value": 72 },
          { "purity": "95%", "value": 82 }
        ]
      }
    },
    "N-60": {
      "id": "N60",
      "model": "Генератор азота N-60",
      "url": "/adsorber.png",
      "price": 3365000,
      "airNeed": 3,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 500 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.5 * 1000,
          "price": 80600
        },
        "nResiver": {
          "model": "Ресивер азотный 1000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 1.0 * 1000,
          "price": 137300 + 51800
        },
        "productivity": [
          { "purity": "99.9995%", "value": 13 },
          { "purity": "99.999%", "value": 17 },
          { "purity": "99.995%", "value": 24 },
          { "purity": "99.99%", "value": 28 },
          { "purity": "99.95%", "value": 37 },
          { "purity": "99.9%", "value": 44 },
          { "purity": "99.5%", "value": 60 },
          { "purity": "99%", "value": 70 },
          { "purity": "98%", "value": 85 },
          { "purity": "97%", "value": 97 },
          { "purity": "95%", "value": 110 }
        ]
      }
    },
    "N-75": {      
      "id": "N75",
      "model": "Генератор азота N-75",
      "url": "/adsorber.png",
      "price": 3668000,
      "airNeed": 3.75,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 750 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.75 * 1000,
          "price": 80600 + 60300
        },
        "nResiver": {
          "model": "Ресивер азотный 1500 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 1.5 * 1000,
          "price": 137300 + 137300
        },
        "productivity": [
          { "purity": "99.9995%", "value": 17 },
          { "purity": "99.999%", "value": 21 },
          { "purity": "99.995%", "value": 30 },
          { "purity": "99.99%", "value": 38 },
          { "purity": "99.95%", "value": 47 },
          { "purity": "99.9%", "value": 55 },
          { "purity": "99.5%", "value": 75 },
          { "purity": "99%", "value": 88 },
          { "purity": "98%", "value": 107 },
          { "purity": "97%", "value": 121 },
          { "purity": "95%", "value": 138 }
        ]
      }
    },
    "N-90": {
      "id": "N90",
      "model": "Генератор азота N-90",
      "url": "/adsorber.png",
      "price": 4036200,
      "airNeed": 4.5,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 750 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.75 * 1000,
          "price": 80600 + 60300
        },
        "nResiver": {
          "model": "Ресивер азотный 1500 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 1.5 * 1000,
          "price": 137300 + 137300
        },
        "productivity": [
          { "purity": "99.9995%", "value": 20 },
          { "purity": "99.999%", "value": 25 },
          { "purity": "99.995%", "value": 35 },
          { "purity": "99.99%", "value": 41 },
          { "purity": "99.95%", "value": 56 },
          { "purity": "99.9%", "value": 66 },
          { "purity": "99.5%", "value": 90 },
          { "purity": "99%", "value": 105 },
          { "purity": "98%", "value": 127 },
          { "purity": "97%", "value": 145 },
          { "purity": "95%", "value": 165 }
        ]
      }
    },
    "N-110": {
      "id": "N110",
      "model": "Генератор азота N-110",
      "url": "/adsorber.png",
      "price": 4241200,
      "airNeed": 5.5,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 1.0 * 1000,
          "price": 137300 + 51800
        },
        "nResiver": {
          "model": "Ресивер азотный 2000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 2.0 * 1000,
          "price": 137300 + 137300 + 60300
        },
        "productivity": [
          { "purity": "99.9995%", "value": 24 },
          { "purity": "99.999%", "value": 31 },
          { "purity": "99.995%", "value": 43 },
          { "purity": "99.99%", "value": 51 },
          { "purity": "99.95%", "value": 69 },
          { "purity": "99.9%", "value": 81 },
          { "purity": "99.5%", "value": 110 },
          { "purity": "99%", "value": 130 },
          { "purity": "98%", "value": 157 },
          { "purity": "97%", "value": 178 },
          { "purity": "95%", "value": 203 }
        ]
      }
    },
    "N-135": {
      "id": "N135",
      "model": "Генератор азота N-135",
      "url": "/adsorber.png",
      "price": 4570800,
      "airNeed": 6.5,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1500 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 1.5 * 1000,
          "price": 137300 + 137300
        },
        "nResiver": {
          "model": "Ресивер азотный 3000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 3.0 * 1000,
          "price": 137300 + 137300 + 137300 + 80600
        },
        "productivity": [
          { "purity": "99.9995%", "value": 30 },
          { "purity": "99.999%", "value": 38 },
          { "purity": "99.995%", "value": 53 },
          { "purity": "99.99%", "value": 62 },
          { "purity": "99.95%", "value": 84 },
          { "purity": "99.9%", "value": 99 },
          { "purity": "99.5%", "value": 135 },
          { "purity": "99%", "value": 159 },
          { "purity": "98%", "value": 192 },
          { "purity": "97%", "value": 219 },
          { "purity": "95%", "value": 248 }
        ]
      }
    },
    "N-165": {
      "id": "N165",
      "model": "Генератор азота N-165",
      "url": "/adsorber.png",
      "price": 4954000,
      "airNeed": 8,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1500 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 1.5 * 1000,
          "price": 137300 + 137300
        },
        "nResiver": {
          "model": "Ресивер азотный 3000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 3.0 * 1000,
          "price": 137300 + 137300 + 137300 + 80600
        },
        "productivity": [
          { "purity": "99.9995%", "value": 36 },
          { "purity": "99.999%", "value": 46 },
          { "purity": "99.995%", "value": 65 },
          { "purity": "99.99%", "value": 76 },
          { "purity": "99.95%", "value": 103 },
          { "purity": "99.9%", "value": 121 },
          { "purity": "99.5%", "value": 165 },
          { "purity": "99%", "value": 194 },
          { "purity": "98%", "value": 234 },
          { "purity": "97%", "value": 266 },
          { "purity": "95%", "value": 303 }
        ]
      }
    },
    "N-200": {
      "id": "N200",
      "model": "Генератор азота N-200",
      "url": "/adsorber.png",
      "price": 5381600,
      "airNeed": 9.5,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 2000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 2.0 * 1000,
          "price": 137300 + 137300 + 60300
        },
        "nResiver": {
          "model": "Ресивер азотный 4000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 4.0 * 1000,
          "price": 137300 * 4 + 80600
        },
        "productivity": [
          { "purity": "99.9995%", "value": 44 },
          { "purity": "99.999%", "value": 56 },
          { "purity": "99.995%", "value": 79 },
          { "purity": "99.99%", "value": 92 },
          { "purity": "99.95%", "value": 125 },
          { "purity": "99.9%", "value": 147 },
          { "purity": "99.5%", "value": 200 },
          { "purity": "99%", "value": 236 },
          { "purity": "98%", "value": 284 },
          { "purity": "97%", "value": 324 },
          { "purity": "95%", "value": 368 }
        ]
      }
    },
    "N-240": {
      "id": "N240",
      "model": "Генератор азота N-240",
      "url": "/adsorber.png",
      "price": 5648900,
      "airNeed": 11.5,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 2000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 2.0 * 1000,
          "price": 137300 + 137300 + 60300
        },
        "nResiver": {
          "model": "Ресивер азотный 4000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 4.0 * 1000,
          "price": 137300 * 4 + 80600
        },
        "productivity": [
          { "purity": "99.9995%", "value": 53 },
          { "purity": "99.999%", "value": 67 },
          { "purity": "99.995%", "value": 94 },
          { "purity": "99.99%", "value": 110 },
          { "purity": "99.95%", "value": 150 },
          { "purity": "99.9%", "value": 176 },
          { "purity": "99.5%", "value": 240 },
          { "purity": "99%", "value": 282 },
          { "purity": "98%", "value": 340 },
          { "purity": "97%", "value": 388 },
          { "purity": "95%", "value": 441 }
        ]
      }
    },
    "N-300": {
      "id": "N300",
      "model": "Генератор азота N-300",
      "url": "/adsorber.png",
      "price": 6144900,
      "airNeed": 14.5,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 3000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 3.0 * 1000,
          "price": 137300 + 137300 + 137300 + 80600
        },
        "nResiver": {
          "model": "Ресивер азотный 6000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 6.0 * 1000,
          "price": 137300 * 7
        },
        "productivity": [
          { "purity": "99.9995%", "value": 66 },
          { "purity": "99.999%", "value": 84 },
          { "purity": "99.995%", "value": 118 },
          { "purity": "99.99%", "value": 138 },
          { "purity": "99.95%", "value": 186 },
          { "purity": "99.9%", "value": 221 },
          { "purity": "99.5%", "value": 300 },
          { "purity": "99%", "value": 353 },
          { "purity": "98%", "value": 425 },
          { "purity": "97%", "value": 486 },
          { "purity": "95%", "value": 552 }
        ]
      }
    },
    "N-400": {
      "id": "N400",
      "model": "Генератор азота N-400",
      "url": "/adsorber.png",
      "price": 7647800,
      "airNeed": 19,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 4000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 4.0 * 1000,
          "price": 137300 * 4 + 80600
        },
        "nResiver": {
          "model": "Ресивер азотный 8000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 8.0 * 1000,
          "price": 137300 * 9
        },
        "productivity": [
          { "purity": "99.9995%", "value": 88 },
          { "purity": "99.999%", "value": 112 },
          { "purity": "99.995%", "value": 158 },
          { "purity": "99.99%", "value": 184 },
          { "purity": "99.95%", "value": 250 },
          { "purity": "99.9%", "value": 294 },
          { "purity": "99.5%", "value": 400 },
          { "purity": "99%", "value": 471 },
          { "purity": "98%", "value": 568 },
          { "purity": "97%", "value": 648 },
          { "purity": "95%", "value": 736 }
        ]
      }
    },
    "N-500": {
      "id": "N500",
      "model": "Генератор азота N-500",
      "url": "/adsorber.png",
      "price": 8915900,
      "airNeed": 24,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 5000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 5.0 * 1000,
          "price": 137300 * 5 + 80600
        },
        "nResiver": {
          "model": "Ресивер азотный 10000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 10.0 * 1000,
          "price": 137300 * 11 + 51800
        },
        "productivity": [
          { "purity": "99.9995%", "value": 110 },
          { "purity": "99.999%", "value": 140 },
          { "purity": "99.995%", "value": 197 },
          { "purity": "99.99%", "value": 230 },
          { "purity": "99.95%", "value": 313 },
          { "purity": "99.9%", "value": 368 },
          { "purity": "99.5%", "value": 500 },
          { "purity": "99%", "value": 589 },
          { "purity": "98%", "value": 710 },
          { "purity": "97%", "value": 810 },
          { "purity": "95%", "value": 920 }
        ]
      }
    },
    "N-600": {
      "id": "N600",
      "model": "Генератор азота N-600",
      "url": "/adsorber.png",
      "price": 10371200,
      "airNeed": 29,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 6000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 6.0 * 1000,
          "price": 137300 * 7
        },
        "nResiver": {
          "model": "Ресивер азотный 12000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 12.0 * 1000,
          "price": 137300 * 13 + 80600
        },
        "productivity": [
          { "purity": "99.9995%", "value": 132 },
          { "purity": "99.999%", "value": 168 },
          { "purity": "99.995%", "value": 236 },
          { "purity": "99.99%", "value": 276 },
          { "purity": "99.95%", "value": 375 },
          { "purity": "99.9%", "value": 441 },
          { "purity": "99.5%", "value": 600 },
          { "purity": "99%", "value": 706 },
          { "purity": "98%", "value": 852 },
          { "purity": "97%", "value": 971 },
          { "purity": "95%", "value": 1103 }
        ]
      }
    },
    "N-750": {      
      "id": "N750",
      "model": "Генератор азота N-750",
      "url": "/adsorber.png",
      "price": 12444300,
      "airNeed": 36,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 7000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 7.0 * 1000,
          "price": 137300 * 8
        },
        "nResiver": {
          "model": "Ресивер азотный 14000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 14.0 * 1000,
          "price": 137300 * 15 + 80600

        },
        "productivity": [
          { "purity": "99.9995%", "value": 166 },
          { "purity": "99.999%", "value": 210 },
          { "purity": "99.995%", "value": 295 },
          { "purity": "99.99%", "value": 345 },
          { "purity": "99.95%", "value": 469 },
          { "purity": "99.9%", "value": 552 },
          { "purity": "99.5%", "value": 750 },
          { "purity": "99%", "value": 883 },
          { "purity": "98%", "value": 1065 },
          { "purity": "97%", "value": 1214 },
          { "purity": "95%", "value": 1379 }
        ]
      }
    },
    "N-900": {
      "id": "N900",
      "model": "Генератор азота N-900",
      "url": "/adsorber.png",
      "price": 14401500,
      "airNeed": 43,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 8000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 8.0 * 1000,
          "price": 137300 * 9
        },
        "nResiver": {
          "model": "Ресивер азотный 16000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 16.0 * 1000,
          "price": 137300 * 18
        },
        "productivity": [
          { "purity": "99.9995%", "value": 199 },
          { "purity": "99.999%", "value": 252 },
          { "purity": "99.995%", "value": 354 },
          { "purity": "99.99%", "value": 414 },
          { "purity": "99.95%", "value": 563 },
          { "purity": "99.9%", "value": 662 },
          { "purity": "99.5%", "value": 900 },
          { "purity": "99%", "value": 1059 },
          { "purity": "98%", "value": 1278 },
          { "purity": "97%", "value": 1457 },
          { "purity": "95%", "value": 1655 }
        ]
      }
    },
    "N-1050": {
      "id": "N1050",
      "model": "Генератор азота N-1050",
      "url": "/adsorber.png",
      "price": 16759700,
      "airNeed": 50,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 9000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 9.0 * 1000,
          "price": 137300 * 10
        },
        "nResiver": {
          "model": "Ресивер азотный 18000 литров",
          "url": "/reciver.png",
          "outputReceiverVolumeL": 18.0 * 1000,
          "price": 137300 * 20
        },
        "productivity": [
          { "purity": "99.9995%", "value": 232 },
          { "purity": "99.999%", "value": 293 },
          { "purity": "99.995%", "value": 413 },
          { "purity": "99.99%", "value": 482 },
          { "purity": "99.95%", "value": 656 },
          { "purity": "99.9%", "value": 772 },
          { "purity": "99.5%", "value": 1050 },
          { "purity": "99%", "value": 1235 },
          { "purity": "98%", "value": 1490 },
          { "purity": "97%", "value": 1698 },
          { "purity": "95%", "value": 1930 }
        ]
      }
    }
  },
  oxygen: {
    "O-3": {
      "id": "O3",
      "model": "Генератор кислорода O-3",
      "url": "/adsorber.png",
      "price": 2432400,
      "airNeed": 0.92,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 500 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.5 * 1000,
          "price": 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 500 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 2622500,
      "airNeed": 1.29,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 500 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.5 * 1000,
          "price": 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 500 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 2839300,
      "airNeed": 1.99,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 750 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.75 * 1000,
          "price": 80600 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 750 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 3103700,
      "airNeed": 2.51,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 750 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 0.75 * 1000,
          "price": 80600 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 750 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 3145200,
      "airNeed": 3.11,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 1.0 * 1000,
          "price": 137300 + 51800
        },
        "oResiver": {
          "model": "Ресивер кислородный 1000 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 3344200,
      "airNeed": 3.63,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 1.0 * 1000,
          "price": 137300 + 51800
        },
        "oResiver": {
          "model": "Ресивер кислородный 1000 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 3676900,
      "airNeed": 5.07,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 1500 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 1.5 * 1000,
          "price": 137300 * 2
        },
        "oResiver": {
          "model": "Ресивер кислородный 1500 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 3905600,
      "airNeed": 6.2,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 2000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 2.0 * 1000,
          "price": 137300 * 2 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 2000 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 4264900,
      "airNeed": 7.51,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 2000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 2.0 * 1000,
          "price": 137300 * 2 + 60300
        },
        "oResiver": {
          "model": "Ресивер кислородный 2000 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 4760900,
      "airNeed": 9.95,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 3000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 3.0 * 1000,
          "price": 137300 * 3 + 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 3000 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 5351900,
      "airNeed": 12.19,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 4000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 4.0 * 1000,
          "price": 137300 * 4 + 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 4000 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 6067700,
      "airNeed": 16.68,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 5000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 5.0 * 1000,
          "price": 137300 * 5 + 80600
        },
        "oResiver": {
          "model": "Ресивер кислородный 5000 литров",
          "url": "/reciver.png",
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
      "url": "/adsorber.png",
      "price": 7300300,
      "airNeed": 19.32,
      "equipment": {
        "vResiver": {
          "model": "Ресивер воздушный 6000 литров",
          "url": "/reciver.png",
          "inputReceiverVolumeL": 6.0 * 1000,
          "price": 137300 * 7
        },
        "oResiver": {
          "model": "Ресивер кислородный 6000 литров",
          "url": "/reciver.png",
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
      "url": "/dcompressor.png",
      "price": 0,
      "pressure": 10
    }
  },
  rampa: {
    "ramp-20": {
      "model": "Заправочная рампа 2*3 баллона",
      "url": "/rampa.png",
      "price": 248000,
      "capacity": 6
    },
    "ramp-45": {
      "model": "Заправочная рампа 5 баллонов",
      "url": "/rampa.png",
      "price": 0,
      "capacity": 5
    },
    "ramp-65": {
      "model": "Заправочная рампа 10 баллонов",
      "url": "/rampa.png",
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