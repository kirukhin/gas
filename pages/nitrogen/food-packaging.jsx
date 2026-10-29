// pages/nitrogen/food-packaging.jsx

import Head from "next/head";

import PageLayout from "../../components/PageLayout";
import PageHero from "../../components/PageHero";
import Breadcrumbs from "../../components/Breadcrumbs";

import QuickNavigation from "../../components/foodPackaging/QuickNavigation";
import Section from "../../components/foodPackaging/Section";

import Intro from "../../components/foodPackaging/Intro";
import MapTechnology from "../../components/foodPackaging/MapTechnology";
import WhyNitrogen from "../../components/foodPackaging/WhyNitrogen";
import ProductApplications from "../../components/foodPackaging/ProductApplications";
import NitrogenPurity from "../../components/foodPackaging/NitrogenPurity";
import EngineeringWorkflow from "../../components/foodPackaging/EngineeringWorkflow";
import NitrogenConsumption from "../../components/foodPackaging/NitrogenConsumption";
import EquipmentSystem from "../../components/foodPackaging/EquipmentSystem";
import GasSupplyComparison from "../../components/foodPackaging/GasSupplyComparison";
import FoodPackagingFAQ from "../../components/foodPackaging/FoodPackagingFAQ";
import EngineeringMistakes from "../../components/foodPackaging/EngineeringMistakes";

import FoodPackagingCalculator from "../../components/foodPackaging/FoodPackagingCalculator";

export default function FoodPackagingPage() {
  const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://blitzgas.ru";

  const canonical = `${SITE}/nitrogen/food-packaging`;

  const breadcrumbs = [
    { name: "Главная", href: "/" },
    { name: "Генерация азота", href: "/nitrogen" },
    {
      name: "Азот для пищевой упаковки",
      href: "/nitrogen/food-packaging",
    },
  ];

  const pageTitle =
    "Азот для пищевой упаковки (MAP) — расчёт расхода и подбор генератора азота | Блицгаз";

  const pageDescription =
    "Подробное инженерное руководство по применению азота в пищевой упаковке. Технология MAP, расчёт расхода азота, требования к чистоте, проектирование системы газоснабжения упаковочной линии и подбор оборудования.";

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: SITE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Генерация азота",
        item: `${SITE}/nitrogen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Азот для пищевой упаковки",
        item: canonical,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />

        <meta
          name="keywords"
          content="азот для пищевой упаковки, азот для упаковки продуктов, MAP упаковка, модифицированная газовая среда, генератор азота для упаковки, азот для упаковочной машины, расчет расхода азота, газ для упаковки продуктов, генератор азота PSA, упаковка в азоте"
        />

        <link rel="canonical" href={canonical} />

        <meta
          property="og:title"
          content="Азот для пищевой упаковки — инженерное руководство | Блицгаз"
        />

        <meta
          property="og:description"
          content="Технология MAP, требования к азоту, расчёт расхода газа и подбор оборудования для пищевых производств."
        />

        <meta
          property="og:image"
          content={`${SITE}/assets/og-food-packaging.jpg`}
        />

        <meta property="og:type" content="article" />
      </Head>

      <PageLayout
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        breadcrumb={breadcrumbs}
        jsonLd={jsonLdBreadcrumbs}
        heroImage="/assets/nitrogen/fp-hero.png"
        hero={
          <PageHero
            variant="extended"
            eyebrow="Инженерное руководство BlitzGas"
            title="Азот для пищевой упаковки"
            breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
            description="Практическое руководство по проектированию систем генерации азота для упаковочных линий пищевых производств."
            secondaryDescription="Разбираем технологию MAP, требования к чистоте азота, расчёт расхода газа, подбор оборудования и типовые ошибки, которые необходимо учитывать при проектировании упаковочной линии."
            image="/assets/nitrogen/fp-hero.png"
            imageAlt="Схема современной упаковочной линии с подачей азота"
            imagePriority
            actions={[
              {
                label: "Рассчитать оборудование",
                href: "#configurator",
                variant: "primary",
              },
              {
                label: "Как работает MAP",
                href: "#map",
                variant: "secondary",
              },
            ]}
            stats={[
              { value: "MAP", label: "технология упаковки" },
              { value: "PSA", label: "генерация азота" },
              { value: "24/7", label: "непрерывная работа" },
              { value: "B2B", label: "инженерные решения" },
            ]}
          />
        }
      >
        <QuickNavigation />

        {/* Основы MAP и роль азота */}
        <Intro />
        <MapTechnology />
        <WhyNitrogen />

        {/* Применение по категориям продуктов */}
        <ProductApplications />

        {/* Требования к чистоте азота */}
        <NitrogenPurity />

        {/* Проектирование системы */}
        <EngineeringWorkflow />

        {/* Расчёт расхода азота */}
        <NitrogenConsumption />

        {/* Состав азотной станции */}
        <EquipmentSystem />

        <Section
          id="comparison"
          title="Генератор азота, баллоны или жидкий азот"
          subtitle="Сравнение способов газоснабжения"
        >
          <GasSupplyComparison />
        </Section>

        <Section
          id="mistakes"
          title="Типовые ошибки при проектировании"
          subtitle="Практический опыт"
        >
          <EngineeringMistakes />
        </Section>

        <Section
          id="faq"
          title="Часто задаваемые вопросы"
          subtitle="FAQ"
        >
          <FoodPackagingFAQ />
        </Section>

        <Section
          id="configurator"
          title="Рассчитайте расход азота для упаковочной линии"
          subtitle="Онлайн-калькулятор"
        >
          <p className="mb-8">
            Укажите производительность упаковочной линии и параметры упаковки.
            Калькулятор определит ориентировочный расход азота и автоматически
            подберёт генератор и основное оборудование системы газоснабжения.
          </p>

          <FoodPackagingCalculator />
        </Section>
      </PageLayout>
    </>
  );
}