export default function MenuIcon({ type }) {
    const icons = {
      N2: 'N₂',
      O2: 'O₂',
      COMP: '⚙',
      DRY: '💧',
      FILTER: '🛡',
      BOOSTER: '⇈',
      TOOLS: '⚙',
      PHONE: '📞',
      EMAIL: '✉',
      QUOTE: '📋'
    }
  
    return (
      <div
        className="
          flex items-center justify-center
          w-12 h-12
          rounded-lg
          border border-gray-200
          bg-gray-50
          text-lg font-bold
          shrink-0
        "
      >
        {icons[type] || '•'}
      </div>
    )
  }