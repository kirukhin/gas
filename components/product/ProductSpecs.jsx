// components/product/ProductSpecs.jsx

/*
    ProductSpecs

    Блок технических характеристик товара.

    Источник данных:

    product.specs
    --------------------------------
    Индивидуальные параметры модели

    Например:

    flow
    power.kw


    product.commonSpecs
    --------------------------------
    Общие характеристики линейки

    Например:

    dewPoint
    pressureMin
    pressureMax
    regeneration
    purityClass


    Логика:

    1. Сначала показываем характеристики конкретной модели
    2. Затем характеристики серии
    3. Пустые значения автоматически скрываются

*/


import ProductSection from './ProductSection'


export default function ProductSpecs({

    product

}) {


    if (!product) return null



    const {

        specs = {},

        commonSpecs = {}

    } = product



    /*
        Формируем единый массив характеристик.

        Здесь специально нет привязки
        к конкретному типу оборудования.

        Компонент сможет работать
        и с другими продуктами.
    */


    const items = [

        /*
            Производительность
        */

        {

            title: 'Производительность',

            value:
                specs.flow
                    ? `${specs.flow} м³/мин`
                    : null,

            description:
                'Номинальный расход сжатого воздуха при рабочих условиях эксплуатации.'

        },


        /*
            Мощность
        */

        {

            title: 'Потребляемая мощность',

            value:
                specs.power?.kw
                    ? `${specs.power.kw} кВт`
                    : null,

            description:
                'Энергопотребление оборудования в штатном режиме работы.'

        },


        /*
            Технология
        */

        {

            title: 'Технология осушки',

            value:
                commonSpecs.technology,

            description:
                'Принцип удаления влаги из сжатого воздуха.'

        },


        /*
            Регенерация
        */

        {

            title: 'Тип регенерации',

            value:
                commonSpecs.regeneration,

            description:
                'Способ восстановления рабочих свойств адсорбента.'

        },


        /*
            Расход на регенерацию
        */

        {

            title: 'Расход воздуха на регенерацию',

            value:
                commonSpecs.regenerationConsumption,

            description:
                'Количество осушенного воздуха, используемого для восстановления адсорбента.'

        },


        /*
            Давление
        */

        {

            title: 'Рабочее давление',

            value:

                commonSpecs.pressureMin &&
                commonSpecs.pressureMax

                    ?

                    `${commonSpecs.pressureMin}–${commonSpecs.pressureMax} бар`

                    :

                    null,


            description:
                'Диапазон давления, при котором оборудование сохраняет расчетные характеристики.'

        },


        /*
            Температура воздуха
        */

        {

            title: 'Температура входящего воздуха',

            value:
                commonSpecs.airTemperature
                    ? `${commonSpecs.airTemperature} °C`
                    : null,


            description:
                'Допустимый диапазон температуры сжатого воздуха на входе.'

        },


        /*
            Точка росы
        */

        {

            title: 'Точка росы',

            value:
                commonSpecs.dewPoint
                    ? `${commonSpecs.dewPoint} °C`
                    : null,


            description:
                'Температура, при которой начинается конденсация влаги из осушенного воздуха.'

        },


        /*
            Маслосодержание
        */

        {

            title: 'Остаточное содержание масла',

            value:
                commonSpecs.oilContent
                    ? `${commonSpecs.oilContent} мг/м³`
                    : null,


            description:
                'Максимально допустимое содержание масла после подготовки воздуха.'

        },


        /*
            Потери давления
        */

        {

            title: 'Потери давления',

            value:
                commonSpecs.pressureDrop
                    ? `${commonSpecs.pressureDrop} бар`
                    : null,


            description:
                'Гидравлическое сопротивление оборудования в воздушной магистрали.'

        },


        /*
            Класс чистоты
        */

        {

            title: 'Класс качества воздуха',

            value:
                commonSpecs.purityClass,


            description:
                'Соответствие требованиям международного стандарта ISO 8573-1.'

        },


        /*
            Управление
        */

        {

            title: 'Система управления',

            value:
                commonSpecs.control,


            description:
                'Тип контроллера и алгоритм управления рабочими циклами оборудования.'

        },


        /*
            Датчик температуры
        */

        {

            title: 'Контроль температуры',

            value:
                commonSpecs.temperatureSensor
                    ? 'Есть'
                    : null,


            description:
                'Контроль температурных параметров для стабильной работы системы.'

        },


        /*
            Время цикла
        */

        {

            title: 'Продолжительность цикла',

            value:
                commonSpecs.cycleTime,


            description:
                'Продолжительность рабочего цикла переключения режимов.'

        },


        /*
            Корпус
        */

        {

            title: 'Степень защиты',

            value:
                commonSpecs.enclosure,


            description:
                'Защита электрических компонентов оборудования.'

        },


        /*
            Адсорбент
        */

        {

            title: 'Тип адсорбента',

            value:
                commonSpecs.adsorbent,


            description:
                'Материал, используемый для удаления влаги из сжатого воздуха.'

        }


    ].filter(

        item => item.value

    )



    return (

        <ProductSection

            title="Технические характеристики"

            subtitle="Основные параметры оборудования и характеристики серии."

        >


            <div
                className="
                    grid
                    gap-5

                    md:grid-cols-2
                "
            >


                {items.map((item) => (


                    <article

                        key={item.title}

                        className="
                            rounded-2xl
                            border
                            border-gray-200
                            bg-white
                            p-6
                            transition
                            hover:shadow-lg
                        "

                    >


                        <h3
                            className="
                                text-lg
                                font-bold
                                text-gray-900
                            "
                        >

                            {item.title}

                        </h3>



                        <div
                            className="
                                mt-3
                                text-2xl
                                font-extrabold
                                text-red-600
                            "
                        >

                            {item.value}

                        </div>



                        <p
                            className="
                                mt-3
                                text-sm
                                leading-6
                                text-gray-600
                            "
                        >

                            {item.description}

                        </p>


                    </article>


                ))}


            </div>


        </ProductSection>

    )

}