// components/foodPackaging/WhyNitrogen.jsx

import Image from 'next/image'

export default function WhyNitrogen() {
    return (
      <section id="why-nitrogen" className="border-b border-gray-100 py-16">
        <div className="container max-w-6xl mx-auto px-6">
  
          <div className="max-w-4xl mb-12">
  
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              N₂ в пищевой упаковке
            </p>
  
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              Почему для упаковки используют азот
            </h2>
  
            <div className="gradient h-1 w-24 rounded mb-8 opacity-40"></div>
  
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Азот — основной компонент атмосферного воздуха, но в упаковке
              его используют не просто потому, что он доступен в атмосфере.
              Его главное технологическое преимущество — низкая химическая
              реакционная способность в условиях пищевой упаковки.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              В результате азот может заменить часть воздуха внутри упаковки,
              не становясь самостоятельным источником нежелательных химических
              реакций с продуктом. При этом его роль значительно шире простой
              формулировки «вытеснить кислород».
            </p>
  
          </div>
  
          {/* ================= KEY FUNCTIONS ================= */}
  
          <div className="grid md:grid-cols-2 gap-6 mb-14">
  
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
  
              <div className="text-red-600 font-bold text-sm tracking-widest mb-3">
                ФУНКЦИЯ 01
              </div>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Снижение содержания кислорода
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                При газовой продувке упаковки азотом атмосферный воздух
                разбавляется или вытесняется. В результате концентрация O₂
                внутри упаковки может быть существенно снижена.
              </p>
  
              <p className="text-gray-600 leading-relaxed mt-4">
                Это особенно важно для продуктов, чувствительных к
                окислительным процессам.
              </p>
  
            </div>
  
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
  
              <div className="text-red-600 font-bold text-sm tracking-widest mb-3">
                ФУНКЦИЯ 02
              </div>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Инертная газовая среда
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                Азот является бесцветным, без запаха и вкуса инертным газом,
                поэтому он подходит в качестве компонента газовой среды,
                когда требуется уменьшить присутствие кислорода без
                введения химически активного газа.
              </p>
  
            </div>
  
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
  
              <div className="text-red-600 font-bold text-sm tracking-widest mb-3">
                ФУНКЦИЯ 03
              </div>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Поддержание объёма упаковки
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                CO₂ хорошо растворяется в воде и жировой фазе ряда продуктов.
                Поэтому при использовании CO₂ в высокой концентрации часть газа
                может переходить из газовой фазы в продукт, уменьшая её объём.
              </p>
  
              <p className="text-gray-600 leading-relaxed mt-4">
                N₂ имеет низкую растворимость и может использоваться как
                наполняющий газ, уменьшая вероятность чрезмерного схлопывания
                упаковки.
              </p>
  
            </div>
  
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-8">
  
              <div className="text-red-600 font-bold text-sm tracking-widest mb-3">
                ФУНКЦИЯ 04
              </div>
  
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Стабильная подача газа на линии
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                Для промышленной упаковочной линии азот становится
                технологическим ресурсом. Его необходимо подавать с заданной
                чистотой, давлением и производительностью непосредственно
                к упаковочному оборудованию.
              </p>
  
              <p className="text-gray-600 leading-relaxed mt-4">
                Поэтому вопрос выбора азота постепенно превращается из
                вопроса о баллонах или газе в вопрос проектирования
                собственной системы газоснабжения.
              </p>
  
            </div>
  
          </div>
  
          {/* ================= OXIDATION ================= */}
  
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
  
            <div>
  
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Азот помогает бороться не с продуктом, а с нежелательной
                газовой средой вокруг него
              </h3>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Многие процессы ухудшения качества продукта связаны с наличием
                кислорода. Он может участвовать в окислительных реакциях,
                способствовать прогорканию жиров, изменению цвета, появлению
                посторонних запахов и другим изменениям качества.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Замена атмосферного воздуха газом с низким содержанием O₂
                позволяет изменить условия, в которых происходит хранение
                продукта.
              </p>
  
              <p className="text-gray-600 text-lg leading-relaxed">
                Но важно понимать: азот сам по себе не является универсальным
                консервантом и не уничтожает микроорганизмы. Его задача в MAP
                определяется конкретной рецептурой газовой среды.
              </p>
  
            </div>
  
            <div className="w-full overflow-hidden rounded-2xl">
  <Image
    src="/assets/nitrogen/fp-product.png"
    alt="Схема формирования газовой среды в упаковке: замещение воздуха смесью азота, углекислого газа и кислорода"
    width={1200}
    height={896}
    className="w-full h-auto"
  />
</div>
  
          </div>
  
          {/* ================= NOT "MORE N2" ================= */}
  
          <div className="rounded-2xl border border-gray-200 overflow-hidden">
  
            <div className="bg-gray-800 px-8 py-6">
  
              <h3 className="text-2xl font-bold text-white">
                Почему нельзя считать, что чем больше азота — тем лучше
              </h3>
  
            </div>
  
            <div className="p-8 md:p-10">
  
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Это одно из наиболее важных ограничений при проектировании
                MAP. Цель технологии — не получить максимально возможную
                концентрацию N₂, а сформировать оптимальную атмосферу для
                конкретного продукта.
              </p>
  
              <div className="grid md:grid-cols-3 gap-6">
  
                <div>
  
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    CO₂ может быть необходим
                  </h4>
  
                  <p className="text-gray-600 leading-relaxed">
                    Для некоторых продуктов именно CO₂ обеспечивает
                    значительную часть требуемого антимикробного эффекта.
                    Замена всей смеси на N₂ может убрать эту функцию.
                  </p>
  
                </div>
  
                <div>
  
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    O₂ иногда нужен
                  </h4>
  
                  <p className="text-gray-600 leading-relaxed">
                    Для отдельных продуктов контролируемое присутствие
                    кислорода может быть связано с сохранением внешнего вида
                    или другими технологическими требованиями.
                  </p>
  
                </div>
  
                <div>
  
                  <h4 className="text-lg font-bold text-gray-800 mb-3">
                    Продукт определяет смесь
                  </h4>
  
                  <p className="text-gray-600 leading-relaxed">
                    Один и тот же состав газа не может автоматически считаться
                    оптимальным для кофе, мяса, сыра, рыбы, снеков и свежих
                    овощей. Состав выбирается исходя из свойств конкретного
                    продукта и условий его хранения.
                  </p>
  
                </div>
  
              </div>
  
              <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6">
  
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-800">
                    Правильная инженерная постановка задачи:
                  </strong>{" "}
                  сначала определить требуемую газовую среду и параметры
                  упаковочного процесса, а затем рассчитать необходимый
                  расход N₂ и выбрать способ его производства.
                </p>
  
              </div>
  
            </div>
  
          </div>
  
          {/* ================= ENGINEERING CONCLUSION ================= */}
  
          <div className="mt-14 max-w-4xl">
  
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Что это означает для системы генерации азота
            </h3>
  
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Для упаковочного производства генератор азота является частью
              технологической системы. Его нельзя выбирать независимо от
              упаковочной машины и параметров процесса.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              При проектировании необходимо связать между собой требуемую
              чистоту N₂, давление подачи, средний и пиковый расход газа,
              количество упаковочных линий и режим их работы. Именно эти
              параметры впоследствии определяют производительность генератора,
              объём буферного ресивера и состав остального оборудования системы.
            </p>
  
          </div>
  
        </div>
      </section>
    );
  }