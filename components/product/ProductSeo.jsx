import Head from 'next/head'
import Script from 'next/script'

export default function ProductSeo({

    product,

    seo

}) {

    if (!product) return null



    /*
    --------------------------------------------------
    URL страницы
    --------------------------------------------------
    */

    const url =
        `https://blitzgas.ru/dryers/${product.subcategory}/${product.slug}`



    /*
    --------------------------------------------------
    Главное изображение
    --------------------------------------------------
    */

    const image =

        product.media?.image ||

        product.lineMedia?.image ||

        '/assets/logo-og.jpg'



    /*
    --------------------------------------------------
    Product JSON-LD
    --------------------------------------------------
    */

    const productSchema = {

        "@context": "https://schema.org",

        "@type": "Product",

        name: product.name,

        image: [

            `https://blitzgas.ru${image}`

        ],

        description: seo.description,

        sku: product.id,

        mpn: product.id,

        brand: {

            "@type": "Brand",

            name: "Блицгаз"

        },

        category: product.lineTitle,

        offers: {

            "@type": "Offer",

            url,

            priceCurrency: "RUB",

            price: product.price,

            availability:
                "https://schema.org/InStock"

        }

    }



    /*
    --------------------------------------------------
    Organization JSON-LD
    --------------------------------------------------
    */

    const organizationSchema = {

        "@context": "https://schema.org",

        "@type": "Organization",

        name: "Блицгаз",

        url: "https://blitzgas.ru"

    }



    return (

        <>

            <Head>

                {/* Основные */}

                <title>

                    {seo.title}

                </title>

                <meta

                    name="description"

                    content={seo.description}

                />



                {/* Canonical */}

                <link

                    rel="canonical"

                    href={url}

                />



                {/* Robots */}

                <meta

                    name="robots"

                    content="index,follow,max-image-preview:large"

                />



                {/* Open Graph */}

                <meta

                    property="og:type"

                    content="product"

                />

                <meta

                    property="og:title"

                    content={seo.title}

                />

                <meta

                    property="og:description"

                    content={seo.description}

                />

                <meta

                    property="og:url"

                    content={url}

                />

                <meta

                    property="og:image"

                    content={`https://blitzgas.ru${image}`}

                />



                {/* Twitter */}

                <meta

                    name="twitter:card"

                    content="summary_large_image"

                />

                <meta

                    name="twitter:title"

                    content={seo.title}

                />

                <meta

                    name="twitter:description"

                    content={seo.description}

                />

                <meta

                    name="twitter:image"

                    content={`https://blitzgas.ru${image}`}

                />



            </Head>



            {/* Product */}

            <Script

                id="product-schema"

                type="application/ld+json"

                strategy="afterInteractive"

                dangerouslySetInnerHTML={{

                    __html:
                        JSON.stringify(productSchema)

                }}

            />



            {/* Organization */}

            <Script

                id="organization-schema"

                type="application/ld+json"

                strategy="afterInteractive"

                dangerouslySetInnerHTML={{

                    __html:
                        JSON.stringify(organizationSchema)

                }}

            />

        </>

    )

}