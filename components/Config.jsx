import React, { useState, useEffect } from "react";
import data from "/components/data.js";
import { compressors, dryers, filters, dCompressors } from './equipment';
// import "../../src/styles.css";
// 이미지: в Next.js кладём в public и используем путь-строку "/assets/..."
const baseImg = "/assets/base.png";
const adsorberImg = "/assets/adsorber.png";
const reciverImg = "/assets/reciver.png";
const compressorImg = "/assets/compressor.png";
const osyshitelImg = "/assets/osyshitel.png";
const filtrImg = "/assets/filtr.png";
const dcompressorImg = "/assets/dcompressor.png";
const rampaImg = "/assets/rampa.png";
import { generatePdf } from './PdfGenerator';
// import Main from './Main'
import PdfButton from './PdfButton'; // путь — где поместите файл



const Config = () => {
  // === 0. helper: безопасно получить строковый URL для картинки (поддержка старых Vite-импортов/next/image-like objects) ===
  const resolveUrl = (u) => {
    if (!u) return baseImg;
    // если строка — используем как есть
    if (typeof u === "string") {
      // Если это относительный путь без ведущего / — можно оставить, но лучше привести к '/assets/...' при необходимости.
      return u;
    }
    // если импортирован как модуль { default: "..."}
    if (u && typeof u === "object") {
      if (typeof u.default === "string") return u.default;
      if (typeof u.src === "string") return u.src;
      // иногда next/image дает объект — попытаемся найти строку в поле
      // fallback — baseImg
    }
    return baseImg;
  };

  // === 1. СОСТОЯНИЯ ВЫБОРА КОНФИГУРАЦИИ ===
  const [generator, setGenerator] = useState("oxygen");           // Газ: кислород или азот
  const [system, setSystem] = useState("generation");             // Система: генерация или заправка
  const [pressure, setPressure] = useState("5bar");               // Давление кислорода
  const [purity, setPurity] = useState("90");                     // Чистота кислорода
  const [unit, setUnit] = useState("m3h");                        // Единицы производительности
  const [inputValue, setInputValue] = useState("");               // Введённая производительность
  const [refillCapacity, setRefillCapacity] = useState("6");      // Объём заправки баллонов

  // === 2. СОСТОЯНИЯ ВЫБРАННЫХ МОДЕЛЕЙ И ОБОРУДОВАНИЯ ===
  const [selectedModel, setSelectedModel] = useState(null);               // Название модели генератора
  const [selectedModelData, setSelectedModelData] = useState(null);       // Объект с данными модели
  const [selectedEquipment, setSelectedEquipment] = useState([]);         // Массив подобранного оборудования

  // === 3. СОСТОЯНИЯ UI: МОДАЛКИ, ДОП. ОБОРУДОВАНИЕ, КНОПОК ===
  const [showModal, setShowModal] = useState(false);             // Открытие модального окна
  const [hasDkompressor, setHasDkompressor] = useState(false);   // Есть ли доп. компрессор
  const [showClarifyButton, setShowClarifyButton] = useState(false); // Показывать ли "Уточнить характеристики"

  // === 4. АЗОТ: ПАРАМЕТРЫ СЛАЙДЕРОВ ===
  const nitrogenPurityOptions = [
    "95%", "97%", "98%", "99%", "99.5%", "99.9%", "99.95%", "99.99%",
    "99.995%", "99.999%", "99.9995%"
  ];
  const nitrogenPressureOptions = [6, 7, 8, 9, 10, 11, 12, 13];
  const nitrogenDewPointOptions = [-20, -30, -40, -50, -60, -70];

  const [selectedDewPoint, setSelectedDewPoint] = useState(nitrogenDewPointOptions[0]); // Точка росы
  const [nitrogenPurityIndex, setNitrogenPurityIndex] = useState(0);                   // Индекс чистоты
  const [nitrogenPressureIndex, setNitrogenPressureIndex] = useState(0);               // Индекс давления

  // === 5. ОБРАБОТЧИКИ СЛАЙДЕРОВ ===
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

  // === 6. ОБРАБОТЧИК ГЕНЕРАЦИИ PDF ===
  const handleGeneratePdf = () => {
    generatePdf({
      gas: generator,
      system,
      model: selectedModelData,
      purity: generator === "oxygen" ? purity : nitrogenPurityOptions[nitrogenPurityIndex],
      pressure: generator === "oxygen" ? pressure : nitrogenPressureOptions[nitrogenPressureIndex],
      dewPoint: selectedDewPoint,
      unit,
      inputValue,
      refillCapacity,
      selectedEquipment
    });
  };

  // === 7. ОБРАБОТЧИК ИЗМЕНЕНИЯ ЧЕКБОКСА "ВКЛЮЧИТЬ В КП" ===
  const toggleIncludeInQuote = (index) => {
    const updatedEquipment = [...selectedEquipment];
    updatedEquipment[index].includedInQuote = !updatedEquipment[index].includedInQuote;
    setSelectedEquipment(updatedEquipment);
  };

  // === 8. useEffect: СЛАЙДЕРЫ UI — ОБНОВЛЕНИЕ СТИЛЕЙ ===
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

  // === 9. useEffect: ПОКАЗ КНОПКИ "УТОЧНИТЬ ХАРАКТЕРИСТИКИ" ===
  useEffect(() => {
    const isCustomOxygen =
      generator === "oxygen" &&
      (purity === "custom" || pressure === "custom");

    const isCustomNitrogen =
      generator === "nitrogen" &&
      (nitrogenPurityOptions[nitrogenPurityIndex] === "custom" ||
        !nitrogenPressureOptions[nitrogenPressureIndex]);

    const hasZeroPrice =
      selectedEquipment?.some(eq => eq?.price === 0);

    if (isCustomOxygen || isCustomNitrogen || hasZeroPrice) {
      setShowClarifyButton(true);
    } else {
      setShowClarifyButton(false);
    }
  }, [
    generator,
    purity,
    pressure,
    nitrogenPurityIndex,
    nitrogenPressureIndex,
    selectedEquipment // новая зависимость
  ]);





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


  // === useEffect: Основной подбор оборудования по текущей конфигурации ===
  useEffect(() => {
    // === 1. Конвертация пользовательского ввода в м³/ч ===
    const toM3h = (val, unit) => {
      const num = parseFloat(val);
      if (isNaN(num)) return 0;
      switch (unit) {
        case "lmin": return (num / 1000) * 60;
        case "kgh": return num / 1.2506;
        default: return num;
      }
    };

    // === 2. Функция поиска ближайшего значения в категории ===
    const closest = (cat, key, target) =>
      data[cat]
        ? Object.values(data[cat]).reduce((a, b) =>
          Math.abs(b[key] - target) < Math.abs(a[key] - target) ? b : a)
        : null;

    // === 3. Изображения по типам оборудования ===
    const img = {
      oAdsorber: adsorberImg,
      nAdsorber: adsorberImg,
      kompressor: compressorImg,
      osyshitel: osyshitelImg,
      dKompressor: dcompressorImg,
      filtr: filtrImg,
      rampa: rampaImg,
      base: baseImg,
      // ресивер: добавляем сюда, если потребуется
      vResiver: reciverImg,
      oResiver: reciverImg,
      nResiver: reciverImg
    };

    // === 4. Построение схемы ===
    const equipmentScheme = getEquipmentScheme();
    setHasDkompressor(equipmentScheme.includes("dKompressor"));

    // === 5. Проверка входных данных ===
    const convertedUserM3h = toM3h(inputValue, unit);
    if (!inputValue || isNaN(convertedUserM3h) || convertedUserM3h <= 0) {
      setSelectedModel(null);
      setSelectedModelData(null);
      setSelectedEquipment(
        equipmentScheme.map(() => ({
          model: "Укажите корректную производительность",
          url: img.base,
          price: 0
        }))
      );
      return;
    }

    // === 6. Подбор генератора ===
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

    if (!selectedModelData) {
      setSelectedModel(null);
      setSelectedModelData(null);
      setSelectedEquipment(
        equipmentScheme.map(() => ({
          model: "Генератор не подобран — подбор остановлен",
          url: img.base,
          price: 0
        }))
      );
      return;
    }

    // === 7. Подбор компрессора ===
    const requiredAirM3h = selectedModelData.airNeed * 60;

    const currentPressure = generator === "oxygen"
      ? 7
      : nitrogenPressureOptions[nitrogenPressureIndex];

    const allowed = { 7: [6, 7], 8: [8], 10: [9, 10], 12.5: [11, 12, 13] };
    const pressureTarget = parseFloat(
      Object.entries(allowed).find(([_, arr]) => arr.includes(currentPressure))?.[0] ?? 7
    );

    const matchingCompressors = compressors
      .filter(c =>
        c.specs.some(s =>
          s.pressure === pressureTarget &&
          s.minFlow <= requiredAirM3h &&
          requiredAirM3h <= s.maxFlow))
      .sort((a, b) =>
        a.specs.find(s => s.pressure === pressureTarget).power -
        b.specs.find(s => s.pressure === pressureTarget).power);

    const selectedKompressor = matchingCompressors[0]
      ? { ...matchingCompressors[0], model: matchingCompressors[0].id }
      : null;

    // === 8. Подбор осушителя ===
    const selectedOsyshitel = (() => {
      if (!requiredAirM3h || !selectedDewPoint) return null;

      const dewPoint = selectedDewPoint;
      const isOxygen = generator === "oxygen";
      const isRefrigerant = isOxygen || [-20, -30, -40, -50].includes(dewPoint);
      const isAdsorption = !isRefrigerant;

      // Текущее давление
      const pressure = isOxygen ? 7 : nitrogenPressureOptions[nitrogenPressureIndex];
      if (!pressure) return null;

      // Коэффициенты давления
      const pressureCoefficients = {
        refrigerant: {
          6: 0.94, 7: 1.00, 8: 1.04, 9: 1.075, 10: 1.11, 11: 1.135, 12: 1.16, 13: 1.19
        },
        adsorption: {
          6: 0.88, 7: 1.00, 8: 1.12, 9: 1.25, 10: 1.37, 11: 1.5, 12: 1.6, 13: 1.7
        }
      };

      // Коэффициент пересчёта
      const coeff = isOxygen
        ? 1
        : isRefrigerant
          ? pressureCoefficients.refrigerant[pressure]
          : pressureCoefficients.adsorption[pressure];

      if (!coeff) return null;

      const adjustedRequiredFlow = requiredAirM3h / coeff;

      // Фильтрация по типу
      const filtered = dryers.filter(d => {
        return isRefrigerant
          ? d.type === 'Рефрижираторный осушитель'
          : d.type === 'Адсорбционный осушитель';
      });

      // Сортировка по возрастанию производительности
      const matchingDryers = filtered
        .filter(d => d.flow >= adjustedRequiredFlow)
        .sort((a, b) => a.flow - b.flow);

      const dryer = matchingDryers[0];
      if (!dryer) return null;

      const selected = { ...dryer, model: dryer.id };

      // Цена для адсорбционных моделей зависит от давления
      if (isAdsorption && dryer.specs) {
        const suitableSpec = dryer.specs.find(spec =>
          (pressure <= 10 && spec.maxPressure === 10) ||
          (pressure > 10 && spec.maxPressure === 16)
        );
        if (suitableSpec) selected.price = suitableSpec.price;
      }

      return selected;
    })();




    // === 9. Подбор дожимающего компрессора ===
    const selectedDKompressor = (() => {
      // Используем напрямую импортированный массив dCompressors
      const list = dCompressors;

      // Подбираем только если выбрана система заправки баллонов
      if (system !== "refill") return {};

      // Берём производительность из генератора (в м³/ч)
      const flow = selectedModelData?.equipment?.productivity?.[0]?.value;
      if (!flow) return {};

      // Фильтруем компрессоры с подходящей производительностью
      const suitable = list
        .filter(c => c.flow >= flow)
        .sort((a, b) => a.flow - b.flow); // от меньшего к большему

      const selected = suitable[0];
      return selected ? { ...selected, model: selected.id } : {};
    })();




    // === 10. Подбор фильтра ===
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

    // === 11. Подбор рампы: возвращаем и ключ (id) и объект, чтобы в PDF подтягивалось описание ===
    const findClosestEntry = (cat, key, target) => {
      const entries = Object.entries(data[cat] || {});
      if (!entries.length) return [null, null];
      // Начинаем с первого как опорного
      return entries.reduce((best, [k, v]) => {
        const bestVal = best[1][key];
        const curVal = v[key];
        return Math.abs(curVal - target) < Math.abs(bestVal - target) ? [k, v] : best;
      }, [entries[0][0], entries[0][1]]);
    };

    const [rampaKey, rampaValue] = findClosestEntry("rampa", "capacity", parseInt(refillCapacity));
    const selectedRampa = rampaValue
      ? { ...rampaValue, id: rampaKey, model: rampaValue.model } // important: id = ключ ('ramp-20')
      : {};

    // === 12. Сбор оборудования в финальный массив ===
    const equipmentDetails = equipmentScheme.map(key => {
      if (key === "oAdsorber" || key === "nAdsorber") {
        return {
          id: selectedModelData.id ?? selectedModelData.model,
          model: selectedModelData.model,
          name: selectedModelData.name ?? selectedModelData.model,
          type: selectedModelData.type ?? "Генератор",
          url: resolveUrl(selectedModelData.url ?? img[key]),
          price: selectedModelData.price ?? 0,
          includedInQuote: true
        };
      }
      if (["vResiver", "oResiver", "nResiver"].includes(key)) {
        const r = selectedModelData?.equipment?.[key];
        if (!r) return {
          id: "blankReceiver",
          model: "Ресивер не подобран",
          url: img.base,
          price: 0
        };
        return {
          id: r.model,
          model: r.model,
          name: r.name ?? r.model,
          type: r.type ?? "Газовый ресивер",
          url: resolveUrl(r.url ?? img.base),
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
      if (!sel || !sel.model) {
        const fallbackName = {
          kompressor: "Компрессор не подобран",
          osyshitel: "Осушитель не подобран",
          filtr: "Фильтр не подобран",
          dKompressor: "Дожимающий компрессор не подобран",
          rampa: "Рампа не подобрана"
        };
        return {
          id: `blank_${key}`,
          model: fallbackName[key] ?? "Оборудование не подобрано",
          url: img.base,
          price: 0
        };
      }

      return {
        id: sel.id ?? sel.model,
        model: sel.model,
        name: sel.name ?? sel.model,
        type: sel.type ?? "Элемент схемы",
        url: resolveUrl(sel.url ?? img[key] ?? img.base),
        price: sel.price ?? 0,
        includedInQuote: true // ✅ ВСЕГДА включено, включая dKompressor
      };

    });

    // === 13. Обновление состояний ===
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
      {/* CONFIGURATOR */}
      <section
        id="config"
        className="relative isolate overflow-hidden bg-gradient-to-b from-white via-red-50/50 to-slate-50 py-16 sm:py-20"
      >
        {/* Атмосфера: голубые свечения и газовые потоки */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "rgba(147,197,253,0.20)" }}
          />
          <div
            className="absolute -right-40 top-80 h-96 w-96 rounded-full blur-3xl"
            style={{ background: "rgba(96,165,250,0.13)" }}
          />
  
          <svg
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 h-96 w-full opacity-50"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="configWave" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FEE2E2" stopOpacity="0" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.35" />
              </linearGradient>
            </defs>
            <path
              d="M0 260 C180 190 350 340 540 260 S850 180 1040 270 S1300 320 1440 220 L1440 500 L0 500 Z"
              fill="url(#configWave)"
            />
            <path
              d="M0 260 C180 190 350 340 540 260 S850 180 1040 270 S1300 320 1440 220"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="1.2"
              opacity="0.35"
            />
            <path
              d="M0 290 C180 220 350 370 540 290 S850 210 1040 300 S1300 350 1440 250"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>
  
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  
          {/* Заголовок */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-200/70 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-red-700 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Блицгаз · Инженерный подбор
            </div>
  
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Конфигуратор оборудования
            </h2>
  
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Укажите параметры газоснабжения — подберём генератор
              и необходимое вспомогательное оборудование.
            </p>
          </div>
  
          {/* ОСНОВНАЯ ПАНЕЛЬ */}
          <div className="relative overflow-hidden rounded-3xl border border-white/90 bg-white/65 p-5 shadow-[0_20px_70px_rgba(37,99,235,0.09)] backdrop-blur-2xl sm:p-8 md:p-10">
  
            {/* Верхний декоративный блик */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/70 to-transparent" />
  
            {/* ГРУППА 1. Газ и система */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
  
              {/* Газ */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-700">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">Производимый газ</h3>
                    <p className="text-xs text-slate-500">Выберите тип генератора</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-2 gap-2 rounded-2xl border border-red-100 bg-red-50/60 p-1.5">
                  {[
                    { id: "oxygen", label: "Кислород" },
                    { id: "nitrogen", label: "Азот" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={generator === item.id}
                      onClick={() => setGenerator(item.id)}
                      className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        generator === item.id
                          ? "bg-[var(--color-red-600)] text-white shadow-lg shadow-red-600/20"
                          : "text-slate-600 hover:bg-white hover:text-red-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
  
              {/* Система */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-700">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 7h16M4 12h16M4 17h16" />
                      <circle cx="8" cy="7" r="1.5" fill="currentColor" />
                      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
                      <circle cx="10" cy="17" r="1.5" fill="currentColor" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">Тип газоснабжения</h3>
                    <p className="text-xs text-slate-500">Способ получения газа</p>
                  </div>
                </div>
  
                <div className="grid grid-cols-2 gap-2 rounded-2xl border border-red-100 bg-red-50/60 p-1.5">
                  {[
                    { id: "generation", label: "Генерация" },
                    { id: "refill", label: "Заправка баллонов" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={system === item.id}
                      onClick={() => setSystem(item.id)}
                      className={`rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200 ${
                        system === item.id
                          ? "bg-[var(--color-red-600)] text-white shadow-lg shadow-red-600/20"
                          : "text-slate-600 hover:bg-white hover:text-red-700"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Разделитель */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
  
            {/* ГРУППА 2. Технические параметры */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">
                Параметры газа
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Задайте требуемые характеристики газоснабжения
              </p>
            </div>
  
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
  
              {/* КИСЛОРОД */}
              {generator === "oxygen" && (
                <>
                  {/* Чистота */}
                  <div className="rounded-2xl border border-white bg-white/75 p-5 shadow-sm">
                    <p className="mb-4 text-sm font-semibold text-slate-700">
                      Чистота кислорода
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "90", label: "90%" },
                        { id: "custom", label: "Нестандарт" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPurity(item.id)}
                          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                            purity === item.id
                              ? "border-[var(--color-red-600)] bg-[var(--color-red-600)] text-white shadow-md shadow-red-600/20"
                              : "border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:bg-red-50"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
  
                  {/* Давление */}
                  <div className="rounded-2xl border border-white bg-white/75 p-5 shadow-sm">
                    <p className="mb-4 text-sm font-semibold text-slate-700">
                      Рабочее давление
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "5bar", label: "5 бар" },
                        { id: "custom", label: "Нестандарт" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setPressure(item.id)}
                          className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-all ${
                            pressure === item.id
                              ? "border-[var(--color-red-600)] bg-[var(--color-red-600)] text-white shadow-md shadow-red-600/20"
                              : "border-slate-200 bg-white text-slate-600 hover:border-red-300 hover:bg-red-50"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
  
              {/* АЗОТ */}
              {generator === "nitrogen" && (
                <>
                  {/* Чистота азота */}
                  <div className="rounded-2xl border border-white bg-white/75 p-5 shadow-sm md:col-span-2">
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Чистота азота
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Требуемое содержание азота
                        </p>
                      </div>
                      <span className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-lg font-bold tabular-nums text-red-700">
                        {nitrogenPurityOptions[nitrogenPurityIndex]}
                      </span>
                    </div>
  
                    <input
                      type="range"
                      min="0"
                      max={nitrogenPurityOptions.length - 1}
                      step="1"
                      value={nitrogenPurityIndex}
                      onChange={handlePurityChange}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full focus:outline-none focus:ring-2 focus:ring-red-200
                      [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white
                      [&::-webkit-slider-thumb]:bg-[var(--color-red-600)] [&::-webkit-slider-thumb]:shadow-lg
                      [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
                      [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4
                      [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[var(--color-red-600)]"
                      style={{
                        background: `linear-gradient(to right, var(--color-red-600) ${
                          (nitrogenPurityIndex / (nitrogenPurityOptions.length - 1)) * 100
                        }%, #FEE2E2 ${
                          (nitrogenPurityIndex / (nitrogenPurityOptions.length - 1)) * 100
                        }%)`,
                      }}
                    />
  
                    <div className="mt-3 flex justify-between gap-1">
                      {nitrogenPurityOptions.map((val, index) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setNitrogenPurityIndex(index)}
                          className={`text-[10px] transition-colors sm:text-xs ${
                            index === nitrogenPurityIndex
                              ? "font-bold text-red-700"
                              : "text-slate-400 hover:text-red-600"
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
  
                  {/* Давление */}
                  <div className="rounded-2xl border border-white bg-white/75 p-5 shadow-sm">
                    <div className="mb-5 flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Рабочее давление
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Давление азота на выходе
                        </p>
                      </div>
                      <span className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-lg font-bold tabular-nums text-red-700">
                        {nitrogenPressureOptions[nitrogenPressureIndex]} бар
                      </span>
                    </div>
  
                    <input
                      type="range"
                      min="0"
                      max={nitrogenPressureOptions.length - 1}
                      step="1"
                      value={nitrogenPressureIndex}
                      onChange={handlePressureChange}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full focus:outline-none focus:ring-2 focus:ring-red-200
                      [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white
                      [&::-webkit-slider-thumb]:bg-[var(--color-red-600)] [&::-webkit-slider-thumb]:shadow-lg
                      [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
                      [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4
                      [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[var(--color-red-600)]"
                      style={{
                        background: `linear-gradient(to right, var(--color-red-600) ${
                          (nitrogenPressureIndex / (nitrogenPressureOptions.length - 1)) * 100
                        }%, #FEE2E2 ${
                          (nitrogenPressureIndex / (nitrogenPressureOptions.length - 1)) * 100
                        }%)`,
                      }}
                    />
  
                    <div className="mt-3 flex justify-between text-xs text-slate-400">
                      {nitrogenPressureOptions.map((val, index) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setNitrogenPressureIndex(index)}
                          className={index === nitrogenPressureIndex ? "font-bold text-red-700" : "hover:text-red-600"}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
  
                  {/* Точка росы */}
                  <div className="rounded-2xl border border-white bg-white/75 p-5 shadow-sm">
                    <div className="mb-5 flex items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Точка росы
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Температура точки росы под давлением
                        </p>
                      </div>
                      <span className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-lg font-bold tabular-nums text-red-700">
                        {selectedDewPoint} °C
                      </span>
                    </div>
  
                    <input
                      type="range"
                      min="-70"
                      max="-20"
                      step="10"
                      value={selectedDewPoint}
                      onChange={(e) => setSelectedDewPoint(parseInt(e.target.value, 10))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-full focus:outline-none focus:ring-2 focus:ring-red-200
                      [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full
                      [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white
                      [&::-webkit-slider-thumb]:bg-[var(--color-red-600)] [&::-webkit-slider-thumb]:shadow-lg
                      [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5
                      [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4
                      [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-[var(--color-red-600)]"
                      style={{
                        background: `linear-gradient(to right, var(--color-red-600) ${
                          ((selectedDewPoint + 70) / 50) * 100
                        }%, #FEE2E2 ${
                          ((selectedDewPoint + 70) / 50) * 100
                        }%)`,
                      }}
                    />
  
                    <div className="mt-3 flex justify-between text-xs text-slate-400">
                      {[...nitrogenDewPointOptions].sort((a, b) => a - b).map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => setSelectedDewPoint(val)}
                          className={val === selectedDewPoint ? "font-bold text-red-700" : "hover:text-red-600"}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
  
            {/* Заправка баллонов */}
            {system === "refill" && (
              <div className="mt-5 rounded-2xl border border-red-100 bg-red-50/50 p-5">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Конфигурация заправочной рампы
                </label>
                <select
                  className="w-full rounded-xl border border-red-100 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100 sm:max-w-sm"
                  value={refillCapacity}
                  onChange={(e) => setRefillCapacity(e.target.value)}
                >
                  <option value="6">2 × 3 баллона</option>
                  <option value="5">5 баллонов</option>
                  <option value="10">10 баллонов</option>
                </select>
              </div>
            )}
  
            {/* Разделитель */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent" />
  
            {/* ГРУППА 3. Производительность */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
  
              {/* Ввод производительности */}
              <div className="rounded-2xl border border-white bg-white/75 p-5 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-100 text-red-700">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 19V5M4 19h16M8 15l3-4 3 2 5-7" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">Производительность</h3>
                    <p className="text-xs text-slate-500">Требуемый объём газа</p>
                  </div>
                </div>
  
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    placeholder="Введите значение"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-red-100 bg-white px-4 py-3 text-base font-semibold text-slate-900 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                  />
  
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="rounded-xl border border-red-100 bg-white px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                  >
                    <option value="m3h">м³/час</option>
                    <option value="lmin">л/мин</option>
                    <option value="kgh">кг/час</option>
                  </select>
                </div>
              </div>
  
              {/* Результат подбора */}
              <div className="relative isolate overflow-hidden rounded-2xl border border-red-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.07)]">
                <div className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full bg-red-50 blur-2xl" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[var(--color-red-600)]" />
  
                <div className="relative">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">
                      Результат подбора
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Автоматически
                    </span>
                  </div>
  
                  <p className="mb-1 text-xs font-medium text-slate-500">
                    Подобранный генератор
                  </p>
                  <p className="mb-6 min-h-12 text-xl font-bold leading-snug text-slate-900">
                    {selectedModel || "Ожидает параметров"}
                  </p>
  
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="mb-1 text-xs font-medium text-slate-500">
                      Расчётная стоимость оборудования
                    </p>
                    <p className="text-3xl font-extrabold tracking-tight tabular-nums text-slate-900">
                      {calculateTotalPrice().toLocaleString("ru-RU")} <span className="text-xl font-bold text-red-700">₽</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="mt-5 flex items-start gap-2 rounded-xl bg-red-50/60 px-4 py-3 text-xs leading-relaxed text-slate-500">
              <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
              Подбор оборудования выполняется автоматически на основании заданных параметров. Итоговая конфигурация и стоимость не является публичной офертой.
            </div>
          </div>
        </div>
      </section>
  
      {/* ПОДОБРАННОЕ ОБОРУДОВАНИЕ */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
  
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.18em] text-red-600">
              Комплектация установки
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Подобранное оборудование
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
              Все основные компоненты газоразделительной установки,
              рассчитанные под ваши технические требования.
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {selectedEquipment.map((item, index) => {
              const hasValidModel =
                item?.model &&
                !item.model.includes("не подобран") &&
                item.model !== "Укажите корректную производительность";
  
              const isDisabled =
                !hasValidModel ||
                purity === "custom" ||
                pressure === "custom" ||
                item.id === "blank_dKompressor";
  
              return (
                <article
                  key={index}
                  className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    item.includedInQuote
                      ? "border-red-300 shadow-[0_12px_32px_rgba(220,38,38,0.09)]"
                      : "border-slate-200 shadow-[0_5px_20px_rgba(15,23,42,0.035)]"
                  } hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_16px_36px_rgba(15,23,42,0.09)]`}
                >
                  {/* Изображение оборудования */}
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100/80 px-5 py-4">
                    <div className="pointer-events-none absolute inset-x-8 bottom-4 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
                    {item.includedInQuote && (
                      <span className="absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-red-700 shadow-sm backdrop-blur">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-red-600)]" />
                        В КП
                      </span>
                    )}
                    <img
                      src={item.url}
                      alt={item.model}
                      className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_10px_rgba(15,23,42,0.10)] transition-transform duration-500 group-hover:scale-[1.06]"
                    />
                  </div>
  
                  {/* Информация */}
                  <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                    <div className="mb-5 flex-1">
                      <p className="mb-2 min-h-8 text-[10px] font-bold uppercase leading-relaxed tracking-[0.12em] text-red-700">
                        {item.type || "Оборудование"}
                      </p>
  
                      <h3 className="min-h-11 text-[15px] font-bold leading-snug text-slate-900">
                        {item.model}
                      </h3>
  
                      {hasValidModel ? (
                        <div className="mt-4 flex items-baseline gap-1.5">
                          <p className="text-xl font-extrabold tracking-tight tabular-nums text-slate-900">
                            {Number(item.price || 0).toLocaleString("ru-RU")}
                          </p>
                          <span className="text-sm font-bold text-slate-500">₽</span>
                        </div>
                      ) : (
                        <p className="mt-4 text-sm font-medium text-slate-400">
                          Ожидает подбора
                        </p>
                      )}
                    </div>
  
                    {/* Включение в КП */}
                    <label
                      className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm transition-all ${
                        isDisabled
                          ? "cursor-not-allowed border-slate-100 bg-slate-50 text-slate-400"
                          : item.includedInQuote
                            ? "border-red-200 bg-red-50 text-red-800"
                            : "border-slate-200 bg-white text-slate-600 hover:border-red-200 hover:bg-red-50/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={item.includedInQuote || false}
                        onChange={() => toggleIncludeInQuote(index)}
                        disabled={isDisabled}
                        className="h-4 w-4 shrink-0 cursor-pointer accent-[var(--color-red-600)] disabled:cursor-not-allowed"
                      />
                      <span className="font-semibold">
                        Включить в КП
                      </span>
                    </label>
                  </div>
                </article>
              );
            })}
          </div>
  
          {/* ИТОГ И PDF */}
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-[var(--color-red-600)]" />
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-red-50 blur-3xl" />
  
            <div className="relative flex flex-col gap-7 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
              <div className="min-w-0 text-center lg:text-left">
                <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-700">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 7h16M4 12h16M4 17h16" />
                      <path d="M7 4v6M17 14v6" />
                    </svg>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-700">
                    Сводка комплектации
                  </p>
                </div>
  
                <p className="mb-1 text-sm font-medium text-slate-500">
                  Ориентировочная стоимость выбранного оборудования
                </p>
                <p className="text-4xl font-extrabold tracking-tight tabular-nums text-slate-950 sm:text-5xl">
                  {calculateTotalPrice().toLocaleString("ru-RU")} <span className="text-2xl text-red-700">₽</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  Состав коммерческого предложения зависит от выбранных компонентов.
                </p>
              </div>
  
              <div className="w-full shrink-0 lg:w-auto">
                <PdfButton
                  showClarifyButton={showClarifyButton}
                  setShowModal={setShowModal}
                  isEquipmentValid={isEquipmentValid}
                  anyIncluded={anyIncluded}
                  generator={generator}
                  pressure={pressure}
                  system={system}
                  selectedModelData={selectedModelData}
                  purity={purity}
                  nitrogenPurityOptions={nitrogenPurityOptions}
                  nitrogenPurityIndex={nitrogenPurityIndex}
                  nitrogenPressureOptions={nitrogenPressureOptions}
                  nitrogenPressureIndex={nitrogenPressureIndex}
                  selectedDewPoint={selectedDewPoint}
                  unit={unit}
                  inputValue={inputValue}
                  refillCapacity={refillCapacity}
                  selectedEquipment={selectedEquipment}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  
      {/* МОДАЛЬНОЕ ОКНО */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-md">
          <div className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/80 bg-white/95 p-6 shadow-2xl shadow-slate-900/20 backdrop-blur-2xl sm:p-8">
  
            <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-red-100/70 blur-3xl" />
  
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Закрыть"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
            >
              ×
            </button>
  
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M12 3 2.5 20h19L12 3Z" />
                  <path d="M12 9v5M12 17h.01" />
                </svg>
              </div>
  
              <h2 className="mb-3 text-2xl font-bold text-slate-900">
                Уточнение характеристик
              </h2>
  
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Для нестандартной конфигурации потребуется дополнительное согласование.
                Оставьте контакты — наш инженер свяжется с вами и поможет подобрать решение.
              </p>
  
              <form
                method="POST"
                action="https://script.google.com/macros/s/AKfycbz3bh5QgSzyn9mfbc7bQhkN1A6sV7yWM6Kj6IKkZicKiiXeyFmo9h1jBA5E2xV15E-R8w/exec"
                className="relative space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Имя / Компания"
                  className="w-full rounded-xl border border-red-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                />
  
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-mail для обратной связи"
                  className="w-full rounded-xl border border-red-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                />
  
                <textarea
                  name="message"
                  required
                  placeholder="Ваш запрос"
                  defaultValue={`Газ: ${generator === "oxygen" ? "Кислород" : "Азот"}; система: ${system === "refill" ? "Заправка баллонов" : "Генерация"}; производительность: ${inputValue} ${unit}; генератор: ${selectedModel || "Не подобран"}. Прошу уточнить конфигурацию.`}
                  className="min-h-32 w-full resize-y rounded-xl border border-red-100 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                />
  
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-red-600)] px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl"
                  >
                    Отправить запрос
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>
  
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                  >
                    Отмена
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      </>
      );
    };
    
    export default Config;