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
    <header className="bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Barbershop Logo" className="w-10 h-10 rounded-full object-cover border border-[#A67C52]" />
        <h1 className="text-lg font-bold text-[#A67C52]">V's Barbershop</h1>
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
        <button onClick={() => setNavOpen(!navOpen)}>
          <Menu className="w-6 h-6 text-[#A67C52]" />
        </button>
      </div>

      {/* Navigation Centered */}
      <nav className={`lg:flex gap-6 text-sm font-medium items-center justify-center ${
        navOpen ? 'block' : 'hidden'
      } absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 py-4 lg:p-0 shadow-lg lg:shadow-none`}>
        <NavLink to="/user/dashboard" icon={<LayoutDashboard />} active={isActive('/user/dashboard')} label="Dashboard" />
        <NavLink to="/user/promo_display" icon={<LuGift />} active={isActive('/user/promo_display')} label="Promo" />
        <NavLink to="/user/triggeredpromoinfo" icon={<LuBolt />} active={isActive('/user/triggeredpromoinfo')} label="Promo Info" />
        <NavLink to="/user/usersegmentinfo" icon={<LuUserCheck />} active={isActive('/user/usersegmentinfo')} label="Segment Info" />
        <NavLink to="/user/status" icon={<FaRegListAlt />} active={isActive('/user/status')} label="Status" />
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative">
        {/* Bell */}
        <div onClick={handleNotificationClick} className="relative cursor-pointer hidden lg:block">
          <Bell className="w-5 h-5 text-gray-600 hover:text-[#A67C52] transition" />
          {userData.notifications > 0 && (
            <span className="absolute -top-1 -right-1 inline-block w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-white"></span>
          )}
        </div>

        {/* Avatar */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={userData.avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover cursor-pointer hover:ring-2 hover:ring-[#A67C52] transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md z-50">
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
              >
                <LogOut className="w-4 h-4 mr-2 inline" /> Logout
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
    className={`flex items-center gap-1 py-2 lg:py-0 hover:text-[#A67C52] transition ${
      active ? 'text-[#A67C52] font-semibold' : 'text-gray-700'
    }`}
  >
    <span className="text-base">{icon}</span>
    {label}
  </Link>
);

export default UserNavbar;
