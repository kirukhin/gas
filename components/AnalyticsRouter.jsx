//components/AnalyticsRouter.jsx

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AnalyticsRouter() {
  const router = useRouter();

  useEffect(() => {
    if (!window.ym) return;

    const handleRoute = (url) => {
      try {
        window.ym(103957835, "hit", url);
        // console.log("YM HIT:", url);
      } catch (e) {
        console.error("YM route hit error:", e);
      }
    };

    router.events.on("routeChangeComplete", handleRoute);

    // отправляем hit сразу после загрузки страницы (SSR)
    handleRoute(window.location.pathname + window.location.search);

    return () => {
      router.events.off("routeChangeComplete", handleRoute);
    };
  }, [router.events]);

  return null;
}
