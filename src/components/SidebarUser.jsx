import {
  LayoutDashboard,
  LogIn,
  UserPlus,
} from 'lucide-react';

import {
  LuGift,
  LuUserCheck,
  LuBolt,
} from 'react-icons/lu';

import {
  MdOutlineAddShoppingCart,
  MdPhoneIphone,
} from 'react-icons/md';

import { FaRegListAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // ⬅️ Tambahkan useNavigate

const userMenu = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/user/dashboard' },
  { name: 'Booking Layanan', icon: <MdOutlineAddShoppingCart />, path: '/user/booking' },
  { name: 'Loyalty Program', icon: <LuGift />, path: '/user/loyalty_program' },
  { name: 'Promo Display', icon: <LuGift />, path: '/user/promo_display' },
  { name: 'Triggered Promo Info', icon: <LuBolt />, path: '/user/triggeredpromoinfo' },
  { name: 'User Segment Info', icon: <LuUserCheck />, path: '/user/usersegmentinfo' },
  { name: 'Status Layanan', icon: <FaRegListAlt />, path: '/user/status' },
  { name: 'Notifikasi', icon: <MdPhoneIphone />, path: '/user/notification' },
];

const accountItems = [
  { name: 'Sign In', icon: <LogIn />, path: '/signin' },
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' },
];

const SidebarUser = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ⬅️ Tambahkan untuk redirect
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/signin'); // ⬅️ Redirect ke login
  };

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 block">
      <div className="text-xl font-bold mb-8 text-purple-700">User Panel</div>

      <nav className="space-y-1">
        {userMenu.map((item) => (
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

        {/* 🔴 Tombol Logout */}
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

export default SidebarUser;
