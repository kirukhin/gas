
import React from "react";

const variants = {
  catalog: "page-hero--catalog",
  article: "page-hero--article",
  compact: "page-hero--compact",
};

export default function PageHero({
  title,
  breadcrumbs,
  image,
  imageAlt = "",
  description,
  actions,
  variant = "catalog",
}) {
  const variantClass = variants[variant] || variants.catalog;

  return (
    <header className={`page-hero ${variantClass}`}>
      {/* Светлая инженерная атмосфера */}
      <div
        className="page-hero__background"
        aria-hidden="true"
      />

      {/* Декоративные потоки */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        className="page-hero__waves"
      >
        <defs>
          <linearGradient
            id="pageHeroRibbon"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0" />
            <stop offset="35%" stopColor="#93c5fd" stopOpacity="0.16" />
            <stop offset="65%" stopColor="#60a5fa" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity="0" />
          </linearGradient>

          <linearGradient
            id="pageHeroLine"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="18%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.78" />
            <stop offset="82%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="page-hero__ribbon page-hero__ribbon--slow"
          d="M-360 400 C-90 300 120 470 380 395 S760 295 1020 370 S1450 425 1960 300 L1960 405 C1510 505 1280 440 1020 425 S650 425 380 445 S-100 410 -360 490 Z"
          fill="url(#pageHeroRibbon)"
        />

        <path
          className="page-hero__ribbon"
          d="M-360 450 C-80 365 150 505 410 430 S760 350 1030 405 S1470 460 1960 355"
          fill="none"
          stroke="url(#pageHeroLine)"
          strokeWidth="2.2"
        />

        <path
          className="page-hero__flow-line"
          d="M-360 474 C-80 389 150 529 410 454 S760 374 1030 429 S1470 484 1960 379"
          fill="none"
          stroke="#93c5fd"
          strokeOpacity="0.42"
          strokeWidth="1.2"
        />
      </svg>

      {/* Контент Hero */}
      <div className="page-hero__container">
        <div className="page-hero__copy">
          <h1 className="page-hero__title">{title}</h1>

          {breadcrumbs && (
            <div className="page-hero__breadcrumbs">
              {breadcrumbs}
            </div>
          )}

          {description && (
            <p className="page-hero__description">
              {description}
            </p>
          )}

          {actions && (
            <div className="page-hero__actions">
              {actions}
            </div>
          )}
        </div>

        {image && (
          <div className="page-hero__visual">
            <img
              src={image}
              alt={imageAlt}
              className="page-hero__image"
              loading="eager"
              decoding="async"
            />
          </div>
        )}
      </div>

      {/* Единый переход к белому контенту */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        className="page-hero__transition"
      >
        <path
          d="M0 54 C180 112 315 100 470 67 S735 30 900 70 S1200 118 1440 38 L1440 130 L0 130 Z"
          fill="#ffffff"
        />
        <path
          d="M0 54 C180 112 315 100 470 67 S735 30 900 70 S1200 118 1440 38"
          fill="none"
          stroke="#bfdbfe"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />
      </svg>
    </header>
  );
}
