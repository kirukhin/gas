function formatPrice(price) {

    return new Intl.NumberFormat(
      'ru-RU'
    ).format(price)
  }
  
  export default function DryerTypeTable({
    models
  }) {
  
    return (
  
      <div className="overflow-x-auto">
  
        <table
          className="
            w-full
            border-collapse
            bg-white
            rounded-xl
            overflow-hidden
          "
        >
  
          <thead>
  
            <tr className="bg-slate-100">
  
              <th className="p-4 text-left">
                Модель
              </th>
  
              <th className="p-4 text-left">
                Производительность
              </th>
  
              <th className="p-4 text-left">
                Мощность
              </th>
  
              <th className="p-4 text-left">
                Цена
              </th>
  
              <th className="p-4"></th>
  
            </tr>
  
          </thead>
  
          <tbody>
  
            {models.map(model => (
  
              <tr
                key={model.id}
                className="
                  border-b
                  hover:bg-slate-50
                "
              >
  
                <td className="p-4 font-medium">
                  {model.model}
                </td>
  
                <td className="p-4">
                  {model.specs.flow} м³/мин
                </td>
  
                <td className="p-4">
                  {model.specs.power?.kw || '—'} кВт
                </td>
  
                <td className="p-4 font-semibold">
                  {formatPrice(model.price)} ₽
                </td>
  
                <td className="p-4">
  
                  <a
                    href={`/products/${model.slug}`}
                    className="
                      inline-flex
                      px-4
                      py-2
                      rounded-lg
                      bg-blue-600
                      text-white
                      text-sm
                    "
                  >
                    Подробнее
                  </a>
  
                </td>
  
              </tr>
  
            ))}
  
          </tbody>
  
        </table>
  
      </div>
    )
  }