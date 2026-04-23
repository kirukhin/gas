import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AnalyticsRouter() {
  const router = useRouter();

  useEffect(() => {
    let ymReady = false;
    let gaReady = false;

    // универсальная отправка
    const sendHit = (url) => {
      if (typeof window === "undefined") return;

      // Yandex
      if (window.ym) {
        try {
          window.ym(103957835, "hit", url, {
            referer: document.referrer,
          });
        } catch (e) {
          console.error("YM hit error:", e);
        }
      }

      // Google Analytics
      if (window.gtag) {
        try {
          window.gtag("event", "page_view", {
            page_path: url,
            page_location: window.location.href,
            page_title: document.title,
          });
        } catch (e) {
          console.error("GA hit error:", e);
        }
      }
    };

    const tryInit = () => {
      // ждём хотя бы один сервис (или оба — можно поменять условие)
      if (!ymReady && !gaReady) return;

      // первый хит
      sendHit(window.location.pathname + window.location.search);

      // SPA переходы
      router.events.on("routeChangeComplete", sendHit);
    };

    const onYM = () => {
      ymReady = true;
      tryInit();
    };

    const onGA = () => {
      gaReady = true;
      tryInit();
    };

    window.addEventListener("ym-loaded", onYM);
    window.addEventListener("ga-loaded", onGA);

    return () => {
      window.removeEventListener("ym-loaded", onYM);
      window.removeEventListener("ga-loaded", onGA);
      router.events.off("routeChangeComplete", sendHit);
    };
  }, [router.events]);

  return null;
}