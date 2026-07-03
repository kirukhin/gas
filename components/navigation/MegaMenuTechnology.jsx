import Link from 'next/link'
import { technologyMenu } from '../../data/navigation'
import MenuIcon from './MenuIcon'

export default function MegaMenuTechnology({
  onNavigate,
  getHref
}) {
  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2
        top-full mt-2
        w-[850px] max-w-[95vw]
        rounded-xl
        bg-white
        shadow-xl
        ring-1 ring-black/5
        p-6
      "
    >
      <div className="grid grid-cols-3 gap-8">

        {technologyMenu.map((section) => (
          <div key={section.title}>
            <div className="mb-4 flex flex-col items-center text-center">
              <MenuIcon type={section.icon} />

              <h3 className="mt-3 font-semibold text-lg">
                {section.title}
              </h3>
            </div>

            <div className="space-y-2">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={getHref(item.href)}
                  onClick={onNavigate}
                  className="
                    block
                    rounded-md
                    px-3 py-2
                    text-sm
                    hover:bg-gray-50
                    transition
                  "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}