// components/product/ProductAdvantages.jsx

/*
    ProductAdvantages

    Блок преимуществ технологии.

    Данные полностью берутся
    из файла категории.

    Например:

    adsorption-cold.json

        advantages

    refrigeration.json

        advantages

    Благодаря этому компонент
    автоматически подходит
    для любых типов осушителей.

*/


import ProductSection from './ProductSection'


export default function ProductAdvantages({

    type

}) {

    if (!type?.advantages?.items?.length) return null


    return (

        <ProductSection

            title={type.advantages.title}

        >

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {type.advantages.items.map((item) => (

                    <article

                        key={item.title}

                        className="
                            group
                            rounded-3xl
                            border
                            border-gray-200
                            bg-white
                            p-8
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-red-200
                            hover:shadow-xl
                        "

                    >

                        {/* ==========================================
                            Иконка
                        =========================================== */}

                        <div
                            className="
                                mb-6
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
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >

                                <path

                                    strokeLinecap="round"

                                    strokeLinejoin="round"

                                    d="M5 13l4 4L19 7"

                                />

                            </svg>

                        </div>



                        {/* ==========================================
                            Заголовок
                        =========================================== */}

                        <h3
                            className="
                                mb-4
                                text-xl
                                font-semibold
                                text-gray-900
                            "
                        >

                            {item.title}

                        </h3>



                        {/* ==========================================
                            Описание
                        =========================================== */}

                        <p
                            className="
                                leading-7
                                text-gray-600
                            "
                        >

                            {item.text}

                        </p>

                    </article>

                ))}

            </div>

        </ProductSection>

    )

}