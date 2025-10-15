// components/Footer.jsx
export default function Footer() {
  return (
    <section id="footer" className="text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Контактная информация */}
          <div className="text-2xl font-semibold">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="mb-2 text-black">Блицгаз</p>
            <p className="mb-2 text-black">г. Подольск, Революционный проспект, 53/44</p>
            <p className="mb-2 text-black">Тел: +7 (495) 065-92-76</p>
            <p className="mb-2 text-black">Email: info@blitzgas.ru</p>
          </div>

          {/* Форма обратной связи */}
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

        {/* Встроенная карта */}
        <div className="w-full">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=37.534809%2C55.424926%2C37.554809%2C55.444926&layer=mapnik&marker=55.434926%2C37.544809"
            style={{ width: '100%', height: '300px', border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Карта — Блицгаз (Подольск)"
          />
        </div>

        <p className="text-center text-sm mt-6 opacity-50">&copy; 2025 Блицгаз. Все права защищены.</p>
      </div>
    </section>
  );
}
