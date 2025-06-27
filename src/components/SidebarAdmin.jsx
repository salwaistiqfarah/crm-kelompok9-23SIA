import {
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
import logo from '../assets/logobarber.jpg';

const adminMenu = [
  { name: 'Laporan', icon: <BarChart2 />, path: '/admin/weeklyForecast' },
  { name: 'Promo Management', icon: <LuBadgePercent />, path: '/admin/promo_management' },
  { name: 'Loyalty Program', icon: <LuGift />, path: '/admin/loyalty_program' },
  { name: 'Customer Segment', icon: <LuUsers />, path: '/admin/customer_segment' },
  { name: 'Triggered Promo', icon: <LuZap />, path: '/admin/triggered_promo' },
  { name: 'Antrian Layanan', icon: <BsPeopleFill />, path: '/admin/servicequeue' },
  { name: 'Status Layanan', icon: <FaClipboardList />, path: '/admin/servicestatus' },
  { name: 'Tagihan (Invoice)', icon: <FaMoneyBillWave />, path: '/admin/invoicepage' },
  // { name: 'Notifikasi', icon: <MdPhoneIphone />, path: '/admin/notificationpage' },
  { name: 'Booking History', icon: <FaClipboardList />, path: '/admin/BookingHistory' },
];

const SidebarAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <aside className="bg-white w-64 h-screen shadow-md px-4 py-6">
      {/* Logo dan Judul */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={logo}
          alt="Barbershop Logo"
          className="w-20 h-20 object-cover rounded-full border border-[#A67C52]"
        />
    
      </div>

      {/* Menu Navigasi */}
      <nav className="space-y-2">
        {adminMenu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
              isActive(item.path)
                ? 'bg-[#f0f0f0] text-[#333333] font-semibold'
                : 'text-[#000000] hover:bg-gray-100'
            }`}
          >
            <span className="w-5 h-5 text-[#A67C52]">{item.icon}</span>
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Tombol Logout */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-white-600 hover:bg-red-100 transition"
        >
          🚪 <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
