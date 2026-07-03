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
  const lines = getAllDryerLines()

  return lines.find(
    line => line.id.toLowerCase() === lineId.toLowerCase()
  )
}



export function getAllDryers() {
  return dryerCatalog.flatMap(type =>
    type.lines.flatMap(line =>
      line.models.map(model => ({
        ...model,

        category: type.type.category,
        subcategory: type.type.subcategory,

        lineTitle: line.title,
        lineSeo: line.seo,

        commonSpecs: line.commonSpecs
      }))
    )
  )
}



export function getDryerBySlug(slug) {
  return getAllDryers().find(
    item => item.slug === slug
  )
}



export function getDryersBySubcategory(subcategory) {
  return getAllDryers().filter(
    item => item.subcategory === subcategory
  )
}



export function getDryersByLine(lineId) {
  return getAllDryers().filter(
    item => item.line.toLowerCase() === lineId.toLowerCase()
  )
}



/* =========================================
   GENERIC SEO HELPERS
========================================= */

export function buildProductSeo(product) {
  if (product?.seo) {
    return {
      title: product.seo.title,
      description: product.seo.description
    }
  }

  return {
    title: product?.name || '',
    description: ''
  }
}



export function buildLineSeo(line) {
  if (!line) return null

  return {
    title: line.seo?.title || line.title,
    description: line.seo?.description || ''
  }
}



export function buildTypeSeo(typeData) {
  if (!typeData) return null

  const firstLine = typeData.lines?.[0]

  return {
    title:
      firstLine?.seo?.title ||
      typeData.type.title,

    description:
      firstLine?.seo?.description ||
      ''
  }
}