import Link from 'next/link'
import { equipmentMenu } from '../../data/navigation'
import MenuIcon from './MenuIcon'

export default function MegaMenuEquipment({ onNavigate }) {
  return (
    <div
      className="
        absolute left-0 top-full mt-2
        w-[900px] max-w-[95vw]
        rounded-xl
        bg-white
        shadow-xl
        ring-1 ring-black/5
        p-6
      "
    >
      <div className="grid grid-cols-3 gap-8">

        {equipmentMenu.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-500">
              {group.title}
            </h3>

            <div className="space-y-3">

              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="
                    flex gap-3
                    rounded-lg
                    p-3
                    hover:bg-gray-50
                    transition
                  "
                >
                  <MenuIcon type={item.icon} />

                  <div>
                    <div className="font-semibold text-gray-900">
                      {item.title}
                    </div>

                    <div className="text-sm text-gray-500 leading-snug">
                      {item.description}
                    </div>
                  </div>
                </Link>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}