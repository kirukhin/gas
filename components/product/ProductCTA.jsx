// components/product/ProductCTA.jsx

/*
    ProductCTA

    Финальный призыв к действию.

    Компонент специально сделан универсальным.

    В дальнейшем здесь легко подключаются:

    • CRM
    • формы
    • скачивание PDF
    • калькулятор
    • подбор оборудования

*/


import Link from 'next/link'

import ProductSection from './ProductSection'


export default function ProductCTA({

    product

}) {

    if (!product) return null


    return (

        <ProductSection>

            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[36px]
                    bg-gradient-to-br
                    from-red-700
                    via-red-600
                    to-red-500
                    p-10
                    text-white
                    lg:p-14
                "
            >

                {/* ===========================================
                    Декоративный фон
                ============================================ */}

                <div
                    className="
                        absolute
                        -right-24
                        -top-24
                        h-80
                        w-80
                        rounded-full
                        bg-white/10
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-20
                        left-0
                        h-72
                        w-72
                        rounded-full
                        bg-black/10
                        blur-3xl
                    "
                />



                <div
                    className="
                        relative
                        grid
                        gap-12
                        lg:grid-cols-[2fr_1fr]
                        lg:items-center
                    "
                >

                    {/* =======================================
                        Левая часть
                    ======================================== */}

                    <div>

                        <span
                            className="
                                inline-flex
                                rounded-full
                                bg-white/20
                                px-4
                                py-2
                                text-sm
                                font-semibold
                            "
                        >

                            Нужна помощь инженера?

                        </span>

                        <h2
                            className="
                                mt-6
                                text-4xl
                                font-bold
                                leading-tight
                            "
                        >

                            Поможем подобрать
                            <br />

                            {product.model}

                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-lg
                                leading-8
                                text-red-50
                            "
                        >

                            Наши специалисты помогут подобрать
                            осушитель под реальные условия эксплуатации,
                            рассчитают производительность,
                            проверят соответствие требованиям
                            технологического процесса
                            и подготовят коммерческое предложение.

                        </p>

                    </div>



                    {/* =======================================
                        Кнопки
                    ======================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                        "
                    >

                        <Link

                            href="/contacts"

                            className="
                                rounded-2xl
                                bg-white
                                px-8
                                py-4
                                text-center
                                text-lg
                                font-bold
                                text-red-600
                                transition
                                hover:scale-[1.02]
                            "

                        >

                            Запросить КП

                        </Link>



                        <Link

                            href="/contacts"

                            className="
                                rounded-2xl
                                border
                                border-white/30
                                px-8
                                py-4
                                text-center
                                text-lg
                                font-semibold
                                transition
                                hover:bg-white/10
                            "

                        >

                            Консультация инженера

                        </Link>



                        <Link

                            href="/catalogs"

                            className="
                                rounded-2xl
                                border
                                border-white/30
                                px-8
                                py-4
                                text-center
                                text-lg
                                font-semibold
                                transition
                                hover:bg-white/10
                            "

                        >

                            Скачать каталог

                        </Link>

                    </div>

                </div>

            </div>

        </ProductSection>

    )

}