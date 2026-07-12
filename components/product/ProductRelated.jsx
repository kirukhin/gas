// components/product/ProductRelated.jsx

/*
    ProductRelated

    Навигация по линейке оборудования.

    Вместо случайных "Похожих товаров"
    показываются:

        • предыдущая модель

        • следующая модель

    Это значительно удобнее инженеру,
    который обычно сравнивает соседние
    производительности.

*/


import Link from 'next/link'

import ProductSection from './ProductSection'


export default function ProductRelated({

    line,

    product

}) {

    if (!line?.models?.length) return null


    const currentIndex = line.models.findIndex(

        item => item.slug === product.slug

    )


    if (currentIndex === -1) return null


    const previous =

        line.models[currentIndex - 1]


    const next =

        line.models[currentIndex + 1]


    if (!previous && !next) return null


    return (

        <ProductSection

            title="Соседние модели серии"

            subtitle="Быстро сравните производительность соседних моделей без возврата в каталог."

        >

            <div
                className="
                    grid
                    gap-8
                    lg:grid-cols-2
                "
            >

                {previous ? (

                    <RelatedCard

                        model={previous}

                        title="← Предыдущая модель"

                    />

                ) : (

                    <div />

                )}

                {next ? (

                    <RelatedCard

                        model={next}

                        title="Следующая модель →"

                    />

                ) : (

                    <div />

                )}

            </div>

        </ProductSection>

    )

}



/* ======================================================================

    Карточка модели

====================================================================== */

function RelatedCard({

    model,

    title

}) {

    return (

        <article

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

            <div
                className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wide
                    text-red-600
                "
            >

                {title}

            </div>



            <h3
                className="
                    mt-5
                    text-3xl
                    font-bold
                    text-gray-900
                "
            >

                {model.model}

            </h3>



            <div
                className="
                    mt-8
                    grid
                    gap-5
                    sm:grid-cols-2
                "
            >

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
                            mt-2
                            text-2xl
                            font-bold
                            text-gray-900
                        "
                    >

                        {model.specs.flow}

                    </div>

                    <div
                        className="
                            text-gray-500
                        "
                    >

                        м³/мин

                    </div>

                </div>



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
                            mt-2
                            text-2xl
                            font-bold
                            text-gray-900
                        "
                    >

                        {model.specs.power?.kw || '—'}

                    </div>

                    <div
                        className="
                            text-gray-500
                        "
                    >

                        кВт

                    </div>

                </div>

            </div>



            <Link

                href={`/dryers/${model.subcategory}/${model.slug}`}

                className="
                    mt-10
                    inline-flex
                    items-center
                    rounded-2xl
                    border
                    border-red-600
                    px-6
                    py-3
                    font-semibold
                    text-red-600
                    transition
                    group-hover:bg-red-600
                    group-hover:text-white
                "

            >

                Подробнее

            </Link>

        </article>

    )

}