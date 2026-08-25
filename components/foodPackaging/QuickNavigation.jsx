// components/foodPackaging/QuickNavigation.jsx

const items = [

    {
      id: "intro",
      title: "Введение"
    },
  
    {
      id: "map",
      title: "Технология MAP"
    },
  
    {
      id: "why-nitrogen",
      title: "Почему азот"
    },
  
    {
      id: "products",
      title: "Применение"
    },
  
    {
      id: "purity",
      title: "Чистота азота"
    },
  
    {
      id: "workflow",
      title: "Проектирование"
    },
  
    {
      id: "calculation",
      title: "Расчёт расхода"
    },
  
    {
      id: "equipment",
      title: "Система"
    },
  
    {
      id: "comparison",
      title: "Сравнение"
    },
  
    {
      id: "mistakes",
      title: "Ошибки"
    },
  
    {
      id: "faq",
      title: "FAQ"
    },
  
    {
      id: "configurator",
      title: "Подбор оборудования"
    }
  
  ];
  
  export default function QuickNavigation() {
  
    return (
  
      <section className="bg-gray-50 border-y border-gray-200">
  
        <div className="container max-w-7xl mx-auto px-6 py-8">
  
          <div className="text-center mb-6">
  
            <h2 className="text-xl font-bold text-gray-800">
  
              Содержание инженерного руководства
  
            </h2>
  
            <p className="text-gray-500 mt-2">
  
              Используйте быстрые ссылки для перехода к интересующему разделу.
  
            </p>
  
          </div>
  
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-6
              gap-4
            "
          >
  
            {items.map((item, index) => (
  
              <a
                key={item.id}
                href={`#${item.id}`}
                className="
                  group
                  rounded-xl
                  bg-white
                  border
                  border-gray-200
                  hover:border-red-500
                  hover:shadow-md
                  transition
                  p-5
                  text-center
                "
              >
  
                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-red-50
                    text-red-600
                    font-bold
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-3
                    group-hover:bg-red-600
                    group-hover:text-white
                    transition
                  "
                >
                  {index + 1}
                </div>
  
                <div
                  className="
                    text-sm
                    font-semibold
                    text-gray-700
                    group-hover:text-red-600
                    transition
                  "
                >
                  {item.title}
                </div>
  
              </a>
  
            ))}
  
          </div>
  
        </div>
  
      </section>
  
    );
  
  }