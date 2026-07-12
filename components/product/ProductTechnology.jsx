// components/product/ProductTechnology.jsx

/*
    ProductTechnology

    Технические особенности технологии.

    Источник данных:

        type.technology.items

    Компонент автоматически подходит
    для всех типов осушителей.

*/


import ProductSection from './ProductSection'


export default function ProductTechnology({

    type

}) {

    if (!type?.technology?.items?.length) return null


    return (

        <ProductSection

            title={type.technology.title}

            subtitle="Основные технические особенности применяемой технологии"

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

                {type.technology.items.map((item, index) => (

                    <div

                        key={item.name}

                        className={`
                            grid
                            gap-4
                            px-8
                            py-6
                            md:grid-cols-[320px_1fr]

                            ${index !== type.technology.items.length - 1
                                ? 'border-b border-gray-100'
                                : ''
                            }
                        `}

                    >

                        {/* ===========================================
                            Название характеристики
                        ============================================ */}

                        <div
                            className="
                                font-semibold
                                text-gray-900
                            "
                        >

                            {item.name}

                        </div>



                        {/* ===========================================
                            Значение
                        ============================================ */}

                        <div
                            className="
                                leading-7
                                text-gray-700
                            "
                        >

                            {item.value}

                        </div>

                    </div>

                ))}

            </div>

        </ProductSection>

    )

}