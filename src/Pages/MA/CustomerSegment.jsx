import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "Toshikazu" },
  { id: 2, name: "Kawaguchi" },
  { id: 3, name: "Kristina" },
];

const CustomerSegment = () => {
  const navigate = useNavigate();

  const [segments, setSegments] = useState([
    { tier: "Silver", benefit: "Diskon 5% setiap transaksi", minPoints: 0 },
    { tier: "Gold", benefit: "Diskon 10% + free cuci rambut", minPoints: 100 },
    { tier: "Platinum", benefit: "Diskon 20% + prioritas antrean", minPoints: 200 },
  ]);

  const [newSegment, setNewSegment] = useState({ tier: "", benefit: "", minPoints: "" });
  const [selectedUser, setSelectedUser] = useState("");

  const handleChange = (e) => {
    setNewSegment({ ...newSegment, [e.target.name]: e.target.value });
  };

  const addSegment = () => {
    if (selectedUser && newSegment.tier && newSegment.benefit && newSegment.minPoints !== "") {
      const selectedName = users.find(u => u.id === parseInt(selectedUser))?.name || "Unknown";
      
      setSegments([
        ...segments,
        { ...newSegment, minPoints: parseInt(newSegment.minPoints) },
      ]);
      setNewSegment({ tier: "", benefit: "", minPoints: "" });

      // Arahkan ke halaman UserSegmentInfo
      navigate("/UserSegmentInfo", {
        state: {
          name: selectedName,
          level: newSegment.tier,
          benefits: [newSegment.benefit],
        },
      });
    }
  };

  const deleteSegment = (index) => {
    const updated = [...segments];
    updated.splice(index, 1);
    setSegments(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Kelola Segmentasi Pelanggan</h1>

      {/* Form Tambah Segmentasi */}
      <div className="bg-white shadow-md rounded-2xl p-4 space-y-4">
        <h2 className="text-lg font-semibold text-indigo-600">Tambah Segmentasi</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="border p-2 rounded-xl"
          >
            <option value="">Pilih Pengguna</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          <input
            type="text"
            name="tier"
            placeholder="Tingkat (contoh: Silver)"
            value={newSegment.tier}
            onChange={handleChange}
            className="border p-2 rounded-xl"
          />
          <input
            type="text"
            name="benefit"
            placeholder="Benefit"
            value={newSegment.benefit}
            onChange={handleChange}
            className="border p-2 rounded-xl"
          />
          <input
            type="number"
            name="minPoints"
            placeholder="Minimal Poin"
            value={newSegment.minPoints}
            onChange={handleChange}
            className="border p-2 rounded-xl"
          />
        </div>
        <button
          onClick={addSegment}
          className="mt-2 px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600"
        >
          Tambah Segmentasi
        </button>
      </div>

      {/* Daftar Segmentasi */}
      <div className="grid md:grid-cols-3 gap-6">
        {segments.map((seg, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-2xl p-4 text-center">
            <h2 className="text-xl font-bold text-indigo-600">{seg.tier}</h2>
            <p className="text-gray-500 text-sm mt-2">Minimal {seg.minPoints} poin</p>
            <p className="mt-4 text-gray-700">{seg.benefit}</p>
            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => alert("Edit belum diimplementasikan")}
                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => deleteSegment(idx)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSegment;