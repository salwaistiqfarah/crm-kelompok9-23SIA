import {
  LayoutDashboard,
  LogIn,
  UserPlus,
  BarChart2,
} from 'lucide-react';

import {
  LuBadgePercent,
  LuGift,
  LuUsers,
  LuZap,
} from 'react-icons/lu';

import {
  FaMoneyBillWave,
  FaClipboardList,
} from 'react-icons/fa';

import { BsPeopleFill } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';

import { Link, useLocation, useNavigate } from 'react-router-dom';

// ✅ MENU UTAMA ADMIN
const adminMenu = [,
  { name: 'Laporan', icon: <BarChart2 />, path: '/admin/laporan' },
  { name: 'Promo Management', icon: <LuBadgePercent />, path: '/admin/promo_management' },
  { name: 'Loyalty Program', icon: <LuGift />, path: '/admin/loyalty_program' },
  { name: 'Customer Segment', icon: <LuUsers />, path: '/admin/customer_segment' },
  { name: 'Triggered Promo', icon: <LuZap />, path: '/admin/triggered_promo' },
  { name: 'Antrian Layanan', icon: <BsPeopleFill />, path: '/admin/servicequeue' },
  { name: 'Status Layanan', icon: <FaClipboardList />, path: '/admin/servicestatus' },
  { name: 'Tagihan (Invoice)', icon: <FaMoneyBillWave />, path: '/admin/invoicepage' },
  { name: 'Notifikasi', icon: <MdPhoneIphone />, path: '/admin/notificationpage' },
];

// ✅ MENU AKUN
const accountItems = [
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
];

const SidebarAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 block">
      <div className="text-xl font-bold mb-8 text-purple-700">Admin Panel</div>

      <nav className="space-y-1">
        {adminMenu.map((item) => (
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

        {/* 🔴 LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-100 transition mt-4"
        >
          🚪 Logout
        </button>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
