
import { useEffect, useRef } from "react";

export default function Footer() {
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;

    if (!container || container.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae994841c9ffb81b29dc681dc7f9fe0fbfbbedb55669d53a79d7b2ae8a408d962&width=100%25&height=350&lang=ru_RU&scroll=true";
    script.async = true;
    script.charset = "utf-8";

    container.appendChild(script);
  }, []);

  return (
    <footer id="footer" className="footer-gas relative overflow-hidden">
      {/* Переход от белого контента к светлой газовой атмосфере */}
      <div className="footer-gas__transition" aria-hidden="true">
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="block h-20 w-full sm:h-24 md:h-32"
        >
          <defs>
            <linearGradient id="footerWaveFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F2F8FF" />
            </linearGradient>
          </defs>

          <path
            d="M0 0 H1440 V48 C1270 100 1160 91 1000 62 S710 30 540 66 S190 108 0 45 Z"
            fill="url(#footerWaveFill)"
          />

          <path
            d="M0 45 C190 108 370 91 540 66 S830 30 1000 62 S1270 100 1440 48"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          <path
            d="M0 56 C190 119 370 102 540 77 S830 41 1000 73 S1270 111 1440 59"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1"
            strokeOpacity="0.45"
          />
        </svg>
      </div>

      {/* Движущиеся газовые потоки */}
      <div className="footer-gas__atmosphere" aria-hidden="true">
        <div className="footer-gas__glow footer-gas__glow--one" />
        <div className="footer-gas__glow footer-gas__glow--two" />

        <svg
          viewBox="0 0 1600 600"
          preserveAspectRatio="none"
          className="footer-gas__waves footer-gas__waves--back"
        >
          <defs>
            <linearGradient
              id="footerGasRibbon"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#DBEAFE" stopOpacity="0" />
              <stop offset="40%" stopColor="#93C5FD" stopOpacity="0.2" />
              <stop offset="65%" stopColor="#60A5FA" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="footerGasLine"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
              <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#60A5FA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="footer-gas__ribbon footer-gas__ribbon--slow"
            d="M-300 270 C-40 170 170 340 420 270 S790 160 1040 245 S1440 310 1900 175 L1900 300 C1510 390 1290 320 1040 300 S680 300 420 320 S-50 290 -300 370 Z"
            fill="url(#footerGasRibbon)"
          />

          <path
            className="footer-gas__ribbon"
            d="M-300 310 C-40 210 170 380 420 310 S790 200 1040 285 S1440 350 1900 215"
            fill="none"
            stroke="url(#footerGasLine)"
            strokeWidth="2"
          />

          <path
            className="footer-gas__flow-line footer-gas__flow-line--slow"
            d="M-300 332 C-40 232 170 402 420 332 S790 222 1040 307 S1440 372 1900 237"
            fill="none"
            stroke="#60A5FA"
            strokeOpacity="0.6"
            strokeWidth="1.2"
          />

          <path
            className="footer-gas__ribbon footer-gas__ribbon--slow"
            d="M-200 470 C100 390 280 520 560 450 S900 370 1160 445 S1500 490 1800 400"
            fill="none"
            stroke="#93C5FD"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      {/* Контент */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-8 pt-5 sm:px-6 md:pt-10">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="footer-gas__accent" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Блицгаз · Инженерные решения
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Обсудим задачу вашего производства
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Подберём решение для производства азота или кислорода с учётом
            необходимой производительности, чистоты и рабочего давления.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Контакты */}
          <div className="footer-gas__card p-6 sm:p-8">
            <h3 className="mb-7 text-xl font-bold text-slate-900 sm:text-2xl">
              Контакты
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="footer-gas__icon">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.3" />
                  </svg>
                </div>

                <div>
                  <p className="mb-1 text-sm text-slate-500">Адрес</p>
                  <p className="leading-relaxed text-slate-800">
                    г. Подольск,
                    <br />
                    Революционный проспект, 53/44
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="footer-gas__icon">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <path d="M5 3h4l2 5-2.5 1.7a15 15 0 0 0 5.8 5.8L16 13l5 2v4c0 1.1-.9 2-2 2C10.2 20.4 3.6 13.8 3 5c0-1.1.9-2 2-2Z" />
                  </svg>
                </div>

                <div>
                  <p className="mb-1 text-sm text-slate-500">Телефон</p>
                  <a
                    href="tel:+74950659276"
                    className="text-lg font-semibold text-slate-900 transition-colors hover:text-blue-700"
                  >
                    +7 (495) 065-92-76
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="footer-gas__icon">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <div>
                  <p className="mb-1 text-sm text-slate-500">
                    Электронная почта
                  </p>
                  <a
                    href="mailto:info@blitzgas.ru"
                    className="font-semibold text-slate-900 transition-colors hover:text-blue-700"
                  >
                    info@blitzgas.ru
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-gas__note mt-8">
              <p className="text-sm leading-relaxed text-slate-600">
                Есть техническое задание? Укажите параметры газа и требования
                к установке — это поможет быстрее перейти к подбору оборудования.
              </p>
            </div>
          </div>

          {/* Форма */}
          <div className="footer-gas__card p-6 sm:p-8">
            <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
              Связаться с нами
            </h3>

            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              Опишите задачу — обсудим конфигурацию оборудования и следующие шаги.
            </p>

            <form
              action="https://script.google.com/macros/s/AKfycbz3bh5QgSzyn9mfbc7bQhkN1A6sV7yWM6Kj6IKkZicKiiXeyFmo9h1jBA5E2xV15E-R8w/exec"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="footer-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Имя / Компания
                </label>
                <input
                  id="footer-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Как к вам обращаться"
                  className="footer-gas__input"
                />
              </div>

              <div>
                <label
                  htmlFor="footer-email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  E-mail для обратной связи
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="name@company.ru"
                  className="footer-gas__input"
                />
              </div>

              <div>
                <label
                  htmlFor="footer-message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Задача вашего производства
                </label>
                <textarea
                  id="footer-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Например: азот 99,9%, производительность 50 м³/ч, давление 8 бар"
                  className="footer-gas__input resize-y"
                  style={{ minHeight: "120px" }}
                />
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 sm:w-auto"
              >
                Отправить запрос
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Карта */}
        <div className="mb-8">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Где мы находимся
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Подольск, Революционный проспект, 53/44
              </p>
            </div>

            <a
              href="https://yandex.ru/maps/"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900"
            >
              Открыть Яндекс Карты ↗
            </a>
          </div>

          <div className="footer-gas__map">
            <div ref={mapRef} className="w-full" style={{ minHeight: "350px" }} />
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="flex flex-col gap-3 border-t border-blue-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Блицгаз. Все права защищены.</p>
          <a
            href="mailto:info@blitzgas.ru"
            className="transition-colors hover:text-blue-800"
          >
            Промышленный азот и кислород на месте производства
          </a>
        </div>
      </div>
    </footer>
  );
}
