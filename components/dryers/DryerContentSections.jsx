export default function DryerContentSections({
    data
  }) {
  
    return (
  
      <>
  
        <section className="mb-20">
  
          <h1 className="text-5xl font-bold mb-8">
            {data.type.h1}
          </h1>
  
          <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
  
            {data.intro?.content?.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}
  
          </div>
  
        </section>
  
  
        {data.advantages && (
  
          <section className="mb-20">
  
            <h2 className="text-3xl font-bold mb-8">
              {data.advantages.title}
            </h2>
  
            <div className="grid md:grid-cols-2 gap-6">
  
              {data.advantages.items.map(
                (item, index) => (
  
                  <div
                    key={index}
                    className="
                      border
                      rounded-xl
                      p-6
                    "
                  >
  
                    <h3 className="font-semibold mb-3">
                      {item.title}
                    </h3>
  
                    <p className="text-slate-600">
                      {item.text}
                    </p>
  
                  </div>
  
                )
              )}
  
            </div>
  
          </section>
  
        )}
  
  
        {data.applications && (
  
          <section className="mb-20">
  
            <h2 className="text-3xl font-bold mb-8">
              {data.applications.title}
            </h2>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  
              {data.applications.items.map(
                (item, index) => (
  
                  <div
                    key={index}
                    className="
                      border
                      rounded-xl
                      p-4
                    "
                  >
                    {item}
                  </div>
  
                )
              )}
  
            </div>
  
          </section>
  
        )}
  
  
        {data.technology && (
  
          <section className="mb-20">
  
            <h2 className="text-3xl font-bold mb-8">
              {data.technology.title}
            </h2>
  
            <div className="overflow-x-auto">
  
              <table className="w-full">
  
                <tbody>
  
                  {data.technology.items.map(
                    (item, index) => (
  
                      <tr
                        key={index}
                        className="border-b"
                      >
  
                        <td className="py-4 font-medium">
                          {item.name}
                        </td>
  
                        <td className="py-4">
                          {item.value}
                        </td>
  
                      </tr>
  
                    )
                  )}
  
                </tbody>
  
              </table>
  
            </div>
  
          </section>
  
        )}
  
  
        {data.selectionGuide && (
  
          <section className="mb-20">
  
            <h2 className="text-3xl font-bold mb-8">
              {data.selectionGuide.title}
            </h2>
  
            <div className="space-y-4 text-slate-700">
  
              {data.selectionGuide.content.map(
                (item, index) => (
                  <p key={index}>
                    {item}
                  </p>
                )
              )}
  
            </div>
  
          </section>
  
        )}
  
  
        {data.comparison && (
  
          <section className="mb-20">
  
            <h2 className="text-3xl font-bold mb-8">
              {data.comparison.title}
            </h2>
  
            <div className="space-y-4 text-slate-700">
  
              {data.comparison.content.map(
                (item, index) => (
                  <p key={index}>
                    {item}
                  </p>
                )
              )}
  
            </div>
  
          </section>
  
        )}
  
      </>
    )
  }