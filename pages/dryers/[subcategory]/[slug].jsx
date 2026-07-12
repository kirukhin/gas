// pages/dryers/[subcategory]/[slug].jsx

import PageLayout from '../../../components/PageLayout'

import {
    getAllDryers,
    getDryerBySlug,
    getDryersByLine,
    buildProductSeo
}
from '../../../lib/catalog'

import ProductSeo from '../../../components/product/ProductSeo'

import ProductBreadcrumbs from '../../../components/product/ProductBreadcrumbs'

import ProductHero from '../../../components/product/ProductHero'

import ProductSpecs from '../../../components/product/ProductSpecs'

import ProductDescription from '../../../components/product/ProductDescription'

import ProductAdvantages from '../../../components/product/ProductAdvantages'

import ProductApplications from '../../../components/product/ProductApplications'

import ProductTechnology from '../../../components/product/ProductTechnology'

import ProductSelectionGuide from '../../../components/product/ProductSelectionGuide'

import ProductComparison from '../../../components/product/ProductComparison'

import ProductIndustries from '../../../components/product/ProductIndustries'

import ProductLineModels from '../../../components/product/ProductLineModels'

import ProductFaq from '../../../components/product/ProductFaq'

import ProductCTA from '../../../components/product/ProductCTA'

import ProductRelated from '../../../components/product/ProductRelated'



export async function getStaticPaths() {

    const products =
        getAllDryers()


    const paths =
        products.map(product => ({

            params: {

                subcategory:
                    product.subcategory,

                slug:
                    product.slug

            }

        }))

    return {

        paths,

        fallback: false

    }

}

export async function getStaticProps({

    params

}) {

    const product =
        getDryerBySlug(
            params.slug
        )

    if (!product) {

        return {

            notFound: true

        }

    }

    const lineProducts =
    getDryersByLine(
        product.lineId
    )

    const index =
        lineProducts.findIndex(
            p => p.slug === product.slug
        )

    const previousProduct =
        index > 0
            ? lineProducts[index - 1]
            : null

    const nextProduct =
        index < lineProducts.length - 1
            ? lineProducts[index + 1]
            : null

    const seo =
        buildProductSeo(product)

    return {

        props: {

            product,

            lineProducts,

            previousProduct,

            nextProduct,

            seo

        }

    }

}

export default function DryerProductPage({

    product,

    lineProducts,

    previousProduct,

    nextProduct,

    seo

}) {

    return (

        <>

            <ProductSeo
                product={product}
                seo={seo}
            />

            <PageLayout>

                <ProductBreadcrumbs
                    product={product}
                />

                <ProductHero
                    product={product}
                />

                <ProductSpecs
                    product={product}
                />

                <ProductDescription
                    product={product}
                />

                <ProductAdvantages
                    product={product}
                />

                <ProductApplications
                    product={product}
                />

                <ProductTechnology
                    product={product}
                />

                <ProductSelectionGuide
                    product={product}
                />

                <ProductComparison
                    product={product}
                />

                <ProductIndustries
                    product={product}
                />

                <ProductLineModels
                    product={product}
                    products={lineProducts}
                />

                <ProductFaq
                    product={product}
                />

                <ProductCTA
                    product={product}
                />

                <ProductRelated
                    previous={previousProduct}
                    next={nextProduct}
                />

            </PageLayout>

        </>

    )

}