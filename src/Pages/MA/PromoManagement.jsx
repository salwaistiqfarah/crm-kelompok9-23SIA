import React, { useState } from "react";

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
  const [newPromo, setNewPromo] = useState({ title: "", status: "Aktif", preview: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPromo({ ...newPromo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPromo.title && newPromo.preview) {
      const newId = promos.length > 0 ? promos[promos.length - 1].id + 1 : 1;
      const updatedPromos = [...promos, { id: newId, ...newPromo }];
      setPromos(updatedPromos);
      setNewPromo({ title: "", status: "Aktif", preview: "" });
    }
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
    });
    handleDelete(id);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Kelola Promosi</h1>

      {/* Form Tambah Promo */}
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow-md space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Judul Promo</label>
          <input
            type="text"
            name="title"
            value={newPromo.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={newPromo.status}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          >
            <option value="Aktif">Aktif</option>
            <option value="Nonaktif">Nonaktif</option>
          </select>
        </div>
        <div>
          <label className="block font-medium text-gray-700">Deskripsi Preview</label>
          <textarea
            name="preview"
            value={newPromo.preview}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
          Tambah Promo
        </button>
      </form>

      {/* Daftar Promo */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promos.map((promo) => (
          <div key={promo.id} className="bg-white shadow-md rounded-2xl p-4 relative">
            <h2 className="text-xl font-semibold">{promo.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              Status:{" "}
              <span className={`font-medium ${promo.status === "Aktif" ? "text-green-600" : "text-red-500"}`}>
                {promo.status}
              </span>
            </p>
            <p className="text-sm text-gray-600 mt-1">{promo.preview}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(promo.id)}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoManagement;