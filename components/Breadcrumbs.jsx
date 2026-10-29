
import Link from "next/link";

export default function Breadcrumbs({
  items = [],
  title,
  className = "",
  theme = "dark",
}) {
  const breadcrumb =
    items.length > 0
      ? items
      : [
          { name: "Главная", href: "/" },
          { name: title, href: "" },
        ];

  const SITE =
    process.env.NEXT_PUBLIC_SITE_URL || "https://blitzgas.ru";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((it, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: it.name,
      ...(it.href ? { item: SITE + it.href } : {}),
    })),
  };

  const colors = {
    current: "text-black",
    link: "text-black hover:text-gray-700",
    underline: "decoration-black hover:decoration-gray-700",
    separator: "text-black",
  };

  return (
    <>
      <nav
        aria-label="Хлебные крошки"
        className={`select-none ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-2 text-lg">
          {breadcrumb.map((it, i) => {
            const isLast = i === breadcrumb.length - 1;

            return (
              <li
                key={`${it.href || "current"}-${i}`}
                className="flex items-center"
              >
                {isLast ? (
                  <span
                    aria-current="page"
                    className={`text-lg font-bold ${colors.current}`}
                  >
                    {it.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={it.href}
                      className={`font-bold underline underline-offset-4 transition-colors ${colors.link} ${colors.underline}`}
                    >
                      {it.name}
                    </Link>

                    <svg
                      className={`mx-1 h-4 w-4 ${colors.separator}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M8 5l8 7-8 7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd),
        }}
      />
    </>
  );
}
