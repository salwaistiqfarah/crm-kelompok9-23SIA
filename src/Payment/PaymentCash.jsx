import React, { useEffect, useState } from 'react';

const PaymentCash = () => {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: '', amount: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Ambil dari localStorage saat pertama render
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cashPayments')) || [];
    setData(storedData);
  }, []);

  // Simpan ke localStorage setiap kali data berubah
  useEffect(() => {
    localStorage.setItem('cashPayments', JSON.stringify(data));
  }, [data]);

  const handleShowForm = () => {
    setFormData({ id: null, name: '', amount: '' });
    setIsEditing(false);
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];

    if (isEditing) {
      // Update data
      const updated = data.map((item) =>
        item.id === formData.id ? { ...item, name: formData.name, amount: parseInt(formData.amount) } : item
      );
      setData(updated);
    } else {
      // Tambah data baru
      const newEntry = {
        id: Date.now(),
        name: formData.name,
        amount: parseInt(formData.amount),
        date: today,
      };
      setData([...data, newEntry]);
    }

    setFormData({ id: null, name: '', amount: '' });
    setShowForm(false);
    setIsEditing(false);
  };

  const handleEdit = (entry) => {
    setFormData({ id: entry.id, name: entry.name, amount: entry.amount });
    setShowForm(true);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (confirm('Yakin ingin menghapus data ini?')) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Riwayat Pembayaran Tunai</h1>

      <button
        onClick={handleShowForm}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Bayar Tunai
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 space-y-4 bg-gray-50 p-4 rounded border">
          <h2 className="text-lg font-semibold">{isEditing ? 'Edit Pembayaran' : 'Form Pembayaran Tunai'}</h2>

          <div>
            <label className="block text-sm mb-1">Nama:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Jumlah (Rp):</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {isEditing ? 'Simpan Perubahan' : 'Simpan Pembayaran'}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setIsEditing(false);
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Batal
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Jumlah</th>
              <th className="px-4 py-2">Tanggal</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={entry.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{entry.name}</td>
                <td className="px-4 py-2">Rp{entry.amount.toLocaleString()}</td>
                <td className="px-4 py-2">{entry.date}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(entry)}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-red-600 hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center px-4 py-6 text-gray-500">
                  Belum ada pembayaran tunai.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentCash;