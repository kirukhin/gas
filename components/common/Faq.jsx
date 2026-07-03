import { useState } from 'react'

export default function Faq({ items = [] }) {

  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section>

      <h2 className="text-3xl font-bold mb-8">
        Частые вопросы
      </h2>

      <div className="space-y-4">

        {items.map((item, index) => {

          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className="border rounded-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index
                  )
                }
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  p-5
                  text-left
                  font-semibold
                "
              >

                <span>
                  {item.question}
                </span>

                <span>
                  {isOpen ? '−' : '+'}
                </span>

              </button>

              {isOpen && (

                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {item.answer}
                </div>

              )}

            </div>
          )
        })}

      </div>

    </section>
  )
}