import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import AdminLayout from './components/AdminLayout';
import UserLayout from './components/UserLayout';
import RoleBasedRoute from './components/RoleBasedRoute';

// Auth
import Login from './Pages/SFA/Login';
import Register from './Pages/SFA/Register';

// Admin Pages
import Dashboard from './Pages/SFA/Dashboard';
import CustomerManagement from './Pages/CustomerManagement';
import Feedback from './Pages/History/Feedback';
import VisitHistory from './Pages/History/VisitHistory';
import HaircutServiceManagement from './Pages/HaircutServiceManagement';
import SalesManagement from './Pages/SalesManagement';
import PaymentCash from './Pages/Payment/PaymentCash';
import PaymentDigital from './Pages/Payment/PaymentDigital';
import PaymentMethod from './Pages/Payment/PaymentMethod';
import PromoManagement from './Pages/MA/PromoManagement';
import CustomerSegment from './Pages/MA/CustomerSegment';
import TriggeredPromo from './Pages/MA/TriggeredPromo';
import ServiceQueue from './Pages/SA/ServiceQueue';
import ServiceStatus from './Pages/SA/ServiceStatus';
import InvoicePage from './Pages/SA/InvoicePage';
import NotificationPage from './Pages/SA/NotificationPage';


// User Pages
import OrderBooking from './Pages/SFA/OrderBooking';
import ServisStatusUser from './Pages/SA/ServisStatusUser';
import NotificationPageUser from './Pages/SA/NotificationPageUser';
import PromoDisplay from './Pages/MA/PromoDisplay';
import UserSegmentInfo from './Pages/MA/UserSegmentInfo';
import TriggeredPromoInfo from './Pages/MA/TriggeredPromoInfo';
import LoyaltyProgram from './Pages/MA/LoyaltyProgram';
import UserA from './Pages/UserA';
import WeeklyForecast from './Pages/SFA/WeeklyForecast';
import BookingHistory from './Pages/SFA/BookingHistory';

export function App() {
  return (
    <Routes>
      {/* Redirect root path to login */}
      <Route path="/" element={<Navigate to="/signin" />} />

      {/* Auth Pages (no layout) */}
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />

      {/* Admin Routes */}
      <Route element={<RoleBasedRoute role="admin"><AdminLayout /></RoleBasedRoute>}>
        <Route path="/admin/pelanggan" element={<CustomerManagement />} />
        <Route path="/admin/feedback" element={<Feedback />} />
        <Route path="/admin/visithistory" element={<VisitHistory />} />
        <Route path="/admin/weeklyforecast" element={<WeeklyForecast />} />
        <Route path="/admin/userA" element={<UserA />} />
        <Route path="/admin/haircutservicemanagement" element={<HaircutServiceManagement />} />
        <Route path="/admin/penjualan" element={<SalesManagement />} />
        <Route path="/admin/paymentcash" element={<PaymentCash />} />
        <Route path="/admin/paymentdigital" element={<PaymentDigital />} />
        <Route path="/admin/paymentmethod" element={<PaymentMethod />} />
        <Route path="/admin/promo_management" element={<PromoManagement />} />
        <Route path="/admin/customer_segment" element={<CustomerSegment />} />
        <Route path="/admin/triggered_promo" element={<TriggeredPromo />} />
        <Route path="/admin/servicequeue" element={<ServiceQueue />} />
        <Route path="/admin/servicestatus" element={<ServiceStatus />} />
        <Route path="/admin/invoicepage" element={<InvoicePage />} />
        <Route path="/admin/notificationpage" element={<NotificationPage />} />
        <Route path="/admin/bookinghistory" element={<BookingHistory/>} />
         <Route path="/admin/loyalty_program" element={<LoyaltyProgram />} />
      </Route>

      {/* User Routes */}
      <Route element={<RoleBasedRoute role="user"><UserLayout /></RoleBasedRoute>}>
      n <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/booking" element={<OrderBooking />} />
        <Route path="/user/status" element={<ServisStatusUser />} />
        <Route path="/user/notification" element={<NotificationPageUser />} />
        <Route path="/user/promo_display" element={<PromoDisplay />} />
        <Route path="/user/usersegmentinfo" element={<UserSegmentInfo />} />
        <Route path="/user/triggeredpromoinfo" element={<TriggeredPromoInfo />} />
        <Route path="/user/loyalty_program" element={<LoyaltyProgram />} />
      </Route>

      {/* Optional fallback route */}
      <Route path="*" element={<Navigate to="/signin" />} />
    </Routes>
  );
}

export default App;
