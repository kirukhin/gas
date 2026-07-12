// components/product/ProductSelectionGuide.jsx

/*
    ProductSelectionGuide

    Руководство по подбору оборудования.

    Источник данных:

        type.selectionGuide

    Блок помогает инженеру понять,
    по каким параметрам выбирать модель.

    Хорошо работает и для SEO,
    поскольку содержит полезный экспертный текст.
*/


import ProductSection from './ProductSection'


export default function ProductSelectionGuide({

    type,

    product

}) {

    if (!type?.selectionGuide?.content?.length) return null


    return (

        <ProductSection

            title={type.selectionGuide.title}

            subtitle="Основные параметры, которые следует учитывать при выборе оборудования"

        >

            <div
                className="
                    grid
                    gap-10
                    lg:grid-cols-[2fr_1fr]
                "
            >

                {/* =====================================================
                    Левая колонка
                ====================================================== */}

                <div
                    className="
                        space-y-6
                        text-lg
                        leading-8
                        text-gray-700
                    "
                >

                    {type.selectionGuide.content.map((paragraph) => (

                        <p key={paragraph}>

                            {paragraph}

                        </p>

                    ))}

                </div>



                {/* =====================================================
                    Правая карточка
                ====================================================== */}

                <aside
                    className="
                        rounded-3xl
                        border
                        border-red-100
                        bg-red-50
                        p-8
                    "
                >

                    <h3
                        className="
                            text-xl
                            font-bold
                            text-gray-900
                        "
                    >

                        Параметры модели

                    </h3>

                    <dl
                        className="
                            mt-6
                            space-y-5
                        "
                    >

                        {product.specs?.flow && (

                            <div>

                                <dt
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >

                                    Производительность

                                </dt>

                                <dd
                                    className="
                                        mt-1
                                        text-lg
                                        font-semibold
                                        text-gray-900
                                    "
                                >

                                    {product.specs.flow} м³/мин

                                </dd>

                            </div>

                        )}

                        {product.commonSpecs?.pressureMin &&
                            product.commonSpecs?.pressureMax && (

                                <div>

                                    <dt
                                        className="
                                            text-sm
                                            text-gray-500
                                        "
                                    >

                                        Рабочее давление

                                    </dt>

                                    <dd
                                        className="
                                            mt-1
                                            text-lg
                                            font-semibold
                                            text-gray-900
                                        "
                                    >

                                        {product.commonSpecs.pressureMin}–{product.commonSpecs.pressureMax} бар

                                    </dd>

                                </div>

                            )}

                        {product.commonSpecs?.dewPoint && (

                            <div>

                                <dt
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >

                                    Точка росы

                                </dt>

                                <dd
                                    className="
                                        mt-1
                                        text-lg
                                        font-semibold
                                        text-gray-900
                                    "
                                >

                                    {product.commonSpecs.dewPoint} °C

                                </dd>

                            </div>

                        )}

                        {product.specs?.power?.kw && (

                            <div>

                                <dt
                                    className="
                                        text-sm
                                        text-gray-500
                                    "
                                >

                                    Потребляемая мощность

                                </dt>

                                <dd
                                    className="
                                        mt-1
                                        text-lg
                                        font-semibold
                                        text-gray-900
                                    "
                                >

                                    {product.specs.power.kw} кВт

                                </dd>

                            </div>

                        )}

                    </dl>

                </aside>

            </div>

        </ProductSection>

    )

}