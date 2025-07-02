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

const users = [
  { id: 1, name: "Raka Pratama" },
  { id: 2, name: "Salsabila Putri" },
  { id: 3, name: "Dimas Aditya" },
  { id: 4, name: "Fajar Nugraha" },
  { id: 5, name: "Sari Amalia" },
  { id: 6, name: "Hana Nur" },
  { id: 7, name: "Andi Saputra" },
  { id: 8, name: "Yuli Wulandari" },
  { id: 9, name: "Rio Prakoso" },
];

const tierColors = {
  Silver: "#d9e1e8",
  Gold: "#FFD700", // real gold color
  Platinum: "#e5e4e2",
};

const tierGradients = {
  Silver: "linear-gradient(135deg, #d9e1e8, #f1f5f9)",
  Gold: "linear-gradient(135deg, #FFD700, #FFA500)",
  Platinum: "linear-gradient(135deg, #e5e4e2, #f3f3f3)",
};

const tierIcons = {
  Silver: "🥈",
  Gold: "🥇",
  Platinum: "👑",
};

const CustomerSegment = () => {
  const navigate = useNavigate();

  const [segments, setSegments] = useState([
    { tier: "Silver", benefit: "Diskon 5% setiap transaksi", minPoints: 0 },
    { tier: "Gold", benefit: "Diskon 10% + free cuci rambut", minPoints: 100 },
    { tier: "Platinum", benefit: "Diskon 20% + prioritas antrean", minPoints: 200 },
  ]);

  const [loyaltyLog, setLoyaltyLog] = useState([]);
  const [newSegment, setNewSegment] = useState({ tier: "", benefit: "", minPoints: "" });
  const [selectedUser, setSelectedUser] = useState("");

  const handleChange = (e) => {
    setNewSegment({ ...newSegment, [e.target.name]: e.target.value });
  };

  const addSegment = () => {
    if (selectedUser && newSegment.tier && newSegment.benefit && newSegment.minPoints !== "") {
      const selectedName = users.find(u => u.id === parseInt(selectedUser))?.name || "Unknown";

      setSegments(prev => [
        ...prev,
        { ...newSegment, minPoints: parseInt(newSegment.minPoints) },
      ]);

      setLoyaltyLog(prev => [...prev, {
        name: selectedName,
        level: newSegment.tier,
        points: parseInt(newSegment.minPoints),
        benefits: newSegment.benefit
      }]);

      setNewSegment({ tier: "", benefit: "", minPoints: "" });
      setSelectedUser("");
    }
  };

  const deleteSegment = (index) => {
    const updated = [...segments];
    updated.splice(index, 1);
    setSegments(updated);
  };

  const areaData = segments.map(seg => ({
    name: seg.tier,
    Poin: seg.minPoints,
  }));

  useEffect(() => {
    if (loyaltyLog.length > 0) {
      console.log("Update Loyalty Page:", loyaltyLog);
    }
  }, [loyaltyLog]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-[#8C6239] mb-4">Kelola Segmentasi Pelanggan</h1>

      {/* Form Tambah Segmentasi */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-[#e2cfc0]">
        <h2 className="text-xl font-semibold text-[#A1662F] mb-4">Tambah Segmentasi Pelanggan</h2>
        <div className="grid md:grid-cols-5 gap-4">
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border p-2 rounded-xl text-sm"
          >
            <option value="">Pilih Pengguna</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <select
            name="tier"
            value={newSegment.tier}
            onChange={handleChange}
            className="border p-2 rounded-xl text-sm"
          >
            <option value="">Tingkat</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
          </select>
          <input
            type="text"
            name="benefit"
            placeholder="Benefit"
            value={newSegment.benefit}
            onChange={handleChange}
            className="border p-2 rounded-xl text-sm"
          />
          <input
            type="number"
            name="minPoints"
            placeholder="Minimal Poin"
            value={newSegment.minPoints}
            onChange={handleChange}
            className="border p-2 rounded-xl text-sm"
          />
          <button
            onClick={addSegment}
            className="px-4 py-2 bg-[#A1662F] text-white rounded-xl hover:bg-[#8C6239] text-sm"
          >
            Tambah Segmentasi
          </button>
        </div>
      </div>

      {/* Area Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-[#e2cfc0]">
        <h2 className="text-lg font-semibold text-[#A1662F] mb-4">Grafik Distribusi Poin Tier</h2>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <AreaChart data={areaData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPoint" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFD700" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#FFD700" stopOpacity={0}/>
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

      {/* Daftar Segmentasi */}
      <div className="grid md:grid-cols-3 gap-6">
        {segments.map((seg, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 shadow-lg border border-[#e2cfc0]"
            style={{ background: tierGradients[seg.tier] }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-[#5B3710]">
                {seg.tier} <span className="text-sm">({seg.minPoints} poin)</span>
              </h2>
              <span className="text-sm px-2 py-1 rounded-full shadow"
                style={{ backgroundColor: tierColors[seg.tier], color: '#000' }}>
                {tierIcons[seg.tier]}
              </span>
            </div>
            <p className="text-gray-700 mb-3 text-sm">{seg.benefit}</p>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => alert("Fitur edit belum aktif")}
                className="px-3 py-1 bg-yellow-400 text-white text-sm rounded-lg hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => deleteSegment(idx)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Loyalty Log */}
      <div className="bg-white shadow rounded-xl p-6 mt-6 border border-[#e2cfc0]">
        <h2 className="text-lg font-semibold text-[#A1662F] mb-3">Riwayat Loyalty</h2>
        {loyaltyLog.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada pelanggan yang ditambahkan ke loyalty.</p>
        ) : (
          <ul className="text-sm space-y-1">
            {loyaltyLog.map((log, idx) => (
              <li key={idx} className="text-gray-700">
                <strong>{log.name}</strong> masuk ke <span className="font-semibold" style={{ color: tierColors[log.level] }}>{log.level}</span> dengan {log.points} poin — Benefit: {log.benefits}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomerSegment;