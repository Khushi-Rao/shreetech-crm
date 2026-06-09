import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar — fixed on the left */}
      <Sidebar />

      {/* Main content area — takes up remaining space */}
      <main className="flex-1 flex flex-col">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        </header>

        {/* Page content */}
        <div className="flex-1 p-6">
          <p className="text-gray-500">Welcome to ShreeTech CRM</p>
        </div>

      </main>
    </div>
  )
}

export default App