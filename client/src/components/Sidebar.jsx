import { useNavigate, useLocation } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { label: 'Dashboard',  icon: '📊', path: '/dashboard'  },
    { label: 'Leads',      icon: '🎯', path: '/leads'      },
    { label: 'Follow-ups', icon: '📞', path: '/followups'  },
    { label: 'Enquiries',  icon: '📋', path: '/enquiries'  },
    { label: 'Quotations', icon: '📄', path: '/quotations' },
    { label: 'Orders',     icon: '📦', path: '/orders'     },
    { label: 'Payments',   icon: '💰', path: '/payments'   },
    { label: 'Products',   icon: '⚙️',  path: '/products'   },
  ]

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">

      {/* Logo area */}
      <div className="px-6 py-5 border-b border-gray-700">
        <h1 className="text-lg font-bold text-white leading-tight">
          ShreeTech Solutions
        </h1>
        <p className="text-xs text-gray-400 mt-1">CRM Dashboard</p>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-4 py-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-2">
          Sales Pipeline
        </p>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.label}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-150
                    ${isActive
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom user info */}
      <div className="px-6 py-4 border-t border-gray-700">
        <p className="text-xs text-gray-500">Logged in as</p>
        <p className="text-sm font-medium text-white">Sales Team</p>
      </div>

    </aside>
  )
}

export default Sidebar