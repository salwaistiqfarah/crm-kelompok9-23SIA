import React, { useState } from "react";

const initialHaircuts = [
  {
    id: 1,
    name: "Buzz Cut",
    category: "Pria",
    price: 35000,
    active: true,
  },
  {
    id: 2,
    name: "Layered Cut",
    category: "Wanita",
    price: 50000,
    active: true,
  },
];

function formatCurrency(num) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(num);
}

export default function HaircutServices() {
  const [services, setServices] = useState(initialHaircuts);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddService = () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("Semua kolom harus diisi");
      return;
    }
    const newService = {
      ...formData,
      id: services.length + 1,
      price: parseFloat(formData.price),
    };
    setServices([...services, newService]);
    setFormData({ name: "", category: "", price: "", active: true });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus layanan ini?")) {
      setServices(services.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Layanan Potong Rambut</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {showForm ? "Batal Tambah Layanan" : "Tambah Layanan"}
      </button>

      {showForm && (
        <div className="mb-6 p-4 border border-gray-300 rounded bg-white shadow-sm">
          <div className="mb-2">
            <label className="block mb-1 font-medium">Nama Potongan</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Contoh: Fade, Layered, Undercut"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Kategori</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Contoh: Pria, Wanita, Anak-anak"
            />
          </div>
          <div className="mb-2">
            <label className="block mb-1 font-medium">Harga</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              min="0"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="active"
                checked={formData.active}
                onChange={handleChange}
                className="mr-2"
              />
              Tersedia
            </label>
          </div>

          <button
            onClick={handleAddService}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Simpan Layanan
          </button>
        </div>
      )}

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Harga</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.map((service) => (
              <tr key={service.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{service.name}</td>
                <td className="px-6 py-4">{service.category}</td>
                <td className="px-6 py-4 text-right">{formatCurrency(service.price)}</td>
                <td className="px-6 py-4 text-center">
                  {service.active ? (
                    <span className="inline-block px-2 py-1 text-xs text-green-800 bg-green-100 rounded">
                      Tersedia
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-1 text-xs text-gray-600 bg-gray-200 rounded">
                      Tidak Tersedia
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-center space-x-2">
                  <button
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => alert("Fitur Edit belum tersedia")}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(service.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
            {services.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Tidak ada layanan tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
