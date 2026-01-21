// components/Footer.jsx
import { useEffect, useRef } from "react";

export default function Footer() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapRef.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src =
        "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae994841c9ffb81b29dc681dc7f9fe0fbfbbedb55669d53a79d7b2ae8a408d962&width=100%25&height=350&lang=ru_RU&scroll=true";
      script.async = true;
      script.charset = "utf-8";

      mapRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="footer" className="text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Контакты */}
          <div className="text-2xl font-semibold">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="mb-2 text-black">Блицгаз</p>
            <p className="mb-2 text-black">
              г. Подольск, Революционный проспект, 53/44
            </p>
            <p className="mb-2 text-black">Тел: +7 (495) 065-92-76</p>
            <p className="mb-2 text-black">Email: info@blitzgas.ru</p>
          </div>

          {/* Форма */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Связаться с нами</h2>
            <form
              action="https://script.google.com/macros/s/AKfycbz3bh5QgSzyn9mfbc7bQhkN1A6sV7yWM6Kj6IKkZicKiiXeyFmo9h1jBA5E2xV15E-R8w/exec"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Имя / Компания"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="E-mail для обратной связи"
                className="w-full px-4 py-2 rounded bg-white text-black"
              />

              <textarea
                name="message"
                required
                placeholder="Ваш запрос"
                className="w-full px-4 py-2 rounded bg-white text-black h-32 resize-none"
              />

              <button
                type="submit"
                className="bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded transition duration-300"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        {/* Яндекс карта */}
        <div
          ref={mapRef}
          className="w-full rounded overflow-hidden"
          style={{ minHeight: "350px" }}
        />

        <p className="text-center text-sm mt-6 opacity-50">
          © 2025 Блицгаз. Все права защищены.
        </p>
      </div>
    </section>
  );
}
