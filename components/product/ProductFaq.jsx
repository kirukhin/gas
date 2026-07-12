// components/product/ProductFaq.jsx

/*
    ProductFaq

    Часто задаваемые вопросы.

    Источник данных:

        type.faq

    Компонент универсален и автоматически
    работает для любых типов оборудования.

*/


import { useState } from 'react'

import ProductSection from './ProductSection'


export default function ProductFaq({

    type

}) {

    if (!type?.faq?.length) return null


    return (

        <ProductSection

            title="Часто задаваемые вопросы"

            subtitle="Ответы на самые распространённые вопросы инженеров и специалистов по подбору оборудования."

        >

            <div
                className="
                    mx-auto
                    max-w-5xl
                    space-y-4
                "
            >

                {type.faq.map((item, index) => (

                    <FaqItem

                        key={index}

                        item={item}

                    />

                ))}

            </div>

        </ProductSection>

    )

}



/* =====================================================================

    Один элемент FAQ

===================================================================== */

function FaqItem({

    item

}) {

    const [

        open,

        setOpen

    ] = useState(false)


    return (

        <article

            className="
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                transition
                duration-300
            "

        >

            <button

                onClick={() => setOpen(!open)}

                className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    p-7
                    text-left
                "

            >

                <h3
                    className="
                        text-lg
                        font-semibold
                        text-gray-900
                    "
                >

                    {item.question}

                </h3>

                <svg
                    className={`
                        h-6
                        w-6
                        shrink-0
                        transition-transform
                        duration-300

                        ${open ? 'rotate-180' : ''}
                    `}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >

                    <path

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        d="M19 9l-7 7-7-7"

                    />

                </svg>

            </button>



            <div

                className={`
                    grid
                    transition-all
                    duration-300

                    ${open
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr]'
                    }
                `}

            >

                <div className="overflow-hidden">

                    <div
                        className="
                            border-t
                            border-gray-100
                            px-7
                            py-6
                            leading-8
                            text-gray-700
                        "
                    >

                        {item.answer}

                    </div>

                </div>

            </div>

        </article>

    )

}