import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import Followups from './pages/Followups'
import Enquiries from './pages/Enquiries'
import Quotations from './pages/Quotations'
import Orders from './pages/Orders'
import Payments from './pages/Payments'
import Products from './pages/Products'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">

        {/* Sidebar stays fixed on every page */}
        <Sidebar />

        {/* Main content area changes based on URL */}
        <main className="flex-1 flex flex-col">

          {/* Top bar */}
          <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">ShreeTech CRM</h2>
            <span className="text-sm text-gray-500">Welcome, Khushi</span>
          </header>

          {/* Page content — React Router renders the right page here */}
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/followups" element={<Followups />} />
              <Route path="/enquiries" element={<Enquiries />} />
              <Route path="/quotations" element={<Quotations />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>

        </main>
      </div>
    </BrowserRouter>
  )
}

export default App