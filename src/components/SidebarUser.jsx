import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import logo from '../assets/logobarber.jpg';

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

const SidebarUser = () => {
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
      {/* Logo & Title */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={logo}
          alt="Barbershop Logo"
          className="w-20 h-20 object-cover rounded-full border border-[#A67C52]"
        />
       
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {userMenu.map((item) => (
         <Link
          key={item.name}
          to={item.path}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            isActive(item.path)
              ? 'bg-[#f0f0f0] !text-[#333333] font-semibold'
              : '!text-[#000000] hover:bg-gray-100'
          }`}
        >
          <span className="w-5 h-5" style={{ color: '#A67C52' }}>{item.icon}</span>
          <span className="text-sm">{item.name}</span>
        </Link>

        ))}
      </nav>

      {/* Logout */}
      <div className="mt-10">
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-100 transition"
        >
          🚪 <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarUser;
