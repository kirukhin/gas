import React, { useState, useEffect } from "react";
import data from "/public/components/data.js";
import "../../src/styles.css";
import baseImg from "/base.png";
import adsorberImg from "/adsorber.png";
import reciverImg from "/reciver.png";
import compressorImg from "/compressor.png";
import osyshitelImg from "/osyshitel.png";
import filtrImg from "/filtr.png";
import dcompressorImg from "/dcompressor.png";
import rampaImg from "/rampa.png";

const Config = () => {
  // --- Состояния выбора ---
  const [generator, setGenerator] = useState("oxygen"); // Генератор: кислород/азот
  const [system, setSystem] = useState("generation");   // Система: генерация/заправка
  const [pressure, setPressure] = useState("5bar");     // Давление: 5/нестандартное бар
  const [purity, setPurity] = useState("90");           // Чистота кислорода
  const [inputValue, setInputValue] = useState("");     // Производительность
  const [unit, setUnit] = useState("lmin");             // Единицы измерения
  const [refillCapacity, setRefillCapacity] = useState("20"); // Произаодительность перезаправки


  // --- Состояния оборудования ---
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

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

    // --- фикс: выносим колбэк наружу ---
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

      // --- Функция выбора ближайшего оборудования ---
      const findClosestMatch = (dataCategory, key, targetValue) => {
        if (!data[dataCategory]) return null;
        return Object.values(data[dataCategory]).reduce((prev, curr) =>
          Math.abs(curr[key] - targetValue) < Math.abs(prev[key] - targetValue) ? curr : prev
        );
      };

      // --- Подбор компрессора и осушителя всегда (вне зависимости от inputValue)
      let selectedKompressor = {};
      let selectedOsyshitel = {};

      if (generator === "oxygen") {
        selectedKompressor = data.kompressor?.["5bar"] || {};
        selectedOsyshitel = data.osyshitel?.["Os-20"] || {};
      } else {
        selectedKompressor = findClosestMatch("kompressor", "pressure", nitrogenPressureOptions[nitrogenPressureIndex]) || {};
        selectedOsyshitel = findClosestMatch("osyshitel", "dewPoint", selectedDewPoint) || {};
      }

      const selectedDKompressor = data.dKompressor?.["dcomp"] || {};
      const selectedFiltr = data.filtr?.["filtr"] || {};
      const selectedRampa = findClosestMatch("rampa", "capacity", parseInt(refillCapacity)) || {};

      const numericValue = parseFloat(inputValue);
      const imageMap = {
        oAdsorber: adsorberImg,
        nAdsorber: adsorberImg,
        kompressor: compressorImg,
        osyshitel: osyshitelImg,
        dKompressor: dcompressorImg,
        filtr: filtrImg,
        rampa: rampaImg,
      };

      if (!inputValue || isNaN(numericValue)) {
        const equipmentDetails = equipmentScheme.map((key) => {
          if (key === "kompressor") {
            return {
              model: selectedKompressor?.model || "Компрессор",
              url: selectedKompressor?.url || imageMap[key] || baseImg,
              price: selectedKompressor?.price || 0,
            };
          }

          if (key === "osyshitel") {
            return {
              model: selectedOsyshitel?.model || "Осушитель",
              url: selectedOsyshitel?.url || imageMap[key] || baseImg,
              price: selectedOsyshitel?.price || 0,
            };
          }

          return {
            model: "Укажите производительность",
            url: baseImg,
            price: 0,
          };
        });

        setSelectedEquipment(equipmentDetails);
        setSelectedModel(null);
        return;
      }


      if (!data || !data[generator]) return;
      const generatorData = data[generator];

      const convertedValueM3H = (() => {
        if (unit === "lmin") return (numericValue / 1000) * 60;
        if (unit === "m3h") return numericValue;
        if (unit === "kgh") return numericValue / 1.2506;
        return 0;
      })();

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
      const equipmentDetails = equipmentScheme.map((key) => {
        if (key === "oAdsorber" || key === "nAdsorber") {
          return {
            model: selectedModelData.model,
            url: selectedModelData.url || imageMap[key],
            price: selectedModelData.price || 0,
          };
        }

        if (key === "vResiver" || key === "oResiver" || key === "nResiver") {
          const resiverData = selectedModelData?.equipment?.[key];
          return {
            model: resiverData?.model || "Неизвестно",
            url: resiverData?.url || baseImg,
            price: resiverData?.price || 0,
          };
        }

        let selectedEquipment = {};
        if (key === "kompressor") selectedEquipment = selectedKompressor;
        if (key === "osyshitel") selectedEquipment = selectedOsyshitel;
        if (key === "dKompressor") selectedEquipment = selectedDKompressor;
        if (key === "filtr") selectedEquipment = selectedFiltr;
        if (key === "rampa") selectedEquipment = selectedRampa;

        return {
          model: selectedEquipment?.model || "Неизвестно",
          url: selectedEquipment?.url || imageMap[key] || baseImg,
          price: selectedEquipment?.price || 0,
        };
      });


      setSelectedEquipment(equipmentDetails);
      setSelectedModel(selectedModelData.model);
    };

    findEquipment();
  }, [unit, generator, system, pressure, purity, nitrogenPurityIndex, nitrogenPressureIndex, inputValue, refillCapacity, selectedDewPoint]);






  // --- Подсчёт общей стоимости ---
  const calculateTotalPrice = () => {
    return selectedEquipment.reduce((total, item) => total + item.price, 0);
  };


  return (
    <div className="container-fluid py-4">
      <h2 className="text-center">Конфигуратор оборудования</h2>
      <div className="row align-items-center">
        <div className="col-md-6 px-5">
          <h5>Выберите газ</h5>
          <div className="btn-group btn-group-toggle d-flex mb-3">
            <button
              className={`btn btn-outline-primary ${generator === "oxygen" ? "active" : ""}`}
              onClick={() => setGenerator("oxygen")}
            >
              Кислород
            </button>
            <button
              className={`btn btn-outline-primary ${generator === "nitrogen" ? "active" : ""}`}
              onClick={() => setGenerator("nitrogen")}
            >
              Азот
            </button>
          </div>
          <h5>Выберите систему</h5>
          <div className="btn-group btn-group-toggle d-flex mb-3">
            <button
              className={`btn btn-outline-secondary ${system === "generation" ? "active" : ""}`}
              onClick={() => setSystem("generation")}
            >
              Генерация
            </button>

            <button
              className={`btn btn-outline-secondary ${system === "refill" ? "active" : ""}`}
              onClick={() => setSystem("refill")}
            >
              Заправка баллонов
            </button>
          </div>
          {system === "refill" && (
            <div className="mt-3">
              <h5>Выберите производительность заправочной станции</h5>
              <select
                className="form-select"
                value={refillCapacity}
                onChange={(e) => setRefillCapacity(e.target.value)}
              >
                <option value="20">20 баллонов в сутки</option>
                <option value="45">45 баллонов в сутки</option>
                <option value="65">65 баллонов в сутки</option>
                <option value="90">90 баллонов в сутки</option>
                <option value="125">125 баллонов в сутки</option>
              </select>
              <br></br>
            </div>

          )}




          {generator === "oxygen" ? (
            <>
              <h5>Выберите чистоту кислорода</h5>
              <div className="btn-group btn-group-toggle d-flex mb-3">
                <button
                  className={`btn btn-outline-secondary ${purity === "90" ? "active" : ""}`}
                  onClick={() => setPurity("90")}
                >
                  90%
                </button>
                <button
                  className={`btn btn-outline-secondary ${purity === "93" ? "active" : ""}`}
                  onClick={() => setPurity("93")}
                >
                  93%
                </button>
              </div>
              <h5>Выберите давление</h5>
              <div className="btn-group btn-group-toggle d-flex mb-3">
                <button
                  className={`btn btn-outline-secondary ${pressure === "5bar" ? "active" : ""}`}
                  onClick={() => setPressure("5bar")}
                >
                  5 бар
                </button>
                <button
                  className={`btn btn-outline-secondary ${pressure === "custom" ? "active" : ""}`}
                  onClick={() => setPressure("custom")}
                >
                  Нестандартное
                </button>
              </div>
            </>
          ) : (
            <>
              <h5>Настройки для азота</h5>




              {/* Ползунок чистоты газа */}
              <div className="row justify-content-center">
                <div className="col-12 container-fluid">

                  <div className="range-item">
                    <label>Чистота азота: <strong>{nitrogenPurityOptions[nitrogenPurityIndex]}</strong></label>

                    <div className="range-input d-flex position-relative">
                      <input
                        type="range"
                        min="0"
                        max={nitrogenPurityOptions.length - 1}
                        step="1"
                        className="form-range"
                        value={nitrogenPurityIndex}
                        onChange={handlePurityChange}
                      />
                      <div className="range-line">
                        <span className="active-line"></span>
                      </div>
                      <div className="dot-line">
                        <span className="active-dot"></span>
                      </div>
                    </div>

                    <ul className="list-inline list-unstyled">
                      {nitrogenPurityOptions.map((val, index) => (
                        <li key={index} className="list-inline-item">
                          <span>{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>





              {/* Ползунок давления */}
              <div className="range-item">
                <label>Давление: <strong>{nitrogenPressureOptions[nitrogenPressureIndex]} бар</strong></label>

                <div className="range-input d-flex position-relative">
                  <input
                    type="range"
                    min="0"
                    max={nitrogenPressureOptions.length - 1}
                    step="1"
                    className="form-range"
                    value={nitrogenPressureIndex}
                    onChange={handlePressureChange}
                  />
                  <div className="range-line">
                    <span className="active-line"></span>
                  </div>
                  <div className="dot-line">
                    <span className="active-dot"></span>
                  </div>
                </div>

                <ul className="list-inline list-unstyled">
                  {nitrogenPressureOptions.map((val, index) => (
                    <li key={index} className="list-inline-item">
                      <span>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>



              {/* Ползунок точки росы */}
              <div className="row justify-content-center">
                <div className="col-12 container-fluid">

                  <div className="range-item">
                    <label>
                      Точка росы: <strong>{selectedDewPoint} °C</strong>
                    </label>

                    <div className="range-input d-flex position-relative">
                      <input
                        type="range"
                        min="-70"
                        max="-20"
                        step="10"
                        className="form-range"
                        value={selectedDewPoint}
                        onChange={(e) => setSelectedDewPoint(parseInt(e.target.value))}
                      />
                      <div className="range-line">
                        <span className="active-line"></span>
                      </div>
                      <div className="dot-line">
                        <span className="active-dot"></span>
                      </div>
                    </div>

                    <ul className="list-inline list-unstyled">
                      {nitrogenDewPointOptions.map((val, index) => (
                        <li key={index} className="list-inline-item">
                          <span>{val}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>







          )}
        </div>
        <div className="col-md-6 px-5">
          <h5>Введите желаемую производительность по газу для подбора оборудования</h5>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Укажите производительность"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <select
              className="form-select"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="lmin">Литры/мин</option>
              <option value="m3h">м³/час</option>
              <option value="kgh">кг/час</option>
            </select>
          </div>
          <p><strong>Подобранный генератор:</strong> {selectedModel || "—"}</p>
          <p><strong>Общая цена установки:</strong> {calculateTotalPrice()} рублей</p>
          <div className="text-center">
            <button className="btn btn-success">Получить КП на эту конфигурацию</button>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <h5>Подобранное оборудование</h5>
            <div className="d-flex flex-wrap justify-content-center w-100">
              {selectedEquipment.map((item, index) => (
                <div key={index}
                  className="card border-0 d-flex flex-column align-items-width"
                  style={{ flex: "1 1 calc(100% / 6)", maxWidth: "200px", borderRadius: "0", overflow: "hidden" }}>
                  <img src={item.url} className="card-img-top" alt={item.model}
                    style={{ height: "250px", objectFit: "cover", margin: "0px", marginTop: "10px" }}
                  />
                  <div className="card-body text-center d-flex flex-column justify-content-between"
                    style={{ flexGrow: 1 }}>
                    <h6 className="card-title" style={{ marginBottom: "10px" }}>{item.model}</h6>
                    <p className="card-text">Цена: {item.price} ₽</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Config;
