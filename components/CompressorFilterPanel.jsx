// components/CompressorFilterPanel.jsx
import { useState, useEffect, useMemo } from 'react'

export default function CompressorFilterPanel({ products = [], onFilterChange }) {
  const [flowInput, setFlowInput] = useState('')
  const [flowUnit, setFlowUnit] = useState('m3h') // m3h | lmin | kgh
  const [pressures, setPressures] = useState([])
  const [powers, setPowers] = useState([])

  // === 1. Автоматический сбор давлений и мощностей ===
  const availablePressures = useMemo(() => {
    const all = products.flatMap((p) => p.specs?.map((s) => s.pressure) || [])
    return [...new Set(all)].sort((a, b) => a - b)
  }, [products])

  const availablePowers = useMemo(() => {
    const all = products.flatMap((p) => p.specs?.map((s) => s.power) || [])
    return [...new Set(all)].sort((a, b) => a - b)
  }, [products])

  // === 2. Конвертация расхода в м³/ч ===
  const convertFlowToM3h = () => {
    const value = parseFloat(flowInput)
    if (isNaN(value)) return null

    switch (flowUnit) {
      case 'm3h':
        return value
      case 'lmin':
        return value * 0.06
      case 'kgh':
        return value / 1.293
      default:
        return value
    }
  }

  // === 3. Авто-вызов фильтра наверх ===
  useEffect(() => {
    onFilterChange({
      flow: convertFlowToM3h(),
      pressures,
      powers
    })
  }, [flowInput, flowUnit, pressures, powers])

  // === 4. Сброс ===
  const resetAll = () => {
    setFlowInput('')
    setFlowUnit('m3h')
    setPressures([])
    setPowers([])
  }

  const someFilterActive =
    flowInput || pressures.length > 0 || powers.length > 0

  const togglePressure = (p) =>
    setPressures((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )

  const togglePower = (p) =>
    setPowers((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )

  return (
    <div className="bg-gray-50 border rounded-lg p-6 mb-10 shadow-sm">

      {/* Верхняя строка */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Фильтр оборудования</h3>

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

      {/* Производительность */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">Производительность</label>
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

      {/* Давление */}
      <div className="mb-6">
        <div className="text-sm font-medium mb-2">Рабочее давление (бар)</div>
        <div className="flex flex-wrap gap-3">
          {availablePressures.map((p) => (
            <label key={p} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={pressures.includes(p)}
                onChange={() => togglePressure(p)}
                className="accent-blue-600"
              />
              {p}
            </label>
          ))}
        </div>
      </div>

      {/* Мощность */}
      <div>
        <div className="text-sm font-medium mb-2">Мощность (кВт)</div>
        <div className="flex flex-wrap gap-3">
          {availablePowers.map((p) => (
            <label key={p} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={powers.includes(p)}
                onChange={() => togglePower(p)}
                className="accent-blue-600"
              />
              {p}
            </label>
          ))}
        </div>
      </div>

    </div>
  )
}
