// pages/index.jsx
import Head from "next/head";
import { useEffect, useRef } from "react";
import Config from "../components/Config";
import Link from 'next/link';
import { getCategories } from '../lib/equipmentHelpers';

export default function Home({ cats }) {
  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 10) {
        header.classList.add("bg-white", "shadow");
      } else {
        header.classList.remove("bg-white", "shadow");
      }
    };



    // initial run
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Не включаем эффект, если пользователь отключил анимации
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // На устройствах с мышью или трекпадом
    const layers = Array.from(
      hero.querySelectorAll("[data-parallax-x]")
    ).map((element) => ({
      element,
      maxShift: Number(element.dataset.parallaxX) || 0,
      current: 0,
    }));

    if (!layers.length) return;

    let targetX = 0;
    let animationFrame = null;

    const handlePointerMove = (event) => {
      const rect = hero.getBoundingClientRect();

      // Нормализованное положение курсора: от -1 до 1
      const relativeX =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;

      // Ограничиваем амплитуду, чтобы движение оставалось деликатным
      targetX = Math.max(-1, Math.min(1, relativeX));
    };

    const handlePointerLeave = () => {
      targetX = 0;
    };

    const animate = () => {
      let hasMovement = false;

      layers.forEach(({ element, maxShift, current }, index) => {
        const layer = layers[index];

        const targetShift = targetX * maxShift;

        // Чем меньше коэффициент, тем плавнее и инертнее движение
        layer.current += (targetShift - layer.current) * 0.075;

        if (Math.abs(targetShift - layer.current) > 0.01) {
          hasMovement = true;
        }

        element.style.setProperty(
          "--parallax-x",
          `${layer.current.toFixed(2)}px`
        );
      });

      if (hasMovement || Math.abs(targetX) > 0.001) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        animationFrame = null;
      }
    };

    const startAnimation = () => {
      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const onPointerMove = (event) => {
      handlePointerMove(event);
      startAnimation();
    };

    const onPointerLeave = () => {
      handlePointerLeave();
      startAnimation();
    };

    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", onPointerLeave);

    return () => {
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", onPointerLeave);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);




  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const updateParallax = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.bottom > 0 && rect.top < viewportHeight) {
          const progress = Math.max(
            0,
            Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height))
          );

          const layers = hero.querySelectorAll("[data-parallax]");

          layers.forEach((layer) => {
            const speed = Number(layer.dataset.parallax) || 0;
            layer.style.setProperty("--parallax-y", `${progress * speed}px`);
          });
        }

        ticking = false;
      });
    };

    updateParallax();

    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);

    return () => {
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);


  return (
    <div
      className="leading-normal tracking-normal text-white"
      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
    >
      <Head>
        <title>Блицгаз — промышленный азот и кислород на месте производства</title>
        <meta
          name="description"
          content="Блицгаз — производство азота и кислорода непосредственно на предприятии. Снижение затрат, независимость от поставщиков, инженерные PSA-решения под задачи бизнеса."
        />
      </Head>

      {/* Hero: gas-flow atmosphere, mouse parallax and wave transition */}
      <section ref={heroRef} className="hero-gas relative isolate overflow-hidden">

        {/* Светлая инженерная среда */}
        <div aria-hidden="true" className="hero-gas__background absolute inset-0" />

        {/* Все фоновые газовые потоки — позади текста и оборудования */}
        <svg aria-hidden="true" viewBox="0 0 1600 600" preserveAspectRatio="none" data-parallax="5" data-parallax-x="12" className="hero-gas__waves hero-gas__waves--back z-0">
          <defs>
            <linearGradient id="gasBackRibbon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dbeafe" stopOpacity="0" />
              <stop offset="35%" stopColor="#93c5fd" stopOpacity="0.16" />
              <stop offset="65%" stopColor="#60a5fa" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gasBackLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
              <stop offset="18%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.78" />
              <stop offset="82%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="hero-gas__ribbon hero-gas__ribbon--slow" d="M-360 400 C-90 300 120 470 380 395 S760 295 1020 370 S1450 425 1960 300 L1960 405 C1510 505 1280 440 1020 425 S650 425 380 445 S-100 410 -360 490 Z" fill="url(#gasBackRibbon)" />
          <path className="hero-gas__ribbon" d="M-360 450 C-80 365 150 505 410 430 S760 350 1030 405 S1470 460 1960 355" fill="none" stroke="url(#gasBackLine)" strokeWidth="2.2" />
          <path className="hero-gas__flow-line hero-gas__flow-line--slow" d="M-360 474 C-80 389 150 529 410 454 S760 374 1030 429 S1470 484 1960 379" fill="none" stroke="#93c5fd" strokeOpacity="0.42" strokeWidth="1.2" />
        </svg>

        {/* Контент располагается поверх фоновых волн */}
        <div className="container relative z-10 mx-auto flex flex-col items-center px-3 pt-24 pb-28 md:flex-row md:pb-32">

          {/* Левая колонка: текст */}
          <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
            <h1 className="my-4 text-4xl font-bold leading-tight text-black md:text-5xl">
              Промышленный азот и кислород
              <br />
              непосредственно на вашем
              <br />
              производстве
            </h1>

            <p className="mb-8 text-lg leading-normal text-black md:text-2xl">
              Генерация газа нужной чистоты и давления — без поставщиков,
              баллонов и логистики. Снижение операционных затрат и полный
              контроль над газоснабжением предприятия.
            </p>

            <a href="#config" className="relative z-20 inline-block cursor-pointer rounded-full bg-red-600 px-8 py-3 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400">
              Сконфигурировать КП на установку онлайн
            </a>
          </div>

          

              {/* Правая колонка: оборудование поверх фоновых потоков */}
              <div className="relative w-full md:w-3/5">
                <div className="relative mx-auto w-full" style={{ aspectRatio: "3 / 2" }}>
                  {/* Слой 1: колонны, обвязка и рама */}
                  <img src="/assets/hero/hero-layer-1.png" alt="" aria-hidden="true" data-parallax="8" data-parallax-x="3" draggable="false" className="absolute inset-0 z-10 h-full w-full select-none object-contain" style={{ willChange: "transform", transform: "translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)" }} />

                  {/* Слой 2: буферная ёмкость и панель управления */}
                  <img src="/assets/hero/hero-layer-2.png" alt="Промышленная установка генерации газа с буферной ёмкостью и системой управления" data-parallax="-5" data-parallax-x="4" draggable="false" className="absolute inset-0 z-20 h-full w-full select-none object-contain" style={{ willChange: "transform", transform: "translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0)" }} />
                </div>
              </div>

            </div>


        {/* Волнистый край — плавный переход к белой следующей секции */}
        <svg aria-hidden="true" viewBox="0 0 1440 130" preserveAspectRatio="none" className="hero-gas__transition z-40 h-24 md:h-32">
          <path d="M0 54 C180 112 315 100 470 67 S735 30 900 70 S1200 118 1440 38 L1440 130 L0 130 Z" fill="#ffffff" />
          <path d="M0 54 C180 112 315 100 470 67 S735 30 900 70 S1200 118 1440 38" fill="none" stroke="#bfdbfe" strokeOpacity="0.7" strokeWidth="1.5" />
        </svg>
      </section>


      <section id="about" className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Производство азота и кислорода на месте потребления
          </h2>

          <div className="w-full mb-6">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          {/* Full-width intro block */}
          <div className="w-full px-6 mb-12 text-center sm:text-left">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-4">
              Газоснабжение как управляемый ресурс бизнеса
            </h3>

            <p className="text-gray-600 mb-4">
              Установки Блицгаз обеспечивают получение азота и кислорода промышленной чистоты
              непосредственно на предприятии — в объёме и с параметрами,
              необходимыми для конкретного технологического процесса.
            </p>

            <p className="text-gray-600">
              В основе решений лежит технология короткоцикловой безнагревной адсорбции (PSA),
              позволяющая стабильно получать газ при минимальных эксплуатационных затратах
              и без расходных материалов.
            </p>
          </div>

          {/* Two-column content */}
          <div className="flex flex-wrap items-start">
            {/* Left column */}
            <div className="w-full sm:w-1/2 p-6">
              <h4 className="text-l text-gray-800 font-bold leading-none mb-3">
                Инженерная база стабильного газоснабжения
              </h4>

              <p className="text-gray-600 mb-4">
                Каждая система проектируется как законченный комплекс
                для непрерывной и прогнозируемой работы 24/7:
              </p>

              <ol className="list-decimal list-inside text-gray-600 mb-8">
                <li>Сжатие атмосферного воздуха винтовым компрессором</li>
                <li>Удаление влаги в рефрижераторном или адсорбционном осушителе</li>
                <li>Фильтрация воздуха от пыли, масла и примесей</li>
                <li>Накопление и подача воздуха в адсорбционные колонны</li>
              </ol>

              <p className="text-gray-600">
                Параметры газа подбираются под задачи производства:
                <br />
                • Чистота: кислород до 95%, азот — от 95% до 99,9995%
                <br />
                • Давление: стандартно 5–13 бар, расширение по запросу
                <br />
                • Точка росы: от −40 до −70 °C
                <br />
                • Энергопотребление — от 0,95 кВт·ч/м³
              </p>
            </div>

            {/* Right column */}
            <div className="w-full sm:w-1/2 p-6 flex items-center justify-center">
              <img
                src="/assets/gen2.png"
                alt="Производство газа по технологии PSA"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="flex flex-wrap flex-col-reverse sm:flex-row mt-8">
            <div className="w-full sm:w-1/2 p-6 flex items-center justify-center">
              <img
                src="/assets/gen1.png"
                alt="PSA-генератор Блицгаз"
                className="max-w-full h-auto"
              />
            </div>

            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Масштабируемые решения под рост и изменения производства
              </h3>

              <p className="text-gray-600 mb-8">
                Газогенераторные системы проектируются с учётом текущих задач
                и возможного увеличения потребления газа — без полной замены оборудования
                и остановки технологических процессов.
              </p>

              <ul className="list-disc list-inside text-gray-600 mb-8">
                <li>Свободное размещение для стационарных промышленных объектов</li>
                <li>Платформенные комплексы для мобильных и временных решений</li>
                <li>Контейнерные станции для автономной эксплуатации в любых климатических условиях</li>
              </ul>

              <p className="text-gray-600">
                Подходит для непрерывной, сменной и сезонной эксплуатации,
                включая станции заправки баллонов и удалённые производственные площадки.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-white border-b py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Удобство решения Блицгаз для автономной газогенерации
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Самостоятельный подбор оборудования</h3>
              <p className="text-gray-600">
                Удобный конфигуратор оборудования Блицгаз позволяет вам онлайн подобрать компоненты установки и сформировать
                на них актуальное технико-коммерческое предложение.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Адаптация решения под любые нужды</h3>
              <p className="text-gray-600">
                Модульное решение позволяет легко сконфигурировать систему под любые задачи и любые технические условия.
                Сообщите нам необходимое давление или ваши пожелания по производительности, если они выходят за рамки
                стандартной линейки Блицгаз.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Простой монтаж и быстрый запуск</h3>
              <p className="text-gray-600">
                Широкая сервисная сеть инженеров по всей России, более 30 лет занимающаяся разработкой, монтажом и
                обслуживанием газоразделительных установок готова оперативно реализовать установку под ваши нужды в любой
                точке восточной Европы.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Сервис и гарантия на оборудование</h3>
              <p className="text-gray-600">
                Прямое сопровождение от компании-производителя PSA-генераторов с 30-летним опытом в эксплуатации и
                обслуживании КЦА-установок. Честные сервисные контракты на послепродажное обслуживание. Гарантия на оборудование 1 год.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* --- UPDATED: Компактные карточки категорий, градиент по умолчанию, только h3 и p --- */}
      <section className="bg-white border-b py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Категории оборудования</h2>
          <p className="text-center text-gray-600 mb-8">
            Выберите интересующее вас оборудование из категории или сконфигурируйте свою газоразделительную установку
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cats.map((c) => (
              <Link
                key={c.id}
                href={`/${c.slug}`}
                aria-label={`Перейти в категорию ${c.title}`}
                className="block relative overflow-hidden rounded-lg p-6 shadow-lg transform transition hover:-translate-y-1 gradient"
              >
                {/* Контент карточки: только заголовок и описание */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">{c.title}</h3>

                  <p className="text-sm text-white/90 mt-2 max-w-full">
                    {c.id === 'compressors' && 'Винтовые и частотно-регулируемые компрессоры для промышленных и сервисных задач.'}
                    {c.id === 'dryers' && 'Рефрижераторные и адсорбционные осушители для защиты линии от влаги.'}
                    {c.id === 'filters' && 'Трёхступенчатые блоки фильтров для удаления масла, воды и частиц.'}
                    {c.id === 'dcompressors' && 'Дожимные установки для заправки баллонов и работы под высоким давлением.'}
                    {!['compressors', 'dryers', 'filters', 'dcompressors'].includes(c.id) && 'Оборудование и комплектующие для подготовки сжатого воздуха.'}
                  </p>
                </div>

                {/* лёгкий overlay для контраста (не перекрывает градиент) */}
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-black/6 to-transparent"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* --- END Категории --- */}




      <section>
        <div id="config" className="bg-white py-12">
          <Config />
        </div>
      </section>

      {/* Wave SVG (bottom) */}
      <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#ffffff">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>

            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

// SSG: получаем список категорий при сборке
export async function getStaticProps() {
  const cats = getCategories();
  return {
    props: { cats }
  };
}
