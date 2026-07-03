// pages/dryers/[subcategory].jsx


import { useMemo, useState } from 'react'

import PageLayout from '../../components/PageLayout'

import DryerContentSections from '../../components/dryers/DryerContentSections'
import DryerTypeFilter from '../../components/dryers/DryerTypeFilter'
import DryerTypeTable from '../../components/dryers/DryerTypeTable'
import Faq from '../../components/common/Faq'

import {
  getDryerTypes,
  getDryerType
} from '../../lib/catalog'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || ''


// ======================================
// STATIC PATHS
// ======================================

export async function getStaticPaths() {

  const paths = getDryerTypes().map(type => ({
    params: {
      subcategory: type.type.subcategory
    }
  }))

  return {
    paths,
    fallback: false
  }
}


// ======================================
// STATIC PROPS
// ======================================

export async function getStaticProps({ params }) {

  const typeData = getDryerType(
    params.subcategory
  )

  if (!typeData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      typeData
    }
  }
}


// ======================================
// PAGE
// ======================================

export default function DryerTypePage({
  typeData
}) {

  // ======================================
  // Все модели из всех линеек
  // ======================================

  const allModels = useMemo(() => (
    typeData.lines.flatMap(line =>
      line.models.map(model => ({
        ...model,
        lineName: line.name,
        lineTitle: line.title,
        commonSpecs: line.commonSpecs
      }))
    )
  ), [typeData])

  const [filteredModels, setFilteredModels] =
    useState(allModels)


  // ======================================
  // JSON-LD
  // ======================================

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',

    name:
      typeData.seo?.title ||
      typeData.type.title,

    description:
      typeData.seo?.description || '',

    url:
      `${SITE}/dryers/${typeData.type.subcategory}`
  }


  return (

    <PageLayout

      title={
        typeData.seo?.title ||
        typeData.type.title
      }

      description={
        typeData.seo?.description || ''
      }

      canonical={
        `${SITE}/dryers/${typeData.type.subcategory}`
      }

      heroImage={
        typeData.hero?.image
      }

      jsonLd={jsonLd}

      breadcrumb={[
        {
          name: 'Главная',
          href: '/'
        },
        {
          name: 'Осушители',
          href: '/dryers'
        },
        {
          name: typeData.type.title,
          href: `/dryers/${typeData.type.subcategory}`
        }
      ]}
    >

      <section className="container mx-auto px-6 py-12 max-w-7xl">

        {/* ======================================
            SEO-КОНТЕНТ
        ====================================== */}

        <DryerContentSections
          data={typeData}
        />


        {/* ======================================
            ПОДБОР ОБОРУДОВАНИЯ
        ====================================== */}

        <section className="mb-20">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Подбор оборудования
            </h2>

            <p className="text-slate-600 max-w-3xl">
              Используйте фильтр для подбора
              осушителя по производительности
              и другим параметрам.
            </p>

          </div>

          <DryerTypeFilter
            models={allModels}
            config={typeData.filter}
            onChange={setFilteredModels}
          />

        </section>


        {/* ======================================
            СПИСОК МОДЕЛЕЙ
        ====================================== */}

        <section className="mb-20">

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Модели в наличии
            </h2>

            <p className="text-slate-600">
              Найдено моделей: {filteredModels.length}
            </p>

          </div>

          <DryerTypeTable
            models={filteredModels}
          />

        </section>


        {/* ======================================
            FAQ
        ====================================== */}

        {typeData.faq?.length > 0 && (

          <section className="mb-20">

            <Faq
              items={typeData.faq}
            />

          </section>

        )}

      </section>

    </PageLayout>

  )
}