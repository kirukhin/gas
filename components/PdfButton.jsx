// PdfButton.jsx
import React, { useState } from "react";
import { generatePdf } from "./PdfGenerator"; // путь корректируйте, если нужно

export default function PdfButton(props) {
  const {
    showClarifyButton, setShowModal, isEquipmentValid, anyIncluded,
    generator, pressure, system, selectedModelData, purity,
    nitrogenPurityOptions, nitrogenPurityIndex,
    nitrogenPressureOptions, nitrogenPressureIndex,
    selectedDewPoint, unit, inputValue, refillCapacity, selectedEquipment
  } = props;

  const [isGenerating, setIsGenerating] = useState(false);

  const buildPdfArgs = () => {
    const gas = generator;
    const purityValue = gas === "oxygen"
      ? purity
      : (nitrogenPurityOptions?.[nitrogenPurityIndex] ?? null);
    const pressureValue = gas === "oxygen"
      ? (pressure ?? "")
      : (nitrogenPressureOptions?.[nitrogenPressureIndex] ?? "");
    return {
      gas,
      system,
      model: selectedModelData,
      purity: purityValue,
      pressure: pressureValue,
      dewPoint: selectedDewPoint,
      unit,
      inputValue,
      refillCapacity,
      selectedEquipment
    };
  };

  // безопасный вызов ym (Яндекс.Метрика)
  const fireYandexGoal = (counterId, goalName, payload = {}) => {
    try {
      if (typeof window !== "undefined" && typeof window.ym === "function") {
        // пытаемся вызвать в формате с id: ym(id, 'reachGoal', name, params)
        try {
          window.ym(counterId, "reachGoal", goalName, payload);
        } catch (e) {
          // fallback: иногда используется глобальный вызов ym('reachGoal', ...)
          try {
            window.ym("reachGoal", goalName, payload);
          } catch (_) {
            // ничего
          }
        }
        return true;
      }
    } catch (err) {
      // silently ignore
    }
    return false;
  };

  const handleGeneratePdf = async () => {
    if (isGenerating) return;
    setIsGenerating(true);

    const args = buildPdfArgs();

    // Собираем доп.данные для метрики
    const modelId = args.model?.model || args.model?.id || args.model || "no-model";
    const totalPrice = Array.isArray(selectedEquipment)
      ? selectedEquipment.filter(e => e?.includedInQuote).reduce((s, i) => s + (i.price || 0), 0)
      : 0;

    // Вызов цели (не ждём, не блокируем)
    try {
      // используем ваш реальный ID счётчика, указанный в head
      const COUNTER_ID = 103957835;
      fireYandexGoal(COUNTER_ID, "get_quote_click", {
        model: modelId,
        system,
        price: totalPrice,
        gas: args.gas,
        purity: args.purity,
        pressure: args.pressure
      });
    } catch (e) {
      // noop
    }

    // затем формируем PDF
    try {
      await generatePdf(args);
    } catch (err) {
      console.error("Ошибка при генерации КП:", err);
      alert("Ошибка при формировании КП. Смотрите консоль.");
    } finally {
      setIsGenerating(false);
    }
  };

  // UI
  if (showClarifyButton) {
    return (
      <button
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded transition duration-300"
        onClick={() => setShowModal(true)}
      >
        Уточнить характеристики
      </button>
    );
  }

  if (!(isEquipmentValid && anyIncluded)) return null;

  return (
    <button
      type="button"
      onClick={handleGeneratePdf}
      disabled={isGenerating}
      aria-busy={isGenerating}
      aria-disabled={isGenerating}
      className={`inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded transition duration-300
        ${isGenerating ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          Формирование КП...
        </>
      ) : (
        "Получить КП на эту конфигурацию"
      )}
    </button>
  );
}
