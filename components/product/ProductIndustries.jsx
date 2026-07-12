// components/product/ProductIndustries.jsx

/*
    ProductIndustries

    Отрасли применения оборудования.

    Источник данных:

        type.industries

    Компонент универсален для всех
    категорий оборудования.
*/

import ProductSection from './ProductSection'

export default function ProductIndustries({

    type

}) {

    if (!type?.industries?.length) return null

    return (

        <ProductSection

            title="Отрасли применения"

            subtitle="Типовые производства и технологические процессы, в которых используется данное оборудование"

        >

            <div
                className="
                    grid
                    gap-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                "
            >

                {type.industries.map((industry) => (

                    <article

                        key={industry}

                        className="
                            group
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-red-200
                            hover:shadow-xl
                        "

                    >

                        {/* ======================================
                            Иконка
                        ======================================= */}

                        <div
                            className="
                                mb-5
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-red-50
                                text-red-600
                                transition
                                group-hover:bg-red-600
                                group-hover:text-white
                            "
                        >

                            <svg
                                className="h-7 w-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 19V5m0 14h16M8 15l3-4 3 2 4-6"
                                />

                            </svg>

                        </div>



                        {/* ======================================
                            Название отрасли
                        ======================================= */}

                        <h3
                            className="
                                text-lg
                                font-semibold
                                text-gray-900
                            "
                        >

                            {industry}

                        </h3>



                        {/* ======================================
                            Краткое описание
                        ======================================= */}

                        <p
                            className="
                                mt-3
                                text-sm
                                leading-7
                                text-gray-600
                            "
                        >

                            Решения по подготовке сжатого воздуха для
                            стабильной и безопасной работы оборудования
                            данного направления промышленности.

                        </p>

                    </article>

                ))}

            </div>

        </ProductSection>

    )

}