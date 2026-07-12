// components/product/ProductLineModels.jsx

/*
    ProductLineModels

    Все модели текущей серии.

    Источник данных:

        line.models

    Задачи компонента:

    • показать всю линейку

    • подсветить текущую модель

    • позволить быстро перейти
      на соседнюю модель

    • избавить инженера
      от постоянного возврата назад

*/


import Link from 'next/link'

import ProductSection from './ProductSection'


export default function ProductLineModels({

    line,

    currentProduct

}) {

    if (!line?.models?.length) return null


    return (

        <ProductSection

            title={`Все модели серии ${line.name}`}

            subtitle="Сравните производительность моделей и быстро перейдите к необходимому исполнению."

        >

            <div
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                "
            >

                {/* =====================================================
                    Заголовок таблицы
                ====================================================== */}

                <div
                    className="
                        hidden
                        md:grid
                        grid-cols-[2fr_1fr_1fr_180px]
                        gap-6
                        bg-gray-50
                        px-8
                        py-5
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wide
                        text-gray-500
                    "
                >

                    <div>

                        Модель

                    </div>

                    <div>

                        Производительность

                    </div>

                    <div>

                        Мощность

                    </div>

                    <div>

                    </div>

                </div>



                {/* =====================================================
                    Модели
                ====================================================== */}

                {line.models.map(model => {

                    const active =

                        model.slug === currentProduct.slug

                    return (

                        <div

                            key={model.id}

                            className={`
                                border-t
                                border-gray-100

                                transition

                                ${active
                                    ? 'bg-red-50'
                                    : 'hover:bg-gray-50'
                                }
                            `}

                        >

                            <div
                                className="
                                    grid
                                    gap-6
                                    px-8
                                    py-7
                                    md:grid-cols-[2fr_1fr_1fr_180px]
                                    md:items-center
                                "
                            >

                                {/* =====================================
                                    Модель
                                ====================================== */}

                                <div>

                                    <div
                                        className="
                                            text-xl
                                            font-bold
                                            text-gray-900
                                        "
                                    >

                                        {model.model}

                                    </div>

                                    <div
                                        className="
                                            mt-2
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        {line.title}

                                    </div>

                                </div>



                                {/* =====================================
                                    Производительность
                                ====================================== */}

                                <div>

                                    <div
                                        className="
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        Производительность

                                    </div>

                                    <div
                                        className="
                                            mt-1
                                            text-lg
                                            font-semibold
                                        "
                                    >

                                        {model.specs.flow} м³/мин

                                    </div>

                                </div>



                                {/* =====================================
                                    Мощность
                                ====================================== */}

                                <div>

                                    <div
                                        className="
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        Мощность

                                    </div>

                                    <div
                                        className="
                                            mt-1
                                            text-lg
                                            font-semibold
                                        "
                                    >

                                        {model.specs.power?.kw || '—'} кВт

                                    </div>

                                </div>



                                {/* =====================================
                                    Кнопка
                                ====================================== */}

                                <div
                                    className="
                                        flex
                                        justify-start
                                        md:justify-end
                                    "
                                >

                                    {active ? (

                                        <span
                                            className="
                                                rounded-xl
                                                bg-red-600
                                                px-5
                                                py-3
                                                font-semibold
                                                text-white
                                            "
                                        >

                                            Текущая модель

                                        </span>

                                    ) : (

                                        <Link

                                            href={`/dryers/${model.subcategory}/${model.slug}`}

                                            className="
                                                rounded-xl
                                                border
                                                border-gray-300
                                                px-5
                                                py-3
                                                font-semibold
                                                transition
                                                hover:border-red-600
                                                hover:text-red-600
                                            "

                                        >

                                            Подробнее

                                        </Link>

                                    )}

                                </div>

                            </div>

                        </div>

                    )

                })}

            </div>

        </ProductSection>

    )

}