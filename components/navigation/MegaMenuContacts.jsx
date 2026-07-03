import Link from 'next/link'
import { contactsMenu } from '../../data/navigation'
import MenuIcon from './MenuIcon'

function getIcon(title) {
  if (title.includes('Телефон')) return 'PHONE'
  if (title.includes('mail')) return 'EMAIL'
  return 'QUOTE'
}

export default function MegaMenuContacts({ onNavigate }) {
  return (
    <div
      className="
        absolute right-0 top-full mt-2
        w-[340px]
        rounded-xl
        bg-white
        shadow-xl
        ring-1 ring-black/5
        p-4
      "
    >
      <div className="space-y-2">

        {contactsMenu.items.map((item) => (
          <Link
            key={item.title}
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
            <MenuIcon type={getIcon(item.title)} />

            <div>
              <div className="font-semibold text-gray-900">
                {item.title}
              </div>

              <div className="text-sm text-gray-500">
                {item.description}
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  )
}