import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LogOut, Bell, Menu } from 'lucide-react';
import { LuGift, LuBolt, LuUserCheck } from 'react-icons/lu';
import { FaRegListAlt } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logobarber.jpg';

const UserNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path) => location.pathname === path;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const dropdownRef = useRef();

  const [userData, setUserData] = useState({
    name: 'User',
    avatar: 'https://i.pravatar.cc/100?img=10',
    notifications: 2,
  });

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  const handleNotificationClick = () => {
    navigate('/user/notification');
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData({
        ...storedUser,
        avatar: storedUser.avatar || 'https://i.pravatar.cc/100?img=10',
        notifications: storedUser.notifications || 0,
      });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-[#e0d2c0] shadow-lg px-6 py-4 flex items-center justify-between sticky top-0 z-50 rounded-b-xl">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Barbershop Logo" className="w-12 h-12 rounded-full object-cover border-2 border-[#A67C52] shadow-md" />
        <h1 className="text-xl font-bold text-[#A67C52] tracking-tight drop-shadow-sm">Barbershop STC</h1>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setNavOpen(!navOpen)}>
          <Menu className="w-7 h-7 text-[#A67C52]" />
        </button>
      </div>

      {/* Navigation Centered */}
      <nav className={`lg:flex gap-8 text-[15px] font-medium items-center justify-center ${
        navOpen ? 'block' : 'hidden'
      } absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 py-4 lg:p-0 shadow-lg lg:shadow-none rounded-xl`}>
        <NavLink to="/user/dashboard" icon={<LayoutDashboard size={22} />} active={isActive('/user/dashboard')} label="Dashboard" />
        <NavLink to="/user/promo_display" icon={<LuGift size={22} />} active={isActive('/user/promo_display')} label="Promo" />
        <NavLink to="/user/triggeredpromoinfo" icon={<LuBolt size={22} />} active={isActive('/user/triggeredpromoinfo')} label="Promo Info" />
        <NavLink to="/user/usersegmentinfo" icon={<LuUserCheck size={22} />} active={isActive('/user/usersegmentinfo')} label="Segment Info" />
        <NavLink to="/user/status" icon={<FaRegListAlt size={22} />} active={isActive('/user/status')} label="Status" />
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-5 relative">
        {/* Bell */}
        <div onClick={handleNotificationClick} className="relative cursor-pointer hidden lg:block">
          <Bell className="w-6 h-6 text-gray-600 hover:text-[#A67C52] transition" />
          {userData.notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-600 rounded-full border-2 border-white"></span>
          )}
        </div>

        {/* Avatar */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={userData.avatar}
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-[#A67C52] transition shadow-md"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-md z-50 border w-40 animate-fade-in">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-gray-50 w-full text-left"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ to, icon, label, active }) => (
  <Link
    to={to}
    className={`flex items-center gap-2 py-2 lg:py-0 transition duration-200 rounded-md px-3 ${
      active ? 'text-[#A67C52] font-semibold bg-[#F8F3EF] shadow-inner' : 'text-gray-700 hover:text-[#A67C52] hover:bg-[#F4F1ED]'
    }`}
  >
    <span>{icon}</span>
    {label}
  </Link>
);

export default UserNavbar;