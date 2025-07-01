import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Search } from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Budi Santoso",
    avatar: "https://i.pravatar.cc/150?img=11",
    service: "Cukur + Cuci",
    points: 120,
    status: "Silver",
    active: true,
  },
  {
    id: 2,
    name: "Sari Oktaviani",
    avatar: "https://i.pravatar.cc/150?img=12",
    service: "Hair Coloring",
    points: 210,
    status: "Gold",
    active: true,
  },
  {
    id: 3,
    name: "Andi Prakoso",
    avatar: "https://i.pravatar.cc/150?img=13",
    service: "Facial Treatment",
    points: 340,
    status: "Platinum",
    active: false,
  },
  {
    id: 4,
    name: "Nina Ayu",
    avatar: "https://i.pravatar.cc/150?img=14",
    service: "Cukur Pria",
    points: 90,
    status: "Silver",
    active: true,
  },
  {
    id: 5,
    name: "Dodi Firmansyah",
    avatar: "https://i.pravatar.cc/150?img=15",
    service: "Hair Spa",
    points: 180,
    status: "Gold",
    active: true,
  },
];

const COLORS = ["#A47551", "#D3B8A3"]; // Coklat & coklat muda

const getStatusColor = (status) => {
  switch (status) {
    case "Gold":
      return "#D4AF37";
    case "Silver":
      return "#A8A9AD";
    case "Platinum":
      return "#E5E4E2";
    default:
      return "#000";
  }
};

const LoyaltyProgram = () => {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");

  const pieData = [
    { name: "Active users", value: users.filter((u) => u.active).length },
    { name: "Inactive users", value: users.filter((u) => !u.active).length },
  ];

  const handleStatusChange = (id, newStatus) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, status: newStatus } : u))
    );
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#A47551] mb-4">Loyalty & Reward Management</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {/* User Statistics */}
        <div className="bg-white p-4 rounded-xl shadow-md col-span-1">
          <h2 className="text-sm font-semibold text-[#A47551] mb-2">User Statistics</h2>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={55}
                fill="#A47551"
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-center text-sm mt-2">
            <span className="text-[#A47551] font-bold text-xl">{users.length}</span> total users
          </p>
          <div className="flex justify-center gap-4 text-sm mt-2">
            <span className="text-[#A47551]">● Active</span>
            <span className="text-[#D3B8A3]">● Inactive</span>
          </div>
        </div>

        {/* User List */}
        <div className="col-span-3">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.service}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-1">Poin: {user.points}</p>
                <p className="text-sm mb-1">
                  Status:{" "}
                  <span
                    className="font-medium"
                    style={{ color: getStatusColor(user.status) }}
                  >
                    {user.status}
                  </span>
                </p>
                <select
                  value={user.status}
                  onChange={(e) => handleStatusChange(user.id, e.target.value)}
                  className="text-sm border border-gray-300 rounded-lg w-full mt-1 px-2 py-1"
                >
                  <option value="Silver">Silver</option>
                  <option value="Gold">Gold</option>
                  <option value="Platinum">Platinum</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Log */}
      {selectedUser && (
        <div className="bg-white p-4 rounded-xl shadow-md mt-6">
          <h2 className="text-sm font-semibold text-gray-600 mb-3">Activity Log</h2>
          <div className="flex items-center gap-3 mb-2">
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <p className="text-gray-800 font-semibold">{selectedUser.name}</p>
          </div>
          <p className="text-sm text-gray-700">
            Menggunakan layanan{" "}
            <span className="font-semibold text-[#A47551]">{selectedUser.service}</span> dan mendapatkan
            <span className="text-green-600 font-semibold"> +{Math.floor(selectedUser.points / 10)} poin</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoyaltyProgram;