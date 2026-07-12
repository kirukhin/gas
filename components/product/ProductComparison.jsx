// components/product/ProductComparison.jsx

/*
    ProductComparison

    Когда следует выбирать данную технологию.

    Источник данных:

        type.comparison

    Компонент автоматически работает
    для всех категорий осушителей.

*/


import ProductSection from './ProductSection'


export default function ProductComparison({

    type

}) {

    if (!type?.comparison?.content?.length) return null


    return (

        <ProductSection

            title={type.comparison.title}

            subtitle="Рекомендации по выбору технологии осушки"

        >

            <div
                className="
                    grid
                    gap-8
                    lg:grid-cols-[2fr_1fr]
                "
            >

                {/* =====================================================
                    Основной текст
                ====================================================== */}

                <div
                    className="
                        space-y-6
                        rounded-3xl
                        border
                        border-gray-200
                        bg-white
                        p-10
                        text-lg
                        leading-8
                        text-gray-700
                    "
                >

                    {type.comparison.content.map((paragraph) => (

                        <p key={paragraph}>

                            {paragraph}

                        </p>

                    ))}

                </div>



                {/* =====================================================
                    Информационная карточка
                ====================================================== */}

                <aside
                    className="
                        rounded-3xl
                        border
                        border-red-100
                        bg-gradient-to-br
                        from-red-50
                        to-white
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

                        Что получает заказчик

                    </h3>

                    <ul
                        className="
                            mt-6
                            space-y-4
                        "
                    >

                        <li className="flex gap-3">

                            <span className="text-red-600">✔</span>

                            <span>

                                Стабильную точку росы

                            </span>

                        </li>

                        <li className="flex gap-3">

                            <span className="text-red-600">✔</span>

                            <span>

                                Надежную промышленную конструкцию

                            </span>

                        </li>

                        <li className="flex gap-3">

                            <span className="text-red-600">✔</span>

                            <span>

                                Соответствие требованиям ISO 8573

                            </span>

                        </li>

                        <li className="flex gap-3">

                            <span className="text-red-600">✔</span>

                            <span>

                                Минимальные эксплуатационные риски

                            </span>

                        </li>

                        <li className="flex gap-3">

                            <span className="text-red-600">✔</span>

                            <span>

                                Длительный срок службы оборудования

                            </span>

                        </li>

                    </ul>

                </aside>

            </div>

        </ProductSection>

    )

}