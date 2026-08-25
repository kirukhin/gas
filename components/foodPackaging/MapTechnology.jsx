// components/foodPackaging/MapTechnology.jsx

import Image from 'next/image'

export default function MapTechnology() {
    return (
      <section id="map" className="border-b border-gray-100 py-16">
        <div className="container max-w-6xl mx-auto px-6">
  
          <div className="max-w-4xl mb-12">
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Modified Atmosphere Packaging
            </p>
  
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              Что такое MAP и как работает упаковка в модифицированной атмосфере
            </h2>
  
            <div className="gradient h-1 w-24 rounded mb-8 opacity-40"></div>
  
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              MAP — это технология упаковки, при которой газовая среда вокруг
              продукта отличается от состава обычного атмосферного воздуха.
              Цель технологии — создать условия, позволяющие лучше сохранять
              качество продукта в течение заданного срока хранения.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              В промышленной упаковке модифицированная атмосфера может
              формироваться непосредственно упаковочной машиной: воздух из
              упаковки удаляется или разбавляется, после чего пространство
              заполняется выбранным газом либо газовой смесью и герметично
              закрывается.
            </p>
          </div>
  
          {/* ================= PROCESS ================= */}
  
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8 md:p-10 mb-14">
  
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Что происходит внутри упаковочной линии
            </h3>
  
            <div className="grid md:grid-cols-5 gap-4">
  
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-red-600 font-bold text-2xl mb-3">
                  01
                </div>
  
                <h4 className="font-bold text-gray-800 mb-2">
                  Продукт
                </h4>
  
                <p className="text-sm text-gray-500">
                  Продукт поступает в упаковочную машину.
                </p>
              </div>
  
              <div className="hidden md:flex items-center justify-center text-gray-400 text-2xl">
                →
              </div>
  
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-red-600 font-bold text-2xl mb-3">
                  02
                </div>
  
                <h4 className="font-bold text-gray-800 mb-2">
                  Воздух
                </h4>
  
                <p className="text-sm text-gray-500">
                  Воздух из упаковки удаляется или разбавляется газом.
                </p>
              </div>
  
              <div className="hidden md:flex items-center justify-center text-gray-400 text-2xl">
                →
              </div>
  
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-red-600 font-bold text-2xl mb-3">
                  03
                </div>
  
                <h4 className="font-bold text-gray-800 mb-2">
                  Газ
                </h4>
  
                <p className="text-sm text-gray-500">
                  В упаковку подаётся выбранный газ или смесь газов.
                </p>
              </div>
  
              <div className="hidden md:flex items-center justify-center text-gray-400 text-2xl">
                →
              </div>
  
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-red-600 font-bold text-2xl mb-3">
                  04
                </div>
  
                <h4 className="font-bold text-gray-800 mb-2">
                  Герметизация
                </h4>
  
                <p className="text-sm text-gray-500">
                  Упаковка закрывается и изолирует продукт от внешней среды.
                </p>
              </div>
  
              <div className="hidden md:flex items-center justify-center text-gray-400 text-2xl">
                →
              </div>
  
              <div className="bg-white rounded-xl border border-gray-200 p-5 text-center">
                <div className="text-red-600 font-bold text-2xl mb-3">
                  05
                </div>
  
                <h4 className="font-bold text-gray-800 mb-2">
                  Хранение
                </h4>
  
                <p className="text-sm text-gray-500">
                  Состав атмосферы взаимодействует с продуктом и упаковкой.
                </p>
              </div>
  
            </div>
  
          </div>
  
          {/* ================= GASES ================= */}
  
          <div className="mb-14">
  
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Три основных газа MAP
            </h3>
  
            <div className="grid md:grid-cols-3 gap-6">
  
              {/* N2 */}
  
              <div className="rounded-2xl border border-gray-200 p-8">
  
                <div className="flex items-end gap-3 mb-5">
                  <span className="text-5xl font-bold text-red-600">
                    N₂
                  </span>
  
                  <span className="text-gray-500 mb-2">
                    азот
                  </span>
                </div>
  
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Инертный наполнитель
                </h4>
  
                <p className="text-gray-600 leading-relaxed mb-4">
                  Азот практически не взаимодействует с продуктом в условиях
                  обычной упаковки. Он может использоваться для замещения
                  атмосферного воздуха и снижения доли кислорода.
                </p>
  
                <p className="text-gray-600 leading-relaxed">
                  В смесях с CO₂ азот также помогает сохранить объём упаковки,
                  поскольку CO₂ способен растворяться в продукте и уменьшать
                  объём газовой фазы.
                </p>
  
              </div>
  
              {/* CO2 */}
  
              <div className="rounded-2xl border border-gray-200 p-8">
  
                <div className="flex items-end gap-3 mb-5">
                  <span className="text-5xl font-bold text-red-600">
                    CO₂
                  </span>
  
                  <span className="text-gray-500 mb-2">
                    углекислый газ
                  </span>
                </div>
  
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Функциональный компонент
                </h4>
  
                <p className="text-gray-600 leading-relaxed mb-4">
                  CO₂ используется в MAP прежде всего благодаря способности
                  подавлять рост ряда микроорганизмов. Поэтому его доля может
                  быть существенной в упаковке определённых продуктов.
                </p>
  
                <p className="text-gray-600 leading-relaxed">
                  При этом высокая концентрация CO₂ не является универсальным
                  решением: растворение газа в продукте может уменьшать объём
                  газовой фазы и приводить к деформации упаковки.
                </p>
  
              </div>
  
              {/* O2 */}
  
              <div className="rounded-2xl border border-gray-200 p-8">
  
                <div className="flex items-end gap-3 mb-5">
                  <span className="text-5xl font-bold text-red-600">
                    O₂
                  </span>
  
                  <span className="text-gray-500 mb-2">
                    кислород
                  </span>
                </div>
  
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Контролируемый компонент
                </h4>
  
                <p className="text-gray-600 leading-relaxed mb-4">
                  Для многих продуктов кислород стараются уменьшить, поскольку
                  он может ускорять окислительные процессы и поддерживать рост
                  аэробных микроорганизмов.
                </p>
  
                <p className="text-gray-600 leading-relaxed">
                  Однако полностью исключать O₂ из каждой MAP-системы нельзя:
                  для отдельных продуктов определённая концентрация кислорода
                  может быть технологически необходима, например для сохранения
                  желаемого цвета.
                </p>
  
              </div>
  
            </div>
  
          </div>
  
          {/* ================= PRODUCT DEPENDENCY ================= */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-start">
  
            <div>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Почему не существует одной универсальной смеси
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Газовая смесь выбирается не для упаковочной машины как таковой,
                а прежде всего для конкретного продукта и условий его хранения.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                На результат влияют химический состав продукта, содержание
                влаги и жира, интенсивность дыхания свежих продуктов,
                чувствительность к окислению, требуемый срок хранения,
                температура хранения и свойства упаковочного материала.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                После герметизации состав газовой среды также может изменяться:
                газы взаимодействуют с продуктом, а часть газов способна
                проникать через упаковочный материал. Поэтому проектирование
                MAP — это задача не только выбора газа, но и согласования
                продукта, упаковки и технологического процесса.
              </p>
  
            </div>
  
            <div className="w-full overflow-hidden rounded-2xl">
  <Image
    src="/assets/nitrogen/fp-stages.png"
    alt="Схема формирования газовой среды в упаковке: замещение воздуха смесью азота, углекислого газа и кислорода"
    width={1200}
    height={896}
    className="w-full h-auto"
  />
</div>
  
          </div>
  
        </div>
      </section>
    );
  }