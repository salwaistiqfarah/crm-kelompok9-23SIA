import React, { useState } from "react";
import { Plus } from "lucide-react";

const initialPromos = [
  { id: 1, title: "Diskon 20% Pelajar", status: "Aktif", preview: "Detail promo pelajar" },
  { id: 2, title: "Promo Akhir Pekan", status: "Aktif", preview: "Diskon khusus weekend" },
  { id: 3, title: "Cashback 10%", status: "Aktif", preview: "Cashback setelah potong" },
  { id: 4, title: "Diskon Member Gold", status: "Nonaktif", preview: "Khusus pelanggan gold" },
  { id: 5, title: "Gratis Cuci Rambut", status: "Aktif", preview: "Untuk pemotongan di atas Rp50.000" },
  { id: 6, title: "Refer a Friend", status: "Aktif", preview: "Dapatkan poin jika ajak teman" },
  { id: 7, title: "Promo Ulang Tahun", status: "Aktif", preview: "Khusus pelanggan berulang tahun" },
  { id: 8, title: "Diskon Gopay", status: "Nonaktif", preview: "Bayar dengan Gopay, dapat diskon" },
  { id: 9, title: "Flash Sale Hari Ini", status: "Aktif", preview: "Promo terbatas hari ini" },
];

const PromoManagement = () => {
  const [promos, setPromos] = useState(initialPromos);
  const [newPromo, setNewPromo] = useState({
    title: "",
    status: "Aktif",
    preview: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPromo({ ...newPromo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPromo.title || !newPromo.preview) return;

    const newId = promos.length > 0 ? promos[promos.length - 1].id + 1 : 1;
    const promoWithDate = {
      id: newId,
      title: newPromo.title,
      status: newPromo.status,
      preview: newPromo.preview,
      startDate: newPromo.startDate || "-",
      endDate: newPromo.endDate || "-",
    };

    setPromos([...promos, promoWithDate]);
    setNewPromo({ title: "", status: "Aktif", preview: "", startDate: "", endDate: "" });
  };

  const handleDelete = (id) => {
    setPromos(promos.filter((promo) => promo.id !== id));
  };

  const handleEdit = (id) => {
    const promoToEdit = promos.find((promo) => promo.id === id);
    setNewPromo({
      title: promoToEdit.title,
      status: promoToEdit.status,
      preview: promoToEdit.preview,
      startDate: promoToEdit.startDate !== "-" ? promoToEdit.startDate : "",
      endDate: promoToEdit.endDate !== "-" ? promoToEdit.endDate : "",
    });
    handleDelete(id);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Promo Management</h1>
          <p className="text-sm text-gray-500">Atur dan tetapkan promo untuk pelanggan</p>
        </div>
        <div
          title="Tambah Promo"
          onClick={handleSubmit}
          className="cursor-pointer text-gray-400 hover:text-gray-600"
        >
          <Plus size={20} />
        </div>
      </div>

      {/* Form */}
      <form className="bg-white p-4 rounded-xl shadow-sm grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-700 font-medium">Judul Promo</label>
          <input
            type="text"
            name="title"
            value={newPromo.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Contoh: Diskon Pelanggan Baru"
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-700 font-medium">Status</label>
          <select
            name="status"
            value={newPromo.status}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-700 font-medium">Tanggal Mulai</label>
          <input
            type="date"
            name="startDate"
            value={newPromo.startDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="text-sm text-gray-700 font-medium">Tanggal Berakhir</label>
          <input
            type="date"
            name="endDate"
            value={newPromo.endDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label className="text-sm text-gray-700 font-medium">Deskripsi Promo</label>
          <textarea
            name="preview"
            value={newPromo.preview}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg text-sm"
            placeholder="Contoh: Promo khusus pelanggan baru..."
            rows="2"
            required
          />
        </div>
      </form>

      {/* Promo List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-sm text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Judul</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Periode</th>
              <th className="px-4 py-2 text-left">Deskripsi</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo) => (
              <tr key={promo.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{promo.title}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      promo.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {promo.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-600">
                  {promo.startDate || "-"} - {promo.endDate || "-"}
                </td>
                <td className="px-4 py-2 text-gray-600">{promo.preview}</td>
                <td className="px-4 py-2 space-x-3 text-sm">
                  <span
                    onClick={() => handleEdit(promo.id)}
                    className="text-blue-500 hover:underline cursor-pointer"
                  >
                    Edit
                  </span>
                  <span
                    onClick={() => handleDelete(promo.id)}
                    className="text-gray-400 hover:underline cursor-pointer"
                  >
                    Hapus
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PromoManagement;
