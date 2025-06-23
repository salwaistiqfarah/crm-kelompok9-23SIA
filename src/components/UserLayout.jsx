import { Outlet } from 'react-router-dom';
import SidebarUser from './SidebarUser'; // pastikan path-nya sesuai

const UserLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar khusus user */}
      <SidebarUser />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
