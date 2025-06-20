import {
  LayoutDashboard,
  Settings,      // untuk pengaturan akun
  LogIn,
  UserPlus,
  HistoryIcon,
} from 'lucide-react'
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { FaPeopleCarryBox } from 'react-icons/fa6'
import { MdFeedback } from 'react-icons/md';
  Percent,
  from 'lucide-react'
import { 
  LuBadgePercent,
  LuGift,
  LuUsers,
  LuZap,
  LuUserCheck,
  LuBolt,
} from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Pelanggan', icon: <BsPeopleFill/>, path: '/Pelanggan' },
  { name: 'Layanan Potong Rambut', icon: <Box />, path: '/HaircutServiceManagement' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'OrderBooking', icon: <MdFeedback />, path: '/OrderBooking' },
   { name: 'BookingHistory', icon: <HistoryIcon />, path: '/BookingHistory' },
  { name: 'Feedback', icon: <MdFeedback />, path: '/feedback' },
  { name: 'Visit History', icon: <HistoryIcon />, path: '/visithistory' },

  

   { name: 'Payment Cash', icon: <FaMoneyBillWave />, path: '/paymentcash' },
  { name: 'Payment Digital', icon: <MdPhoneIphone />, path: '/paymentdigital' },
  { name: 'Payment Method', icon: <MdPayment />, path: '/paymentmethod' },

  { name: 'Promo Management', icon: <LuBadgePercent />, path: '/Promo_Management' },
  { name: 'Loyalty Program', icon: <LuGift />, path: '/Loyalty_Program' },
  { name: 'Customer Segment', icon: <LuUsers />, path: '/Customer_Segment' },
  { name: 'TriggeredPromo', icon: <LuZap />, path: '/Triggered_Promo' },

  { name: 'Promo Display', icon: <Percent />, path: '/Promo_Display' },
  { name: 'UserSegmentInfo', icon: <LuUserCheck />, path: '/UserSegmentInfo' },
  { name: 'TriggeredPromoInfo', icon: <LuBolt />, path: '/TriggeredPromoInfo' },
]

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
]

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar