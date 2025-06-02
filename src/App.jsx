import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MainLayout from './components/MainLayout'
import SalesManagement from './Pages/SalesManagement'
import ProductManagement from './Pages/Produk'
import CustomerManagement from './Pages/CustomerManagement'
import Feedback from './Pages/History/Feedback'
import VisitHistory from './Pages/History/VisitHistory'

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/Penjualan" element={<SalesManagement />} />
          <Route path="/Produk" element={<ProductManagement />} />
           <Route path="/Pelanggan" element={<CustomerManagement/>} />
           <Route path="/Feedback" element={<Feedback/>} />
           <Route path="/VisitHistory" element={<VisitHistory/>} />
      </Route>
    </Routes>
  )
}

export default App
