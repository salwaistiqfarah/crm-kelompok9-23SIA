import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MainLayout from './components/MainLayout'
import SalesManagement from './Pages/SalesManagement'
import ProductManagement from './Pages/Produk'
import CustomerManagement from './Pages/CustomerManagement'

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/Penjualan" element={<SalesManagement />} />
          <Route path="/Produk" element={<ProductManagement />} />
           <Route path="/Pelanggan" element={<CustomerManagement/>} />
      </Route>
    </Routes>
  )
}

export default App
