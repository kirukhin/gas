// components/foodPackaging/Hero.jsx

import Image from 'next/image'

export default function Hero() {
    return (
      <section>
        <div className="container px-6 mx-auto flex flex-wrap flex-col-reverse lg:flex-row items-center">
  
          {/* ================= LEFT ================= */}
  
          <div className="w-full lg:w-1/2 text-center lg:text-left">
  
            <div className="inline-flex items-center rounded-full bg-red-50 text-red-700 px-4 py-2 mb-6 text-sm font-semibold">
              Инженерное руководство BlitzGas
            </div>
  
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-8"
            >
              Азот для пищевой упаковки
            </h1>
  
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
  
              Практическое руководство по проектированию систем генерации азота
              для упаковочных линий пищевых производств.
  
            </p>
  
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
  
              Разбираем технологию MAP, требования к чистоте азота,
              расчёт расхода газа, подбор оборудования и типовые ошибки,
              которые необходимо учитывать при проектировании упаковочной линии.
  
            </p>
  
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
  
              <a
                href="#configurator"
                className="bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-full px-8 py-4 shadow-lg"
              >
                Рассчитать оборудование
              </a>
  
              <a
                href="#map"
                className="bg-white border border-gray-300 hover:border-red-500 hover:text-red-600 transition text-gray-700 font-semibold rounded-full px-8 py-4"
              >
                Как работает MAP
              </a>
  
            </div>
  
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
  
              <div>
  
                <div className="text-3xl font-bold text-red-600">
                  MAP
                </div>
  
                <div className="text-gray-600 text-sm mt-1">
                  технология упаковки
                </div>
  
              </div>
  
              <div>
  
                <div className="text-3xl font-bold text-red-600">
                  PSA
                </div>
  
                <div className="text-gray-600 text-sm mt-1">
                  генерация азота
                </div>
  
              </div>
  
              <div>
  
                <div className="text-3xl font-bold text-red-600">
                  24/7
                </div>
  
                <div className="text-gray-600 text-sm mt-1">
                  непрерывная работа
                </div>
  
              </div>
  
              <div>
  
                <div className="text-3xl font-bold text-red-600">
                  B2B
                </div>
  
                <div className="text-gray-600 text-sm mt-1">
                  инженерные решения
                </div>
  
              </div>
  
            </div>
  
          </div>
  
         {/* ================= RIGHT ================= */}

<div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex justify-center">

<div className="w-full max-w-xl">

  <Image
    src="/assets/nitrogen/fp-hero.png"
    alt="Схема современной упаковочной линии с подачей азота"
    width={1000}
    height={1000}
    className="w-full h-auto"
    priority
  />

</div>
</div>

</div>
      </section>
    );
  }