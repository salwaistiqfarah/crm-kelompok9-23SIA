import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Search } from "lucide-react";
import { Switch } from "@headlessui/react";

const initialUsers = Array.from({ length: 24 }, (_, i) => {
  const levels = ["Silver", "Gold", "Platinum"];
  const names = ["Budi", "Sari", "Andi", "Nina", "Dodi", "Alya", "Fajar", "Dewi", "Reza", "Tari", "Riko", "Dina"];
  return {
    id: i + 1,
    name: `${names[i % names.length]} ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${11 + (i % 70)}`,
    service: ["Cukur + Cuci", "Hair Coloring", "Facial", "Hair Spa"][i % 4],
    points: Math.floor(Math.random() * 300 + 50),
    status: levels[i % 3],
    active: i % 4 !== 0,
    totalVisits: Math.floor(Math.random() * 15 + 1),
    loyaltyEnabled: i % 5 !== 0,
  };
});

const COLORS = ["#FF9F40", "#4BC0C0", "#36A2EB"];
const getStatusColor = (status) => {
  switch (status) {
    case "Gold": return "#D4AF37";
    case "Silver": return "#A8A9AD";
    case "Platinum": return "#3f3f46";
    default: return "#000";
  }
};

const LoyaltyProgram = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  const pieData = [
    { name: "Active", value: users.filter((u) => u.active).length },
    { name: "Inactive", value: users.filter((u) => !u.active).length },
  ];

  const barData = ["Silver", "Gold", "Platinum"].map((status) => {
    const filtered = users.filter((u) => u.status === status);
    return {
      name: status,
      Poin: filtered.reduce((sum, u) => sum + u.points, 0),
      Kunjungan: filtered.reduce((sum, u) => sum + u.totalVisits, 0)
    };
  });

  const handleStatusChange = (id, newStatus) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: newStatus } : u))
    );
  };

  const handleLoyaltyToggle = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, loyaltyEnabled: !u.loyaltyEnabled } : u
      )
    );
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const avgPoints = Math.round(users.reduce((sum, u) => sum + u.points, 0) / users.length);
  const avgVisits = Math.round(users.reduce((sum, u) => sum + u.totalVisits, 0) / users.length);
  const activeUsers = users.filter((u) => u.loyaltyEnabled).length;
  const totalPoints = users.reduce((sum, u) => sum + u.points, 0);

  return (
    <div className="p-6 bg-[#fdfaf7] min-h-screen">
      <h1 className="text-2xl font-bold text-[#A47551] mb-6">Loyalty & Reward Management</h1>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Pelanggan Loyal</p>
          <p className="text-3xl font-bold text-[#A47551]">{activeUsers}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Total Poin Loyalty</p>
          <p className="text-2xl font-bold text-[#A47551]">{totalPoints}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Rata-rata Poin</p>
          <p className="text-2xl font-bold text-[#A47551]">{avgPoints}</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Rata-rata Kunjungan</p>
          <p className="text-2xl font-bold text-[#A47551]">{avgVisits}</p>
        </div>
      </div>

      {/* Bar Chart for Loyalty Levels */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold text-[#A47551] mb-4">Distribusi Loyalty</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Poin" fill="#36A2EB" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Kunjungan" fill="#FF9F40" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama pelanggan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#A47551]"
            />
          </div>

          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="bg-white rounded-xl shadow-md px-6 py-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.service}</p>
                    <p className="text-xs text-gray-600">Kunjungan: {user.totalVisits}x | Poin: {user.points}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-medium" style={{ color: getStatusColor(user.status) }}>{user.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Panel */}
        {selectedUser && (
          <div className="w-full md:w-[320px] bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
            <div className="flex flex-col items-center text-center">
              <img src={selectedUser.avatar} alt={selectedUser.name} className="w-24 h-24 rounded-full object-cover mb-3" />
              <h3 className="text-xl font-semibold text-[#A47551]">{selectedUser.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{selectedUser.service}</p>
              <p className="text-sm text-gray-600">Total kunjungan: <strong>{selectedUser.totalVisits}x</strong></p>
              <p className="text-sm text-gray-600 mb-3">Poin terkumpul: <strong>{selectedUser.points}</strong></p>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-gray-600">Loyalty Aktif:</span>
                <Switch
                  checked={selectedUser.loyaltyEnabled}
                  onChange={() => handleLoyaltyToggle(selectedUser.id)}
                  className={`${selectedUser.loyaltyEnabled ? 'bg-[#A47551]' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Enable loyalty</span>
                  <span
                    className={`${selectedUser.loyaltyEnabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full transition`} style={{ backgroundColor: selectedUser.loyaltyEnabled ? '#fff' : '#ffffff' }}
                  />
                </Switch>
              </div>

              <select
                value={selectedUser.status}
                onChange={(e) => handleStatusChange(selectedUser.id, e.target.value)}
                className="text-sm border border-gray-300 rounded-lg px-2 py-1 bg-[#fdfaf7]"
              >
                <option value="Silver">Silver</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
              </select>
            </div>

            <hr className="my-4" />

            <div>
              <h4 className="text-md font-semibold text-[#A47551] mb-2">Insight Aktivitas</h4>
              <ul className="text-sm text-gray-700 list-disc pl-5 space-y-1">
                <li>Menggunakan layanan {selectedUser.service} sebanyak {selectedUser.totalVisits} kali.</li>
                <li>Telah mengumpulkan {selectedUser.points} poin reward.</li>
                <li>Status pelanggan saat ini: <span style={{ color: getStatusColor(selectedUser.status) }}>{selectedUser.status}</span>.</li>
                <li>{selectedUser.loyaltyEnabled ? "Program loyalty aktif." : "Program loyalty belum diaktifkan."}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoyaltyProgram;
