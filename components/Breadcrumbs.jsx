//components/Breadcrumbs.jsx

import Link from "next/link"

export default function Breadcrumbs({ items = [], title, className = "" }) {
    // ————————————————————————————————
    // 1. Если список крошек не передан → строим минимальный вариант
    // ————————————————————————————————
    const breadcrumb = items.length > 0
        ? items
        : [
            { name: "Главная", href: "/" },
            { name: title, href: "" }, // последняя без ссылки
        ]

    // ————————————————————————————————
    // 2. JSON-LD data
    // ————————————————————————————————
    const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://blitzgas.ru"

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((it, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: it.name,
            item: it.href ? SITE + it.href : undefined,
        }))
    }

    // ————————————————————————————————
    // 3. Render
    // ————————————————————————————————
    return (
        <>
            <nav aria-label="breadcrumb" className={`mt-6 select-none ${className}`}>
                <ol className="flex flex-wrap items-center gap-2 text-lg">
                    {breadcrumb.map((it, i) => {
                        const isLast = i === breadcrumb.length - 1
                        return (
                            <li key={i} className="flex items-center">
                                {isLast ? (
                                    <span className="font-bold text-white text-lg">
                                        {it.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={it.href}
                                        className="font-bold text-white/90 hover:text-white underline underline-offset-4 decoration-white/90"
                                    >
                                        {it.name}
                                    </Link>
                                )}

                                {!isLast && (
                                    <svg
                                        className="w-4 h-4 mx-1 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M8 5l8 7-8 7"
                                            stroke="currentColor"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </nav>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
        </>
    )
}
