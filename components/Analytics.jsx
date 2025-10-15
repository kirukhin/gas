// components/Analytics.jsx
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Загружаем сам тег асинхронно после интерактивности */}
      <Script
        id="yandex-metrika-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(m,e,t,r,i,k,a){
  try {
    // не перезаписываем, если уже инициализировано (используем приватный флаг)
    if (window.__ym_loaded) { return; }
    window.__ym_loaded = true;

    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();

    // если скрипт уже вставлен — не дублируем
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) { return; }
    }

    k=e.createElement(t), a=e.getElementsByTagName(t)[0];
    k.async=1; k.src=r; a.parentNode.insertBefore(k,a);
    
    // Здесь можно сразу пушить init — функция ym добавлена и буферизует вызовы
    m[i](103957835, 'init', { ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true });
  } catch (err) {
    // не ломаем приложение, если что-то пошло не так
    console.error('Yandex Metrika init error:', err);
  }
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=103957835', 'ym');
          `,
        }}
      />

      {/* noscript — для пользователей с выключенным JS */}
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/103957835"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
