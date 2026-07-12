import Link from 'next/link'

function Separator() {
    return (
        <li aria-hidden="true">
            <svg
                className="h-3 w-3 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                />
            </svg>
        </li>
    )
}

export default function ProductBreadcrumbs({ product }) {

    if (!product) return null

    return (

        <nav

            aria-label="Хлебные крошки"

            className="mb-8"

        >

            <ol
                className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
                itemScope
                itemType="https://schema.org/BreadcrumbList"
            >

                {/* Главная */}

                <li
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                >

                    <Link
                        href="/"
                        itemProp="item"
                        className="transition hover:text-red-600"
                    >

                        <span itemProp="name">

                            Главная

                        </span>

                    </Link>

                    <meta itemProp="position" content="1" />

                </li>

                <Separator />



                {/* Категория */}

                <li
    itemProp="itemListElement"
    itemScope
    itemType="https://schema.org/ListItem"
>

    <Link
        href={`/${product.category}`}
        itemProp="item"
        className="transition hover:text-red-600"
    >

        <span itemProp="name">

            {product.categoryTitle}

        </span>

    </Link>

    <meta itemProp="position" content="2" />

</li>

                <Separator />



                {/* Тип оборудования */}

                <li
    itemProp="itemListElement"
    itemScope
    itemType="https://schema.org/ListItem"
>

    <Link
        href={`/dryers/${product.subcategory}`}
        itemProp="item"
        className="transition hover:text-red-600"
    >

        <span itemProp="name">

            {product.typeTitle}

        </span>

    </Link>

    <meta itemProp="position" content="3" />

</li>

                <Separator />



                {/* Линейка */}

                <li
    itemProp="itemListElement"
    itemScope
    itemType="https://schema.org/ListItem"
>

    <Link
        href={`/dryers/${product.subcategory}/${product.lineId}`}
        itemProp="item"
        className="transition hover:text-red-600"
    >

        <span itemProp="name">

            {product.lineTitle}

        </span>

    </Link>

    <meta itemProp="position" content="4" />

</li>

                <Separator />



                {/* Текущая модель */}

                <li
    aria-current="page"
    className="font-medium text-gray-900"
    itemProp="itemListElement"
    itemScope
    itemType="https://schema.org/ListItem"
>

    <span itemProp="name">

        {product.model}

    </span>

    <meta itemProp="position" content="5" />

</li>

            </ol>

        </nav>

    )

}