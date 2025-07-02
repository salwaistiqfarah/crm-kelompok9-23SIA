import React, { useState } from "react";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

const TriggeredPromo = () => {
  const [promos, setPromos] = useState([
    { id: 1, trigger: "Ulang Tahun", action: "Diskon 30%", active: true },
    { id: 2, trigger: "Kunjungan ke-5", action: "Cuci rambut gratis", active: false },
  ]);

  const [formData, setFormData] = useState({ trigger: "", action: "", active: true });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, active: e.target.value === "true" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.trigger || !formData.action) return;

    if (editingId) {
      setPromos((prev) =>
        prev.map((promo) =>
          promo.id === editingId ? { ...promo, ...formData } : promo
        )
      );
    } else {
      const newPromo = {
        id: Date.now(),
        ...formData,
        active: formData.active === true || formData.active === "true",
      };
      setPromos((prev) => [...prev, newPromo]);
    }

    setFormData({ trigger: "", action: "", active: true });
    setEditingId(null);
  };

  const handleEdit = (promo) => {
    setEditingId(promo.id);
    setFormData({
      trigger: promo.trigger,
      action: promo.action,
      active: promo.active,
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus promo ini?");
    if (confirmDelete) {
      setPromos((prev) => prev.filter((promo) => promo.id !== id));
      if (editingId === id) {
        setEditingId(null);
        setFormData({ trigger: "", action: "", active: true });
      }
    }
  };

  return (
    <div className="p-6 space-y-6 min-h-screen bg-[#fdfaf7]">
      <h1 className="text-2xl font-bold text-[#A47551] mb-4">Kelola Promo Otomatis</h1>

      {/* Form Tambah/Edit */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Trigger Promo</label>
            <select
              name="trigger"
              value={formData.trigger}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-[#fff8f4]"
              required
            >
              <option value="">-- Pilih Trigger --</option>
              <option value="Ulang Tahun">Ulang Tahun</option>
              <option value="Kunjungan ke-5">Kunjungan ke-5</option>
              <option value="Tidak Datang 30 Hari">Tidak Datang 30 Hari</option>
              <option value="Referral Teman">Referral Teman</option>
              <option value="Total Poin Tercapai">Total Poin Tercapai</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Aksi Promo</label>
            <input
              type="text"
              name="action"
              value={formData.action}
              onChange={handleChange}
              placeholder="Contoh: Diskon 20%"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-[#fff8f4]"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Status Promo</label>
            <select
              name="active"
              value={formData.active}
              onChange={handleCheckboxChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-[#fff8f4]"
            >
              <option value="true">Aktif</option>
              <option value="false">Nonaktif</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-2 bg-[#A47551] text-white rounded-xl hover:bg-[#8c5f3f] transition"
        >
          <PlusCircle size={18} />
          {editingId ? "Simpan Perubahan" : "Tambah Promo"}
        </button>
      </form>

      {/* Tabel Promo */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-2xl">
          <thead className="bg-[#A47551] text-white">
            <tr>
              <th className="px-6 py-3 text-left">🎯 Trigger</th>
              <th className="px-6 py-3 text-left">🎁 Aksi Promo</th>
              <th className="px-6 py-3 text-left">📌 Status</th>
              <th className="px-6 py-3 text-center">⚙️ Aksi</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo) => (
              <tr key={promo.id} className="border-t hover:bg-[#fff5f1] transition">
                <td className="px-6 py-3">{promo.trigger}</td>
                <td className="px-6 py-3">{promo.action}</td>
                <td className="px-6 py-3">
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    promo.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                  }`}>
                    {promo.active ? "Aktif" : "Nonaktif"}
                  </span>
                </td>
                <td className="px-6 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(promo)}
                    className="px-3 py-1 bg-[#FBE4E8] text-[#A47551] rounded-lg hover:bg-[#f3cfd8] transition flex items-center gap-1"
                  >
                    <Edit2 size={14} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(promo.id)}
                    className="px-3 py-1 bg-[#FBE4E8] text-[#A47551] rounded-lg hover:bg-[#f3cfd8] transition flex items-center gap-1"
                  >
                    <Trash2 size={14} /> Hapus
                  </button>
                </td>
              </tr>
            ))}
            {promos.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500 italic">
                  Belum ada promo otomatis.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TriggeredPromo;
