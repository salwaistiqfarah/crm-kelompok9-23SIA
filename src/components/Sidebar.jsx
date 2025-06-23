import {
  LayoutDashboard,
  Settings,
  LogIn,
  UserPlus,
  HistoryIcon,
  Percent,
  Box,
  BarChart2,
  ShoppingCart
} from 'lucide-react';

import {
  LuBadgePercent,
  LuGift,
  LuUsers,
  LuZap,
  LuUserCheck,
  LuBolt
} from 'react-icons/lu';

import { BsPeopleFill } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaPeopleCarryBox } from 'react-icons/fa6';
import { MdFeedback, MdPhoneIphone, MdPayment, MdOutlineAddShoppingCart } from 'react-icons/md';
import { FaRegListAlt } from 'react-icons/fa';

import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },

  // MA - Admin
  { name: 'Promo Management', icon: <LuBadgePercent />, path: '/promo_management' },
  { name: 'Loyalty Program', icon: <LuGift />, path: '/loyalty_program' },
  { name: 'Customer Segment', icon: <LuUsers />, path: '/customer_segment' },
  { name: 'Triggered Promo', icon: <LuZap />, path: '/triggered_promo' },

  // MA - User
  { name: 'Promo Display', icon: <Percent />, path: '/promo_display' },
  { name: 'User Segment Info', icon: <LuUserCheck />, path: '/usersegmentinfo' },
  { name: 'Triggered Promo Info', icon: <LuBolt />, path: '/triggeredpromoinfo' },

  // Additional Menu
  { name: 'Antrian Layanan', icon: <BsPeopleFill />, path: '/servicequeue' },
  { name: 'Status Layanan', icon: <FaPeopleCarryBox />, path: '/servicestatus' },
  { name: 'Tagihan', icon: <FaMoneyBillWave />, path: '/invoicepage' },
  { name: 'Notifikasi', icon: <MdPhoneIphone />, path: '/notificationpage' },
  { name: 'Pemesanan Layanan', icon: <MdOutlineAddShoppingCart />, path: '/booking' },
  { name: 'Status Layanan Saya', icon: <FaRegListAlt />, path: '/userstatus' },
  { name: 'Notifikasi User', icon: <MdPhoneIphone />, path: '/notificationpageuser' },
];

const accountItems = [
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' },
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' }
];

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 block">
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
  );
};

export default Sidebar;
