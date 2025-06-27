import { Search, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBellClick = () => {
    const role = localStorage.getItem('role'); // ambil role dari localStorage
    if (role === 'admin') {
      navigate('/admin/notificationpage');
    } else {
      navigate('/user/notification');
    }
  };

  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white shadow-sm border-b sticky top-0 z-20 rounded-b-2xl">
      {/* Left: Welcome */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Welocme to Admin Report !</h1>
        <p className="text-sm text-gray-500">It is the best time to manage your barbershop</p>
      </div>

      {/* Right: Search, Notification, User */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        {/* Notification */}
        <div
          className="relative cursor-pointer hover:text-purple-600"
          onClick={handleBellClick}
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer hover:text-purple-600">
          <img
            src="https://i.pinimg.com/736x/50/57/ad/5057adcbb40ecb031694d87148571311.jpg"
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-gray-700">Kelompok 9</p>
            <p className="text-xs text-gray-400">admin@barbershop.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
