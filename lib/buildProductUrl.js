//lib/buildProductUrl.js

export function buildProductUrl(product) {

    if (!product) return '/'

    if (

        product.category === 'dryers' &&

        product.subcategory

    ) {

        return `/dryers/${product.subcategory}/${product.slug}`

    }

    return `/products/${product.slug || product.id}`

}