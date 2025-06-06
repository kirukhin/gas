import React, { useState, useEffect } from "react";
import data from "/public/components/data.js";
import { compressors, dryers } from './equipment';
// import "../../src/styles.css";
import baseImg from "/base.png";
import adsorberImg from "/adsorber.png";
import reciverImg from "/reciver.png";
import compressorImg from "/compressor.png";
import osyshitelImg from "/osyshitel.png";
import filtrImg from "/filtr.png";
import dcompressorImg from "/dcompressor.png";
import rampaImg from "/rampa.png";
import { generatePdf } from './PdfGenerator';
// import Main from './Main'



const Config = () => {
  // --- Состояния выбора ---
  const [generator, setGenerator] = useState("oxygen"); // Генератор: кислород/азот
  const [system, setSystem] = useState("generation");   // Система: генерация/заправка
  const [pressure, setPressure] = useState("5bar");     // Давление: 5/нестандартное бар
  const [purity, setPurity] = useState("93");           // Чистота кислорода
  const [inputValue, setInputValue] = useState("");     // Производительность
  const [unit, setUnit] = useState("m3h");             // Единицы измерения
  const [refillCapacity, setRefillCapacity] = useState("20"); // Произаодительность перезаправки
  const [selectedModel, setSelectedModel] = useState(null); // строка
  const [selectedModelData, setSelectedModelData] = useState(null); // объект
  const [showModal, setShowModal] = useState(false);




  // --- Состояния оборудования ---
  const [selectedEquipment, setSelectedEquipment] = useState([]);


  // --- Слайдеры азота ---
  const nitrogenPurityOptions = ["95%", "97%", "98%", "99%", "99.5%", "99.9%", "99.95%", "99.99%", "99.995%", "99.999%", "99.9995%"];
  const nitrogenPressureOptions = [6, 7, 8, 9, 10, 11, 12, 13];
  const nitrogenDewPointOptions = [-70, -60, -50, -40, -30, -20];

  const [selectedDewPoint, setSelectedDewPoint] = useState(nitrogenDewPointOptions[0]);
  const [nitrogenPurityIndex, setNitrogenPurityIndex] = useState(0);
  const [nitrogenPressureIndex, setNitrogenPressureIndex] = useState(0);

  // --- Обработчики слайдеров ---
  const handlePurityChange = (e) => {
    setNitrogenPurityIndex(parseInt(e.target.value));
  };

  const handlePressureChange = (e) => {
    setNitrogenPressureIndex(parseInt(e.target.value));
  };

  const handleDewPointChange = (e) => {
    const closestValue = nitrogenDewPointOptions.reduce((prev, curr) =>
      Math.abs(curr - e.target.value) < Math.abs(prev - e.target.value) ? curr : prev
    );
    setSelectedDewPoint(closestValue);
  };

  // --- обработчик кнопки создания pdf ---

  const handleGeneratePdf = () => {
    generatePdf({
      gas: generator,
      system,
      model: selectedModelData, // теперь это объект
      purity: generator === "oxygen" ? purity : nitrogenPurityOptions[nitrogenPurityIndex],
      pressure: generator === "oxygen" ? pressure : nitrogenPressureOptions[nitrogenPressureIndex],
      dewPoint: selectedDewPoint,
      unit,
      inputValue,
      refillCapacity,
      selectedEquipment
    });
  };



  // --- обработчик чекбокса включения в КП ---

  const toggleIncludeInQuote = (index) => {
    const updatedEquipment = [...selectedEquipment];
    updatedEquipment[index].includedInQuote = !updatedEquipment[index].includedInQuote;
    setSelectedEquipment(updatedEquipment);
  };



  // --- Обновление UI слайдеров ---
  useEffect(() => {
    const sliders = document.querySelectorAll(".range-input input");

    const updateSlider = (element) => {
      if (!element) return;
      const value = parseInt(element.value);
      const max = parseInt(element.max);
      const min = parseInt(element.min);
      let percentage = ((value - min) / (max - min)) * 100;
      percentage = Math.min(100, Math.max(0, percentage));

      const rangeInput = element.closest(".range-input");
      const activeLine = rangeInput?.querySelector(".active-line");
      const activeDot = rangeInput?.querySelector(".active-dot");

      if (activeLine) activeLine.style.width = `${percentage}%`;
      if (activeDot) activeDot.style.left = `calc(${percentage}% - 8px)`;
    };


    const handleInput = (e) => updateSlider(e.target);

    sliders.forEach((slider) => {
      updateSlider(slider);
      slider.addEventListener("input", handleInput);
    });


    return () => {
      sliders.forEach((slider) => {
        slider.removeEventListener("input", handleInput);
      });
    };
  }, [selectedDewPoint, nitrogenPurityIndex, nitrogenPressureIndex]);


  // --- Схема оборудования ---
  const getEquipmentScheme = () => {
    let scheme = ["kompressor", "osyshitel", "filtr", "vResiver", "oAdsorber", "oResiver"];

    if (generator === "nitrogen") {
      scheme = ["kompressor", "osyshitel", "filtr", "vResiver", "nAdsorber", "nResiver"];
    }

    if (system === "refill") {
      scheme.push("dKompressor", "rampa");
    } else if (
      (generator === "oxygen" && pressure === "custom") ||
      (generator === "nitrogen" && nitrogenPressureOptions[nitrogenPressureIndex] > 9)
    ) {
      scheme.push("dKompressor");
    }

    return scheme;
  };

  // --- Поиск подходящего оборудования ---
  useEffect(() => {
    const findEquipment = () => {
      const equipmentScheme = getEquipmentScheme();

      // --- Функция выбора ближайшего оборудования по целевому значению ---
      const findClosestMatch = (dataCategory, key, targetValue) => {
        if (!data[dataCategory]) return null;
        return Object.values(data[dataCategory]).reduce((prev, curr) =>
          Math.abs(curr[key] - targetValue) < Math.abs(prev[key] - targetValue) ? curr : prev
        );
      };

      // --- Карта изображений по ключам схемы ---
      const imageMap = {
        oAdsorber: adsorberImg,
        nAdsorber: adsorberImg,
        kompressor: compressorImg,
        osyshitel: osyshitelImg,
        dKompressor: dcompressorImg,
        filtr: filtrImg,
        rampa: rampaImg,
      };

      // --- Если пользователь не ввел значение производительности, показываем "пустое" оборудование ---
      const numericValue = parseFloat(inputValue);
      if (!inputValue || isNaN(numericValue)) {
        const equipmentDetails = equipmentScheme.map((key) => ({
          model: "Укажите желаемую производительность",
          url: baseImg,
          price: 0
        }));
        setSelectedEquipment(equipmentDetails);
        setSelectedModel(null);
        return;
      }

      // --- Конвертация введенной производительности в м³/ч ---
      const convertToM3h = (value, unit) => {
        const num = parseFloat(value);
        if (isNaN(num)) return 0;
        if (unit === 'lmin') return (num / 1000) * 60;
        if (unit === 'kgh') return num / 1.2506;
        return num;
      };


      // --- Конвертируем введённую производительность ---
      const convertedValueM3H = convertToM3h(inputValue, unit);

      // --- Подбор компрессора ---
      let selectedKompressor = {};
      if (generator === "oxygen") {
        // Давление фиксированное: 7 бар
        const matching = compressors.filter(comp =>
          comp.specs.some(spec =>
            spec.pressure === 7 &&
            spec.minFlow < convertedValueM3H &&
            spec.maxFlow > convertedValueM3H
          )
        );

        matching.sort((a, b) => {
          const aSpec = a.specs.find(spec => spec.pressure === 7);
          const bSpec = b.specs.find(spec => spec.pressure === 7);
          return (aSpec?.power || Infinity) - (bSpec?.power || Infinity);
        });

        selectedKompressor = matching[0] || {};
      } else {
        // Давление: nitrogenPressureOptions[nitrogenPressureIndex]
        const currentPressure = nitrogenPressureOptions[nitrogenPressureIndex];

        const allowedPressures = {
          7: [6, 7],
          8: [8],
          10: [9, 10],
          12.5: [11, 12, 13]
        };

        const pressureGroup = Object.entries(allowedPressures)
          .find(([_, values]) => values.includes(currentPressure))?.[0];

        const pressureTarget = parseFloat(pressureGroup);

        const matching = compressors.filter(comp =>
          comp.specs.some(spec =>
            spec.pressure === pressureTarget &&
            spec.minFlow < convertedValueM3H &&
            spec.maxFlow > convertedValueM3H
          )
        );

        matching.sort((a, b) => {
          const aSpec = a.specs.find(spec => spec.pressure === pressureTarget);
          const bSpec = b.specs.find(spec => spec.pressure === pressureTarget);
          return (aSpec?.power || Infinity) - (bSpec?.power || Infinity);
        });

        selectedKompressor = matching[0] || {};
      }

      // --- Подбор осушителя ---
      const matchingDryers = dryers.filter(d => d.flow >= convertedValueM3H);
      matchingDryers.sort((a, b) => a.power - b.power);
      const selectedOsyshitel = matchingDryers[0] || {};


      // --- Подбор остальных элементов ---
      const selectedDKompressor = data.dKompressor?.["dcomp"] || {};
      const selectedFiltr = data.filtr?.["filtr"] || {};
      const selectedRampa = findClosestMatch("rampa", "capacity", parseInt(refillCapacity)) || {};

      // --- Поиск основной модели генератора ---
      if (!data || !data[generator]) return;
      const generatorData = data[generator];

      let selectedModelData = null;
      const targetPurity = generator === "oxygen"
        ? `${purity}%`
        : nitrogenPurityOptions[nitrogenPurityIndex];

      const reversedIndex = generator === "nitrogen"
        ? nitrogenPurityOptions.length - 1 - nitrogenPurityIndex
        : null;

      const sortedModels = Object.values(generatorData).sort((a, b) => {
        const prodA = generator === "oxygen"
          ? a.equipment?.productivity.find(p => p.purity === targetPurity)?.value || Infinity
          : a.equipment?.productivity[reversedIndex]?.value || Infinity;

        const prodB = generator === "oxygen"
          ? b.equipment?.productivity.find(p => p.purity === targetPurity)?.value || Infinity
          : b.equipment?.productivity[reversedIndex]?.value || Infinity;

        return prodA - prodB;
      });

      for (const modelData of sortedModels) {
        const productivities = modelData.equipment?.productivity;

        if (generator === "nitrogen") {
          const productivityEntry = productivities?.[reversedIndex];
          if (productivityEntry && productivityEntry.value >= convertedValueM3H) {
            selectedModelData = modelData;
            break;
          }
        } else {
          const productivityEntry = productivities?.find(p => p.purity === targetPurity);
          if (productivityEntry && productivityEntry.value >= convertedValueM3H) {
            selectedModelData = modelData;
            break;
          }
        }
      }

      if (!selectedModelData) {
        setSelectedEquipment(equipmentScheme.map(() => ({
          model: "Модель не выбрана",
          url: baseImg,
          price: 0,
        })));
        setSelectedModel(null);
        return;
      }

      // --- Заполняем массив оборудования ---
      // --- Заполняем массив оборудования ---
      const equipmentDetails = equipmentScheme.map((key) => {
        if (key === "oAdsorber" || key === "nAdsorber") {
          return {
            model: selectedModelData.model,
            name: selectedModelData.name || selectedModelData.model, // если есть
            type: selectedModelData.type || "Адсорбер",
            url: selectedModelData.url || imageMap[key],
            price: selectedModelData.price || 0,
          };
        }

        if (key === "vResiver" || key === "oResiver" || key === "nResiver") {
          const resiverData = selectedModelData?.equipment?.[key] || {};
          return {
            model: resiverData.model || "Неизвестно",
            name: resiverData.name || resiverData.model || "Ресивер",
            type: resiverData.type || "Газовый ресивер",
            url: resiverData.url || baseImg,
            price: resiverData.price || 0,
          };
        }

        let selectedEquipment = {};
        if (key === "kompressor") selectedEquipment = selectedKompressor;
        if (key === "osyshitel") selectedEquipment = selectedOsyshitel;
        if (key === "dKompressor") selectedEquipment = selectedDKompressor;
        if (key === "filtr") selectedEquipment = selectedFiltr;
        if (key === "rampa") selectedEquipment = selectedRampa;

        return {
          model: selectedEquipment?.model || selectedEquipment?.name || "Неизвестно",
          name: selectedEquipment?.name || selectedEquipment?.model || "Оборудование",
          type: selectedEquipment?.type || "Элемент схемы",
          url: selectedEquipment?.url || imageMap[key] || baseImg,
          price: selectedEquipment?.price || 0,
        };
      });


      setSelectedEquipment(equipmentDetails);
      setSelectedModel(selectedModelData.model);
      setSelectedModelData(selectedModelData);           // объект для PDF

    };

    findEquipment();
  }, [unit, generator, system, pressure, purity, nitrogenPurityIndex, nitrogenPressureIndex, inputValue, refillCapacity, selectedDewPoint]);






  // --- Подсчёт общей стоимости ---
  const calculateTotalPrice = () => {
    return selectedEquipment.reduce((total, item) => total + item.price, 0);
  };



  const anyIncluded = selectedEquipment.some((item) => item.includedInQuote === true);

  const isEquipmentValid = selectedEquipment.every(
    (item) =>
      item.model !== "Укажите желаемую производительность" &&
      item.model !== "Модель не выбрана"
  );





  return (
    <>
      {/* Основной блок конфигурации */}
      <div className="bg-white py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Конфигуратор оборудования</h2>

        {/* Группируем блоки в сетку 2–3–4 колонки на больших экранах */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
          {/* Газ */}
          <div>
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Газ</h5>
            <div className="flex gap-2">
              <button
                className={`flex-1 px-3 py-2 border rounded text-sm ${generator === "oxygen" ? "bg-red-500 text-white" : "border-gray-300 text-gray-800"}`}
                onClick={() => setGenerator("oxygen")}
              >
                Кислород
              </button>
              <button
                className={`flex-1 px-3 py-2 border rounded text-sm ${generator === "nitrogen" ? "bg-red-500 text-white" : "border-gray-300 text-gray-800"}`}
                onClick={() => setGenerator("nitrogen")}
              >
                Азот
              </button>
            </div>
          </div>

          {/* Система */}
          <div>
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Система</h5>
            <div className="flex gap-2">
              <button
                className={`flex-1 px-3 py-2 border rounded text-sm ${system === "generation" ? "bg-gray-700 text-white" : "border-gray-300 text-gray-800"}`}
                onClick={() => setSystem("generation")}
              >
                Генерация
              </button>
              <button
                className={`flex-1 px-3 py-2 border rounded text-sm ${system === "refill" ? "bg-gray-700 text-white" : "border-gray-300 text-gray-800"}`}
                onClick={() => setSystem("refill")}
              >
                Заправка
              </button>
            </div>
          </div>

          {/* Производительность заправки */}
          {system === "refill" && (
            <div>
              <h5 className="text-sm font-semibold text-gray-700 mb-2">Производ. заправки</h5>
              <select
                className="w-full border px-3 py-2 rounded text-sm text-black bg-white"
                value={refillCapacity}
                onChange={(e) => setRefillCapacity(e.target.value)}
              >
                <option value="20">20 баллонов/сутки</option>
                <option value="45">45 баллонов/сутки</option>
                <option value="65">65 баллонов/сутки</option>
                <option value="90">90 баллонов/сутки</option>
                <option value="125">125 баллонов/сутки</option>
              </select>
            </div>
          )}

          {/* Кислород — чистота и давление */}
          {generator === "oxygen" && (
            <>
              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Чистота кислорода</h5>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 px-3 py-2 border rounded text-sm ${purity === "93" ? "bg-gray-700 text-white" : "border-gray-300 text-gray-800"}`}
                    onClick={() => setPurity("93")}
                  >
                    93%
                  </button>
                  <button
                    className={`flex-1 px-3 py-2 border rounded text-sm ${purity === "custom" ? "bg-gray-700 text-white" : "border-gray-300 text-gray-800"}`}
                    onClick={() => setPurity("custom")}
                  >
                    Нестандарт
                  </button>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Давление</h5>
                <div className="flex gap-2">
                  <button
                    className={`flex-1 px-3 py-2 border rounded text-sm ${pressure === "5bar" ? "bg-gray-700 text-white" : "border-gray-300 text-gray-800"}`}
                    onClick={() => setPressure("5bar")}
                  >
                    5 бар
                  </button>
                  <button
                    className={`flex-1 px-3 py-2 border rounded text-sm ${pressure === "custom" ? "bg-gray-700 text-white" : "border-gray-300 text-gray-800"}`}
                    onClick={() => setPressure("custom")}
                  >
                    Нестандарт
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Азот — ползунки */}
          {generator === "nitrogen" && (
            <>
              <div className="col-span-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Чистота азота: <span className="font-bold">{nitrogenPurityOptions[nitrogenPurityIndex]}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max={nitrogenPurityOptions.length - 1}
                  value={nitrogenPurityIndex}
                  onChange={handlePurityChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  {nitrogenPurityOptions.map((val, index) => (
                    <span key={index}>{val}</span>
                  ))}
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Давление: <span className="font-bold">{nitrogenPressureOptions[nitrogenPressureIndex]} бар</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max={nitrogenPressureOptions.length - 1}
                  value={nitrogenPressureIndex}
                  onChange={handlePressureChange}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  {nitrogenPressureOptions.map((val, index) => (
                    <span key={index}>{val}</span>
                  ))}
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Точка росы: <span className="font-bold">{selectedDewPoint} °C</span>
                </label>
                <input
                  type="range"
                  min="-70"
                  max="-20"
                  step="10"
                  value={selectedDewPoint}
                  onChange={(e) => setSelectedDewPoint(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  {nitrogenDewPointOptions.map((val, index) => (
                    <span key={index}>{val}</span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Производительность + результат */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Ввод */}
          <div>
            <h5 className="text-sm font-semibold text-gray-700 mb-2">Производительность</h5>
            <div className="flex gap-2">
              <input
                type="number"
                className="w-full border px-3 py-2 rounded text-sm text-black bg-white"
                placeholder="Введите значение"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <select
                className="border px-3 py-2 rounded text-sm text-black bg-white"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="m3h">м³/час</option>
                <option value="lmin">л/мин</option>
                <option value="kgh">кг/час</option>
              </select>
            </div>
          </div>

          {/* Информация */}
          <div className="text-sm text-gray-800 space-y-2">
            <p><strong>Подобранный генератор:</strong> {selectedModel || "—"}</p>
            <p><strong>Общая цена установки:</strong> {calculateTotalPrice()} ₽</p>
          </div>
        </div>
      </div>

      {/* Оборудование — на всю ширину страницы */}
      <div className="bg-white py-12 px-4 w-full">
        <h5 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Подобранное оборудование</h5>
        <div className="flex flex-wrap justify-center">
          {selectedEquipment.map((item, index) => {
            const hasValidModel = item?.model && item.model !== "Модель не выбрана" && item.model !== "Укажите желаемую производительность";
            return (
              <div
                key={index}
                className="flex flex-col justify-between bg-white rounded shadow-md w-48 h-80 m-2"
              >
                <img
                  src={item.url}
                  alt={item.model}
                  className="w-full h-32 object-contain mt-4"
                />
                <div className="flex flex-col justify-between flex-grow px-4 pb-4 text-center">
                  <div>
                    <h6 className="text-sm font-semibold text-gray-800 mb-1">{item.model}</h6>
                    <p className="text-gray-600 text-xs mb-1">{item.type}</p>
                    <p className="text-gray-800 text-sm font-medium mb-3">Цена: {item.price} ₽</p>
                  </div>
                  <label className="inline-flex items-center justify-center text-xs text-gray-700 mt-auto">
                    <input
                      type="checkbox"
                      className={`form-checkbox mr-2 ${!hasValidModel || purity === "custom" || pressure === "custom"
                          ? "opacity-50 cursor-not-allowed"
                          : "text-red-500"
                        }`}
                      checked={item.includedInQuote || false}
                      onChange={() => toggleIncludeInQuote(index)}
                      disabled={!hasValidModel || purity === "custom" || pressure === "custom"}
                    />
                    Включить в КП
                  </label>
                </div>
              </div>


            );
          })}
        </div>

        {/* Кнопка под оборудованием */}
        <div className="bg-white text-center mt-10">
          {(purity === "custom" || pressure === "custom") ? (
            <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition duration-300"
            onClick={() => setShowModal(true)}
          >
            Уточнить характеристики
          </button>
          
          ) : (
            isEquipmentValid && anyIncluded && (
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition duration-300"
                onClick={handleGeneratePdf}
              >
                Получить КП на эту конфигурацию
              </button>
            )
          )}
        </div>
      </div>
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>
      <h2 className="text-xl text-black font-bold mb-4">Вы выбрали нестандартное оборудование</h2>
      <p className="mb-4 text-gray-700">Свяжитесь с нашим менеджером, чтобы уточнить детали.</p>
      <form method="POST" action="https://script.google.com/macros/s/AKfycbzcDZSe-bHpERzF9nZxX5yyydmT19Qn88o7hramPvcC-0gds1MOnYuZUl1MuGkr5-_giA/exec" className="space-y-4">
  <input
    type="text"
    name="name"
    required
    placeholder="Имя / Компания"
    className="w-full px-4 py-2 border rounded text-black"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="E-mail для обратной связи"
    className="w-full px-4 py-2 border rounded text-black"
  />
  <textarea
    name="message"
    required
    placeholder="Ваш запрос"
    className="w-full px-4 py-2 border rounded text-black h-28 resize-none"
  />
  <div className="flex justify-between">
    <button
      type="submit"
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
    >
      Отправить
    </button>
    <button
      type="button"
      className="text-gray-600 hover:underline"
      onClick={() => setShowModal(false)}
    >
      Отмена
    </button>
  </div>
</form>

    </div>
  </div>
)}

    </>
  );



};

export default Config;
