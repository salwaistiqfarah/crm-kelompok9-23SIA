import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MainLayout from './components/MainLayout'
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