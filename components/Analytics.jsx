// components/Analytics.jsx
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Yandex Metrika */}
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

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-72KHXSLFN1"
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-inline"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
try {
  if (!window.__ga_loaded) {
    window.__ga_loaded = true;

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());

    // ✅ Consent Mode — по умолчанию запрещено
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied'
    });

    // ❗ отключаем авто pageview (SPA)
    gtag('config', 'G-72KHXSLFN1', {
      send_page_view: false
    });

    // 🔥 сигнал, что GA готова
    window.dispatchEvent(new Event("ga-loaded"));
  }
} catch (err) {
  console.error('Google Analytics init error:', err);
}
          `,
        }}
      />

      {/* CookieYes → Google Consent Mode bridge */}
      <Script
        id="cookieyes-consent-listener"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  try {
    document.addEventListener('cookieyes_consent_update', function(event) {
      if (!window.gtag) return;

      const consent = event.detail;

      console.log('CookieYes consent update:', consent);

      const isAnalyticsAccepted =
        consent &&
        consent.accepted &&
        consent.accepted.includes('analytics');

      if (isAnalyticsAccepted) {
        // ✅ пользователь разрешил аналитику
        window.gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      } else {
        // ❌ пользователь запретил аналитику
        window.gtag('consent', 'update', {
          analytics_storage: 'denied'
        });
      }
    });
  } catch (err) {
    console.error('CookieYes listener error:', err);
  }
})();
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