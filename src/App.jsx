import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MainLayout from './components/MainLayout'
import SalesManagement from './Pages/SalesManagement'
import PaymentCash from './Payment/PaymentCash'
import PaymentDigital from './Payment/PaymentDigital'
import PaymentMethod from './Payment/PaymentMethod'

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/paymentcash" element={<PaymentCash />} />
        <Route path="/paymentdigital" element={<PaymentDigital />} />
        <Route path="/paymentmethod" element={<PaymentMethod/>} />
      </Route>
    </Routes>
  )
}

export default App
