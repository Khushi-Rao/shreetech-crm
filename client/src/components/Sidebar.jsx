function Sidebar() {
  const menuItems = [
    { label: 'Dashboard',   icon: '📊' },
    { label: 'Leads',       icon: '🎯' },
    { label: 'Follow-ups',  icon: '📞' },
    { label: 'Enquiries',   icon: '📋' },
    { label: 'Quotations',  icon: '📄' },
    { label: 'Orders',      icon: '📦' },
    { label: 'Payments',    icon: '💰' },
    { label: 'Products',    icon: '⚙️'  },
  ]

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="px-6 py-5 border-b border-gray-700">
        <h1 className="text-lg font-bold text-white leading-tight">
          ShreeTech Solutions
        </h1>
        <p className="text-xs text-gray-400 mt-1">CRM Dashboard</p>
      </div>

      <nav className="flex-1 px-4 py-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 px-2">
          Sales Pipeline
        </p>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-150">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-6 py-4 border-t border-gray-700">
        <p className="text-xs text-gray-500">Logged in as</p>
  <p className="text-sm font-medium">Sales Team</p>
</div>
</aside>
)
}

export default Sidebar