// ============================================================================
// ProductHero.jsx
//
// Главный компонент карточки товара.
//
// Задачи Hero:
//
// • Максимально быстро показать инженеру ключевые параметры изделия.
// • Сделать современный премиальный интерфейс.
// • Автоматически выбирать изображение модели.
// • Быть готовым к будущей галерее.
// • Не зависеть от структуры каталога.
// • Использовать только Tailwind.
//
// ============================================================================

import Image from 'next/image'
import Link from 'next/link'

// ============================================================================
// HeroStat
//
// Большая инженерная карточка.
// Используется для вывода главных параметров.
//
// Пример:
//
// ┌─────────────┐
//
// 3.8
// м³/мин
//
// Производительность
//
// └─────────────┘
//
// ============================================================================

function HeroStat({

    value,

    unit,

    label

}) {

    if (!value) return null

    return (

        <div
            className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "
        >

            <div className="text-3xl font-bold text-gray-900">

                {value}

            </div>

            {unit && (

                <div className="mt-1 text-sm font-semibold uppercase tracking-wide text-red-600">

                    {unit}

                </div>

            )}

            <div className="mt-3 text-sm text-gray-500 leading-relaxed">

                {label}

            </div>

        </div>

    )

}
// ============================================================================
// HeroButton
//
// Универсальная кнопка Hero.
//
// primary=true
//
// красная кнопка
//
// secondary
//
// белая кнопка
//
// ============================================================================

function HeroButton({

    href,

    children,

    primary = false

}) {

    return (

        <Link

            href={href}

            className={`
                inline-flex
                items-center
                justify-center
                rounded-xl
                px-6
                py-4
                font-semibold
                transition-all
                duration-300

                ${primary
                    ? `
                        bg-red-600
                        text-white
                        hover:bg-red-700
                        hover:shadow-xl
                      `
                    : `
                        border
                        border-gray-300
                        bg-white
                        text-gray-800
                        hover:border-red-600
                        hover:text-red-600
                      `
                }
            `}
        >

            {children}

        </Link>

    )

}
// ============================================================================
// HeroMetaItem
//
// Правая нижняя карточка.
//
// Производитель
// Блицгаз
//
// Серия
// BGC
//
// ============================================================================

function HeroMetaItem({

    title,

    value

}) {

    if (!value) return null

    return (

        <div
            className="
                flex
                items-start
                justify-between
                gap-4
                border-b
                border-gray-100
                py-3
            "
        >

            <span
                className="
                    text-sm
                    text-gray-500
                "
            >

                {title}

            </span>

            <span
                className="
                    text-right
                    font-semibold
                    text-gray-900
                "
            >

                {value}

            </span>

        </div>

    )

}
// ============================================================================
// HeroImage
//
// Сейчас выводит одно изображение.
//
// Но архитектура уже поддерживает:
//
// model.gallery
//
// line.gallery
//
// видео
//
// чертежи
//
// 3D
//
// Поэтому менять Hero потом не придется.
//
// ============================================================================

function HeroImage({

    gallery,

    title

}) {

    const image =
    gallery?.[0] ||
    '/assets/placeholders/product.png'

    return (

        <div
            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-200
                bg-white
                shadow-xl
            "
        >

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-red-50
                    via-white
                    to-white
                "
            />

            <div
                className="
                    relative
                    aspect-square
                    p-10
                "
            >

                <Image

                    src={image}

                    alt={title}

                    fill={false}

                    width={700}

                    height={700}

                    className="
                        h-full
                        w-full
                        object-contain
                    "

                    priority

                />

            </div>

            {/* ===================================================
                Индикаторы будущей галереи

                Пока одна фотография.

                Позже автоматически станет карусель.

            =================================================== */}

            <div
                className="
                    flex
                    justify-center
                    gap-2
                    pb-6
                "
            >

                {gallery?.map((_, index) => (

                    <span

                        key={index}

                        className={`
                            h-2
                            w-2
                            rounded-full

                            ${index === 0
                                ? 'bg-red-600'
                                : 'bg-gray-300'
                            }
                        `}
                    />

                ))}

            </div>

        </div>

    )

}
// ============================================================================
// ProductHero
//
// Главный Hero карточки товара.
//
// Здесь мы:
//
// • выбираем изображение
// • готовим будущую галерею
// • формируем инженерные KPI
// • собираем бейджи
// • красиво форматируем цену
// • подготавливаем все данные,
//   чтобы JSX ниже был максимально чистым.
//
// ============================================================================

export default function ProductHero({

    product

}) {

    if (!product) return null



    // =========================================================================
    // Из модели удобно достаем все часто используемые объекты.
    // =========================================================================

    const {

        specs = {},

        commonSpecs = {},

        media = {},

        lineMedia = {}

    } = product

    // =========================================================================
    // Красивое отображение стоимости.
    //
    // 289600
    //
    // ->
    //
    // 289 600 ₽
    // =========================================================================

    const formattedPrice = product.price

        ? new Intl.NumberFormat(

            'ru-RU'

        ).format(product.price)

        : null


    // =========================================================================
    // Автоматический выбор фотографии.
    //
    // Приоритет:
    //
    // 1. Фото модели
    //
    // 2. Фото серии
    //
    // 3. Заглушка
    //
    // Благодаря этому можно постепенно
    // добавлять фотографии моделей.
    // =========================================================================

    const heroImage =

        media.image ||

        lineMedia.image ||

        '/assets/placeholders/product.png'


    // =========================================================================
    // Подготовка галереи.
    //
    // Пока используется одна фотография.
    //
    // Позже достаточно добавить:
    //
    // media.gallery
    //
    // или
    //
    // lineMedia.gallery
    //
    // Hero менять уже не придется.
    // =========================================================================

    const gallery =

        media.gallery ||

        lineMedia.gallery ||

        [

            heroImage

        ]

    // =========================================================================
    // Главные характеристики изделия.
    //
    // Именно они первыми бросаются
    // в глаза инженеру.
    // =========================================================================

    const stats = [

        {

            value: specs.flow,

            unit: 'м³/мин',

            label: 'Производительность'

        },

        {

            value: commonSpecs.dewPoint,

            unit: '°C',

            label: 'Точка росы'

        },

        {

            value:

                commonSpecs.pressureMin &&

                    commonSpecs.pressureMax

                    ? `${commonSpecs.pressureMin}–${commonSpecs.pressureMax}`

                    : null,

            unit: 'бар',

            label: 'Рабочее давление'

        },

        {

            value:

                specs.power?.kw,

            unit: 'кВт',

            label: 'Потребляемая мощность'

        }

    ].filter(

        item => item.value

    )

    // =========================================================================
    // Компактные инженерные бейджи.
    //
    // Они позволяют за секунду понять,
    // что представляет собой оборудование.
    // =========================================================================

    const badges = [

        {
            label: 'Технология',
            value: commonSpecs.technology
        },

        {
            label: 'Регенерация',
            value: commonSpecs.regeneration
        },

        {
            label: 'Точка росы',
            value: commonSpecs.dewPoint
                ? `${commonSpecs.dewPoint}°C PDP`
                : null
        },

        {
            label: 'IP',
            value: commonSpecs.enclosure
        },

        {
            label: 'ISO',
            value: commonSpecs.purityClass
        }

    ].filter(item => item.value)


    // =========================================================================
    // Нижняя информационная карточка.
    //
    // Здесь собираются данные,
    // относящиеся ко всей линейке.
    // =========================================================================

    const meta = [

        {

            title: 'Производитель',

            value: product.brand

        },

        {

            title: 'Серия',

            value: product.line

        },

        {

            title: 'Технология',

            value: commonSpecs.technology

        },

        {

            title: 'Регенерация',

            value: commonSpecs.regeneration

        },

        {

            title: 'Класс чистоты',

            value: commonSpecs.purityClass

        }

    ]

    // =========================================================================
    // Основные действия пользователя.
    //
    // Позже здесь легко подключатся:
    //
    // • CRM
    // • формы
    // • PDF
    // • калькулятор
    // =========================================================================

    const actions = {

        quote: '/contacts',

        engineer: '/contacts',

        catalog: '/catalogs'

    }

    // =========================================================================
    // Далее начинается JSX Hero.
    // =========================================================================

    return (

        <section
            className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-white
                via-red-50/30
                to-white
                py-12
                lg:py-20
            "
        >
    
            {/* ===========================================================
                Декоративный фон Hero.
                Не несет смысловой нагрузки,
                только делает страницу визуально дороже.
            ============================================================ */}
    
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >
    
                {/* Большое красное свечение */}
    
                <div
                    className="
                        absolute
                        -right-40
                        top-10
                        h-[520px]
                        w-[520px]
                        rounded-full
                        bg-red-100
                        blur-3xl
                        opacity-40
                    "
                />
    
                {/* Второе слабое свечение */}
    
                <div
                    className="
                        absolute
                        left-0
                        bottom-0
                        h-[320px]
                        w-[320px]
                        rounded-full
                        bg-red-50
                        blur-3xl
                        opacity-70
                    "
                />
    
                {/* Инженерная сетка */}
    
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.03]
                    "
                    style={{
                        backgroundImage:
                            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)',
                        backgroundSize: '36px 36px'
                    }}
                />
    
            </div>
    
            {/* ===========================================================
                Основной контейнер Hero
            ============================================================ */}
    
            <div className="container relative z-10">
    
                
    
                {/* =======================================================
                    Асимметричная сетка.
    
                    Левая колонка специально шире.
    
                    Такое решение выглядит современнее
                    стандартных Bootstrap колонок.
                ======================================================== */}
    
                <div
                    className="
                        grid
                        gap-16
                        items-start
    
                        xl:grid-cols-[1.2fr_.9fr]
                    "
                >
    
                    {/* ===================================================
                        ЛЕВАЯ КОЛОНКА
    
                        Вся информация о товаре.
                    ==================================================== */}
    
                    <div>
    
                        {/* ===============================================
                            Название модели
                        ================================================ */}
    
                        <h1
                            className="
                                max-w-4xl
                                text-4xl
                                font-extrabold
                                leading-tight
                                tracking-tight
                                text-gray-900
    
                                md:text-5xl
                            "
                        >
    
                            {product.name}
    
                        </h1>
    
                        {/* ===============================================
                            Краткое SEO описание.
    
                            Используем описание именно модели,
                            а не серии.
                        ================================================ */}
    
                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-lg
                                leading-8
                                text-gray-600
                            "
                        >
    
                            {product.seo?.description}
    
                        </p>
    
                        {/* ===============================================
                            Инженерные бейджи.
    
                            Позволяют буквально за секунду
                            понять основные свойства оборудования.
                        ================================================ */}
    
                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                gap-3
                            "
                        >
    
                            {badges.map((badge) => (
    
                                <div
    
                                    key={badge.label}
    
                                    className="
                                        rounded-full
                                        border
                                        border-red-200
                                        bg-white/80
                                        backdrop-blur
                                        px-4
                                        py-2
                                        shadow-sm
                                    "
    
                                >
    
                                    <div
                                        className="
                                            text-[11px]
                                            uppercase
                                            tracking-wider
                                            text-gray-400
                                        "
                                    >
    
                                        {badge.label}
    
                                    </div>
    
                                    <div
                                        className="
                                            mt-1
                                            font-semibold
                                            text-gray-900
                                        "
                                    >
    
                                        {badge.value}
    
                                    </div>
    
                                </div>
    
                            ))}
    
                        </div>
    
                        {/* ===============================================
                            KPI карточки
    
                            Самые важные технические параметры.
                        ================================================ */}
    
                        <div
                            className="
                                mt-10
                                grid
                                gap-5
    
                                sm:grid-cols-2
    
                                xl:grid-cols-4
                            "
                        >
    
                            {stats.map((stat) => (
    
                                <HeroStat
    
                                    key={stat.label}
    
                                    value={stat.value}
    
                                    unit={stat.unit}
    
                                    label={stat.label}
    
                                />
    
                            ))}
    
                        </div>
                                            {/* ===============================================
                        Стоимость оборудования.

                        Если цена отсутствует,
                        блок автоматически не выводится.
                    ================================================ */}

                    {formattedPrice && (

<div
    className="
        mt-12
        rounded-3xl
        border
        border-red-200
        bg-gradient-to-br
        from-red-600
        via-red-700
        to-red-800
        p-8
        text-white
        shadow-2xl
    "
>

    <div
        className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-red-100
        "
    >

        Ориентировочная стоимость

    </div>

    <div
        className="
            mt-2
            text-5xl
            font-black
            leading-none
        "
    >

        {formattedPrice}

        <span
            className="
                ml-2
                text-3xl
                font-semibold
            "
        >

            ₽

        </span>

    </div>

    <p
        className="
            mt-4
            max-w-xl
            text-red-100
        "
    >

        Финальная стоимость зависит от рабочего
        давления, комплектации, исполнения,
        дополнительного оборудования и условий
        поставки.

    </p>

</div>

)}

{/* ===============================================
Основные действия пользователя.
================================================ */}

<div
className="
    mt-8
    flex
    flex-wrap
    gap-4
"
>

<Link
    href={actions.quote}
    className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-red-600
        px-8
        py-4
        font-semibold
        text-white
        transition

        hover:bg-red-700
    "
>

    Запросить КП

</Link>

<Link
    href={actions.engineer}
    className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        border
        border-gray-300
        bg-white
        px-8
        py-4
        font-semibold
        text-gray-800
        transition

        hover:border-red-500
        hover:text-red-600
    "
>

    Консультация инженера

</Link>

<Link
    href={actions.catalog}
    className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-gray-50
        px-8
        py-4
        font-medium
        text-gray-700
        transition

        hover:bg-gray-100
    "
>

    Скачать каталог

</Link>

</div>

{/* ===============================================
Инженерная информационная карточка.

Здесь намеренно показываются
характеристики всей серии,
а не конкретной модели.

Это помогает понять,
к какому семейству относится оборудование.
================================================ */}

<div
className="
    mt-12
    overflow-hidden
    rounded-3xl
    border
    border-gray-200
    bg-white
    shadow-lg
"
>

<div
    className="
        border-b
        border-gray-100
        px-8
        py-6
    "
>

    <h2
        className="
            text-xl
            font-bold
            text-gray-900
        "
    >

        Серия оборудования

    </h2>

    <p
        className="
            mt-2
            text-gray-600
        "
    >

        Общие характеристики линейки
        {` ${product.lineTitle}`}

    </p>

</div>

<div
    className="
        divide-y
        divide-gray-100
    "
>

    {meta.map((item) => (

        <div

            key={item.title}

            className="
                flex
                items-center
                justify-between
                gap-8
                px-8
                py-5
            "

        >

            <span
                className="
                    text-gray-500
                "
            >

                {item.title}

            </span>

            <span
                className="
                    text-right
                    font-semibold
                    text-gray-900
                "
            >

                {item.value}

            </span>

        </div>

    ))}

</div>

</div>

</div>

{/* ===================================================
ПРАВАЯ КОЛОНКА

Большое инженерное изображение.

Следующей частью полностью
закроем Hero.
==================================================== */}

<div
className="
xl:sticky
xl:top-24
"
>
                        {/* ===================================================
                        Большое изображение оборудования.

                        HeroImage уже самостоятельно умеет:

                        • выбирать фото модели
                        • использовать фото серии
                        • работать с будущей галереей

                    ==================================================== */}

<HeroImage

gallery={gallery}

title={product.name}

/>

{/* ===============================================
Подпись под изображением

Помогает пользователю понять,
что изображено на фотографии.
================================================ */}

<div
className="
    mt-5
    rounded-2xl
    border
    border-gray-200
    bg-white
    p-5
    text-center
    shadow-sm
"
>

<div
    className="
        text-lg
        font-semibold
        text-gray-900
    "
>

    {product.model}

</div>

<div
    className="
        mt-1
        text-sm
        text-gray-500
    "
>

    {product.lineTitle}

</div>

</div>

{/* ===============================================
Небольшая инженерная памятка.

Делает правую колонку визуально
более наполненной и полезной.
================================================ */}

<div
className="
    mt-6
    rounded-2xl
    border
    border-red-100
    bg-red-50
    p-6
"
>

<div
    className="
        text-sm
        font-bold
        uppercase
        tracking-wider
        text-red-700
    "
>

    Инженерная рекомендация

</div>

<p
    className="
        mt-3
        leading-7
        text-gray-700
    "
>

    Для получения заявленной точки росы рекомендуется
    использовать магистральные коалесцентные фильтры,
    соблюдать допустимый диапазон рабочих температур
    и предусматривать запас производительности
    не менее 10–20% относительно расчетного расхода.

</p>

</div>

</div>

</div>

</div>

</section>

)
}