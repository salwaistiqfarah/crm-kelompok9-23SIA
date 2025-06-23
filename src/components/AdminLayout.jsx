import { Outlet } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin'; // pastikan path-nya sesuai struktur folder kamu

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarAdmin />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
