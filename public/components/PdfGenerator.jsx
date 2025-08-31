import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { equipmentInfo } from "./equipmentDetails"; // путь адаптируйте под ваш проект

pdfMake.vfs = pdfFonts.vfs;

const getBase64ImageFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const getTodayKey = () => new Date().toISOString().split("T")[0];
const getNextQuoteNumber = () => {
  const key = `quoteCounter-${getTodayKey()}`;
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  const next = current + 1;
  localStorage.setItem(key, next.toString().padStart(3, "0"));
  return next.toString().padStart(3, "0");
};

// Главная функция генерации PDF
export const generatePdf = async ({
  gas,
  system,
  model,
  purity,
  pressure,
  dewPoint,
  unit,
  inputValue,
  refillCapacity,
  selectedEquipment = []
}) => {
  // === Безопасность данных ===
  const includedItems = Array.isArray(selectedEquipment)
    ? selectedEquipment.filter(e => e?.includedInQuote)
    : [];

  if (includedItems.length === 0) {
    alert("Не выбрано ни одного оборудования для включения в КП.");
    return;
  }

  // === Получаем изображения ===
  const headerBase64 = await getBase64ImageFromUrl(new URL('/header.png', import.meta.url).href);
  const footerBase64 = await getBase64ImageFromUrl(new URL('/footer.png', import.meta.url).href);
  const logoBase64 = await getBase64ImageFromUrl(new URL('/bglogo.png', import.meta.url).href);

  const quoteNumber = getNextQuoteNumber();
  const date = new Date().toLocaleDateString("ru-RU");

  const gasTitle = gas === "oxygen" ? "кислородная" : "азотная";
  const systemTitle = system === "generation" ? "для генерации газа" : "для заправки баллонов";
  const modelCode = typeof model === "string" ? model?.split(" ").pop() : (model?.model || "БезМодели");

  const title = `Адсорбционная ${gasTitle} станция ${systemTitle} ${modelCode}`;
  const unitLabel = unit === "lmin" ? "л/мин" : unit === "kgh" ? "кг/ч" : "м³/ч";

  const techSpecs = [
    ["Параметр", "Значение"],
    ["Чистота", `${purity}${gas === "oxygen" ? "%" : ""}`],
    ["Давление", `${pressure}${gas === "nitrogen" ? " бар" : ""}`]
  ];
  if (gas === "nitrogen") {
    techSpecs.push(["Точка росы", `${dewPoint} °C`]);
  }

  // === Производительность ===
  let productivityValue = null;
  if (typeof model === "object" && model?.equipment) {
    if (gas === "oxygen") {
      productivityValue = model?.equipment?.productivity?.find(p => p.purity === `${purity}%`)?.value;
    } else {
      const purityIndex = {
        "95%": 10, "97%": 9, "98%": 8, "99%": 7, "99.5%": 6,
        "99.9%": 5, "99.95%": 4, "99.99%": 3, "99.995%": 2,
        "99.999%": 1, "99.9995%": 0
      }[purity];
      productivityValue = model?.equipment?.productivity?.[purityIndex]?.value;
    }
  }

  let convertedValue = "-";
  if (typeof productivityValue === "number") {
    if (unit === "lmin") convertedValue = (productivityValue * 1000 / 60).toFixed(1);
    else if (unit === "kgh") convertedValue = (productivityValue * 1.2506).toFixed(1);
    else convertedValue = productivityValue.toFixed(1);
  }

  techSpecs.push(["Производительность", `${inputValue} ${unitLabel}`]);
  if (system === "refill") {
    techSpecs.push(["Станция заправки", `${refillCapacity} баллонов за цикл`]);
  }

  // === Таблица "Комплект поставки" ===
  const supplyTable = [
    [
      { text: "№№", bold: true, fillColor: "#c00000", color: "white" },
      { text: "Наименование оборудования", bold: true, fillColor: "#c00000", color: "white" },
      { text: "Кол-во", bold: true, fillColor: "#c00000", color: "white" },
      { text: "Цена (руб. с НДС)", bold: true, fillColor: "#c00000", color: "white" },
    ],
  ];

  // Только если есть включённые элементы, добавим строки
  if (includedItems.length > 0) {
    const supplyRows = includedItems.map((item, index) => ([
      `${index + 1}`,
      item.name || item.model,
      "1 шт.",
      `${item.price?.toLocaleString("ru-RU")} ₽`
    ]));
    
    // Считаем итог
    const totalPrice = includedItems.reduce((sum, item) => sum + (item.price || 0), 0);
    
    // Добавляем строки и итог
    supplyTable.push(...supplyRows);
    
    supplyTable.push([
      { text: "Итого", colSpan: 3, alignment: "right", bold: true }, {}, {},
      { text: `${totalPrice.toLocaleString("ru-RU")} ₽`, bold: true }
    ]);
    
    
  } else {
    // Добавим заглушку
    supplyTable.push([
      { text: "Нет оборудования", colSpan: 4, alignment: "center", margin: [0, 10], color: "gray" },
      {}, {}, {}
    ]);
  }


  // === Блок "Список оборудования" ===
  const equipmentCards = await Promise.all(
    includedItems.map(async (item) => {
      const id = item.id || item.model;
      const info = equipmentInfo[id] || {};
      const imgBase64 = info.image
        ? await getBase64ImageFromUrl(new URL(info.image, import.meta.url).href)
        : null;
  
      return {
        unbreakable: true,
        table: {
          widths: ["25%", "*"],
          body: [
            [
              {
                colSpan: 2,
                text: item.name || item.model || info.name,
                fillColor: "#c00000",
                color: "white",
                bold: true,
                fontSize: 13,
                alignment: "center",
                margin: [0, 5, 0, 5],
              },
              {},
            ],
            [
              imgBase64
                ? {
                    image: imgBase64,
                    width: 120,
                    height: 120,
                    margin: [0, 0, 10, 0],
                  }
                : { text: "Нет изображения", italics: true, color: "gray" },
              {
                text: info.description || "Описание недоступно",
                fontSize: 10,
                margin: [0, 0, 0, 0],
              },
            ],
            [
              {
                colSpan: 2,
                text: `Цена: ${(item.price || 0).toLocaleString("ru-RU")} ₽ с НДС`,
                fillColor: "#f2f2f2",
                alignment: "right", // <— выравнивание вправо
                bold: true,
                margin: [0, 5, 10, 5], // чуть правее
              },
              {},
            ],
          ],
        },
        layout: {
          hLineWidth: () => 1,
          vLineWidth: () => 1,
          hLineColor: () => "#000000",
          vLineColor: () => "#000000",
        },
        margin: [0, 20, 0, 10],
      };
    })
  );
  


  // === Генерация документа ===
  const docDefinition = {
    pageSize: "A4",
    pageMargins: [40, 100, 40, 100],
    header: {
      margin: [0, 0, 0, 0],
      stack: [
        { image: headerBase64, width: 595.28, height: 92 },
        { image: logoBase64, width: 200, margin: [20, -70, 0, 0], link: "https://blitzgas.ru" }
      ]
    },
    footer: (currentPage, pageCount) => ({
      margin: [0, 0, 0, 0],
      stack: [
        {
          image: footerBase64,
          width: 595.28,
          height: 92,
        },
        {
          text: "БлицГаз    +7 (495) 065-92-76    info@blitzgas.ru",
          fontSize: 20,
          bold: true,
          font: 'Roboto',
          alignment: 'center',
          margin: [0, -50, 0, 0], // немного опустили текст
        }
      ]
    }),



    content: [
      {
        stack: [
          { text: `№ ${quoteNumber} от ${date}`, alignment: "right", bold: true, margin: [0, 20, 0, 10] },
          { text: "Технико-коммерческое предложение", style: "title", alignment: "center", margin: [0, 0, 0, 10] },
          { text: title, style: "subTitle", alignment: "center", margin: [0, 0, 0, 20] },
          {
            table: {
              widths: ["*", "*"],
              body: [
                [
                  { text: "Параметр", bold: true, fillColor: "#c00000", color: "white" },
                  { text: "Значение", bold: true, fillColor: "#c00000", color: "white" }
                ],
                ...techSpecs.slice(1)
              ]
            },
            layout: {
              fillColor: function (rowIndex) {
                return rowIndex % 2 === 0 ? null : "#f9f9f9";
              }
            },
            margin: [0, 0, 0, 20]
          },

          {
            text: gas === "oxygen" ? "O₂" : "N₂",
            fontSize: 80,
            bold: true,
            opacity: 0.2,
            alignment: "right",
            margin: [0, 40, 20, 0]
          }
        ]
      },
      { text: "Комплект поставки", style: "title", pageBreak: "before", margin: [0, 0, 0, 10] },
      {
        table: {
          widths: [30, "*", 70, 100],
          body: supplyTable
        }
      },
      ...(includedItems.length > 0
        ? [
          { text: "Список оборудования:", style: "title", margin: [0, 30, 0, 10] },
          ...equipmentCards.flat()
        ]
        : []),

      {
        text: "Общая стоимость оборудования и условия поставки:",
        style: "subTitle",
        margin: [0, 30, 0, 10]
      },
      {
        text: [
          `Общая стоимость полного комплекта поставки: ${includedItems.reduce((sum, i) => sum + (i.price || 0), 0).toLocaleString("ru-RU")} руб.\n`,
          "Стоимость указана с учетом НДС 20% на условиях EXW Санкт-Петербург (Incoterms 2020).\n",
          "Общая стоимость включает:\n- стоимость оборудования\n- стоимость технической документации\n- стоимость упаковки\n",
          "Условия оплаты: 50% предоплата, 50% — после уведомления о готовности оборудования к отгрузке.\n",
          "Срок поставки составляет не более 100 рабочих дней."
        ],
        fontSize: 11
      }
    ],
    styles: {
      title: { fontSize: 16, bold: true },
      subTitle: { fontSize: 14, bold: true }
    }
  };

  pdfMake.createPdf(docDefinition).download(`КП_${modelCode}_${quoteNumber}.pdf`);
};
