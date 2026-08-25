// pages/nitrogen/food-packaging.jsx

import Head from "next/head";

// Базовые компоненты страницы
import Layout from "../../components/foodPackaging/Layout";
import Hero from "../../components/foodPackaging/Hero";
import QuickNavigation from "../../components/foodPackaging/QuickNavigation";
import Section from "../../components/foodPackaging/Section";

// Содержательные разделы
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

// Конфигуратор оборудования
import FoodPackagingCalculator from "../../components/foodPackaging/FoodPackagingCalculator";

export default function FoodPackagingPage() {
  return (
    <>
      <Head>
        <title>
          Азот для пищевой упаковки (MAP) — расчёт расхода и подбор генератора
          азота | Блицгаз
        </title>

        <meta
          name="description"
          content="Подробное инженерное руководство по применению азота в пищевой упаковке. Технология MAP, расчёт расхода азота, требования к чистоте, проектирование системы газоснабжения упаковочной линии и подбор оборудования."
        />

        <meta
          name="keywords"
          content="азот для пищевой упаковки, азот для упаковки продуктов, MAP упаковка, модифицированная газовая среда, генератор азота для упаковки, азот для упаковочной машины, расчет расхода азота, газ для упаковки продуктов, генератор азота PSA, упаковка в азоте"
        />

        <link
          rel="canonical"
          href="https://blitzgas.ru/nitrogen/food-packaging"
        />

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
          content="https://blitzgas.ru/assets/og-food-packaging.jpg"
        />

        <meta property="og:type" content="article" />
      </Head>

      <Layout>
        {/* Вступительная часть */}
        <Hero />
        <QuickNavigation />

        {/* Sprint 2 — основы MAP и роль азота */}
        <Intro />
        <MapTechnology />
        <WhyNitrogen />

        {/* Sprint 3 — применение по категориям продуктов */}
        <ProductApplications />

        {/* Sprint 4 — требования к чистоте азота */}
        <NitrogenPurity />

        {/* Sprint 5 — проектирование системы */}
        <EngineeringWorkflow />

        {/* Sprint 6 — расчёт расхода азота */}
        <NitrogenConsumption />

        {/* Sprint 7 — состав азотной станции */}
        <EquipmentSystem />

        {/* =========================================================
    SPRINT 8 — СРАВНЕНИЕ СПОСОБОВ ГАЗОСНАБЖЕНИЯ
========================================================= */}

        <Section
          id="comparison"
          title="Генератор азота, баллоны или жидкий азот"
          subtitle="Сравнение способов газоснабжения"
        >
          <GasSupplyComparison />
        </Section>

        {/* Sprint 9 — типовые ошибки проектирования */}
        <Section
          id="mistakes"
          title="Типовые ошибки при проектировании"
          subtitle="Практический опыт"
        >
          <EngineeringMistakes />
        </Section>


        {/* Sprint 10 — FAQ */}
        <Section
          id="faq"
          title="Часто задаваемые вопросы"
          subtitle="FAQ"
        >
          <FoodPackagingFAQ />
        </Section>


        {/* Калькулятор и подбор оборудования */}

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

      </Layout>
    </>
  );
}