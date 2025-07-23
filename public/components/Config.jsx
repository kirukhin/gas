import React, { useState, useEffect } from "react";
import data from "/public/components/data.js";
import { compressors, dryers, filters } from './equipment';
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
  const [purity, setPurity] = useState("90");           // Чистота кислорода
  const [inputValue, setInputValue] = useState("");     // Производительность
  const [unit, setUnit] = useState("m3h");             // Единицы измерения
  const [refillCapacity, setRefillCapacity] = useState("20"); // Произаодительность перезаправки
  const [selectedModel, setSelectedModel] = useState(null); // строка
  const [selectedModelData, setSelectedModelData] = useState(null); // объект
  const [showModal, setShowModal] = useState(false);
  const [hasDkompressor, setHasDkompressor] = useState(false);




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
// === ХУК ПОДБОРА ОБОРУДОВАНИЯ ===
useEffect(() => {
  const toM3h = (val, unit) => {
    const num = parseFloat(val);
    if (isNaN(num)) return 0;
    switch (unit) {
      case "lmin": return (num / 1000) * 60;
      case "kgh": return num / 1.2506;
      default: return num;
    }
  };

  const closest = (cat, key, target) =>
    data[cat]
      ? Object.values(data[cat]).reduce((a, b) =>
        Math.abs(b[key] - target) < Math.abs(a[key] - target) ? b : a)
      : null;

  const img = {
    oAdsorber: adsorberImg,
    nAdsorber: adsorberImg,
    kompressor: compressorImg,
    osyshitel: osyshitelImg,
    dKompressor: dcompressorImg,
    filtr: filtrImg,
    rampa: rampaImg,
    base: baseImg
  };

  const equipmentScheme = getEquipmentScheme();
  setHasDkompressor(equipmentScheme.includes("dKompressor"));

  const convertedUserM3h = toM3h(inputValue, unit);
  if (!inputValue || isNaN(convertedUserM3h) || convertedUserM3h <= 0) {
    setSelectedEquipment(equipmentScheme.map(() => ({
      model: "Укажите корректную производительность", url: img.base, price: 0
    })));
    setSelectedModel(null);
    setSelectedModelData(null);
    return;
  }

  // Подбор генератора
  const generatorData = data[generator];
  const targetPurity = generator === "oxygen"
    ? `${purity}%`
    : nitrogenPurityOptions[nitrogenPurityIndex];
  const purityIndexReverse = generator === "nitrogen"
    ? nitrogenPurityOptions.length - 1 - nitrogenPurityIndex
    : null;

  let selectedModelData = null;
  Object.values(generatorData)
    .sort((a, b) => {
      const getVal = m => generator === "oxygen"
        ? m.equipment?.productivity.find(p => p.purity === targetPurity)?.value ?? Infinity
        : m.equipment?.productivity[purityIndexReverse]?.value ?? Infinity;
      return getVal(a) - getVal(b);
    })
    .some(m => {
      const prodLine = generator === "oxygen"
        ? m.equipment?.productivity.find(p => p.purity === targetPurity)
        : m.equipment?.productivity[purityIndexReverse];
      if (prodLine && prodLine.value >= convertedUserM3h) {
        selectedModelData = m;
        return true;
      }
      return false;
    });

  // ❗ Если генератор не найден — показать сообщение и прервать подбор
  if (!selectedModelData) {
    setSelectedModel(null);
    setSelectedModelData(null);
    setSelectedEquipment(equipmentScheme.map(() => ({
      model: "Генератор не подобран — подбор остановлен", url: img.base, price: 0
    })));
    return;
  }

  // Генератор есть → продолжаем подбор
  const requiredAirM3h = selectedModelData.airNeed * 60;

  const currentPressure = generator === "oxygen"
    ? 7
    : nitrogenPressureOptions[nitrogenPressureIndex];
  const allowed = { 7: [6, 7], 8: [8], 10: [9, 10], 12.5: [11, 12, 13] };
  const pressureTarget = parseFloat(
    Object.entries(allowed).find(([_, arr]) => arr.includes(currentPressure))?.[0] ?? 7
  );

  const matchingCompressors = compressors
    .filter(c => c.specs.some(s =>
      s.pressure === pressureTarget &&
      s.minFlow <= requiredAirM3h &&
      requiredAirM3h <= s.maxFlow))
    .sort((a, b) => {
      const aPower = a.specs.find(s => s.pressure === pressureTarget).power;
      const bPower = b.specs.find(s => s.pressure === pressureTarget).power;
      return aPower - bPower;
    });

  const selectedKompressor = matchingCompressors[0]
    ? { ...matchingCompressors[0], model: matchingCompressors[0].id }
    : null;

  const requiredDryerFlowM3h = selectedModelData.airNeed * 60;
  const matchingDryers = dryers
    .filter(d => d.flow >= requiredDryerFlowM3h)
    .sort((a, b) => a.flow - b.flow);

  const selectedOsyshitel = matchingDryers[0]
    ? { ...matchingDryers[0], model: matchingDryers[0].id }
    : null;

  const selectedDKompressor = data.dKompressor?.["dcomp"] ?? {};

  const selectedFiltr = (() => {
    if (!selectedKompressor) return null;
    const maxFlow = selectedKompressor.specs.find(s => s.pressure === pressureTarget)?.maxFlow;
    if (!maxFlow) return null;

    const matchingFilters = filters
      .filter(f => f.flow >= maxFlow)
      .sort((a, b) => a.flow - b.flow);

    const f = matchingFilters[0];
    return f ? { ...f, model: f.id } : null;
  })();

  const selectedRampa = closest("rampa", "capacity", parseInt(refillCapacity)) ?? {};

  const equipmentDetails = equipmentScheme.map(key => {
    if (key === "oAdsorber" || key === "nAdsorber") {
      return {
        id: selectedModelData.id ?? selectedModelData.model,
        model: selectedModelData.model,
        name: selectedModelData.name ?? selectedModelData.model,
        type: selectedModelData.type ?? "Адсорбер",
        url: selectedModelData.url ?? img[key],
        price: selectedModelData.price ?? 0,
        includedInQuote: true
      };
    }
    if (["vResiver", "oResiver", "nResiver"].includes(key)) {
      const r = selectedModelData?.equipment?.[key];
      if (!r) return { id: "blankReceiver", model: "Ресивер не подобран", url: img.base, price: 0 };
      return {
        id: r.model,
        model: r.model,
        name: r.name ?? r.model,
        type: r.type ?? "Газовый ресивер",
        url: r.url ?? img.base,
        price: r.price ?? 0,
        includedInQuote: true
      };
    }
    const map = {
      kompressor: selectedKompressor,
      osyshitel: selectedOsyshitel,
      dKompressor: selectedDKompressor,
      filtr: selectedFiltr,
      rampa: selectedRampa
    };
    const sel = map[key];
    if (!sel || !sel.model)
      return { id: `blank_${key}`, model: `${key === "kompressor" ? "Компрессор" : key === "osyshitel" ? "Осушитель" : "Оборудование"} не подобран`, url: img.base, price: 0 };
    return {
      id: sel.id ?? sel.model,
      model: sel.model ?? "Оборудование",
      name: sel.name ?? sel.model,
      type: sel.type ?? "Элемент схемы",
      url: sel.url ?? img[key] ?? img.base,
      price: sel.price ?? 0,
      includedInQuote: key !== "dKompressor"
    };
  });

  setSelectedEquipment(equipmentDetails);
  setSelectedModel(selectedModelData?.model ?? null);
  setSelectedModelData(selectedModelData ?? null);
}, [
  unit, generator, system, pressure, purity,
  nitrogenPurityIndex, nitrogenPressureIndex,
  inputValue, refillCapacity, selectedDewPoint
]);




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
                    className={`flex-1 px-3 py-2 border rounded text-sm ${purity === "90" ? "bg-gray-700 text-white" : "border-gray-300 text-gray-800"}`}
                    onClick={() => setPurity("90")}
                  >
                    90%
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
            const hasValidModel =
              item?.model &&
              !item.model.includes("не подобран") &&
              item.model !== "Укажите корректную производительность";

            const isDisabled =
              !hasValidModel ||
              purity === "custom" ||
              pressure === "custom" ||
              item.id === "blank_dKompressor"; // или другой способ проверки D-компрессора

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
                    {hasValidModel && (
                      <>
                        <p className="text-gray-600 text-xs mb-1">{item.type}</p>
                        <p className="text-gray-800 text-sm font-medium mb-3">Цена: {item.price} ₽</p>
                      </>
                    )}
                  </div>
                  <label className="inline-flex items-center justify-center text-xs text-gray-700 mt-auto">
                    <input
                      type="checkbox"
                      className={`form-checkbox mr-2 ${isDisabled ? "opacity-50 cursor-not-allowed" : "text-red-500"
                        }`}
                      checked={item.includedInQuote || false}
                      onChange={() => toggleIncludeInQuote(index)}
                      disabled={isDisabled}
                    />
                    Включить в КП
                  </label>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Кнопка под оборудованием */}



      <div className="bg-white text-center mt-10">
        {(purity === "custom" || pressure === "custom" || hasDkompressor) ? (
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
            <form method="POST" action="https://script.google.com/macros/s/AKfycbz3bh5QgSzyn9mfbc7bQhkN1A6sV7yWM6Kj6IKkZicKiiXeyFmo9h1jBA5E2xV15E-R8w/exec" className="space-y-4">
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
