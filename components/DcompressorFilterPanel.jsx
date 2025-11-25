// components/DcompressorFilterPanel.jsx

import { useState, useEffect } from 'react'

const UNITS = [
  { value: 'm3h', label: 'м³/ч' },
  { value: 'lmin', label: 'л/мин' },
  { value: 'kgh', label: 'кг/ч (воздух)' },
]

// коэффициенты перевода в м³/ч
const toM3H = (value, unit) => {
  const v = Number(value)
  if (!v) return null

  switch (unit) {
    case 'm3h':
      return v
    case 'lmin':
      return v * 0.06 // 1 л/мин = 0.06 м³/ч
    case 'kgh':
      return v / 1.293 // плотность воздуха
    default:
      return v
  }
}

export default function DcompressorFilterPanel({ onFilterChange }) {
  const [flow, setFlow] = useState('')
  const [unit, setUnit] = useState('m3h')

  const reset = () => {
    setFlow('')
    setUnit('m3h')
  }

  const active = flow !== '' || unit !== 'm3h'

  // обновляем фильтр автоматически
  useEffect(() => {
    const normalized = toM3H(flow, unit)

    onFilterChange({
      flow: normalized, // всегда в м³/ч
    })
  }, [flow, unit])

  return (
    <div className="bg-gray-50 border rounded-lg p-6 mb-10 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Фильтр дожимных компрессоров</h3>

        {active && (
          <button
            onClick={reset}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <span className="text-xl leading-none">×</span>
            Сбросить
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-2">

        {/* ВВОД ПРОИЗВОДИТЕЛЬНОСТИ */}
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-1">
            Производительность
          </label>

          <input
            type="number"
            value={flow}
            onChange={(e) => setFlow(e.target.value)}
            placeholder="Например: 300"
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        {/* ВЫБОР ЕДИНИЦ */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Единицы измерения
          </label>

          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm"
          >
            {UNITS.map((u) => (
              <option key={u.value} value={u.value}>
                {u.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
