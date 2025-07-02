import { Outlet } from 'react-router-dom';
import UserNavbar from './UserNavbar'; // import komponen navbar horizontal user

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserNavbar /> {/* ⬅ Ganti SidebarUser jadi UserNavbar */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
