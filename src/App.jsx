import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MainLayout from './components/MainLayout'
import SalesManagement from './Pages/SalesManagement'
import ProductManagement from './Pages/HaircutServiceManagement'
import CustomerManagement from './Pages/CustomerManagement'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Feedback from './Pages/History/Feedback'
import VisitHistory from './Pages/History/VisitHistory'
import Laporan from './Pages/Admin/Laporan'
import HaircutServiceManagement from './Pages/HaircutServiceManagement'


import PaymentCash from './Payment/PaymentCash'
import PaymentDigital from './Payment/PaymentDigital'
import PaymentMethod from './Payment/PaymentMethod'

export function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/Penjualan" element={<SalesManagement />} />
         
           <Route path="/Pelanggan" element={<CustomerManagement/>} />
           <Route path="/Feedback" element={<Feedback/>} />
           <Route path="/VisitHistory" element={<VisitHistory/>} />
            <Route path="/Laporan" element={<Laporan/>} />
             <Route path="/HaircutServiceManagement" element={<HaircutServiceManagement/>} />
        <Route path="/penjualan" element={<SalesManagement />} />
        <Route path="/paymentcash" element={<PaymentCash />} />
        <Route path="/paymentdigital" element={<PaymentDigital />} />
        <Route path="/paymentmethod" element={<PaymentMethod/>} />
      </Route>
    </Routes>
  )
}

export default App
