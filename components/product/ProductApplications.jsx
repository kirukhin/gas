// components/product/ProductApplications.jsx

/*
    ProductApplications

    Области применения оборудования.

    Данные полностью берутся из

        type.applications.items

    Компонент автоматически работает
    для любых типов осушителей.

*/


import ProductSection from './ProductSection'


export default function ProductApplications({

    type

}) {

    if (!type?.applications?.items?.length) return null


    return (

        <ProductSection

            title={type.applications.title}

            subtitle="Типовые технологические процессы, в которых используется оборудование"

        >

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {type.applications.items.map((item) => (

                    <article

                        key={item}

                        className="
                            group
                            flex
                            items-start
                            gap-5
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

                        {/* =====================================================
                            Иконка
                        ====================================================== */}

                        <div
                            className="
                                flex
                                h-14
                                w-14
                                shrink-0
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
                                    d="M12 2v20M2 12h20"
                                />

                            </svg>

                        </div>



                        {/* =====================================================
                            Текст
                        ====================================================== */}

                        <div>

                            <h3
                                className="
                                    text-lg
                                    font-semibold
                                    text-gray-900
                                "
                            >

                                {item}

                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-7
                                    text-gray-600
                                "
                            >

                                Осушитель обеспечивает стабильную подготовку
                                сжатого воздуха для данного технологического
                                процесса и соответствует высоким требованиям
                                к качеству воздуха.

                            </p>

                        </div>

                    </article>

                ))}

            </div>

        </ProductSection>

    )

}