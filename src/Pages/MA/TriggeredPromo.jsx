import React, { useState } from "react";

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
    if (formData.trigger.trim() === "" || formData.action.trim() === "") return;

    if (editingId) {
      setPromos((prev) =>
        prev.map((promo) =>
          promo.id === editingId ? { ...promo, ...formData, active: formData.active === "true" } : promo
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
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Kelola Promo Otomatis</h1>

      {/* Form Tambah/Edit */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-md space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Trigger Promo</label>
          <input
            type="text"
            name="trigger"
            value={formData.trigger}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Aksi Promo</label>
          <input
            type="text"
            name="action"
            value={formData.action}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Status Promo</label>
          <select
            name="active"
            value={formData.active}
            onChange={handleCheckboxChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          >
            <option value="true">Aktif</option>
            <option value="false">Nonaktif</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
          {editingId ? "Simpan Perubahan" : "Tambah Promo"}
        </button>
      </form>

      {/* Tabel Promo */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-2xl">
          <thead className="bg-indigo-100 text-indigo-700">
            <tr>
              <th className="px-4 py-3 text-left">Trigger</th>
              <th className="px-4 py-3 text-left">Aksi Promo</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo) => (
              <tr key={promo.id} className="border-t">
                <td className="px-4 py-3">{promo.trigger}</td>
                <td className="px-4 py-3">{promo.action}</td>
                <td className="px-4 py-3">
                  <span className={`font-medium ${promo.active ? "text-green-600" : "text-red-500"}`}>
                    {promo.active ? "Aktif" : "Nonaktif"}
                  </span>
                </td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => handleEdit(promo)}
                    className="px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(promo.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {promos.length === 0 && (
              <tr>
                <td colSpan="4" className="px-4 py-3 text-center text-gray-500 italic">
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