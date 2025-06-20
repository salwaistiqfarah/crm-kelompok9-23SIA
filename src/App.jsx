import { Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from './components/MainLayout';

// Pages Utama
import Dashboard from './Pages/Dashboard';
import CustomerManagement from './Pages/CustomerManagement';
import Feedback from './Pages/History/Feedback';
import VisitHistory from './Pages/History/VisitHistory';
import Laporan from './Pages/Admin/Laporan';
import HaircutServiceManagement from './Pages/HaircutServiceManagement';
import SalesManagement from './Pages/SalesManagement';

// Payment
import PaymentCash from './Pages/Payment/PaymentCash';
import PaymentDigital from './Pages/Payment/PaymentDigital';
import PaymentMethod from './Pages/Payment/PaymentMethod';

// SFA (Sales & Forecasting Automation)
import Login from './Pages/SFA/Account/Login';
import Register from './Pages/SFA/Account/Register';

// MA (Marketing Automation) - Admin
import PromoManagement from './Pages/MA/PromoManagement';
import LoyaltyProgram from './Pages/MA/LoyaltyProgram';
import CustomerSegment from './Pages/MA/CustomerSegment';
import TriggeredPromo from './Pages/MA/TriggeredPromo';

// MA (Marketing Automation) - User
import PromoDisplay from './Pages/MA/PromoDisplay';
import UserSegmentInfo from './Pages/MA/UserSegmentInfo';
import TriggeredPromoInfo from './Pages/MA/TriggeredPromoInfo';

export function App() {
  return (
    <Routes>
      {/* ✅ Halaman Login & Register (tanpa layout) */}
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      {/* ✅ Semua halaman utama dalam MainLayout */}
      <Route element={<MainLayout />}>
        {/* Dashboard & Data */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/pelanggan" element={<CustomerManagement />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/visithistory" element={<VisitHistory />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/haircutservicemanagement" element={<HaircutServiceManagement />} />
        <Route path="/penjualan" element={<SalesManagement />} />

        {/* Payment */}
        <Route path="/paymentcash" element={<PaymentCash />} />
        <Route path="/paymentdigital" element={<PaymentDigital />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />

        {/* Marketing Automation - Admin */}
        <Route path="/promo_management" element={<PromoManagement />} />
        <Route path="/loyalty_program" element={<LoyaltyProgram />} />
        <Route path="/customer_segment" element={<CustomerSegment />} />
        <Route path="/triggered_promo" element={<TriggeredPromo />} />

        {/* Marketing Automation - User */}
        <Route path="/promo_display" element={<PromoDisplay />} />
        <Route path="/usersegmentinfo" element={<UserSegmentInfo />} />
        <Route path="/triggeredpromoinfo" element={<TriggeredPromoInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
