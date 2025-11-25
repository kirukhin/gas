import { useState, useEffect } from 'react'

export default function DryerFilterPanel({ onFilterChange }) {

  const [flowInput, setFlowInput] = useState('')
  const [flowUnit, setFlowUnit] = useState('m3h') // m3h | lmin | kgh
  const [types, setTypes] = useState([])
  const [voltages, setVoltages] = useState([])

  // === Универсальный toggle ===
  const toggle = (value, list, setList) =>
    setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value])

  // === Конвертация расхода в м³/ч ===
  const convertFlowToM3h = () => {
    const v = parseFloat(flowInput)
    if (isNaN(v)) return null

    switch (flowUnit) {
      case 'm3h': return v
      case 'lmin': return v * 0.06
      case 'kgh': return v / 1.293
      default: return v
    }
  }

  // === Реактивный вызов фильтрации ===
  useEffect(() => {
    onFilterChange({
      flow: convertFlowToM3h(),
      types,
      voltages
    })
  }, [flowInput, flowUnit, types, voltages])

  // === Сброс ===
  const resetAll = () => {
    setFlowInput('')
    setFlowUnit('m3h')
    setTypes([])
    setVoltages([])
  }

  const someFilterActive =
    flowInput || types.length > 0 || voltages.length > 0

  return (
    <div className="bg-gray-50 border rounded-lg p-6 mb-10 shadow-sm">

      {/* Верхняя строка + "Сбросить" */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Фильтр осушителей</h3>

        {someFilterActive && (
          <button
            onClick={resetAll}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <span className="text-xl leading-none">×</span>
            Сбросить
          </button>
        )}
      </div>

      {/* === Производительность === */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">
            Производительность
          </label>
          <input
            type="number"
            value={flowInput}
            onChange={(e) => setFlowInput(e.target.value)}
            placeholder="Например, 300"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Единицы</label>
          <select
            value={flowUnit}
            onChange={(e) => setFlowUnit(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            <option value="m3h">м³/ч</option>
            <option value="lmin">л/мин</option>
            <option value="kgh">кг/ч</option>
          </select>
        </div>
      </div>

      {/* === Тип осушителя === */}
      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Тип осушителя</div>
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={types.includes('Рефрижираторный осушитель')}
              onChange={() =>
                toggle('Рефрижираторный осушитель', types, setTypes)
              }
              className="accent-blue-600"
            />
            Рефрижераторный
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={types.includes('Адсорбционный осушитель')}
              onChange={() =>
                toggle('Адсорбционный осушитель', types, setTypes)
              }
              className="accent-blue-600"
            />
            Адсорбционный
          </label>
        </div>
      </div>

      {/* === Напряжение === */}
      <div>
        <div className="text-sm font-medium mb-2">Напряжение</div>
        <div className="flex flex-wrap gap-3">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={voltages.includes('220/50')}
              onChange={() => toggle('220/50', voltages, setVoltages)}
              className="accent-blue-600"
            />
            220 В
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={voltages.includes('380/50')}
              onChange={() => toggle('380/50', voltages, setVoltages)}
              className="accent-blue-600"
            />
            380 В
          </label>
        </div>
      </div>
    </div>
  )
}
