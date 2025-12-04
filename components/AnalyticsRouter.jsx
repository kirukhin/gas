// components/AnalyticsRouter.jsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AnalyticsRouter() {
  const router = useRouter();

  useEffect(() => {
    // Функция отправки хитa
    const sendHit = (url) => {
      if (typeof window === "undefined" || !window.ym) return;

      try {
        window.ym(103957835, "hit", url, {
          referer: document.referrer
        });
      } catch (e) {
        console.error("YM hit error:", e);
      }
    };

    // Ждём загрузки метрики
    const onYMLoaded = () => {
      // hit на первую страницу
      sendHit(window.location.pathname + window.location.search);

      // SPA-навигация
      router.events.on("routeChangeComplete", sendHit);
    };

    window.addEventListener("ym-loaded", onYMLoaded);

    return () => {
      window.removeEventListener("ym-loaded", onYMLoaded);
      router.events.off("routeChangeComplete", sendHit);
    };
  }, [router.events]);

  return null;
}
