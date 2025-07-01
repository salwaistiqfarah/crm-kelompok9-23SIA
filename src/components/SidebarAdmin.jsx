import { useState } from 'react';
import {
  BarChart2,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import {
  LuBadgePercent,
  LuGift,
  LuUsers,
  LuZap,
} from 'react-icons/lu';
import { FaMoneyBillWave } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logobarber.jpg';

const SidebarAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;

  const [openPromo, setOpenPromo] = useState(false);
  const [openLayanan, setOpenLayanan] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <aside className="fixed top-0 left-0 bg-white w-64 h-screen shadow-md px-4 py-6 z-50 overflow-y-auto">
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={logo}
          alt="Barbershop Logo"
          className="w-20 h-20 object-cover rounded-full border border-[#A67C52]"
        />
      </div>

      {/* Menu */}
      <nav className="space-y-2 text-sm text-gray-500">
        {/* Laporan */}
        <Link
          to="/admin/weeklyForecast"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-150 ${
            isActive('/admin/weeklyForecast')
              ? 'bg-gray-100 text-gray-900 font-semibold'
              : 'hover:text-gray-900 hover:font-semibold'
          }`}
        >
          <BarChart2 className="w-5 h-5" />
          <span>Laporan</span>
        </Link>

        {/* Promo */}
        <div>
          <button
            onClick={() => setOpenPromo(!openPromo)}
            className="flex items-center justify-between w-full px-3 py-2 rounded-md transition-all duration-150 hover:text-gray-900 hover:font-semibold"
          >
            <div className="flex items-center gap-3">
              <LuBadgePercent className="w-5 h-5" />
              <span>Promo Management</span>
            </div>
            {openPromo ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {openPromo && (
            <ul className="ml-6 mt-1 space-y-1 list-disc list-inside text-gray-700">
              <li><Link to="/admin/promo_management">Promo Management</Link></li>
              <li><Link to="/admin/loyalty_program">Loyalty Program</Link></li>
              <li><Link to="/admin/triggered_promo">Triggered Promo</Link></li>
            </ul>
          )}
        </div>

        {/* Customer Segment */}
        <Link
          to="/admin/customer_segment"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-150 ${
            isActive('/admin/customer_segment')
              ? 'bg-gray-100 text-gray-900 font-semibold'
              : 'hover:text-gray-900 hover:font-semibold'
          }`}
        >
          <LuUsers className="w-5 h-5" />
          <span>Customer Segment</span>
        </Link>

        {/* Layanan */}
        <div>
          <button
            onClick={() => setOpenLayanan(!openLayanan)}
            className="flex items-center justify-between w-full px-3 py-2 rounded-md transition-all duration-150 hover:text-gray-900 hover:font-semibold"
          >
            <div className="flex items-center gap-3">
              <BsPeopleFill className="w-5 h-5" />
              <span>Layanan</span>
            </div>
            {openLayanan ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {openLayanan && (
            <ul className="ml-6 mt-1 space-y-1 list-disc list-inside text-gray-700">
              <li><Link to="/admin/servicequeue">Antrian Layanan</Link></li>
              <li><Link to="/admin/servicestatus">Status Layanan</Link></li>
              <li><Link to="/admin/BookingHistory">Booking History</Link></li>
            </ul>
          )}
        </div>

        {/* Tagihan */}
        <Link
          to="/admin/invoicepage"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-150 ${
            isActive('/admin/invoicepage')
              ? 'bg-gray-100 text-gray-900 font-semibold'
              : 'hover:text-gray-900 hover:font-semibold'
          }`}
        >
          <FaMoneyBillWave className="w-5 h-5" />
          <span>Tagihan (Invoice)</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md bg-[#8C6239] text-white hover:bg-[#A67C52] transition-all duration-150"
        >
          🚪 <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
