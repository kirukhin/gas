export default function ProductSection({

    title,

    subtitle,

    children,

    className = '',

    background = 'white'

}) {

    const backgrounds = {

        white: 'bg-white',

        gray: 'bg-gray-50',

        dark: 'bg-slate-900 text-white'

    }

    return (

        <section

            className={`

                py-16

                lg:py-24

                ${backgrounds[background]}

                ${className}

            `}

        >

            <div className="container">

                {(title || subtitle) && (

                    <header className="mb-10">

                        {title && (

                            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">

                                {title}

                            </h2>

                        )}

                        {subtitle && (

                            <p className="mt-4 max-w-4xl text-lg leading-8 opacity-80">

                                {subtitle}

                            </p>

                        )}

                    </header>

                )}

                {children}

            </div>

        </section>

    )

}