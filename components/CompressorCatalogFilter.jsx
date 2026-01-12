// components/CompressorCatalogFilter.jsx
import { useMemo } from 'react'

export default function CompressorCatalogFilter({ equipment = [], value, onChange }) {

  // ===============================
  // Автогенерация значений
  // ===============================
  const brands = useMemo(
    () => [...new Set(equipment.map(e => e.brand))],
    [equipment]
  )

  const lines = useMemo(
    () => [...new Set(equipment.map(e => e.line))],
    [equipment]
  )

  const drives = useMemo(
    () => [...new Set(equipment.map(e => e.drive))],
    [equipment]
  )

  const powerMin = Math.min(...equipment.map(e => e.power_kw))
  const powerMax = Math.max(...equipment.map(e => e.power_kw))

  // ===============================
  // Helpers
  // ===============================
  const update = (patch) => onChange({ ...value, ...patch })

  const toggleArray = (key, val) => {
    const arr = value[key]
    update({
      [key]: arr.includes(val)
        ? arr.filter(v => v !== val)
        : [...arr, val]
    })
  }

  const toggleBool = (key) => {
    update({ [key]: value[key] === null ? true : null })
  }

  const resetAll = () => {
    onChange({
      flow: null,
      pressure: null,
      powerRange: [null, null],
      inverter: null,
      oil_free: null,
      dryer: null,
      mobile: null,
      drive: [],
      brand: [],
      line: []
    })
  }

  const active =
    Object.values(value).some(v =>
      Array.isArray(v) ? v.length : v !== null
    )

  return (
    <div className="bg-gray-50 border rounded-xl p-6 mb-10 shadow-sm">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Фильтр оборудования</h3>
        {active && (
          <button
            onClick={resetAll}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Сбросить
          </button>
        )}
      </div>

      {/* Диапазоны */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div>
          <label className="block text-sm font-medium mb-1">
            Производительность (м³/мин)
          </label>
          <input
            type="number"
            placeholder="например, 1.2"
            value={value.flow ?? ''}
            onChange={(e) => update({ flow: e.target.value ? Number(e.target.value) : null })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Давление (бар)
          </label>
          <input
            type="number"
            placeholder="например, 8"
            value={value.pressure ?? ''}
            onChange={(e) => update({ pressure: e.target.value ? Number(e.target.value) : null })}
            className="w-full border rounded px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Мощность (кВт)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder={powerMin}
              value={value.powerRange[0] ?? ''}
              onChange={(e) =>
                update({ powerRange: [e.target.value ? Number(e.target.value) : null, value.powerRange[1]] })
              }
              className="w-full border rounded px-3 py-2 text-sm"
            />
            <input
              type="number"
              placeholder={powerMax}
              value={value.powerRange[1] ?? ''}
              onChange={(e) =>
                update({ powerRange: [value.powerRange[0], e.target.value ? Number(e.target.value) : null] })
              }
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Флаги */}
      <div className="grid md:grid-cols-4 gap-4 mb-8 text-sm">
        {[
          ['inverter', 'Частотник'],
          ['oil_free', 'Безмасляный'],
          ['dryer', 'С осушителем'],
          ['mobile', 'Мобильный']
        ].map(([key, label]) => (
          <label key={key} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={value[key] === true}
              onChange={() => toggleBool(key)}
              className="accent-blue-600"
            />
            {label}
          </label>
        ))}
      </div>

      {/* Мультиселекты */}
      <div className="grid md:grid-cols-3 gap-6 text-sm">

        <div>
          <div className="font-medium mb-2">Бренд</div>
          {brands.map(b => (
            <label key={b} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={value.brand.includes(b)}
                onChange={() => toggleArray('brand', b)}
                className="accent-blue-600"
              />
              {b}
            </label>
          ))}
        </div>

        <div>
          <div className="font-medium mb-2">Серия</div>
          {lines.map(l => (
            <label key={l} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={value.line.includes(l)}
                onChange={() => toggleArray('line', l)}
                className="accent-blue-600"
              />
              {l}
            </label>
          ))}
        </div>

        <div>
          <div className="font-medium mb-2">Привод</div>
          {drives.map(d => (
            <label key={d} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={value.drive.includes(d)}
                onChange={() => toggleArray('drive', d)}
                className="accent-blue-600"
              />
              {d}
            </label>
          ))}
        </div>

      </div>
    </div>
  )
}
