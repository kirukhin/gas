// PdfGenerator.jsx
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";


// Регистрация шрифтов
pdfMake.vfs = pdfFonts.vfs;

const getBase64ImageFromUrl = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result); // <— data:image/png;base64,...
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};



const getTodayKey = () => {
  const today = new Date().toISOString().split("T")[0];
  return `quoteCounter-${today}`;
};

const getNextQuoteNumber = () => {
  const key = getTodayKey();
  const current = parseInt(localStorage.getItem(key) || "0", 10);
  const next = current + 1;
  localStorage.setItem(key, next.toString().padStart(3, "0"));
  return next.toString().padStart(3, "0");
};

export const generatePdf = async ({ gas, system, model, purity, pressure, dewPoint, unit, inputValue, refillCapacity }) => {
  const headerBase64 = await getBase64ImageFromUrl(new URL('/header.png', import.meta.url).href);
  const footerBase64 = await getBase64ImageFromUrl(new URL('/footer.png', import.meta.url).href);
  const logoBase64 = await getBase64ImageFromUrl(new URL('/bglogo.png', import.meta.url).href);


  const quoteNumber = getNextQuoteNumber();
  const date = new Date().toLocaleDateString("ru-RU");

  const gasTitle = gas === "oxygen" ? "кислородная" : "азотная";
  const systemTitle = system === "generation" ? "для генерации газа" : "для заправки баллонов";

  const modelCode = model?.split(" ").pop(); // вытаскивает "N-600"
  const title = `Адсорбционная ${gasTitle} станция ${systemTitle} ${modelCode}`;


  // Динамические характеристики
  const techSpecs = [
    ["Параметр", "Значение"],
    ["Чистота", `${purity}${gas === "oxygen" ? "%" : ""}`],
    ["Давление", `${pressure}${gas === "nitrogen" ? " бар" : ""}`]
  ];

  if (gas === "nitrogen") {
    techSpecs.push(["Точка росы", `${dewPoint} °C`]);
  }

  let productivityValue;

  // Вытаскиваем значение value по чистоте
  if (gas === "oxygen") {
    productivityValue = model?.equipment?.productivity.find(p => p.purity === `${purity}%`)?.value;
  } else {
    const reversedIndex = {
      "95%": 10, "97%": 9, "98%": 8, "99%": 7, "99.5%": 6,
      "99.9%": 5, "99.95%": 4, "99.99%": 3, "99.995%": 2, "99.999%": 1, "99.9995%": 0
    }[purity];
    productivityValue = model?.equipment?.productivity?.[reversedIndex]?.value;
  }

  // Переводим в выбранные единицы
  let convertedValue = "-";
  const unitLabel = unit === "lmin" ? "л/мин" : unit === "m3h" ? "м³/ч" : "кг/ч";

  if (typeof productivityValue === "number") {
    if (unit === "lmin") convertedValue = (productivityValue * 1000 / 60).toFixed(1);
    else if (unit === "kgh") convertedValue = (productivityValue * 1.2506).toFixed(1);
    else convertedValue = productivityValue.toFixed(1);
  }

  // Вставляем строки в таблицу
  techSpecs.push(["Производительность", `${convertedValue} ${unitLabel}`]);

  if (system === "refill") {
    techSpecs.push(["Производительность (в баллонах)", `${refillCapacity} баллонов в сутки`]);
  }


  const docDefinition = {

    pageSize: 'A4',
  pageMargins: [40, 100, 40, 100], // left, top, right, bottom

  header: {
    margin: [0, 0, 0, 0],
    stack: [
      {
        image: headerBase64,
        width: 595.28,   // ширина A4
        height: 92       // высота с сохранением пропорций
      },
      {
        image: logoBase64,
        width: 100,
        margin: [20, -70, 0, 0],
        link: "https://kirukhin.github.io/gas/"
      }
    ]
  },

  footer: (currentPage, pageCount) => ({
    margin: [0, 0, 0, 0],
    stack: [
      {
        image: footerBase64,
        width: 595.28,
        height: 92
      },
      {
        text: "БлицГаз\nСанкт-Петербург\nТелефон: (812) 334-56-38\nE-mail: info@provita.ru",
        fontSize: 9,
        alignment: "right",
        margin: [0, -70, 40, 0] // приподняли над фоном
      }
    ]
  }),



    content: [
      {
        stack: [
          { text: `№ ${quoteNumber} от ${date}`, style: "headerRight", alignment: "right", margin: [0, 20, 0, 20] },
          { text: "Технико-коммерческое предложение", style: "title", alignment: "center", margin: [0, 0, 0, 20] },
          { text: title, style: "subTitle", alignment: "center", margin: [0, 0, 0, 20] },
          {
            table: {
              headerRows: 1,
              widths: ["*", "*"],
              body: techSpecs,
            },
            layout: "lightHorizontalLines"
          },
          {
            text: gas === "oxygen" ? "O₂" : "N₂",
            fontSize: 80,
            bold: true,
            opacity: 0.2,
            alignment: 'right',
            margin: [0, 40, 20, 0]
          }
        ],
        margin: [40, 120, 40, 40] // отступ сверху — чтобы не перекрывало хедер
      }
    ],

    styles: {
      headerRight: {
        fontSize: 14,
        bold: true
      },
      title: {
        fontSize: 18,
        bold: true
      },
      subTitle: {
        fontSize: 18
      }
    },
      
    


  };


  pdfMake.createPdf(docDefinition).download(`КП_${model}_${quoteNumber}.pdf`);
};