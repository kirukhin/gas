// components/foodPackaging/Section.jsx

export default function Section({
  id,
  subtitle,
  title,
  children,
  imagePlaceholder
}) {
  const content = (
    <div
      className="
        prose
        prose-lg
        max-w-none
        text-gray-600
        prose-headings:text-gray-800
      "
    >
      {children}
    </div>
  );

  return (
    <section
      id={id}
      className="border-b border-gray-100 py-16"
    >
      <div className="container max-w-6xl mx-auto px-6">

        {subtitle && (
          <p className="uppercase tracking-widest text-red-600 text-sm font-semibold mb-2">
            {subtitle}
          </p>
        )}

        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-5">
          {title}
        </h2>

        <div className="gradient h-1 w-24 rounded mb-10 opacity-40" />

        {imagePlaceholder ? (

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {content}

            <div
              className="
                rounded-xl
                border-2
                border-dashed
                border-gray-300
                bg-gray-50
                aspect-[4/3]
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-10
              "
            >
              <div className="text-sm font-semibold tracking-widest text-red-600 mb-4">
                {imagePlaceholder}
              </div>

              <div className="text-2xl font-bold text-gray-700 mb-3">
                Здесь будет инженерная схема
              </div>

              <p className="text-gray-500 max-w-sm">
                На этапе наполнения страницы этот блок заменится полноценной
                схемой или инфографикой.
              </p>
            </div>
          </div>

        ) : (
          content
        )}

      </div>
    </section>
  );
}