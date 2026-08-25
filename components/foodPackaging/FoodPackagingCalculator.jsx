// components/foodPackaging/FoodPackagingCalculator.jsx

import React, { useMemo, useState, useEffect } from "react";

import data from "../data.js";
import { compressors, dryers, filters } from "../equipment";
import PdfButton from "../PdfButton";

// Изображения оборудования
const baseImg = "/assets/base.png";
const adsorberImg = "/assets/adsorber.png";
const reciverImg = "/assets/reciver.png";
const compressorImg = "/assets/compressor.png";
const osyshitelImg = "/assets/osyshitel.png";
const filtrImg = "/assets/filtr.png";

const FoodPackagingCalculator = () => {
  // ============================================================
  // ПАРАМЕТРЫ УПАКОВОЧНОЙ ЛИНИИ
  // ============================================================

  const [packagesPerMinute, setPackagesPerMinute] = useState("");

  const [packageVolume, setPackageVolume] = useState("");

  const [volumeUnit, setVolumeUnit] = useState("ml");

  // Коэффициент расхода газа.
  // Показывает, во сколько раз объём газа превышает
  // номинальный свободный объём упаковки.
  const [gasCoefficient, setGasCoefficient] = useState("3");


  // ============================================================
  // ПАРАМЕТРЫ АЗОТА
  // ============================================================

  const nitrogenPurityOptions = [
    "95%",
    "97%",
    "98%",
    "99%",
    "99.5%",
    "99.9%",
    "99.95%",
    "99.99%",
    "99.995%",
    "99.999%",
    "99.9995%"
  ];

  const nitrogenPressureOptions = [
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ];

  const nitrogenDewPointOptions = [
    -70,
    -60,
    -50,
    -40,
    -30,
    -20
  ];

  const [nitrogenPurityIndex, setNitrogenPurityIndex] =
    useState(0);

  const [nitrogenPressureIndex, setNitrogenPressureIndex] =
    useState(0);

  const [selectedDewPoint, setSelectedDewPoint] =
    useState(-70);


  // ============================================================
  // РЕЗУЛЬТАТ ПОДБОРА
  // ============================================================

  const [selectedModel, setSelectedModel] =
    useState(null);

  const [selectedModelData, setSelectedModelData] =
    useState(null);

  const [selectedEquipment, setSelectedEquipment] =
    useState([]);


  // ============================================================
  // ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ ДЛЯ URL ИЗОБРАЖЕНИЙ
  // ============================================================

  const resolveUrl = (url) => {
    if (!url) return baseImg;

    if (typeof url === "string") {
      return url;
    }

    if (typeof url === "object") {
      if (typeof url.default === "string") {
        return url.default;
      }

      if (typeof url.src === "string") {
        return url.src;
      }
    }

    return baseImg;
  };


  // ============================================================
  // РАСЧЁТ ОБЪЁМА ОДНОЙ УПАКОВКИ В ЛИТРАХ
  // ============================================================

  const packageVolumeLiters = useMemo(() => {
    const value = parseFloat(packageVolume);

    if (!value || value <= 0) {
      return 0;
    }

    if (volumeUnit === "ml") {
      return value / 1000;
    }

    return value;
  }, [
    packageVolume,
    volumeUnit
  ]);


  // ============================================================
  // РАСЧЁТ ТРЕБУЕМОГО РАСХОДА АЗОТА
  //
  // Формула:
  //
  // упаковок/мин
  // × объём упаковки, л
  // × коэффициент расхода
  // × 60
  // ÷ 1000
  //
  // Результат: м³/ч
  // ============================================================

  const calculatedNitrogenFlow = useMemo(() => {
    const packages = parseFloat(packagesPerMinute);

    const coefficient = parseFloat(gasCoefficient);

    if (
      !packages ||
      packages <= 0 ||
      !packageVolumeLiters ||
      packageVolumeLiters <= 0 ||
      !coefficient ||
      coefficient <= 0
    ) {
      return 0;
    }

    const litersPerMinute =
      packages *
      packageVolumeLiters *
      coefficient;

    return (litersPerMinute * 60) / 1000;
  }, [
    packagesPerMinute,
    packageVolumeLiters,
    gasCoefficient
  ]);


  // ============================================================
  // ТЕКУЩИЕ ПАРАМЕТРЫ АЗОТА
  // ============================================================

  const selectedPurity =
    nitrogenPurityOptions[nitrogenPurityIndex];

  const selectedPressure =
    nitrogenPressureOptions[nitrogenPressureIndex];


  // ============================================================
  // СХЕМА ОБОРУДОВАНИЯ
  // ============================================================

  const equipmentScheme = [
    "kompressor",
    "osyshitel",
    "filtr",
    "vResiver",
    "nAdsorber",
    "nResiver"
  ];


  // ============================================================
  // ОСНОВНОЙ ПОДБОР ОБОРУДОВАНИЯ
  // ============================================================

  useEffect(() => {
    const img = {
      nAdsorber: adsorberImg,
      kompressor: compressorImg,
      osyshitel: osyshitelImg,
      filtr: filtrImg,
      vResiver: reciverImg,
      nResiver: reciverImg,
      base: baseImg
    };


    // ----------------------------------------------------------
    // Проверяем корректность рассчитанного расхода
    // ----------------------------------------------------------

    if (
      !calculatedNitrogenFlow ||
      calculatedNitrogenFlow <= 0
    ) {
      setSelectedModel(null);

      setSelectedModelData(null);

      setSelectedEquipment(
        equipmentScheme.map(() => ({
          model:
            "Введите параметры упаковочной линии",
          url: img.base,
          price: 0,
          includedInQuote: false
        }))
      );

      return;
    }

// ----------------------------------------------------------
// Подбор генератора азота
//
// Для каждого генератора ищем производительность
// именно по выбранной чистоте, а не по позиции
// элемента в массиве productivity.
//
// Затем выбираем генератор с минимальной
// подходящей производительностью.
// ----------------------------------------------------------

const generatorData = data.nitrogen;

let generatorModel = null;

const suitableGenerators = Object.values(generatorData)
  .map((model) => {

    const productivity = model.equipment?.productivity?.find(
      (item) => item.purity === selectedPurity
    );

    if (!productivity) {
      return null;
    }

    return {
      model,
      productivity: productivity.value
    };

  })
  .filter(Boolean)
  .filter(
    ({ productivity }) =>
      productivity >= calculatedNitrogenFlow
  )
  .sort(
    (a, b) =>
      a.productivity - b.productivity
  );

if (suitableGenerators.length > 0) {
  generatorModel =
    suitableGenerators[0].model;
}


    // ----------------------------------------------------------
    // Если генератор не найден
    // ----------------------------------------------------------

    if (!generatorModel) {
      setSelectedModel(null);

      setSelectedModelData(null);

      setSelectedEquipment(
        equipmentScheme.map(() => ({
          model:
            "Генератор не подобран",
          url: img.base,
          price: 0,
          includedInQuote: false
        }))
      );

      return;
    }


    // ----------------------------------------------------------
    // Расход сжатого воздуха для генератора
    //
    // Сохраняем существующую логику из Config.
    // ----------------------------------------------------------

    const requiredAirM3h =
      generatorModel.airNeed * 60;


    // ----------------------------------------------------------
    // Подбор рабочего давления компрессора
    // ----------------------------------------------------------

    const allowedPressureMap = {
      7: [6, 7],
      8: [8],
      10: [9, 10],
      12.5: [11, 12, 13]
    };


    const pressureTarget = parseFloat(
      Object.entries(
        allowedPressureMap
      ).find(([, values]) =>
        values.includes(selectedPressure)
      )?.[0] ?? 7
    );


    // ----------------------------------------------------------
    // Подбор компрессора
    // ----------------------------------------------------------

    const matchingCompressors =
      compressors
        .filter((compressor) =>
          compressor.specs.some(
            (spec) =>
              spec.pressure === pressureTarget &&
              spec.minFlow <= requiredAirM3h &&
              requiredAirM3h <= spec.maxFlow
          )
        )
        .sort((a, b) => {
          const aSpec =
            a.specs.find(
              (spec) =>
                spec.pressure === pressureTarget
            );

          const bSpec =
            b.specs.find(
              (spec) =>
                spec.pressure === pressureTarget
            );

          return aSpec.power - bSpec.power;
        });


    const selectedKompressor =
      matchingCompressors[0]
        ? {
          ...matchingCompressors[0],
          model:
            matchingCompressors[0].id
        }
        : null;


    // ----------------------------------------------------------
    // Подбор осушителя
    // ----------------------------------------------------------

    const selectedOsyshitel = (() => {
      const pressure =
        selectedPressure;

      const dewPoint =
        selectedDewPoint;


      const isRefrigerant =
        [-20, -30, -40, -50].includes(
          dewPoint
        );


      const isAdsorption =
        !isRefrigerant;


      const pressureCoefficients = {
        refrigerant: {
          6: 0.94,
          7: 1.0,
          8: 1.04,
          9: 1.075,
          10: 1.11,
          11: 1.135,
          12: 1.16,
          13: 1.19
        },

        adsorption: {
          6: 0.88,
          7: 1.0,
          8: 1.12,
          9: 1.25,
          10: 1.37,
          11: 1.5,
          12: 1.6,
          13: 1.7
        }
      };


      const coefficient =
        isRefrigerant
          ? pressureCoefficients
            .refrigerant[pressure]
          : pressureCoefficients
            .adsorption[pressure];


      if (!coefficient) {
        return null;
      }


      const adjustedRequiredFlow =
        requiredAirM3h /
        coefficient;


      const filteredDryers =
        dryers.filter((dryer) => {
          if (isRefrigerant) {
            return (
              dryer.type ===
              "Рефрижираторный осушитель"
            );
          }

          return (
            dryer.type ===
            "Адсорбционный осушитель"
          );
        });


      const matchingDryers =
        filteredDryers
          .filter(
            (dryer) =>
              dryer.flow >=
              adjustedRequiredFlow
          )
          .sort(
            (a, b) =>
              a.flow - b.flow
          );


      const dryer =
        matchingDryers[0];


      if (!dryer) {
        return null;
      }


      const selected = {
        ...dryer,
        model: dryer.id
      };


      // Цена адсорбционного осушителя
      // зависит от максимального давления.

      if (
        isAdsorption &&
        dryer.specs
      ) {
        const suitableSpec =
          dryer.specs.find(
            (spec) =>
              (pressure <= 10 &&
                spec.maxPressure === 10) ||
              (pressure > 10 &&
                spec.maxPressure === 16)
          );


        if (suitableSpec) {
          selected.price =
            suitableSpec.price;
        }
      }


      return selected;
    })();


    // ----------------------------------------------------------
    // Подбор фильтра
    // ----------------------------------------------------------

    const selectedFiltr = (() => {
      if (!selectedKompressor) {
        return null;
      }


      const compressorSpec =
        selectedKompressor.specs.find(
          (spec) =>
            spec.pressure ===
            pressureTarget
        );


      const maxFlow =
        compressorSpec?.maxFlow;


      if (!maxFlow) {
        return null;
      }


      const matchingFilters =
        filters
          .filter(
            (filter) =>
              filter.flow >= maxFlow
          )
          .sort(
            (a, b) =>
              a.flow - b.flow
          );


      const filter =
        matchingFilters[0];


      return filter
        ? {
          ...filter,
          model: filter.id
        }
        : null;
    })();


    // ----------------------------------------------------------
    // Сбор подобранного оборудования
    // ----------------------------------------------------------

    const equipmentDetails =
      equipmentScheme.map((key) => {

        // Генератор азота

        if (key === "nAdsorber") {
          return {
            id:
              generatorModel.id ??
              generatorModel.model,

            model:
              generatorModel.model,

            name:
              generatorModel.name ??
              generatorModel.model,

            type:
              generatorModel.type ??
              "Генератор азота",

            url:
              resolveUrl(
                generatorModel.url ??
                img.nAdsorber
              ),

            price:
              generatorModel.price ?? 0,

            includedInQuote: true
          };
        }


        // Воздушный и азотный ресиверы

        if (
          key === "vResiver" ||
          key === "nResiver"
        ) {
          const receiver =
            generatorModel
              ?.equipment?.[key];


          if (!receiver) {
            return {
              id:
                `blank_${key}`,

              model:
                "Ресивер не подобран",

              url:
                img.base,

              price: 0,

              includedInQuote: false
            };
          }


          return {
            id:
              receiver.model,

            model:
              receiver.model,

            name:
              receiver.name ??
              receiver.model,

            type:
              receiver.type ??
              "Газовый ресивер",

            url:
              resolveUrl(
                receiver.url ??
                img[key]
              ),

            price:
              receiver.price ?? 0,

            includedInQuote: true
          };
        }


        const equipmentMap = {
          kompressor:
            selectedKompressor,

          osyshitel:
            selectedOsyshitel,

          filtr:
            selectedFiltr
        };


        const selected =
          equipmentMap[key];


        if (
          !selected ||
          !selected.model
        ) {
          const fallbackNames = {
            kompressor:
              "Компрессор не подобран",

            osyshitel:
              "Осушитель не подобран",

            filtr:
              "Фильтр не подобран"
          };


          return {
            id:
              `blank_${key}`,

            model:
              fallbackNames[key] ??
              "Оборудование не подобрано",

            url:
              img.base,

            price: 0,

            includedInQuote: false
          };
        }


        return {
          id:
            selected.id ??
            selected.model,

          model:
            selected.model,

          name:
            selected.name ??
            selected.model,

          type:
            selected.type ??
            "Элемент системы",

          url:
            resolveUrl(
              selected.url ??
              img[key] ??
              img.base
            ),

          price:
            selected.price ?? 0,

          includedInQuote: true
        };
      });


    // ----------------------------------------------------------
    // Обновляем результат
    // ----------------------------------------------------------

    setSelectedEquipment(
      equipmentDetails
    );

    setSelectedModel(
      generatorModel.model ?? null
    );

    setSelectedModelData(
      generatorModel ?? null
    );

  }, [
    calculatedNitrogenFlow,
    nitrogenPurityIndex,
    nitrogenPressureIndex,
    selectedDewPoint,
    selectedPressure
  ]);


  // ============================================================
  // ОБЩАЯ СТОИМОСТЬ
  // ============================================================

  const totalPrice = useMemo(() => {
    return selectedEquipment.reduce(
      (total, item) => {
        if (
          item.includedInQuote !== false
        ) {
          return (
            total +
            (Number(item.price) || 0)
          );
        }

        return total;
      },
      0
    );
  }, [
    selectedEquipment
  ]);

  // ============================================================
  // ВАЛИДНОСТЬ ПОДОБРАННОГО ОБОРУДОВАНИЯ
  // ============================================================

  const anyIncluded = useMemo(() => {
    return selectedEquipment.some(
      (item) => item?.includedInQuote === true
    );
  }, [selectedEquipment]);


  const isEquipmentValid = useMemo(() => {
    return (
      selectedModelData &&
      selectedEquipment.length > 0 &&
      selectedEquipment.every(
        (item) =>
          item?.includedInQuote === true
      )
    );
  }, [
    selectedModelData,
    selectedEquipment
  ]);

  // ============================================================
  // РАСЧЁТ РАСХОДА В ЛИТРАХ В МИНУТУ
  // ============================================================

  const calculatedFlowLMin =
    calculatedNitrogenFlow > 0
      ? (
        calculatedNitrogenFlow *
        1000
      ) / 60
      : 0;


  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div
      id="food-packaging-calculator"
      className="w-full"
    >

      {/* ========================================================
          ВХОДНЫЕ ДАННЫЕ
      ======================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Упаковочная линия */}

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Параметры упаковочной линии
          </h3>


          <div className="space-y-5">

            {/* Скорость линии */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Производительность линии
              </label>

              <div className="flex gap-3">

                <input
                  type="number"
                  min="0"
                  step="1"
                  value={packagesPerMinute}
                  onChange={(event) =>
                    setPackagesPerMinute(
                      event.target.value
                    )
                  }
                  placeholder="Например, 100"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white"
                />

                <div className="flex items-center px-4 border border-gray-300 rounded-lg bg-white text-sm text-gray-600 whitespace-nowrap">
                  уп./мин
                </div>

              </div>

            </div>


            {/* Объём упаковки */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Свободный объём упаковки
              </label>

              <div className="flex gap-3">

                <input
                  type="number"
                  min="0"
                  step="any"
                  value={packageVolume}
                  onChange={(event) =>
                    setPackageVolume(
                      event.target.value
                    )
                  }
                  placeholder="Например, 500"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white"
                />

                <select
                  value={volumeUnit}
                  onChange={(event) =>
                    setVolumeUnit(
                      event.target.value
                    )
                  }
                  className="border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white"
                >
                  <option value="ml">
                    мл
                  </option>

                  <option value="l">
                    л
                  </option>
                </select>

              </div>

            </div>


            {/* Коэффициент расхода */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Коэффициент расхода газа
              </label>

              <input
                type="number"
                min="1"
                step="0.1"
                value={gasCoefficient}
                onChange={(event) =>
                  setGasCoefficient(
                    event.target.value
                  )
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white"
              />

              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Коэффициент учитывает объём газа,
                необходимый для продувки упаковки
                и формирования требуемой газовой среды.
                Значение зависит от типа упаковочной
                машины и технологии упаковки.
              </p>

            </div>

          </div>

        </div>


        {/* Параметры азота */}

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Требования к азоту
          </h3>


          <div className="space-y-7">

            {/* Чистота */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Чистота азота:
                {" "}
                <span className="font-bold">
                  {selectedPurity}
                </span>
              </label>

              <input
                type="range"
                min="0"
                max={
                  nitrogenPurityOptions.length - 1
                }
                value={
                  nitrogenPurityIndex
                }
                onChange={(event) =>
                  setNitrogenPurityIndex(
                    parseInt(
                      event.target.value
                    )
                  )
                }
                className="w-full"
              />

              <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mt-2">
                <span>
                  {nitrogenPurityOptions[0]}
                </span>

                <span>
                  {nitrogenPurityOptions[
                    nitrogenPurityOptions.length - 1
                  ]}
                </span>
              </div>

            </div>


            {/* Давление */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Рабочее давление:
                {" "}
                <span className="font-bold">
                  {selectedPressure} бар
                </span>
              </label>

              <input
                type="range"
                min="0"
                max={
                  nitrogenPressureOptions.length - 1
                }
                value={
                  nitrogenPressureIndex
                }
                onChange={(event) =>
                  setNitrogenPressureIndex(
                    parseInt(
                      event.target.value
                    )
                  )
                }
                className="w-full"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>
                  {nitrogenPressureOptions[0]} бар
                </span>

                <span>
                  {
                    nitrogenPressureOptions[
                    nitrogenPressureOptions.length - 1
                    ]
                  } бар
                </span>
              </div>

            </div>


            {/* Точка росы */}

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Точка росы:
                {" "}
                <span className="font-bold">
                  {selectedDewPoint} °C
                </span>
              </label>

              <input
                type="range"
                min="-70"
                max="-20"
                step="10"
                value={selectedDewPoint}
                onChange={(event) =>
                  setSelectedDewPoint(
                    parseInt(
                      event.target.value
                    )
                  )
                }
                className="w-full"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>
                  -70 °C
                </span>

                <span>
                  -20 °C
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ========================================================
          РЕЗУЛЬТАТ РАСЧЁТА РАСХОДА
      ======================================================== */}

      <div className="mt-8 bg-gray-900 text-white rounded-xl p-6 sm:p-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div>

            <p className="text-sm text-gray-400 mb-2">
              Расчётный расход азота
            </p>

            <p className="text-3xl sm:text-4xl font-bold">
              {calculatedNitrogenFlow > 0
                ? calculatedNitrogenFlow.toFixed(2)
                : "—"}
              {" "}
              <span className="text-lg font-normal">
                м³/ч
              </span>
            </p>

          </div>


          <div>

            <p className="text-sm text-gray-400 mb-2">
              Эквивалентный расход
            </p>

            <p className="text-2xl font-semibold">
              {calculatedFlowLMin > 0
                ? calculatedFlowLMin.toFixed(1)
                : "—"}
              {" "}
              л/мин
            </p>

          </div>


          <div>

            <p className="text-sm text-gray-400 mb-2">
              Подобранный генератор
            </p>

            <p className="text-2xl font-semibold">
              {selectedModel || "—"}
            </p>

          </div>

        </div>

      </div>


      {/* ========================================================
          СОСТАВ СИСТЕМЫ
      ======================================================== */}

      <div className="mt-10">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">

          <div>

            <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
              Результат подбора
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Рекомендуемая конфигурация оборудования
            </h3>

          </div>


          <div className="text-left sm:text-right">

            <p className="text-sm text-gray-500">
              Ориентировочная стоимость оборудования
            </p>

            <p className="text-2xl font-bold text-gray-900">
              {totalPrice.toLocaleString("ru-RU")}
              {" "}
              ₽
            </p>

          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {selectedEquipment.map(
            (item, index) => {

              const hasValidModel =
                item?.model &&
                !item.model.includes(
                  "не подобран"
                ) &&
                !item.model.includes(
                  "Введите параметры"
                );


              return (
                <div
                  key={`${item.id}-${index}`}
                  className="border border-gray-200 rounded-xl bg-white p-5 flex flex-col"
                >

                  <div className="h-36 flex items-center justify-center mb-4">

                    <img
                      src={item.url}
                      alt={item.model}
                      className="max-h-full max-w-full object-contain"
                    />

                  </div>


                  <div className="mt-auto">

                    <h4 className="font-semibold text-gray-900">
                      {item.model}
                    </h4>


                    {hasValidModel && (
                      <>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.type}
                        </p>


                        <p className="text-lg font-semibold text-gray-900 mt-4">
                          {Number(
                            item.price || 0
                          ).toLocaleString(
                            "ru-RU"
                          )}
                          {" "}
                          ₽
                        </p>

                      </>
                    )}

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>


      {/* ========================================================
          ПРИМЕЧАНИЕ
      ======================================================== */}

      <div className="mt-8 border-l-4 border-red-500 bg-gray-50 px-5 py-4">

        <p className="text-sm text-gray-600 leading-relaxed">

          Расчёт носит предварительный инженерный характер.
          Фактический расход азота определяется конструкцией
          упаковочной машины, режимом продувки, объёмом свободного
          пространства упаковки, требуемым остаточным содержанием
          кислорода и составом модифицированной газовой среды.

        </p>

      </div>

      {/* ========================================================
          ГЕНЕРАЦИЯ КП
      ======================================================== */}

      <div className="mt-10 flex justify-center">

        <PdfButton
          showClarifyButton={false}
          setShowModal={() => { }}

          isEquipmentValid={isEquipmentValid}
          anyIncluded={anyIncluded}

          generator="nitrogen"

          system="generation"

          selectedModelData={selectedModelData}

          purity={selectedPurity}

          nitrogenPurityOptions={
            nitrogenPurityOptions
          }

          nitrogenPurityIndex={
            nitrogenPurityIndex
          }

          nitrogenPressureOptions={
            nitrogenPressureOptions
          }

          nitrogenPressureIndex={
            nitrogenPressureIndex
          }

          selectedDewPoint={
            selectedDewPoint
          }

          unit="m3h"

          inputValue={
            calculatedNitrogenFlow > 0
              ? calculatedNitrogenFlow.toFixed(2)
              : ""
          }

          refillCapacity={null}

          selectedEquipment={
            selectedEquipment
          }
        />

      </div>

    </div>
  );
};


export default FoodPackagingCalculator;