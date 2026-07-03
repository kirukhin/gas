export const equipmentMenu = [
    {
      title: 'Производство газов',
      items: [
        {
          title: 'Генераторы азота',
          description: 'PSA-станции производства азота до 99.9995%',
          href: '/nitrogenerators',
          icon: 'N2'
        },
        {
          title: 'Генераторы кислорода',
          description: 'PSA-станции производства кислорода до 95%',
          href: '/oxygenerators',
          icon: 'O2'
        }
      ]
    },
  
    {
      title: 'Подготовка воздуха',
      items: [
        {
          title: 'Компрессоры',
          description: 'Винтовые компрессоры 5.5–355 кВт',
          href: '/compressors',
          icon: 'COMP'
        },
        {
          title: 'Осушители',
          description: 'Рефрижераторные и адсорбционные',
          href: '/dryers',
          icon: 'DRY'
        },
        {
          title: 'Фильтры',
          description: 'Очистка сжатого воздуха',
          href: '/filters',
          icon: 'FILTER'
        }
      ]
    },
  
    {
      title: 'Высокое давление',
      items: [
        {
          title: 'Дожимающие компрессоры',
          description: 'Повышение давления до 350 бар',
          href: '/dcompressors',
          icon: 'BOOSTER'
        }
      ]
    }
  ]

  export const technologyMenu = [
    {
      title: 'Азот',
      icon: 'N2',
      items: [
        {
          title: 'Технология PSA',
          href: '/nitrogen'
        },
        {
          title: 'Генераторы азота',
          href: '/nitrogenerators'
        },
        {
          title: 'Применение азота',
          href: '/nitrogen/applications'
        }
      ]
    },
  
    {
      title: 'Кислород',
      icon: 'O2',
      items: [
        {
          title: 'Технология PSA',
          href: '/oxygen'
        },
        {
          title: 'Генераторы кислорода',
          href: '/oxygenerators'
        },
        {
          title: 'Применение кислорода',
          href: '/oxygen/applications'
        }
      ]
    },
  
    {
      title: 'Инструменты',
      icon: 'TOOLS',
      items: [
        {
          title: 'Конфигуратор станции',
          href: '#config'
        },
        {
          title: 'Подбор оборудования',
          href: '#config'
        },
        {
          title: 'Получить КП',
          href: '#footer'
        }
      ]
    }
  ]

  export const contactsMenu = {
    title: 'Контакты',
  
    items: [
      {
        title: 'Телефон',
        description: '+7 (495) 065-92-76',
        href: 'tel:+74950659276'
      },
  
      {
        title: 'E-mail',
        description: 'info@blitzgas.ru',
        href: 'mailto:info@blitzgas.ru'
      },
  
      {
        title: 'Запросить КП',
        description: 'Связаться с инженером',
        href: '#footer'
      }
    ]
  }