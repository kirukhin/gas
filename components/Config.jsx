import React, { useState, useEffect } from "react";
import data from "/public/components/data.js";
import baseImg from "/base.png";
import adsorberImg from "/adsorber.png";
import reciverImg from "/reciver.png";
import compressorImg from "/compressor.png";
import osyshitelImg from "/osyshitel.png";
import filtrImg from "/filtr.png";
import dcompressorImg from "/dcompressor.png";
import rampaImg from "/rampa.png";

const Config = () => {
  const [generator, setGenerator] = useState("oxygen"); // Генератор кислорода/азота
  const [system, setSystem] = useState("generation"); // Газогенерация/заправка баллонов
  const [pressure, setPressure] = useState("5bar"); // Давление: 5 бар/8 бар
  const [inputValue, setInputValue] = useState("");
  const [unit, setUnit] = useState("lmin"); // Единицы измерения
  const [selectedEquipment, setSelectedEquipment] = useState([]); // Выбранное оборудование
  const [selectedModel, setSelectedModel] = useState(null); // Подобранная установка

  useEffect(() => {
    const findEquipment = () => {
      if (!inputValue) {
        setSelectedEquipment(
          Array(6).fill({
            model: "Модель не выбрана",
            url: baseImg,
            price: 0,
          })
        );
        setSelectedModel(null);
        return;
      }

      const numericValue = parseFloat(inputValue);

      if (isNaN(numericValue)) {
        setSelectedEquipment(
          Array(6).fill({
            model: "Модель не выбрана",
            url: baseImg,
            price: 0,
          })
        );
        setSelectedModel(null);
        return;
      }

      const model = Object.values(data).find((item) => {
        if (unit === "lmin") return numericValue <= item.productivityLMin;
        if (unit === "m3h") return numericValue <= item.productivityM3H;
        if (unit === "kgh") return numericValue <= item.productivityKgH;
        return false;
      });

      if (!model) {
        setSelectedEquipment(
          Array(6).fill({
            model: "Модель не выбрана",
            url: baseImg,
            price: 0,
          })
        );
        setSelectedModel(null);
        return;
      }

      const equipmentScheme = getEquipmentScheme();

      const equipmentDetails = equipmentScheme.map((key) => {
        if (key === "oAdsorber" || key === "nAdsorber") {
          return {
            model: model.model,
            url: model.url,
            price: model.price,
          };
        }

        const equipment = model.equipment[key];
        return {
          model: equipment?.model || "Неизвестно",
          url: equipment?.url || baseImg,
          price: equipment?.price || 0,
        };
      });

      setSelectedEquipment(equipmentDetails);
      setSelectedModel(model.model);
    };

    findEquipment();
  }, [inputValue, unit, generator, system, pressure]);

  const getEquipmentScheme = () => {
    if (generator === "oxygen" && system === "generation" && pressure === "5bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "oAdsorber", "oResiver"];
    }
    if (generator === "oxygen" && system === "generation" && pressure === "8bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "oAdsorber", "oResiver", "dKompressor", "oResiver"];
    }
    if (generator === "oxygen" && system === "refill" && pressure === "5bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "oAdsorber", "oResiver", "rampa"];
    }
    if (generator === "oxygen" && system === "refill" && pressure === "8bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "oAdsorber", "oResiver", "dKompressor", "rampa"];
    }
    if (generator === "nitrogen" && system === "generation" && pressure === "5bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "nAdsorber", "nResiver"];
    }
    if (generator === "nitrogen" && system === "generation" && pressure === "8bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "nAdsorber", "nResiver", "dKompressor", "nResiver"];
    }
    if (generator === "nitrogen" && system === "refill" && pressure === "5bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "nAdsorber", "nResiver", "rampa"];
    }
    if (generator === "nitrogen" && system === "refill" && pressure === "8bar") {
      return ["kompressor", "osyshitel", "filtr", "vResiver", "nAdsorber", "nResiver", "dKompressor", "rampa"];
    }
    return [];
  };

  const calculateTotalPrice = () => {
    return selectedEquipment.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container-fluid py-4">
      <h2 className="text-center">Конфигуратор оборудования</h2>
      <div className="row align-items-center">
        <div className="col-md-6 px-4">
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
          <h5>Выберите давление</h5>
          <div className="btn-group btn-group-toggle d-flex mb-3">
            <button
              className={`btn btn-outline-secondary ${pressure === "5bar" ? "active" : ""}`}
              onClick={() => setPressure("5bar")}
            >
              5 бар
            </button>
            <button
              className={`btn btn-outline-secondary ${pressure === "8bar" ? "active" : ""}`}
              onClick={() => setPressure("8bar")}
            >
              8 бар
            </button>
          </div>
        </div>
        <div className="col-md-6 px-4">
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
          <p><strong>Подобранная установка:</strong> {selectedModel || "—"}</p>
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
