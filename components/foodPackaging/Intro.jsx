// components/foodPackaging/Intro.jsx

export default function Intro() {
    return (
      <section id="intro" className="border-b border-gray-100 py-16">
        <div className="container max-w-6xl mx-auto px-6">
  
          <div className="max-w-4xl">
            <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-3">
              Инженерная задача
            </p>
  
            <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
              Зачем пищевому производству азот при упаковке
            </h2>
  
            <div className="gradient h-1 w-24 rounded mb-8 opacity-40"></div>
  
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              После упаковки продукт продолжает взаимодействовать с газовой
              средой, которая находится внутри упаковки. Обычный атмосферный
              воздух содержит около 21% кислорода, а кислород для многих
              пищевых продуктов становится одним из факторов ускорения
              окислительных процессов и развития аэробной микрофлоры.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Поэтому задача промышленной упаковочной линии заключается не
              только в том, чтобы физически закрыть продукт плёнкой или
              контейнером. Во многих технологиях необходимо сформировать внутри
              упаковки такую газовую среду, которая соответствует свойствам
              конкретного продукта и условиям его хранения.
            </p>
  
            <p className="text-gray-600 text-lg leading-relaxed">
              Для этого атмосферный воздух частично или полностью заменяют
              специально подобранной газовой смесью. Такой подход называется
              <strong className="text-gray-800">
                {" "}упаковкой в модифицированной газовой среде
                (Modified Atmosphere Packaging, MAP)
              </strong>.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-6 mt-12">
  
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-7">
              <div className="text-red-600 text-3xl font-bold mb-4">
                01
              </div>
  
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Обычный воздух
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                После герметизации упаковки внутри остаётся воздух,
                содержащий кислород, азот и небольшое количество других газов.
                Для чувствительных к кислороду продуктов такая среда может быть
                нежелательной.
              </p>
            </div>
  
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-7">
              <div className="text-red-600 text-3xl font-bold mb-4">
                02
              </div>
  
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Модифицированная атмосфера
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                Атмосферу внутри упаковки изменяют до состава, выбранного
                с учётом продукта, упаковочного материала и условий хранения.
                Газовая смесь может содержать N₂, CO₂ и, для некоторых продуктов,
                O₂.
              </p>
            </div>
  
            <div className="rounded-xl bg-gray-50 border border-gray-200 p-7">
              <div className="text-red-600 text-3xl font-bold mb-4">
                03
              </div>
  
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Азот как часть решения
              </h3>
  
              <p className="text-gray-600 leading-relaxed">
                Азот используют как инертный компонент газовой среды. Он
                позволяет вытеснять часть атмосферного кислорода и одновременно
                служит наполнителем упаковки, особенно когда CO₂ используется
                в значительной концентрации.
              </p>
            </div>
  
          </div>
  
          <div className="mt-12 rounded-2xl border-l-4 border-red-600 bg-red-50 p-8">
  
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Главная инженерная мысль
            </h3>
  
            <p className="text-gray-700 text-lg leading-relaxed">
              Генератор азота для пищевой упаковки подбирается не просто по
              количеству упаковок в час. Сначала необходимо определить,
              <strong> какую газовую среду требуется создать внутри упаковки</strong>,
              каким способом она формируется, сколько газа потребляет
              упаковочная машина и какие параметры должны сохраняться
              на протяжении всего технологического процесса.
            </p>
  
          </div>
  
        </div>
      </section>
    );
  }