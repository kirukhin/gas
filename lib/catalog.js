// lib/catalog.js

import refrigeration from '../data/dryers/refrigeration.json'
import adsorptionCold from '../data/dryers/adsorption-cold.json'
import adsorptionHot from '../data/dryers/adsorption-hot.json'

const dryerCatalog = [
  refrigeration,
  adsorptionCold,
  adsorptionHot
]



/* =========================================
   NORMALIZER
========================================= */

function normalizeDryer(type, line, model) {
  return {

    /* -------------------------------------
       MODEL
    ------------------------------------- */

    ...model,



/* -------------------------------------
   CATEGORY
------------------------------------- */

category: type.type.category,
categoryTitle: type.type.categoryTitle,

subcategory: type.type.subcategory,



    /* -------------------------------------
       TYPE
    ------------------------------------- */

    typeTitle: type.type.title,
    typeH1: type.type.h1,

    typeSeo: type.seo,

    hero: type.hero ?? null,

intro: type.intro ?? null,

advantages: type.advantages ?? null,

applications: type.applications ?? null,

selectionGuide: type.selectionGuide ?? null,

technology: type.technology ?? null,

comparison: type.comparison ?? null,

industries: type.industries ?? null,

filter: type.filter ?? null,

faq: type.faq ?? null,



    /* -------------------------------------
       LINE
    ------------------------------------- */

    lineId: line.id,

    lineName: line.name,

    lineTitle: line.title,

    lineBrand: line.brand,

    lineSeo: line.seo,

    lineMedia: line.media,

    commonSpecs: line.commonSpecs

  }
}



/* =========================================
   DRYERS
========================================= */

export function getDryerTypes() {
  return dryerCatalog
}



export function getDryerType(subcategory) {
  return dryerCatalog.find(
    item => item.type.subcategory === subcategory
  )
}



export function getAllDryerLines() {
  return dryerCatalog.flatMap(type => type.lines)
}



export function getDryerLine(lineId) {

  return getAllDryerLines().find(

    line =>

      line.id.toLowerCase() ===

      lineId.toLowerCase()

  )

}



export function getAllDryers() {

  return dryerCatalog.flatMap(type =>

    type.lines.flatMap(line =>

      line.models.map(model =>

        normalizeDryer(

          type,

          line,

          model

        )

      )

    )

  )

}



export function getDryerBySlug(slug) {

  return getAllDryers().find(

    product =>

      product.slug === slug

  )

}



export function getDryersBySubcategory(subcategory) {

  return getAllDryers().filter(

    product =>

      product.subcategory === subcategory

  )

}



export function getDryersByLine(lineId) {

  return getAllDryers().filter(

    product =>

      product.lineId.toLowerCase() ===

      lineId.toLowerCase()

  )

}



/* =========================================
   GENERIC SEO HELPERS
========================================= */

export function buildProductSeo(product) {

  if (!product)

    return {

      title: '',

      description: ''

    }



  return {

    title:

      product.seo?.title ||

      product.name,



    description:

      product.seo?.description ||

      ''

  }

}



export function buildLineSeo(line) {

  if (!line)

    return null



  return {

    title:

      line.seo?.title ||

      line.title,



    description:

      line.seo?.description ||

      ''

  }

}



export function buildTypeSeo(typeData) {

  if (!typeData)

    return null



  return {

    title:

      typeData.seo?.title ||

      typeData.type.title,



    description:

      typeData.seo?.description ||

      ''

  }

}