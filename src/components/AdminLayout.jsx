import { Outlet } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin'; // pastikan path-nya sesuai struktur folder kamu

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <SidebarAdmin />

      {/* Main content */}
      <div className="ml-64 flex-1 h-screen overflow-y-auto p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
