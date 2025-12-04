// components/Analytics.jsx
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        id="yandex-metrika-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(m,e,t,r,i,k,a){
  try {
    if (window.__ym_loaded) { return; }
    window.__ym_loaded = true;

    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();

    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) { return; }
    }

    k=e.createElement(t), a=e.getElementsByTagName(t)[0];
    k.async=1; k.src=r; 
    k.onload = function() {
      // 🔥 Сообщаем, что YM загружена
      window.dispatchEvent(new Event("ym-loaded"));
    };
    a.parentNode.insertBefore(k,a);

    m[i](103957835, 'init', { 
      webvisor:true, clickmap:true, 
      trackLinks:true, accurateTrackBounce:true,
      defer:true, trackHash:true 
    });

  } catch (err) {
    console.error('Yandex Metrika init error:', err);
  }
})(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=103957835', 'ym');
          `,
        }}
      />

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
