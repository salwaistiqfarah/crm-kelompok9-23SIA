import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const users = [
  { id: 1, name: "Raka Pratama", email: "raka@gmail.com", phone: "08123456789", level: "Silver", totalBelanja: 300000, totalOrder: 1, lastOrder: "2025-06-29" },
  { id: 2, name: "Dimas Aditya", email: "dimas@gmail.com", phone: "08129876543", level: "Gold", totalBelanja: 500000, totalOrder: 2, lastOrder: "2025-06-29" },
  { id: 3, name: "Fajar Nugraha", email: "fajar@gmail.com", phone: "08121234567", level: "Platinum", totalBelanja: 2400000, totalOrder: 3, lastOrder: "2025-06-28" },
];

const tierColors = {
  Silver: "#C0C0C0",
  Gold: "#FFD700",
  Platinum: "#E5E4E2",
};

const tierGradients = {
  Silver: "linear-gradient(135deg, #d9e1e8, #f1f5f9)",
  Gold: "linear-gradient(135deg, #FFD700, #FFA500)",
  Platinum: "linear-gradient(135deg, #e5e4e2, #f3f3f3)",
};

const CustomerSegment = () => {
  const navigate = useNavigate();

  const [segments, setSegments] = useState([
    { tier: "Silver", benefit: "Diskon 5% setiap transaksi", minPoints: 0 },
    { tier: "Gold", benefit: "Diskon 10% + free cuci rambut", minPoints: 100 },
    { tier: "Platinum", benefit: "Diskon 20% + prioritas antrean", minPoints: 200 },
  ]);

  const areaData = segments.map((seg) => ({
    name: seg.tier,
    Poin: seg.minPoints,
  }));

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-[#5B3710] mb-4">Manajemen Pelanggan</h1>

      {/* Statistik */}
      <div className="grid md:grid-cols-4 gap-4 text-sm">
        <div className="bg-white shadow rounded-xl p-4 border border-gray-200">
          <p className="text-gray-500">Total Pelanggan</p>
          <p className="text-lg font-bold">{users.length}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 border border-gray-200">
          <p className="text-gray-500">Order Terbanyak</p>
          <p className="text-lg font-bold">{users.reduce((prev, current) => (prev.totalOrder > current.totalOrder ? prev : current)).name}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 border border-gray-200">
          <p className="text-gray-500">Belanja Tertinggi</p>
          <p className="text-lg font-bold">Rp {(Math.max(...users.map(u => u.totalBelanja)) / 1000000).toFixed(1)} Jt</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 border border-gray-200">
          <p className="text-gray-500">Pelanggan Baru Bulan Ini</p>
          <p className="text-lg font-bold">0</p>
        </div>
      </div>

      {/* Grafik */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-[#5B3710]">Grafik Distribusi Poin Tier</h2>
        <div className="w-full h-56">
          <ResponsiveContainer>
            <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPoint" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FFD700" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="Poin" stroke="#FFD700" fillOpacity={1} fill="url(#colorPoint)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tabel Pelanggan */}
      <div className="bg-white shadow-xl rounded-xl p-6 border border-gray-200 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4 text-[#5B3710]">Daftar Pelanggan</h2>
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th>Nama</th>
              <th>Email</th>
              <th>Telepon</th>
              <th>Level</th>
              <th>Total Belanja</th>
              <th>Total Order</th>
              <th>Pembelian Terakhir</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td><span className={`px-2 py-1 rounded-full text-xs font-semibold`} style={{ backgroundColor: tierColors[user.level], color: '#000' }}>{user.level}</span></td>
                <td>Rp {(user.totalBelanja / 1000000).toFixed(1)} Jt</td>
                <td>{user.totalOrder}</td>
                <td>{user.lastOrder}</td>
                <td className="flex gap-2 text-lg">
                  <button className="text-blue-600 hover:text-blue-800"><FiEdit2 /></button>
                  <button className="text-red-600 hover:text-red-800"><FiTrash2 /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerSegment;
