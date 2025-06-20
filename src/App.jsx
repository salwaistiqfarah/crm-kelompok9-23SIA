import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MainLayout from './components/MainLayout'
import SalesManagement from './Pages/SalesManagement'
import ProductManagement from './Pages/HaircutServiceManagement'
import CustomerManagement from './Pages/CustomerManagement'
import Login from './Pages/SFA/Account/Login'
import Register from './Pages/SFA/Account/Register'
import Feedback from './Pages/History/Feedback'
import VisitHistory from './Pages/History/VisitHistory'
import Laporan from './Pages/Admin/Laporan'
import HaircutServiceManagement from './Pages/HaircutServiceManagement'


import PaymentCash from './Payment/PaymentCash'
import PaymentDigital from './Payment/PaymentDigital'
import PaymentMethod from './Payment/PaymentMethod'
import OrderBooking from './Pages/SFA/Order/OrderBooking'
import BookingHistory from './Pages/SFA/BookingHistory/BookingHistory'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import PromoManagement from './Pages/MA/PromoManagement'
import LoyaltyProgram from './Pages/MA/LoyaltyProgram'
import CustomerSegment from './Pages/MA/CustomerSegment'
import TriggeredPromo from './Pages/MA/TriggeredPromo'
import PromoDisplay from './Pages/MA/PromoDisplay'
import UserSegmentInfo from './Pages/MA/UserSegmentInfo'
import TriggeredPromoInfo from './Pages/MA/TriggeredPromoInfo'

export function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/orderbooking" element={<OrderBooking />} />
      <Route path="/bookinghistory" element={<BookingHistory/>} />

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

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />

        {/* Tampilan untuk Admin */}
        <Route path="/Promo_Management" element={<PromoManagement/>} />
        <Route path="/Loyalty_Program" element={<LoyaltyProgram/>} />
        <Route path="/Customer_Segment" element={<CustomerSegment/>} />
        <Route path="/Triggered_Promo" element={<TriggeredPromo/>} />

        {/* Tampilan untuk User */}
        <Route path="/Promo_Display" element={<PromoDisplay/>} />
        <Route path="/UserSegmentInfo" element={<UserSegmentInfo/>} />
        <Route path="/TriggeredPromoInfo" element={<TriggeredPromoInfo/>} />
      </Route>
    </Routes>
  )
}

export default App