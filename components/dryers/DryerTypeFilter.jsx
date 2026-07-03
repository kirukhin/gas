import { useEffect, useState } from 'react'

export default function DryerTypeFilter({
    models,
    config,
    onChange
}) {

    const minFlow =
        Math.min(
            ...models.map(
                m => Number(m.specs.flow)
            )
        )

    const maxFlow =
        Math.max(
            ...models.map(
                m => Number(m.specs.flow)
            )
        )

    const [flow, setFlow] =
        useState(minFlow)

    useEffect(() => {

        const filtered =
            models.filter(
                model =>
                    Number(model.specs.flow) >= flow
            )

        onChange(filtered)

    }, [flow, models, onChange])

    return (

        <div
            className="
        bg-slate-50
        border
        rounded-2xl
        p-8
      "
        >

            <div className="grid lg:grid-cols-2 gap-10">

                <div>

                    <label
                        className="
              block
              text-sm
              font-medium
              mb-4
            "
                    >
                        Минимальная требуемая производительность
                    </label>

                    <input
                        type="range"
                        min={minFlow}
                        max={maxFlow}
                        step="0.1"
                        value={flow}
                        onChange={e =>
                            setFlow(
                                Number(e.target.value)
                            )
                        }
                        className="w-full"
                    />

                    <div
                        className="
              flex
              justify-between
              text-sm
              text-slate-500
              mt-2
            "
                    >
                        <span>{minFlow}</span>
                        <span>{maxFlow} м³/мин</span>
                    </div>

                </div>

                <div
                    className="
            flex
            items-center
            justify-center
          "
                >

                    <div
                        className="
              text-center
              bg-white
              rounded-xl
              border
              px-8
              py-5
              min-w-[220px]
            "
                    >

                        <div className="text-sm text-slate-500">
                            Производительность
                        </div>

                        <div
                            className="
                text-4xl
                font-bold
                text-blue-700
              "
                        >
                            {flow}
                        </div>

                        <div className="text-sm text-slate-500">
                            м³/мин
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}